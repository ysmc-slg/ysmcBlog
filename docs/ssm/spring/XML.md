---
description: 属性注入
autoPrev: IOC
---

# 属性注入

在 `Spring` 中，想要将一个 `Bean` 注册到 `Spring` 容器中，整体上来说，有三种不同的方式。
1. XML 注入
2. java 配置（通过 Java 代码将 Bean 注册到 Spring 容器中）
3. 自动化扫描

我们先来说 `XML` 注入

## 构造方法注入
通过 `Bean` 的构造方法给 `Bean` 的属性注入值。

1. 首先非 `Bean` 添加对应的构造方法

  ```java
  public class User {
    private String name;
    private int age;

    public User() {
    }

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }
  }
  ```
2. 在 `xml` 文件中注入 `Bean`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">


       <bean class="top.zxqs.ioc.model.User" id="user">
        <constructor-arg name="name" value="张三"/>
        <constructor-arg name="age" value="23"/>
    </bean>
</beans>
```
::: tip

这里需要注意的是，`constructor-arg` 中的 name 和 User 中构造方法参数一一对应。如果有多个构造方法，则会根据给出参数个数一级参数类型，自动匹配到对应的构造方法上，进而初始化一个对象。

:::


## set方法注入

见名知义，先添加setter/getter方法。然后配置文件
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">


      <bean class="top.zxqs.ioc.model.User" id="user2">
        <property name="name" value="李四"/>
        <property name="age" value="24"/>
      </bean>
</beans>
```

## P 名称空间注入
p 名称空间注入，使用的比较少，本质上也是调用了 `set` 方法。
```xml
 <bean class="top.zxqs.ioc.model.User" id="user3" p:name="王五" p:age="25"/>
```

## 外部 Bean 的注入
有时候，我们使用一些外部 `Bean`这些 `Bean`可能没有构造方法，而是通过 `Builder`来构造的，这个时候，就无法使用上面的方式来给他注入值了。

例如在 OkHttp 的网络请求中，原生的写法如下：

```java
public class TestOkHttp {
    public static void main(String[] args) {
        OkHttpClient okHttpClient = new OkHttpClient.Builder().build();

        Request request = new Request.Builder()
                .get()
                .url("http://www.baidu.com")
                .build();
        Call call = okHttpClient.newCall(request);

        call.enqueue(new Callback() {
            public void onFailure(@NotNull Call call, @NotNull IOException e) {
                System.out.println("e.getMessage()"+e.getMessage());
            }

            public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                System.out.println("response.body().string() = "+response.body().string());
            }
        });
    }
}
```

这个 `Bean` 有一个特点，`OkHttpClient` 和 `Request` 两个实例都不是直接 `new` 出来的，在调用 `Bulider` 方法过程中，都会给他设置一些默认的参数。这种情况，我们可以使用 <div style="color:red">静态工厂注入</div> 或者 <div style="color:red">实例工厂注入</div>来给 `OkHttpClient` 提供一个实例。

### 静态工厂注入

首先提供一个 `OkHttpClient` 静态工厂：

```java
public class OkHttpStaticFactory {
    private static OkHttpClient okHttpClient;

    // 方法必须是静态
    public static OkHttpClient getInstance(){
        if(okHttpClient == null){
            okHttpClient = new OkHttpClient.Builder().build();
        }
        return okHttpClient;
    }
}
```
在 `xml` 文件中，配置该静态工厂：

```xml
<bean class="top.zxqs.ioc.OkHttpStaticFactory" factory-method="getInstance" id="okHttpClient"/>
```
这个配置表示 `OkHttpFactory` 类中的 `getInstance` 使我们需要的实例，实例名就叫 `okHttpClient`。然后，在 java 代码中，获取这个实例，既可以直接使用了。

```java
public class TestOkHttp {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        OkHttpClient okHttpClient = (OkHttpClient)context.getBean("okHttpClient");

        Request request = new Request.Builder()
                .get()
                .url("http://www.baidu.com")
                .build();
        Call call = okHttpClient.newCall(request);

        call.enqueue(new Callback() {
            public void onFailure(@NotNull Call call, @NotNull IOException e) {
                System.out.println("e.getMessage()"+e.getMessage());
            }

            public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                System.out.println("response.body().string() = "+response.body().string());
            }
        });
    }
}
```

### 实例工厂注入
实例工厂就是工厂方法是一个实例方法，这样，工厂类必须实例化之后才可以调用工厂方法

这次的工厂类如下：
```java
public class OkHttpFactory {
    private static OkHttpClient okHttpClient;

    public OkHttpClient getInstance(){
        if(okHttpClient == null){
            okHttpClient = new OkHttpClient.Builder().build();
        }
        return okHttpClient;
    }
}
```

此时，在 `xml` 文件中，需要首先提供工厂方法的实例，然后才可以调用工厂方法：

```xml
<bean class="top.zxqs.ioc.OkHttpFactory" id="okHttpFactory"/>
<bean class="okhttp3.OkHttpClient" factory-bean="okHttpFactory" factory-method="getInstance" id="okHttpClient"/>
```
自己写的 `Bean` 一般不会使用这两种方式注入，但是，如果需要引入外部 `jar`，外部 `jar` 类的初始化，有可能需要使用这两种方式。

## 复杂属性注入
### 对象注入

我们经常遇到，一个对象里面引用了另一个对象。这时我们应该怎样注入呢？代码如下：
```java
public class User {
    private String name;
    private int age;
    private Cat cat;
    // ...省略setter/getter方法
}
```
```java
public class Cat {
    private Integer age;
    private String name;
    private String color;
    // ...省略setter/getter方法
}
```

可以通过 `xml` 注入对象，通过 `ref` 来引用一个对象。
```xml
<bean class="top.zxqs.ioc.model.Cat" id="cat">
    <property name="age" value="3"/>
    <property name="name" value="小白"/>
    <property name="color" value="white"/>
</bean>

<bean class="top.zxqs.ioc.model.User" id="user4">
    <property name="name" value="张三"/>
    <property name="age" value="33"/>
    <property name="cat" ref="cat"/>
</bean>
```
如果你不想引用，还可以这么写
```xml
<bean class="top.zxqs.ioc.model.User" id="user4">
    <property name="name" value="张三"/>
    <property name="age" value="33"/>
    <property name="cat">
        <bean class="top.zxqs.ioc.model.Cat" id="cat">
            <property name="age" value="3"/>
            <property name="name" value="小白"/>
            <property name="color" value="white"/>
        </bean>
    </property>
</bean>
```

## 数组和集合注入
```java
public class User {
    private String name;
    private int age;
    private Cat[] cats;
    private List<String> hobbies;
    // ...省略setter/getter方法
}
```
Cat对象代码不变。

数组注入和集合注入在 `xml` 中的配置是一样的。如下：
```xml
<bean class="top.zxqs.ioc.model.User" id="user4">
    <property name="name" value="张三"/>
    <property name="age" value="33"/>
    <!--数组-->
    <property name="cats">
        <array>
            <!--可以使用 ref 引用，也可以定义一个Bean-->
            <ref bean="cat"/>
            <bean class="top.zxqs.ioc.model.Cat" id="cat2">
                <property name="name" value="小黑"/>
                <property name="color" value="black"/>
                <property name="age" value="2"/>
            </bean>
        </array>
    </property>
    <!--集合-->
    <property name="hobbies">
        <list>
            <value>篮球</value>
            <value>足球</value>
        </list>
    </property>
</bean>
```
**注意**：

`array` 节点，也可以被 `list` 节点代替。

当然，`array` 或者 `list` 节点中也可以是对象。节点中既可以通过 `ref` 使用外部定义好的 `Bean`，也可以直接在 `list` 或者 `array` 节点中定义 `bean`

### Map 注入
```java
public class User {
    private String name;
    private int age;
    private Map<String,Object> map;

    // ...省略setter/getter方法
}
```

```xml
<property name="map">
    <map>
        <entry key="age" value="99"/>
        <entry key="name" value="ysmc"/>
    </map>
</property>
```

## Properties 注入
```java
public class User {
    private String name;
    private int age;
    private Properties info;
    // ...省略setter/getter方法
}
```
```xml
<property name="info">
    <props>
        <prop key="age">99</prop>
        <prop key="name">ysmc</prop>
    </props>
</property>
```