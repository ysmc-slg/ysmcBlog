---
description: 自定义动态数据源
---

# 自定义动态数据源

在开发中可能需要用到数据源，不同的请求可能会在不同的数据库中进行查找。

本篇文章我们就开看看怎样实现多数据源。

## 1. 大概思路

Spring 给我们提供了一个抽象类 `AbstractRoutingDataSource`，该类充当了 `DataSource` 的路由中介，当项目运行时，会根据某种 `key` 值来动态切换到真正的 DataSource 上。

大致的用法就是你提前准备好各种数据源，存入到一个 Map 中，Map 的 key 就是这个数据源的名字，Map 的 value 就是这个具体的数据源，然后再把这个 Map 配置到 `AbstractRoutingDataSource` 中。

具体用到那个数据源，我们会自定义一个注解，在注解中定义具体的数据源名称。然后将数据源名称存到 `ThreadLocal` 中，最后在 `AbstractRoutingDataSource` 中的 `determineCurrentLookupKey` 方法中读取 `ThreadLocal` 中的数据源名称，并且找到对应的数据源去执行sql

大致思路就是这样。

接下来我们就来看看怎么玩。

## 2. 创建项目
创建一个 springboot 项目，然后引入 web、MyBatis、MySQL、Druid、AOP 依赖
```pom
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!--AOP-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>


    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>2.2.2</version>
    </dependency>

    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid-spring-boot-starter</artifactId>
        <version>1.2.9</version>
    </dependency>

    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

## 3. 配置文件
创建一个 `application.yml` 文件，用来配置数据源信息：

```yml
# 数据源配置
spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    driverClassName: com.mysql.cj.jdbc.Driver
    ds:
      # 主库数据源
      master:
        url: jdbc:mysql://localhost:3306/test09?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
        username: root
        password: 123456
      # 从库数据源
      slave:
        # 从数据源开关/默认关闭
        enabled: false
        url: jdbc:mysql://localhost:3306/test08?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
        username: root
        password: 123456
    # 初始连接数
    initialSize: 5
    # 最小连接池数量
    minIdle: 10
    # 最大连接池数量
    maxActive: 20
    # 配置获取连接等待超时的时间
    maxWait: 60000
```
ds 里面配置我们所有的数据源，每一个数据源都有一个名字，`master` 是默认数据源的名字，不可修改，其他数据源可以自定义名字。

关于其他的配置，如 `initialSize`,`minIdle` 这些配置每个数据源都是一样的，当然如果你想不同的数据源都有不同的初始连接数，也可以自定义，这里我就使用上面的配置了。

接下来还需要提供一个配置类，将上面配置文件中的内容加载到类中，如下：

```java
/**
 * @author: zxq
 * @create: 2022-05-28 14:21
 */
@ConfigurationProperties(prefix = "spring.datasource")
public class DruidProperties {

    private String type;
    private String driverClassName;
    /** key为数据源名称，value为数据源的值，因为数据源里有url等信息所以是一个Map */
    private Map<String, Map<String, String>> ds;

    private Integer initialSize;
    private Integer minIdle;
    private Integer maxActive;
    private Integer maxWait;

    /**
     * 在外部构造好一个 DruidDataSource 对象，但是这个对象只包含三个核心属性 url、username、password
     * 在这个方法中，给DruidDataSource 设置公共属性
     * @param druidDataSource
     * @return
     */
    public DataSource dataSource(DruidDataSource druidDataSource) {
        druidDataSource.setInitialSize(initialSize);
        druidDataSource.setMinIdle(minIdle);
        druidDataSource.setMaxActive(maxActive);
        druidDataSource.setMaxWait(maxWait);

        return druidDataSource;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDriverClassName() {
        return driverClassName;
    }

    public void setDriverClassName(String driverClassName) {
        this.driverClassName = driverClassName;
    }

    public Map<String, Map<String, String>> getDs() {
        return ds;
    }

    public void setDs(Map<String, Map<String, String>> ds) {
        this.ds = ds;
    }

    public Integer getInitialSize() {
        return initialSize;
    }

    public void setInitialSize(Integer initialSize) {
        this.initialSize = initialSize;
    }

    public Integer getMinIdle() {
        return minIdle;
    }

    public void setMinIdle(Integer minIdle) {
        this.minIdle = minIdle;
    }

    public Integer getMaxActive() {
        return maxActive;
    }

    public void setMaxActive(Integer maxActive) {
        this.maxActive = maxActive;
    }

    public Integer getMaxWait() {
        return maxWait;
    }

    public void setMaxWait(Integer maxWait) {
        this.maxWait = maxWait;
    }
}
```

此时配置文件中的多个数据源就被读取到了 名为 `ds` 的 `Map` 中，`Map` 中的 `key` 就是数据源的名称，`value` 还是一个 Map 保存的是`url、paswword` 等信息。将来我们就根据这个 `ds` 中的数据来构造数据源。

## 4. 加载数据源

接下来根据配置文件来加载数据源，加载方式如下：

```java
@Component
@EnableConfigurationProperties(DruidProperties.class)
public class LoadDataSource {

    @Autowired
    DruidProperties druidProperties;

    /**
     * 加载DataSource，
     * @return Map<String, DataSource>  key为数据源的名称，value 加载完成的数据源
     */
    public Map<String, DataSource> loadAllDataSource(){
        Map<String, DataSource> map = new HashMap<>();
        Map<String, Map<String, String>> ds = druidProperties.getDs();

        try {
            Set<String> keySet = ds.keySet();
            for(String key : keySet){
                DataSource dataSource = DruidDataSourceFactory.createDataSource(ds.get(key));
                // 此时的 dataSource 中只有 url、username、password，还需要调用 druidProperties.dataSource 添加上其他信息
                map.put(key, druidProperties.dataSource((DruidDataSource) dataSource));
            }
        }  catch (Exception e) {
            e.printStackTrace();
        }

        return map;
    }
}
```

::: tip 详解

`loadAllDataSource` 中使用 `druidProperties.getDs()` 获取所有数据源，然后遍历得到所有数据源的名称


`DruidDataSourceFactory.createDataSource` 根据不同的数据源名称创建数据源，调用 `druidProperties.dataSource` 配置其他公共属性（最大连接数、初始连接数等）

最后，以 key-value 的形式将数据源存入一个 Map 集合中，每一个数据源的 key 就是你在 YAML 中配置的数据源名称，value就是处理好的数据源对象。

:::

## 5. 定义动态数据源

接下来我们来自定义一个动态数据源：

```java
/**
 *
 * 动态数据源
 *
 * 当 Mapper 执行的时候，需要 DataSource 会来到 AbstractRoutingDataSource 找到对应的数据源，我们要继承这个类
 *
 * @author: zxq
 * @create: 2022-05-28 15:09
 */
@Component
public class DynamicDataSource extends AbstractRoutingDataSource {

    /**
     * 在构造方法中配置数据源
     * @param loadDataSource
     */
    DynamicDataSource(LoadDataSource loadDataSource){
        Map<String, DataSource> allDs = loadDataSource.loadAllDataSource();
        //1. 设置所有的数据源，参数是一个Map其实就是数据源名称和数据源
        super.setTargetDataSources(new HashMap<>(allDs));
        // 2. 设置默认的数据源
        // 将来并不是所有的方法上都有 @DataSource 注解，对于没有 @DataSource 注解的方法，就不会被AOP拦截，determineCurrentLookupKey返回的就是 null
        // 所以要配置一个默认数据源
        super.setDefaultTargetDataSource(allDs.get(DataSourceType.DEFAULT_DS_NAME));
        // 3
        super.afterPropertiesSet();
    }


    /**
     * 这个方法用来返回数据源名称，当系统需要获取数据源的时候，会自动调用该方法获取数据源的名称
     *
     * 因为我们是自定义的数据源，并且存到 ThreadLocal 中了，所以只需要存里面取出即可
     * @return
     */
    @Override
    protected Object determineCurrentLookupKey() {
        return DynamicDataSourceContextHolder.getDataSourceType();
    }
}

```

这就是我们文章开头所说的 AbstractRoutingDataSource 了，该类有一个方法名为 determineCurrentLookupKey，当需要使用数据源的时候，系统会自动调用该方法，获取当前数据源的标记，如 master 或者 slave 或者其他，拿到标记之后，就可以据此获取到一个数据源了。

::: tip 说明

setTargetDataSources： 这个就是当前所有的数据源，把当前所有的数据源都告诉给 `AbstractRoutingDataSource`，这些数据源都是 `key-value` 的形式（将来根据 `determineCurrentLookupKey` 方法返回的 `key` 就可以获取到具体的数据源了）


setDefaultTargetDataSource: 这个就是默认的数据源，当我们执行一个数据库操作的时候，如果没有指定数据源（例如 Service 层的方法没有加 @DataSource 注解），那么默认就使用这个数据源。

:::

## 6. 数据源切换

文章一开始就说了，我们是将数据源信息存入到 `ThreadLocal` 中，`ThreadLocal` 的特点，简单说就是在哪个线程中存入的数据，在哪个线程才能取出来，换一个线程就取不出来了，这样可以确保多线程环境下的数据安全。

先简单封装一个工具类，如下：

```java
/**
 *
 * 这个类用来存储当前线程所使用的数据源名称
 *
 * @author: zxq
 * @create: 2022-05-27 22:35
 */
public class DynamicDataSourceContextHolder {

    private static final ThreadLocal<String> CONTEXT_HOLDER = new ThreadLocal<>();

    public static void setDataSourceType(String dsType){
        CONTEXT_HOLDER.set(dsType);
    }

    public static String getDataSourceType(){
        return CONTEXT_HOLDER.get();
    }

    public static void clearDataSourceType(){
        CONTEXT_HOLDER.remove();
    }

}
```

接下来自定义一个注解用来标记当前的数据源，如下：
```java
/**
 * 多数据源注解
 *
 * 这个注解将来可以加在某一个 service 类或者方法上，通过 value 属性来指定类或者方法应该使用那个数据源
 *
 * @author MC
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE,ElementType.METHOD})
public @interface DataSource {
    // 数据源名称
    String value() default "master";
}
```

这个注解将来加在 Service 层的方法上，使用该注解的时候，需要指定一个数据源名称，不指定的话，默认就使用 master 作为数据源。


我们还需要通过 AOP 来解析当前的自定义注解，如下：

```java
/**
 *
 * 处理 @DataSource 注解
 * @author: zxq
 * @create: 2022-05-27 22:41
 */
@Component
@Aspect
public class DataSourceAspect {

    /**
     * @annotation(top.zxqs.dd.annotation.DataSource)  表示方法上有 @DataSource 注解就将方法拦截下来
     * @within(top.zxqs.dd.annotation.DataSource)  表示如果类上面有 @DataSource 注解，就将类中的方法拦截下来
     */
    @Pointcut("@annotation(top.zxqs.dd.annotation.DataSource) || @within(top.zxqs.dd.annotation.DataSource)")
    public void pointcut(){

    }

    @Around("pointcut()")
    public Object around(ProceedingJoinPoint pjp){
        DataSource dataSource = getDataSource(pjp);

        if(dataSource != null){
            // 获取注解中数据源的名称
            String value = dataSource.value();
            // 将数据源名称保存到线程中
            DynamicDataSourceContextHolder.setDataSourceType(value);
        }
        try {
            return pjp.proceed();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        } finally {
            // 清楚线程中的内容
            DynamicDataSourceContextHolder.clearDataSourceType();
        }

        return null;
    }


    /**
     * 获取注解
     * @param pjp
     * @return
     */
    public DataSource getDataSource(ProceedingJoinPoint pjp){

        MethodSignature signature = (MethodSignature) pjp.getSignature();
        // 查找方法上的注解，第一个参数是Method对象，第二个参数是返回的类型
        DataSource annotation = AnnotationUtils.findAnnotation(signature.getMethod(), DataSource.class);
        if(annotation != null){
            // 说明方法上有 @DataSource 注解
            return annotation;
        }
        // 方法上没有就从类上查找，第一个参数是所在类的类型，第二个参数第二个参数是返回的类型
        return AnnotationUtils.findAnnotation(signature.getDeclaringType(), DataSource.class);
    }
}

```

::: tip 说明

1. 首先在 `pointcut()` 方法上定义切点，拦截所有带有 `@DataSource` 注解的方法，同事该注解也可以加在类上，如果该注解加在类上，就表示类中的所有方法都使用该数据源。

2. 接下来我们定义了一个环绕通知，首先根据当前的切点，调用 `getDataSource` 方法获取到 `@DataSource` 注解，这个注解可能来自方法上也可能来自类上，方法上的优先级高于类上的优先级。如果拿到的注解不为空，则我们在 `DynamicDataSourceContextHolder` 中设置当前的数据源名称，设置完成后进行方法的调用；如果拿到的注解为空，那么就直接进行方法的调用，不再设置数据源了（将来会自动使用默认的数据源）。最后记得方法调用完成后，从 `ThreadLocal` 中移除数据

:::

## 7. 测试
好啦，大功告成，我们再来测试一下，写一个 UserMapper：

```java
@Mapper
public interface UserMapper {
    @Select("select count(*) from user")
    Integer count();
}
```
一个很简单的数据库查询操作。

再来一个 service：

```java
@Service
public class UserService {

    @Autowired
    UserMapper userMapper;

    @DataSource("master")
    public Integer master() {
        return userMapper.count();
    }

    @DataSource("slave")
    public Integer slave() {
        return userMapper.count();
    }
}
```

通过 `@DataSource` 注解来指定具体操作的数据源，如果没有使用该注解指定，默认就使用 master 数据源。

最后去单元测试中测一下，如下：

```java
@SpringBootTest
class DynamicDatasourceDemoApplicationTests {

    @Autowired
    UserService userService;

    @Test
    void contextLoads() {
        System.out.println("userService.master() = " + userService.master());
        System.out.println("userService.slave() = " + userService.slave());
    }

}
```

## 8. 小结

以上代码可能会很乱，所以可能会找不到执行的流程，这里我们进行梳理一下：

1. 程序启动之后会先加载 `DruidProperties` 读取配置文件中是内容。
2. 执行 `DynamicDataSource` 类的构造方法，在构造方法中执行 `loadAllDataSource()` 方法加载数据源，返回的 `Map` 中就是对配置文件中数据源的配置，加载后形成的数据源，`key` 为数据源名称，`value` 为数据源对象(DataSource)，拿到数据源后设置所有数据源和默认数据源。
3. 执行使用 `@DataSource` 注解的方法，被 `DataSourceAspect` 拦截，将注解携带的数据源名称保存到 `ThreadLocal` 中。
4. 最后在执行 `mapper` 的时候，会自动调用 `AbstractRoutingDataSource` 中的 `determineCurrentLookupKey()` 方法（也是 `DynamicDataSource` 中的方法）在 `ThreadLocal` 获取需要执行的数据源的名称，最后通过不同的数据源执行相应的 `sql`

