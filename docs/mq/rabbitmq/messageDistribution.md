---
description: rabbitmq高级之消息分发
autoPrev: persistence
---

# rabbitmq 消息分发机制

一般来说，一个队列有多个消费者同时消费数据，此时有两种分发数据的方式，一种是轮询分发，另一种是公平分发。


## 轮询分发

在默认情况下，RabbitMQ不会顾虑消息者处理消息的能力，即使其中有的消费者闲置有的消费者高负荷。RabbitMQ会逐个发送消息到在序列中的下一个消费者(而不考虑每个任务的时长等等，且是提前一次性分配，并非一个一个分配)。平均每个消费者获得相同数量的消息，这种方式分发消息机制称为Round-Robin（轮询）。

## 公平分发

而公平分发，则是根据消费者的处理能力来进行分发处理的。这里主要是通过设置prefetchCount 参数来实现的。这样RabbitMQ就会使得每个Consumer在同一个时间点最多处理规定的数量级个数的Message。换句话说，在接收到该Consumer的ack前，它不会将新的Message分发给它。 比如prefetchCount=1，则在同一时间下，每个Consumer在同一个时间点最多处理1个Message，同时在收到Consumer的ack前，它不会将新的Message分发给它。

