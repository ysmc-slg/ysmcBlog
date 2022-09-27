---
description: 单行函数
autoPrev: limit
---

# 单行函数

## 常用数值函数

```sql

-- 1. ABS(x) 返回 x 的绝对值
SELECT ABS(-123),ABS(32) from DUAL;

-- 2. sign(x) 返回X的符号。正数返回1，负数返回-1，0返回0
SELECT SIGN(-23),SIGN(43) FROM DUAL;

-- 3. pi() 返回圆周率的值
SELECT PI() FROM DUAL;

-- 4. ceil(x)，ceiling(x) 向上取整，如果 x 是整数，返回值就是 x
SELECT CEIL(32.32),CEILING(-43.23),CEIL(55) FROM DUAL;

-- 5. floor(x) 向下取整，如果 x 是整数，返回值就是 x
SELECT FLOOR(32.32), FLOOR(-43.23),FLOOR(55) FROM DUAL;

-- 6. least(e1,e2,e3...) 返回列表中的最小值
SELECT LEAST(10,44,33) FROM DUAL;

-- 7. greatest(e1,e2,e3...) 返回列表中的最大值
SELECT greatest(10,44,33) FROM DUAL;

-- 8. mod(x,y) 返回 x 除以 y 后的余数
SELECT MOD(12,5) FROM DUAL;

-- 9. rand() 返回 0 ~ 1 的随机值。
SELECT RAND() FROM DUAL;

-- 10. rand(x) 返回 0 ~ 1 的随机值，其中 x 的值用作种子值，相同的 x 值会产生相同的随机数
SELECT RAND(1),RAND(1) FROM DUAL;

-- 11. round(x) 四舍五入，取整
SELECT ROUND(22.45),ROUND(22.78) FROM DUAL;

-- 12. round(x,y) 四舍五入，并保留到小数点后 y 位
SELECT ROUND(22.454,2),ROUND(22.78,1) FROM DUAL;

-- 13. truncate(x,y) 返回数字x截断为y位小数的结果
SELECT TRUNCATE(22.458,2) FROM DUAL;
```

## 字符串函数

```sql
-- 1. ascll(s) 返回字符串中第一个字符的 ASCLL 码值
SELECT ASCII('a'),ASCII('abc') FROM DUAL;

-- 2. concat(s1,s2,s3...) 连接s1,s2,s3为一个字符串
SELECT CONCAT('你好',first_name) FROM employees;

-- 3. concat_ws(x,s1,s2...) 同CONCAT(s1,s2,...)函数，但是每个字符串之间要加上x
SELECT CONCAT_WS('-','你好',first_name,'a') FROM employees; 

-- 4. insert(str,idx,len,replacestr) 将字符串str从第idx位置开始，len个字符长的子串替换为字符串replacestr。注意：索引从 1 开始
SELECT INSERT('hello_mysql',1,5,'你好') FROM DUAL;

-- 5. replace(str,a,b) 用字符串b替换字符串str中所有出现的字符串a
SELECT REPLACE('hello_mysql','l','b') FROM DUAL;

-- 6. upper(s) 或 ucase(s) 将字符串s的所有字母转成大写
SELECT UPPER('hello_mysql') FROM DUAL;

-- 7. lower(s) 或 lcase(s) 将字符串s的所有字母转成小写
SELECT LOWER('HELLO_MYSQL') FROM DUAL;

-- 8. left(str,n) 返回字符串 str 最左边的 n 个字符
SELECT LEFT('hello_mysql',5) FROM DUAL;

-- 9. right(str,n) 返回字符串 str 最右边的 n 个字符
SELECT RIGHT('hello_mysql',5) FROM DUAL;

-- 10. lpad(str,len,pad) 用字符串pad对str最左边进行填充，直到str的长度为len个字符
SELECT LPAD('hello_mysql',15,'?') FROM DUAL;

-- 11. rpad(str,len,pad) 用字符串pad对str最右边进行填充，直到str的长度为len个字符
SELECT RPAD('hello_mysql',15,'?') FROM DUAL;

-- 12. ltrim(s) 去掉字符串s左侧的空格
SELECT LTRIM('  _hello') FROM DUAL;

-- 13. rtrim(s) 去掉字符串s右侧的空格
SELECT RTRIM('hello_  ') FROM DUAL;

-- 14. trim(s) 去掉字符串s，开始与结尾的空格
SELECT TRIM('  _hello_  ') FROM DUAL;

-- 15. trim(s1 from s) 去掉字符串s中，开始与结尾的 s1
SELECT TRIM('_' FROM '_hello_') FROM DUAL;

-- 16. trim(leading s1 from s) 去掉字符串s，开始处的s1
SELECT TRIM(LEADING '_' FROM '_hello_') FROM DUAL;

-- 16. trim(trailing s1 from s) 去掉字符串s，结尾处的s1
SELECT TRIM(TRAILING '_' FROM '_hello_') FROM DUAL;

-- 17. repeat(str,n) 返回 str 重复 n 次的结果
SELECT REPEAT('hello,',3) FROM DUAL;

-- 18. SPACE(n) 返回 n 个空格
SELECT CONCAT('hello',SPACE(2),'mysql') FROM DUAL;

-- 19. nullif(value1,value2) 比较两个字符串，如果value1与value2相等，则返回NULL，否则返回value1

SELECT NULLIF('hello','hello') FROM DUAL;
SELECT NULLIF('hello','hi') FROM DUAL;
```

## 日期和时间函数

### 获取日期、时间

```sql
-- 1. curdate()，current_date() 返回当前日期，只包含 年、月、日
SELECT CURDATE(),current_date() FROM DUAL;

-- 2. curtime()，current_time() 返回当前时间，只包含时、分秒
SELECT CURTIME(),CURRENT_TIME() FROM DUAL;

-- 3. now()/SYSDATE()/CURRENT_TIMESTAMP()/LOCALTIME()/LOCALTIMESTAMP() 返回当前系统日期和时间
SELECT NOW(),SYSDATE(),CURRENT_TIMESTAMP() FROM DUAL;

-- 4. utc_date() 返回 UTC（世界标准时间）日期
SELECT UTC_DATE() FROM DUAL;

-- 5. utc_date() 返回 UTC（世界标准时间）时间
SELECT UTC_TIME() FROM DUAL;
```

### 日期与时间戳的转换

```sql
-- 1. unix_timestamp() 以UNIX时间戳的形式返回当前时间。
SELECT UNIX_TIMESTAMP() FROM DUAL;

-- 2. unix_timestamp(date) 将时间date以UNIX时间戳的形式返回。
SELECT UNIX_TIMESTAMP(NOW()) FROM DUAL;
SELECT UNIX_TIMESTAMP('2022-9-20 12:19:23') FROM DUAL;

-- 3. FROM_UNIXTIME(timestamp) 将UNIX时间戳的时间转换为普通格式的时间
SELECT FROM_UNIXTIME(1663647563) FROM DUAL;
```

### 月份、星期、星期数、天数等函数

```sql
-- 1. year(date)/month(date)/day(date) 返回具体的日期值
SELECT YEAR(NOW()),MONTH(NOW()),DAY(NOW()) FROM DUAL;

-- 2. hour(time)/minute(time)/second(time) 返回具体的是时间值
SELECT HOUR(NOW()),minute(NOW()),SECOND(NOW()) FROM DUAL;

-- 3. monthname(date) 返回月份（英文）：January
SELECT MONTHNAME(NOW()) FROM DUAL;

-- 4. dayname(date) 返回星期几：Monday，Tuesday...Sunday
SELECT DAYNAME(NOW()) FROM DUAL;

-- 5. quarter(date) 返回日期对应的季度，范围为 1~4
SELECT QUARTER(NOW()) FROM DUAL;

-- 6. weekday(date) 返回周几，注意周一是0，周二是1，... 周日是6
SELECT WEEKDAY(NOW()) FROM DUAL;

-- 7. week(date)，weekofyear(date) 返回一年中的第几周
SELECT WEEK(NOW()),WEEKOFYEAR(NOW()) FROM DUAL;
SELECT WEEK('2022-9-20 12:23:45'),WEEKOFYEAR('2022-9-17 11:23:45') FROM DUAL;

-- 8. dayofyear(now()) 返回日期是一年中的第几天
SELECT DAYOFYEAR(NOW()) FROM DUAL;

-- 9. DAYOFMONTH(date) 返回日期位于所在月份的第几天
SELECT DAYOFMONTH(NOW()) FROM DUAL;

-- 10. 返回周几，注意：周日是1，周一是2，。。。周六是7
select DAYOFWEEK(now()) FROM DUAL;
```

### extract 函数

extract(type from date) 返回指定日期中特定的部分，type 指定返回的值。

extract(type from date) 函数中 `type` 的取值与含义：

| type 值 | 描述 |
| ------ | ----- |
| MICROSECOND | 毫秒 |
| SECOND | 秒 |
| HOUR | 小时 |
| DAY | 天 |
| WEEK | 一年中的第几个星期 |
| MONTH | 一年中的第几个月 |
| QUARTER | 一年中的第几个季度 |
| YEAR | 年份 |
| SECOND_MICROSECOND | 得到的是秒+毫秒 |
| MINUTE_MICROSECOND | 得到的是分+秒+毫秒 |
| MINUTE_SECOND | 得到的是分+秒 |
| HOUR_MICROSECOND | 得到的是小时+分+秒+毫秒 |
| HOUR_SECOND | 得到的是小时+分+秒 |
| HOUR_MINUTE | 得到的是小时+分 |
| DAY_MICROSECOND | 得到的是小时+分+秒+毫秒 |
| DAY_SECOND | 得到的是小时+分+秒 |
| DAY_MINUTE | 得到的是小时+分 |
| DAY_HOUR | 得到的是小时 |
| YEAR_MONTH | 得到的是年+月 |

### 计算日期和时间的函数

| 函数 | 说明 |
| ------ | ----- |
| DATE_ADD(datetime,INTERVAL expr type) | 返回给定日期时间差 INTERVAL 时间段的日期时间 |
| DATE_SUB(date,INTERVAL expr type) | 返回与date相差INTERVAL时间间隔的日期 |

上述函数中 type 的取值：

| 间隔类型 | 含义 |
| ------ | ----- |
| HOUR | 小时 |
| MINUTE | 分钟 |
| SECOND | 秒 |
| YEAR | 年 |
| QUARTER | 季度 |
| MONTH | 月 |
| DAY | 日 |
| YEAR_MONTH | 年和月 |
| DAY_HOUR | 日和小时 |
| DAY_MINUTE | 日和分钟 |
| DAY_SECOND | 日和秒 |
| HOUR_MINUTE | 小时和分钟 |
| HOUR_SECOND | 小时和秒 |
| MINUTE_SECOND | 分钟和秒 |

案例：

```sql
SELECT DATE_ADD('2021-01-21 02:01:01',INTERVAL '1' HOUR) FROM DUAL;
SELECT DATE_ADD('2021-01-21 02:01:01',INTERVAL '1' DAY) FROM DUAL;
SELECT DATE_ADD('2021-01-21 02:01:01',INTERVAL '1 2' YEAR_MONTH) FROM DUAL;

SELECT DATE_SUB('2021-01-21 02:01:01',INTERVAL '1' HOUR) FROM DUAL;
SELECT DATE_SUB('2021-01-21 02:01:01',INTERVAL '1' DAY) FROM DUAL;
SELECT DATE_SUB('2021-01-21 02:01:01',INTERVAL '1 1' DAY_HOUR) AS col3 FROM DUAL;
```

注意：

**在使用两种条件时，中间要加空格**



| 函数 | 说明 |
| ------ | ----- |
| ADDTIME(time1,time2) | 返回time1加上time2的时间。当time2为一个数字时，代表的是秒 ，可以为负数 |
| SUBTIME(time1,time2) | 返回time1减去time2后的时间。当time2为一个数字时，代表的是秒 ，可以为负数 |
| DATEDIFF(date1,date2) | 返回date1-date2 的日期间隔天数 |
| TIMEDIFF(time1,time2) | 返回date1-date2的时间间隔 |
| PERIOD_DIFF(period1, period2) | 返回两个时间相差的月份数，period1-period2，两个参数的格式 是 YYMM或YYYYMM |
|FROM_DAYS(N)| 返回从0000年1月1日起，N天以后的日期|
|TO_DAYS(date)| 返回日期date距离0000年1月1日的天数|
|LAST_DAY(date)| 返回date所在月份的最后一天的日期|
|MAKEDATE(year,n)| 针对给定年份与所在年份中的天数返回一个日期|
|MAKETIME(hour,minute,second)| 将给定的小时、分钟和秒组合成时间并返回|
|PERIOD_ADD(time,n)| 返回time加上n后的时间|

举例：

```sql
SELECT 
  ADDTIME(NOW(),20),
  SUBTIME(NOW(),30),
  SUBTIME(NOW(),'1:1:3'),
  DATEDIFF(NOW(),'2021-10-01'), 
  TIMEDIFF(NOW(),'2021-10-25 22:10:10'),
  FROM_DAYS(366),TO_DAYS('0000-12-25'), 
  LAST_DAY(NOW()),
  MAKEDATE(YEAR(NOW()),12),
  MAKETIME(10,21,23),
  PERIOD_ADD(20200101010101, 10) 
FROM DUAL;
```

### 日期的格式化和解析

| 函数 | 说明 |
| ------ | ----- |
| date_format(date,fmt) | 将日期转化成字符串 |
| time_format(time,fmt) | 将时间转换成字符串 |
| get_format(date_type,format_type) | 返回不同标准的日期显示格式 |
| str_to_date(str,fmt) | 将字符串转化成日期 |

上述 `非get_format` 函数中 fmt 参数常用的格式符：

| 格式符 | 说明 | 格式符 | 说明 |
| ------ | ----- |------ | ----- |
| %Y | 4位数字年份 | %y | 两位数字年份 |
| %M | 月份（英文） | %m | 两位数字月份（01，02，03...） |
| %b | 缩写的月名（jan,Feb） | %c | 数字月份（1，2，3...） |
| %D | 日（英文形式 1st,2nd,3rd）| %d | 日（01,02,03...） |
| %e | 日（1,2,3,4,5...）|  |  |
| %H | 小时（24小时制） | %h | 小时（12小时制） |
| %i | 分钟（01，02，03） | %s | 秒（00,01,…59） |
| %W | 一周中的星期名称（Sunday...） | %a | 一周中的星期缩写（Sun,Mon...） |
| %w | 数字表示每周的第几天（0表示周日） |  |
| %j | 表示一年中的第几天（001，002...）| %U | 以数字表示年中的第几周，（1,2,3。。）其中Sunday为周中第一天 |

GET_FORMAT函数中date_type和format_type参数取值如下：

![GET_FORMAT](http://img.zxqs.top/20220922142249.png)

```sql
SELECT DATE_FORMAT(NOW(), '%H:%i:%s');
SELECT TIME_FORMAT(CURTIME(),'%H:%i:%s') FROM DUAL;
SELECT STR_TO_DATE('09/01/2009','%m/%d/%Y') FROM DUAL;
SELECT STR_TO_DATE('2014-04-22 15:47:06','%Y-%m-%d %H:%i:%s') FROM DUAL;
-- 美国标准
SELECT GET_FORMAT(DATE, 'USA');
```

流程处理函数可以根据不同的条件，执行不同的处理流程，可以在SQL语句中实现不同的条件选择。

MySQL 中的流程处理函数主要包括 if()，ifnull，和 case() 函数。

| 函数 | 说明 |
| ------ | ----- |
| if(value,value1,value2) | 如果value 的值为 true，返回 value1，否则返回 value2 |
| ifnull(value1，,value2) | 如果 value1 不为 null，返回value1，否则返回value2 |
| CASE WHEN 条件1 THEN 结果1 WHEN 条件2 THEN 结果2 .... [ELSE resultn] END | 相当于Java的if...else if...else... |
| CASE expr WHEN 常量值1 THEN 值1 WHEN 常量值1 THEN 值1 .... [ELSE 值n] END | 相当于Java的switch...case... |

```sql
-- IF(VALUE,VALUE1,VALUE2)
SELECT last_name,salary,IF(salary >= 6000,'高工资','低工资') "details" FROM employees;

-- ifnull(value1，,value2):看做是if(value,value1,value2)的特殊情况
SELECT last_name,commission_pct,IFNULL(commission_pct,0) "details" FROM employees;
```

`case when` 有两种方式：

1. 简单 case 函数 
  ```text
     case 列名
     when 条件值1 then 选项值1
     when 条件值2 then 选项值2
     ......
     else 默认值
     end
  ```
  ```sql
  SELECT employee_id,last_name,department_id,salary,
  CASE department_id 
    WHEN 10 THEN salary * 1.1
	WHEN 20 THEN salary * 1.2
	WHEN 30 THEN salary * 1.3
	ELSE salary * 1.4 END "details"
  FROM employees;
  ```
2. case 搜索函数
  ```text
  case
  when 列明=条件值1 then 选项值1
  when 列明=条件值2 then 选项值2
  ......
  else 默认值
  end
  ```
  ```sql
  SELECT employee_id,last_name,department_id,salary,
  CASE WHEN department_id = 10 THEN salary * 1.1
	WHEN department_id = 20 THEN salary * 1.2
	WHEN department_id = 30 THEN salary * 1.3
	ELSE salary * 1.4 
    END "details"
  FROM employees;
  ```

::: tip 注意

简单Case函数的写法相对比较简洁，但是和Case搜索函数相比，功能方面会有些限制，比如写判断式。

还有一个需要注意的问题，Case函数只返回第一个符合条件的 值，剩下的Case部分将会被自动忽略。

:::
   
