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

## 日志使用

说到 Java 日志，很多初学者可能都比较懵，因为这里涉及到太多东西了：Apache Commons Logging、Slf4j、Log4j、Log4j2、Logback、Java Util Logging 等等，这些框架各自有什么作用？他们之间有什么区别？本文主要介绍Logback

Java 中的日志框架主要分为两大类：日志门面和日志实现。

### 日志门面
日志门面定义了一组日志的接口规范，它并不提供底层具体的实现逻辑。Apache Commons Logging 和 Slf4j 就属于这一类。

### 日志实现
日志实现则是日志具体的实现，包括日志级别控制、日志打印格式、日志输出形式（输出到数据库、输出到文件、输出到控制台等）。Log4j、Log4j2、Logback 以及 Java Util Logging 则属于这一类。

将日志门面和日志实现分离其实是一种典型的门面模式，这种方式可以让具体业务在不同的日志实现框架之间自由切换，而不需要改动任何代码，开发者只需要掌握日志门面的 API 即可。

日志门面是不能单独使用的，它必须和一种具体的日志实现框架相结合使用。

### Spring Boot 日志实现
Spring Boot 使用 Apache Commons Logging 作为内部的日志框架门面，它只是一个日志接口，在实际应用中需要为该接口来指定相应的日志实现。

Spring Boot 默认的日志实现是 Logback。

在 Spring Boot 项目中，只要添加了如下 web 依赖，日志依赖就自动添加进来了：
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
如果不是springboot项目，也可以直接引入依赖
```xml
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-core</artifactId>
    <version>1.2.3</version>
</dependency>
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.30</version>
</dependency>
```
### Logback日志级别
Logback 日志级别比较简单，从严重到普通依次是：
* ERROR
* WARN
* INFO
* DEBUG
* TRACE

### springboot 日志配置
springboot默认使用logback，所以做了一些自动化配置。

如果开发者需要修改日志配置，只需要在 application.properties 文件中通过命令配置即可。

**修改日志级别**：
```properties
logging.level.org.springframework.web=debug
logging.level.org.hibernate=error
```
**日志输出到文件**：
```properties
# info.log：输出文件的名称
logging.file.name=info.log
```
**指定日志文件全路径**
```properties
logging.file.name=/Users/sang/Documents/logs/info.log
```
**只定义输出日志文件的路径**
```properties
logging.file.path=/Users/sang/Documents/logs
```

如果想对输出到文件中的日志进行精细化管理，还有如下一些属性可以配置：


* logging.logback.rollingpolicy.file-name-pattern：日志归档的文件名，日志文件达到一定大小之后，自动进行压缩归档。
* logging.logback.rollingpolicy.clean-history-on-start：是否在应用启动时进行归档管理。
* logging.logback.rollingpolicy.max-file-size：日志文件大小上限，达到该上限后，会自动压缩。
* logging.logback.rollingpolicy.total-size-cap：日志文件被删除之前，可以容纳的最大大小。
* logging.logback.rollingpolicy.max-history：日志文件保存的天数。

### Logback 配置
在 application.properties 中只能实现对日志一些非常简单的配置，如果想实现更加细粒度的日志配置，那就需要使用日志实现的原生配置，例如 Logback 的 classpath:logback.xml，Log4j 的 classpath:log4j.xml 等。如果这些日志配置文件存在于 classpath 下，那么默认情况下，Spring Boot 就会自动加载这些配置文件。

默认的 Logback 配置文件名有两种：

* logback.xml：这种配置文件会直接被日志框架加载。
* logback-spring.xml：这种配置文件不会被日志框架直接加载，而是由 Spring Boot 去解析日志配置，可以使用 Spring Boot 的高级 Profile 功能。

Spring Boot 中为 Logback 提供了四个默认的配置文件，位置在 `org/springframework/boot/logging/logback/`，分别是：

* defaults.xml：提供了公共的日志配置，日志输出规则等。
* console-appender.xml：使用 CONSOLE_LOG_PATTERN 添加一个ConsoleAppender。
* file-appender.xml：添加一个 RollingFileAppender。
* base.xml：为了兼容旧版 Spring Boot 而提供的。


如果需要自定义 logback.xml 文件，可以在自定义时使用这些默认的配置文件，也可以不使用。一个典型的 `logback.xml` 文件如下（resources/logback.xml）：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <include resource="org/springframework/boot/logging/logback/defaults.xml"/>
    <include resource="org/springframework/boot/logging/logback/console-appender.xml" />
    <root level="INFO">
        <appender-ref ref="CONSOLE" />
    </root>
    <logger name="org.springframework.web" level="DEBUG"/>
</configuration>
```

### 手动配置

下面自己手动配置一个日志文件，以后开发中可以直接引用。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!--
        输出文件的位置 
        property属性：定义常量
        name为常量名，value为常量的值

     -->
	<property name="log.path" value="logs" />
    <!-- 
        日志输出格式 ：
        %d{yyyy-MM-dd HH:mm:ss.SSS} 日志的时间
        %thread 执行日志的线程名称
        %-5level  空出5个空格，然后显示日志级别
        %logger{20}  表示在哪个类（全限定类名）里面记录的日志，后面的{20} 表示展示的最大长度是20
        %method %line 那个方法第几行记录
        %msg    记录日志内容
        %n      换行
    -->
	<property name="log.pattern" value="%d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - [%method,%line] - %msg%n" />

	<!--
        appender：日志输出的媒介 
        控制台输出 
    -->
	<appender name="console" class="ch.qos.logback.core.ConsoleAppender">
		<encoder>
            <!-- 日志输出的格式 -->
			<pattern>${log.pattern}</pattern>
		</encoder>
	</appender>
	
	<!-- 系统日志输出 -->
	<appender name="file_info" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 文件输出路径 -->
	    <file>${log.path}/sys-info.log</file>
        <!-- 循环政策：基于时间创建日志文件 -->
		<rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 
                日志文件名格式 
                如果文件名是用.gz结尾的，会自动压缩日志文件
            -->
			<fileNamePattern>${log.path}/sys-info.%d{yyyy-MM-dd}.log</fileNamePattern>
			<!-- 日志最大的历史 60天 -->
			<maxHistory>60</maxHistory>
		</rollingPolicy>
        <!-- 定义日志格式 -->
		<encoder>
			<pattern>${log.pattern}</pattern>
		</encoder>
		<filter class="ch.qos.logback.classic.filter.LevelFilter">
            <!-- 过滤的级别 -->
            <level>INFO</level>
            <!-- 匹配时的操作：接收（记录） -->
            <onMatch>ACCEPT</onMatch>
            <!-- 不匹配时的操作：拒绝（不记录） -->
            <onMismatch>DENY</onMismatch>
        </filter>
	</appender>
	
	<appender name="file_error" class="ch.qos.logback.core.rolling.RollingFileAppender">
	    <file>${log.path}/sys-error.log</file>
        <!-- 循环政策：基于时间创建日志文件 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志文件名格式 -->
            <fileNamePattern>${log.path}/sys-error.%d{yyyy-MM-dd}.log</fileNamePattern>
			<!-- 日志最大的历史 60天 -->
			<maxHistory>60</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>${log.pattern}</pattern>
        </encoder>
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <!-- 过滤的级别 -->
            <level>ERROR</level>
			<!-- 匹配时的操作：接收（记录） -->
            <onMatch>ACCEPT</onMatch>
			<!-- 不匹配时的操作：拒绝（不记录） -->
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>
	
	<!-- 用户访问日志输出  -->
    <appender name="sys-user" class="ch.qos.logback.core.rolling.RollingFileAppender">
		<file>${log.path}/sys-user.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 按天回滚 daily -->
            <fileNamePattern>${log.path}/sys-user.%d{yyyy-MM-dd}.log</fileNamePattern>
            <!-- 日志最大的历史 60天 -->
            <maxHistory>60</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>${log.pattern}</pattern>
        </encoder>
    </appender>
	
    <!-- 自定义的日志记录器
            name：写对应的包名，表示对应包里面的代码生成的日志才会被记录
     -->
	<!-- 系统模块日志级别控制  -->
	<logger name="com.ruoyi" level="info" />
	<!-- Spring日志级别控制  -->
	<logger name="org.springframework" level="warn" />

    <!-- 根日志记录器，所有包下面的日志都会被记录。必须有 -->
	<root level="info">
		<appender-ref ref="console" />
	</root>
	
	<!--系统操作日志-->
    <root level="info">
        <appender-ref ref="file_info" />
        <appender-ref ref="file_error" />
    </root>
    
	<!--系统用户操作日志-->
    <logger name="sys-user" level="info">
        <appender-ref ref="sys-user"/>
    </logger>
</configuration> 
```


