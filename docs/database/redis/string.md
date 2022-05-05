---
title: string（字符串）
autoPrev: key
---

Redis支持五种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。

## 简介
::: tip

String是Redis最基本的类型，你可以理解成与Memcached一模一样的类型，一个key对应一个value。
String类型是二进制安全的。意味着Redis的string可以包含任何数据。比如jpg图片或者序列化的对象。
String类型是Redis最基本的数据类型，一个Redis中字符串value最多可以是512M

:::

## 数据结构
String的数据结构为简单动态字符串(Simple Dynamic String,缩写SDS)。是可以修改的字符串，内部结构实现上类似于Java的ArrayList，采用预分配冗余空间的方式来减少内存的频繁分配.

![图片1](/blogImg/图片1.png)

如图中所示，内部为当前字符串实际分配的空间capacity一般要高于实际字符串长度len。当字符串长度小于1M时，扩容都是加倍现有的空间，如果超过1M，扩容时一次只会多扩1M的空间。需要注意的是字符串最大长度为512M。

## 常用命令
```redis
set <key> <value>                  添加键值对
get <key>                          查询对应的键值
append <key> <value>               将指定的value追加到原值的末尾
strlen <key>                       获取值的长度
```

```redis
incr <key>               将key中存储的数字值增1
decr <key>               将key中存储的数字值减1
incrby <key> <步长>      增加key中存储的数字，自定义步长
decrby <key> <步长>      获取值的长度
```
**注意**：这里所有key的值必须都是数字

```redis
getrange <key> <num> <num>       获取指定区间范围内的值，类似between....and的关系。
setrange <key> <num> <value>     设置指定区间范围内的值
```
![20210526121800.png](/blogImg/20210526121800.png)

![20210526122014.png](/blogImg/20210526122014.png)

```redis
setex <key> <num> <value>     添加一个key 赋值，并且指定存活时间
setnx <key> <value>          再添加时先判断key是否存在，存在返回0，不存在就添加
```
![20210526122914.png](/blogImg/20210526122914.png)

```redis
同时设置一个或多个 key-value对
mset  <key1> <value1> <key2> <value2>  .....          


同时获取一个或多个 value  
mget  <key1> <key2> <key3>  .....                      


同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在。
msetnx <key1> <value1> <key2> <value2>  .....   
```
