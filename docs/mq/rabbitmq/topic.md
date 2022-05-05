---
title: topci模式
autoPrev: direct
---

## 前言
`Topic`类型的`Exchange`与`Direct`相比，都是可以根据`RoutingKey`把消息路由到不同的队列。只不过`Topic`类型`Exchange`可以让队列在绑定`Routing key` 的时候使用通配符！这种模型`Routingkey` 一般都是由一个或多个单词组成，多个单词之间以”.”分割，例如： `item.insert`。

![topic](/blogImg/rabbitmq/image-20191127121900255.png)

**统配符**

		*     匹配不多不少恰好1个词
  
		#     匹配一个或多个词
**如**

	audit.#    匹配audit.irs.corporate或者 audit.irs 等

    audit.*   只能匹配 audit.irs

## 操作代码

### 生产者
```java
public class EmitLogTopic {
  private static final String EXCHANGE_NAME = "topic_logs";

  public static void main(String[] args) throws Exception {

      Channel channel = RabbitMqUtils.getChannel();

      channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);

      Scanner scanner = new Scanner(System.in);

      while (scanner.hasNext()) {
          String message = scanner.next();
          // 发送信息
          channel.basicPublish(EXCHANGE_NAME,"mq.orange.rabbit",null,message.getBytes("UTF-8"));

          System.out.println("生产者发出消息" + message);
      }
  }
}
```

::: tip

要将`exchange`类型设置为 `topic`

:::

### 消费者C1

```java
public class ReceiveLogsTopic01 {
  public static final String EXCHANGE_NAME = "topic_logs";

  public static void main(String[] args) throws Exception {
      Channel channel = RabbitMqUtils.getChannel();

      // 声明交换机
      channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);

      String queueName="C1";
      // 声明队列
      channel.queueDeclare(queueName,false,false,false,null);

      // 绑定交换机和队列
      channel.queueBind(queueName,EXCHANGE_NAME,"*.orange.*");

      DeliverCallback deliverCallback = (consumerTag, message) -> {
          System.out.println(new String(message.getBody(),"UTF-8"));
          System.out.println("消费者C1绑定键："+ message.getEnvelope().getRoutingKey());
      };
      // 接收消息
      channel.basicConsume(queueName,true,deliverCallback,consumerTag -> {});
  }
}
```
::: tip

`Routing Key`为 `*.orange.*`。匹配 orange前后各一个字符

:::

### 消费者C2

```java
public class ReceiveLogsTopic02 {
  public static final String EXCHANGE_NAME = "topic_logs";

  public static void main(String[] args) throws Exception {
      Channel channel = RabbitMqUtils.getChannel();

      // 声明交换机
      channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);

      String queueName="C2";
      // 声明队列
      channel.queueDeclare(queueName,false,false,false,null);

      // 绑定交换机和队列
      channel.queueBind(queueName,EXCHANGE_NAME,"*.*.rabbit");
      channel.queueBind(queueName,EXCHANGE_NAME,"lazy.#");

      DeliverCallback deliverCallback = (consumerTag, message) -> {
          System.out.println(new String(message.getBody(),"UTF-8"));
          System.out.println("消费者C2绑定键："+ message.getEnvelope().getRoutingKey());
      };
      // 接收消息
      channel.basicConsume(queueName,true,deliverCallback,consumerTag -> {});
  }
}
```
::: tip

`Routing Key`为 `*.*.rabbit`，`lazy.#`

:::

**测试Routing Key中使用 * 通配符方式**：Routing Key为`mq.orange.rabbit`

![topic](/blogImg/rabbitmq/topic2.png)

**测试Routing Key中使用 # 通配符方式**：

![topic](/blogImg/rabbitmq/topic3.png)