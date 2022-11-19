---
title: 索引的创建与设计原则
autoPrev: indexDataStructure
---

# 索引的创建与设计原则

## 索引的声明与使用

### 索引的分类

MySQL 的索引包括普通索引、唯一索引、全文索引、单列索引、多列索引、和空间索引等。

* 从 `功能逻辑` 上说，索引主要有4中，分别是普通索引、唯一索引、主键索引、全文索引。
* 按照 `物理实现方式`，索引可以分为 `聚簇索引` 和 `非聚簇索引`。
* 按照 `作用字段个数` 进行划分，分成单例索引和联合索引。

1. 普通索引
   
![image-20221116133521876](https://img.zxqs.top/20221116133524.png)

2. 唯一索引
![image-20221116133617041](https://img.zxqs.top/20221116133618.png)

3. 主键索引
![image-20221116133704126](https://img.zxqs.top/20221116133705.png)

4. 单列索引
![image-20221116133749694](https://img.zxqs.top/20221116133750.png)

5. 多列（组合、联合）索引
![image-20221116133843157](https://img.zxqs.top/20221116133844.png)

6. 全文索引
![image-20221116134138144](https://img.zxqs.top/20221116134140.png)

7. 补充：空间索引
![image-20221116134247821](https://img.zxqs.top/20221116134249.png)


具体的存储引擎支持的索引类型也不一样，如下：

InnoDB：支持 B-tree、full-test（全文索引）等索引，不支持 Hash 索引；

MyISAM ： 支持 B-tree、Full-text 等索引，不支持 Hash 索引；

Memory ：支持 B-tree、Hash（默认）等索引，不支持 Full-text 索引；

NDB ：支持 Hash 索引，不支持 B-tree、Full-text 等索引；

Archive ：不支 持 B-tree、Hash、Full-text 等索引；

### 创建表的时候创建索引

MySQL 支持多种方法在单个或多个列上创建索引，在创建表的定义语句 `create table`中指定索引，使用 `alter table` 语句在存在的表上创建索引，或者使用 `create index` 语句在已存在的表上添加索引


使用 create table 创建表时，可以定义 `主键约束、外键约束、唯一约束`，而不论创建那种约束，在定义约束的同时相当于在指定列上创建了一个索引。

例如：

```sql
CREATE TABLE dept(
dept_id INT PRIMARY KEY AUTO_INCREMENT,
dept_name VARCHAR(20)
);


CREATE TABLE emp(
emp_id INT PRIMARY KEY AUTO_INCREMENT,
emp_name VARCHAR(20) UNIQUE,
dept_id INT,
-- 外键
CONSTRAINT emp_dept_id_fk FOREIGN KEY(dept_id) REFERENCES dept(dept_id)
);
```

通过命令查看创建的索引：

```sql
-- show index from 表明
show index from emp 
```
![image-20221116150714741](https://img.zxqs.top/20221116150715.png)

如果所示 emp 创建了三个索引，同时 `emp_name` 是唯一索引。

我们把上面这种方式称为 `隐式创建表时创建索引`，有隐式就有显示，我们来看一下显示创建方式。

语法格式如下

```sql
CREATE TABLE table_name 
[col_name data_type]
[UNIQUE | FULLTEXT | SPATIAL] [INDEX | KEY] [index_name] (col_name [length]) [ASC |
DESC]
```

* `UNIQUE` 、 `FULLTEXT` 和 `SPATIAL` 为可选参数，分别表示唯一索引、全文索引和空间索引；
* `INDEX` 与 `KEY` 为同义词，两者的作用相同，用来指定创建索引
* `index_name` 指定索引的名称，为可选参数，如果不指定，那么 MySQL 默认 col_name 为索引名；
* `col_name` 为需要创建索引的字段列，该列必须从数据表中定义多个列中选择；
* `length` 为可选参数，表示索引的长度，只有字符串类型的字段才能指定索引长度
* `ASC` 或 `DESC` 指定升序或者降序的索引值存储。 

**1. 创建普通索引**

在book表中的year_publication字段上建立普通索引，SQL语句如下：

```sql
CREATE TABLE book(
book_id INT ,
book_name VARCHAR(100),
authors VARCHAR(100),
info VARCHAR(100) ,
comment VARCHAR(100),
year_publication YEAR,
-- 如果不写索引名，那么和字段名相同
INDEX(year_publication)
);
```

通过命令查看创建的索引：

```sql
show index from book;
```

**2. 创建唯一索引**

```sql
CREATE TABLE test1(
id INT NOT NULL,
name varchar(30) NOT NULL,
UNIQUE INDEX uk_idx_id(id)
);
```

**3. 创建主键索引**

主键索引只能通过`主键约束`创建：

```sql
CREATE TABLE student (
id INT(10) primary key ,
student_no VARCHAR(200),
student_name VARCHAR(200)
);
```

删除主键索引：

```sql
ALTER TABLE student
drop PRIMARY KEY ;
```

修改主键索引：必须先删除掉(drop)原索引，再新建(add)索引

**4. 创建组合索引**

举例：创建表test3，在表中的id、name和age字段上建立组合索引，SQL语句如下：
```sql
CREATE TABLE test3(
id INT(11) NOT NULL,
name CHAR(30) NOT NULL,
age INT(11) NOT NULL,
info VARCHAR(255),
INDEX multi_idx(id,name,age)
);
```

这里有一个需要注意的地方，组合索引符合 `最左前缀原则`，通过sql 来看。

```sql
-- 没有使用上索引
select * from test3 where name="zhangsan" and age = 18;

-- 使用上了索引
select * from test3 where  id=1001 and name = "zhangsan";
```

如果想让组合索引生效，组合索引中第一个字段必须要写在查询条件中，可以不作为第一个查询条件

**5. 创建全文索引（了解）**

`fulltext` 全文索引可也用于全文检索，并且只为 `char、varchar、text` 列创建索引。索引总是对整个列进行，不支持局部索引。

```sql
CREATE TABLE test4(
id INT NOT NULL,
name CHAR(30) NOT NULL,
age INT NOT NULL,
info VARCHAR(255),
FULLTEXT INDEX futxt_idx_info(info)
) ENGINE=MyISAM;
```

在MySQL5.7及之后版本中可以不指定最后的ENGINE了，因为在此版本中InnoDB支持全文索引。

举例2：

```sql
CREATE TABLE articles (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (200),
body TEXT,
FULLTEXT index (title, body)
) ENGINE = INNODB ;
```
创建了一个给title和body字段添加全文索引的表。

举例3：

```sql
CREATE TABLE `papers` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`title` varchar(200) DEFAULT NULL,
`content` text,
PRIMARY KEY (`id`),
FULLTEXT KEY `title` (`title`,`content`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```

不同于like方式的的查询：

```sql
SELECT * FROM papers WHERE content LIKE ‘%查询字符串%’;
```

全文索引用match+against方式查询：

```sql
SELECT * FROM papers WHERE MATCH(title,content) AGAINST (‘查询字符串’);
```

::: tip 注意

1. 使用全文索引前，搞清楚版本支持情况；
2. 全文索引比 like + % 快 N 倍，但是可能存在精度问题；
3. 如果需要全文索引的是大量数据，建议先添加数据，再创建索引。

:::

**5. 创建空间索引（了解）**

空间索引创建中，要求空间类型的字段必须为 `非空` 。

举例：创建表test5，在空间类型为GEOMETRY的字段上创建空间索引，SQL语句如下：

```sql
CREATE TABLE test5(
geo GEOMETRY NOT NULL,
SPATIAL INDEX spa_idx_geo(geo)
) ENGINE=MyISAM;
```

### 已经存在的表创建索引

在已经存在的表中创建索引可以使用 `ALTER TABLE` 语句或者 `CREATE INDEX` 语句。

1. 使用 `alter table` 语句创建索引，语法如下：
```sql
ALTER TABLE table_name ADD [UNIQUE | FULLTEXT | SPATIAL] [INDEX | KEY]
[index_name] (col_name[length],...) [ASC | DESC]
```

举例：

```sql
CREATE TABLE test5(
id INT(11) NOT NULL,
name CHAR(30) NOT NULL,
age INT(11) NOT NULL,
info VARCHAR(255)
);
-- 普通索引
alter table test5 add index index1(name);
-- 唯一索引
alter table test5 add unique index2(id);
-- 全文索引
alter table test5 add fulltext index3(info);

SHOW INDEX FROM test5;
```

2. 使用 `create index` 创建索引，`CREATE INDEX`语句可以在已经存在的表上添加索引，在MySQL中， `CREATE INDEX` 被映射到一个 `ALTER TABLE` 语句上，基本语法结构为：

```sql
CREATE [UNIQUE | FULLTEXT | SPATIAL] INDEX index_name
ON table_name (col_name[length],...) [ASC | DESC]
```

案例：

```sql
CREATE TABLE test6(
id INT(11) NOT NULL,
name CHAR(30) NOT NULL,
age INT(11) NOT NULL,
info VARCHAR(255)
);

-- 普通索引
create index index1 on test6(name);
-- 唯一索引
create unique index index2 on test6(id);
-- 全文索引
create fulltext index index3 on test6(age);

SHOW INDEX FROM test6;
```

3. 删除索引
   ```sql
   -- 1. 使用ALTER TABLE删除索引
   ALTER TABLE table_name DROP INDEX index_name;

   -- 2. 使用DROP INDEX语句删除索引
   DROP INDEX index_name ON table_name;
   ```

::: tip 提示

提示 删除表中的列时，如果要删除的列为索引的组成部分，则该列也会从索引中删除。如果组成索引的所有列都被删除，则整个索引将被删除。

:::
