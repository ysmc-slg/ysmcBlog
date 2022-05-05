---
title: Aware
autoPrev: beanScope
---

`Aware` 接口，从字面上理解就是感知捕获。单纯的一个 `Bean` 是没有只觉的。在上面[自动化配置](./authConfigure.html#对象注入)文章中，之所以 `UserDao` 能够注入到 `UserService`，有一个前提，就是他们两个都是被 `Spring` 容器管理的。如果直接 `new` 一个 `UserService`，这是没用的，因为 `UserService` 没有被 `Spring` 容器管理，所以也不会给它里边注入 `Bean`。

在实际开发中，我们可能会遇到一些类，需要获取到容器的详细信息，那就可以通过 `Aware` 接口来实现。

`Aware` 是一个空接口，有很多实现类。

![Aware](/blogImg/spring/Aware.png)

这些实现的接口，有一些公共特性：
1. 都是以 Aware 结尾
2. 都继承自 Aware
3. 接口内均定义了一个 `set` 方法

每一个子接口均提供了一个 `set` 方法，方法的参数就是当前 `Bean` 需要感知的内容，因此我们需要在 `Bean` 中声明相关成员变量来接收这个参数。接收到这个参数后，就可以通过这个参数获取到容器的详细信息了。

## 常用的子接口

|接口| 作用|
|:----|:------|
|ApplicationContextAware|	获取当前应用的上下文对象|
|EnvironmentAware|	获取环境变量，包括我们配置的以及系统的|
|ApplicationEventPublisherAware|	获取应用事件发布器，可以发布我们监听的事件|
|BeanNameAware	| 获取容器中的bean的名称|
|BeanClassLoaderAware |	获取bean的类加载器 |
|BeanFactoryAware |	获取bean的创建工厂对象，如果我们要创建，可以试试通过他来创建 |
|EmbeddedValueResolverAware |	获取spring容器加载的properties文件属性值。|
|ResourceLoaderAware	| 获取资源加载器，我们要加载自己的资源，可以使用他。|
|MessageSourceAware |	获取文本信息 ，解析消息。|

**案例**：

首先在`resource`目录下创建两个文件
ysmc.properties

```properties
ysmc.address=www.zxqs.top
```
ysmc.txt

```
www.zxqs.top
```

创建一个 `Bean` 实现 `BeanNameAware`，`BeanFactoryAware`，`ResourceLoaderAware`，`EnvironmentAware`，`ApplicationContextAware` 接口
```java
/**
 * @Author: zxq
 * @date: 2021-11-10 11:04
 *
 * BeanNameAware：获取Bean的名称
 * BeanFactoryAware：获取bean的创建工厂对象
 * ResourceLoaderAware：获取资源加载器，获取外部资源
 * EnvironmentAware：获取环境变量，包括我们配置的以及系统的
 */
@Service
@PropertySource("ysmc.properties")
public class AwareService implements BeanNameAware, BeanFactoryAware, ResourceLoaderAware, EnvironmentAware {

    private String beanName;
    private ResourceLoader resourceLoader;
    private Environment environment;

    /**
     * 获取bean的生成工厂
     * @param beanFactory
     * @throws BeansException
     */
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {

    }

    /**
     * 获取bean的名称
     * @param s
     */
    public void setBeanName(String s) {
        this.beanName = s;
    }

    public void setEnvironment(Environment environment) {
        this.environment = environment;
    }

    public void setResourceLoader(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    public void output() throws IOException {
        
        System.out.println(beanName);

        // 获取外部资源
        Resource resource = resourceLoader.getResource("ysmc.txt");
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(resource.getInputStream()));
        String s = bufferedReader.readLine();
        System.out.println(s);
        bufferedReader.close();

        // 获取ysmc.properties中的信息
        String property = environment.getProperty("ysmc.address");
        System.out.println(property);
    }

}
```

扫描 `Bean`
```java
@Configuration
@ComponentScan
public class JavaConfig {
}
```

```java
public class JavaMain {
  public static void main(String[] args) throws IOException {
      AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(JavaConfig.class);

      AwareService bean = ctx.getBean(AwareService.class);
      bean.output();
  }
}
```


