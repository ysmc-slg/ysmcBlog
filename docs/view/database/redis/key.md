---
title: redis键(key)常用命令
autoPrev: install
---

```redis
keys *                     查看库中所有的key
exists <key>               判断某个key是否存在
expire <key> <秒钟>        为给定的key设置过期时间
ttl <key>                  查看还有多少秒过期，-1表示永不过期，-2表示已经过期
type <key>                 查看key是什么类型  
del <key>                  删除指定的key数据
unlink <key>               根据value选择非阻塞删除
dbsize                     查看当前数据库的key数量
flushdb                    清空数据库
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