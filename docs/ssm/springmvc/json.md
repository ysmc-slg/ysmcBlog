---
description: JSON 处理
autoPrev: exceptionAndValidator
---

# JSON 处理

目前主流的 JSON 处理工具有三种：
* jackson
* gson
* fastjson

在 SpringMVC 中，对 jackson 和 gson 都提供了相应的支持，就是如果使用这两个作为 JSON 转换器，只需要添加对应的依赖就可以了，返回的对象和返回的集合、Map 等都会自动转为 JSON，但是，如果使用 fastjson，除了添加相应的依赖之外，还需要自己手动配置 HttpMessageConverter 转换器。其实前两个也是使用 HttpMessageConverter 转换器，但是是 SpringMVC 自动提供的，SpringMVC 没有给 fastjson 提供相应的转换器。

## jackson
jackson 是一个使用比较多，时间也比较长的 JSON 处理工具，在 SpringMVC 中使用 jackson ，只需要添加 jackson 的依赖即可：
```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.10.1</version>
</dependency>

```
依赖添加成功后，凡是在接口中直接返回的对象，集合等等，都会自动转为 JSON。如下：

```java
public class Book {
    private Integer id;
    private String name;
    private String author;

    // 省略setter/getter方法
}

@RequestMapping("/book")
@ResponseBody
public Book getBookById() {
    Book book = new Book();
    book.setId(1);
    book.setName("三国演义");
    book.setAuthor("罗贯中");
    return book;
}

```
这里返回一个对象，但是在前端接收到的则是一个 JSON 字符串，这个对象会通过 HttpMessageConverter 自动转为 JSON 字符串。

如果想返回一个 JSON 数组，写法如下：

```java
@RequestMapping("/books")
@ResponseBody
public List<Book> getAllBooks() {
    List<Book> list = new ArrayList<Book>();
    for (int i = 0; i < 10; i++) {
        Book book = new Book();
        book.setId(i);
        book.setName("三国演义:" + i);
        book.setAuthor("罗贯中:" + i);
        list.add(book);
    }
    return list;
}

```

添加了 jackson ，就能够自动返回 JSON，这个依赖于一个名为 HttpMessageConverter 的类，这本身是一个接口，从名字上就可以看出，它的作用是 Http 消息转换器，既然是消息转换器，它提供了两方面的功能：

1. 将返回的对象转为 JSON
2. 将前端提交上来的 JSON 转为对象

但是，HttpMessageConverter 只是一个接口，由各个 JSON 工具提供相应的实现，在 jackson 中，实现的名字叫做 MappingJackson2HttpMessageConverter，而这个东西的初始化，则由 SpringMVC 来完成。除非自己有一些自定义配置的需求，否则一般来说不需要自己提供 MappingJackson2HttpMessageConverter。

举一个简单的应用场景，例如每一本书，都有一个出版日期，修改 Book 类如下：
```java
public class Book {
    private Integer id;
    private String name;
    private String author;
    private Date publish;

    // 省略setter/getter方法
}

```

然后在构造 Book 时添加日期属性：

```java
@RequestMapping("/book")
@ResponseBody
public Book getBookById() {
    Book book = new Book();
    book.setId(1);
    book.setName("三国演义");
    book.setAuthor("罗贯中");
    book.setPublish(new Date());
    return book;
}

```

此时访问 `/book` 接口，publish 是一个事件戳。

如果我们想自己定制返回日期的格式，简单的办法，可以通过添加注解来实现：
```java
public class Book {
    private Integer id;
    private String name;
    private String author;
    @JsonFormat(pattern = "yyyy-MM-dd",timezone = "Asia/Shanghai")
    private Date publish;
}
```
注意这里一定要设置时区。

这样，就可以定制返回的日期格式了。

但是，这种方式有一个弊端，这个注解可以加在属性上，也可以加在类上，也就说，最大可以作用到一个类中的所有日期属性上。如果项目中有很多实体类都需要做日期格式化，使用这种方式就比较麻烦了，这个时候，我们可以自己提供一个 jackson 的 HttpMesageConverter 实例，在这个实例中，自己去配置相关属性，这里的配置将是一个全局配置。

在 SpringMVC 配置文件中，添加如下配置：
```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <ref bean="httpMessageConverter"/>
    </mvc:message-converters>
</mvc:annotation-driven>
<bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter" id="httpMessageConverter">
    <property name="objectMapper">
        <bean class="com.fasterxml.jackson.databind.ObjectMapper">
            <property name="dateFormat">
                <bean class="java.text.SimpleDateFormat">
                    <constructor-arg name="pattern" value="yyyy-MM-dd HH:mm:ss"/>
                </bean>
            </property>
            <property name="timeZone" value="Asia/Shanghai"/>
        </bean>
    </property>
</bean>

```

添加完成后，去掉 Book 实体类中日期格式化的注解，再进行测试.

## gson
gson 是 Google 推出的一个 JSON 解析器，主要在 Android 开发中使用较多，不过，Web 开发中也是支持这个的，而且 SpringMVC 还针对 Gson 提供了相关的自动化配置，以致我们在项目中只要添加 gson 依赖，就可以直接使用 gson 来做 JSON 解析了。
```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.8.6</version>
</dependency>
```
如果项目中，同时存在 jackson 和 gson 的话，那么默认使用的是 jackson，为社么呢？在 `org.springframework.http.converter.support.AllEncompassingFormHttpMessageConverter` 类的构造方法中，加载顺序就是先加载 `jackson` 的 `HttpMessageConverter`，后加载 `gson` 的 `HttpMessageConverter`。

加完依赖之后，就可以直接返回 JSON 字符串了。使用 Gson 时，如果想做自定义配置，则需要自定义 HttpMessageConverter。
```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <ref bean="httpMessageConverter"/>
    </mvc:message-converters>
</mvc:annotation-driven>
<bean class="org.springframework.http.converter.json.GsonHttpMessageConverter" id="httpMessageConverter">
    <property name="gson">
        <bean class="com.google.gson.Gson" factory-bean="gsonBuilder" factory-method="create"/>
    </property>
</bean>
<bean class="com.google.gson.GsonBuilder" id="gsonBuilder">
    <property name="dateFormat" value="yyyy-MM-dd"/>
</bean>

```

## fastjson
fastjson 号称最快的 JSON 解析器，但是也是这三个中 BUG 最多的一个。在 SpringMVC 并没有针对 fastjson 提供相应的 HttpMessageConverter，所以，fastjson 在使用时，一定要自己手动配置 HttpMessageConverter（前面两个如果没有特殊需要，直接添加依赖就可以了）。

使用 fastjson，我们首先添加 fastjson 依赖：
```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.60</version>
</dependency>
```

然后在 SpringMVC 的配置文件中配置 HttpMessageConverter：

```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <ref bean="httpMessageConverter"/>
    </mvc:message-converters>
</mvc:annotation-driven>
<bean class="com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter" id="httpMessageConverter">
    <property name="fastJsonConfig">
        <bean class="com.alibaba.fastjson.support.config.FastJsonConfig">
            <property name="dateFormat" value="yyyy-MM-dd"/>
        </bean>
    </property>
</bean>

```

fastjson 默认中文乱码，添加如下配置解决：
```xml
<mvc:annotation-driven>
    <mvc:message-converters>
        <ref bean="httpMessageConverter"/>
    </mvc:message-converters>
</mvc:annotation-driven>
<bean class="com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter" id="httpMessageConverter">
    <property name="fastJsonConfig">
        <bean class="com.alibaba.fastjson.support.config.FastJsonConfig">
            <property name="dateFormat" value="yyyy-MM-dd"/>
        </bean>
    </property>
    <property name="supportedMediaTypes">
        <list>
            <value>application/json;charset=utf-8</value>
        </list>
    </property>
</bean>

```

## 接收 JSON
浏览器传来的参数，可以是 key/value 形式的，也可以是一个 JSON 字符串。在 Jsp/Servlet 中，我们接收 key/value 形式的参数，一般是通过 getParameter 方法。如果客户端商户惨的是 JSON 数据，我们可以通过如下格式进行解析：
```java
@RequestMapping("/addbook2")
@ResponseBody
public void addBook2(HttpServletRequest req) throws IOException {
    ObjectMapper om = new ObjectMapper();
    Book book = om.readValue(req.getInputStream(), Book.class);
    System.out.println(book);
}

```
但是这种解析方式有点麻烦，在 SpringMVC 中，我们可以通过一个注解来快速的将一个 JSON 字符串转为一个对象：

```java
@RequestMapping("/addbook3")
@ResponseBody
public void addBook3(@RequestBody Book book) {
    System.out.println(book);
}

```
这样就可以直接收到前端传来的 JSON 字符串了。这也是 HttpMessageConverter 提供的第二个功能。