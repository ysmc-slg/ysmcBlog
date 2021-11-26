---
title: SpringMVC简介和入门
---
::: tip

文章引用微信公众号：江南一点雨 《Spring入门》

:::
## SpringMVC简介
### Spring Web MVC是什么
Spring Web MVC 是一种基于 java 的实现了 `Web MVC` 设计模式的请求驱动类型的轻量级 Web 框架，即使用了 `MVC` 架构模式的思想，将 web 层进行职责解耦，基于请求驱动指的就是使用`请求-响应模型`，框架的目的就是帮助我们简化开发，Spring Web MVC 也是要简化我们日常 Web 开发的。在 传统的 Jsp/Servlet 技术体系中，如果要开发接口，一个接口对应一个 Servlet，会导致我们开发出许多 Servlet，使用 SpringMVC 可以有效的简化这一步骤。

Spring Web MVC 也是服务到工作者模式的实现，但进行可优化。前端控制器是 `DispatcherServlet`；应用控制器可以拆为`处理器映射器(Handler Mapping)`进行处理器管理和`视图解析器(View Resolver)`进行视图管理；页面控制器/动作/处理器为 Controller 接口（仅包含 ModelAndView handleRequest(request, response) 方法，也有人称作 Handler）的实现（也可以是任何的 POJO 类）；支持本地化（Locale）解析、主题（Theme）解析及文件上传等；提供了非常灵活的数据验证、格式化和数据绑定机制；提供了强大的约定大于配置（惯例优先原则）的契约式编程支持。


### Spring Web MVC能帮我们做什么

* 让我们能非常简单的设计出干净的 Web 层和薄薄的 Web 层；
* 进行更简洁的 Web 层的开发；
* 天生与 Spring 框架集成（如 IoC 容器、AOP 等）；
* 提供强大的约定大于配置的契约式编程支持；
* 能简单的进行 Web 层的单元测试；
* 支持灵活的 URL 到页面控制器的映射；
* 非常容易与其他视图技术集成，如 Velocity、FreeMarker 等等，因为模型数据不放在特定的 API 里，而是放在一个 Model 里（Map 数据结构实现，因此很容易被其他框架使用）；
* 非常灵活的数据验证、格式化和数据绑定机制，能使用任何对象进行数据绑定，不必实现特定框架的 API；
* 提供一套强大的 JSP 标签库，简化 JSP 开发；
* 支持灵活的本地化、主题等解析；
* 更加简单的异常处理；
* 对静态资源的支持；
* 支持 RESTful 风格


## SpringMVC入门

### SpringMVC工作流程

![流程](/blogImg/ssm/springmvc-3-1.png)

### SpringMVC中的组件

1. DispatcherServlet：前端控制器
   用户请求到达前端控制器，它就相当于 MVC 模式中的 C，DispatcherServlet 是整个流程控制的中心，相当于是 SpringMVC 的大脑，由他调用其他组件处理用户的请求，DispatcherServlet的存在降低了组件之间的耦合性。

2. HandlerMapping：处理器映射器
   HandlerMapping 负责根据用户请求找到 Handler 即处理器(也就是我们所说的 Controller)，SpringMVC 提供了不同的映射器实现不同的映射方式，例如：`配置文件方式`，`实现接口方式`，`注解方式`等，在实际开发中，我们常用的方式是注解方式。

3. Handler：处理器
   Handler 是继 DispatcherServlet 前端控制器的后端控制器，在DispatcherServlet 的控制下 Handler 对具体的用户请求进行处理。由于 Handler 涉及到具体的用户业务请求，所以一般情况需要程序员根据业务需求开发 Handler。（这里所说的 Handler 就是指我们的 Controller）

4. HandlAdapter：处理器适配器
   通过`HandlAdapter`对处理器进行执行，这是适配器模式的应用，通过扩展适配器可以对更多的处理器进行执行。

5. ViewResolver：视图解析器
   `ViewResolver` 负责将处理结果生成`View`视图，`ViewResolver` 首先根据逻辑视图名解析成物理视图名，即具体的页面地址，再生成 `View` 视图对象，最后对 `View` 进行渲染将处理结果通过页面展示给用户。SpringMVC框架提供了很多的`View`视图类型，包括：jstlView、freemarkerView、pdfView 等。一般情况下需要通过页面标签或页面模板技术将模型数据通过页面展示给用户，需要由程序员根据业务需求开发具体的页面。

## HelloWorld
接下来，通过一个简单的例子来感受一下 SpringMVC。

1. 利用 Maven 创建一个 web 工程（请自行百度）
2. 添加 spring-webmvc的依赖

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>RELEASE</version>
    </dependency>
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>4.0.1</version>
    </dependency>
    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>javax.servlet.jsp-api</artifactId>
        <version>2.3.3</version>
    </dependency>
</dependencies>
```

添加了 spring-webmvc 依赖之后，其他的 spring-web、spring-aop、spring-context 等等就全部都加入进来了。

3. 准备一个 Controller，这里使用的是实现Controller接口的方法，后面会使用其他方法。
   ```java
    public class MyController implements Controller {

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
          return mv;
      }
    }
   ```
4. 创建视图
   这里采用jsp作为视图，在 `webapp` 目录下创建 `hello.jsp` 文件。

   ```jsp
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
    <html>
    <head>
        <title>Title</title>
    </head>
    <body>
    <h1>hello ${name}!</h1>
    </body>
    </html>

   ```
5. 在 `resource` 目录下，创建两个配置文件`applicationContext.xml`和 `spring-servlet.xml`，分别为spring和springmvc的配置文件。

  applicationContext.xml
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

  spring-servlet.xml
  ```java
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:context="http://www.springframework.org/schema/context"
        xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <bean class="top.zxqs.controller.MyController" name="/hello"/>

    <context:component-scan base-package="top.zxqs" use-default-filters="false">
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>

    <!--这个是处理器映射器，这种方式，请求地址其实就是一个 Bean 的名字，然后根据这个 bean 的名字查找对应的处理器-->
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

6. 加载spring和springmvc配置文件

   在 web 项目启动时，加载 springmvc 配置文件，这个配置是在 web.xml 中完成的。
   ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
            version="4.0">
        <!--扫描spring配置文件-->
        <context-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:applicationContext.xml</param-value>
        </context-param>
        <listener>
            <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
        </listener>
        <!--spring-mvc配置文件-->
        <servlet>
            <servlet-name>springmvc</servlet-name>
            <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
            <init-param>
                <param-name>contextConfigLocation</param-name>
                <param-value>classpath:spring-servlet.xml</param-value>
            </init-param>
        </servlet>
        <servlet-mapping>
            <servlet-name>springmvc</servlet-name>
            <url-pattern>/</url-pattern>
        </servlet-mapping>
    </web-app>
   ```

   所有请求都将自动拦截下来，拦截下来后，请求交给 DispatcherServlet 去处理，在加载 DispatcherServlet 时，还需要指定配置文件路径。`这里有一个默认的规则，如果配置文件放在 webapp/WEB-INF/ 目录下，并且配置文件的名字等于 DispatcherServlet 的名字+ -servlet（即这里的配置文件路径是 webapp/WEB-INF/springmvc-servlet.xml），如果是这样的话，可以不用添加 init-param 参数`，即不用手动配置 springmvc 的配置文件，框架会自动加载。

7. 配置tomcat并启动项目，访问 http://localhost:8080/hello，就能看到访问的页面

   
  