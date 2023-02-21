---
description: rediscluster
autoPrev: Pipeline
---

# Redis 集群

## 概念

关于集群概念问题，可以看 https://blog.csdn.net/weixin_43798031/article/details/122555409

https://blog.csdn.net/qq_41432730/article/details/121591008

本篇文章我们着重于集群的搭建


## 集群搭建

首先我们对集群做一个简单规划，假设我的集群中一共有三个节点，每个节点一个主机一个从机，这样我一共需要 6 个 Redis 实例。首先创建 redis-cluster 文件夹，在该文件夹下分别创建 7001、7002、7003、7004、7005、7006 文件夹，用来存放我的 Redis 配置文件，如下：

![image-20230215231453570](https://img.zxqs.top/image-20230215231453570.png)

将 Redis 也在 redis-cluster 目录下安装一份，然后将 redis.conf 文件向 7001-7006 这 6 个文件夹中分别拷贝一份，拷贝完成后，分别修改如下参数：

```text
port 700X
#bind 127.0.0.1
cluster-enabled yes
cluster-config-file nodes700X.conf
protected no
daemonize yes
```

使用命令依次启动6个redis服务：

```text
redis-server ../700X/redis.conf
```

启动成功后，我们可以查看 redis 进程，如下：

![image-20230215231919964](https://img.zxqs.top/image-20230215231919964.png)

这个表示各个节点都启动成功了。接下来我们就可以进行集群的创建了，命令如下：

```text
redis-cli --cluster create 192.168.96.128:7001 192.168.96.128:7002 192.168.96.128:7003 192.168.96.128:7004 192.168.96.128:7005 192.168.96.128:7006  --cluster-replicas 1
```

`--cluster-replicas 1` 参数表示希望每个主服务器都有一个从服务器，这里则代表 3 主 3 从，通过该方式创建的带有从节点的机器不能够自己手动指定主节点，redis 集群会尽量把主从服务器分配在不同机器上:

![image-20230215233130595](https://img.zxqs.top/image-20230215233130595.png)

**注意：**

如果redis设置了密码，需要加上 `-a 密码` 命令。否则报错。

## 查询集群信息

集群创建成功后，我们可以登录到 Redis 控制台查看集群信息，注意登录时要添加 `-c` 参数，表示以集群方式连接，如下：

```text
redis-cli -a 123456 -p 7001 -c
```

同样redis有密码也需要加上密码。

通过 `cluster info` 可以查看集群状态信息，如下：

![image-20230215233636023](https://img.zxqs.top/image-20230215233636023.png)

通过 `cluster nodes` 查看集群节点信息，如下：

![image-20230215233906514](https://img.zxqs.top/image-20230215233906514.png)

## 添加主节点

首先我们准备一个端口为 7007 的主节点并启动，准备方式和前面步骤一样，启动成功后，通过如下命令添加主节点：

```text
edis-cli --cluster add-node 192.168.96.128:7007 192.168.96.128:7006  -a 123456
```
主节点添加之后，我们可以通过 cluster nodes 命令查看主节点是否添加成功，此时新添加的节点并没有没有分配到 slot。

使用命令给新节点分配曹

```text
resis-cli -a 123456 --cluster reshard 192.168.96.128:7001 --cluster-form  <7001编号> --cluster-to  <7007编号> --cluster-slots 1024
```

相当于将 7001 分给 7007 1024个曹，编号就是下图标记的这种。

![image-20230215235229165](https://img.zxqs.top/image-20230215235229165.png)





