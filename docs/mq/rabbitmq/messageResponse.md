---
description: rabbitmq高级之消息应答
autoPrev: outtime 
---

# rabbitmq高级之消息应答

## 概念
消费者完成一个任务可能需要一段时间，如果其中一个消费者处理一个长的任务并仅只完成
了部分突然它挂掉了，会发生什么情况。RabbitMQ 一旦向消费者传递了一条消息，便立即将该消息标记为删除。在这种情况下，突然有个消费者挂掉了，我们将丢失正在处理的消息。以及后续发送给该消费这的消息，因为它无法接收到。

为了保证消息在发送过程中不丢失，rabbitmq 引入消息应答机制，消息应答就是:`消费者在接收到消息并且处理该消息之后，告诉 rabbitmq 它已经处理了，rabbitmq 可以把该消息删除了`。

## 消息应答方式
rabbitmq的应答方式分为两种，`自动应答`和`手动应答`。

**自动应答**： 不在乎消费者对消息处理是否成功，都会告诉队列删除消息。如果处理消息失败，实现自动补偿（队列投递过去 重新处理）。

自动应答就是消费者在接收消息的时候，将autoAck参数设置为true
```java
 channel.basicConsume(TASK_QUEUE_NAME,true,deliverCallback,callback);
```

**手动应答**： 消费者处理完业务逻辑，手动返回ack（通知）告诉队列处理完了，队列进而删除消息

## 手动应答代码

```java
public class Worker1 {
  // 队列名称
  public static final String TASK_QUEUE_NAME = "ack_queue";

  public static void main(String[] args) throws IOException, TimeoutException {

      Channel channel = RabbitMqUtils.getChannel();

      // 接收消息后的回调
      DeliverCallback deliverCallback = (consumerTag, message) -> {
          System.out.println("接收到消息：" + new String(message.getBody(),"UTF-8"));

          /**
            * 手动应答
            * long deliveryTag: 消息的标记
            * boolean multiple：
                  true表示，当前消息之前，所有未被当前消费者确认的消息都消费成功。
                  false，表示仅确认当前消息消费成功
            */
          channel.basicAck(message.getEnvelope().getDeliveryTag(),false);
      };


      // 取消订阅时的回调
      CancelCallback callback = consumerTag -> System.out.println("消息消费被中断");
     
      channel.basicConsume(TASK_QUEUE_NAME,false,deliverCallback,callback);
  }
}
```
::: tip 参数详情

 1. channel.basicConsume中`autoAck`参数设置为false
 2. 调用`channel.basicAck()`手动应答，第一个参数是消息的tag，第二个参数是否批量应答，一般不会批量应答

:::

![topic](/blogImg/rabbitmq/tag.png)

## 消息自动重新入队
如果消费者由于某些原因失去连接(其通道已关闭，连接已关闭或 TCP 连接丢失)，导致消息
未发送 ACK 确认，RabbitMQ 将了解到消息未完全处理，并将对其重新排队。如果此时其他消费者可以处理，它将很快将其重新分发给另一个消费者。这样，即使某个消费者偶尔死亡，也可以确保不会丢失任何消息。

![topic](/blogImg/rabbitmq/tag2.png)

### 实现代码
消息重新入队是自动完成的，所以我们用`work模式`看一下就好了

**生产者**

```java
public class Task01 {
  // 队列名称
  public static final String QUEUE_NAME = "hello";

  public static void main(String[] args) throws IOException, TimeoutException {
      Channel channel = RabbitMqUtils.getChannel();

      channel.queueDeclare(QUEUE_NAME,false,false,false,null);

      Scanner scanner = new Scanner(System.in);

      while (scanner.hasNext()) {
          String message = scanner.next();
          channel.basicPublish("",QUEUE_NAME,null,message.getBytes());
          System.out.println("消息发送完毕："+message);
      }
  }

}
```

**消费者1**
```java
public class Worker01 {
  // 队列名称
  public static final String QUEUE_NAME = "hello";

  public static void main(String[] args) throws IOException, TimeoutException {

      Channel channel = RabbitMqUtils.getChannel();

      // 当一个消息发送过来后的回调接口
      DeliverCallback deliverCallback = (consumerTag, message) -> {
          byte[] body = message.getBody();
          System.out.println(new String(body));
      };

      System.out.println("C2等待接受消息。。。");
      // 取消订阅时的回调
      CancelCallback callback = consumerTag -> System.out.println("消息消费被中断");
      
      channel.basicConsume(QUEUE_NAME,true,deliverCallback,callback);
  }
}
```

**消费者2**: 休眠10秒，模拟处理速度慢
```java
public class Worker02 {
  // 队列名称
  public static final String QUEUE_NAME = "hello";

  public static void main(String[] args) throws Exception {

      Channel channel = RabbitMqUtils.getChannel();

      // 当一个消息发送过来后的回调接口
      DeliverCallback deliverCallback = (consumerTag, message) -> {
          byte[] body = message.getBody();
          System.out.println(new String(body));
      };

      System.out.println("C2等待接受消息。。。");
      // 取消订阅时的回调
      CancelCallback callback = consumerTag -> System.out.println("消息消费被中断");

      // 休眠 10秒
      Thread.sleep(10000);

      channel.basicConsume(QUEUE_NAME,true,deliverCallback,callback);
  }
}
```