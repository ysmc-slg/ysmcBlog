---
description: Hash
autoPrev: set
---

# 哈希(Hash)

::: tip

Redis hash 是一个键值对集合。

Redis hash是一个string类型的field和value的映射表，hash特别适合用于存储对象。

类似Java里面的Map<String,Object>

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