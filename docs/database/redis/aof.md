---
title: Redis持久化之-AOF
autoPrev: rdb
---

## 简介
以日志的形式来记录`每个写操作`，将Redis执行过的所有写指令记录下来（读操作不记录），`只许追加文件但不可以改写文件`，redis启动之初会读取该文件重新构建数据，换言之，redis重启的话根据日志文件的内容将写指令从前到后执行一次已完成数据的恢复工作。

文件路径和名称跟rdb差不多，也是默认在哪个路径下启动的redis，就在那个路径下创建一个`appendonly.aof`文件

## AOF持久化流程
* 客户端的请求写命令会被append追加到AOF缓冲区内；
* AOF缓冲区根据AOF持久化策略[always,everysec,no]将操作sync同步到磁盘的AOF文件中
* AOF文件大小超过重写策略或手动重写时，会对AOF文件rewrite重写，压缩AOF文件容量；
* Redis服务重启时，会重新load加载AOF文件中的写操作达到数据恢复的目的；

![aof](/blogImg/redis/20210603104758.png)

## AOF相关的配置

### appendonly，appendfilename
appendfilename：就是文件名这里不多说。

appendonly：aof 默认是不开启的，需要在`redis.conf`中开启。将`appendonly`改成 yes

![aof](/blogImg/redis/20210603105810.png)

重启redis就会看到启动路径下有一个`appendonly.aof`文件

![aof](/blogImg/redis/20210603110300.png)

**注意**：如图，dump.rdb和appendonly.aof同时存在，也就是说我rdb和aof同时开启了。那么有两个文件redis重启之后，会读哪个文件呢？

为了验证，我们要把rdb和aof都打开，然后添加一些数据

![aof](/blogImg/redis/20210603111635.png)

然后进入`appendonly.aof`随便输入一些内容，造成语法错误，使用`kill`停止redis 然后重启，如果重启不成功或报错，那么就证明，先从`appendonly.aof`中读内容

![aof](/blogImg/redis/20210603112446.png)

如图，redis没启动，从侧面证明，当rdb和aof同时存在时，重启redis先读`appendonly.aof`的内容。由于我们在文件中随便写了一些内容，怎样将错误的内容删除，恢复文件中的数据呢？

在redis安装目录中有一个`redis-check-aof`文件，在安装目录执行：
```java
redis-check-aof --fix appendonly.aof
```
![aof](/blogImg/redis/20210603140744.png)

然后重启redis就可以恢复数据。

**原理**：该命令会将文件中不符合redis的命令全部删除，已达到修复的目的。同理使用`redis-check-rdb`也可以恢复rdb文件

### Appendfsync(AOF同步频率)
简单来说就是，保存`写操作`的时间，多久记录一次。有三个值分别是：

* always：同步持久化，每次发生数据变更会立即记录到磁盘，性能较差但数据完整性比较好
* everysec：出厂默认推荐，异步操作，每秒记录，如果一秒内宕机，有数据丢失
* no：不同步

![aof](/blogImg/redis/20210603114317.png)

## Rewrite(重写)
AOF采用文件追加方式，文件会越来越大，为避免出现此种情况，新增了重写机制，当AOF文件的大小超过所设定的阈值时，Redis就会启动AOF文件的内容压缩，只保留可以恢复数据的最小指令集。

### 原理
AOF文件持续增长而过大时，会fork出一条新进程来将文件重写（也是先写临时文件最后在rename），遍历新进程的内存中数据，每条记录有一条的Set语句。重写aof文件的操作，并没有读取旧的aof文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的aof文件，这点和快照有点类似。

### 触发机制
1. AOF重写可以由用户使用`bgrewriteaof`命令手动触发。
2. 在配置文件中通过下面配置可以设置`rewrite`，实现自动触发，也就是系统自动调用`bgrewriteaof`

    1. no-appendfsync-on-rewrite：为`yes`不写入aof文件只写入缓存，用户请求不会阻塞，但是在这段时间如果宕机会丢失这段时间的缓存数据降低数据安全性，提高性能）。为`no` 还是会把数据往磁盘里刷，但是遇到重写操作，可能会发生阻塞（数据安全，但是性能降低）。一般设置成no
    2. auto-aof-rewrite-min-size：设置重写的基准值，默认是64MB。达到这个值开始重写。
    3. auto-aof-rewrite-perentage：设置重写的基准值，默认文件达到100%时开始重写（现在文件是原来重写后文件的2倍时触发）。

![aof](/blogImg/redis/20210603132717.png)

系统载入时或者上次重写完毕时，Redis会记录此时AOF大小，设为base_size,

如果Redis的`AOF当前大小>= base_size +base_size*100% `(默认)且`当前大小>=64mb(默认)`的情况下，Redis会对AOF进行重写。 

### 重写流程
* bgrewriteaof触发重写，判断是否当前有bgsave或bgrewriteaof在运行，如果有，则等待该命令结束后再继续执行。
* 主进程fork出子进程执行重写操作，保证主进程不会阻塞
* 子进程遍历redis内存中数据到临时文件，客户端的写请求同时写入aof_buf缓冲区和aof_rewrite_buf重写缓冲区保证原AOF文件完整以及新AOF文件生成期间的新的数据修改动作不会丢失。
  * 子进程写完新的AOF文件后，向主进程发信号，父进程更新统计信息
  * 主进程把aof_rewrite_buf中的数据写入到新的AOF文件。
* 使用新的AOF文件覆盖旧的AOF文件，完成AOF重写。

![aof](/blogImg/redis/20210603135519.png)

## 优势和劣势

**优势**：
*  备份机制更稳健，丢失数据概率更低。

*  可读的日志文本，通过操作AOF稳健，可以处理误操作。

**劣势**：
* 比起RDB占用更多的磁盘空间。

* 恢复备份速度要慢。

* 每次读写都同步的话，有一定的性能压力。

官方推荐两个都启用。

如果对数据不敏感，可以选单独用RDB。

不建议单独用 AOF，因为可能会出现Bug。

如果只是做纯内存缓存，可以都不用。



