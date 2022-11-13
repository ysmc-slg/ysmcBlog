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

## 事务属性

前面我们已经说了事务的五大属性，接下来我们仔细捋一捋：

* 隔离性
* 传播性
* 回滚规则
* 超时时间
* 是否只读

### 隔离性
``` java
// 等待MySQL隔离性
```



### 传播性

```text
spring 事务传播行为是为了解决业务方法之间互相调用的事务问题，当一个事务方法被另一个事务方法调用时，事务该以何种状态存在？例如新方法可能继续在现有事务中运行，也可能开启一个新事务，并在自己的事务中运行，等等，这些规则就涉及到事务的传播性。
```

关于事务的传播性，Spring 只要定义了如下几种：
```java
public enum Propagation {
	REQUIRED(TransactionDefinition.PROPAGATION_REQUIRED),
	SUPPORTS(TransactionDefinition.PROPAGATION_SUPPORTS),
	MANDATORY(TransactionDefinition.PROPAGATION_MANDATORY),
	REQUIRES_NEW(TransactionDefinition.PROPAGATION_REQUIRES_NEW),
	NOT_SUPPORTED(TransactionDefinition.PROPAGATION_NOT_SUPPORTED),
	NEVER(TransactionDefinition.PROPAGATION_NEVER),
	NESTED(TransactionDefinition.PROPAGATION_NESTED);
	private final int value;
	Propagation(int value) { this.value = value; }
	public int value() { return this.value; }
}

```

|传播性|描述|
|----|-----|
|REQUIRED|如果当前存在事务，则加该事务；如果当前没有事务，则创建一个新的事务|
|REQUIRES_NEW|创建一个新的事务，如果当前存在事务，则把当前事务挂起|
|NESTED|如果当前存在事务，则创建一个事务当做当前事务的嵌套任务来运行；如果当前没有事务，则该取值等价于 TransactionDefinition.PROPAGATION_REQUIRED|
|SUPPORTS|如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行|
|MANDATORY|如果当前存在事务，则加入事务，如果当前没有事务，则抛出异常|
|NOT_SUPPORTED| 以非事务方式运行，如果当前存在事务，则把事务挂起|
|NEVER|以非事务方式运行，如果当前存在事务，则抛出异常|

一共是七中传播性，具体配置也简单：

**TransactionTemplate中的配置**

```xml
transactionTemplate.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
```

**PlatformTransactionManager 中的配置**

```java
public void update2() {
    //创建事务的默认配置
    DefaultTransactionDefinition definition = new DefaultTransactionDefinition();
    definition.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED);
    TransactionStatus status = platformTransactionManager.getTransaction(definition);
    try {
        jdbcTemplate.update("update account set money = ? where username=?;", 999, "zhangsan");
        int i = 1 / 0;
        //提交事务
        platformTransactionManager.commit(status);
    } catch (DataAccessException e) {
          e.printStackTrace();
        //回滚
        platformTransactionManager.rollback(status);
    }
}

```

声明式事务配置（XML）
```xml
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <tx:attributes>
        <!--以 add 开始的方法，添加事务-->
        <tx:method name="add*"/>
        <tx:method name="insert*" isolation="SERIALIZABLE" propagation="REQUIRED"/>
    </tx:attributes>
</tx:advice>

```

**声明式事务配置（Java）**

```java
@Transactional(propagation = Propagation.REQUIRED)
public void update4() {
    jdbcTemplate.update("update account set money = ? where username=?;", 998, "lisi");
    int i = 1 / 0;
}

```

#### REQUIRED

REQUIRED 是默认的传播属性，表示如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。

```java
@Service
public class Uservice {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    UserService2 userService2;

    @Transactional
    public void transfer(){
        jdbcTemplate.update("update sys_user set account=? where username = ?",1000,"zhangsan");
        userService2.update();
    }
}

@Service
public class UserService2 {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void update(){
        jdbcTemplate.update("update sys_user set account =? where username=?",1000,"lisi");
    }
}
```

在 `transfer` 中调用 `update` 。

1. 如果 `transfer` 本身有事务，则 `update` 方法就会加入到 `transfer` 方法所在的事务中，这样两个方法将处于同一个事务中，一起成功或者一起失败（不管是哪个方法抛异常，都会导致整体回滚）

如上代码项目打印出来的事务日志如下

```text
o.s.jdbc.support.JdbcTransactionManager  : Creating new transaction with name [org.javaboy.spring_tran02.UserService.transfer]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT
o.s.jdbc.support.JdbcTransactionManager  : Acquired Connection [HikariProxyConnection@875256468 wrapping com.mysql.cj.jdbc.ConnectionImpl@9753d50] for JDBC transaction
o.s.jdbc.support.JdbcTransactionManager  : Switching JDBC Connection [HikariProxyConnection@875256468 wrapping com.mysql.cj.jdbc.ConnectionImpl@9753d50] to manual commit
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where username=?;]
o.s.jdbc.support.JdbcTransactionManager  : Participating in existing transaction
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where id=?;]
o.s.jdbc.support.JdbcTransactionManager  : Initiating transaction commit
o.s.jdbc.support.JdbcTransactionManager  : Committing JDBC transaction on Connection [HikariProxyConnection@875256468 wrapping com.mysql.cj.jdbc.ConnectionImpl@9753d50]
o.s.jdbc.support.JdbcTransactionManager  : Releasing JDBC Connection [HikariProxyConnection@875256468 wrapping com.mysql.cj.jdbc.ConnectionImpl@9753d50] after transaction

```

从日志中可以看到，前前后后一共就开启了一个事务，日志中有这么一句：

```text
Participating in existing transaction
```
这个就说明 update 方法没有自己开启事务，而是加入到 transfer 方法的事务中了。

2. 如果 `transfer` 方法本身没有事务，则 `update` 方法就会自己开启一个新的事务，自己玩。

此时如果 `transfer` 抛异常，`update` 方法并不会回滚，同样的 `update` 抛异常 `transfer` 也不会回滚

####  REQUIRES_NEW

`REQUIRES_NEW` 表示创建一个新的事务，如果当前存在事务，则把 `当前事务挂起`。换言之，不管外部方法是否有事务，`REQUIRES_NEW` 都会开启自己的事务。

还是上面那个例子，假设 `transfer` 和 `update` 方法都有事务，`transfer` 方法的事务传播性是 `REQUIRED`，而 `update` 方法的事务传播性是 `REQUIRES_NEW`，那么最终打印出来的事务日志如下：

```text
o.s.jdbc.support.JdbcTransactionManager  : Creating new transaction with name [org.javaboy.spring_tran02.UserService.transfer]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT
o.s.jdbc.support.JdbcTransactionManager  : Acquired Connection [HikariProxyConnection@422278016 wrapping com.mysql.cj.jdbc.ConnectionImpl@732405c2] for JDBC transaction
o.s.jdbc.support.JdbcTransactionManager  : Switching JDBC Connection [HikariProxyConnection@422278016 wrapping com.mysql.cj.jdbc.ConnectionImpl@732405c2] to manual commit
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where username=?;]
o.s.jdbc.support.JdbcTransactionManager  : Suspending current transaction, creating new transaction with name [org.javaboy.spring_tran02.UserService.update]
o.s.jdbc.support.JdbcTransactionManager  : Acquired Connection [HikariProxyConnection@247691344 wrapping com.mysql.cj.jdbc.ConnectionImpl@14ad4b95] for JDBC transaction
com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@14ad4b95
o.s.jdbc.support.JdbcTransactionManager  : Switching JDBC Connection [HikariProxyConnection@247691344 wrapping com.mysql.cj.jdbc.ConnectionImpl@14ad4b95] to manual commit
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where id=?;]
o.s.jdbc.support.JdbcTransactionManager  : Initiating transaction commit
o.s.jdbc.support.JdbcTransactionManager  : Committing JDBC transaction on Connection [HikariProxyConnection@247691344 wrapping com.mysql.cj.jdbc.ConnectionImpl@14ad4b95]
o.s.jdbc.support.JdbcTransactionManager  : Releasing JDBC Connection [HikariProxyConnection@247691344 wrapping com.mysql.cj.jdbc.ConnectionImpl@14ad4b95] after transaction
o.s.jdbc.support.JdbcTransactionManager  : Resuming suspended transaction after completion of inner transaction
o.s.jdbc.support.JdbcTransactionManager  : Initiating transaction commit
o.s.jdbc.support.JdbcTransactionManager  : Committing JDBC transaction on Connection [HikariProxyConnection@422278016 wrapping com.mysql.cj.jdbc.ConnectionImpl@732405c2]
o.s.jdbc.support.JdbcTransactionManager  : Releasing JDBC Connection [HikariProxyConnection@422278016 wrapping com.mysql.cj.jdbc.ConnectionImpl@732405c2] after transaction

```
分析这段日志我们可以看到：
1. 首先为 `transfer` 方法开启了一个事务
2. 执行完 `transfer` 方法的 SQL 之后，事务被挂起(Suspending) 
3. 为 `update` 方法开启一个新的事务
4. 执行 `update` 方法的 SQL
5. 提交 `update` 方法的事务
6. 恢复挂起的事务（Resuming） 
7. 提交 `transfer` 方法的事务

从这段日志中大家可以非常明确的看到 `REQUIRES_NEW` 和 `REQUIRED` 的区别。

再来简单总结下(假设 update 方法的事务传播性是 REQUIRES_NEW)：

1. 如果 `transfer` 方法没有事务，update 方法自己开启一个事务自己玩
2. 如果 `transfer` 方法有事务， `update` 方法还是会开启一个事务。此时，如果 `transfer` 发生了异常进行回滚，并不会导致 `update` 方法回滚，因为 `update` 方法是一个独立的事务；如果 `update` 方法发生了异常导致回滚，并且 `update` 方法的异常没有被捕获处理，传导了 `transfer` 方法中，那么也会导致`transfer` 方法回滚，否则不会。

::: tip 注意

这个地方小伙伴们要稍微注意一下，我们测试的时候，由于是两个更新 SQL，如果更新的查询字段不是索引字段，那么 InnoDB 将使用表锁，这样就会发生死锁（`transfer` 方法执行时开启表锁，导致 `update` 方法陷入等待中，而必须 `update` 方法执行完，`transfer` 才能释放锁）。所以，在上面的测试中，我们要将 username 字段设置为索引字段，这样默认就使用行锁了

:::

#### NESTED

`NESTED` 表示如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于 `TransactionDefinition.PROPAGATION_REQUIRED`。 假设 `transfer` 方法有事务，`update` 方法也有事务且传播性为 `NESTED`，那么最终执行的事务日志如下：

```text
o.s.jdbc.support.JdbcTransactionManager  : Creating new transaction with name [org.javaboy.demo.UserService.transfer]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT
o.s.jdbc.support.JdbcTransactionManager  : Acquired Connection [HikariProxyConnection@2025689131 wrapping com.mysql.cj.jdbc.ConnectionImpl@2ed3628e] for JDBC transaction
o.s.jdbc.support.JdbcTransactionManager  : Switching JDBC Connection [HikariProxyConnection@2025689131 wrapping com.mysql.cj.jdbc.ConnectionImpl@2ed3628e] to manual commit
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where username=?;]
o.s.jdbc.support.JdbcTransactionManager  : Creating nested transaction with name [org.javaboy.demo.UserService2.update]
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where id=?;]
o.s.jdbc.support.JdbcTransactionManager  : Releasing transaction savepoint
o.s.jdbc.support.JdbcTransactionManager  : Initiating transaction commit
o.s.jdbc.support.JdbcTransactionManager  : Committing JDBC transaction on Connection [HikariProxyConnection@2025689131 wrapping com.mysql.cj.jdbc.ConnectionImpl@2ed3628e]
o.s.jdbc.support.JdbcTransactionManager  : Releasing JDBC Connection [HikariProxyConnection@2025689131 wrapping com.mysql.cj.jdbc.ConnectionImpl@2ed3628e] after transaction

```

关键一句在 `Creating nested transaction`。 

此时，`NESTED` 修饰的内部方法（update）属于外部事务的子事务，`外部主事务回滚的话，子事务也会回滚`，而`内部子事务可以单独回滚而不影响外部主事务和其他子事务`（需要处理掉内部子事务的异常）。

#### MANDATORY 
MANDATORY 表示如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。 

这个好理解，我举两个例子： 

假设 `transfer` 方法有事务，`update` 方法也有事务且传播性为 `MANDATORY`，那么最终执行的事务日志如下： 
```text
o.s.jdbc.support.JdbcTransactionManager  : Creating new transaction with name [org.javaboy.demo.Uservice.transfer]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT
o.s.jdbc.support.JdbcTransactionManager  : Acquired Connection [HikariProxyConnection@768820610 wrapping com.mysql.cj.jdbc.ConnectionImpl@14840df2] for JDBC transaction
o.s.jdbc.support.JdbcTransactionManager  : Switching JDBC Connection [HikariProxyConnection@768820610 wrapping com.mysql.cj.jdbc.ConnectionImpl@14840df2] to manual commit
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where username=?;]
o.s.jdbc.support.JdbcTransactionManager  : Participating in existing transaction
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where id=?;]
o.s.jdbc.support.JdbcTransactionManager  : Initiating transaction commit
o.s.jdbc.support.JdbcTransactionManager  : Committing JDBC transaction on Connection [HikariProxyConnection@768820610 wrapping com.mysql.cj.jdbc.ConnectionImpl@14840df2]
o.s.jdbc.support.JdbcTransactionManager  : Releasing JDBC Connection [HikariProxyConnection@768820610 wrapping com.mysql.cj.jdbc.ConnectionImpl@14840df2] after transaction1234567891011

```
 
 从这段日志可以看出： 
 
1. 首先给 `transfer` 方法开启事务。 
2. 执行 `transfer` 方法的 SQL。 
3. `update` 方法加入到已经存在的事务中。 
4. 执行 `update` 方法的 SQL。 
5. 提交事务。 

假设 `transfer` 方法无事务，`update` 方法有事务且传播性为 `MANDATORY`，那么最终执行时会抛出如下异常： 
```text
No existing transaction found for transaction marked with propagation 'mandatory'
```

由于没有已经存在的事务，所以出错了。 

#### SUPPORTS 
SUPPORTS 表示如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。 

这个也简单，举两个例子大家就明白了。 

假设 `transfer` 方法有事务，`update` 方法也有事务且传播性为 `SUPPORTS`，那么最终事务执行日志如下：
```text
o.s.jdbc.support.JdbcTransactionManager  : Creating new transaction with name [org.javaboy.demo.UserVice.transfer]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT
o.s.jdbc.support.JdbcTransactionManager  : Acquired Connection [HikariProxyConnection@1780573324 wrapping com.mysql.cj.jdbc.ConnectionImpl@44eafcbc] for JDBC transaction
o.s.jdbc.support.JdbcTransactionManager  : Switching JDBC Connection [HikariProxyConnection@1780573324 wrapping com.mysql.cj.jdbc.ConnectionImpl@44eafcbc] to manual commit
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where username=?;]
o.s.jdbc.support.JdbcTransactionManager  : Participating in existing transaction
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where id=?;]
o.s.jdbc.support.JdbcTransactionManager  : Initiating transaction commit
o.s.jdbc.support.JdbcTransactionManager  : Committing JDBC transaction on Connection [HikariProxyConnection@1780573324 wrapping com.mysql.cj.jdbc.ConnectionImpl@44eafcbc]
o.s.jdbc.support.JdbcTransactionManager  : Releasing JDBC Connection [HikariProxyConnection@1780573324 wrapping com.mysql.cj.jdbc.ConnectionImpl@44eafcbc] after transaction1234567891011

```
 
这段日志很简单，没啥好说的，认准 `Participating in existing transaction` 表示加入到已经存在的事务中即可。 

假设 `transfer` 方法无事务，`update` 方法有事务且传播性为 `SUPPORTS`，这个最终就不会开启事务了，也没有相关日志。 

#### NOT_SUPPORTED 

NOT_SUPPORTED 表示以非事务方式运行，如果当前存在事务，则把当前事务挂起。 

假设 `transfer` 方法有事务，`update` 方法也有事务且传播性为 `NOT_SUPPORTED`，那么最终事务执行日志如下：
```text
o.s.jdbc.support.JdbcTransactionManager  : Creating new transaction with name [org.javaboy.demo.UserService.transfer]: PROPAGATION_REQUIRED,ISOLATION_DEFAULT
o.s.jdbc.support.JdbcTransactionManager  : Acquired Connection [HikariProxyConnection@1365886554 wrapping com.mysql.cj.jdbc.ConnectionImpl@3198938b] for JDBC transaction
o.s.jdbc.support.JdbcTransactionManager  : Switching JDBC Connection [HikariProxyConnection@1365886554 wrapping com.mysql.cj.jdbc.ConnectionImpl@3198938b] to manual commit
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where username=?;]
o.s.jdbc.support.JdbcTransactionManager  : Suspending current transaction
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL update
o.s.jdbc.core.JdbcTemplate               : Executing prepared SQL statement [update user set money = ? where id=?;]
o.s.jdbc.datasource.DataSourceUtils      : Fetching JDBC Connection from DataSource
o.s.jdbc.support.JdbcTransactionManager  : Resuming suspended transaction after completion of inner transaction
o.s.jdbc.support.JdbcTransactionManager  : Initiating transaction commit
o.s.jdbc.support.JdbcTransactionManager  : Committing JDBC transaction on Connection [HikariProxyConnection@1365886554 wrapping com.mysql.cj.jdbc.ConnectionImpl@3198938b]
o.s.jdbc.support.JdbcTransactionManager  : Releasing JDBC Connection [HikariProxyConnection@1365886554 wrapping com.mysql.cj.jdbc.ConnectionImpl@3198938b] after transaction12345678910111213

```
 
这段日志大家认准这两句就行了 ： `Suspending current transaction` 表示挂起当前事务；`Resuming suspended transaction` 表示恢复挂起的事务。 
 
#### NEVER 

NEVER 表示以非事务方式运行，如果当前存在事务，则抛出异常。 

假设 `transfer` 方法有事务，`update` 方法也有事务且传播性为 `NEVER`，那么最终会抛出如下异常： 

```text
Existing transaction found for transaction marked with propagation 'never'
```

### 回滚桂枝

默认情况下，事务只有遇到运行期异常（RuntimeException 的子类）以及 Error 时才会回滚，在遇到检查型（Checked Exception）异常时不会回滚。 

像 1/0，空指针这些是 RuntimeException，而 IOException 则算是 Checked Exception，换言之，默认情况下，如果发生 IOException 并不会导致事务回滚。 如果我们希望发生 IOException 时也能触发事务回滚，那么可以按照如下方式配置：

**Java 配置：**

```java
@Transactional(rollbackFor = IOException.class)
public void transfer() {
    jdbcTemplate.update("update user set money = ? where username=?;", 1, "zhangsan");
    accountService.update();
}

```

**XML 配置：**

```xml
<tx:advice transaction-manager="transactionManager" id="txAdvice">
    <tx:attributes>
        <tx:method name="m3" rollback-for="java.io.IOException"/>
    </tx:attributes>
</tx:advice>

```

另外，我们也可以指定在发生某些异常时不回滚，例如当系统抛出 `ArithmeticException` 异常并不要触发事务回滚，配置方式如下：

**java配置：**

```java
@Transactional(noRollbackFor = ArithmeticException.class)
public void transfer() {
    jdbcTemplate.update("update user set money = ? where username=?;", 1, "zhangsan");
    accountService.update();
}

```

**XML 配置：**
```xml
<tx:advice transaction-manager="transactionManager" id="txAdvice">
    <tx:attributes>
        <tx:method name="m3" no-rollback-for="java.lang.ArithmeticException"/>
    </tx:attributes>
</tx:advice>

```

### 是否只读

只读事务一般设置在查询方法上，但不是所有的查询方法都需要只读事务，要看具体情况。 

一般来说，如果这个业务方法只有一个查询 SQL，那么就没必要添加事务，强行添加最终效果适得其反。 

但是如果一个业务方法中有多个查询 SQL，情况就不一样了：多个查询 SQL，默认情况下，每个查询 SQL 都会开启一个独立的事务，这样，如果有并发操作修改了数据，那么多个查询 SQL 就会查到不一样的数据。此时，如果我们开启事务，并设置为只读事务，那么多个查询 SQL 将被置于同一个事务中，多条相同的 SQL 在该事务中执行将会获取到相同的查询结果。 

设置事务只读的方式如下：

```java
@Transactional(readOnly = true)
```

**XML 配置：**

```xml
<tx:advice transaction-manager="transactionManager" id="txAdvice">
    <tx:attributes>
        <tx:method name="m3" read-only="true"/>
    </tx:attributes>
</tx:advice>

```

### 超时时间

超时时间是说一个事务允许执行的最长时间，如果超过该时间限制但事务还没有完成，则自动回滚事务。 事务超时时间配置方式如下(单位为秒)：

**Java 配置：**

```java
@Transactional(timeout = 10)
```

**XML 配置：**

```xml
<tx:advice transaction-manager="transactionManager" id="txAdvice">
    <tx:attributes>
        <tx:method name="m3" read-only="true" timeout="10"/>
    </tx:attributes>
</tx:advice>

```

在 `TransactionDefinition` 中以 int 的值来表示超时时间，其单位是秒，默认值为-1。

## 注意事项

1. 事务只能应用到 public 方法上才会有效。 
2. 事务需要从外部调用，Spring 自调事务用会失效。即相同类里边，A 方法没有事务，B 方法有事务，A 方法调用 B 方法，则 B 方法的事务会失效，这点尤其要注意，因为代理模式只拦截通过代理传入的外部方法调用，所以自调用事务是不生效的。 
3. 建议事务注解 @Transactional 一般添加在实现类上，而不要定义在接口上，如果加在接口类或接口方法上时，只有配置基于接口的代理这个注解才会生效。