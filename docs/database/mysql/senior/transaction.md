---
title: MySQL 事务隔离级别
autoPrev: join
---

# MYSQL 事务隔离级别和MVCC

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

## MVCC

### 版本链

对于 InnoDB 存储引擎的表来说，它的聚簇索引记录中都包含两个必要的隐藏列（ row_id 并不是必要的，我们创建的表中有主键或者非NULL的UNIQUE键时都不会包含 row_id 列）：

* trx_id：每次一个事务对某条聚簇索引记录进行改动时，都会把事务的 `事务ID` 赋值给 `trx_id` 隐藏列。
* roll_pointer：每次对某条聚簇索引记录进行改动时，都会把旧的版本写入 `undo日志` 中，然后这个隐藏列就相当于一个指针，可以通过它来找到该记录前的信息。

比方说我们的表 hero 现在只包含一条记录：

mysql> SELECT * FROM hero;
+--------+--------+---------+
| number | name | country |
+--------+--------+---------+
| 1 | 刘备 | 蜀 |
+--------+--------+---------+
1 row in set (0.07 sec)

假设插入该记录的 `事务id` 为 80，那么此刻该条记录的示意图如下所示：

![image-20230228144534270](https://img.zxqs.top/20230228144535.png)

每次对记录进行改动，都会记录一条 `undo日志` ，每条 `undo日志` 也都有一个 `roll_pointer` 属性（`INSERT` 操作
对应的 `undo日志` 没有该属性，因为该记录并没有更早的版本），可以将这些 `undo日志` 都连起来，串成一个链
表，所以现在的情况就像下图一样：

![image-20230228145228656](https://img.zxqs.top/20230228145229.png)

对该记录每次更新后，都会将旧值放到一条 `undo日志` 中，就算是该记录的一个旧版本，随着更新次数的增多，所有的版本都会被 `roll_pointer` 属性连接成一个链表，我们把这个链表称之为 版本链 ，`版本链的头节点就是当前记录最新的值`。另外，每个版本中还包含生成该版本时对应的 事务id ，这个信息很重要，我们稍后就会用到。

### ReadView

对于使用 READ UNCOMMITTED（读未提交）隔离级别的事务来说，由于可以`读到未提交事务修改过的记录`，所以直接读取记录的最新版本就好了；对于使用 SERIALIZABLE（串行化）隔离级别的事务来说，规定使用加锁的方式来访问记录；对于使用 `READCOMMITTED` 和 `REPEATABLE READ` 隔离级别的事务来说，都必须保证读到`已经提交了的事务，修改过的记录`，也就是说假如另一个事务已经修改了记录但是尚未提交，是不能直接读取最新版本的记录的，核心问题就是：`需要判断一下版本链中的哪个版本是当前事务可见的`。此时 ReadView 就出现了，ReadView 中主要包含4个比较重要的内容：

* m_ids：在生成 ReadView 时，当前系统中活跃的读写事务的 `事务id` 列表，就是未提交的事务列表。
* min_trx_id：表示在生成 ReadView 时，当前系统中活跃的读写事务中最小的 `事务id`，也就是 `m_ids` 中的最小值。
* max-trx_id：表示生成 ReadView 时系统中应该分配给下一个事务的 id 值
  *  注意max_trx_id并不是m_ids中的最大值，事务id是递增分配的。比方说现在有id为1，2，3这三个事务，之后id为3的事务提交了。那么一个新的读事务在生成ReadView时，m_ids就包括1和2，min_trx_id的值就是1，max_trx_id的值就是4。
* create_trx_id：表示生成该 ReadView 的`事务id`。只有在对表中的记录做改动时（执行INSERT、DELETE、UPDATE这些语句时）才会为事务分配事务id，否则在一个只读事务中的事务id值都默认为0。

有了这个 ReadView，这样在访问某条记录时，只需要按照下边的步骤判断记录的某个版本是否可见：

* 如果被访问版本的 `trx_id` 属性值与 ReadView 中的 `create_trx_id`，意味着当前事务在访问它自己修改过的记录，所以该版本可以被当前事务访问。
* 如果被访问版本的 `trx_id` 属性值小于 ReadView 中的 `min_trx_id`，表明生成该版本的事务在当前事务生成 ReadView 前已经提交，所以该版本可以被当前事务访问。
* 如果被访问版本的 `trx_id` 属性值大于 ReadView 中的 `max_trx_id`值，表明生成该版本的事务在当前事务生成 ReadView 后才开启，所以该版本不可以被当前事务访问。
* 如果被访问版本的 `trx_id` 属性值在 `ReadView` 的 `min_trx_id` 和 `max_trx_id` 之间，那就需要判断一下 `trx_id` 属性值是不是在 `m_ids` 列表中，如果在，说明创建 `ReadView` 时生成该版本的事务还是活跃的，该版本不可以被访问；如果不在，说明创建 ReadView 时生成该版本的事务已经被提交，该版本可以被访问。

如果某个版本的数据对当前事务不可见的话，那就顺着版本链找到下一个版本的数据，继续按照上边的步骤判断可见性，依此类推，直到版本链中的最后一个版本。如果最后一个版本也不可见的话，那么就意味着该条记录对该事务完全不可见，查询结果就不包含该记录。

在 MySQL 中， `READ COMMITTED` 和 `REPEATABLE READ` 隔离级别的的一个非常大的区别就是`它们生成ReadView的时机不同`。我们还是以表 hero 为例来，假设现在表 hero 中只有一条由 `事务id` 为 80 的事务插入的一条记录：

mysql> SELECT * FROM hero;
+--------+--------+---------+
| number | name | country |
+--------+--------+---------+
| 1 | 刘备 | 蜀 |
+--------+--------+---------+
1 row in set (0.07 sec)

接下来看一下 READ COMMITTED（读已提交） 和 REPEATABLE READ（可重复读）所谓的 `生成 ReadView 的时机不同`到底不同在那里。

**READ COMMITTED --- 每次读取数据都生成一个 ReadView**

比方说现在系统有两个 `事务id` 分别为 100、200 的事务在执行：

```sql
-- Transaction 100
BEGIN;
UPDATE hero SET name = '关羽' WHERE number = 1;
UPDATE hero SET name = '张飞' WHERE number = 1;

-- Transaction 200
BEGIN;
-- 更新了一些别的表的记录
...
```
事务执行过程中，只有在第一次真正修改记录时（比如使用INSERT、DELETE、UPDATE语句），才会被分配一个单独的事务id，这个事务id是递增的。所以我们才在Transaction 200中更新一些别的表的记录，目的是让它分配事务id。

此刻，表 hero 中 number 为 1 的记录得到的版本链表如下所示：

![image-20230228165001636](https://img.zxqs.top/20230228165002.png)

假设现在有一个使用 READ COMMITTED 隔离级别的事务开始执行：

```sql
-- 使用READ COMMITTED隔离级别的事务
BEGIN;

-- SELECT1：Transaction 100、200未提交
SELECT * FROM hero WHERE number = 1; # 得到的列name的值为'刘备'
```

这个 SELECT1 的执行过程如下：
* 在执行 `SELECT` 语句时会先生成一个 `ReadView` ， `ReadView` 的 `m_ids` 列表的内容就是 `[100, 200]` ，`min_trx_id` 为 100 ， `max_trx_id` 为 201 ， `creator_trx_id` 为 0 。
* 然后从版本链中挑选可见的记录，从图中可以看出，最新版本的列 name 的内容是 '张飞' ，该版本的trx_id 值为 100 ，在 m_ids 列表内，所以不符合可见性要求，根据 roll_pointer 跳到下一个版本。
* 下一个版本的列 name 的内容是 '关羽' ，该版本的 trx_id 值也为 100 ，也在 m_ids 列表内，所以也不符合要求，继续跳到下一个版本。
* 下一个版本的列 name 的内容是 '刘备' ，该版本的 trx_id 值为 80 ，小于 ReadView 中的 min_trx_id 值 100 ，所以这个版本是符合要求的，最后返回给用户的版本就是这条列 name 为 '刘备' 的记录。

之后，我们把 事务id 为 100 的事务提交一下，就像这样：

```sql
-- Transaction 100
BEGIN;
UPDATE hero SET name = '关羽' WHERE number = 1;
UPDATE hero SET name = '张飞' WHERE number = 1;
COMMIT;
```

然后再到 事务id 为 200 的事务中更新一下表 hero 中 number 为 1 的记录：

```sql
-- Transaction 200
BEGIN;
-- 更新了一些别的表的记录
...
UPDATE hero SET name = '赵云' WHERE number = 1;
UPDATE hero SET name = '诸葛亮' WHERE number = 1;
```

此刻，表 hero 中 number 为 1 的记录的版本链就长这样：

![image-20230228170743473](https://img.zxqs.top/20230228170744.png)

然后再到刚才使用 READ COMMITTED 隔离级别的事务中继续查找这个 number 为 1 的记录，如下：

```sql
-- 使用READ COMMITTED隔离级别的事务
BEGIN;
-- SELECT1：Transaction 100、200均未提交
SELECT * FROM hero WHERE number = 1; # 得到的列name的值为'刘备'


-- SELECT2：Transaction 100提交，Transaction 200未提交
SELECT * FROM hero WHERE number = 1; # 得到的列name的值为'张飞'
```

这个 SELECT2 的执行过程如下：

* 在执行 SELECT 语句时会`又会单独生成`一个 ReadView ，该 ReadView 的 m_ids 列表的内容就是 [200] （ 事务id 为 100 的那个事务已经提交了，所以再次生成快照时就没有它了）， min_trx_id 为 200 ，max_trx_id 为 201 ， creator_trx_id 为 0 。
* 然后从版本链中挑选可见的记录，从图中可以看出，最新版本的列 name 的内容是 '诸葛亮' ，该版本的trx_id 值为 200 ，在 m_ids 列表内，所以不符合可见性要求，根据 roll_pointer 跳到下一个版本。
* 下一个版本的列 name 的内容是 '赵云' ，该版本的 trx_id 值为 200 ，也在 m_ids 列表内，所以也不符合要求，继续跳到下一个版本。
* 下一个版本的列 name 的内容是 '张飞' ，该版本的 trx_id 值为 100 ，小于 ReadView 中的 min_trx_id 值200 ，所以这个版本是符合要求的，最后返回给用户的版本就是这条列 name 为 '张飞' 的记录。


以此类推，如果之后 事务id 为 200 的记录也提交了，再此在使用 READ COMMITTED 隔离级别的事务中查询表
hero 中 number 值为 1 的记录时，得到的结果就是 '诸葛亮' 了，具体流程我们就不分析了。

**总结一下就是：使用READ COMMITTED隔离级别的事务在每次查询开始时都会生成一个独立的ReadView。**


**REPEATABLE READ —— 在第一次读取数据时生成一个ReadView**

对于使用 `REPEATABLE READ（可重复读）` 隔离级别的事务来说，只会在第一次执行查询语句时生成一个 ReadView ，之后的查询就不会重复生成了。我们还是用例子看一下是什么效果。

比方说现在系统里有两个 事务id 分别为 100 、 200 的事务在执行：

```sql
# Transaction 100
BEGIN;
UPDATE hero SET name = '关羽' WHERE number = 1;
UPDATE hero SET name = '张飞' WHERE number = 1;
# Transaction 200
BEGIN;
# 更新了一些别的表的记录
...
```

此刻，表 hero 中 number 为 1 的记录得到的版本链表如下所示：

![image-20230228173059341](https://img.zxqs.top/20230228173100.png)

假设现在有一个使用 REPEATABLE READ 隔离级别的事务开始执行：

```sql
# 使用REPEATABLE READ隔离级别的事务
BEGIN;
# SELECT1：Transaction 100、200未提交
SELECT * FROM hero WHERE number = 1; # 得到的列name的值为'刘备'
```

这个 SELECT1 的执行过程如下：

* 在执行 SELECT 语句时会先生成一个 ReadView ， ReadView 的 m_ids 列表的内容就是 [100, 200] ，min_trx_id 为 100 ， max_trx_id 为 201 ， creator_trx_id 为 0 。
* 然后从版本链中挑选可见的记录，从图中可以看出，最新版本的列 name 的内容是 '张飞' ，该版本的trx_id 值为 100 ，在 m_ids 列表内，所以不符合可见性要求，根据 roll_pointer 跳到下一个版本。
* 下一个版本的列 name 的内容是 '关羽' ，该版本的 trx_id 值也为 100 ，也在 m_ids 列表内，所以也不符合要求，继续跳到下一个版本。
* 下一个版本的列 name 的内容是 '刘备' ，该版本的 trx_id 值为 80 ，小于 ReadView 中的 min_trx_id 值 100 ，所以这个版本是符合要求的，最后返回给用户的版本就是这条列 name 为 '刘备' 的记录。

之后，我们把 事务id 为 100 的事务提交一下

然后再到 事务id 为 200 的事务中更新一下表 hero 中 number 为 1 的记录：

```sql
# Transaction 200
BEGIN;
# 更新了一些别的表的记录
...
UPDATE hero SET name = '赵云' WHERE number = 1;
UPDATE hero SET name = '诸葛亮' WHERE number = 1;
```

此刻，表 hero 中 number 为 1 的记录的版本链就长这样：

![image-20230228173315776](https://img.zxqs.top/20230228173316.png)

然后再到刚才使用 REPEATABLE READ 隔离级别的事务中继续查找这个 number 为 1 的记录，如下：
```sql
# 使用REPEATABLE READ隔离级别的事务
BEGIN;
# SELECT1：Transaction 100、200均未提交
SELECT * FROM hero WHERE number = 1; # 得到的列name的值为'刘备'
# SELECT2：Transaction 100提交，Transaction 200未提交
SELECT * FROM hero WHERE number = 1; # 得到的列name的值仍为'刘备'
```
这个 SELECT2 的执行过程如下：

* 因为当前事务的隔离级别为 REPEATABLE READ ，而之前在执行 SELECT1 时已经生成过 ReadView 了，所以此时直接复用之前的 ReadView ，之前的 ReadView 的 m_ids 列表的内容就是 [100, 200] ， min_trx_id 为100 ， max_trx_id 为 201 ， creator_trx_id 为 0 。
* 然后从版本链中挑选可见的记录，从图中可以看出，最新版本的列 name 的内容是 '诸葛亮' ，该版本的trx_id 值为 200 ，在 m_ids 列表内，所以不符合可见性要求，根据 roll_pointer 跳到下一个版本。
* 下一个版本的列 name 的内容是 '赵云' ，该版本的 trx_id 值为 200 ，也在 m_ids 列表内，所以也不符合要求，继续跳到下一个版本。
* 下一个版本的列 name 的内容是 '张飞' ，该版本的 trx_id 值为 100 ，而 m_ids 列表中是包含值为 100 的事务id 的，所以该版本也不符合要求，同理下一个列 name 的内容是 '关羽' 的版本也不符合要求。继续跳到下一个版本。
* 下一个版本的列 name 的内容是 '刘备' ，该版本的 trx_id 值为 80 ，小于 ReadView 中的 min_trx_id 值 100 ，所以这个版本是符合要求的，最后返回给用户的版本就是这条列 c 为 '刘备' 的记录。

也就是说两次 SELECT 查询得到的结果是重复的，记录的列 c 值都是 '刘备' ，这就是 可重复读 的含义。如果我们之后再把 事务id 为 200 的记录提交了，然后再到刚才使用 REPEATABLE READ 隔离级别的事务中继续查找这个 number 为 1 的记录，得到的结果还是 '刘备' ，具体执行过程大家可以自己分析一下。

### MVCC小结

从上边的描述中我们可以看出来，所谓的 MVCC （Multi-Version Concurrency Control ，多版本并发控制）指的就是在使用 READ COMMITTD 、 REPEATABLE READ 这两种隔离级别的事务在执行普通的 SEELCT 操作时访问记录的版本链的过程，这样子可以使不同事务的 `读-写` 、 `写-读` 操作并发执行，从而提升系统性能。 

READ COMMITTD 、REPEATABLE READ 这两个隔离级别的一个很大不同就是：

**生成ReadView的时机不同，READ COMMITTD在每一次进行普通SELECT操作前都会生成一个ReadView，而REPEATABLE READ只在第一次进行普通SELECT操作前生成一个ReadView，之后的查询操作都重复使用这个ReadView就好了。**







