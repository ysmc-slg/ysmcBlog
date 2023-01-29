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




