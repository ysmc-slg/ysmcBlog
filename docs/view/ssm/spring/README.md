---
title: Spring简介
---
::: tip

文章引用微信公众号：江南一点雨 《Spring入门》

:::
## 简介
我们常说的`Spring`实际上是指 `Spring Framework` 而 `Spring Framework` 只是`Spring`家族中的一个分支而已。

`Spring` 是为了解决企业级应用开发的复杂性而创建的。在`Spring`之前，有一个重量级的工具叫做`EJB`，使用 Spring 可以让 Java Bean 之间进行有效的解耦，而这个操作之前只有EJB才能完成，EJB过于臃肿，使用很少，spring不仅仅局限于服务端的开发，在测试性和松耦合方面都有很好的体现。

一般来说，初学者主要掌握spring四个方面的功能：
* IOC/DI
* AOP
* 事务
* JDBCTemplate

## 下载
后面所有我都使用 `Mavenue` 来添加依赖，如果需要单独下载`jar`，地址如下：

https://repo.spring.io/ui/native/libs-release-local/org/springframework/spring/5.2.1.RELEASE/

下载成功后，Spring中的组件，大致上提供了如下功能：

![图1](/blogImg/ssm/spring1.png)




