---
description: RabbitMQ 七种消息收发方式
autoPrev: web
---

# RabbitMQ支持的消息模型

大部分情况下，我们可能都是在 Spring Boot 或者 Spring Cloud 环境下使用 RabbitMQ，因此本文我也主要从这两个方面来和大家分享 RabbitMQ 的用法。
引入依赖

![image-20230221232710883](https://img.zxqs.top/image-20230221232710883.png)

1. 生产者（Publisher）：发布消息到 RabbitMQ 中的交换机（Exchange）上。
2. 交换机（Exchange）：和生产者建立连接并接收生产者的消息。
3. 消费者（Consumer）：监听 RabbitMQ 中的 Queue 中的消息。
4. 队列（Queue）：Exchange 将消息分发到指定的 Queue，Queue 和消费者进行交互。
5. 路由（Routes）：交换机转发消息到队列的规则。

RabbitMQ 官网介绍了如下几种消息分发的形式：

![image-20230221232830673](https://img.zxqs.top/image-20230221232830673.png)

![image-20230221232845882](https://img.zxqs.top/image-20230221232845882.png)

![image-20230221232859835](https://img.zxqs.top/image-20230221232859835.png)

这里给出了七种，其中第七种是消息确认，我们后面会讲。

## Hello World

![image-20230221233039807](https://img.zxqs.top/image-20230221233039807.png)

这个其实是默认的交换机，我们需要提供一个生产者一个队列以及一个消费者。

来看看代码实现：

首先创建一个 springboot 项目，然后添加rabbitmq依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
```

```properties
spring.rabbitmq.host=192.168.96.128
spring.rabbitmq.port=5672
spring.rabbitmq.username=admin
spring.rabbitmq.password=123456
spring.rabbitmq.virtual-host=/
```

先来看看队列的定义：

```java
@Configuration
public class RabbitMqConfig {

    public static final String QUEUE_NAME = "ysmc_queue";

    @Bean
    public Queue queue(){
        /**
         * 1. 第一个参数是队列的名称
         * 2. 第二个参数是持久化
         * 3. 该队列是否具有排他性，有安排他性的队列只能被创建起的 Connection 处理
         * 4. 如果该队列没有消费者，那么是否自动删除该队列
         */
        return new Queue(QUEUE_NAME,true,false,false);
    }

}
```

再来看看消息消费者的定义：

```java
@Component
public class MsgReceiver {

    @RabbitListener(queues = RabbitMqConfig.QUEUE_NAME)
    public void handleMsg(String msg){
        System.out.println("msg = " + msg);
    }
}
```

消息发送：

```java
@SpringBootTest
class RabbitmqdemoApplicationTests {

    @Autowired
    RabbitTemplate rabbitTemplate;


    @Test
    void contextLoads() {
        rabbitTemplate.convertAndSend(RabbitMqConfig.QUEUE_NAME, "hello");
    }

}
```

这个时候使用的其实是默认的直连交换机（DirectExchange），DirectExchange 的路由策略是将消息队列绑定到一个 DirectExchange 上，当一条消息到达 DirectExchange 时会被转发到与该条消息 `routing key` 相同的 `Queue` 上，例如消息队列名为 “hello-queue”，则 routingkey 为 “hello-queue” 的消息会被该消息队列接收。

## Work queues

这种情况是这样的：

一个生产者，一个默认的交换机（DirectExchange），一个队列，两个消费者，如下图：

![image-20230221233856522](https://img.zxqs.top/image-20230221233856522.png)

一个队列对应了多个消费者，默认情况下，由队列对消息进行平均分配，消息会被分到不同的消费者手中。消费者可以配置各自的并发能力，进而提高消息的消费能力，也可以配置手动 ack，来决定是否要消费某一条消息。

先来看并发能力的配置，如下：

```java
@Component
public class HelloWorldConsumer {
    @RabbitListener(queues = RabbitMqConfig.QUEUE_NAME)
    public void receive(String msg) {
        System.out.println("receive = " + msg);
    }

    @RabbitListener(queues = RabbitMqConfig.QUEUE_NAME,concurrency = "10")
    public void receive2(String msg) {
        System.out.println("receive2 = " + msg+"------->"+Thread.currentThread().getName());
    }
}
```

可以看到，第二个消费者我配置了 concurrency 为 10，此时，对于第二个消费者，将会同时存在 10 个子线程去消费消息。

启动项目，在 RabbitMQ 后台也可以看到一共有 11 个消费者。

![image-20230221234319252](https://img.zxqs.top/image-20230221234319252.png)

此时，如果生产者发送 10 条消息，就会一下都被消费掉。

消息发送方式如下：

```java
@SpringBootTest
class RabbitmqdemoApplicationTests {

    @Autowired
    RabbitTemplate rabbitTemplate;


    @Test
    void contextLoads() {
        for (int i = 0; i < 10; i++) {
            rabbitTemplate.convertAndSend(RabbitMqConfig.QUEUE_NAME, "hello");
        }
    }

}
```

消息消费日志如下：

![image-20230221234446706](https://img.zxqs.top/image-20230221234446706.png)

可以看到，消息都被第一个消费者消费了。但是小伙伴们需要注意，事情并不总是这样（多试几次就可以看到差异），消息也有可能被第一个消费者消费（只是由于第二个消费者有十个线程一起开动，所以第二个消费者消费的消息占比更大）。

## Publish/Subscribe


再来看发布订阅模式，这种情况是这样：

一个生产者，多个消费者，每一个消费者都有自己的一个队列，生产者没有将消息直接发送到队列，而是发送到了交换机，每个队列绑定交换机，生产者发送的消息经过交换机，到达队列，实现一个消息被多个消费者获取的目的。需要注意的是，如果将消息发送到一个没有队列绑定的 Exchange上面，那么该消息将会丢失，这是因为在 RabbitMQ 中 Exchange 不具备存储消息的能力，只有队列具备存储消息的能力，如下图：

![image-20230221234718576](https://img.zxqs.top/image-20230221234718576.png)

这种情况下，我们有四种交换机可供选择，分别是：

* Direct
* Fanout
* Topic
* Header

### Direct

DirectExchange 的路由策略是将消息队列绑定到一个 DirectExchange 上，当一条消息到达 DirectExchange 时会被转发到与该条消息 routing key 相同的 Queue 上，例如消息队列名为 “hello-queue”，则 routingkey 为 “hello-routingkey” 的消息会被该消息队列接收。DirectExchange 的配置如下：

```java
@Configuration
public class RabbitMqConfig {

    public static final String DIRECT_QUEUE_NAME = "direct_queue_name";
    public static final String DIRECT_EXCHANGE_NAME = "direct_exchange_name";
    public static final String DIRECT_QUEUE_NAME2 = "direct_queue_name2";

    @Bean
    public Queue queue(){
        return new Queue(DIRECT_QUEUE_NAME,true,false,false);
    }

    @Bean
    public Queue queue2(){
        return new Queue(DIRECT_QUEUE_NAME2,true,false,false);
    }

    /**
     * 直连交换机
     *
     * 参数一：交换机名称
     * 参数二：是否持久化交换机
     * 参数三：以及长期未用时是否删除
     *
     * @return
     */
    @Bean
    DirectExchange directExchange(){
        return new DirectExchange(DIRECT_EXCHANGE_NAME,true,false);
    }

    @Bean
    Binding binding(){
        return BindingBuilder.bind(queue())
                .to(directExchange())
                .with(DIRECT_QUEUE_NAME);
    }

    @Bean
    Binding binding2(){
        return BindingBuilder.bind(queue2())
                .to(directExchange())
                .with(DIRECT_QUEUE_NAME2);
    }
}
```

* 首先提供一个消息队列Queue，然后创建一个DirectExchange对象，三个参数分别是名字，重启后是否依然有效以及长期未用时是否删除。
* 创建一个Binding对象将Exchange和Queue绑定在一起。

再来看看消费者：

```java
@Component
public class MsgReceiver {

    @RabbitListener(queues = RabbitMqConfig.DIRECT_QUEUE_NAME)
    public void handleMsg(String msg){
        System.out.println("msg = " + msg);
    }

    @RabbitListener(queues = RabbitMqConfig.DIRECT_QUEUE_NAME2)
    public void handleMsg2(String msg){
        System.out.println("msg = " + msg);
    }

}
```

最后发送消息

```java
@SpringBootTest
class PublisherApplicationTests {

    @Autowired
    RabbitTemplate rabbitTemplate;

    @Test
    void contextLoads() {
        rabbitTemplate.convertAndSend(RabbitMqConfig.DIRECT_EXCHANGE_NAME,RabbitMqConfig.DIRECT_QUEUE_NAME,"队列1");
        rabbitTemplate.convertAndSend(RabbitMqConfig.DIRECT_EXCHANGE_NAME,RabbitMqConfig.DIRECT_QUEUE_NAME2,"队列2");
    }

}
```

### Fanout(广播)

FanoutExchange 的数据交换策略是把所有到达 FanoutExchange 的消息转发给所有与它绑定的 Queue 上，在这种策略中，routingkey 将不起任何作用，FanoutExchange 配置方式如下：

```java
@Configuration
public class FanoutConfig {

    public static final String FANOUT_QUEUE_NAME = "fanout_queue_name";
    public static final String FANOUT_EXCHANGE_NAME = "fanout_exchange_name";
    public static final String FANOUT_QUEUE_NAME2 = "fanout_queue_name2";


    @Bean
    FanoutExchange fanoutExchange(){
        return new FanoutExchange(FANOUT_EXCHANGE_NAME,true,false);
    }


    @Bean
    Queue queue(){
        return new Queue(FANOUT_QUEUE_NAME,true,false,false);
    }

    @Bean
    Queue queue2(){
        return new Queue(FANOUT_QUEUE_NAME2,true,false,false);
    }

    @Bean
    Binding binding(){
        return BindingBuilder.bind(queue())
                .to(fanoutExchange());
    }

    @Bean
    Binding binding2(){
        return BindingBuilder.bind(queue2())
                .to(fanoutExchange());
    }

}
```

在这里首先创建 FanoutExchange，参数含义与创建 DirectExchange 参数含义一致，然后创建两个 Queue，再将这两个 Queue 都绑定到 FanoutExchange 上。接下来创建两个消费者，如下：

```java
@Component
public class FanoutMsgReceiver {
    @RabbitListener(queues = FanoutConfig.FANOUT_QUEUE_NAME)
    public void handleMsg(String msg){
        System.out.println("msg = " + msg);
    }

    @RabbitListener(queues = FanoutConfig.FANOUT_QUEUE_NAME2)
    public void handleMsg2(String msg){
        System.out.println("msg = " + msg);
    }
}
```

两个消费者分别消费两个消息队列中的消息，然后在单元测试中发送消息，如下：

```java
@SpringBootTest
class PublisherApplicationTests {

    @Autowired
    RabbitTemplate rabbitTemplate;

    @Test
    void contextLoads2() {
        rabbitTemplate.convertAndSend(FanoutConfig.FANOUT_EXCHANGE_NAME,null,"队列1");
    }

}
```

结果是两个消费者都能收到这条消息

### Topic

TopicExchange 是比较复杂但是也比较灵活的一种路由策略，在 TopicExchange 中，Queue 通过 routingkey 绑定到 TopicExchange 上，当消息到达 TopicExchange 后，TopicExchange 根据消息的 routingkey 将消息路由到一个或者多个 Queue 上。TopicExchange 配置如下：

```java
Configuration
public class RabbitTopicConfig {
    public final static String TOPICNAME = "sang-topic";
    @Bean
    TopicExchange topicExchange() {
        return new TopicExchange(TOPICNAME, true, false);
    }

    @Bean
    Queue xiaomi() {
        return new Queue("xiaomi");
    }

    @Bean
    Queue huawei() {
        return new Queue("huawei");
    }

    @Bean
    Queue phone() {
        return new Queue("phone");
    }

    @Bean
    Binding xiaomiBinding() {
        return BindingBuilder.bind(xiaomi()).to(topicExchange())
                .with("xiaomi.#");
    }

    @Bean
    Binding huaweiBinding() {
        return BindingBuilder.bind(huawei()).to(topicExchange())
                .with("huawei.#");
    }

    @Bean
    Binding phoneBinding() {
        return BindingBuilder.bind(phone()).to(topicExchange())
                .with("#.phone.#");
    }
}
```

1. 首先创建 TopicExchange，参数和前面的一致。然后创建三个 Queue，第一个 Queue 用来存储和 “xiaomi” 有关的消息，第二个 Queue 用来存储和 “huawei” 有关的消息，第三个 Queue 用来存储和 “phone” 有关的消息。
2. 将三个 Queue 分别绑定到 TopicExchange 上，第一个 Binding 中的 “xiaomi.#” 表示消息的 routingkey 凡是以 “xiaomi” 开头的，都将被路由到名称为 “xiaomi” 的 Queue 上，第二个 Binding 中的 “huawei.#” 表示消息的 routingkey 凡是以 “huawei” 开头的，都将被路由到名称为 “huawei” 的 Queue 上，第三个 Binding 中的 “#.phone.#” 则表示消息的 routingkey 中凡是包含 “phone” 的，都将被路由到名称为 “phone” 的 Queue 上。
3. `*` 匹配不多不少恰好1个词  `#` 匹配一个或多个词

接下来针对三个 Queue 创建三个消费者，如下：

```java
@Component
public class TopicReceiver {
    @RabbitListener(queues = "phone")
    public void handler1(String message) {
        System.out.println("PhoneReceiver:" + message);
    }

    @RabbitListener(queues = "xiaomi")
    public void handler2(String message) {
        System.out.println("XiaoMiReceiver:"+message);
    }

    @RabbitListener(queues = "huawei")
    public void handler3(String message) {
        System.out.println("HuaWeiReceiver:"+message);
    }
}
```

然后在单元测试中进行消息的发送，如下：

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class RabbitmqApplicationTests {
    @Autowired
    RabbitTemplate rabbitTemplate;
    @Test
    public void topicTest() {

        rabbitTemplate.convertAndSend(RabbitTopicConfig.TOPICNAME,"xiaomi.news","小米新闻..");

        rabbitTemplate.convertAndSend(RabbitTopicConfig.TOPICNAME,"huawei.news","华为新闻..");

        rabbitTemplate.convertAndSend(RabbitTopicConfig.TOPICNAME,"xiaomi.phone","小米手机..");

        rabbitTemplate.convertAndSend(RabbitTopicConfig.TOPICNAME,"huawei.phone","华为手机..");

        rabbitTemplate.convertAndSend(RabbitTopicConfig.TOPICNAME,"phone.news","手机新闻..");
    }
}
```

根据 RabbitTopicConfig 中的配置，第一条消息将被路由到名称为 “xiaomi” 的 Queue 上，第二条消息将被路由到名为 “huawei” 的 Queue 上，第三条消息将被路由到名为 “xiaomi” 以及名为 “phone” 的 Queue 上，第四条消息将被路由到名为 “huawei” 以及名为 “phone” 的 Queue 上，最后一条消息则将被路由到名为 “phone” 的 Queue 上。


### Header

HeadersExchange 是一种使用较少的路由策略，HeadersExchange 会根据消息的 Header 将消息路由到不同的 Queue 上，这种策略也和 routingkey无关，配置如下：

```java
@Configuration
public class RabbitHeaderConfig {
    public final static String HEADERNAME = "rabbitmq-header";
    @Bean
    HeadersExchange headersExchange() {
        return new HeadersExchange(HEADERNAME, true, false);
    }
    @Bean
    Queue queueName() {
        return new Queue("name-queue");
    }
    @Bean
    Queue queueAge() {
        return new Queue("age-queue");
    }
    @Bean
    Binding bindingName() {
        Map<String, Object> map = new HashMap<>();
        map.put("name", "sang");
        return BindingBuilder.bind(queueName())
                .to(headersExchange()).whereAny(map).match();
    }
    @Bean
    Binding bindingAge() {
        return BindingBuilder.bind(queueAge())
                .to(headersExchange()).where("age").exists();
    }
}
```

这里的配置大部分和前面介绍的一样，差别主要体现的 Binding 的配置上，第一个 bindingName 方法中，whereAny 表示消息的 Header 中只要有一个 Header 匹配上 map 中的 key/value，就把该消息路由到名为 “name-queue” 的 Queue 上，这里也可以使用 whereAll 方法，表示消息的所有 Header 都要匹配。whereAny 和 whereAll 实际上对应了一个名为 x-match 的属性。bindingAge 中的配置则表示只要消息的 Header 中包含 age，不管 age 的值是多少，都将消息路由到名为 “age-queue” 的 Queue 上。

接下来创建两个消息消费者：

```java
@Component
public class HeaderReceiver {
    @RabbitListener(queues = "name-queue")
    public void handler1(byte[] msg) {
        System.out.println("HeaderReceiver:name:"
                + new String(msg, 0, msg.length));
    }
    @RabbitListener(queues = "age-queue")
    public void handler2(byte[] msg) {
        System.out.println("HeaderReceiver:age:"
                + new String(msg, 0, msg.length));
    }
}
```

注意这里的参数用 byte 数组接收。然后在单元测试中创建消息的发送方法，这里消息的发送也和 routingkey 无关，如下：

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class RabbitmqApplicationTests {
    @Autowired
    RabbitTemplate rabbitTemplate;
    @Test
    public void headerTest() {
        Message nameMsg = MessageBuilder
                .withBody("hello header! name-queue".getBytes())
                .setHeader("name", "sang").build();
        Message ageMsg = MessageBuilder
                .withBody("hello header! age-queue".getBytes())
                .setHeader("age", "99").build();
        rabbitTemplate.send(RabbitHeaderConfig.HEADERNAME, null, ageMsg);
        rabbitTemplate.send(RabbitHeaderConfig.HEADERNAME, null, nameMsg);
    }
}
```
这里创建两条消息，两条消息具有不同的 header，不同 header 的消息将被发到不同的 Queue 中去。

最终执行效果如下：

![image-20230222000840341](https://img.zxqs.top/image-20230222000840341.png)

## Routing

这种情况是这样：

一个生产者，一个交换机，两个队列，两个消费者，生产者在创建 Exchange 后，根据 RoutingKey 去绑定相应的队列，并且在发送消息时，指定消息的具体 RoutingKey 即可。

如下图：

![image-20230222000920609](https://img.zxqs.top/image-20230222000920609.png)

这个就是按照 routing key 去路由消息。就是上面将的 `DirectExchange`。

## Topics

这种情况是这样：

一个生产者，一个交换机，两个队列，两个消费者，生产者创建 Topic 的 Exchange 并且绑定到队列中，这次绑定可以通过 `*` 和 `#`关键字，对指定 `RoutingKey` 内容，编写时注意格式 `xxx.xxx.xxx` 去编写。

如下图：

![image-20230222001122061](https://img.zxqs.top/image-20230222001122061.png)

