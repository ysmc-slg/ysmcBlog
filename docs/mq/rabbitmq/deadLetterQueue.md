---
description: 死信队列
autoPrev: outtime
---

# 死信队列

## 死信交换机

死信交换机，`Dead-Letter-Exchange` 即 DLX。

死信交换机用来接收死信消息（Dead Message）的，那什么是死信消息呢？一般消息变成死信消息有如下几种情况：

* 消息被拒绝(Basic.Reject/Basic.Nack)，并且设置 queue 参数为false
* 消息过期
* 队列到达最大长度

当消息在一个队列中变成死信消息后，此时就会被发送到 DLX，绑定 DLX 的消息队列则成为死信队列。

DLX 本质上也是一个普普通通的交换机，我们可以为任意队列指定 DLX，当该队列中存在死信时，RabbitMQ 就会自动的将这个死信发布到 DLX 上去，进而被路由到另一个绑定了 DLX 的队列上（即死信队列）。

## 死信队列

这个好理解，绑定了死信交换机的队列就是死信队列。

## 实践

我们来看一个简单的例子。

首先我们来创建一个死信交换机，接着创建一个死信队列，再将死信交换机和死信队列绑定到一起：

```java
@Configuration
public class RabbitConfig {

    public static final String DLX_EXCHANGE = "dlx_exchange";
    public static final String DLX_QUEUE = "dlx_queue";
    public static final String DLX_ROUTING_KEY = "dlx_routing_key";

    public static final String MSG_EXCHANGE = "msg_exchange";
    public static final String MSG_QUEUE = "msg_queue";
    public static final String MSG_ROUTING_KEY = "msg_routing_key";


    @Bean
    DirectExchange dlxDirectExchange(){
        return new DirectExchange(DLX_EXCHANGE,true,false);
    }

    @Bean
    Queue dlxQueue(){
        return new Queue(DLX_QUEUE,true,false,false);
    }
    @Bean
    Binding dlxBinding(){
        return BindingBuilder.bind(dlxQueue())
                .to(dlxDirectExchange())
                .with(DLX_ROUTING_KEY);
    }

    @Bean
    DirectExchange msgDirectExchange(){
        return new DirectExchange(MSG_EXCHANGE,true,false);
    }

    @Bean
    Queue msgQueue(){
        Map<String, Object> args = new HashMap<>();
        // 设置超时时间
        args.put("x-message-ttl",0);
        // 死信交换机
        args.put("x-dead-letter-exchange",DLX_EXCHANGE);
        // 死信 routingkey
        args.put("x-dead-letter-routing-key",DLX_ROUTING_KEY);
        return new Queue(MSG_QUEUE,true,false,false,args);
    }

    @Bean
    Binding msgBinding(){
        return BindingBuilder.bind(msgQueue())
                .to(msgDirectExchange())
                .with(MSG_ROUTING_KEY);
    }

}
```

配置死信交换机 `dlxDirectExchange` 和 死信队列 `dlxQueue`，然后再配置普通的交换机和队列，在普通队列中配置消息过期到达的交换机也就是死信交换机。

配置死信交换机就需要两个参数：

* x-dead-letter-exchange：死信交换机名称。
* x-dead-letter-routing-key：配置死信 routing_key。

将来发送到这个消息队列上的消息，如果发生了 nack、reject 或者过期等问题，就会被发送到 DLX 上，进而进入到与 DLX 绑定的消息队列上。

```java
@RestController
public class TestController {

    @Autowired
    RabbitTemplate rabbitTemplate;

    @GetMapping("/send")
    public void test(){
        Message msg = MessageBuilder.withBody(("hello rabbitmq"+new Date()).getBytes()).build();
        rabbitTemplate.send(RabbitConfig.MSG_EXCHANGE,RabbitConfig.MSG_ROUTING_KEY,msg);
    }
}
```

然后监听死信队列，死信消息队列的消费和普通消息队列的消费并无二致：

```java
@Component
public class Consumer {

    private static final Logger logger = LoggerFactory.getLogger(Consumer.class);

    @RabbitListener(queues = RabbitConfig.DLX_QUEUE)
    public void consumer(String message){
        logger.info("message ====> {}",message);
    }
}
```

**流程：** 消息发送到队列MSG_QUEUE中，由于过期时间是0，并且没有消费者，所以消息会直接进入死信交换机，然后到死信队列，最后由监听死信队列的消费者消费消息。

