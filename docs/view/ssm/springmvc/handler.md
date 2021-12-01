---
title: 处理器详解
autoPrev: DispatcherServlet
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

* SimpleControllerHandlerAdapter

SimpleControllerHandlerAdapter 简单控制器处理器适配器，所有实现了 `org.springframework.web.servlet.mvc.Controller` 接口的 Bean 通过此适配器进行适配、执行，也就是说，如果开发中的接口是通过实现 `Controller` 接口来完成的（不是通过注解开发的接口），那么 `HandlerAdapter` 必须是 `SimpleControllerHandlerAdapter`。

上面所有的案例都是实现的 `Controller` 接口。

* HttpRequestHandlerAdapter

`HttpRequestHandlerAdapter`，http 请求处理器适配器，所有实现了 `org.springframework.web.HttpRequestHandler` 接口的 Bean 通过此适配器进行适配、执行。

例如存在如下接口：

```java
public class MyController3 implements HttpRequestHandler {
    public void handleRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().write("hello ysmc3");
    }
}
```

```java
<bean class="top.zxqs.controller.MyController3" name="myController3"/>
<bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping" id="handlerMapping">
    <property name="mappings">
        <props>
            <prop key="/hello3">myController3</prop>
        </props>
    </property>
</bean>
```

## 最佳实践

以上使用的`BeanNameUrlHandlerMapping`、`SimpleControllerHandlerAdapter`、`SimpleControllerHandlerAdapter`、`HttpRequestHandlerAdapter`，在开发中实际使用的并不多，接下来我们来说，实际项目中用的最多的方法。

* 组件自动扫描
  web 开发中，我们基本上不再通过 XML 或者 java 配置来创建一个 Bean 的实例，而是直接通过组件扫描来实现 Bean 的配置，如果要扫描多个包，多个包之间用 `，` 隔开即可。

  ```xml
  <context:component-scan base-package="org.sang"/>
  ```
  具体的在[spring自动化配置](../spring/authConfigure.html#XML配置自动化扫描)中有详细说明。

* HandlerMapping
  正常情况下，我们在项目中使用的是 `RequestMappingHandlerMapping`，这个是根据处理器中的注解，来匹配请求（即 @RequestMapping 注解中的 url 属性）。因为在上面我们都是通过实现类来开发接口的，相当于还是一个类一个接口，所以，我们可以通过 `RequestMappingHandlerMapping` 来做处理器映射器，这样我们可以在一个类中开发出多个接口。

* HandlerAdapter
  对于上面提到的通过 @RequestMapping 注解所定义出来的接口方法，这些方法的调用都是要通过 `RequestMappingHandlerAdapter` 这个适配器来实现

  例如我们开发一个接口：

  ```java
  @Controller
  public class HelloContoller {

    @RequestMapping(value = "/hello")
    public ModelAndView hello(){
        ModelAndView mv = new ModelAndView("hello");
        mv.addObject("name","ysmc");
        return mv;
    }
  }
  ```
  要能够访问这个接口，我们需要 `RequestMappingHandlerMapping` 才能定位到需要执行的方法，需要`RequestMappingHandlerAdapter`，才能执行定位的方法，修改 springmvc 的配置文件如下：

  ```xml
  <context:component-scan base-package="top.zxqs.springmvc02" use-default-filters="false">
      <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
  </context:component-scan>

  <!--处理器映射器-->
  <bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping" id="handlerMapping"/>
  <!--处理器适配器-->
  <bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter" id="handlerAdapter"/>

  <!--视图解析器-->
  <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="viewResolver">
      <property name="prefix" value="/jsp/"/>
      <property name="suffix" value=".jsp"/>
  </bean>
  ```
  然后，启动项目，访问 `/hello` 接口，就可以看到相应的页面了。

* 继续优化
  由于开发中，我们常用是 `RequestMappingHandlerMapping` 和 `RequestMappingHandlerAdapter` ，这两个有一个简化的写法，如下：

  ```xml
  <mvc:annotation-driven>
  ```

  可以用这一行配置，代替 RequestMappingHandlerMapping 和 RequestMappingHandlerAdapter 的两行配置。

  ```xml
  <context:component-scan base-package="top.zxqs.springmvc02" use-default-filters="false">
      <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
  </context:component-scan>

  <mvc:annotation-driven/>

  <!--视图解析器-->
  <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="viewResolver">
      <property name="prefix" value="/jsp/"/>
      <property name="suffix" value=".jsp"/>
  </bean>
  ```

  访问效果和上一步的效果一样。这是我们实际开发中，最终配置的形态。













