---
description: 多表查询
autoPrev: README
---

# 多表查询

## 内连接（inner join）

语法：

```sql
SELECT 字段列表 
FROM A表 INNER JOIN B表 
ON 关联条件 
WHERE 等其他子句;
```

inner 可以省略，所以也可以写成这样

```sql
SELECT 字段列表 
FROM A表 JOIN B表 
ON 关联条件 
WHERE 等其他子句;
```

## 外连接（outer join）

### 左外连接（left outer join）

outer 也是可以省略的

```sql
-- 实现查询结果是A 
SELECT 字段列表 
FROM A表 LEFT JOIN B表 
ON 关联条件 
WHERE 等其他子句;
```

```sql
SELECT e.last_name, e.department_id, d.department_name 
FROM employees e 
LEFT OUTER JOIN departments d 
ON e.department_id = d.department_id;
```

### 右外连接（right outer join）

语法：

```sql
SELECT 字段列表 
FROM A表 RIGHT JOIN B表 
ON 关联条件 
WHERE 等其他子句;
```

举例：

```sql
SELECT e.last_name, e.department_id, d.department_name 
FROM employees e 
RIGHT OUTER JOIN departments d 
ON e.department_id = d.department_id;
```

## union

**合并查询结果**利用 `UNION` 关键字，可以给出多条 `SELECT` 语句，并将它们的结果组合成单个结果集。合并时，两个表对应的列数和数据类型必须相同，并且相互对应。各个SELECT语句之间使用 `UNION` 或 `UNION ALL` 关键字分隔。

语法格式：

```sql
SELECT column,... FROM table1 
UNION [ALL] 
SELECT column,... FROM table2
```

### UNION操作符

UNION 操作符返回两个查询的结果集的并集，去除重复记录。

![UNION](http://img.zxqs.top/20220918200110.png)

### UNION ALL操作符

![UNION-ALL](http://img.zxqs.top/20220918200201.png)

UNION ALL操作符返回两个查询的结果集的并集。对于两个结果集的重复部分，不去重。

::: tip 注意

注意：执行UNION ALL语句时所需要的资源比UNION语句少。如果明确知道合并数据后的结果数据
不存在重复数据，或者不需要去除重复的数据，则尽量使用UNION ALL语句，以提高数据查询的效
率。

:::

![joins](http://img.zxqs.top/20220918200512.png)