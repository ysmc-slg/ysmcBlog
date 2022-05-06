---
description: DispatcherServlet详解
autoPrev: README
---

# DispatcherServlet详解

::: tip

文章引用 江南一点雨 [SpringMVC 中央控制器 DispatcherServlet 详解](http://itboyhub.com/2021/01/28/springmvc-dispatcherservlet/)

:::
## DispatcherServlet作用

`DispatcherServlet` 是前端控制器设计模式的实现，提供Spring Web MVC 的集中访问点，而且负责职责的分派，并且与Spring IOC 容器无缝集成，从而可以获得 Spring 的所有好处，`DispatcherServlet`主要用作职责调度工作，本身主要用于控制流程，主要职责如下：

1. 文件上传解析，如果请求类型是 `multipart` 将通过 `MultipartResolver` 进行文件上传解析；
2. 通过 `HandlerMapping`，将请求映射到处理器（返回一个 `HandlerExcutionChain`，它包括一个处理器、多个`HandlerInterceptor` 拦截器）;
3. 通过 `HandlerAdapter` 支持多种类型的处理器(HandlerExecutionChain 中的处理器)
4. 通过 `ViewResolver` 解析逻辑视图名到具体视图实现；
5. 本地化解析
6. 渲染具体的视图等；
7. 如果执行过程中遇到异常将交给 `HandlerExceptionResolver` 来解析

## DispatcherServlet配置详解

```xml
<servlet>
  <servlet-name>springmvc</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:spring-servlet.xml</param-value>
  </init-param>
  <load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
  <servlet-name>springmvc</servlet-name>
  <url-pattern>/</url-pattern>
</servlet-mapping>
```
* load-on-startup：表示启动容器时初始化改 Servlet;
* url-pattern：表示那些请求交给 Spring Web MVC 处理 "/" 是用来定义默认 `servlet` 映射的。也可以如 `.html` 表示拦截所有以 html 为扩展名的请求
* contextConfigLocation：表示SpringMVC配置文件的路径，
  
  其他参数
  |  参数   |   描述  |
  |:---:|:---:|
  |contextClass|实现WebApplicationContext接口的类，当前的servlet用它来创建上下文。如果这个参数没有指定， 默认使用XmlWebApplicationContext。|
  |namespace|WebApplicationContext命名空间。默认值是[server-name]-servlet。|

## spring 配置
之前的案例中，只有 SpringMVC，没有Spring，Web 项目也是可以运行的。但实际开发中，Spring 和 SpringMVC 是分开配置的，所以我们对上面的项目继续进行完善，添加 Spring 相关配置。

首先，项目添加一个 `service` 包，提供一个 `HelloService` 类，如下：
```java
@Service
public class HelloService {
    public String hello(String name){
        return "hello" + name;
    }
}
```

现在，假如需要将 HelloServie 注入到Spring 容器中并使用它，这个是属于 Spring 层的 Bean，所以`我们一般将除了 Controller 之外的所有 Bean 注册到 Spring 容器中。而将 Controller 注册到 SpringMVC 容器中`，现在，在 `resource` 目录下添加 `applicationContext.xml` 作为 Spring 的配置：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="top.zxqs" use-default-filters="true">
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>
</beans>
```
这个配置spring中说过，这里就不说了。

这个配置文件，默认情况下，并不会被加载，所以，需要我们在 `web.xml` 中对其进行配置：

```xml
<!--扫描spring配置文件-->
<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
</context-param>
<listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

首先通过 `context-param` 指定 Spring 配置文件的位置，这个配置也有一些默认规则，它的配置文件名默认就叫 `applicationContext.xml`，并且，如果你将这个配置文件放在 `WEB-INF` 目录下，那么这里就可以不用指定配置文件位置了，只需要指定监听器就可以了。这段配置是`Spring` 集成 Web 环境的通用配置。一般用于加载除 Web 层的 Bean（如DAO、Service等），以便与其他任何 web 框架集成。

配置完成之后，还需要修改 MyController，在 MyController 中注入 HelloSerivce:
```java
@org.springframework.stereotype.Controller("/hello")
public class MyController implements Controller {

    @Autowired
    private HelloService service;
    /**
     * 这就是一个请求处理接口
     * @param request 这就是前端发送来的请求
     * @param response 这就是服务端给前端的响应
     * @return 返回值是一个 ModelAndView，Model 相当于是我们的数据模型，View 是我们的视图
     * @throws Exception
     */
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView mv = new ModelAndView("hello");
        mv.addObject("name","ysmc");
        System.out.println("service.hello(\"ysmc\") = " + service.hello("ysmc"));
        return mv;
    }
}
```

**注意：**

为了在 SpringMVC 容器中扫描到 `MyController`，这里给 `MyController` 添加了 `@Controller` 注解，同时，由于我们目前采用的 `HandlerMapping` 是 `BeanNameUrlHandlerMapping`（意味着请求地址就是处理器 Bean 的名字），所以，还需要手动指定 `MyController` 的名字为 `/hello`。

最后，修改 SpringMVC 的配置文件，将 Bean 配置为扫描形式：
```xml
<?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:context="http://www.springframework.org/schema/context"
        xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="top.zxqs" use-default-filters="false">
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>

    <!--这个是处理器映射器，根据请求的路径找到对应的 bean，这里 value 要和上面 bean 中的name名一致-->
    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping" id="handlerMapping">
        <property name="beanName" value="/hello"/>
    </bean>

    <!--处理器适配器-->
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter" id="handlerAdapter"/>

    <!--视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="viewResolver">
        <property name="prefix" value="/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

  </beans>
```

配置完成后，再次启动项目，spring 容器也将会被创建。访问 `/hello` 接口，HelloService 中的hello方法就会被调用

## 总结

当 Spring 和 SpringMVC 同时出现，我们的项目中将存在两个容器，一个是 Spring 容器，另一个是 SpringMVC 容器，Spring 容器通过 `ContextLoadListener` 来加载，SpringMVC 容器则通过 `DispatcherServlet` 来加载，则两个容器不一样：

![spring2](/blogImg/ssm/springmvc-5-4-1.png)

**从图中可以看出**：

* ContextLoaderListener 初始化的上下文加载的 Bean 是对于整个应用程序共享的，不管是使用什么表现层技术，一般如 DAO 层、Service 层 Bean；
* DispatcherServlet 初始化的上下文加载的 Bean 是只对 Spring Web MVC 有效的 Bean，如 Controller、HandlerMapping、HandlerAdapter 等等，该初始化上下文应该只加载 Web相关组件。


**提问1：** 为什么不在 Spring 容器中扫描所有 Bean ？

因为请求到达服务端后，找 DispatcherServlet 去处理，只会去 SpringMVC 容器中找对应的  Controller，这就意味着 Controller 必须在SpringMVC 容器中扫描。

**提问2：** 为什么不在 SpringMVC 容器中扫描所有的 Bean。
这个是可以的，可以在 SpringMVC 容器中扫描所有 Bean。不写在一起，有两个方面的原因：

1. 为了方便配置文件的管理
2. 在 Spring+SpringMVC+Hibernate 组合中，实际上也不支持这种写法