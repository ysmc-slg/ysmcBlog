---
description: 函数
autoPrev: limit
---

# 函数

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
-- curdate()，current_date() 返回当前日期，只包含 年、月、日
SELECT CURDATE() FROM DUAL;
```

