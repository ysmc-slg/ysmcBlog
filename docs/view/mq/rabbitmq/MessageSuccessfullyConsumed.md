---
title: Rabbitmq 如何确保消息成功消费
autoPrev: messageConfirmation
---
文章引用微信公众号：江南一点雨 https://mp.weixin.qq.com/s/5szA0KBpFn9G3DeS9C0U3w

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
