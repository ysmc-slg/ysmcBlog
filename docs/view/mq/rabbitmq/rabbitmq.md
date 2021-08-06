---
title: RabbitMQ
---

## RabbitMQ 的引言

:::tip 简介

基于`AMQP`协议，erlang语言开发，是部署最广泛的开源消息中间件,是最受欢迎的开源消息中间件之一。

它接受并转发消息。你可以把它当做一个快递站点，当你要发送一个包
裹时，你把你的包裹放到快递站，快递员最终会把你的快递送到收件人那里，按照这种逻辑 RabbitMQ 是
一个快递站，一个快递员帮你传递快件。RabbitMQ 与快递站的主要区别在于，它不处理快件而是接收，
存储和转发消息数据。

:::

:::tip

AMQP（advanced message queuing protocol）在2003年时被提出，最早用于解决金融领不同平台之间的消息传递交互问题。顾名思义，AMQP是一种协议，更准确的说是一种binary wire-level protocol（链接协议）。这是其和JMS的本质差别，AMQP不从API层进行限定，而是直接定义网络交换的数据格式。这使得实现了AMQP的provider天然性就是跨平台的。以下是AMQP协议模型:

:::

![AMQP协议模型](/blogImg/rabbitmq/image-20200311182438041.png)

`官网`: https://www.rabbitmq.com/

`官方教程`: https://www.rabbitmq.com/#getstarted

