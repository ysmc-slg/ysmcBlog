---
description: Hash
autoPrev: set
---

# 哈希(Hash)

::: tip

Redis hash 是一个键值对集合。

Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。

在 hash 结构中，key 是一个字符串，value 则是一个 key/value 键值对。

:::

## 常用命令

```java
hset <key> <field> <value>       // 给<key>集合中的  <field>键赋值<value>，也可以批量设置
hget <key1> <field>              // 从<key1>集合<field>取出 value
```
![hash](/blogImg/redis/20210528153609.png)
```java
//查看哈希表 key 中，给定域 field 是否存在。
hexists<key1><field>    
// 列出该hash集合的所有field
hkeys <key>
// 列出该hash集合的所有value
hvals <key>
// 将哈希表 key 中的域 field 的值设置为 value ，当且仅当域 field 不存在
hsetnx <key> <field> <value>
```
![hash](/blogImg/redis/20210528163037.png)


**hset**

```text
// 添加值
hset <key> <field> <value>
```

**hget**

```text
// 获取值
hget <key> <field>
```
![image-20230130232847436](https://img.zxqs.top/image-20230130232847436.png)

**hmset**

```text
// 批量添加
hmset <field> <value> [field value...]
```

**hmget**

```text
// 批量获取
hmget <key> <field> [field...]
```

![image-20230130233251857](https://img.zxqs.top/image-20230130233251857.png)

**hdel**

```text
// 删除一个或多个 field
hdel key <field> [field...]
```

![image-20230130233547759](https://img.zxqs.top/image-20230130233547759.png)

**hsetnx**

```text
hsetnx <key> <field> <value>
```

默认情况下，如果 key 和 field 相同，会覆盖掉已有的 value，hsetnx 则不会。

![image-20230130234945730](https://img.zxqs.top/image-20230130234945730.png)


**hvals**

```text
// 获取 key 中的所有 value
hvals <key>
```

**hkeys**

```text
// 获取所有的key
hkeys <key>
```

**hgetall**

```text
//同时获取所欲的 key 和 value
hgetall <key>
```

![image-20230130235648869](https://img.zxqs.top/image-20230130235648869.png)

**hexists**

```text
// 返回 field 是否存在 1 为存在，0 为不存在
hexists <key> <field>
```
![image-20230130235854203](https://img.zxqs.top/image-20230130235854203.png)

**hlen**

```text
// 返回某一个 key 中value 的数量
hlen <key>
```

**hstrlen**

```text
// 返回某一个 key 中的某一个 field 的字符串长度
hstrlen <key> <field>
```










