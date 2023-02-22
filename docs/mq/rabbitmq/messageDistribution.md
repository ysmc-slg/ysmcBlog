---
description: rabbitmq高级之消息分发
autoPrev: persistence
---

# rabbitmq高级之消息分发

## 消息顺序性 

RabbitMq没有属性设置消息的顺序性，所以在没有前提的情况下说RabbitMq消息的消费具有顺序性是错误的，理想情况下，没有重复消费前提下，生产者发送 msg1、msg2、msg3，那么消费者消费顺序也是msg1、msg2、msg3。

但是这种情况毕竟是理想的，而这种理想情况在实际中很容易会被打破，例如消息丢失，网络原因，异常发生，而且也是在一个生产者和一个消费这的情况，如果多个生产者的话，真的就无法保证哪个消息先到达Broker，也就不能保证顺序。

例举一下情况，打破消费的顺序性。

生产者使用了事务，且触发了回滚，重新补发消息后，顺序可能是错乱的。

开启publisher confirm后出现超时、中断、拒绝、nack命令等，重新补发消息后，顺序可能是错乱的。

## 消息分发

RocketMq有多个消费者的时候，队列会以轮询的方式分发给多个消费者。

这里有一个很重要的参数 `channel.basicQos()`，**该方法是允许信道上消费者最大未确认消息数量**。他是针对信道而言的，一个连接可以有多个信道，一个信道可以有多个队列。

channel.basicQos()参数只适用于推模式的消费方式。

举个例子，`channel.basicQos(5)`，代表该信道上的其中一个消费者未确认数量达到5后，RabbitMq就不会向这个消费者在发送任何消息，直到该消费者确认了一个消息后计数器减1，之后才可以继续接收消息。

该参数有3个重载方法：
```java
 void basicQos(int var1, int var2, boolean var3) throws IOException;
 
 void basicQos(int var1, boolean var2) throws IOException;
 
 void basicQos(int var1) throws IOException;
```

我们上面说的那个数字就是该方法的第一个参数 var1，在他的实现类 AutorecoveringChannel 里参数名叫 prefetchCount，

如果使用 basicQos(int var1)，var1代表消费者所能接收未确认消息总数，写0 代表没有上限。

如果使用 basicQos(int var1, int var2, boolean var3)，在他的实现类里实现如下，仔细看他的参数顺序。
```java
public void basicQos(int prefetchSize, int prefetchCount, boolean global) throws IOException {
    if (global) {
        this.prefetchCountGlobal = prefetchCount;
    } else {
        this.prefetchCountConsumer = prefetchCount;
    }

    this.delegate.basicQos(prefetchSize, prefetchCount, global);
}
```
prefetchSize参数是消费者所能接收未确认消息的总大小，单位是B，同样，设置0表示无上限。

global参数含义如下:
| global | Meaning of prefetch_count in AMQP 0-9-1 | Meaning of prefetch_count in RabbitMQ |
|:--------:|:-------------------------------------:|:-----------------------------:|
| **false**  |  信道上的消息都要遵循prefetchCount值  |  信道上新的消费者需要遵循prefetchCount值  |
|  true   | 当前连接上所有消费者都要遵循prefetchCount值 | 信道上的消息都要遵循prefetchCount值 |

那么我们怎么使用呢？

```java
channel.basicQos(10);
 
channel.basicConsume("my-queue1",false,consumer1);
 
channel.basicConsume("my-queue2",false,consumer2);
```

**这样写是说my-queue1和my-queue2两个队列里最大的未确认消息总是分别都是10.**


**再来一种复杂的写法**

```java
channel.basicQos(3,false);
channel.basicQos(5,true);
channel.basicConsume("my-queue1",false,consumer1);
 
channel.basicConsume("my-queue2",false,consumer2);
```
::: tip

每个消费者最多接收3个未确认的消息，当前这个信道最大可接收5个未确认的消息。

设置为true 指的是同一个连接范围内所有信道上未确认数量之和。

设置为false指的是每个信道上每个消费者最大未确认数量。

RabbitMq计算这些数量也是需要占用性能的，所以我们一般指定的false，默认也是false。

:::
