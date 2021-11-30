---
title: SpringMVC 中 Controller 的各种细节
autoPrev: handler
---
## @RequestMapping
这个注解用来标记一个接口，这算是我们开开发中使用最多的注解之一。

### 请求 URL
标记请求 URL 很简单，只需要在相应的方法上添加该注解即可：

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

这里 `@RequestMapping("/hello")`表示当请求地址为 `/hello` 的时候，这个方法会被触发。其中，地址可以是多个，就是可以多个地址映射到同一个方法

```java
@Controller
public class HelloController {
    @RequestMapping({"/hello","/hello2"})
    public ModelAndView hello() {
        return new ModelAndView("hello");
    }
}
```
这个配置，表示 /hello 和 /hello2 都可以访问到该方法。

### 请求窄化

同一个项目中，会存在多个接口，例如订单相关的接口都是 /order/xxx 格式的，用户相关的接口都是 /user/xxx 格式的。为了方便处理，这里的前缀（就是 /order、/user）可以统一在 Controller 上面处理。
```java
@Controller
@RequestMapping("/user")
public class HelloController {
    @RequestMapping({"/hello","/hello2"})
    public ModelAndView hello() {
        return new ModelAndView("hello");
    }
}
```
当类上加了 @RequestMapping 注解之后，此时，要想访问到 hello ，地址就应该是 `/user/hello` 或者 `/user/hello2`

### 请求方法限定
默认情况下，使用 @RequestMapping 注解定义好的方法，可以被 GET 请求访问到，也可以被 POST 请求访问到，但是 DELETE 请求以及 PUT 请求不可以访问到。

当然，我们也可以指定具体的访问方法：
```java
@Controller
@RequestMapping("/user")
public class HelloController {
    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public ModelAndView hello() {
        return new ModelAndView("hello");
    }
}
```
通过 `@RequestMapping` 注解，指定了该接口只能被 `GET` 请求访问到，此时，该接口就不可以被 `POST` 以及请求请求访问到了。

当然，限定的方法也可以有多个：
```java
@Controller
@RequestMapping("/user")
public class HelloController {
    @RequestMapping(value = "/hello",method = {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
    public ModelAndView hello() {
        return new ModelAndView("hello");
    }
}
```

此时，这个接口就可以被 GET、POST、PUT、以及 DELETE 访问到了。但是，由于 JSP 只支持 GET、POST 以及 HEAD ，所以这个测试，不能使用 JSP 做页面模板。可以讲视图换成其他的，或者返回 JSON，这里就不演示了。

## Controller 方法的返回值

### 返回 ModelAndView
如果是前后端不分的开发，大部分情况下，我们返回 `ModelAndView`，即 `数据模型+视图`

```java
@Controller
@RequestMapping("/user")
public class HelloController {
  @RequestMapping("/hello")
  public ModelAndView hello() {
      ModelAndView mv = new ModelAndView("hello");
      mv.addObject("username", "javaboy");
      return mv;
  }
}
```
Model 中，放我们的数据，然后在 ModelAndView 中指定视图名称。

### 返回 Void

没有返回值，并不一定真的没有返回值，只是方法的返回值为 void，我们可以通过其他方式给前端返回。**实际上，这种方式也可以理解为 Servlet 中的那一套方案。**

**注意**，由于默认的 Maven 项目没有 Servlet，因此这里需要额外添加一个依赖：

```xml
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
</dependency>
```

* 通过 HttpServletRequest 做服务端跳转
  ```java
  @RequestMapping("/hello2")
  public void hello2(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
      req.getRequestDispatcher("/jsp/hello.jsp").forward(req,resp);//服务器端跳转
  }
  ```
* 通过 HttpServletResponse 做重定向
  ```java
  @RequestMapping("/hello3")
  public void hello3(HttpServletRequest req, HttpServletResponse resp) throws IOException {
      resp.sendRedirect("/hello.jsp");
  }
  ```

* 通过 HttpServletResponse 给出响应
  ```java
  @RequestMapping("/hello4")
  public void hello4(HttpServletRequest req, HttpServletResponse resp) throws IOException {
      resp.setContentType("text/html;charset=utf-8");
      PrintWriter out = resp.getWriter();
      out.write("hello javaboy!");
      out.flush();
      out.close();
  }
  ```
  这种方式，既可以返回 JSON，也可以返回普通字符串。