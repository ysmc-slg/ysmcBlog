---
title: String数据类型常用命令
autoPrev: key
---

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
**注意：**这里所有key的值必须都是数字

```redis
getrange <key> <num> <num>       获取指定区间范围内的值，类似between....and的关系。
setrange <key> <num> <value>     设置指定区间范围内的值
```
