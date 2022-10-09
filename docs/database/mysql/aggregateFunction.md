---
description: 聚合函数
autoPrev: function
---

# 聚合函数

聚合函数作用于一组数据，并对一组数据返回一个值。

![image-20220927164559691](http://img.zxqs.top/20220927164608.png)


## AVG 和 SUM 函数

注意：AVG/SUM 只适用于数值类型的字段

```sql
SELECT AVG(salary),SUM(salary),AVG(salary) * 107 FROM employees;

-- 如下的操作没有意义
SELECT SUM(last_name),AVG(last_name),SUM(hire_date) FROM employees;
```

## MIN 和 MAX 函数

MAX / MIN :适用于数值类型、字符串类型、日期时间类型的字段（或变量）

```sql
SELECT MAX(salary),MIN(salary) FROM employees;

SELECT MAX(last_name),MIN(last_name),MAX(hire_date),MIN(hire_date) FROM employees;
```

## COUNT() 函数

计算指定字段在查询结构中出现的个数（不包含NULL值的）

```sql
SELECT COUNT(employee_id),COUNT(salary),COUNT(2 * salary),COUNT(1),COUNT(2),COUNT(*) FROM employees ;
```

## GROUP BY() 分组函数

语法：

```text
SELECT column, group_function(column) 
FROM table 
[WHERE condition] 
[GROUP BY group_by_expression] 
[ORDER BY column];
```

```sql
SELECT department_id,AVG(salary),SUM(salary) 
FROM employees
GROUP BY department_id
```

```sql
SELECT department_id,job_id,AVG(salary)
FROM employees
GROUP BY  department_id,job_id;
```
::: tip 注意

1. where 一定要放在 from 后面。

2. select 后面出现的 `非聚合函数` 的字段，必须声明在 GROUP BY 中。GROUP BY 中声明的字段可以不出现在SELECT中。

:::


`WITH ROLLUP`：在查询出的分组记录之后增加一条记录，该记录计算查询出的所有记录的总和，即统计记录数量

```sql
SELECT COALESCE(department_id,'总和'),SUM(salary) sum
FROM employees
WHERE department_id is not null
GROUP BY department_id WITH ROLLUP;
```

::: tip 注意

当使用ROLLUP时，不能同时使用ORDER BY子句进行结果排序，即ROLLUP和ORDER BY是互相排斥的。

:::


**HAVING**

```sql
SELECT department_id,MAX(salary)
FROM employees
GROUP BY department_id
HAVING MAX(salary) > 10000;
```

使用 `HAVING` 有几个注意事项：

1. HAVING 不能单独使用，必须要跟 GROUP BY 一起使用。
2. 如果过滤条件需要聚合函数，必须将过滤条件写在 `HAVING` 后面，不能写在 where 后面，否则报错
3. HAVING 必须声明在 GROUP BY 的后面。

```sql
-- 错误的写法：
SELECT department_id,MAX(salary)
FROM employees
WHERE MAX(salary) > 10000
GROUP BY department_id;
```

**WHERE 和 HAVING 的对比**

1. WHERE 可以直接使用表中的字段作为筛选条件，但不能使用分组中的计算函数作为筛选条件；HAVING 必须要与 GROUP BY 配合使用，可以把分组计算的函数和分组字段作为筛选条件。
2. 如果需要通过连接从关联表中获取需要的数据，WHERE 是先筛选后连接，而 HAVING 是先连接后筛选。
3. 如果过滤条件中没有聚合函数：这种情况下，WHERE的执行效率要高于HAVING


