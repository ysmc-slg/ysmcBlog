---
description: 消息有效期
autoPrev: pattern
---

# RabbitMQ 消息有效期

如果不设置任何消息过期的相关参数，那么消息是不会过期的，即使消息没被消费掉，也会一直存储在队列中。

## TTL

TTL（Time-To-Live），消息存活的时间，即消息的有效期。如果消息的存活时间超过了 TTL 并且还没有被消费，此时消息就会进入 `死信交换机` ，关于死信交换机后面会讲。

TTL 的设置方式有两种：

1. 在声明队列的时候，给队列设置消息有效期，这样所有进入该队列的消息都会有一个相同的有效期。
2. 在发送消息的时候设置消息的有效期，这样不同的消息就具有不同的有效期。

那如果两个都设置了，`以时间短的为准`。

当我们设置了消息有效期后，消息过期了就会从队列中删除（进入死信队列），但是两种方式对应的删除时机有一些差异：

1. 对于第一种方式，给队列设置有效期，因为消息是存在队列中，队列的头部是最早要过期的消息，所以只需要一个定时任务，从头部开始扫描是否有过期的消息，如果头部过期了，那后面所有的都过期了，直接删除。
2. 对于第二种方式，消息过期后并不会立马被删除，而是当消息需要投递给消费者的时候才会删除，这是因为每条消息的过期时间都不一样，想要知道哪条消息过期，必须要遍历队列中的所有消息才能实现，当消息比较多时就比较耗费性能，因此对于第二种方式，当消息要投递给消费者的时候才会删除。

下面我们看一下具体用法：

## 给消息设置有效期

创建 springboot 项目，引入依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

配置rabbitmq连接信息：

```properties
spring.rabbitmq.host=192.168.96.128
spring.rabbitmq.port=5672
spring.rabbitmq.username=admin
spring.rabbitmq.password=123456
spring.rabbitmq.virtual-host=/
```

然后配置消息队列：

```java
@Configuration
public class RabbitConfig {
    public static final String TTL_EXCHANGE_NAME = "ysmc_ttl_exchange";
    public static final String TTL_QUEUE_NAME = "ysmc_ttl_queue";
    public static final String TTL_ROUTING_KEY = "ysmc_ttl_routing_key";

    @Bean
    DirectExchange ttlDirectExchange(){
        return new DirectExchange(TTL_EXCHANGE_NAME,true,false);
    }

    @Bean
    Queue ttlQueue(){
        return new Queue(TTL_QUEUE_NAME,true,false,false);
    }

    @Bean
    Binding ttlBinding(){
        return BindingBuilder.bind(ttlQueue())
                .to(ttlDirectExchange())
                .with(TTL_ROUTING_KEY);
    }
}
```

这个配置类主要干了三件事：配置消息队列、配置交换机以及将两者绑定在一起。

1. 配置一个 DirectExchange 交换机
2. 配置一个消息队列 `new Queue`
   1. 第一个参数是队列的名字
   2. 第二个参数，是否持久化
   3. 第三个参数，队列是否排他，即只能是此队列的 channel 使用
   4. 第四个参数，如果该队列没有任何订阅的消费者的话，该队列会被自动删除，一般用于临时队列
3. 将交换机和队列板顶到一起

这段配置应该很简单，没啥好解释的，有一个排他性，这里稍微多说两句：

::: tip 排他性

关于排他性，如果设置为 true，则该消息队列只有创建它的 Connection 才能访问，其他的 Connection 都不能访问该消息队列，如果试图在不同的连接中重新声明或者访问排他性队列，那么系统会报一个资源被锁定的错误。另一方面，对于排他性队列而言，当连接断掉的时候，该消息队列也会自动删除（无论该队列是否被声明为持久性队列都会被删除）。

:::

接下来提供一个消息的发送接口，如下：

```java
@RestController
public class HelloController {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @GetMapping("/hello")
    public void hello() {
        Message message = MessageBuilder.withBody("hello rabbitmq".getBytes())
                .setExpiration("10000")
                .build();
        rabbitTemplate.convertAndSend(RabbitConfig.TTL_EXCHANGE_NAME,RabbitConfig.TTL_ROUTING_KEY, message);
    }
}
```

在创建 Message 对象的时候我们可以设置消息的过期时间，这里设置消息的过期时间为 10 秒。

接下来启动项目，由于没有消费者，所以消息发送成功后并不会被消费，而是 10s 后删除。

![image-20230222162908500](https://img.zxqs.top/20230222162916.png)

## 给队列设置有效期

在声明队列的时候设置有效期。

```java
@Bean
Queue ttlQueue(){
  Map<String, Object> args = new HashMap<>();
    // 设置超时时间
    args.put("x-message-ttl",10000);
    return new Queue(TTL_QUEUE_NAME,true,false,false,args);
}
```

其他配置和上面的一样，就不写了。

设置完成后，我们修改消息的发送逻辑，如下：

```java
@RestController
public class HelloController {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @GetMapping("/hello")
    public void hello() {
        rabbitTemplate.convertAndSend(RabbitConfig.TTL_EXCHANGE_NAME,RabbitConfig.TTL_ROUTING_KEY, "hello rabbitmq");
    }
}
```

![image-20230222172721832](https://img.zxqs.top/20230222172723.png)

可以看到，消息队列的 Features 属性为 D 和 TTL，D 表示消息队列中消息持久化，TTL 则表示消息会过期。

10s 之后刷新页面，发现消息数量已经恢复为 0。

这就是给消息队列设置消息过期时间，一旦设置了，所有进入到该队列的消息都有一个过期时间了。






