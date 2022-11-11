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


