---
title: SpringBoot基本配置
---

## Web容器基本配置

```properties
# 设置端口
server.port=8081 
```
有三种情况：

1. 值为 1 代表关闭所有的http端点
2. 0 代表随机生成端口 
3. 自定义端口

### 获取服务端口

由于随机生成端口我们不知道端口是多少，可以使用过滤器获取服务端口

```java
@Component
public class MyApplicationListener implements ApplicationListener<WebServerInitializedEvent> {
    @Override
    public void onApplicationEvent(WebServerInitializedEvent event) {
        System.out.println("event.getWebServer().getPort() = " + event.getWebServer().getPort());
    }
}
```

开发中一般不会这么写，也不会关闭所有端点和随机生成端口。

**设置请求压缩**
```properties
# 开启请求压缩，默认关闭
server.compression.enabled=true

# 如果server.compression.enabled中没有想要的，可以手动设置需要压缩的格式
# server.compression.mime-types=

# 返回数据超过多少进行压缩，默认2KB
#server.compression.min-response-size=2KB
```

![d](/blogImg/java/Screenshot_1.png)

## tomcat 日志配置

```properties
# 开启访问日志，默认的日志位置在项目运行的临时目录中，默认生成的日志格式 access_log.yyyy-MM-dd.log
server.tomcat.accesslog.enabled=true

# 设置生成的访问日志在该目录下
server.tomcat.basedir=D:/Users/IDEAworkspace/new_springboot/tomcat-log
# 生成日志文件的前缀，默认是 access_log
server.tomcat.accesslog.prefix=zxqs_log
# 生成日志文件的后缀
server.tomcat.accesslog.suffix=.log

# 日志文件中的日期格式
server.tomcat.accesslog.file-date-format=.yyyyMMdd

# 生成的日志文件内容格式也是可以调整的
# %h 请求的客户端IP
# %l 用户的身份
# %u 用户名
# %t 请求时间
# %r 请求地址
# %s 响应的状态码
# %b 响应的大小
server.tomcat.accesslog.pattern=%h %l %u %t \"%r\" %s %b

# 服务器内部日志开启
logging.level.org.apache.tomcat=debug
logging.level.org.apache.catalina=debug
```

## 配置文件名称和路径

properties文件我们一般放在resources下面，但是有些人不知道，properties文件默认是有`4个`存放路径的。

1. 根目录config文件夹下，config/application.properties
2. 直接在根目录创建properties文件，application.properties
3. resources下的config目录，src/main/resources/config/application.properties
4. resources下，src/main/resources/application.properties，也是创建springboot项目默认的路径。

::: danger 注意

根据以上顺序，优先级依次降低。一般开发中使用第4种方式

:::

## 属性普通注入方式

开发中可以通过属性注入的方式，获取到properties配置文件中的值。

**application.properties**
```properties
book.name=三国演义
book.author=罗贯中
```
**Book**
```java
@Component
public class Book {
    @Value("${book.name}")
    private String name;
    @Value("${book.author}")
    private String author;

    @Value("${book.tags}")
    private String[] tags;

    // ... 省略set/get 和toString方法
```
**测试**：
```java
@Test
void contextLoads() {
    @Autowired
    Book book;

    System.out.println(book);
}

结果：
Book{name='三国演义', author='罗贯中', tags=[小说, 历史, 明代]}
```
属性注入默认是去`application.properties`中读取的，如果想要读取其他porterties文件，可以使用`@PropertySource`注解

**book.properties**
```properties
book.name=三国演义
book.author=罗贯中
book.tags=小说,历史,明代
```
**Book**
```java
@Component
@PropertySource("classpath:book.properties")
public class Book {
    @Value("${book.name}")
    private String name;
    @Value("${book.author}")
    private String author;

    @Value("${book.tags}")
    private String[] tags;

    // ... 省略set/get 和toString方法
```
**测试**：
```java
@Test
void contextLoads() {
    @Autowired
    Book book;

    System.out.println(book);
}

结果：
Book{name='三国演义', author='罗贯中', tags=[小说, 历史, 明代]}
```

**注意**：

`@PropertySource`注解只用获取`properties`文件属性，不能获取`yaml`文件的属性。开发中一般也不会，为了获取属性另创建一个文件。一般都写在`application`里面。

## 类型安全的属性注入

普通注入方式我们看到一个缺点，如果book里面有很多属性，也就需要每一个都加`@Value`注解。这时就可以使用SpringBoot的注解`@ConfigurationProperties`，@Value和@PropertySource其实都是spring的注解

application.properties和上面是一样的，只是Book不同
**Book**
```java
@Component
@ConfigurationProperties(prefix = "book")
public class Book {
    private String name;
    private String author;
    private String[] tags;

    // ... 省略set/get 和toString方法
```
**测试**：
```java
@Test
void contextLoads() {
    @Autowired
    Book book;

    System.out.println(book);
}

结果：
Book{name='三国演义', author='罗贯中', tags=[小说, 历史, 明代]}
```

## 配置文件获取maven属性
有些时候，我们需要在配置文件中获取maven的一些属性，比如java版本。可以使用`@@`来获取
```properties
app.java.version=@java.version@
```
删掉target重新启动，如图：

![java1](/blogImg/java/java1.png)

关键字还可以修改，不使用@。

修改`pom.xml`文件，改成使用 # ，如下
```xml
<properties>
    <java.version>1.8</java.version>
    <resource.delimiter>#</resource.delimiter>
</properties>
```

此时就可以使用 `#java.version#`来获取Java版本，但是一般不会去修改这个关键字。

## YAML 配置
以上的内容基本都可以在yaml配置文件中同样配置，但是有些配置也有些不同。

1. @PropertySource注解不能获取 yaml 中的属性
2. 使用@ConfigurationProperties注解时，如果属性（tags）是一个`List<String>`，yml配置如下：

    ```yml
    book:
        name: 三国演义
        tags:
        - 历史
        - 小说
        - 古代
    ```
    集合中是String，在值的前面加一个 `-`

    如果集合中是一个对象，如下

    ```yml
    book:
        name: 三国演义
        tags:
          - 历史
          - 小说
          - 古代
        authors:
          - name: 罗贯中
            age: 88
          - name: 施耐庵
            age: 99
    ```

```java
@Component
@ConfigurationProperties(prefix = "book")
public class Book {
    private String name;
    private List<String> tags;
    private List<Author> authors;

    // ... 省略set/get 和toString方法
}
```

```java
@SpringBootTest
class YamlApplicationTests {
    @Autowired
    Book book;
    @Test
    void contextLoads() {
        System.out.println(book);
    }
}

结果：
Book{name='三国演义', tags=[历史, 小说, 古代], authors=[Author{name='罗贯中', age=88}, Author{name='施耐庵', age=99}]}
```

## profile
在实际开发环境中，我们存在开发环境的配置，部署环境的配置，测试环境的配置等等，里面的配置信息很多时，例如：端口、上下文路径、数据库配置等等，若每次切换环境时，我们都需要进行修改这些配置信息时，会比较麻烦，profile的出现就是为了解决这个问题。

在举例之前，我需要先介绍一下，Spring官方给出的语法规则是application-xx.properties 或者 application-xx.yml。

### 使用方法

创建一个spring boot工程，并且在resources目录下，创建两个配置文件`application-dev.yml`和`application-prod.yml`。端口分别为8081，8082

若我们需要在两种环境下进行切换，只需要在application.yml 中加入如下内容即可。

```yml
spring:
  profiles:
    active: dev
```
此时项目启动时，也会读application-dev.yml。

**注意**：

如果`application-dev.yml`和 `application.yml`中都有的配置，读取的是 dev 中的。

如果`application.yml`中有的，dev中没有，`application.yml`中的配置也会加载进去。

真正在开发中我们会将数据源的配置通过`profile`进行加载，因为一般数据源的配置信息很多。

![java2](/blogImg/java/java2.png)


