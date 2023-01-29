---
description: string（字符串）
autoPrev: key
---

# string（字符串）

Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。

## 简介
::: tip

String 是 Redis 里边最最简单的一种数据结构。在 Redis 中，所以的 key 都是字符串，但是，不同的 key 对应的 value 则具备不同的数据结构，我们所说的五种不同的数据类型，主要是指 value 的数据类型不同。

Redis 中的字符串是动态字符串，内部是可以修改的，像 Java 中的 StringBuffer，它采用分配冗余空间的方式来减少内存的频繁分配。在 Redis 内部结构中，一般实际分配的内存会大于需要的内存，当字符串小于 1M 的时候，扩容都是在现有的空间基础上加倍，扩容每次扩 1M 空间，最大 512M

:::

## 常用命令

### set

给一个key赋值

```text
set <key> <value>
```

通过 `get <key>` 来获取对应 key 的值。

### append 

```text
append <key> <value>
```

使用 append 命令是，如果 key 已经存在，则直接在对应的 value 后追加值，否则就创建新的键值对。

![image-20230129164414629](https://img.zxqs.top/20230129164423.png)

### decr

```text
decr <key>
```

可以实现对 value 的减1操作（前提 value 是一个数字），如果 value 不是数字，会报错，如果 value 不存在，则会给一个默认的值 0，在默认值的基础上减一

![image-20230129164912496](https://img.zxqs.top/20230129164913.png)

### decrby

```text
decrby <key> <num>
```
和 decr 类似，但是可以自己设置步长，该命令第二个参数就是步长。就是直接减去多少

![image-20230129165223088](https://img.zxqs.top/20230129165224.png)

### getrange

```text
getrange <key> <start> <end>
```

getrange 可以用来返回 key 对应的 value 的子串，这有点类似于Java 里边的 substring。这个命令第二个和第三个参数就是截取的起始和终止位置，其中，-1 表示最后一个字符串，-2 表示倒数第二个字符串，以此类推...

![image-20230129224625483](https://img.zxqs.top/image-20230129224625483.png)

### getset

```text
getset <key> <value>
```

![image-20230129224746793](https://img.zxqs.top/image-20230129224746793.png)

获取并更新某一个 key。

### incr、incrby

和 `decr、decrby` 相反，自增

### incrbyfloat

和 incrby 类似，但是自增的步长可以设置为浮点数。

### mget 和 mset

```text
mset <key> <value> <key> <value>...
mget <key> <key> <key>...
```

![image-20230129225217362](https://img.zxqs.top/image-20230129225217362.png)

批量获取和批量存储。

### setex

```text
setex <key> <second> <value>
```

在给 key 设置 value 的同时，还设置过期时间。

### ttl 

```text
ttl <key>
```

查看 key 的有限期限，-1为未设置过期时间，-2为过期。

![image-20230129225947052](https://img.zxqs.top/image-20230129225947052.png)

### psetex

```text
setex <key> <millisecond> <value>
```

和 setex 类似，只不过这里的时间单位是毫秒。

### setnx

```text
setnx <key> <value>
```

默认情况下， set 命令会覆盖已经存在的 key，setnx 则不会。


### msetnx

批量设置

### setrange

```text
setrange <key> <index> <value>
```

对指定位置的数据进行替换，如果 `index` 超过字符长度，中间使用 0 进行填充，案例如下：

![image-20230129231208101](https://img.zxqs.top/image-20230129231208101.png)





