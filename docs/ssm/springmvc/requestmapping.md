---
title: SpringMVC 中 Controller 的各种细节
autoPrev: handler
---

::: tip

文章引用 江南一点雨 [SpringMVC 中 Controller 的各种细节](http://itboyhub.com/2021/01/28/springmvc-controller/)

:::


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
      out.write("hello ysmc!");
      out.flush();
      out.close();
  }
  ```
  这种方式，既可以返回 JSON，也可以返回普通字符串。

### 返回字符串
* 返回逻辑视图名
  前面的 ModelAndView 可以拆分为两个部分，Model 和 View，在 SpringMVC 中，Model 我们可以直接在参数中指定，然后返回值是逻辑视图名。
  ```java
    @RequestMapping("/hello5")
    public String hello5(Model model) {
        model.addAttribute("username", "ysmc");//这是数据模型
        return "hello";//表示去查找一个名为 hello 的视图
    }
  ```
* 服务端跳转
  ```java
  @RequestMapping("/hello5")
  public String hello5() {
    return "forward:/jsp/hello.jsp";
  } 
  ```
  forward 后面跟上跳转的路径

* 客户端跳转
  ```java
  @RequestMapping("/hello5")
  public String hello5() {
    return "redirect:/user/hello";
  }
  ```
  本质上就是浏览器重定向。

* 真的返回一个字符串
  上面三个返回的字符串，都是有特殊含义的，如果一定要返回一个字符串，需要额外添加一个注解 `@ResponseBody`，这个注解表示当前方法的返回值是展示出来的返回值，没有特殊含义。

  ```java
  @RequestMapping("/hello5")
  @ResponseBody
  public String hello5() {
    return "redirect:/user/hello";
  }
  ```
  上面代码表示就是想返回一段内容为 `redirect:/user/hello` 的字符串，如果没有`@ResponseBody`注解，会去 `user` 目录下找 `hello.js` 页面。注意，这里如果单纯的返回一个中文字符串，是会乱码的，可以在 `@RequestMapping` 中添加 `produces` 属性来解决：
  
  ```java
  @RequestMapping(value = "/hello5",produces = "text/html;charset=utf-8")
  @ResponseBody
  public String hello5() {
    return "Java 语言程序设计";
  }
  ```

## 参数绑定

### 默认支持的参数类型
默认支持的参数类型，就是直接写在 `@RequestMapping` 所注解的方法中的参数类型，一共有四类：
* HttpServletRequest
* HttpServletResponse
* HttpSession
* Model/ModelMap

这几个例子参考上一小结。

在请求的方法中，默认的参数就是这几个，如果在方法中，刚好需要这几个参数，那么就可以把这几个参数加入到方法中。

### 简单数据类型

Integer、Boolean、Double 等等简单数据类型也都是支持的。例如添加一本书：

首先，在 /jsp/ 目录下创建 book.jsp 作为图书添加页面：

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/doAdd" method="post">
    <table>
        <tr>
            <td>书名：</td>
            <td><input type="text" name="name"></td>
        </tr>
        <tr>
            <td>作者：</td>
            <td><input type="text" name="author"></td>
        </tr>
        <tr>
            <td>价格：</td>
            <td><input type="text" name="price"></td>
        </tr>
        <tr>
            <td>是否上架：</td>
            <td>
                <input type="radio" value="true" name="ispublic">是
                <input type="radio" value="false" name="ispublic">否
            </td>
        </tr>
        <tr>
           <td colspan="2">
               <input type="submit" value="添加">
           </td>
        </tr>
    </table>
</form>
</body>
</html>
```
创建控制器，提供两个功能，一个是访问jsp页面，另一个是提供添加接口：

```java
@Controller
public class BookController {
    @RequestMapping("/book")
    public String addBook() {
        return "book";
    }

    @PostMapping(value = "/doAdd",produces = "text/html;charset=utf-8")
    @ResponseBody
    public void doAdd(String name,String author,Double price,Boolean ispublic) {
        System.out.println(name);
        System.out.println(author);
        System.out.println(price);
        System.out.println(ispublic);
    }
}
```

**注意:**

由于 doAdd 方法确实不想返回任何值，所以需要给该方法添加 `@ResponseBody` 注解，表示这个方法到此为止，不用再去查找相关视图了。另外， `POST 请求传上来的中文会乱码，所以，我们在 web.xml 中再额外添加一个编码过滤器`：

```xml
<filter>
    <filter-name>encoding</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceRequestEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
    <init-param>
        <param-name>forceResponseEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>encoding</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```
最后，浏览器中输入 http://localhost:8080/book ，就可以执行添加操作，服务端会打印出来相应的日志。

在上面的绑定中，有一个要求，表单中`字段的 name 属性要和接口中的变量名一一对应`，才能映射成功，否则服务端接收不到前端传来的数据。有一些特殊情况，我们的服务端的接口变量名可能和前端不一致，这个时候我们可以通过 `@RequestParam` 注解来解决。

* @RequestParam
这个注解的功能主要有三方面：
1. 给变量取别名
2. 设置变量是否必填
3. 给变量设置默认值

如下：
```java
@PostMapping(value = "/doAdd",produces = "text/html;charset=utf-8")
@ResponseBody
public void doAdd(@RequestParam("name") String bookname, String author, Double price, Boolean ispublic) {
    System.out.println(bookname);
    System.out.println(author);
    System.out.println(price);
    System.out.println(ispublic);
}
```
注解中的 “name” 表示给 bookname 这个变量取的别名，也就是说，bookname 将接收前端传来的 name 这个变量的值。在这个注解中，还可以添加 `required` 属性和 `defaultValue` 属性，如下：
```java
@PostMapping(value = "/doAdd",produces = "text/html;charset=utf-8")
@ResponseBody
public void doAdd(@RequestParam(value = "name",required = true,defaultValue = "三国演义") String bookname, String author, Double price, Boolean ispublic) {
    System.out.println(bookname);
    System.out.println(author);
    System.out.println(price);
    System.out.println(ispublic);
}
```

::: tip 提示

required 属性默认为 true，即<div style="color:red">只要添加了 @RequestParam 注解，这个参数默认就是必填的</div>，如果不填，请求无法提交，会报 400 错误，如果这个参数不是必填项，可以手动把 required 属性设置为 false。但是，<div style="color:red">如果同时设置了 defaultValue，这个时候，前端不传该参数到后端，即使 required 属性为 true，它也不会报错</div>。

:::


### 实体类
参数除了是简单数据类型之外，也可以是实体类。实际上，在开发中，大部分情况下，都是实体类。

还是上面的例子，我们改用一个 Book 对象来接收前端传来的数据：
```java
public class Book {
    private String name;
    private String author;
    private Double price;
    private Boolean ispublic;

    @Override
    public String toString() {
        return "Book{" +
                "name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", price=" + price +
                ", ispublic=" + ispublic +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Boolean getIspublic() {
        return ispublic;
    }

    public void setIspublic(Boolean ispublic) {
        this.ispublic = ispublic;
    }
}

```

服务端接收数据方式如下：

```java
@PostMapping(value = "/doAdd",produces = "text/html;charset=utf-8")
@ResponseBody
public String doAdd(Book book) {
    System.out.println(book);

    return book.getAuthor()+">>>"+book.getName();
}
```
前端页面传值的时候和上面的一样，只需要写属性名就可以了，不需要写 book 对象名。

当然，对象中可能还有对象。我们在 book 对象中添加一个 `Author` 对象。

首先创建 Author 对象
```java
public class Author {
    private String name;
    private Integer age;

    // 省略 setter/getter 和 toString 方法
}

```

Book：
```java
public class Book {
    private String name;
    private Double price;
    private Boolean ispublic;
    private Author author;

    // 省略 setter/getter 和 toString 方法
}
```

Book 对象中，有一个 Author 属性，如何给 Author 属性传值呢？前端写法如下：
```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/doAdd" method="post">
    <table>
        <tr>
            <td>书名：</td>
            <td><input type="text" name="name"></td>
        </tr>
        <tr>
            <td>作者姓名：</td>
            <td><input type="text" name="author.name"></td>
        </tr>
        <tr>
            <td>作者年龄：</td>
            <td><input type="text" name="author.age"></td>
        </tr>
        <tr>
            <td>价格：</td>
            <td><input type="text" name="price"></td>
        </tr>
        <tr>
            <td>是否上架：</td>
            <td>
                <input type="radio" value="true" name="ispublic">是
                <input type="radio" value="false" name="ispublic">否
            </td>
        </tr>
        <tr>
           <td colspan="2">
               <input type="submit" value="添加">
           </td>
        </tr>
    </table>
</form>
</body>
</html>
```

Controller 和上面的没有区别，将作者姓名打印出来就好了。
```java
@Controller
public class BookController {
    @RequestMapping("/book")
    public String addBook() {
        return "book";
    }

    @PostMapping(value = "/doAdd",produces = "text/html;charset=utf-8")
    @ResponseBody
    public String doAdd(Book book) {
        System.out.println(book);

        return "书名："+book.getName()+">>>作者："+book.getAuthor().getName()+">>>>金额："+book.getPrice()+">>>作者年龄："+book.getAuthor().getAge();
    }
}
```
这样在后端直接用 Book 对象就可以接收到所有数据了。

### 自定义参数绑定

前面的转换，都是系统自动转换的，这种转换仅限于基本数据类型。特殊的数据类型，系统无法自动转换，例如日期。例如前端传一个日期到后端，后端不是用字符串接收，而是使用一个 Date 对象接收，这个时候就会出现参数类型转换失败。这个时候，需要我们手动定义`参数类型转换器`，将日期字符串手动转为一个 Date 对象。

```java
@Component
public class DateConverter implements Converter<String, Date> {
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

    @Override
    public Date convert(String source) {
        try {
            return sdf.parse(source);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

在自定义的参数类型转换器中，将一个 String 转为 Date 对象，同时，将这个转换器注册为一个 Bean。

接下来，在 SpringMVC 的配置文件中，配置该 Bean，使之生效。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">
    
    <context:component-scan base-package="top.zxqs.springmvc02" use-default-filters="false">
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>


    <mvc:annotation-driven conversion-service="conversionService"/>

    <!-- 使参数转换器生效 -->
    <bean class="org.springframework.format.support.FormattingConversionServiceFactoryBean" id="conversionService">
        <property name="converters">
            <set>
                <ref bean="dateConverter"/>
            </set>
        </property>
    </bean>

    <!--视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="viewResolver">
        <property name="prefix" value="/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
</beans>
```
自定义参数转换器 `DateConverter` 通过 `@Component` 注解扫描到 Spring 容器中，所以在 set 中可以直接引用。

在前端页面上传一个时间

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/doAdd" method="post">
    <table>
        <tr>
            <td>书名：</td>
            <td><input type="text" name="name"></td>
        </tr>
        <tr>
            <td>作者姓名：</td>
            <td><input type="text" name="author.name"></td>
        </tr>
        <tr>
            <td>作者年龄：</td>
            <td><input type="text" name="author.age"></td>
        </tr>
        <tr>
            <td>出生日期：</td>
            <td><input type="date" name="author.birthday"></td>
        </tr>
        <tr>
            <td>价格：</td>
            <td><input type="text" name="price"></td>
        </tr>
        <tr>
            <td>是否上架：</td>
            <td>
                <input type="radio" value="true" name="ispublic">是
                <input type="radio" value="false" name="ispublic">否
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="添加">
            </td>
        </tr>
    </table>
</form>
</body>
</html>
```

配置完成后，在服务端就可以接收前端传来的日期参数了。


### 集合类的参数

**String 数组**
String 数组可以直接用数组去接收，前端传递的时候，数组的传递其实就是多个相同的 key ，这种一般用在 checkbox 中较多。

例如前端增加兴趣爱好一项
```xml
<form action="/doAdd" method="post">
    <table>
        <tr>
            <td>书名：</td>
            <td><input type="text" name="name"></td>
        </tr>
        <tr>
            <td>作者姓名：</td>
            <td><input type="text" name="author.name"></td>
        </tr>
        <tr>
            <td>作者年龄：</td>
            <td><input type="text" name="author.age"></td>
        </tr>
        <tr>
            <td>出生日期：</td>
            <td><input type="date" name="author.birthday"></td>
        </tr>
        <tr>
            <td>兴趣爱好：</td>
            <td>
                <input type="checkbox" name="favorites" value="足球">足球
                <input type="checkbox" name="favorites" value="篮球">篮球
                <input type="checkbox" name="favorites" value="乒乓球">乒乓球
            </td>
        </tr>
        <tr>
            <td>价格：</td>
            <td><input type="text" name="price"></td>
        </tr>
        <tr>
            <td>是否上架：</td>
            <td>
                <input type="radio" value="true" name="ispublic">是
                <input type="radio" value="false" name="ispublic">否
            </td>
        </tr>
        <tr>
           <td colspan="2">
               <input type="submit" value="添加">
           </td>
        </tr>
    </table>
</form>
```

在服务端用一个数组去接收 favorites 参数：

```java
@PostMapping(value = "/doAdd",produces = "text/html;charset=utf-8")
@ResponseBody
public void doAdd(Book book,String[] favorites) {
    System.out.println(Arrays.toString(favorites));
    System.out.println(book);
}
```
注意，前端传来的数组对象，服务端不可以使用 List 集合去接收。

**List 集合**

如果需要使用 List 集合接收到前端传来的数据，List 集合本身需要放在一个封装对象中，这个时候，List中，可以是基本数据类型，也可以是对象。

首先来看集合中是 String 类型。

在 `Author` 对象添加一个爱好集合

```java
public class Author {
    private String name;
    private Integer age;
    private List<String> favorites;

    // 省略 setter/getter 和 toString方法
}
```

Controller
```java
@PostMapping(value = "/doAdd",produces = "text/html;charset=utf-8")
@ResponseBody
public void doAdd(Book book) {
    System.out.println(Arrays.toString(favorites));
    System.out.println(book);
}
```

页面和返回数组类似。

```html
<form action="/doAdd" method="post">
    <table>
        <tr>
            <td>书名：</td>
            <td><input type="text" name="name"></td>
        </tr>
        <tr>
            <td>作者姓名：</td>
            <td><input type="text" name="author.name"></td>
        </tr>
        <tr>
            <td>作者年龄：</td>
            <td><input type="text" name="author.age"></td>
        </tr>
        <tr>
            <td>出生日期：</td>
            <td><input type="date" name="author.birthday"></td>
        </tr>
        <tr>
            <td>兴趣爱好：</td>
            <td>
                <input type="checkbox" name="author.favorites" value="足球">足球
                <input type="checkbox" name="author.favorites" value="篮球">篮球
                <input type="checkbox" name="author.favorites" value="乒乓球">乒乓球
            </td>
        </tr>
        <tr>
            <td>价格：</td>
            <td><input type="text" name="price"></td>
        </tr>
        <tr>
            <td>是否上架：</td>
            <td>
                <input type="radio" value="true" name="ispublic">是
                <input type="radio" value="false" name="ispublic">否
            </td>
        </tr>
        <tr>
           <td colspan="2">
               <input type="submit" value="添加">
           </td>
        </tr>
    </table>
</form>
```

使用`author.favorites` 给 `Author` 对象中的集合赋值。如果集合中是对象，就不能这么做了。

例如有一个班级类，班级里边有学生，学生有多个：

```java
public class MyClass {
    private Integer id;
    private List<Student> students;

    @Override
    public String toString() {
        return "MyClass{" +
                "id=" + id +
                ", students=" + students +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
}
```

```java
public class Student {
    private Integer id;
    private String name;

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

服务端代码如下：

```java
@Controller
public class BookController {

    @RequestMapping("/getClass")
    public String getMyClass() {
        return "class";
    }

    @PostMapping(value = "addclass",produces = "text/html;charset=utf-8")
    @ResponseBody
    public String addclass(MyClass myClass){
        return myClass.toString();
    }
}
```

添加班级的时候，可以传递多个 Student，前端页面写法如下：

```html
<form action="/addclass" method="post">
    <table>
        <tr>
            <td>班级编号：</td>
            <td><input type="text" name="id"></td>
        </tr>
        <tr>
            <td>学生编号：</td>
            <td><input type="text" name="students[0].id"></td>
        </tr>
        <tr>
            <td>学生姓名：</td>
            <td><input type="text" name="students[0].name"></td>
        </tr>
        <tr>
            <td>学生编号：</td>
            <td><input type="text" name="students[1].id"></td>
        </tr>
        <tr>
            <td>学生姓名：</td>
            <td><input type="text" name="students[1].name"></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="提交">
            </td>
        </tr>
    </table>
</form>
```
集合中的是 `Student`对象，`students[0].id` 就表示给集合中的第一个 `Student`实例的 id 赋值。因为有多个Student，所以要加上下标。

这样也有一个缺点，第一个学生编号和姓名不填，在集合中也还是占了`下标为0`的空间，所以返回的值就是这样。

```text
MyClass{id=12, students=[Student{id=null, name=''}, Student{id=1, name='张三'}]}
```
前端一般也不会以这种形式传递对象。

**Map：**

相对于实体类而言，Map 是一种比较灵活的方案，但是，Map 可维护性比较差，因此一般不推荐使用。

例如给上面的班级类添加其他属性信息：

```java
public class MyClass {
    private Integer id;
    private List<Student> students;
    private Map<String, Object> info;

    @Override
    public String toString() {
        return "MyClass{" +
                "id=" + id +
                ", students=" + students +
                ", info=" + info +
                '}';
    }

    public Map<String, Object> getInfo() {
        return info;
    }

    public void setInfo(Map<String, Object> info) {
        this.info = info;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
}
```
在前端，通过如下方式给 info 这个 Map 赋值。

```html
<form action="/addclass" method="post">
    <table>
        <tr>
            <td>班级编号：</td>
            <td><input type="text" name="id"></td>
        </tr>
        <tr>
            <td>班级名称：</td>
            <td><input type="text" name="info['name']"></td>
        </tr>
        <tr>
            <td>班级位置：</td>
            <td><input type="text" name="info['pos']"></td>
        </tr>
        <tr>
            <td>学生编号：</td>
            <td><input type="text" name="students[0].id"></td>
        </tr>
        <tr>
            <td>学生姓名：</td>
            <td><input type="text" name="students[0].name"></td>
        </tr>
        <tr>
            <td>学生编号：</td>
            <td><input type="text" name="students[1].id"></td>
        </tr>
        <tr>
            <td>学生姓名：</td>
            <td><input type="text" name="students[1].name"></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="提交">
            </td>
        </tr>
    </table>
</form>
```




