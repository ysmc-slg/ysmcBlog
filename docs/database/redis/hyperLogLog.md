---
description: HyperLogLog
autoPrev: bit
---

# HyperLogLog

一般我们评估一个网站的访问量，有几个主要的参数：

* PV（Page View）：页面的浏览量
* UV（User View）：访问的用户

如果有这样一个需求：统计系统页面的访问量（pv），和访问用户（uv），此时该怎样去设计。

pv 比较简单，可以直接通过 Redis 计数器就能实现，把这个技术区的key后缀加上当它的日期，这样一个请求过来，就可以通过执行incr、incrby指令统计所有PV。

但是 uv 就不一样，uv 涉及到另外一个问题，去重。一个用户在当天（或一个时间段）不管登录多少次都要算作一次。

1. 如果将存储在数据库表中，使用`distinct count` 计算不重复的个数，随着数据量的增加，存储数据的空间占用越来越大，浪费空间。
2. 使用Redis的set、hash、bitmaps等数据结构来存储，比如使用set，我们可以使用用户ID，通过sadd加入set集合。这样统计的性能比较慢，虽然可以通过异步方式统计，但是性能并不理想

**因此针对UV的统计，我们将会考虑使用Redis的新数据类型 HyperLogLog.**

::: tip

HyperLogLog 是用来做基数统计的算法，它提供不太精确的去重计数方案，标准误差是`0.81%`，对于UV这种统计来说这样的误差范围是被允许的。

HyperLogLog 的优点在于，输入元素的数量或者体积非常大时，基数计算的存储空间是固定的。在 Redis 中，每个 HyperLogLog 键只需要花费 12KB 内存，就可以计算接近 2^64 个不同的基数。

`HyperLogLog 只能统计基数的大小（也就是数据集的大小，集合的个数），他不能存储元素的本身，不能向set集合那样存储元素本身，也就是说无法返回元素。`
:::

## 基础命令

HyperLogLog 主要提供了两个命令：`pfadd` 和 `pfcount`。

**pfadd：**

```text
pfadd key element [element...]
```
pfadd 用来添加记录，添加过程中重复的记录会自动去重，添加成功返回 1，失败返回 0

**pfcount：**


```text
pfcount key [key...]
```
命令作用于单个键时，返回存储在给定键的HyperLogLog的近似基数，如果键不存在，则返回0；

当命令作用于多个键时，将多个 key 合并到，返回去重之后的个数。

![image-20230205170343582](https://img.zxqs.top/image-20230205170343582.png)

## 代码实现

实现方式很多，spring项目中可以使用 lua 脚本，也可以使用 RedisTemplate。也可以使用 jedis。

**spring项目中实现：**

很简单知识要一行代码就可以：

```java
// 添加数据
stringRedisTemplate.opsForHyperLogLog().add(key, obj)
// 统计数据
stringRedisTemplate.opsForHyperLogLog().size(key);
```

具体整合 redis，请看这篇文章 [springboot整合redis](./springbootredis.html#概念)


**使用Jedis：**

```java
public class TestJedis {
    public static void main(String[] args) {
        Jedis jedis = new Jedis("192.168.96.128",6379);
        jedis.auth("123456");
        
        for (int i = 0; i < 1000; i++) {
            jedis.pfadd("uv", "u" + i, "u" + (i + 1));
            
        }
        long uv = jedis.pfcount("uv");
        System.out.println(uv);
    }
}

// 结果：994
```

真正存入的值去重之后是 `1001`，但是结果是 994，有误差，但是在可以接受的范围内。


