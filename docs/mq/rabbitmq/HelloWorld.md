---
description: Hello World模式
autoPrev: pattern
sidebarDepth: 1
---
# Hello World模式

## 概念
![pattern1](/blogImg/rabbitmq/image-20191126165840602.png)

在上图的模型中，有以下概念：

- P：生产者，也就是要发送消息的程序
- C：消费者：消息的接受者，会一直等待消息到来。
- queue：消息队列，图中红色部分。类似一个邮箱，可以缓存消息；生产者向其中投递消息，消费者从其中取出消息。

## 操作代码

### 生产者
```java
public class Producer {
    // 队列名称
    public static final String QUEUE_NAME = "hello";

    public static void main(String[] args) throws IOException, TimeoutException {
        // 创建一个连接工厂
        ConnectionFactory factory = new ConnectionFactory();
        // 服务器IP 连接rabbitmq的队列
        factory.setHost("xx.xx.xx.xx");
        // 用户名和密码
        factory.setUsername("admin");
        factory.setPassword("123456");
        // 创建连接
        Connection connection = factory.newConnection();
        // 获取信道
        Channel channel = connection.createChannel();
        // 获取信道
        channel.queueDeclare(QUEUE_NAME,false,false,false,null);
        // 发送的消息
        String message = "hello world";


        //发送消息
        channel.basicPublish("",QUEUE_NAME,null,message.getBytes());
        System.out.println("消息发送完毕");
    }
}
```

::: tip 参数说明

`channel.queueDeclare(QUEUE_NAME,false,false,false,null);`

* String s: 队列名称
* boolean durable：队列里面的消息是否持久化（磁盘），默认情况下消息储存在内存中
* boolean exclusive：是否独占队列，true独占，false相反
* boolean autoDelete：是否自动删除，最后一个消费者断开连接以后，该队列是否自动删除，true：自动删除，false：不删除
* Map<String, Object> argument：对队列的额外配置

`channel.basicPublish("","hello",null,message.getBytes());`

* String exchange：发送到那个交换机，空串就用系统默认的交换机
* String routingKey：路由键,可以根据不同的routingKey发送到不同的队列
* BasicProperties props：交换机的其他设置
* byte[] body：发送消息的消息体
  
:::

### 消费者

```java
public class Consumer {
    // 队列名称
    public static final String QUEUE_NAME = "hello";

    public static void main(String[] args) throws IOException, TimeoutException {
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

        // 接收到消息的回调
        DeliverCallback deliverCallback = (consumerTag, message) -> {
            byte[] body = message.getBody();
            System.out.println(new String(body));
        };

        // 取消订阅时的回调
        CancelCallback callback = consumerTag -> System.out.println("消息消费被中断");
        
        //消费消息
        channel.basicConsume(QUEUE_NAME,true,deliverCallback,callback);
    }
}
```

:::tip 参数说明

`channel.basicConsume(QUEUE_NAME,true,deliverCallback,callback);`

* String s ：队列名称，要与生产者队列名相同
* boolean autoAck：是否自动应答
* DliverCallback eliverCallback：接收到消息的回调
* CancelCallback cancelCallback：取消订阅时的回调

:::

