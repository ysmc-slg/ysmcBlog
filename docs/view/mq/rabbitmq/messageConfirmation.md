---
title: rabbitmq高级之消息确认
autoPrev: messageDistribution
---

## 前言
上面的`消息应答`，`消息持久化`和`队列持久化`都是确保 消费者消费 时消息不丢失。如果生产者发给交换机，或者交换机发送给队列的时候消息丢失了怎么办呢？

## 消息成功到达方案
* 开启事务机制
* 发送方确认机制

这是两种不同的方案，不可以同时开启，只能选择其中之一，如果两者同时开启，则会报如下错误：

![640](/blogImg/rabbitmq/640.png)

我们分别来看。以下所有案例都在 Spring Boot 中展开。

## 开启事务机制
Spring Boot 中开启 RabbitMQ 事务机制的方式如下：

首先需要先提供一个事务管理器，如下：

```java
@Bean
RabbitTransactionManager transactionManager(ConnectionFactory connectionFactory) {
    return new RabbitTransactionManager(connectionFactory);
}
```
接下来，在消息生产者上面做两件事：添加事务注解并设置通信信道为事务模式：

```java
@Service
public class MsgService {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @Transactional
    public void send() {
        rabbitTemplate.setChannelTransacted(true);
        rabbitTemplate.convertAndSend(RabbitConfig.JAVABOY_EXCHANGE_NAME,RabbitConfig.JAVABOY_QUEUE_NAME,"hello rabbitmq!".getBytes());
        int i = 1 / 0;
    }
}
```
这里注意两点：

1. 发送消息的方法上添加 @Transactional 注解标记事务。
2. 调用 setChannelTransacted 方法设置为 true 开启事务模式。

在上面的案例中，我们在结尾来了个 1/0 ，这在运行时必然抛出异常，我们可以尝试运行该方法，发现消息并未发送成功。

当我们开启事务模式之后，RabbitMQ 生产者发送消息会多出四个步骤：

1. 客户端发出请求，将信道设置为事务模式。
2. 服务端给出回复，同意将信道设置为事务模式。
3. 客户端发送消息。
4. 客户端提交事务。
5. 服务端给出响应，确认事务提交。

上面的步骤，除了第三步是本来就有的，其他几个步骤都是平白无故多出来的。所以大家看到，事务模式其实效率有点低，这并非一个最佳解决方案。我们可以想想，什么项目会用到消息中间件？一般来说都是一些高并发的项目，这个时候并发性能尤为重要。

所以，RabbitMQ 还提供了发送方确认机制（publisher confirm）来确保消息发送成功，这种方式，性能要远远高于事务模式，一起来看下。

## 发送方确认机制
### 单条消息处理
首先我们移除刚刚关于事务的代码，然后在 application.properties 中配置开启消息发送方确认机制，如下：
```properties
spring.rabbitmq.publisher-confirm-type=correlated
spring.rabbitmq.publisher-returns=true
```
第一行是配置消息到达交换器的确认回调，第二行则是配置消息到达队列的回调。

第一行属性的配置有三个取值：

1. none：表示禁用发布确认模式，默认即此。
2. correlated：表示成功发布消息到交换器后会触发的回调方法。
3. simple：类似 correlated，并且支持 waitForConfirms() 和 waitForConfirmsOrDie() 方法的调用。

接下来我们要开启两个监听，具体配置如下：
```java
@Configuration
public class RabbitConfig implements RabbitTemplate.ConfirmCallback, RabbitTemplate.ReturnsCallback {
    public static final String JAVABOY_EXCHANGE_NAME = "javaboy_exchange_name";
    public static final String JAVABOY_QUEUE_NAME = "javaboy_queue_name";
    private static final Logger logger = LoggerFactory.getLogger(RabbitConfig.class);
    @Autowired
    RabbitTemplate rabbitTemplate;
    @Bean
    Queue queue() {
        return new Queue(JAVABOY_QUEUE_NAME);
    }
    @Bean
    DirectExchange directExchange() {
        return new DirectExchange(JAVABOY_EXCHANGE_NAME);
    }
    @Bean
    Binding binding() {
        return BindingBuilder.bind(queue())
                .to(directExchange())
                .with(JAVABOY_QUEUE_NAME);
    }

    @PostConstruct
    public void initRabbitTemplate() {
        rabbitTemplate.setConfirmCallback(this);
        rabbitTemplate.setReturnsCallback(this);
    }

    @Override
    public void confirm(CorrelationData correlationData, boolean ack, String cause) {
        if (ack) {
            logger.info("{}:消息成功到达交换器",correlationData.getId());
        }else{
            logger.error("{}:消息发送失败", correlationData.getId());
        }
    }

    @Override
    public void returnedMessage(ReturnedMessage returned) {
        logger.error("{}:消息未成功路由到队列",returned.getMessage().getMessageProperties().getMessageId());
    }
}
```

关于这个配置类，说如下几点：
1. 定义配置类，实现 `RabbitTemplate.ConfirmCallback` 和 `RabbitTemplate.ReturnsCallback` 两个接口，这两个接口，前者的回调用来确定消息到达交换器，后者则会在消息路由到队列失败时被调用。
2. 定义 initRabbitTemplate 方法并添加 @PostConstruct 注解，在该方法中为 rabbitTemplate 分别配置这两个 Callback。

这就可以了。

接下来我们对消息发送进行测试。

首先我们尝试将消息发送到一个不存在的交换机中，像下面这样：
```java
rabbitTemplate.convertAndSend("RabbitConfig.JAVABOY_EXCHANGE_NAME",RabbitConfig.JAVABOY_QUEUE_NAME,"hello rabbitmq!".getBytes(),new CorrelationData(UUID.randomUUID().toString()));
```
注意第一个参数是一个字符串，不是变量，这个交换器并不存在，此时控制台会报如下错误：

![500](/blogImg/rabbitmq/500.png)

接下来我们给定一个真实存在的交换器，但是给一个不存在的队列，像下面这样：
```java
rabbitTemplate.convertAndSend(RabbitConfig.JAVABOY_EXCHANGE_NAME,"RabbitConfig.JAVABOY_QUEUE_NAME","hello rabbitmq!".getBytes(),new CorrelationData(UUID.randomUUID().toString()));
```
注意此时第二个参数是一个字符串，不是变量。

![500](/blogImg/rabbitmq/600.png)

可以看到，消息虽然成功达到交换器了，但是没有成功路由到队列（因为队列不存在）。

这是一条消息的发送，我们再来看看消息的批量发送。

### 消息批量处理
如果是消息批量处理，那么发送成功的回调监听是一样的，这里不再赘述。

这就是 `publisher-confirm` 模式。

相比于事务，这种模式下的消息吞吐量会得到极大的提升。

## 失败重试
失败重试分两种情况，一种是压根没找到 MQ 导致的失败重试，另一种是找到 MQ 了，但是消息发送失败了。两种重试我们分别来看。

### 自带重试机制
前面所说的事务机制和发送方确认机制，都是发送方确认消息发送成功的办法。如果发送方一开始就连不上 MQ，那么 Spring Boot 中也有相应的重试机制，但是这个重试机制就和 MQ 本身没有关系了，这是利用 Spring 中的 retry 机制来完成的，具体配置如下：

```properties
spring.rabbitmq.template.retry.enabled=true
spring.rabbitmq.template.retry.initial-interval=1000ms
spring.rabbitmq.template.retry.max-attempts=10
spring.rabbitmq.template.retry.max-interval=10000ms
spring.rabbitmq.template.retry.multiplier=2
```
从上往下配置含义依次是：
* 开启重试机制。
* 重试起始间隔时间。
* 最大重试次数。
* 最大重试间隔时间。
* 间隔时间乘数。（这里配置间隔时间乘数为 2，则第一次间隔时间 1 秒，第二次重试间隔时间 2 秒，第三次 4 秒，以此类推）

配置完成后，再次启动 Spring Boot 项目，然后关掉 MQ，此时尝试发送消息，就会发送失败，进而导致自动重试。

### 业务重试
业务重试主要是针对消息没有到达交换器的情况。

如果消息没有成功到达交换器，根据我们第二小节的讲解，此时就会触发消息发送失败回调，在这个回调中，我们就可以做文章了！

整体思路是这样：
1. 首先创建一张表，用来记录发送到中间件上的消息，像下面这样：
   
   ![700](/blogImg/rabbitmq/700.png)

   每次发送消息的时候，就往数据库中添加一条记录。这里的字段都很好理解，有三个我额外说下：

   * status：表示消息的状态，有三个取值，0，1，2 分别表示消息发送中、消息发送成功以及消息发送失败。
   * tryTime：表示消息的第一次重试时间（消息发出去之后，在 tryTime 这个时间点还未显示发送成功，此时就可以开始重试了）。
   * count：表示消息重试次数。
2. 在消息发送的时候，我们就往该表中保存一条消息发送记录，并设置状态 status 为 0，tryTime 为 1 分钟之后。
3. 在 confirm 回调方法中，如果收到消息发送成功的回调，就将该条消息的 status 设置为1（在消息发送时为消息设置 msgId，在消息发送成功回调时，通过 msgId 来唯一锁定该条消息）。
4. 另外开启一个定时任务，定时任务每隔 10s 就去数据库中捞一次消息，专门去捞那些 status 为 0 并且已经过了 tryTime 时间记录，把这些消息拎出来后，首先判断其重试次数是否已超过 3 次，如果超过 3 次，则修改该条消息的 status 为 2，表示这条消息发送失败，并且不再重试。对于重试次数没有超过 3 次的记录，则重新去发送消息，并且为其 count 的值+1。

当然这种思路有两个弊端：

1. 去数据库走一遭，可能拖慢 MQ 的 Qos，不过有的时候我们并不需要 MQ 有很高的 Qos，所以这个应用时要看具体情况。
2. 按照上面的思路，可能会出现同一条消息重复发送的情况，不过这都不是事，我们在消息消费时，解决好幂等性问题就行了。

当然，大家也要注意，消息是否要确保 100% 发送成功，也要看具体情况。

本文引用至：https://mp.weixin.qq.com/s/hj8iqASSOk2AgdtkuLPCCQ

