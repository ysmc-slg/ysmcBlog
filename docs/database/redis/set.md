---
description: set
autoPrev: list
---

# Set

:::tip

Redis set对外提供的功能与list类似，是一个列表的功能，特殊之处在于set是可以`自动排重`的，当你需要存储一个列表数据，又不希望出现重复数据时，set是一个很好的选择，并且set提供了`判断某个成员是否在一个set集合内`命令，这个也是list所不能提供的。

Redis的Set是string类型的无序集合。它底层其实是一个value为null的hash表

:::

## 常用命令
```java
// 将一个或多个 member 元素加入到集合 key 中，已经存在的 member 元素将被忽略
sadd <key><value1><value2> ..... 
```
![sadd](/blogImg/redis/20210528101002.png)

```java
smembers <key>               //取出该集合的所有值。
sismember <key> <value>      //判断集合<key>是否为含有该<value>值，有1，没有0
scard <key>                  //返回该集合的元素个数
srem <key> <value1> <value2> //删除集合中的某些元素。
spop <key> [count]           //随机从该集合中获取值，count是获取几个，不写默认一个 
```
![sadd2](/blogImg/redis/20210528101832.png)
```java
smove <key1> <key2> <value>           // 把key1中的value移动到key2中
```
![sadd3](/blogImg/redis/20210528104336.png)
```java
sinter <key1> <key2> ...             // 返回集合的交集元素
sunion <key1> <key2>...             // 返回集合的并集元素
sdiff <key1> <key2>...              // 返回集合的差集元素(key1中的，不包含key2中的)
```
![sadd4](/blogImg/redis/20210528105707.png)

