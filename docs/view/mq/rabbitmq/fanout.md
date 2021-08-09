---
title: fanout模型
autoPrev: workquene
---

## 前言
上面两种模式，一个消息只能被一个消费者接收。如果想让一个消息被多个消费者接受，上面两种模式就不行了。

在实现一个消息被多个消费者接收之前先说一下`Exchanges（交换机）`

## Exchange 概念

RabbitMQ 消息传递模型的核心思想是: `生产者生产的消息从不会直接发送到队列`。实际上，通常生产者甚至都不知道这些消息传递传递到了哪些队列中。

相反，`生产者只能将消息发送到交换机(exchange)`，交换机工作的内容非常简单，一方面它接收来自生产者的消息，另一方面将它们推入队列。交换机必须确切知道如何处理收到的消息。是应该把这些消息放到特定队列还是说把他们到许多队列中还是说应该丢弃它们。这就的由交换机的类型来决定。

![Exchange 概念](/blogImg/rabbitmq/021-08-09_10-37-31.png)

为什么我们之前没用`Exchange`也能正常使用呢？


```java
 channel.basicPublish("",QUEUE_NAME,null,message.getBytes());
```
在发送消息时，第一个参数是交换机，然而我们用的是空串，这时用的就是rabbitmq默认的交换机。

![默认交换机](/blogImg/rabbitmq/默认交换机.png)

### 绑定(bindings)

什么是 bingding 呢，binding 其实是 exchange 和 queue 之间的桥梁，它告诉我们 exchange 和那个队列进行了绑定关系。比如说下面这张图告诉我们的就是 X 与 Q1 和 Q2 进行了绑定

![binding](/blogImg/rabbitmq/binding.png)