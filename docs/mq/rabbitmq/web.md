---
description: web管理界面介绍
autoPrev: install
---

# web管理界面介绍

## 概览

首先，这个 Web 管理页面大概就像下图这样：

![image-20230221231938989](https://img.zxqs.top/image-20230221231938989.png)

首先一共有六个选项卡：

1. Overview：这里可以概览 RabbitMQ 的整体情况，如果是集群，也可以查看集群中各个节点的情况。包括 RabbitMQ 的端口映射信息等，都可以在这个选项卡中查看。
2. Connections：这个选项卡中是连接上 RabbitMQ 的生产者和消费者的情况。
3. Channels：这里展示的是“通道”信息，关于“通道”和“连接”的关系，松哥在后文再和大家详细介绍。
4. Exchange：这里展示所有的交换机信息。
5. Queue：这里展示所有的队列信息。
6. Admin：这里展示所有的用户信息。

右上角是页面刷新的时间，默认是 5 秒刷新一次，展示的是所有的 Virtual host。

这是整个管理页面的一个大致情况，接下来我们来逐个介绍。

## Overview

Overview 中分了如下一些功能模块：

![image-20230221232259040](https://img.zxqs.top/image-20230221232259040.png)

