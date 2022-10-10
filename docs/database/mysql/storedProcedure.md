---
description: 存储过程
autoPrev: view
---

# 存储过程

## 概念
存储过程是一组经过 `预先编译` 的 SQL 语句的封装。调用存储过程可以简化应用开发人员的很多工作，减少数据在数据库和应用服务器之间的传输，对于提高数据处理的效率是很有好处的。

## 分类

存储过程的参数类型可以是 `IN`、`OUT` 和 `INOUT`。分类如下：

1. 没有参数（无参数返回）
2. 仅仅带 IN 类型（有参数无返回）
3. 仅仅带 OUT 类型（无参数有返回）
4. 既带 IN 又带 OUT（有参数有返回）
5. 带 INOUT（有参数有返回）

注意：IN、OUT、INOUT 都可以在一个存储过程中带多个。

## 创建存储过程

### 语法

```sql
CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名 参数类型,...) [characteristics ...] 
BEGIN

  存储过程体 

END
```

1. 参数前面符号的意思
   * IN：当前参数为输入参数，也就是入参；存储过程只是读取这个参数的值。如果没有定义参数种类，`默认就是 IN`，表示输入参数
   * OUT：当前参数为输出参数，执行完成之后调用这个存储过程的客户端或者应用程序就可以读取这个参数返回的值了。
   * INOUT：当前参数既可以为输入参数，也可以为输出参数。

2. 形参类型可以是 MySQL 数据库中任意类型。
3. `characteristics` 表示创建存储过程时指定的对存储过程的约束条件，其取值信息如下：
    ```text
    LANGUAGE SQL 
    | NOT / NOT DETERMINISTIC 
    | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } 
    | SQL SECURITY { DEFINER | INVOKER } 
    | COMMENT 'string'
    ```
   * `LANGUAGE SQL`：说明存储过程执行体是由SQL语句组成的，当前系统支持的语言为SQL
   * `NOT / NOT DETERMINISTIC`：指明存储过程执行的结果是否确定。DETERMINISTIC表示结果是确定的。每次执行存储过程时，相同的输入会得到相同的输出。NOT DETERMINISTIC表示结果是不确定的，相同的输入可能得到不同的输出。如果没有指定任意一个值，默认为NOT DETERMINISTIC。
   * `{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }` ：指明子程序使用SQL语句的限制。
     * CONTAINS SQL：表示当前存储过程的字程序包含SQL语句，但是不包含读写数据的SQL语句
     * NO SQL：表示当前存储过程的子程序中不包含任何SQL语句；
     * READS SQL DATA：表示当前存储过程的子程序中包含读数据的SQL语句；
     * MODIFIES SQL DATA：表示当前存储过程的子程序中包含写数据的SQL语句。
     * 默认情况下，系统会指定为 CONTAINS SQL。
   * `SQL SECURITY { DEFINER | INVOKER }` ：执行当前存储过程的权限，即指明哪些用户能够执行当前存储过程
     * `DEFINER`：表示只有当前存储过程的创建者或者定义者才能执行当前存储过程；
     * `INVOKER`： 表示拥有当前存储过程的访问权限的用户能够执行当前存储过程。
     * 如果没有设置相关的值，则MySQL默认指定值为 `DEFINER`
   * `COMMENT 'string'`：注解信息，可以用来描述存储过程
4. 存储过程体中可以有多条 SQL 语句，如果仅仅一条SQL 语句，则可以省略 `BEGIN` 和 `END`
5. 需要设置新的结束标记
    ```sql
    DELIMITER 新的结束标记
    ```
    因为MySQL默认的语句结束符号为分号 `;` 。为了避免与存储过程中SQL语句结束符相冲突，需要使用DELIMITER改变存储过程的结束符。

    当使用DELIMITER命令时，应该避免使用反斜杠（‘\’）字符，因为反斜线是MySQL的转义字符。
    
    示例：

    ```sql
    DELIMITER $ 
    CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名 参数类型,...) [characteristics ...] 
    BEGINsql
    
    语句1; 
    sql语句2; 
    
    END $
    DELIMITER ;
    ```

    最后还要将结束符给成默认的 `;`

### 代码举例

#### 没有参数

举例1：创建存储过程select_all_data()，查看 employees 表的所有数据

```sql
DELIMITER $ 

CREATE PROCEDURE select_all_data() 
BEGIN
SELECT * FROM departments; 
END $ 

DELIMITER ;
```

调用方式：

```sql
CALL select_all_data();
```
调用其他库中的存储函数，只需要加上库名即可：testDB.select_all_data()

举例2：创建存储过程show_max_salary()，用来查看“employees”表的最高薪资值。
```sql
DELIMITER $

CREATE PROCEDURE show_max_salary() 
LANGUAGE SQL 
NOT DETERMINISTIC 
CONTAINS SQL 
SQL SECURITY DEFINER 
COMMENT '查看最高薪资' 
BEGIN
SELECT MAX(salary) FROM employees; 
END $ 

DELIMITER ;
```
调用存储过程：

```sql
CALL show_max_salary();
```

#### OUT 参数
举例3：创建存储过程show_min_salary()，查看“employees”表的最低薪资值。并将最低薪资通过OUT参数“ms”输出

```sql
DELIMITER // 

CREATE PROCEDURE show_min_salary(OUT ms DOUBLE) 
BEGIN
SELECT MIN(salary) INTO ms FROM employees; 
END // 

DELIMITER ;
```

`SELECT MIN(salary) INTO ms FROM employees;` 的意思是，查询出最低工资，然后赋值给 ms 变量返回。

调用存储过程：

```sql
# 调用
CALL show_min_salary(@ms)

# 查看变量值，执行此命令才能看到最低工资
SELECT @ms
```

#### IN 参数

举例4：创建存储过程show_someone_salary()，查看“employees”表的某个员工的薪资，并用IN参数empname输入员工姓名。

```sql
DELIMITER // 

CREATE PROCEDURE show_someone_salary(IN empname VARCHAR(20)) 
BEGIN
SELECT salary FROM employees WHERE last_name = empname; 
END // 

DELIMITER ;
```

调用方式1：

```sql
CALL show_someone_salary('Austin')
```

调用方式2：
```sql
set @empname := 'Austin';
CALL show_someone_salary(@empname);
```

#### IN 参数和 OUT 参数

举例5：创建存储过程 show_someone_salary2()，查看employees 表中某个员工的薪资，并用IN参数 empname输入员工姓名，用 OUT参数empsalary输出员工薪资。

```sql
DELIMITER //

CREATE PROCEDURE show_someone_salary2(IN empname VARCHAR(20),OUT empsalary DOUBLE) 
BEGIN
SELECT salary INTO empsalary FROM employees WHERE last_name = empname; 
END // 

DELIMITER ;
```

调用：

```sql
SET @empname = 'Austin';
CALL show_someone_salary2(@empname,@empsalary);

SELECT @empsalary;
```

#### INOUT 参数

举例6：创建存储过程show_mgr_name()，查询某个员工领导的姓名，并用INOUT参数“empname”输入员工姓名，输出领导的姓名。

```sql
DELIMITER //

CREATE PROCEDURE show_mgr_name(INOUT empname VARCHAR(20))
BEGIN

SELECT last_name INTO empname
FROM employees
WHERE employee_id = (
								SELECT manager_id FROM employees WHERE last_name = empname
);
END //

DELIMITER ;
```

调用：

```sql
SET @empname = 'Abel';
CALL show_mgr_name(@empname);

SELECT @empname;
```

## 优缺点

### 优点

1. 存储过程是通过处理封装在容易使用的单元中，简化了复杂的操作。
2. 简化对变动的管理。如果表名、列名、或业务逻辑有了变化。只需要更改存储过程的代码。使用它的人不用更改自己的代码。
3. 通常存储过程都是有助于提高应用程序的性能。当创建的存储过程被编译之后，就存储在数据库中。但是，MySQL实现的存储过程略有所不同。MySQL存储过程是按需编译。在编译存储过程之后，MySQL将其放入缓存中。MySQL为每个连接维护自己的存储过程高速缓存。如果应用程序在单个连接中多次使用存储过程，则使用编译版本，否则存储过程的工作方式类似于查询。
4. 存储过程有助于减少应用程序和数据库服务器之间的流量。因为应运程序不必发送多个冗长的SQL语句，只用发送存储过程中的名称和参数即可。
5. 存储过程度任何应用程序都是可重用的和透明的。存储过程将数据库接口暴露给所有的应用程序，以方便开发人员不必开发存储过程中已支持的功能。
6. 存储的程序是安全的。数据库管理员是可以向访问数据库中存储过程的应用程序授予适当的权限，而不是向基础数据库表提供任何权限。

### 缺点

1. 可移植性差。存储过程不能跨数据库移植，比如在 MySQL、Oracle 和 SQL Server 里编写的存储过程，在换成其他数据库时都需要重新编写。
2. 调试困难。只有少数 DBMS 支持存储过程的调试。对于复杂的存储过程来说，开发和维护都不容易。虽然也有一些第三方工具可以对存储过程进行调试，但要收费。
3. 存储过程的版本管理很困难。比如数据表索引发生变化了，可能会导致存储过程失效。我们在开发软件的时候往往需要进行版本管理，但是存储过程本身没有版本控制，版本迭代更新的时候很麻烦。
4. 它不适合高并发的场景。高并发的场景需要减少数据库的压力，有时数据库会采用分库分表的方式，而且对可扩展性要求很高，在这种情况下，存储过程会变得难以维护， 增加数据库的压力 ，显然就不适用了。
