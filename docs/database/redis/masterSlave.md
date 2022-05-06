---
description: Redis主从复制
autoPrev: aof
---
通过前面两节我们知道，可以使用持久化将数据从内存保存到硬盘上。如果服务器硬盘也坏了怎么办呢？此时可以使用到主从复制，也可以做`读写分离，性能扩展`

## 主从复制原理

Redis的主从结构可以采用一主多从或者级联结构，Redis主从复制可以根据是否是全量分为`全量同步`和`增量同步`。

![slave](/blogImg/redis/20210608124219.png)

**全量复制**

Redis全量复制一般发生在`Slave初始化阶段`，这时Slave需要将Master上的所有数据都复制一份。

* 从服务器连接主服务器，发送SYNC命令；
* 主服务器接收到SYNC命名后，开始执行BGSAVE命令生成RDB文件并使用缓冲区记录此后执行的所有写命令；
* 主服务器BGSAVE执行完后，向所有从服务器发送快照文件。同时从服务器收到文件对旧文件进行覆盖
* 主服务器快照发送完毕后开始向从服务器发送缓冲区中的写命令；
* 从服务器完成对快照的载入，开始接收命令请求，并执行来自主服务器缓冲区的写命令；

![slave2](/blogImg/redis/20210608133211.png)

此时从服务器的初始化工作完成，后续主服务器发送命令给从服务器的过程就是`增量复制`

**增量复制**

Redis增量复制是指`Slave`初始化后开始正常工作时主服务器发生的写操作同步到从服务器的过程。 
增量复制的过程主要是主服务器每执行一个写命令就会向从服务器发送相同的写命令，从服务器接收并执行收到的写命令。

## 一主多从
首先创建一个文件夹，将`redis.conf`复制进来，同时创建三个文件`redis6379.conf`，`redis6380.conf`，`redis6381.conf`。我将`redis6379.conf`设置为master，其他为slave。

![slave3](/blogImg/redis/20210610160547.png)
```java
include /myredis/redis.conf
pidfile /var/run/redis_6379.pid
port 6379
dbfilename dump6379.rdb
```
include：引入文件，因为只需要更改几条数据，没有修改的就按照`redis.conf`配置。

pidfile：修改pidfile的存储位置

port：端口号

dbfilename：rdb文件名称，路径按`redis.conf`中的配置

`修改6380，将pidfile的路径改为6380，port改成6380，dbfilename为6380即可。同理6381也是。`

**注意**：如果redis设置了密码，salve还需要加上`masterauth password`

如图：

**6379**

![image-20210610162010455](/blogImg/redis/20210610162011.png)

**6380**

![](/blogImg/redis/20210610162510.png)

**6381**

![image-20210610162543943](/blogImg/redis/20210610162545.png)

分别启动三个redis服务，如图：

![image-20210615103534726](/blogImg/redis/20210615103543.png)

### 配置从服务
进入redis-cli，使用`slaveof <ip> <port>`命令将`6380`和`6381`端口设置为`slave`，使用`slaveof no one`取消设置

```java
slaveof 127.0.0.1 6380
slaveof 127.0.0.1 6381
```

使用`info replication`查看相关信息

![20210615113338](/blogImg/redis/20210615113338.png)

如图所示，此时6380和6381就成为6379的从服务器。

## 常用知识点

1. 读写分离：主机执行写操作，从机执行读操作
2. 从机挂掉或重启，需要重新执行`slaveof <ip> <port>`命令，才能成为从机
3. 主机挂掉，执行重启就行。不需要其他操作

### 级联结构
上一个Slave可以是下一个slave的Master，Slave同样可以接收其他 slaves的连接和同步请求，那么该slave作为了链条中下一个的master, 可以有效减轻master的写压力,去中心化降低风险。

![slave](/blogImg/redis/20210608124219.png)

这里我就把6381当做6380的slave

![slave](/blogImg/redis/20210616143855.png)

**注意：**如果6380挂了，那么6381就不能再同步数据
