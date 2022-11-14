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

### read uncommitted

`read uncommitted` 是最低隔离级别，这种隔离级别中存在 `脏读、不可重复读、以及幻读` 问题。

下面分别予以介绍。

首先创建一个简单的表，预设两条数据，如下：

![image-20221114211449143](https://img.zxqs.top/image-20221114211449143.png)

表中的数据很简单，有两个用户，每个人各有 1000 块钱。现在模拟用户之间的转账操作。

**注意：**

如果读者使用的是 Navicat 的话，不同的查询窗口就对应了不同的 session，如果读者使用了 SQLyog 的话，不同查询窗口对应同一个 session，因此如果使用 SQLyog，需要读者再开启一个新的连接，在新的连接中进行查询操作。

#### 脏读

一个事务读到另一个事务还没有提交的数据，称之为脏读。具体操作如下：

1. 首先打开两个 SQL 操作窗口，假设分别为 A 和 B，在 A 中输入如下几条 SQL（输入完成后不执行）
```sql
START TRANSACTION;
UPDATE sys_user set account=account+100 where username='zhangsan';
UPDATE sys_user set account=account-100 where username='lisi';
COMMIT;
```

2. 在 B 窗口执行如下 SQL，修改默认的事务隔离级别为 read uncommitted

```sql
SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED
```

3. 接下来在 B 窗口输入如下 SQL，输入完成后，首先执行第一行开启事务事务（注意只需要执行一行即可）：

```sql
START TRANSACTION;
SELECT * from sys_user;
COMMIT
```

4. 接下来执行 A 窗口中的两条 SQL，即开始事务，给 zhangsan 这个账户添加 100 元
5. 进入 B 窗口，执行 B 窗口的第二条查询 SQL （SELECT * from sys_user），结果如下：

![image-20221114213514186](https://img.zxqs.top/image-20221114213514186.png)

可以看到，A 窗口中的事务，虽然还未提交，但是 B 窗口中已经可以查询到数据的相关变化了。

这就是 ``脏读` 的问题。

#### 不可重复读

不可重复读是指一个事务先后读取同一条记录，但两次读取的数据不同，称之为不可重复读。具体操作步骤如下（操作之前先将两个账户的钱都恢复为1000）：

1. 首先打开两个查询窗口 A 和 B ，并且将 B 的数据库事务隔离级别设置为 READ UNCOMMITTED。具体 SQL 参考上文，这里不赘述。
2. 在 B 窗口中输入如下 SQL，然后只执行前两条 SQL 开启事务并查询 zhangsan 的账户：
```sql
START TRANSACTION;
SELECT * from sys_user where username='zhangsan';
COMMIT;
```

前两条 SQL 执行结果如下：

![image-20221114214613734](https://img.zxqs.top/image-20221114214613734.png)

3. 在 A 窗口中执行如下 SQL，给 zhangsan 这个账户添加 100 块钱，如下：

```sql
START TRANSACTION;
UPDATE sys_user set account=account+100 where username='zhangsan';
COMMIT;
```
4. 再次回到 B 窗口，执行 B 窗口的第二条 SQL 查看 zhangsan 的账户，结果如下：

![image-20221114214903717](https://img.zxqs.top/image-20221114214903717.png)

zhangsan 的账户已经发生了变化，即前后两次查看 zhangsan 账户，结果不一致，这就是`不可重复读`。

#### 幻读

幻象读和不可重复读非常像，看名字就是产生幻觉了。

我举一个简单例子。

在 A 窗口中输入如下 SQL：

```sql
START TRANSACTION;
insert into sys_user(username,account) values('wangwu',1000);
COMMIT;
```

然后在 B 窗口输入如下 SQL (B窗口隔离级别是 read UNCOMMITTED)：

```sql
START TRANSACTION;
SELECT * from sys_user;
delete from sys_user where username='wangwu';
COMMIT;
```
我们执行步骤如下：

1. 首先执行 B 窗口的前两行，开启一个事务，同时查询数据库中的数据，此时查询到的数据就只有 `zhangsan` 和 `lisi`。
2. 执行 A 窗口的前两行，向数据库中添加一个名为 `wangwu` 的用户，注意不用提交事务。
3. 执行 B 窗口的第二行，由于脏读问题，此时可以查询到 `wangwu` 这个用户。
4. 执行 B 窗口的第三行，去删除 username 为 wangwu 的记录，这个时候删除就会出问题，虽然在 B 窗口中可以查询到 wangwu，但是这条记录还没有提交，是因为脏读的原因才看到了，所以是没法删除的。此时就产生了幻觉，明明有个 wangwu，却无法删除。

这就是`幻读`。

看了上面的案例，大家应该明白了 `脏读` 、`不可重复读` 以及 `幻读` 各自是什么含义了。

### read committed

和 `read uncommitted` 相比，`read committed` 主要解决了脏读的问题，对于不可重复读和幻象读则未解决。

将事务的隔离级别改为 `read committed` 之后，重复上面关于脏读案例的测试，发现已经不存在脏读问题了；重复上面关于不可重复读案例的测试，发现不可重复读问题依然存在。

上面那个案例不适用于幻读的测试，我们换一个幻读的测试案例。

还是两个窗口 A 和 B，将 B 窗口的隔离级别改为 `read uncommitted`，然后在 A 窗口输入如下测试 SQL：

```sql
START TRANSACTION;
insert into sys_user(username,account) values('wangwu',1000);
COMMIT;
```

在 B 窗口输入如下测试 SQL：

```sql
START TRANSACTION;
SELECT * from sys_user;
insert into sys_user(username,account) values('wangwu',1000);
COMMIT;
```

测试方式如下：

1. 首先执行 B 窗口的前两行 SQL，开启事务并查询数据，此时查到的只有 zhangsan 和 lisi 两个用户。
2. 执行 A 窗口的前两行 SQL，插入一条记录，但是并不提交事务。
3. 执行 B 窗口的第二行 SQL，由于现在已经没有了脏读问题，所以此时查不到 A 窗口中添加的数据。
4. 执行 B 窗口的第三行 SQL，会一直等待，此时就产生幻觉了，明明没有 wangwu 这个用户，却无法插入 zhangsan。直到提交 A 窗口的事务才会报错（Duplicate entry 'wangwu' for key 'username'）

### repeatable read

和 `read committed` 相比，`repeatable read` 进一步解决了不可重复读的问题，但是幻象读则未解决。

`repeatable read` 中关于幻读的测试和上一小节基本一致，不同的是第二步中执行完插入 SQL 后记得提交事务。

由于 `repeatable read` 已经解决了不可重复读，因此第二步即使提交了事务，第三步也查不到已经提交的数据，第四步继续插入就会出错。

**注意，repeatable read 也是 InnoDB 引擎的默认数据库事务隔离级别**

### serializable

`serializable` 提供了事务之间最大限度的隔离，在这种隔离级别中，事务一个接一个顺序的执行，不会发生脏读、不可重复读以及幻象读问题，最安全。

如果设置当前事务隔离级别为 serializable，那么此时开启其他事务时，就会阻塞，必须等当前事务提交了，其他事务才能开启成功，因此前面的脏读、不可重复读以及幻象读问题这里都不会发生。

## 总结

总的来说，隔离级别和脏读、不可重复读以及幻象读的对应关系如下：

![image-20221114223819402](https://img.zxqs.top/image-20221114223819402.png)

性能关系如图：

![image-20221114223852844](https://img.zxqs.top/image-20221114223852844.png)