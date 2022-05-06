---
description: Zset
autoPrev: hash
---

# Zset(sorted set)
:::tip

Redis有序集合zset与普通集合set非常相似，是一个没有重复元素的字符串集合。

不同之处是zset的每个成员都关联了一个`评分（score）`,这个评分（score）被用来按照从最低分到最高分的方式排序集合中的成员。集合的成员是唯一的，但是评分可以是重复了 。

因为元素是有序的, 所以你也可以很快的根据评分（score）或者次序（position）来获取一个范围的元素。

访问有序集合的中间元素也是非常快的,因此你能够使用有序集合作为一个没有重复成员的智能列表。

:::

## 常用命令
```java
// 将一个或多个 member 元素及其 score 值加入到有序集 key 当中。
zadd  <key> <score1> <value1> <score2> <value2>…

// 返回有序集 key 中，下标在<start><stop>之间的元素,WITHSCORES可以让分数一起和值返回到结果集
zrange <key> <start> <stop>  [WITHSCORES] 
```
![zset](/blogImg/redis/20210531113039.png)

```java
// 返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。有序集成员按 score 值递增(从小到大)次序排列。 

zrangebyscore <key> min max [withscores]
```
![zset1](/blogImg/redis/20210531114031.png)

```java
// 同上，改为从大到小排列。
zrevrangebyscore <key> max min [withscores]
```
![zset2](/blogImg/redis/20210531114653.png)
```java
zincrby <key> <increment> <member>    //为元素的score加上增量
zrem  <key> <member>                  //删除该集合下，指定值的元素  
zcount <key> <min> <max>             //统计该集合，分数区间内的元素个数 
zrank <key> <member>                   //返回该值在集合中的排名，从0开始。
```
![zset3](/blogImg/redis/20210531132835.png)