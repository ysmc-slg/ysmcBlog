---
title: 自动化配置(注解)
autoPrev: JavaConfiguration
---
在我们实际开发中，大量使用自动配置。

<font color='red'>自动配置可以通过 Java 配置来实现，也可以通过 xml 配置来实现</font>

## 准备工作
假如我有一个 `UserService`，我希望在自动化扫描时，这个类能够自动注册到 `Spring` 容器中去，那么可以给类添加一个 `@Service`，作为一个消极。

和 `@Service` 注解功能类似的注解，一共有四个：

1. @Component
2. @Repository
3. @Service
4. @Controller

这四个中，另外三个都是基于 `@Component` 做出来的，那为什么要搞三个呢？

主要是为了在不同类上添加时方便。

* 在 `Service` 层上，添加注解时，使用 `@Service`
* 在 `Dao` 层上，添加注解时，使用 `@Repository`
* 在 `Controller` 层上，添加注解时，使用 `@Controller`
* 在其他组件上添加注解时，使用 @Component

```java
@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public List<String> getAllUser(){
        List<String> users = new ArrayList<String>();
        for (int i=0; i< 10; i++){
            users.add("ysmc:"+i);
        }
        System.out.println(userDao.hello());
        return users;

    }

}
```
```java
@Repository
public class UserDao {

    public String hello(){
        return "hello world";
    }
}
```

添加完成后，自动化扫描有两种方式，一种就是`通过 Java 代码配置自动化扫描`，另一种则是`通过 xml 文件来配置自动化扫描`

## 代码配置自动扫描(java方式)

```java
@Configuration
@ComponentScan(basePackages = "top.zxqs.ioc")
public class JavaConfig {
    
}
```
然后，在项目启动中加载配置类，在配置类中，通过 `@ComponentScan` 注解指定要扫描的包（<font color='red'>如果不指定，默认情况下扫描的是配置类所在的包下`有@Component等注解的` `Bean` 以及配置类所在的包下的子包下`有@Component等注解的类`</font>），然后就可以获取 `UserService` 的实例了：

```java
public class Main {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(JavaConfig.class);

        UserService userService = context.getBean("userService", UserService.class);
        System.out.println(userService.getAllUser());
    }

}
```

这里有几个问题需要注意：

1. Bean 的名字是什么？
    
    默认情况下，`Bean` 的名字是类名首字母小写。例如上面的 `UserService`，他实例名就是 `userService`。如果开发者想要自定义名字，就直接在 `@Service` 注解中添加即可。`@Service(value = "")`

2. 有几种扫描方式？

    上面的配置，我们是按照包的位置来扫描的。也就是说，Bean 必须放在指定的扫描位置，否则，即使你有 `@Service` 注解，也扫描不到。

    除了按照包的位置来扫描，还有另一种方式，就是根据注解来扫描。例如，如下配置
    ```java
    @Configuration
    @ComponentScan(basePackages = "top.zxqs.ioc",useDefaultFilters = true,excludeFilters = {@ComponentScan.Filter(type = FilterType.ANNOTATION,classes = Controller.class)})
    public class JavaConfig {

    }
    ```
    这个配置表示扫描`top.zxqs.ioc` 下所有 `Bean`，但是除了`@Controller`注解不扫描

    ::: tip

    如果`useDefaultFilters = false`，表示`@Component`和另外三个注解都不扫描。使用`includeFilters`，可以添加需要扫描的注解。

    ```java
    @ComponentScan(basePackages = "top.zxqs.ioc",useDefaultFilters = false,includeFilters = {@ComponentScan.Filter(type = FilterType.ANNOTATION,classes = Service.class)})
    public class JavaConfig {
        
    }
    ```
     这个配置表示扫描`top.zxqs.ioc`下和子包下 `@Service`注解，其他注解都不会扫描

    `useDefaultFilters = false`一般和`includeFilters`一块使用。`useDefaultFilters = true`和`excludeFilters`一块使用

    :::

    ## XML 配置自动化扫描
    
    ```xml
      <context:component-scan base-package="top.zxqs.ioc.service"/>
    ```
    上面这行配置表示扫描`top.zxqs.ioc.service`下所有，有`@Service`注解的`Bean`。当然也可以按照类来扫描

    XML 配置完成后，在Java代码中加载XML配置即可。

    ```java
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = context.getBean("userService", UserService.class);
        System.out.println(userService.getAllUser());
    }
    ```

    也可以像使用Java方式自动扫描那样，配置具体那些注解可以扫描，那些不可以扫描。

    ```xml
     <context:component-scan base-package="top.zxqs.ioc.service" use-default-filters="false">
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Service"/>
    </context:component-scan>
    ```

    此时除了`@Service`其他注解都不会被扫描。