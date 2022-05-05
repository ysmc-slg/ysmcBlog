---
title: IOC
---
## IOC 概念
IOC（Inversion of Control），中文叫做控制反转。这是一个概念，也是一种思想。控制反转，实际上就是指，对一个对象的控制权的反转。例如，如下代码：
```java
public class Book {
  private Integer id;
  private String name;
  private Double price;

  // ...省略 setter/getter方法
}
```
```java
public class User {
  private Integer id;
  private String name;
  private Integer age;

  public void doSth(){
    Book book = new Book();
    book.setID(1);
    book.setName("三国演义");
    book.setPrice(20.0d)
  }
}
```

在这种情况下，Book对象的控制权在User对象里边，这样，Book和User高度耦合，如果在其他对象中使用Book对象，得重新创建，也就是说，对象的创建、初始化、销毁等操作，统统都要开发者自己来完成。如果能将这些操作交给容器来管理，开发者就可以极大的从对象的创建中解脱出来。

使用Spring之后，我们可以将对象的创建、初始化、销毁等操作交给spring容器来管理。就是说，在项目启动时，所有的Bean都将自己注册到spring容器中去（如果有必要的话），然后如果其他Bean需要使用到这个Bean，则不需要自己去new，而是直接去Spring容器中去要

## IOC初体验
首先创建一个普通的Maven项目，引入 `spring-context` 依赖，如下：
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.2.6.RELEASE</version>
</dependency>
```
然后，在resource目录右键 new -> XML Configuration File -> Spring Config，创建一个`spring`的配置文件，文件名一般为`applicationContext`（一定要先添加依赖，后创建配置文件，否则创建配置文件时，没有模板选项）

在配置文件中，我们可以配置所有需要注册到`Spring`容器的`Bean`。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">


       <bean class="top.zxqs.ioc.model.User" id="user"/>
</beans>
```
```java
public class User {
    private String name;
    private int age;

    //...忽略setter/getter
}
```
::: tip

`class`属性表示需要注册的 `bean` 的全路径， `id` 则表示 `bean` 的唯一标识，`name` 也可以作为 `bean` 的标识，在超过 99% 的情况下， `id` 和 `name` 其实是一样的，特殊情况下不一样。 

:::

配置完之后加载配置文件：
```java
public static void main(String[] args) {
        // ClassPathXmlApplicationContext 默认从resources目录下开始加载
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
}
```

执行 `main` 方法，配置文件就会被自动加载，进而在 `Spring` 中初始化一个 `User` 实例。此时，我们显示的指定 `User` 类的无参构造方法，并在其中打印日志，可以看到无参构造方法执行了，进而证明对象已经在 `Spring`容器中初始化了。

最后，通过 `getBean` 方法，可以从容器中获取对象：

```java
public class Main {

    public static void main(String[] args) {

        // ClassPathXmlApplicationContext 默认从resources目录下开始加载
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

         User user = (User)context.getBean("user");
         System.out.println(user);
    }
}
```

**<font color = 'red'>注意</font>**：

1. 加载方式，除了`ClassPathXmlApplicationContext` 之外（默认从resources目录下开始加载），另外也可以使用`FileSystemXmlApplicationContext con = new FileSystemXmlApplicationContext()`，参数为操作系统的路径，一般不使用。
2. 获取`Bean`的方式，
   ```java
    // 名称，
    User user = (User)context.getBean("user");
    User user1 = context.getBean("user", User.class);
    // 一个类型只能有一个实例，否则会报错。
    User user2 = context.getBean(User.class);
   ```

