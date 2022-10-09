---
description: 子查询
autoPrev: aggregateFunction
---

# 子查询

子查询指一个查询语句嵌套在另一个查询语句内部的查询，这个特性从MySQL 4.1开始引入。

SQL 中子查询的使用大大增强了 SELECT 查询的能力，因为很多时候查询需要从结果集中获取数据，或者需要从同一个表中先计算得出一个数据结果，然后与这个数据结果（可能是某个标量，也可能是某个集合）进行比较。

## 单行子查询

### 单行比较操作符

| 操作符 | 含义 |
| ------ | ----- |
| = | 等于 |
| > | 大于 |
| >= | 大于等于 |
| < | 小于 |
| <= | 小于等于 |
| <> | 不等于 |

### 代码示例

```sql
-- 查询工资大于149号员工工资的员工的信息
SELECT employee_id,last_name,salary
FROM employees
WHERE salary > (
		SELECT salary
		FROM employees
		WHERE employee_id = 149
		);

-- 题目：返回公司工资最少的员工的last_name,job_id和salary
SELECT last_name,job_id,salary
FROM employees
WHERE salary = (
		SELECT MIN(salary)
		FROM employees
		);

-- 查询与141号员工的manager_id和department_id相同的其他员工的employee_id，manager_id，department_id。
SELECT employee_id,manager_id,department_id
FROM employees
WHERE manager_id = (
		    SELECT manager_id
		    FROM employees
		    WHERE employee_id = 141
		   )
AND department_id = (
		    SELECT department_id
		    FROM employees
		    WHERE employee_id = 141
		   )
AND employee_id <> 141;


-- 题目：查询最低工资大于110号部门最低工资的部门id和其最低工资
SELECT department_id,MIN(salary)
FROM employees
WHERE department_id IS NOT NULL
GROUP BY department_id
HAVING MIN(salary) > (
			SELECT MIN(salary)
			FROM employees
			WHERE department_id = 110
		     );
```

```sql
-- 显式员工的employee_id,last_name和location。其中，若员工department_id与location_id为1800的department_id相同，则location为’Canada’，其余则为’USA’。
SELECT employee_id,last_name,
  CASE department_id 
  WHEN (SELECT department_id FROM departments WHERE location_id = 1800) 
  THEN 'Canada'
	ELSE 'USA' END "location"
FROM employees;
```

## 多行子查询

### 多行比较操作符
| 操作符 | 含义 |
| ------ | ----- |
| IN | 等于列表中的任意一个 |
| ANY | 需要和单行比较符一起使用，和子查询返回的某一个值比较 |
| ALL | 需要和单行比较操作符一起使用，和子查询返回的所有值比较 |
| SOME | 实际上是ANY的别名，作用相同，一般常使用ANY |

### 代码示例

```sql
SELECT employee_id, last_name
FROM   employees
WHERE  salary IN
                (SELECT   MIN(salary)
                 FROM     employees
                 GROUP BY department_id);

-- ANY / ALL:
-- 题目：返回其它job_id中比job_id为‘IT_PROG’部门任一工资低的员工的员工号、姓名、job_id 以及salary
SELECT employee_id,last_name,job_id,salary
FROM employees
WHERE job_id <> 'IT_PROG'
AND salary < ANY (
		SELECT salary
		FROM employees
		WHERE job_id = 'IT_PROG'
		);
```

## 相关子查询

form 中使用子查询

```sql
-- 查询员工中工资大于本部门平均工资的员工的last_name,salary和其department_id
-- 方式一
SELECT last_name,salary,department_id
FROM employees e1
WHERE salary > (
		SELECT AVG(salary)
		FROM employees e2
		WHERE department_id = e1.`department_id`
		);

-- 方式二
SELECT e.last_name,e.salary,e.department_id
FROM employees e,(
		SELECT department_id,AVG(salary) avg_sal
		FROM employees
		GROUP BY department_id) t_dept_avg_sal
WHERE e.department_id = t_dept_avg_sal.department_id
AND e.salary > t_dept_avg_sal.avg_sal
```

**在SELECT中，除了GROUP BY 和 LIMIT之外，其他位置都可以声明子查询！**

### EXISTS 与 NOT EXISTS

* 关联子查询通常也会和 EXISTS操作符一起来使用，用来检查在子查询中是否存在满足条件的行。
* 如果在子查询中不存在满足条件的行：
  *  条件返回 false
  *  继续在子查询中查找
* 如果在子查询中存在满足条件的行：
  * 不在子查询中继续查找
  * 条件返回 true
* NOT EXISTS关键字表示如果不存在某种条件，则返回TRUE，否则返回FALSE。

```sql
-- 查询公司管理者的employee_id，last_name，job_id，department_id信息
SELECT employee_id,last_name,job_id,department_id
FROM employees e1
WHERE EXISTS (
	       SELECT *
	       FROM employees e2
	       WHERE e1.`employee_id` = e2.`manager_id`
	     );

-- 查询departments表中，不存在于employees表中的部门的department_id和department_name
SELECT department_id,department_name
FROM departments d
WHERE NOT EXISTS (
		SELECT *
		FROM employees e
		WHERE d.`department_id` = e.`department_id`
		);

```