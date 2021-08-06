---
title: work quene模式
autoPrev: HelloWorld
---
## 概念

`Work queues`，也被称为`任务队列(Task queues)`。当消息处理比较耗时的时候，可能生产消息的速度会远远大于消息的消费速度。长此以往，消息就会堆积越来越多，无法及时处理。此时就可以使用work 模型：**让多个消费者绑定到一个队列，共同消费队列中的消息**。

<font color='red'>队列中的消息一旦消费，就会消失</font>，因此任务是不会被重复执行的。

![work](/blogImg/rabbitmq/image-20200314221002008.png)

角色：

- P：生产者：任务的发布者
- C1：消费者-1，领取任务并且完成任务，假设完成速度较慢
- C2：消费者-2：领取任务并完成任务，假设完成速度快

## 操作代码
首先，创建一个工具类，将每次都要写的代码封装起来
```java
public class RabbitMqUtils {
    public static Channel getChannel() throws IOException, TimeoutException {
        // 创建一个连接工厂
        ConnectionFactory factory = new ConnectionFactory();
        // IP 连接rabbitmq的队列
        factory.setHost("xx.xx.xx.xx");
        // 用户名和密码
        factory.setUsername("admin");
        factory.setPassword("123456");
        // 创建连接
        Connection connection = factory.newConnection();
        // 获取信道
        Channel channel = connection.createChannel();
        return channel;
    }
}
```
### 生产者
```java
public class Task2 {
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

### 消费者C1

```java
public class Worker01 {
    // 队列名称
    public static final String QUEUE_NAME = "hello";

    public static void main(String[] args) throws IOException, TimeoutException {

        Channel channel = RabbitMqUtils.getChannel();

        // 接收到消息的回调
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            byte[] body = message.getBody();
            System.out.println(new String(body));
        };

        System.out.println("C2等待接受消息。。。");
        // 取消订阅时的回调
        CancelCallback callback = consumerTag -> System.out.println("消息消费被中断");
        // 接收消息
        channel.basicConsume(QUEUE_NAME,true,deliverCallback,callback);
    }
}
```

### 消费者C2

```java
public class Worker02 {
    // 队列名称
    public static final String QUEUE_NAME = "hello";

    public static void main(String[] args) throws Exception {

        Channel channel = RabbitMqUtils.getChannel();

        // 接收到消息的回调
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            byte[] body = message.getBody();
            System.out.println(new String(body));
        };

        System.out.println("C2等待接受消息。。。");
        // 取消订阅时的回调
        CancelCallback callback = consumerTag -> System.out.println("消息消费被中断");
        // 接收消息
        channel.basicConsume(QUEUE_NAME,true,deliverCallback,callback);
    }
}
```