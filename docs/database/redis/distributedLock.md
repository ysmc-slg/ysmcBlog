---
description: redis实现分布式锁
autoPrev: springbootredis
---

# redis实现分布式锁

问题场景：

::: tip

例如：一个简单的用户操作，一个线程去修改用户的状态，首先从数据库中读出用户的状态，然后在内存中进行修改，修改完成后，再存回去。在单线程中，这个操作没有问题，但是在多线程中，由于 `读取、修改、存` 这是三个操作，不是`原子操作`，所以在多线程中，这样会出问题。

:::

对于这种问题，我们可以使用分布式锁来限制程序的并发执行。

## 基本用法

**分布式锁的思路很简单，就是进来一个线程先占位，当别的线程进来操作时，发现已经有人占位了，就会放弃或者稍后再试。**

在 redis 中，占位（锁）一般使用 `setnx` 指令，先进来的线程先占位，线程的操作执行完成后，在执行 `del` 指令释放位子（锁）。

根据上面的思路，代码如下：

```java
public class LocakTest {
    public static void main(String[] args) {
        Jedis jedis = getPool();

        try{
            long setnx = jedis.setnx("k1", "v1");
            if(setnx ==1){
                // 没人占位
                jedis.set("name","javaboy");
                System.out.println(jedis.get("name"));
                // 释放锁
                jedis.del("k1");
            } else {
                // 有人占位，停止/暂缓 操作
            }
        }catch (Exception e){
            e.printStackTrace();
        } finally {
            if(jedis != null){
                jedis.close();
            }
        }

    }

    public static Jedis getPool(){
        // 1. 构建一个 jedis 连接池
        JedisPool jedisPool = new JedisPool("127.0.0.1", 6379);
        Jedis resource = jedisPool.getResource();
        resource.auth("123456");
        return resource;

    }
}
```

上面的代码存在一个小小的问题：如果代码业务执行的过程中抛异常或者挂了，这样会导致 `del` 指令没有被调用，这样，`k1` 无法释放，后面来的请求全部堵塞在这里，锁也永远得不到释放。要解决这个问题，我们可以给锁添加一个`过期时间`，确保锁在一定的时间之后，能够得到释放。

改进后的代码如下：

```java
public class LocakTest {
    public static void main(String[] args) {
        Jedis jedis = getPool();

        try{
            long setnx = jedis.setnx("k1", "v1");
            if(setnx ==1){
                // 给锁设置一个过期时间，防止应用在运行过程中抛出异常导致锁无法及时得到释放
                jedis.expire("k1",5);
                // 没人占位
                jedis.set("name","javaboy");

                System.out.println(jedis.get("name"));
                // 释放锁
                jedis.del("k1");
            } else {
                // 有人占位，停止/暂缓 操作
            }
        }catch (Exception e){
            e.printStackTrace();
        } finally {
            if(jedis != null){
                jedis.close();
            }
        }

    }

    public static Jedis getPool(){
        // 1. 构建一个 jedis 连接池
        JedisPool jedisPool = new JedisPool("127.0.0.1", 6379);
        Jedis resource = jedisPool.getResource();
        resource.auth("123456");
        return resource;

    }
}
```
没有什么更改，只是给 `k1`（锁）设置了过期时间。

但是这样改造后，还有一个问题，就是在获取锁和设置过期时间之间如果服务器突然挂掉了，这时锁被占用，但是还没有设置过期时间，锁无法及时得到释放也会造成死锁，因为获取锁和设置过期时间是两个操作，不具备原子性。

为了解决这个问题，从 Redis2.8 开始，setnx 和 expire 可以通过一个命令一起来执行了，我们对上述代码再做改进：

```java
public class LocakTest {
    public static void main(String[] args) {
        Jedis jedis = getPool();

        try{
            String set = jedis.set("k1", "v1", new SetParams().nx().ex(5));
            if(set !=null && "OK".equals(set)){
                // 给锁设置一个过期时间，防止应用在运行过程中抛出异常导致锁无法及时得到释放
                jedis.expire("k1",5);
                // 没人占位
                jedis.set("name","javaboy");

                System.out.println(jedis.get("name"));
                // 释放锁
                jedis.del("k1");
            } else {
                // 有人占位，停止/暂缓 操作
            }
        }catch (Exception e){
            e.printStackTrace();
        } finally {
            if(jedis != null){
                jedis.close();
            }
        }

    }

    public static Jedis getPool(){
        // 1. 构建一个 jedis 连接池
        JedisPool jedisPool = new JedisPool("127.0.0.1", 6379);
        Jedis resource = jedisPool.getResource();
        resource.auth("123456");
        return resource;

    }
}
```

在获取锁的时候就设置过期时间，`set` 命令还有其他参数。

SetParams:

XX: 数据存在时赋值.

NX: 数据不存在时赋值

EX: 添加超时时间单位秒

PX: 添加超时时间单位毫秒

## 超时问题

上面的代码，为了防止业务代码在执行的时候抛出异常，我们给每一个锁添加了一个超时时间，超时之后，锁会被自动释放，但是这也带来了一个新的问题：如果要执行的业务非常耗时，可能会出现紊乱。

举个例子：第一个线程首先获取到锁，然后开始执行业务代码，但是业务代码比较耗时，执行了 8 秒，这样，会在第一个线程的任务还未执行成功锁就会被释放了，此时第二个线程会获取到锁开始执行，在第二个线程刚执行了 3 秒，第一个线程也执行完了，此时第一个线程会释放锁，但是注意，它释放的第二个线程的锁，释放之后，第三个线程进来...

对于这个问题，我们可以从两个角度入手：

* 尽量避免在获取锁之后，执行耗时操作。
* 可以在锁上面做文章，将锁的 `value` 设置为一个随机字符串，每次释放锁的时候，都去比较随机字符串是否一致，如果一致，再去释放，否则，不释放。

对于第二种方案，由于释放锁的时候，要去查看锁的 value，第二个比较 value 的值是否正确，第三步释放锁，有三个步骤，很明显三个步骤不具备原子性，为了解决这个问题，我们得引入 Lua 脚本。

Lua 脚本的优势：

* 使用方便，Redis 中内置了对 Lua 脚本的支持。
* Lua 脚本可以在 Redis 服务端原子的执行多个 Redis 命令。
* 由于网络在很大程度上会影响到 Redis 性能，而使用 Lua 脚本可以让多个命令一次执行，可以有效解决网络给 Redis 带来的性能问题。

在 Redis 中，使用 Lua 脚本，大致上两种思路：
1. 提前在 Redis 服务端写好 Lua 脚本，然后在 Java 客户端去调用脚本（推荐）。
2. 可以直接在 Java 端去写 Lua 脚本，写好之后，需要执行时，每次将脚本发送到 Redis 上去执行。

这里我是用的是win环境下的redis，首先在redis目录中创建一个文件 `releasewherevalueequal.lua` 脚本内容如下：

```text
if redis.call("get",KEYS[1])==ARGV[1] then
return redis.call("del",KEYS[1])
else
return 0
end
```

首先执行 `get` 命令判断锁的值，是否和当前线程的锁的值是否一致，如果一致就释放，否则不做处理。

`KEYS` 是 key 值，是一个集合，`ARGV` 是其他参数，也是一个集合。


接下来，将 lua 脚本文件缓存到redis中。

```text
type releasewherevalueequal.lua | redis-cli -a 123456 script load --pipe
```

script load，并不会立即执行 lua 脚本，会发挥一个 SHA1 校验和。

![image-20230201235544712](https://img.zxqs.top/20230201235547.png)

在脚本被加入到缓存之后，通过 `EVALSHA` 命令，可以使用脚本的 SHA1 校验和来调用这个脚本，代码如下

```java
public class LocakTest {
    public static void main(String[] args) {
        Jedis jedis = getPool();
        String value = UUID.randomUUID().toString();
        try{
            String set = jedis.set("k1", value, new SetParams().nx().ex(5));
            if(set !=null && "OK".equals(set)){
                // 给锁设置一个过期时间，防止应用在运行过程中抛出异常导致锁无法及时得到释放
                jedis.expire("k1",5);
                // 没人占位
                jedis.set("name","javaboy");

                System.out.println(jedis.get("name"));
                // 释放锁
                jedis.evalsha("SHA1 校验和", Arrays.asList("k1"),Arrays.asList(value));
            } else {
                System.out.println("没有拿到");
            }
        }catch (Exception e){
            e.printStackTrace();
        } finally {
            if(jedis != null){
                jedis.close();
            }
        }

    }

    public static Jedis getPool(){
        // 1. 构建一个 jedis 连接池
        JedisPool jedisPool = new JedisPool("127.0.0.1", 6379);
        Jedis resource = jedisPool.getResource();
        resource.auth("123456");
        return resource;

    }
}

```


