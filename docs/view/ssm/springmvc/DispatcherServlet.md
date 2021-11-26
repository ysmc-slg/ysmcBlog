---
title: DispatcherServlet详解
---
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

现在，假如需要将 HelloServie 注入到Spring 容器中并使用它，这个是属于 Spring 层的 Bean，