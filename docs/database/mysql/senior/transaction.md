---
title: MySQL 事务隔离级别
autoPrev: README
---

# MYSQL 事务隔离级别

## 理论

MySQL 中事务的隔离级别一共分为四种，分别如下：

* 序列化（serializable）
* 可重复读（repeatable read）
* 读已提交（read committed）
* 读未提交（read uncommitted）

四种不同隔离级别含义分别如下：

1. serializable
   
   ::: tip

    如果隔离级别为序列化，则用户之间通过一个接一个顺序地执行当前的 事务，这种隔离级别提供了事务之间最大限度的隔离

   ::: 

2. repeatable read
   
   :::tip

    在可重复读这一隔离级别上，事务不会被看成是一个序列。不过，当前正在执行事务的变化仍然不能被外部看到，也就是说，如果用户在另外一个事务中执行同条 SELECT 语句数次，结果总是相同的。（因为正在执行的事务所产生的数据变化不能被外部看到）。

   :::

3. read committed
   
    :::tip

    read committed 隔离级别的安全性比 repeatable read 隔离级别的安全性要差。处于 read committed 级别的事务可以看到其他事务对数据的修改。也就是说，在事务处理期间，如果其他事务修改了相应的表，那么同一个事务的多个 SELECT 语句可能返回不同的结果。

   :::

4. read uncommitted
   
   ::: tip

    read uncommitted 提供了事务之间最小限度的隔离。除了容易产生虚幻的读操作和不能重复的读操作外，处于这个隔离级的事务可以读到其他事务还没有提交的数据，如果这个事务使用其他事务不提交的变化作为计算的基础，然后那些未提交的变化被它们的父事务撤销，这就导致了大量的数据变化。

   :::

**在 MySQL 数据库种，默认的事务隔离级别是 repeatable read**

## SQL 实践

接下来通过几条简单的 SQL 验证上面的理论。

### 查看隔离级别

通过如下 SQL 可以查看数据库实例默认的全局隔离级别和当前 session 的隔离级别：

MySQL8 之前使用如下命令查看 MySQL 隔离级别：

```sql
SELECT @@GLOBAL.tx_isolation, @@tx_isolation;
```

默认的隔离级别为 repeatable read，全局隔离级别和当前会话隔离级别皆是如此。

**MySQL8 开始，通过如下命令查看 MySQL 默认隔离级别：**

```sql
SELECT @@GLOBAL.transaction_isolation, @@transaction_isolation;
```

通过如下命令可以修改隔离级别（建议开发者在修改时修改当前 session 隔离级别即可，不用修改全局的隔离级别）：

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
```

表示当前 session 的数据库隔离级别设置为 `READ UNCOMMITTED`，设置成功后，再次查询隔离级别，发现当前 session 的隔离级别已经变了。

**注意：**

如果只是修改了当前 session 的隔离级别，则换一个 session 之后，隔离级别又会恢复到默认的隔离级别，所以我们测试时，修改当前 session 的隔离级别即可。