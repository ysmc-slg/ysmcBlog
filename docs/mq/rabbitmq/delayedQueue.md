---
description: 延时队列
autoPrev: deadLetterQueue
---

定时任务各种各样，常见的定时任务例如日志备份，我们可能在每天凌晨 3 点去备份，这种固定时间的定时任务我们一般采用 cron 表达式就能轻松的实现，还有一些比较特殊的定时任务，向大家看电影中的定时炸弹，3分钟后爆炸，这种定时任务就不太好用 cron 去描述，因为开始时间不确定，我们开发中有的时候也会遇到类似的需求，例如：

* 在电商项目中，当我们下单之后，一般需要 20 分钟之内或者 30 分钟之内付款，否则订单就会进入异常处理逻辑中，被取消，那么进入到异常处理逻辑中，就可以当成是一个延迟队列。
* 我买了一个智能砂锅，可以用来煮粥，上班前把素材都放到锅里，然后设置几点几分开始煮粥，这样下班后就可以喝到香喷喷的粥了，那么这个煮粥的指令也可以看成是一个延迟任务，放到一个延迟队列中，时间到了再执行。
* 公司的会议预定系统，在会议预定成功后，会在会议开始前半小时通知所有预定该会议的用户。
* 安全工单超过 24 小时未处理，则自动拉企业微信群提醒相关责任人。
* 用户下单外卖以后，距离超时时间还有 10 分钟时提醒外卖小哥即将超时。
* ...

很多场景下我们都需要延迟队列。

本文以 RabbitMQ 为例来和大家聊一聊延迟队列的玩法。

整体上来说，在 RabbitMQ 上实现定时任务有两种方式：

* 利用 RabbitMQ 自带的消息过期和私信队列机制，实现定时任务。
* 使用 RabbitMQ 的 `rabbitmq_delayed_message_exchange` 插件来实现定时任务，这种方案较简单。

两种用法我们分别来看。

## 使用插件

首先我们需要下载 rabbitmq_delayed_message_exchange 插件，这是一个 GitHub 上的开源项目，我们直接下载即可：

* https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases

安装版本要和rabbitmq版本兼容。

![image-20230222232150625](https://img.zxqs.top/image-20230222232150625.png)

然后将下载好的文件放到rabbitmq的安装目录，如下：`/usr/lib/rabbitmq/lib/rabbitmq_server-3.8.14/plugins`

最后进入目录启动插件，`rabbitmq-plugins enable rabbitmq_delayed_message_exchange`。

进入管理页面能看到多了一个选项：

![image-20230222232554764](https://img.zxqs.top/image-20230222232554764.png)

### 案例

还是先创建springboot工程，书写properties配置信息。我就省略了，直接创建配置文件。

```java
@Configuration
public class RabbitDelayedConfig {

    public static final String DELAYED_EXCHANGE_NAME = "delayed_exchange_name";
    public static final String DELAYED_QUEUE_NAME = "delayed_queue_name";
    public static final String DELAYED_ROUTING_KEY = "delayed_routing_key";

    @Bean
    CustomExchange customExchange(){
        Map<String, Object> args = new HashMap<>();
        args.put("x-delayed-type","direct");
        return new CustomExchange(DELAYED_EXCHANGE_NAME,"x-delayed-message",true,false,args);
    }

    @Bean
    Queue delayedQueue(){
        return new Queue(DELAYED_QUEUE_NAME,true,false,false);
    }

    @Bean
    Binding delayedBinding(){
        return BindingBuilder.bind(delayedQueue())
                .to(customExchange())
                .with(DELAYED_ROUTING_KEY)
                .noargs();
    }
}
```

这里的交换机和前面的不同，需要注意。

这里我们使用的交换机是 CustomExchange，这是一个 Spring 中提供的交换机，创建 CustomExchange 时有五个参数，含义分别如下：

* 交换机名称
* 交换机类型，这个是固定的
* 交换机是否持久化
* 如果没有队列绑定到交换机，交换机是否删除。
* 其他参数

最后一个 args 参数中，指定了交换机消息分发的类型，这个类型就是大家熟知的 direct、fanout、topic 以及 header 几种，用了哪种类型，将来交换机分发消息就按哪种方式来。

接下来我们再创建一个消息消费者：

```java
@Component
public class DelayedConsumer {
    private static final Logger log = LoggerFactory.getLogger(DelayedConsumer.class);

    @RabbitListener(queues = RabbitDelayedConfig.DELAYED_QUEUE_NAME)
    public void consumer(String message){
        log.info("message ===>{}",message);
    }
}
```

接下来再写一个测试方法来发送消息：

```java
@RestController
public class RabbitController {
    @Autowired
    RabbitTemplate rabbitTemplate;

    @GetMapping("/send2")
    public void test2(){
        Message message = MessageBuilder.withBody(("hello rabbit" + new Date()).getBytes())
                .setHeader("x-delay", "10000")
                .build();

        rabbitTemplate.send(RabbitDelayedConfig.DELAYED_EXCHANGE_NAME,RabbitDelayedConfig.DELAYED_ROUTING_KEY,message);
    }
}
```

在消息头中设置消息的延迟时间。

接下来就可以进行测试了，结果如下：

![image-20230222234536251](https://img.zxqs.top/image-20230222234536251.png)

可以看到，消息发送的时间和消费打印的时间差 10秒

## DLX 实现延迟队列

延迟队列实现的思路也很简单，就是上篇文章我们所说的 DLX（死信交换机）+TTL（消息超时时间）。

我们可以把死信队列就当成延迟队列。

具体来说是这样：

假如一条消息需要延迟 30 分钟执行，我们就设置这条消息的有效期为 30 分钟，同时为这条消息配置死信交换机和死信 routing_key，并且不为这个消息队列设置消费者，那么 30 分钟后，这条消息由于没有被消费者消费而进入死信队列，此时我们有一个消费者就在“蹲点”这个死信队列，消息一进入死信队列，就立马被消费了。

这里就不举例了，请看上篇文章 “死信队列”




