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


