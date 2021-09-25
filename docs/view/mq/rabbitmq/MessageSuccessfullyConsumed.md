---
title: Rabbitmq 如何确保消息成功消费
autoPrev: messageConfirmation
---
::: tip

文章引用微信公众号：江南一点雨 https://mp.weixin.qq.com/s/5szA0KBpFn9G3DeS9C0U3w

:::

## 前言
前面我们已经讲了，怎样确保生产者消息发送成功，这篇文章我们来看看，怎样确保消息消费成功

首先我们先创建一个rabbitmq配置类和生产者，为下面的例子做准备。

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
        return new Queue(QUEUE_NAME,true);
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

```java
@RestController
public class SendMessage {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @GetMapping("/sendDirectMessage")
    public String sendDirectMessage() throws UnsupportedEncodingException {
        String messageId = "hello rabbitmq";

        // 发送消息
        rabbitTemplate.convertAndSend(RabbitConfig.EXCHANGE_NAME, RabbitConfig.ROUTING_KEY, messageId.getBytes("UTF-8"));
        return "ok";
    }
}
```

## 两种消费思路

RabbitMQ 的消息消费，整体上来说有两种不同的思路：

* 推（push）：MQ 主动将消息推送给消费者，这种方式需要消费者设置一个缓冲区去缓存消息，对于消费者而言，内存中总是有一堆需要处理的消息，所以这种方式的效率比较高，这也是目前大多数应用采用的消费方式。

* 拉（pull）：消费者主动从 MQ 拉取消息，这种方式效率并不是很高，不过有的时候如果服务端需要批量拉取消息，倒是可以采用这种方式。

两种方式我都举个例子看下。

先来看推（push）：

这种方式大家比较常见，就是通过 `@RabbitListener` 注解去标记消费者，如下：

```java
@Component
public class ConsumerDemo {
    @RabbitListener(queues = RabbitConfig.QUEUE_NAME)
    public void handle(String msg) {
        System.out.println("msg = " + msg);
    }
}
```

当监听的队列中有消息时，就会触发该方法。

再来看拉（pull）：

```java
@Test
public void test01() throws UnsupportedEncodingException {
    Object o = rabbitTemplate.receiveAndConvert(RabbitConfig.JAVABOY_QUEUE_NAME);
    System.out.println("o = " + new String(((byte[]) o),"UTF-8"));
}
```

调用 `receiveAndConvert` 方法，方法参数为队列名称，方法执行完成后，会从 MQ 上拉取一条消息下来，如果该方法返回值为 null，表示该队列上没有消息了。`receiveAndConvert` 方法有一个重载方法，可以在重载方法中传入一个等待超时时间，例如 3 秒。此时，假设队列中没有消息了，则 `receiveAndConvert` 方法会阻塞 3 秒，3 秒内如果队列中有了新消息就返回，3 秒后如果队列中还是没有新消息，就返回 null，这个等待超时时间要是不设置的话，默认为 0。

这是消息两种不同的消费模式。

如果需要从消息队列中持续获得消息，就可以使用推模式；如果只是单纯的消费一条消息，则使用拉模式即可。切忌将拉模式放到一个死循环中，变相的订阅消息，这会严重影响 RabbitMQ 的性能。