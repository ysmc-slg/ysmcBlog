---
title: Redis哨兵模式(Sentinel)
autoPrev: masterSlave
---

## 简介

Sentinel(哨兵)是用于`监控redis集群中Master状态`的工具，是Redis 的高可用性解决方案，sentinel哨兵模式已经被集成在redis2.4之后的版本中。sentinel是redis高可用的解决方案，`sentinel系统可以监视一个或者多个redis master服务，以及这些master服务的所有从服务；当某个master服务下线时，自动将该master下的某个从服务升级为master服务替代已下线的master服务继续处理请求。`

sentinel可以让redis实现主从复制，当一个集群中的master失效之后，sentinel可以选举出一个新的master用于自动接替master的工作，集群中的其他redis服务器自动指向新的master同步数据。一般建议sentinel采取奇数台，防止某一台sentinel无法连接到master导致误切换。其结构如下:

![sentinel](/blogImg/redis/20210617132409.png)

**Redis-Sentinel是Redis官方推荐的高可用性(HA)解决方案**，当用Redis做Master-slave的高可用方案时，假如master宕机了，Redis本身(包括它的很多客户端)都没有实现自动进行主备切换，而Redis-sentinel本身也是一个独立运行的进程，它能监控多个master-slave集群，发现master宕机后能进行自动切换。Sentinel由一个或多个Sentinel 实例 组成的Sentinel 系统可以监视任意多个主服务器，以及这些主服务器属下的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器属下的某个从服务器升级为新的主服务器。

例如下图所示：

![sentinel2](/blogImg/redis/20210617132746.png)

在Server1 掉线后：

![sentinel2](/blogImg/redis/20210617133013.png)

升级Server2 为新的主服务器：

![sentinel3](/blogImg/redis/20210617133044.png)

##  Sentinel的作用
* 通过发送命令，让Redis服务器返回监控其运行状态，包括主服务器和从服务器。
* 当哨兵监测到master宕机，会自动将slave切换成master，然后通过`发布订阅模式`通知其他的从服务器，修改配置文件，让它们切换主机。

## Sentinel的工作方式
1. 每个Sentinel以`每秒钟一次`的频率向它所知的Master，Slave以及其他 Sentinel 实例发送一个PING命令。
2. 如果一个实例（instance）距离最后一次有效回复PING命令的时间超过 down-after-milliseconds 选项所指定的值，则这个实例会被Sentinel标记为`主观下线`。
3. 如果一个Master被标记为主观下线，则正在监视这个Master的所有 Sentinel 要以每秒一次的频率确认Master的确进入了主观下线状态。 
4. 当有足够数量的Sentinel（大于等于配置文件指定的值）在指定的时间范围内确认Master的确进入了主观下线状态，则Master会被标记为`客观下线`。
5. 在一般情况下，每个Sentinel 会以每10秒一次的频率向它已知的所有Master，Slave发送 INFO 命令。
6. 当Master被Sentinel标记为客观下线时，Sentinel 向下线的 Master 的所有Slave发送 INFO命令的频率会从10秒一次改为每秒一次。 
7. 若没有足够数量的Sentinel同意Master已经下线，Master的客观下线状态就会被移除。 若 Master重新向Sentinel 的PING命令返回有效回复，Master的主观下线状态就会被移除。

## sentinel.conf
1. `sentinel monitor <masterName> <ip> <port> <quorum>`

   * masterName：对某个master+slave组合的一个区分标识（一套sentinel是可以监听多套master+slave这样的组合的）
   * ip 和 port 就是master节点的 ip 和 端口号。
   * quorum：`客观下线的一个依据`，意思是至少有 quorum 个sentinel标记这个master为`主观下线`，才会对这个master进行下线以及故障转移。quorum的值一般设置为sentinel个数的二分之一加1，例如3个sentinel就设置2。

2. `sentinel down-after-milliseconds <masterName> <timeout>`

这个配置其实就是进行`主观下线的一个依据`，masterName和上面的一样，timeout是一个毫秒值，表示：如果这台sentinel超过timeout这个时间都无法连通master包括slave（slave不需要客观下线，因为不需要故障转移）的话，就会主观认为该master已经下线（实际下线需要客观下线的判断通过才会下线）

## 使用哨兵模式
首先创建一个`sentinel.conf`文件，文件名一定不能错。同时添加以下配置

```java
sentinel monitor <masterName> <ip> <port> <quorum>
sentinel auth-pass <masterName> <password>
```
如果你的redis没有设置密码，第二条配置不写

![sentinel3](/blogImg/redis/20210617152207.png)

然后使用 `redis-sentinel  /sentinel.conf` ，启动哨兵模式

![sentinel3](/blogImg/redis/20210617152307.png)

此时哨兵就已经启动了，如果master挂了，会自动切换从服务为master

![sentinel3](/blogImg/redis/20210617160013.png)

可以看到6381代替了6379，成为了master，如果6379重新启动只能当做slave

![sentinel3](/blogImg/redis/20210617160331.png)

## 主观下线

sentinel会向所有与其建立了命令连接的实例（master，slave，其他sentinel）发ping命令，如果在`down-after-milliseconds`给定的毫秒数之内，没有回复， 或者返回一个错误， 那么 Sentinel 将这个服务器标记为主观下线（sdown）。

## 客观下线

客观下线（odown）指的是多个 Sentinel 实例在对同一个`master`做出`主观下线 (sdown)`判断， 并且通过 `SENTINEL is-master-down-by-addr` 命令互相交流之后， 有足够的Sentinel（可以设置） 都将`master`标记为`主观下线`之后，`master`才会被标记为`客观下线`，然后开启`故障转移(failover)`。

**详解：**

sentinel通过发送`SENTINEL is-master-down-by-addr <ip> <port> <current_epoch> <runid>`命令，来询问其它sentinel是否同意服务下线。

* ip：被Sentinel判断为主观下线的主服务器的IP地址
* port：被Sentinel判断为主观下线的主服务器的端口号
* current_epoch：Sentinel当前的配置纪元，用于选举领头Sentinel
* runid：`*`表示检测服务下线状态，如果是sentinel 运行id，表示用来选举领头sentinel

一个sentinel接收另一个sentinel发来的`is-master-down-by-addr`后，提取参数，根据ip和端口，检测Master是否已`主观下线`。并且回复`is-master-down-by-addr`，回复包含三个参数：

* down_state：返回目标Sentinel对Master的检查结果，1代表主服务器已下线，0代表主服务器未下线
* leader_runid：Sentinel运行ID用于选举领头Sentinel
* leader_epoch：领头sentinel纪元

sentinel接收到回复后，根据配置设置的下线最小数量，达到这个值，既认为该服务客观下线。

**客观下线条件只适用于主服务器**： 对于任何其他类型的 Redis 实例， Sentinel 在将它们判断为下线前不需要进行协商， 所以从服务器或者其他 Sentinel 永远不会达到客观下线条件。只要一个 Sentinel 发现某个主服务器进入了客观下线状态， 这个 Sentinel 就可能会被其他 Sentinel 推选出， 并对失效的主服务器执行自动故障迁移操作，故障转移是自动完成的。

## 配置传播
一旦一个sentinel成功地对一个master进行了`failover(故障转移)`，它将会把关于master的最新配置通过广播形式通知其它sentinel，其它的sentinel则更新对应master的配置。
一个faiover(故障转移)要想被成功实行，sentinel必须能够向选为master的slave发送`SLAVEOF NO ONE`命令，然后能够通过INFO命令看到新master的配置信息。
当将一个slave选举为master并发送`SLAVEOF NO ONE`后，即使其它的slave还没针对新master重新配置自己，failover也被认为是成功了的，然后所有sentinels将会发布新的配置信息。
新配在集群中相互传播的方式，就是为什么我们需要当一个sentinel进行failover时必须被授权一个版本号的原因。
每个sentinel使用##发布/订阅##的方式持续地传播master的配置版本信息，配置传播的##发布/订阅##管道是：__sentinel__:hello。
因为每一个配置都有一个版本号，所以以版本号最大的那个为标准。

举个例子：
假设有一个名为mymaster的地址为192.168.10.202:6379。一开始，集群中所有的sentinel都知道这个地址，于是为mymaster的配置打上版本号1。一段时候后mymaster死了，有一个sentinel被授权用版本号2对其进行failover。如果failover成功了，假设地址改为了192.168.10.202:9000，此时配置的版本号为2，进行failover的sentinel会将新配置广播给其他的sentinel，由于其他sentinel维护的版本号为1，发现新配置的版本号为2时，版本号变大了，说明配置更新了，于是就会采用最新的版本号为2的配置。
这意味着sentinel集群保证了第二种活跃性：一个能够互相通信的sentinel集群最终会采用版本号最高且相同的配置。

## sentinel的“仲裁会”
前面我们谈到，当一个master被sentinel集群监控时，需要为它指定一个参数，这个参数指定了当需要判决master为不可用，并且进行failover(故障转移)时，所需要的sentinel数量，可以称这个参数为票数

不过，当failover(故障转移)主备切换真正被触发后，failover(故障转移)并不会马上进行，还需要sentinel中的大多数sentinel授权后才可以进行failover。
当`ODOWN`时，failover被触发。failover一旦被触发，尝试去进行failover的sentinel会去获得“大多数”sentinel的授权（如果票数比大多数还要大的时候，则询问更多的sentinel)
这个区别看起来很微妙，但是很容易理解和使用。例如，集群中有5个sentinel，票数被设置为2，当2个sentinel认为一个master已经不可用了以后，将会触发failover，但是，进行failover的那个sentinel必须先获得至少3个sentinel的授权才可以实行failover。
如果票数被设置为5，要达到ODOWN状态，必须所有5个sentinel都主观认为master为不可用，要进行failover，那么得获得所有5个sentinel的授权。

## Slave选举与优先级
当一个sentinel准备好了要进行failover，并且收到了其他sentinel的授权，那么就需要选举出一个合适的slave来做为新的master。

slave的选举主要会评估slave的以下几个方面：

* 与master断开连接的次数
* Slave的优先级
* 数据复制的下标(用来评估slave当前拥有多少master的数据)
* 进程ID

如果一个slave与master失去联系超过10次，并且每次都超过了配置的最大失联时间(down-after-milliseconds)，如果sentinel在进行failover时发现slave失联，那么这个slave就会被sentinel认为不适合用来做新master的。
更严格的定义是，如果一个slave持续断开连接的时间超过
(down-after-milliseconds * 10) + milliseconds_since_master_is_in_SDOWN_state
就会被认为失去选举资格。

符合上述条件的slave才会被列入master候选人列表，并根据以下顺序来进行排序：

* sentinel首先会根据slaves的优先级来进行排序，优先级越小排名越靠前。
* 如果优先级相同，则查看复制的下标，哪个从master接收的复制数据多，哪个就靠前。
* 如果优先级和下标都相同，就选择进程ID较小的那个。

一个redis无论是master还是slave，都必须在配置中指定一个slave优先级。要注意到master也是有可能通过failover变成slave的。
如果一个redis的slave优先级配置为0，那么它将永远不会被选为master。但是它依然会从master哪里复制数据。

