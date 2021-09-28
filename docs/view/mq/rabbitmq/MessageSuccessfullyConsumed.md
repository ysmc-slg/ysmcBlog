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

如果需要从消息队列中持续获得消息，就可以使用推模式；如果只是单纯的消费一条消息，则使用拉模式即可。**切忌将拉模式放到一个死循环中，变相的订阅消息，这会严重影响 RabbitMQ 的性能。**

## 消息消费确认机制
为了保证消息能够可靠的到达消息消费者，RabbitMQ 中提供了消息消费确认机制。当消费者去消费消息的时候，可以通过指定 autoAck 参数来表示消息消费的确认方式。

* 当 autoAck 为 false 的时候，此时即使消费者已经收到消息了，RabbitMQ 也不会立马将消息移除，而是等待消费者显式的回复确认信号后，才会将消息打上删除标记，然后再删除。
* 当 autoAck 为 true 的时候，此时消息消费者就会自动把发送出去的消息设置为确认，然后将消息移除（从内存或者磁盘中），即使这些消息并没有到达消费者。

当我们将 autoAck 设置为 false 的时候，对于 RabbitMQ 而言，消费分成了两个部分：

* 待消费的消息
* 已经投递给消费者，但是还没有被消费者确认的消息

换句话说，当设置 autoAck 为 false 的时候，消费者就变得非常从容了，它将有足够的时间去处理这条消息，当消息正常处理完成后，再手动 ack，此时 RabbitMQ 才会认为这条消息消费成功了。如果 RabbitMQ 一直没有收到客户端的反馈，并且此时客户端也已经断开连接了，那么 RabbitMQ 就会将刚刚的消息重新放回队列中，等待下一次被消费。

消息消费确认，分为自动确认和手动确认。

### 自动确认
在 Spring Boot 中，默认情况下，消息消费就是自动确认的。

```java
@Component
public class ConsumerDemo {
    @RabbitListener(queues = RabbitConfig.QUEUE_NAME)
    public void handle2(String msg) {
        System.out.println("msg = " + msg);
        int i = 1 / 0;
    }
}
```

通过 @Componet 注解将当前类注入到 Spring 容器中，然后通过 @RabbitListener 注解来标记一个消息消费方法，默认情况下，`消息消费方法自带事务，即如果该方法在执行过程中抛出异常，那么被消费的消息会重新回到队列中等待下一次被消费`，如果该方法正常执行完没有抛出异常，则这条消息就算是被消费了。

### 手动确认
手动确认又把它分为两种：`推模式手动确认`与`拉模式手动确认`。

#### 推模式手动确认
要开启手动确认，需要我们首先关闭自动确认，关闭方式如下：
```yml
spring:
  rabbitmq:
    listener:
      simple:
        acknowledge-mode: manual
```

这个配置表示将消息的确认模式改为手动确认。

接下来我们来看下消费者中的代码：

```java
@RestController
public class ConsumerDemo {
    @RabbitListener(queues = RabbitConfig.QUEUE_NAME)
    public void handle3(Message message, Channel channel) {
        long deliveryTag = message.getMessageProperties().getDeliveryTag();
        try {
            //消息消费的代码写到这里
            String s = new String(message.getBody());
            System.out.println("s = " + s);
            //消费完成后，手动 ack
            channel.basicAck(deliveryTag, false);
        } catch (Exception e) {
            //手动 nack
            try {
                channel.basicNack(deliveryTag, false, true);
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }
}
```
将消费者要做的事情放到一个 try..catch 代码块中。

如果消息正常消费成功，则执行 basicAck 完成确认。

如果消息消费失败，则执行 basicNack 方法，告诉 RabbitMQ 消息消费失败。

这里涉及到两个方法：

* basicAck：这个是手动确认消息已经成功消费，该方法有两个参数：第一个参数表示消息的 id；第二个参数 multiple 如果为 false，表示仅确认当前消息消费成功，如果为 true，则表示当前消息之前所有未被当前消费者确认的消息都消费成功。
* basicNack：这个是告诉 RabbitMQ 当前消息未被成功消费，该方法有三个参数：第一个参数表示消息的 id；第二个参数 multiple 如果为 false，表示仅拒绝当前消息的消费，如果为 true，则表示拒绝当前消息之前所有未被当前消费者确认的消息；第三个参数 requeue 表示，被拒绝的消息是否重新入队。

如果消息消费失败，也可以拒绝接受，返回队列重新消费

```java
@Component
public class ConsumerDemo {
    @RabbitListener(queues = RabbitConfig.JAVABOY_QUEUE_NAME)
    public void handle(Channel channel, Message message) {
        //获取消息编号
        long deliveryTag = message.getMessageProperties().getDeliveryTag();
        try {
            //拒绝消息
            channel.basicReject(deliveryTag, true);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

消费者收到消息之后，可以选择拒绝消费该条消息，拒绝的步骤分两步：

1. 获取消息编号 deliveryTag。
2. 调用 basicReject 方法拒绝消息。


调用 basicReject 方法时，第二个参数是 requeue，即是否重新入队。如果第二个参数为 true，则这条被拒绝的消息会重新进入到消息队列中，等待下一次被消费；如果第二个参数为 false，则这条被拒绝的消息就会被丢掉，不会有新的消费者去消费它了。

需要注意的是，basicReject 方法一次只能拒绝一条消息。

#### 拉模式手动确认
拉模式手动 ack 比较麻烦一些，在 Spring 中封装的 RabbitTemplate 中并未找到对应的方法，所以我们得用原生的办法，如下：
```java
@Autowired
    RabbitTemplate rabbitTemplate;

    @Test
    void contextLoads() throws UnsupportedEncodingException {
        Channel channel = rabbitTemplate.getConnectionFactory().createConnection().createChannel(true);
        long deliveryTag = 0L;
        try {
            GetResponse getResponse = channel.basicGet(RabbitConfig.QUEUE_NAME, false);
            deliveryTag = getResponse.getEnvelope().getDeliveryTag();
            System.out.println("o = " + new String((getResponse.getBody()), "UTF-8"));
            channel.basicAck(deliveryTag, false);
        } catch (IOException e) {
            try {
                channel.basicNack(deliveryTag, false, true);
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        }
    }
```
这里涉及到的 basicAck 和 basicNack 方法跟前面的一样，我就不再赘述。

## 幂等性问题
最后我们再来说说消息的幂等性问题。

大家设想下面一个场景：

::: tip

消费者在消费完一条消息后，向 RabbitMQ 发送一个 ack 确认，此时由于网络断开或者其他原因导致 RabbitMQ 并没有收到这个 ack，那么此时 RabbitMQ 并不会将该条消息删除，当重新建立起连接后，消费者还是会再次收到该条消息，这就造成了消息的重复消费。同时，由于类似的原因，消息在发送的时候，同一条消息也可能会发送两次。种种原因导致我们在消费消息时，一定要处理好幂等性问题。

:::

幂等性问题的处理倒也不难，基本上都是从业务上来处理，我来大概说说思路。

采用 Redis，在消费者消费消息之前，现将消息的 id 放到 Redis 中，存储方式如下：

1. id-0（正在执行业务）
2. id-1（执行业务成功）
如果 ack 失败，在 RabbitMQ 将消息交给其他的消费者时，先执行 setnx，如果 key 已经存在（说明之前有人消费过该消息），获取他的值，如果是 0，当前消费者就什么都不做，如果是 1，直接 ack。

极端情况：第一个消费者在执行业务时，出现了死锁，在 setnx 的基础上，再给 key 设置一个生存时间。生产者，发送消息时，指定 messageId。