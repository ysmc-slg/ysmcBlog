---
description: fanout模式
autoPrev: workquene
sidebarDepth: 1
---

# fanout模式

## 前言
上面两种模式，一个消息只能被一个消费者接收。如果想让一个消息被多个消费者接受，上面两种模式就不行了。

在实现一个消息被多个消费者接收之前先说一下`Exchanges（交换机）`

## Exchange 概念

RabbitMQ 消息传递模型的核心思想是: `生产者生产的消息从不会直接发送到队列`。实际上，通常生产者甚至都不知道这些消息传递传递到了哪些队列中。

相反，`生产者只能将消息发送到交换机(exchange)`，交换机工作的内容非常简单，一方面它接收来自生产者的消息，另一方面将它们推入队列。交换机必须确切知道如何处理收到的消息。是应该把这些消息放到特定队列还是说把他们到许多队列中还是说应该丢弃它们。这就的由交换机的类型来决定。

![Exchange 概念](/blogImg/rabbitmq/2021-08-09_10-37-31.png)

为什么我们之前没用`Exchange`也能正常使用呢？


```java
 channel.basicPublish("",QUEUE_NAME,null,message.getBytes());
```
在发送消息时，第一个参数是交换机，然而我们用的是空串，这时用的就是rabbitmq默认的交换机。

![默认交换机](/blogImg/rabbitmq/默认交换机.png)

### Exchanges 的类型
总共有以下类型：

直接(direct), 主题(topic) ,标题(headers) , 扇出(fanout)

### 绑定(bindings)

什么是 bingding 呢，binding 其实是 exchange 和 queue 之间的桥梁，它告诉我们 exchange 和那个队列进行了绑定关系。比如说下面这张图告诉我们的就是 X 与 Q1 和 Q2 进行了绑定

![binding](/blogImg/rabbitmq/binding.png)

## Fanout
`fanout 扇出 也称为广播`

![fanout](/blogImg/rabbitmq/image-20191126213115873.png)

在广播模式下，消息发送流程是这样的：

-  可以有多个消费者
-  每个**消费者有自己的queue**（队列）
-  每个**队列都要绑定到Exchange**（交换机）
-  **生产者发送的消息，只能发送到交换机**，交换机来决定要发给哪个队列，生产者无法决定。
-  交换机把消息发送给绑定过的所有队列
-  队列的消费者都能拿到消息。实现一条消息被多个消费者消费

### 消费者1

```java
public class ReceiveLogs01 {
    public static final String EXCHANGE_NAME = "logs";

    public static void main(String[] args) throws IOException, TimeoutException {

        Channel channel = RabbitMqUtils.getChannel();

       //声明一个交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.FANOUT);

        
        //声明一个临时队列
        String queueName = channel.queueDeclare().getQueue();

        // 绑定交换机和队列
        channel.queueBind(queueName,EXCHANGE_NAME,"");
        System.out.println("等待接收消息,把接收到的消息打印在屏幕.....");

        // 接受成功的回调
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            String msg = new String(message.getBody(), "UTF-8");
            System.out.println("消费者2："+msg);
        };
        // 接收消息
        channel.basicConsume(queueName,true,deliverCallback, consumerTag -> {});
    }
}
```

::: tip 参数详解

**channel.exchangeDeclare(String exchange, BuiltinExchangeType type)**：声明一个交换机
* 第一个参数是交换机名称
* 第二个是交换机类型，可以填"fanout"，也可以使用`BuiltinExchangeType.具体类型`。

**channel.queueDeclare().getQueue()**：创建临时队列，队列的名称是随机的，当消费者断开与队列的连接时，列表机会自动删除

**channel.queueBind(String queue, String exchange, String routingKey)**：绑定交换机。
* 第一个参数是队列名
* 二个参数是交换机名
* 第三个参数是绑定的routingKey，生产者发送消息就是通过routingKey，来判断具体往哪个队列中发。此时我们是将信息发送到所有消费者，所以所有队列绑定的要相同，空串或者相同的字符

:::

### 消费者2
```java
public class ReceiveLogs02 {
    public static final String EXCHANGE_NAME = "logs";

    public static void main(String[] args) throws IOException, TimeoutException {

        Channel channel = RabbitMqUtils.getChannel();

        // 声明一个交换机
        channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.FANOUT);

        // 声明一个临时队列
        String queueName = channel.queueDeclare().getQueue();

        // 绑定交换机和队列
        channel.queueBind(queueName,EXCHANGE_NAME,"");
        System.out.println("等待接收消息,把接收到的消息打印在屏幕.....");

        // 接受成功的回调
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            String msg = new String(message.getBody(), "UTF-8");
            System.out.println("消费者2："+msg);
        };
        // 接收消息
        channel.basicConsume(queueName,true,deliverCallback, consumerTag -> {});
    }
}
```

### 生产者

```java
public class EmitLog {
    public static final String EXCHANGE_NAME = "logs";

    public static void main(String[] args) throws IOException, TimeoutException {

        Channel channel = RabbitMqUtils.getChannel();

        // 声明一个交换机
        channel.exchangeDeclare("EXCHANGE_NAME", BuiltinExchangeType.FANOUT);

        Scanner scanner = new Scanner(System.in);

        while (scanner.hasNext()) {
            String message = scanner.next();
            // 发送信息
            channel.basicPublish(EXCHANGE_NAME,"",null,message.getBytes("UTF-8"));

            System.out.println("生产者发出消息" + message);
        }
    }
}
```

channel.basicPublish()：第一个参数是往哪个交换机发送信息，此时要和消费者代码中的交换机相同

Logs 和临时队列的绑定关系如下图:

![haha](/blogImg/rabbitmq/binding2.png)

**结果**：

![haha](/blogImg/rabbitmq/haha.png)