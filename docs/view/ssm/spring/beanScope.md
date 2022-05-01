---
title: Bean的作用域
autoPrev: conditionalAnnotation
---

## Bean的作用域
在 `XML` 配置中注册的 `Bean`，或者用 `Java` 配置注册的 `Bean`,，如果我多次获取，获取到的对象是否是同一个？
```java
public class JavaMain {
  public static void main(String[] args) {
    ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");

    User user = (User)ctx.getBean("user",User.class);
    User user2 = (User)ctx.getBean("user",User.class);
    System.out.println(user == user2);
  }
}
```
如上，从 `Spring` 容器中多次获取同一个 `Bean`，默认情况下，获取到的实际是同一个实例。当然我们也可以自己手动配置成，每次获取不同的实例。

```xml
<bean class="top.zxqs.User" id="user" scope="prototype">
    <property name="id" value="1"/>
    <property name="name" value="张三"/>
    <property name="age" value="23"/>
</bean>
```

通过在 `XML` 节点中，设置 `scope` 属性，我们可以调整默认的实例个数。

`scope` 的值为 `singleton`（默认），表示这个 `Bean` 在 `Spring` 容器中，是以单例的形式存在

如果 `scope` 的值为 `prototype`，表示这个 `Bean` 在`Spring` 容器中不是单例，多次获取将拿到多个不同的实例。

除了 `singleton` 和 `prototype` 之外，还有两个取值，`request` 和 `session`。这两个取值在 `web` 环境下有效。

这是在 `XML` 中的配置，我们也可以在 Java 中配置。 

```java
@Configuration
public class JavaConfig {
  @Bean
  @Scope("prototype")
  User user() {
    return new User();   
  }
}
```

在自动扫描配置中也可以指定 `Bean` 的作用域
```java
@Repository
@Scope("prototype")
public class UserDao {
  public String hello() {
    return "userdao"
  }
}
```

## 混合配置
混合配置就是 `Java配置` + `XML配置`。混用的话，可以在 `Java配置` 中引入 `XML` 配置。

```java
@Configuration
@ImportResource("classpath:applicationContext.xml")
public class JavaConfig {
 
}
```

在 Java 配置中，通过 `@ImportResource` 注解可以导入一个 `XML` 配置。