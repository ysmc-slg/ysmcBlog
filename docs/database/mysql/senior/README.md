---
description: 用户与权限管理
---
# 用户与权限管理

MySQL 进阶是在centiOS中安装的MySQL

## 用户管理

### 创建用户

语法如下：

```sql
CREATE USER 用户名 [IDENTIFIED BY '密码'][,用户名 [IDENTIFIED BY '密码']];
```
* 用户名参数表示新建用户的账户，由 `用户（User）` 和 `主机名（Host）` 构成。
* `[]` 表示可选，也就是说，可以指定用户登录是需要密码验证，也可以不指定密码验证。
* `CREATE USER` 语句可以同时创建多个用户

```sql
CREATE USER zhangsan IDENTIFIED BY '123';    #默认 host 是 `%`

CREATE USER 'lisi'@'localhost' IDENTIFIED BY '123';
```

### 修改用户

修改用户名
```sql
update mysql.user set user = 'wangwu' where user = 'lisi';

FLUSH PRIVILEGES;
```
必须使用 `FLUSH PRIVILEGES` 刷新，否则不生效。

### 删除用户

#### 方式一：使用 drop 方式删除（推荐）

语法：

```sql
DROP USER user[,user]…;
```

```sql
drop user zhangsan;

drop user 'lisi'@'localhost'
```

#### 方式二：使用 delete 删除

```sql
DELETE FROM mysql.user WHERE Host='hostname' AND User='username';
FLUSH PRIVILEGES;
```
执行完DELETE命令后要使用FLUSH命令来使用户生效

::: tip 注意

不推荐通过 `DELETE` 进行删除，系统会有残留信息保留。而 `drop user` 命令会删除用户以及对应的权限，执行命令后你会发现 mysql.user 表和 mysql.db 表的相应记录都消失了。

:::

### 修改当前用户密码

语法：

```sql
alter user user() identified by 'new_password';
```
当前用户登录后修改，修改成功后需要退出后生效。

### 修改其他用户密码

前提是root账号登录，或者有修改其他用户的权限。

语法：
```sql
alter user 'user'@'host' identified by 'new_password';
```

```sql
alter user 'zhangsan'@'localhost' identified by 'abc';
```

## MySQL 8 密码管理


### 密码过期策略
* 在 MySQL 中，数据库管理员可以 `手动设置账号密码过期`，也可以建立一个 `自动密码过期策略`
* 过期策略可以是全局的，也可以为每个账号设置单独的过期策略。

**设置密码立即过期**

语法格式：
```sql
alter user user password expire;
```
练习：将用户zhangsan账号的密码设置为过期

```sql
alter user 'zhangsan'@'localhost' password expire;
```

该语句将用户 zhangsan 的密码设置为过期，zhangsan 用户仍然可以登录数据库，但是无法进行查询。密码过期后，只有重新设置了新密码，才能正常使用。

**指定时间，密码过期方式1（全局）：**

如果密码使用的时间大于允许的时间，服务器会自动设置为过期，不需要手动设置。

MySQL 使用 `default_password_lifetime` 系统变量建立全局密码过期策略。
* `default_password_lifetime` 默认值是0，表示禁用自动密码过期
* 允许的值是正整数N，表示允许的密码生存期，密码必须 `每隔N天` 进行修改。

有两种方式可以修改 `default_password_lifetime` 的值，方式如下：
* 方式一：通过 SQL 更改该变量的值并持久化
  ```sql
  # 建立全局策略，设置密码每隔 180天过期
  set persist default_password_lifetime = 180;
  ```
* 方式二：配置文件 `my.cnf` 中进行维护
  ```text
  default_password_lifetime=180
  ```

**指定时间，过期方式2（单独设置）：**

每个账号既可延用全局密码过期策略，可以单独设置策略。在 `create user` 和 `alter user` 语句上加入 `password expire` 选项可实现单独设置策略。下面是一些语句示例。

```sql
# 设置 zhangsan 账号密码过期时间为90天
create user 'zhangsan'@'localhost' password expire intetval 90 day;
alter user 'zhangsan'@'localhost' password expire intetval 90 day;

# 设置密码永不过期
create user 'zhangsan'@'localhost' password expire never;
alter user 'zhangsan'@'localhost' password expire never;
```

### 密码重用策略

MySQL 限制使用以使用过的密码。重用限制策略基于 `密码更改的数量` 和 `使用的时间`。重用策略可以是全局的，也可以为每个账号设置单独的策略。

* 账号的历史密码包含过去该账号所使用的密码。MySQL基于以下规则来限制密码重用：
  * 如果账号的密码限制 `基于新密码更改的数量` ，那么新密码不能从最近限制的密码数量中选择。例如，如果密码更改的最小值为3，那么新密码不能与最近3个密码中任何一个相同。
  * 如果账号密码限制 `基于时间`， 那么新密码不能从规定时间内选择。例如，如果密码重用周期为60天，那么新密码不能从最近60天内使用的密码中选择。

* MySQL使用 `password_history` 和 `password_reuse_interval` 系统变量设置密码重用策路。
  * `password_history`:规定密码重用的数量
  * `password_reuse_interval`：规定密码重用的周期
* 这两个值可在 `服务器的配置文件` 中进行维护，也可在运行期间使用 SQL 语句更改变量的值并持久化

**设置密码重用方式 1（全局）：**

1. 方式1：使用 SQL
   ```sql
   -- 设置不能选择最近使用过的6个密码
   set persist password_history = 6;

   -- 设置不能选择最近一年内的密码
   set persist password_reuse_interval = 365;
   ```
2. 方式2：my.cnf 配置文件
   ```text
   password_history=6
   password_reuse_interval = 365
   ```

**设置密码重用方式 2（单独设置）**

```sql
#不能使用最近5个密码： 
CREATE USER 'zhangsan'@'localhost' PASSWORD HISTORY 5; 
ALTER USER 'zhangsan'@'localhost' PASSWORD HISTORY 5; 

#不能使用最近365天内的密码： 
CREATE USER 'zhangsan'@'localhost' PASSWORD REUSE INTERVAL 365 DAY; 
ALTER USER 'zhangsan'@'localhost' PASSWORD REUSE INTERVAL 365 DAY; 

#既不能使用最近5个密码，也不能使用365天内的密码 
CREATE USER 'zhangsan'@'localhost' 
PASSWORD HISTORY 5 
PASSWORD REUSE INTERVAL 365 DAY; 

ALTER USER 'zhangsan'@'localhost'
PASSWORD HISTORY 5 
PASSWORD REUSE INTERVAL 365 DAY;
```

## 权限管理

### 权限列表

```sql
-- 查看 mysql 所有的权限
show privileges;
```

![privileges](http://img.zxqs.top/20221011161154.png)

1. CREATE和DROP权限 ，可以创建新的数据库和表，或删除（移掉）已有的数据库和表。如果将 MySQL数据库中的DROP权限授予某用户，用户就可以删除MySQL访问权限保存的数据库。
2. SELECT、INSERT、UPDATE和DELETE权限 允许在一个数据库现有的表上实施操作。
3. SELECT权限 只有在它们真正从一个表中检索行时才被用到。
4. INDEX权限 允许创建或删除索引，INDEX适用于已 有的表。如果具有某个表的CREATE权限，就可以在CREATE TABLE语句中包括索引定义。
5. ALTER权 限 可以使用ALTER TABLE来更改表的结构和重新命名表。
6. CREATE ROUTINE权限 用来创建保存的 程序（函数和程序），ALTER ROUTINE权限用来更改和删除保存的程序， EXECUTE权限 用来执行保存的 程序。
7. GRANT权限 允许授权给其他用户，可用于数据库、表和保存的程序。
8. FILE权限 使用 户可以使用LOAD DATA INFILE和SELECT ... INTO OUTFILE语句读或写服务器上的文件，任何被授予FILE权 限的用户都能读或写MySQL服务器上的任何文件（说明用户可以读任何数据库目录下的文件，因为服务 器可以访问这些文件）。

### 授予权限的原则


