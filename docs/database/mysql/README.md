---
description: Mysql
sidebarDepth: 2
---

# Mysql

## 前言
mysql是很久之前学过的知识，导致现在有些东西都已经忘记。所以，再次回顾一下，将回顾内容记录下来。

本篇文章没有顺序，基本是复习那一块的知识，记录那一块。

## 准备
请下载[sql文件](/assets/file/test.sql)，然后导入数据库。

## 字符函数

```sql
# 1.length 获取参数值的`字节`个数
SELECT LENGTH('john');
结果：4

# 2. concat 拼接字符串
SELECT CONCAT('abc','_','def');
结果：abc_def

# 3. upper(将字母大写)、lower(将字母小写)
SELECT UPPER('john');
SELECT LOWER('jOHn');

# 4. substr 截取字符，索引从1开始
# 截取索引4之后的(包括4)
SELECT SUBSTR('数据库mysql',4) out_put;
# 截取索引在1到3之间的
SELECT SUBSTR('数据库mysql',1,3) out_put;
结果：mysql  数据库

# 5. instr 返回子串第一次出现的索引，如果找不到返回0
SELECT INSTR('数据库mysql','mysql') as out_put;
结果：4

# 6. trim 去掉空格或指定的字符
# 去掉空格
SELECT TRIM('   张三    ') out_put;
# 去掉前后的字符'a'
select TRIM('a' FROM 'aaaaaaa张aaa三aaaaaaaaaa') out_put;
结果：张三   张aaa三


# 7. lpad 用指定的字符实现左填充指定长度
select LPAD('张三',10,'*') out_put
结果：********张三

# 8. rpad 用指定的字符实现右填充指定长度
select RPAD('张三',10,'*') out_put
结果：张三********

# 9. replace 替换
SELECT REPLACE('法外狂徒张三','法外狂徒','三好青年') out_put
结果：三好青年张三
```

## 数字函数
```sql
# 1. round 四舍五入
# 只有一个参数，不保存小数。
SELECT ROUND(1.57);
结果：2
SELECT ROUND(-1.57);
# 结果：-2，负数，先对绝对值四舍五入，在加上负数
SELECT ROUND(1.789,2);
# 四舍五入保留两个小数，结果：1.79

# 2. seil 向上取整，返回>=改参数的最小整数

SELECT CEIL(1.23);
# 结果：2
SELECT CEIL(-1.45);
# 结果：-1

# 3. floor 向下取整，返回<=改参数的最大整数

SELECT FLOOR(9.99);
# 结果：9
SELECT FLOOR(-9.99);
#结果：-10

# mod 取余
SELECT MOD(10,3);
#结果：1
```

## 日期函数
```sql
# now 返回当前系统时间
SELECT NOW()

# curdate 返回当前系统日期，不包含时间
select CURDATE();

# 可以获取指定的年、月、日、小时、分钟、秒
SELECT YEAR(NOW()) 年
SELECT YEAR('2021-07-26') 年
SELECT MONTH(NOW()) 月

# 英文月
SELECT MONTHNAME(NOW()) 月

# QUARTER(date) 返回日期的季度
SELECT QUARTER("2021-10-08"); 
# 结果：4

# 给定一个日期date，返回一个日期号码（自0年以来的天数）。
TO_DAYS(date)

# week（date,mode） 获取指定的时间是本年的第几个周,mode是周数的计算方法，可选，详情参考下方表格`mode的值`
select WEEK(NOW()) as 周

# 返回日期用数字表示的范围是从1到53的日历周。WEEKOFYEAR()是一个兼容性函数，它等效于WEEK(date,3)。
SELECT WEEKOFYEAR(NOW());

# YEARWEEK(date,mode) 获取年份和周数，mode是周数的计算方法，可选，但是和WEEK中的mode计算方法是不同的
# 结果：202140
SELECT YEARWEEK(CURDATE());



# str_to_date 将日期格式的字符转换成指定格式的日期
select STR_TO_DATE('2021-07-26','%Y-%m-%d') out_put

# date_format: 将日期转换成字符
SELECT DATE_FORMAT('2021-07-26','%Y-%m-%d') out_put

# DATE_SUB(date,INTERVAL expr type) 函数从日期减去指定的时间间隔。
select DATE_SUB(NOW(),INTERVAL 1 HOUR) out_put
# 结果：2021-07-28 11:37:15

# DATEDIFF(date1,date2) 函数返回两个日期之间的天数。
SELECT DATEDIFF('2008-12-30','2008-12-29') AS DiffDate

# PERIOD_DIFF(period1, period2) 返回两日期之间的差异。结果以月份计算。日期格式为`YYMM或YYYYMM`
SELECT PERIOD_DIFF(201803, 201801); 
# 结果： 2
```
| 格式符 | 功能 |
|:-----:|:----:|
|   %Y  | 四位的年份 |
|   %y  | 2位的年份 |
|   %m  | 月份（01,02…11,12） |
|   %c  | 月份（1,2,…11,12） |
|   %d  | 日（01,02,…） |
|   %H  | 小时（24小时制） |
|   %h  | 小时（12小时制） |
|   %i  | 分钟（00,01…59） |
|   %s  | 秒（00,01,…59） |

**mode的值**
| 参数值 | 一周的第一天 | 范围 | 第一周是怎么计算的 |
|:-----:|:----:|:----:|:----:|
|   0  | 星期日 | 0-53 | 从本年的第一个`星期日`开始，是第一周。<br>前面的计算为第0周 |
|   1  | 星期一 | 0-53 | 假如1月1日到第一个`周一`的天数超过3天，<br>则计算为本年的第一周，否则为第0周 |
|   2  | 星期日 | 1-53 | 从本年的第一个星期日开始，是第一周。<br>前面的计算为上年度的5X周 |
|   3  | 星期一 | 1-53 | 假如1月1日到第一个`周一`的天数超过3天，<br>计算为本年的第一周，否则为上年度的第5X周 |
|   4  | 星期日 | 0-53 | 假如1月1日到第一个`周日`的天数超过3天，<br>计算为本年的第一周，否则为第0周 |
|   5  | 星期一 | 0-53 | 从本年度第一个`星期一`开始，是第一周。<br>前面的计算为第0周 |
|   6  | 星期日 | 1-53 | 假如1月1日到第一个`周日`的天数超过3天，<br>计算为本年的第一周，否则为上年度的第5X周 |
|   7  | 星期一 | 1-53 | 从本年的第一个`星期一`开始，是第一周。<br>前面的计算为上年度的5X周 |

## 日期常用查询
```sql
-- mysql 查询当天、本周，本月，上一个月的数据
-- 今天
select * from 表名 where to_days(时间字段名) = to_days(now());

-- 昨天
SELECT * FROM 表名 WHERE TO_DAYS( NOW( ) ) - TO_DAYS( 时间字段名) <= 1

-- 近7天
SELECT * FROM 表名 where DATE_SUB(CURDATE(), INTERVAL 7 DAY) <= date(时间字段名)

-- 近30天
SELECT * FROM 表名 where DATE_SUB(CURDATE(), INTERVAL 30 DAY) <= date(时间字段名)

-- 本月
SELECT * FROM 表名 WHERE DATE_FORMAT( 时间字段名, '%Y%m' ) = DATE_FORMAT( CURDATE( ) , '%Y%m' )

-- 上一月
SELECT * FROM 表名 WHERE PERIOD_DIFF( date_format( now( ) , '%Y%m' ) , date_format( 时间字段名, '%Y%m' ) ) =1

-- 查询本季度数据
select * from 表名 where QUARTER(时间字段名)=QUARTER(now());

-- 查询上季度数据
select * from 表名 where QUARTER(时间字段名)=QUARTER(DATE_SUB(now(),interval 1 QUARTER));

--查询本年数据
select * from 表名 where YEAR(时间字段名)=YEAR(NOW());

-- 查询上年数据
select * from 表名 where year(时间字段名)=year(date_sub(now(),interval 1 year));

--查询当前这周的数据
SELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now());

--查询上周的数据
SELECT name,submittime FROM enterprise WHERE YEARWEEK(date_format(submittime,'%Y-%m-%d')) = YEARWEEK(now())-1;

```
## Case函数
```sql
--Case函数:
--有两种格式：
--     1.简单Case函数。
--     2.Case搜索函数。
--1.简单Case函数：
--    CASE [COLUMN_NAME] 
--        WHEN ['条件参数'] THEN ['COLUMN_NAME/显示内容']
--        WHEN ['条件参数'] THEN ['COLUMN_NAME/显示内容']
--        ......
--        ELSE ['COLUMN_NAME/显示内容']
--        END
--2.Case搜索函数：
--    CASE WHEN [COLUMN_NAME] = ['COLUMN_NAME/显示内容/表达式'] THEN [''COLUMN_NAME/显示内容'']
--         WHEN [COLUMN_NAME] = ['COLUMN_NAME/显示内容/表达式'] THEN [''COLUMN_NAME/显示内容'']
--         ......
--         ELSE ['COLUMN_NAME/显示内容']
--         END
--说明：两种方式可以实现相同的功能。简单CASE函数较CASE搜索函数语法简洁，但功能方面有所限制。
--比如说写判断式。同时还需要注意一点：CASE函数只返回第一个符合条件的值，剩下达到CASE部分将会被自动忽略。
--另外：使用CASE()函数一方面可以在查询时灵活的组织语法结构，另外一方面可以避免对同一张或多张表的多次访问。
--重点说明：在case 函数中else部分可以没有，如果没有else，默认值为NULL , 这点是需要注意的地方 .
```
```sql
# 简单Case函数
SELECT  CASE sex 
WHEN '0' THEN '男'
WHEN '1' THEN '女'
ELSE '未知' 
END
FROM sys_user
```

```sql
# Case搜索函数 
SELECT  CASE 
WHEN sex = '0' THEN '男' 
WHEN sex = '1' THEN '女' 
ELSE '未知' 
END
FROM sys_user
```
## 分组函数
### sum 求和、avg 平均值、max 最大值、min 最小值、count 计算个数

:::tip 特点

1. sum、avg一般用于处理数值型，max、min、count可以处理任何类型

2. 以上分组函数都忽略null值
3. 可以和distinct搭配实现去重的运算

:::

```sql
SELECT SUM(salary) from employees;
SELECT AVG(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT MIN(salary) FROM employees;
# 只计算不为null的值
SELECT COUNT(salary) FROM employees;

# 和distinct(去重)搭配
SELECT SUM(DISTINCT salary),SUM(salary) FROM employees;
SELECT COUNT(DISTINCT salary), COUNT(salary) FROM employees;
```

## 分组查询

语法：
```sql
  select 分组函数,列
  form 表
    【where 筛选条件】
  group by 分组的列表
    【having 分组后的条件】
    【order by 排序】
```
**特点：**

1. 分组查询中的筛选条件分为两类
   | 类型 | 数据源 | 位置 | 关键字 |
   |:---:|:------:|:----:|:-----:|
   | 分组前筛选 | 原始表 | group by 字句的前面 | where |
   | 分组后筛选 | 分组后的结果集 | group by 字句的后面 | having |
   1. 分组函数做条件肯定是放在having字句中
   2. 能用分组前筛选的，就优先考虑使用分组前筛选

2. group by子句支持单个字段分组，多个字段分组（多个字段之间用逗号隔开），表达式或函数（用得较少）

**案例：**
```sql
# 查询每个部门的平均工资
SELECT AVG(salary) avg_salary,department_id FROM employees GROUP BY department_id;

# 查询哪个部门的员工个数 > 2
SELECT COUNT(*),department_id
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 2

# 查询每个工种有奖金的员工的最高工资 和工种编号
SELECT MAX(salary) as maxsalary,job_id
FROM employees
WHERE commission_pct IS NOT NULL
GROUP BY job_id

# 查询每个部门每个工种的员工的平均工资
SELECT AVG(salary) avg_salary,department_id,job_id
FROM employees
GROUP by department_id,job_id
```

## 子查询
**含义**：

1. 子查询允许把一个查询嵌套在另一个查询当中。

2. 子查询，又叫内部查询，相对于内部查询，包含内部查询的就称为外部查询

### 分类
**按结果集的行列数不同**：

1. 标量子查询（结果集只有一行一列）
2. 列子查询（结果集有一列多行）
3. 行子查询（结果集一行多列或多行多列）
4. 表子查询（结果集一般为多行多列）

**按子查询出现的位置**：
1. select后面 (仅仅支持标量子查询)
2. from后面 (支持表子查询)
3. where或having后面 (标量子查询，列子查询，行子查询)

**案例一**：select后面

```sql
# 找出每个员工的部门名称，显示员工名，部门名
SELECT 
e.ename,(select d.dname from dept d WHERE e.deptno = d.deptno) as dname
FROM emp e
```

:::tip

select后面只能使用标量子查询，表量子查询只有一个结果。所以`select后面`永远只有一个值

:::

**案例二**：from后面

```sql
/*
  找出每个岗位的平均工资的薪资等级
  可以分步做，先找出每个岗位的平均工资，然后再查询平均工资的薪资等级
*/
# 1.找出每个岗位的平均工资
select job,avg(sal) FROM emp GROUP BY job;

#2. 将第一步中个结果当成一个表 t ，然后与salgrade表连接，条件为，平均工资在每个等级最低和最高之间的
SELECT t.avg_sal,t.job,s.GRADE
FROM
(select job,avg(sal) as avg_sal FROM emp GROUP BY job) t,salgrade s
WHERE t.avg_sal BETWEEN s.LOSAL AND s.HISAL
```
**案例三**：where后面

:::tip 特点

	1. 子查询放在小括号内
	2. 子查询一般放在条件的右侧
	3. 标量子查询(单行子查询)，一般搭配着单行操作符使用
	    > <  >=  <=   <>
	
	    列子查询（多行子查询），一般搭配着多行操作符使用,in、any/some、all
	
	4. 子查询的执行优先于主查询的执行

:::

1. 标量子查询
   ```sql
   #查询工资比Abel高的员工
   SELECT *
    FROM employees
    WHERE salary > (
        SELECT salary 
        FROM employees
        WHERE last_name = 'Abel'
    );

    # 查询公司工资最少的员工的last_name，job_id和salary
    select last_name,job_id,salary
    FROM employees
    WHERE salary = (SELECT MIN(salary) FROM employees)
   ```
2. 列子查询(多行子查询)
    ```sql
    # 查询location_id是1400或1700的部门中的所有员工姓名
    SELECT last_name
    FROM employees
    WHERE department_id IN(SELECT DISTINCT department_id FROM departments WHERE location_id IN(1400,1700))
    ```
3. 行子查询（结果集一行多列或多行多列）
    ```sql
     # 查询员工编号最小并且工资最高的员工信息
    SELECT * 
    FROM employees
    WHERE (employee_id,salary) = (
          SELECT MIN(employee_id),MAX(salary)
          FROM employees
    );
    ```

