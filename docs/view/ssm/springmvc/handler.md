---
title: 处理器详解
---
::: tip

文章引用微信公众号：江南一点雨 《Spring入门》

:::


## HandlerMapping

HandlerMapping，中文译作处理器映射器，在SpringMVC中，系统提供了很多 `HandlerMapping`：

![spring6](/blogImg/ssm/springmvc2.png)

`HandlerMapping` 是负责根据 `request` 请求找到对应的 `Handler` 处理器及 `Interceptor` 拦截器，将它们封装在 `HandlerExecution` 对象中返回给前端控制器。

* BeanNameUrlHandlerMapping
  BeanNameUrl 处理器映射器，根据请求的 `url` 与 `Spring` 容器中定义的 `bean` 的 `name` 进行匹配，从而从 Spring 容器中找到 bean 实例，就是说，请求的 Url 地址就是处理器 Bean 的名字。

  这个 HandlerMapping 配置如下：

  ```xml
  <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping" id="handlerMapping">
      <property name="beanName" value="/hello"/>
  </bean>
  ```

* SimpleUrlHandlerMapping
  SimpleUrlHandlerMapping 是 BeanNameUrlHandlerMapping 的增强版本，它可以将 url 和处理器 bean 的 id 进行统一映射配置:

  ```xml
  <bean class="top.zxqs.controller.MyController" name="myController1"/>
  <bean class="top.zxqs.controller.MyController2" name="myController2"/>
  <bean class="top.zxqs.controller.MyController3" name="myController3"/>

  <bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping" id="handlerMapping">
        <property name="mappings">
            <props>
                <prop key="/hello">myController1</prop>
                <prop key="/hello2">myController2</prop>
                <prop key="/hello3">myController3</prop>
            </props>
        </property>
    </bean>
  ```

  注意，在 props 中，可以配置多个请求路径和处理器实例的映射关系。


## HandlerAdapter

HandlerAdapter，中文译作处理器适配器。

HandlerAdapter 会根据适配器接口对后端控制器进行包装（适配），包装后即可对处理器进行执行，通过扩展处理器适配器可以执行多种类型的处理器，这里使用了适配器设计模式。

在 SpringMVC 中，HandlerAdapter 也有诸多实现类：

![spring3](/blogImg/ssm/springmvc3.png)