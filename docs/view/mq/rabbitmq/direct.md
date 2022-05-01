---
title: Direct模式
autoPrev: fanout
---

## 前言

direct模式，翻译过来就是`直连模式`

`在Fanout模式中，一条消息，会被所有订阅的队列都消费。但是，在某些场景下，我们希望不同的消息被不同的队列消费。这时就要用到Direct类型的Exchange。`

 在Direct模型下：

- 队列与交换机的绑定，不能是任意绑定了，而是要指定一个`RoutingKey`（路由key）
- 消息的发送方，在 向 Exchange发送消息时，也必须指定消息的 `RoutingKey`。
- Exchange不再把消息交给每一个绑定的队列，而是根据消息的`Routing Key`进行判断，只有队列的`Routingkey`与消息的 `Routing key`完全一致，才会接收到消息

![direct](/blogImg/rabbitmq/image-20191126220145375.png)

图解：

- P：生产者，向Exchange发送消息，发送消息时，会指定一个routing key。
- X：Exchange（交换机），接收生产者的消息，然后把消息递交给 与routing key完全匹配的队列
- C1：消费者，其所在队列指定了需要routing key 为 error 的消息
- C2：消费者，其所在队列指定了需要routing key 为 info、error、warning 的消息

## 操作代码

### 生产者
```java
public class EmitLog {
    public static final String EXCHANGE_NAME = "direct_logs";

    public static void main(String[] args) throws IOException, TimeoutException {

        Channel channel = RabbitMqUtils.getChannel();

        // 声明一个交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.DIRECT);

        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            String message = scanner.next();
            // 发送信息
            channel.basicPublish(EXCHANGE_NAME,"error",null,message.getBytes("UTF-8"));

            System.out.println("生产者发出消息" + message);
        }
    }
}
```

:::tip

此时交换机类型就应该是 `direct`

`routing key`也不能为空串了

:::

### 消费者C1
```java
public class ReceiveLogsDirect01 {

    public static final String  EXCHANGE_NAME = "direct_logs";

    public static void main(String[] args) throws Exception {
        Channel channel = RabbitMqUtils.getChannel();

        // 声明一个交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.DIRECT);

        // 声明一个队列
        channel.queueDeclare("console",false,false,false,null);

        // 绑定交换机和队列
        channel.queueBind("disk",EXCHANGE_NAME,"error");

        // 接受成功的回调
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            String msg = new String(message.getBody(), "UTF-8");
            System.out.println("消费者C1："+msg);
        };

        // 接收消息
        channel.basicConsume("console",true,deliverCallback,tag -> {});
    }
}
```

### 消费者C2
```java
public class ReceiveLogsDirect02 {

    public static final String  EXCHANGE_NAME = "direct_logs";

    public static void main(String[] args) throws Exception {
        Channel channel = RabbitMqUtils.getChannel();

        // 声明一个交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.DIRECT);

        // 声明一个队列
        channel.queueDeclare("disk",false,false,false,null);

        // 绑定交换机和队列
        channel.queueBind("console",EXCHANGE_NAME,"info");
        channel.queueBind("console",EXCHANGE_NAME,"warning");
        channel.queueBind("console",EXCHANGE_NAME,"error");

        // 接受成功的回调
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            String msg = new String(message.getBody(), "UTF-8");
            System.out.println("消费者C2："+msg);
        };

        // 接收消息
        channel.basicConsume("disk",true,deliverCallback,tag -> {});
    }
}
```

**测试生产者发送Route key为error的消息时**:

![direct](/blogImg/rabbitmq/direct.png)

**测试生产者发送Route key为info的消息时**:

![direct](/blogImg/rabbitmq/direct2.png)