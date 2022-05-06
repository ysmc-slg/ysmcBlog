---
description: Rabbitmq之延迟队列
autoPrev: MessageSuccessfullyConsumed
---

# Rabbitmq之延迟队列

::: tip

文章引用微信公众号：江南一点雨 https://mp.weixin.qq.com/s/5szA0KBpFn9G3DeS9C0U3w

:::

rabbitmq想要实现延迟队列，需要用到`TTL`和`死信`。我们先来讲一下`TTL`

## TTL

TTL（Time-To-Live），消息存活的时间，即消息的有效期。如果我们希望消息能够有一个存活时间，那么我们可以通过设置 `TTL` 来实现这一需求。如果消息的存活时间超过了 `TTL` 并且还没有被消息，此时消息就会变成`死信`。

TTL 的设置有两种不同的方式：

1. 在声明队列的时候，我们可以在队列属性中设置消息的有效期，这样所有进入该队列的消息都会有一个相同的有效期。
2. 在发送消息的时候设置消息的有效期，这样不同的消息就具有不同的有效期。

**如果两个都设置了就以时间短的为准**

当我们设置了消息有效期后，消息过期了就会被从队列中删除了（进入到死信队列，后文一样，不再标注），但是两种方式对应的删除时机有一些差异：

1. 对于第一种方式，当消息队列设置过期时间的时候，那么消息过期了就会被删除，因为消息进入 RabbitMQ 后是存在一个消息队列中，队列的头部是最早要过期的消息，所以 RabbitMQ 只需要一个定时任务，从头部开始扫描是否有过期消息，有的话就直接删除。
2. 对于第二种方式，当消息过期后并不会立马被删除，而是当消息要投递给消费者的时候才会去删除，因为第二种方式，每条消息的过期时间都不一样，想要知道哪条消息过期，必须要遍历队列中的所有消息才能实现，当消息比较多时这样就比较耗费性能，因此对于第二种方式，当消息要投递给消费者的时候才去删除。

### 单条消息设置过期时间
接下来我们来看看具体用法。

application.properties 中配置一下 RabbitMQ 的连接信息，如下：
```properties
spring.rabbitmq.host=127.0.0.1
spring.rabbitmq.port=5672
spring.rabbitmq.username=guest
spring.rabbitmq.password=guest
spring.rabbitmq.virtual-host=/
```

创建一个配置类

```java
@Configuration
public class RabbitConfig {
    public static final String EXCHANGE_NAME = "exchange_name";
    public static final String QUEUE_NAME = "queue_name";
    public static final String ROUTING_KEY = "routing_key";
    private static final Logger logger = LoggerFactory.getLogger(RabbitConfig.class);
    @Autowired
    RabbitTemplate rabbitTemplate;

    @Bean
    Queue queue(){
        return new Queue(QUEUE_NAME,true,false,false);
    }

    @Bean
    DirectExchange exchange(){
        return new DirectExchange(EXCHANGE_NAME,true,false);
    }

    @Bean
    Binding binding(){
        return BindingBuilder.bind(queue()).to(exchange()).with(ROUTING_KEY);
    }
}
```
这段配置应该很简单，没啥好解释的，有一个排他性，这里稍微多说两句：

::: tip

关于排他性，如果设置为 true，则该消息队列只有创建它的 Connection 才能访问，其他的 Connection 都不能访问该消息队列，如果试图在不同的连接中重新声明或者访问排他性队列，那么系统会报一个资源被锁定的错误。另一方面，对于排他性队列而言，当连接断掉的时候，该消息队列也会自动删除（无论该队列是否被声明为持久性队列都会被删除）。

:::

接下来提供一个消息发送接口，如下：

```java
@RestController
public class SendMessage {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @GetMapping("/hello")
    public void hello() {
        Message message = MessageBuilder.withBody("hello rabbitmq".getBytes())
                .setExpiration("10000")
                .build();
        rabbitTemplate.convertAndSend(RabbitConfig.EXCHANGE_NAME,RabbitConfig.ROUTING_KEY,message);
    }
}

```
在创建 Message 对象的时候我们可以设置消息的过期时间，这里设置消息的过期时间为 10 秒。


接下来我们启动项目，进行消息发送测试。当消息发送成功之后，由于没有消费者，所以这条消息并不会被消费。打开 RabbitMQ 管理页面，点击到 Queues 选项卡，10s 之后，我们会发现消息已经不见了：

![sd](/blogImg/rabbitmq/640.jpg)

单条消息设置过期时间，就是在消息发送的时候设置一下消息有效期即可。

### 队列消息过期
给队列设置消息过期时间，方式如下：

```java
@Bean
Queue queue() {
    Map<String, Object> args = new HashMap<>();
    args.put("x-message-ttl", 10000);
    return new Queue(QUEUE_NAME, true, false, false, args);
}
```

设置完成后，我们修改消息的发送逻辑，如下：

```java
@RestController
public class HelloController {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @GetMapping("/hello")
    public void hello() {
        Message message = MessageBuilder.withBody("hello rabbitmq".getBytes())
                .build();
        rabbitTemplate.convertAndSend(QueueConfig.JAVABOY_QUEUE_DEMO, message);
    }
}
```
可以看到，消息正常发送即可，不用设置消息过期时间。

OK，启动项目，发送一条消息进行测试。查看 RabbitMQ 管理页面，如下：

![sd](/blogImg/rabbitmq/641.jpg)

可以看到，消息队列的 Features 属性为 D 和 TTL，D 表示消息队列中消息持久化，TTL 则表示消息会过期。

10s 之后刷新页面，发现消息数量已经恢复为 0。

这就是给消息队列设置消息过期时间，一旦设置了，所有进入到该队列的消息都有一个过期时间了。

## 死信队列
消息过期之后其实不会被删除，而是进入了死信队列。

### 死信交换机
死信交换机，Dead-Letter-Exchange 即 DLX。

死信交换机用来接收死信消息（Dead Message）的，那什么是死信消息呢？一般消息变成死信消息有如下几种情况：

1. 消息被拒绝(Basic.Reject/Basic.Nack) ，井且设置requeue 参数为false
2. 消息过期
3. 队列达到最大长度


当消息在一个队列中变成了死信消息后，此时就会被发送到 DLX，绑定 DLX 的消息队列则称为死信队列。

DLX 本质上也是一个普普通通的交换机，我们可以为任意队列指定 DLX，当该队列中存在死信时，RabbitMQ 就会自动的将这个死信发布到 DLX 上去，进而被路由到另一个绑定了 DLX 的队列上（即死信队列）。

### 死信队列
这个好理解，绑定了死信交换机的队列就是死信队列。

我们来看一个简单的例子。

首先我们来创建一个死信交换机，接着创建一个死信队列，再将死信交换机和死信队列绑定到一起：

```java
@Configuration
public class RabbitConfig {
    public static final String DLX_EXCHANGE_NAME = "dlx_exchange_name";
    public static final String DLX_QUEUE_NAME = "dlx_queue_name";
    public static final String DLX_ROUTING_KEY = "dlx_routing_key";

    /**
     * 配置死信交换机
     *
     * @return
     */
    @Bean
    DirectExchange dlxDirectExchange() {
        return new DirectExchange(DLX_EXCHANGE_NAME, true, false);
    }
    /**
     * 配置死信队列
     * @return
     */
    @Bean
    Queue dlxQueue() {
        return new Queue(DLX_QUEUE_NAME);
    }
    /**
     * 绑定死信队列和死信交换机
     * @return
     */
    @Bean
    Binding dlxBinding() {
        return BindingBuilder.bind(dlxQueue())
                .to(dlxDirectExchange())
                .with(DLX_ROUTING_KEY);
    }
}
```

这其实跟普通的交换机，普通的消息队列没啥两样。

接下来在声明一个交换机和队列。然后为消息队列配置死信交换机。这里我只展示配置死信交换机的代码

```java
@Bean
Queue queue() {
    Map<String, Object> args = new HashMap<>();
    //设置消息过期时间
    args.put("x-message-ttl", 0);
    //设置死信交换机
    args.put("x-dead-letter-exchange", DLX_EXCHANGE_NAME);
    //设置死信 routing_key
    args.put("x-dead-letter-routing-key", DLX_ROUTING_KEY);
    return new Queue(QUEUE_NAME,true,false,false,args);
}
```
就两个参数：

* x-dead-letter-exchange：配置死信交换机。
* x-dead-letter-routing-key：配置死信 routing_key。


这就配置好了。

将来发送到这个消息队列上的消息，如果发生了 nack、reject 或者过期等问题，就会被发送到 DLX 上，进而进入到与 DLX 绑定的消息队列上。

死信消息队列的消费和普通消息队列的消费并无二致：
```java
@RabbitListener(queues = RabbitConfig.DLX_QUEUE_NAME)
public void dlxHandle(String msg) {
    System.out.println("dlx msg = " + msg);
}
```