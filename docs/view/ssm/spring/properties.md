---
title: 属性注入
autoPrev: IOC
---

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

这个 `Bean` 有一个特点，`OkHttpClient` 和 `Request` 两个实例都不是直接 `new` 出来的，在调用 `Bulider` 方法过程中，都会给他设置一些默认的参数。这种情况，我们可以使用 <font color='red'>静态工厂注入</font> 或者 <font color='red'>实例工厂注入</font>来给 `OkHttpClient` 提供一个实例。

### 静态工厂注入

首先提供一个 `OkHttpClient` 静态工厂：

```java
public class OkHttpFactory {
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