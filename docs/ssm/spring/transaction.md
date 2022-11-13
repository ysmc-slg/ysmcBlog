---
title: 事务
autoPrev: spel
---

# 事务

数据库事务是指作为单个逻辑工作单元执行的一系列操作，这些操作要么一起成功，要么一起失败，是一个不可分割的工作单元。 在我们日常工作中，涉及到事务的场景非常多，一个 service 中往往需要调用不同的 dao 层方法，这些方法要么同时成功要么同时失败，我们需要在 service 层确保这一点。

事务有四大特征（ACID）：

* 原子性（Atomicity）：一个事务（transaction）中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。即，事务不可分割、不可约简。
* 一致性（Consistency）：在事务开始之前喝结束之后，数据库的完整性没有被破坏。
* 隔离性（Isolation）：数据库允许多个并发事务同时对其数据进行读写和修改，多个事务并发互不影响。事务隔离分为不同等级，包括未读提交、读提交、可重复读、串行化
* 持久性：事务处理结束后，对数据的修改就是永久的。

## Spring 中的事务

spring 作为 java 开发中的基础设施，对于事务也提供了很好的支持，总体来说，Spring 支持两种类型的事务，声明式事务和编程式事务。

编程式事务需要将事务的代码嵌入业务逻辑中，这样代码的耦合度较高，而声明式事务通过AOP的思想能够有效的将事务和业务逻辑代拿解耦，因此在实际开发中，声明式事务得到了广泛的应用。

spring 中对事务的支持提供了三个核心类：

1. platformTransactionManager
2. TransactionDefinition
3. TransactionStatus

## PlatformTransactionManager

PlatformTransactionManager 是事务处理的核心，它有诸多的实现类，如下：

![image-20221111160231262](https://img.zxqs.top/20221111160240.png)

PlatformTransactionManager 的定义如下：

```java
public interface PlatformTransactionManager {
	TransactionStatus getTransaction(@Nullable TransactionDefinition definition);
	void commit(TransactionStatus status) throws TransactionException;
	void rollback(TransactionStatus status) throws TransactionException;
}
```

`PlatformTransactionManager` 只是一个标准。不同的框架可用有不同的实现类，如果你使用JDBC 那么可以将 `DataSourceTransactionManager` 作为事务管理器；如果你使用的是 Hibernate，那么可以将 `HibernateTransactionManager` 作为事务管理器；如果你使用的是 JPA，那么可以将 `JpaTransactionManager` 作为事务管理器。`DataSourceTransactionManager`、`HibernateTransactionManager` 以及 `JpaTransactionManager`都是 `PlatformTransactionManager` 的具体实现，但是我们并不需要掌握这些具体实现类的用法，我们只需要掌握好 PlatformTransactionManager 的用法即可。

`PlatformTransactionManager` 中主要有如下三个方法：

1. getTransaction()：getTransaction() 是根据传入的 `TransactionDefinition` 获取一个事务对象(TransactionStatus)
1. commit()：用来提交事务
2. rollback()：回滚事务

## TransactionDefinition

`TransactionDefinition` 用来描述事务的具体规则，也称事务的属性：

1. 隔离性
2. 传播性
3. 回滚规则
4. 超时时间
5. 是否只读

`TransactionDefinition` 类中的方法如下：

![img](https://img.zxqs.top/20221111162405.png)

1. getIsolationLevel()，获取事务的隔离级别 
2. getName()，获取事务的名称 
3. getPropagationBehavior()，获取事务的传播性 
4. getTimeout()，获取事务的超时时间 
5. isReadOnly()，获取事务是否是只读事务 

## TransactionStatus

TransactionStatus 可以理解为事务本身，该接口代码如下：

```java
public interface TransactionStatus extends SavepointManager, Flushable {
	boolean isNewTransaction();
	boolean hasSavepoint();
	void setRollbackOnly();
	boolean isRollbackOnly();
	void flush();
	boolean isCompleted();
}
```

1. isNewTransaction()：获取当前事务是否是一个新事务
2. hasSavepoint()：判断是否存在 savePoint()
3. setRollbackOnly()：设置事务必须回滚
4. isRollbackOnly：获取事务只能回滚
5. flush()：方法将底层会话中的修改刷新到数据库，一般用于 Hibernate/JPA 的会话，对如 JDBC 类型的事务无任何影响。
6. isCompleted()：判断一个事务是否结束

## 编程式事务

通过 `PlatformTransactionManager` 或者 `TransactionTemplate` 可以实现编程式事务。如果是在 Spring Boot 项目中，这两个对象 Spring Boot 会自动提供，我们直接使用即可。但是如果是在传统的 SSM 项目中，则需要我们通过配置来提供这两个对象，如下（简单起见，数据库操作我们使用 JdbcTemplate）：

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context" xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--配置一个包扫描-->
    <context:component-scan base-package="top.zxqs"/>

    <!--数据源-->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
        <property name="url" value="jdbc:mysql://192.168.0.102:3306/test?serverTimezone=Asia/Shanghai"/>
        <property name="username" value="root"/>
        <property name="password" value="root"/>
    </bean>

    <!--提供一个事务管理器，是PlatformTransactionManager的实现类-->
    <bean class="org.springframework.jdbc.datasource.DataSourceTransactionManager" id="transactionManager">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <bean class="org.springframework.jdbc.core.JdbcTemplate" id="jdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

</beans>
```
接下来的代码就很简单了
```java
@Component
public class UserService {
    // 实际上获取的是 配置文件中的 DataSourceTransactionManager
    @Autowired
    PlatformTransactionManager transactionManager;

    @Autowired
    JdbcTemplate jdbcTemplate;

    public void transfer(){
        DefaultTransactionDefinition definition = new DefaultTransactionDefinition();
        TransactionStatus status = transactionManager.getTransaction(definition);

        try {
            jdbcTemplate.update("update sys_user set account = ? where username=?",9,"zhangsan");
			int i = 1 / 0;
            transactionManager.commit(status);
        }catch (Exception e){
            e.printStackTrace();
            transactionManager.rollback(status);
        }
    }
}
```
这段代码很简单，没啥好解释的，在 `try...catch...` 中进行业务操作，没问题就 `commit`，有问题就 `rollback`。如果我们需要配置事务的隔离性、传播性等，可以在 DefaultTransactionDefinition 对象中进行配置。 上面的代码是通过 `PlatformTransactionManager` 实现的编程式事务，我们也可以通过 `TransactionTemplate` 来实现编程式事务，如下：

首先将 `TransactionTemplate` 注入到spring中

```xml
<!--配置TransactionTemplate-->
<bean class="org.springframework.transaction.support.TransactionTemplate" id="transactionTemplate">
	<property name="transactionManager" ref="transactionManager"/>
</bean>
```

```java
//@Component
public class UserService {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    TransactionTemplate transactionTemplate;


    public void transfer2(){
        transactionTemplate.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus status) {
                try {
                    jdbcTemplate.update("update sys_user set account = ? where username=?",200,"zhangsan");
                   int i = 10/0;
                } catch (DataAccessException e){
                    // 设置当前事务回滚
                    status.setRollbackOnly();
                    e.printStackTrace();
                }
            }
        });
    }
}
```

直接注入 `TransactionTemplate`，然后在 `execute` 方法中添加回调写核心的业务即可，当抛出异常时，将当前事务标注为只能回滚即可。注意，`execute` 方法中，如果不需要获取事务执行的结果，则直接使用 `TransactionCallbackWithoutResult` 类即可，如果要获取事务执行结果，则使用 `TransactionCallback` 即可。

编程式事务由于代码入侵太严重了，因为在实际开发中使用的很少，我们在项目中更多的是使用声明式事务。

## 声明式事务

声明式事务如果使用 XML 配置，可以做到无侵入；如果使用 Java 配置，也只有一个 @Transactional 注解侵入而已，相对来说非常容易。


**以下配置针对传统 SSM 项目（因为在 Spring Boot 项目中，事务相关的组件已经配置好了）：**

### XML 配置

```xml
 <!--配置一个包扫描-->
<context:component-scan base-package="top.zxqs"/>

<!--数据源-->
<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
	<property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
	<property name="url" value="jdbc:mysql://192.168.0.102:3306/test?serverTimezone=Asia/Shanghai"/>
	<property name="username" value="root"/>
	<property name="password" value="root"/>
</bean>

<!--提供一个事务管理器，是PlatformTransactionManager的实现类-->
<bean class="org.springframework.jdbc.datasource.DataSourceTransactionManager" id="transactionManager">
	<property name="dataSource" ref="dataSource"/>
</bean>

<bean class="org.springframework.jdbc.core.JdbcTemplate" id="jdbcTemplate">
	<property name="dataSource" ref="dataSource"/>
</bean>

<!--
	XML 配置事务分为三个步骤
	1. 配置事务管理器
	2. 配置事务通知
	3. 配置AOP

-->
<tx:advice id="txAdvice" transaction-manager="transactionManager">
	<tx:attributes>
		<!--哪些方法用事务，*代表任意-->
		<tx:method name="add*"/>
		<tx:method name="insert*"/>
		<tx:method name="delete*"/>
		<tx:method name="update*"/>
		<tx:method name="transfer*"/>
	</tx:attributes>
</tx:advice>

<aop:config>
	<aop:pointcut id="pc1" expression="execution(* top.zxqs.UserService.*(..))"/>
	<aop:advisor advice-ref="txAdvice" pointcut-ref="pc1"/>
</aop:config>
```

配置完成后，如下一些方法就自动具备事务了：

```java
public void transfer3(){
	jdbcTemplate.update("update sys_user set account = ? where username=?",999,"zhangsan");
	int i=1/0;
}
```

需要注意的是，方法要和 `<tx:attributes>` 中对应起来

### Java 配置

我们也可以使用 Java 配置来实现声明式事务：

```java
@Configuration
@ComponentScan(basePackages = "top.zxqs")
// 开启事务
@EnableTransactionManagement
public class UserConfig {

    @Bean
    public DruidDataSource dataSource(){
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://192.168.0.102:3306/test?serverTimezone=Asia/Shanghai");
        dataSource.setUsername("root");
        dataSource.setPassword("root");
        return dataSource;
    }

    @Bean
    public PlatformTransactionManager transactionManager(){
        return new DataSourceTransactionManager(dataSource());
    }

    @Bean
    public JdbcTemplate jdbcTemplate(DruidDataSource dataSource){
        return new JdbcTemplate(dataSource);
    }
}
```

这里配置的东西和 XML 中的配置差不多，最关键的就两个：

* 事务管理器 PlatformTransactionManager
* @EnableTransactionManagement 注解开启事务支持，springboot 中默认开启不需要设置。

接下来，那个方法需要事务就在哪个方法上添加 `@Transactional` 注解即可：

```java
@Component
public class UserService2 {
    // 实际上获取的是 配置文件中的 DataSourceTransactionManager
    @Autowired
    PlatformTransactionManager transactionManager;

    @Autowired
    JdbcTemplate jdbcTemplate;


    @Transactional
    public void transfer4(){

        jdbcTemplate.update("update sys_user set account = ? where username=?",222,"zhangsan");
        int i=1/0;
    }

}
```

### 混合配置：

也可以 Java 代码和 XML 混合配置来实现声明式事务，就是一部分配置用 XML 来实现，一部分配置用 Java 代码来实现： 

有多中实现方式这里介绍两种：

1. 配置文件中开启事务注解支持

```xml
 <!--配置一个包扫描-->
<context:component-scan base-package="top.zxqs"/>

<!--数据源-->
<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
	<property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
	<property name="url" value="jdbc:mysql://192.168.0.102:3306/test?serverTimezone=Asia/Shanghai"/>
	<property name="username" value="root"/>
	<property name="password" value="root"/>
</bean>

<!--提供一个事务管理器，是PlatformTransactionManager的实现类-->
<bean class="org.springframework.jdbc.datasource.DataSourceTransactionManager" id="transactionManager">
	<property name="dataSource" ref="dataSource"/>
</bean>


<!--  开启事务注解支持  -->
<tx:annotation-driven/>
```

此时就可以直接在方法上添加 `Transactional` 注解了。

2. 导入配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd   http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd">

    <!--
    开启事务的注解配置，添加了这个配置，就可以直接在代码中通过 @Transactional 注解来开启事务了
    -->
    <tx:annotation-driven />

</beans>

```

java 代码如下：

```java
@Configuration
@ComponentScan
@ImportResource(locations = "classpath:applicationContext3.xml")
public class JavaConfig {
    @Bean
    DataSource dataSource() {
        DriverManagerDataSource ds = new DriverManagerDataSource();
        ds.setPassword("123");
        ds.setUsername("root");
        ds.setUrl("jdbc:mysql:///test01?serverTimezone=Asia/Shanghai");
        ds.setDriverClassName("com.mysql.cj.jdbc.Driver");
        return ds;
    }

    @Bean
    JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }

    @Bean
    PlatformTransactionManager transactionManager() {
        return new DataSourceTransactionManager(dataSource());
    }
}
```

此时就可以直接在方法上添加 `Transactional` 注解了。