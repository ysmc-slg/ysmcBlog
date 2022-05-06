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
 
    //Direct交换机
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

![图1](/blogImg/rabbitmq/springbootRabbitmq1.png)

此时消息已经推送到rabbitMq服务器上面了。

然后我们在创建一个消费者。

```java
@Component
//监听的队列名称 
@RabbitListener(queues = DirctConfig.QUEUE_DEMO)
public class Consumer {

    @RabbitHandler
    public void process(Map testMessage) {
        System.out.println("DirectReceiver消费者收到消息  : " + testMessage.toString());
    }

}
```

重新启动项目就能收到传递的消息。

```java
DirectReceiver消费者收到消息  : {createTime=2021-09-24 10:54:25, messageId=f65dc707-0d6b-436b-848c-06a7d91491b2, messageData=test message, hello!}
```

如果咱们配置多台监听绑定到同一个直连交互的同一个队列，会怎么样？

```java
DirectReceiver消费者2收到消息  : {createTime=2021-09-24 11:13:56, messageId=6f5b49e3-6c8b-4941-b0dd-524854560d6b, messageData=test message, hello!}
DirectReceiver消费者1收到消息  : {createTime=2021-09-24 11:14:04, messageId=12147122-588f-462d-9502-bee2136ec8a9, messageData=test message, hello!}
DirectReceiver消费者2收到消息  : {createTime=2021-09-24 11:14:12, messageId=ab7e5626-7f0e-4170-a97d-6162c6aeb92d, messageData=test message, hello!}
DirectReceiver消费者1收到消息  : {createTime=2021-09-24 11:14:13, messageId=dfff4e42-4bd0-4968-b094-fdafc40019a3, messageData=test message, hello!}
DirectReceiver消费者2收到消息  : {createTime=2021-09-24 11:14:14, messageId=9cb87fc0-7d7c-43e3-9994-c8fa0022f307, messageData=test message, hello!}
DirectReceiver消费者1收到消息  : {createTime=2021-09-24 11:14:15, messageId=aecdbb76-aedd-48a8-84fa-c91d69502a36, messageData=test message, hello!}
DirectReceiver消费者2收到消息  : {createTime=2021-09-24 11:14:16, messageId=9ee07fc4-2e93-413a-a012-f75bdacb7528, messageData=test message, hello!}
DirectReceiver消费者1收到消息  : {createTime=2021-09-24 11:14:16, messageId=27f4be1b-c8d7-48a0-b09b-959d8692a3a3, messageData=test message, hello!}
DirectReceiver消费者2收到消息  : {createTime=2021-09-24 11:14:17, messageId=d9defe40-1bee-41c7-91ff-fdceb4f86473, messageData=test message, hello!}
DirectReceiver消费者1收到消息  : {createTime=2021-09-24 11:14:18, messageId=134554d9-7c7c-411e-9879-ba0be03e42fd, messageData=test message, hello!}
DirectReceiver消费者2收到消息  : {createTime=2021-09-24 11:14:18, messageId=dd4ca778-d766-4cf3-ab99-ebbee1b04eb8, messageData=test message, hello!}
DirectReceiver消费者1收到消息  : {createTime=2021-09-24 11:14:19, messageId=e37f2e78-bf17-435e-ae4a-00f3af9586c9, messageData=test message, hello!}
DirectReceiver消费者2收到消息  : {createTime=2021-09-24 11:14:20, messageId=bd2ca0b6-98ed-4bc7-88d6-60c0e4042033, messageData=test message, hello!}
```

可以看到是实现了轮询的方式对消息进行消费，而且不存在重复消费(理想情况下)。

## Topic (主题)

首先还是创建一个配置类
```java
@Configuration
public class TopicConfig {
    public static final String QUEUE_Name = "topic_queue";
    public static final String QUEUE_Name2 = "topic_queue2";
    public static final String EXCHANGE_Name = "topic_exchange";
    public static final String ROUTING_KEY = "topic.man";
    public static final String ROUTING_KEY2 = "topic.woman";

    @Bean
    public Queue firstQueue() {
        return new Queue(QUEUE_Name);
    }

    @Bean
    public Queue secondQueue() {
        return new Queue(QUEUE_Name2);
    }

    @Bean
    TopicExchange exchange() {
        return new TopicExchange("topicExchange");
    }


    //将firstQueue和topicExchange绑定,而且绑定的键值为topic.man
    //这样只要是消息携带的路由键是topic.man,才会分发到该队列
    @Bean
    Binding bindingExchangeMessage() {
        return BindingBuilder.bind(firstQueue()).to(exchange()).with(ROUTING_KEY);
    }

    //将secondQueue和topicExchange绑定,而且绑定的键值为用上通配路由键规则topic.#
    // 这样只要是消息携带的路由键是以topic.开头,都会分发到该队列
    @Bean
    Binding bindingExchangeMessage2() {
        return BindingBuilder.bind(secondQueue()).to(exchange()).with("topic.#");
    }
}
```

::: tip 说明

bindingExchangeMessage方法中绑定的是队列名是`topic_queue`的队列，routingkey是`topic.man`

bindingExchangeMessage2方法中绑定的是队列名为`topic_queue2`的队列，routingkey是以`topic.`开头的都会分发到该队列

:::

然后添加2个接口，用于推送消息到主题交换机：

```java
@RestController
public class SendMessage {
    @Autowired
    //使用RabbitTemplate,这提供了接收/发送等等方法
    RabbitTemplate rabbitTemplate;

    @GetMapping("/sendTopicMessage1")
    public String sendTopicMessage1() {
        String messageId = String.valueOf(UUID.randomUUID());
        String messageData = "message: M A N ";
        String createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        Map<String, Object> manMap = new HashMap<>();
        manMap.put("messageId", messageId);
        manMap.put("messageData", messageData);
        manMap.put("createTime", createTime);
        rabbitTemplate.convertAndSend(TopicConfig.EXCHANGE_Name, "topic.man", manMap);
        return "ok";
    }

    @GetMapping("/sendTopicMessage2")
    public String sendTopicMessage2() {
        String messageId = String.valueOf(UUID.randomUUID());
        String messageData = "message: woman is all ";
        String createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        Map<String, Object> womanMap = new HashMap<>();
        womanMap.put("messageId", messageId);
        womanMap.put("messageData", messageData);
        womanMap.put("createTime", createTime);
        rabbitTemplate.convertAndSend(TopicConfig.EXCHANGE_Name, "topic.woman", womanMap);
        return "ok";
    }
}
```

同时在添加连个消费者：

```java
@Component
@RabbitListener(queues = "topic_queue")
public class Consumer {
    @RabbitHandler
    public void process(Map testMessage) {
        System.out.println("TopicManReceiver消费者1收到消息  : " + testMessage.toString());
    }
}
```

```java
@Component
@RabbitListener(queues = "topic_queue2")
public class Consumer2 {

    @RabbitHandler
    public void process(Map testMessage) {
        System.out.println("TopicManReceiver消费者2收到消息  : " + testMessage.toString());
    }

}
```

启动项目我们先访问`/sendTopicMessage1`接口，可以看到`Consumer`和`Consumer2`都进行了消费
```java
TopicManReceiver消费者2收到消息  : {createTime=2021-09-24 12:55:32, messageId=7040c8c3-657b-44b9-a3a3-32193b8ea76c, messageData=message: M A N }
TopicManReceiver消费者1收到消息  : {createTime=2021-09-24 12:55:32, messageId=7040c8c3-657b-44b9-a3a3-32193b8ea76c, messageData=message: M A N }
```
::: tip 发送流程

浏览器访问`/sendTopicMessage1`，接口通过`rabbitTemplate.convertAndSend`将消息发送到交换机`topic_exchange`，routingkey为`topic.man`，正好与交换机下绑定了`topic_queue`、`topic_queue2`两个队列的routingkey匹配，交换机就会将消息发给这两个队列。同时两个消费者分别在监听这两个队列，一旦有消息进来就会触发回调进行打印。

:::

我们再来访问`/sendTopicMessage2`接口，此时只有消费者2打印了一条记录

```java
TopicManReceiver消费者2收到消息  : {createTime=2021-09-24 13:14:40, messageId=16dcc347-9545-4e0c-a6a8-e2e648dad875, messageData=message: woman is all }
```
`/sendTopicMessage2`的routingkey为`topic.woman`，只能被`topic_queue2`匹配，所以只有`Consumer2`能消费此条消息。

## Fanout (扇出)

还是先创建一个配置类`FanoutConfig`
```java
@Configuration
public class FanoutConfig {
    /**
     *  创建三个队列 ：fanout.A   fanout.B  fanout.C
     *  将三个队列都绑定在交换机 fanoutExchange 上
     *  因为是扇型交换机, 路由键无需配置,配置也不起作用
     */

    public static final String QUEUE_NAME_A = "fanoutA";
    public static final String QUEUE_NAME_B = "fanoutB";
    public static final String QUEUE_NAME_C = "fanoutC";
    public static final String EXCHANGE_NAME = "fanoutExchange";

    @Bean
    public Queue queueA() {
        return new Queue(QUEUE_NAME_A,true);
    }

    @Bean
    public Queue queueB() {
        return new Queue(QUEUE_NAME_B,true);
    }

    @Bean
    public Queue queueC() {
        return new Queue(QUEUE_NAME_C,true);
    }

    @Bean
    FanoutExchange fanoutExchange() {
        return new FanoutExchange(EXCHANGE_NAME);
    }

    @Bean
    Binding bindingExchangeA() {
        return BindingBuilder.bind(queueA()).to(fanoutExchange());
    }

    @Bean
    Binding bindingExchangeB() {
        return BindingBuilder.bind(queueB()).to(fanoutExchange());
    }

    @Bean
    Binding bindingExchangeC() {
        return BindingBuilder.bind(queueC()).to(fanoutExchange());
    }
}
```

创建三个消费者
```java
@Component
@RabbitListener(queues = FanoutConfig.QUEUE_NAME_A)
public class ConsumerA {

    @RabbitHandler
    public void process(Map message){
        System.out.println("FanoutReceiver消费者A收到消息  : " +message.toString());
    }
}
```

```java
@Component
@RabbitListener(queues = FanoutConfig.QUEUE_NAME_B)
public class ConsumerB {
    @RabbitHandler
    public void process(Map message){
        System.out.println("FanoutReceiver消费者B收到消息  : " +message.toString());
    }
}
```
```java
@Component
@RabbitListener(queues = FanoutConfig.QUEUE_NAME_C)
public class ConsumerC {

    @RabbitHandler
    public void process(Map message){
        System.out.println("FanoutReceiver消费者C收到消息  : " +message.toString());
    }
}
```

写一个接口用于推送消息。
```java
@RestController
public class SendMessage {
    @Autowired
    //使用RabbitTemplate,这提供了接收/发送等等方法
    RabbitTemplate rabbitTemplate;

    @GetMapping("/sendFanoutMessage")
    public String sendFanoutMessage() {
        String messageId = String.valueOf(UUID.randomUUID());
        String messageData = "message: testFanoutMessage ";
        String createTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));
        Map<String, Object> map = new HashMap<>();
        map.put("messageId", messageId);
        map.put("messageData", messageData);
        map.put("createTime", createTime);
        // fanout不需要routingkey，所以为null
        rabbitTemplate.convertAndSend(FanoutConfig.EXCHANGE_NAME, null, map);
        return "ok";
    }
}
```

结果：

```java
FanoutReceiver消费者C收到消息  : {createTime=2021-09-24 14:17:05, messageId=0f91dbb8-9c49-42f8-97a6-85c20caca3bf, messageData=message: testFanoutMessage }
FanoutReceiver消费者A收到消息  : {createTime=2021-09-24 14:17:05, messageId=0f91dbb8-9c49-42f8-97a6-85c20caca3bf, messageData=message: testFanoutMessage }
FanoutReceiver消费者B收到消息  : {createTime=2021-09-24 14:17:05, messageId=0f91dbb8-9c49-42f8-97a6-85c20caca3bf, messageData=message: testFanoutMessage }
```


