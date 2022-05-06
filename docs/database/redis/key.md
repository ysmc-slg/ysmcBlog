---
description: redis键(key)常用命令
autoPrev: install
---

# redis键(key)常用命令

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
