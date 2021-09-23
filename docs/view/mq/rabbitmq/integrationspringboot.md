---
title: springboot整合rabbitmq
autoPrev: messageDistribution
---

上面几篇文章，我们了解了rabbitmq原生的使用方法。为了更便捷的使用rabbitmq，springboot也整合了rabbitmq。我们就来看看怎样进行整合吧！

## 引入依赖

```xml
<!--rabbitmq-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

## 配置rabbitmq
```yml
spring:
  #配置rabbitMq 服务器
  rabbitmq:
    host: 127.0.0.1
    port: 5672
    username: root
    password: root
    #虚拟host 可以不设置,使用server默认host
    #virtual-host: JCcccHost
```

## direct(直连)
创建一个配置类
```java
@Configuration
public class DirectRabbitConfig {
    public static final String QUEUE_DEMO = "queue_demo";
    public static final String EXCHANGE_DEMO = "exchange_demo";
    public static final String HELLO_ROUTING_KEY = "hello_routing_key";

    //队列 
    @Bean
    public Queue TestDirectQueue() {
        // durable:是否持久化,默认是false,持久化队列：会被存储在磁盘上，当消息代理重启时仍然存在，暂存队列：当前连接有效
        // exclusive:默认也是false，只能被当前创建的连接使用，而且当连接关闭后队列即被删除。此参考优先级高于durable
        // autoDelete:是否自动删除，当没有生产者或者消费者使用此队列，该队列会自动删除。
        //   return new Queue("TestDirectQueue",true,true,false);
 
        //一般设置一下队列的持久化就好,其余两个就是默认false
        return new Queue(QUEUE_DEMO,true);
    }
 
    //Direct交换机 起名：TestDirectExchange
    @Bean
    DirectExchange TestDirectExchange() {
      //  return new DirectExchange("TestDirectExchange",true,true);
        return new DirectExchange(EXCHANGE_DEMO,true,false);
    }
 
    //绑定  将队列和交换机绑定, 并设置用于匹配键：TestDirectRouting
    @Bean
    Binding bindingDirect() {
        return BindingBuilder.bind(TestDirectQueue()).to(TestDirectExchange()).with(HELLO_ROUTING_KEY);
    }
 
}
```

然后写个简单的接口进行消息推送

```java
@RestController
public class SendMessage {
    @Autowired
    //使用RabbitTemplate,这提供了接收/发送等等方法
    RabbitTemplate rabbitTemplate;

    @GetMapping("/sendDirectMessage")
    public String sendDirectMessage() {
        String messageId = String.valueOf(UUID.randomUUID());
        String messageData = "test message, hello!";
        String createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        Map<String,Object> map=new HashMap<>();
        map.put("messageId",messageId);
        map.put("messageData",messageData);
        map.put("createTime",createTime);
        //将消息携带绑定键值：DirctConfig.EXCHANGE_DEMO 发送到交换机HELLO_ROUTING_KEY
        rabbitTemplate.convertAndSend(DirctConfig.EXCHANGE_DEMO, DirctConfig.HELLO_ROUTING_KEY, map);
        return "ok";
    }
}
```

访问`/sendDirectMessage`地址，进入rabbitmq后台查看，如图：
