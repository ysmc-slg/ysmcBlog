---
description: 视图
autoPrev: subquery
---

# 视图

## 视图的概念

* 视图是一种 `虚拟表`，本身是 `不具有数据的`，作为一个select语句保存在数据字典中的。占用很少的内存空间，他是SQL中的一个重要概念。
* 视图建立在已有表的基础上，视图赖以建立的这些表成为基表。
  ![image-20221009105029763](http://img.zxqs.top/20221009105038.png)
* 视图的创建和删除只影响视图本身，不影响对应的基表。但是当对视图中的数据进行增加、删除和修改操作时，数据表中的数据会相应地发生变化，反之亦然。

## 使用视图的原因

1. 简单：使用视图的用户完全不需要关心后面对应的表的结构、关联条件和筛选条件、对用户来说已经是过滤好的符合条件的结果集
2. 数据独立：一旦视图的结构确定了，可以屏蔽表结构变化对用户的影响，源表增加列对视图没有影响；源表修改列名，则可以通过修改视图来解决，不会造成对访问者的影响。

## 创建视图

语法格式：

```sql
CREATE VIEW 视图名称 AS select语句
```

::: tip 注意

* 视图名：指定视图的名称，该名称在数据库中必须是惟一的，不能与其他视图重名
* select语句：指定创建视图的 SELECT 语句，可用于查询多个基础表或源视图。

对于创建视图中的 SELECT 语句的指定存在以下限制：

1. 用户除了拥有 CREATE VIEW 权限外，还具有操作中涉及的基础表和其他视图的相关权限。
2. SELECT 语句不能引用系统或用户变量。
3. SELECT 语句不能包含 FROM 子句中的子查询。
4. SELECT 语句不能引用预处理语句参数。

:::

### 创建单表视图

**案例一：**

```sql
CREATE VIEW empvu80 
AS
SELECT employee_id, last_name, salary 
FROM employees 
WHERE department_id = 80;
```

查询视图：

```sql
select * from empvu80;
```

**案例二：**

```sql
CREATE VIEW salvu50 
AS
SELECT employee_id ID_NUMBER, last_name NAME,salary*12 ANN_SALARY 
FROM employees 
WHERE department_id = 50;
```

在创建视图时，没有在视图名后面指定字段列表，则视图中字段列表默认和SELECT语句中的字段列表一致。如果SELECT语句中给字段取了别名，那么视图中的字段名和别名相同。

### 创建多表联合视图

```sql
CREATE VIEW 
empview 
AS 
SELECT employee_id emp_id,last_name NAME,department_name 
FROM employees e,departments d 
WHERE e.department_id = d.department_id;
```

```sql
CREATE VIEW emp_dept 
AS
SELECT ename,dname 
FROM t_employee LEFT JOIN t_department 
ON t_employee.did = t_department.did;
```

## 查看视图

查看数据库的表对象、视图对象：

```sql
show tables;
```

查看视图的结构：
```text
DESC / DESCRIBE 视图名称
```

查询视图的详细定义信息：
```text
show create view 视图名称
```

## 更新视图的数据

### 一般情况

MySQL支持使用INSERT、UPDATE和DELETE语句对视图中的数据进行插入、更新和删除操作。当视图中的数据发生变化时，数据表中的数据也会发生变化，反之亦然。

```sql
UPDATE emp_tel SET tel = '13789091234' WHERE ename = '孙洪亮';
```
跟普通表语法是一样的这里就不赘述了。

### 不可更新的视图

要使视图可更新，视图中的行和底层基本表中的行之间必须存在 一对一 的关系。另外当视图定义出现如下情况时，视图不支持更新操作：

* 在定义视图的时候指定了“ALGORITHM = TEMPTABLE”，视图将不支持INSERT和DELETE操作；
* 视图中不包含基表中所有被定义为非空又未指定默认值的列，视图将不支持INSERT操作；
* 在定义视图的SELECT语句中使用了 JOIN联合查询 ，视图将不支持INSERT和DELETE操作；
* 在定义视图的SELECT语句后的字段列表中使用了 数学表达式 或 子查询 ，视图将不支持INSERT，也
* 不支持UPDATE使用了数学表达式、子查询的字段值；
* 在定义视图的SELECT语句后的字段列表中使用 DISTINCT 、 聚合函数 、 GROUP BY 、 HAVING 、 UNION 等，视图将不支持INSERT、UPDATE、DELETE；
* 在定义视图的SELECT语句中包含了子查询，而子查询中引用了FROM后面的表，视图将不支持 INSERT、UPDATE、DELETE；
* 视图定义基于一个 不可更新视图 ；

::: tip 注意

虽然可以更新视图数据，但总的来说，视图作为 虚拟表 ，主要用于 方便查询 ，不建议更新视图的数据。**对视图数据的更改，都是通过对实际数据表里数据的操作来完成的。**

:::

## 修改、删除视图

### 修改视图

```text
ALTER VIEW 视图名称 
AS
查询语句
```

```sql
ALERT VIEW empvu80 
AS
SELECT employee_id, last_name, salary,email
FROM employees 
WHERE department_id = 80;
```

### 删除视图

```sql
drop view empvu80;
```
