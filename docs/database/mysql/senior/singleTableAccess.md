---
title: 单表访问方法
autoPrev: dataDirectory
---

# 单表访问方法

首先创建一个表：

```sql
CREATE TABLE single_table (
 id INT NOT NULL AUTO_INCREMENT,
 key1 VARCHAR(100),
 key2 INT,
 key3 VARCHAR(100),
 key_part1 VARCHAR(100),
 key_part2 VARCHAR(100),
 key_part3 VARCHAR(100),
 common_field VARCHAR(100),
 PRIMARY KEY (id),
 KEY idx_key1 (key1),
 UNIQUE KEY idx_key2 (key2),
 KEY idx_key3 (key3),
 KEY idx_key_part(key_part1, key_part2, key_part3)
) Engine=InnoDB CHARSET=utf8;
```

我们为这个 single_table 表建立了1个聚簇索引和4个二级索引，分别是：

* 为 id 列建立的聚簇索引。
* 为 key1 列建立的 idx_key1 二级索引。
* 为 key2 列建立的 idx_key2 二级索引，而且该索引是唯一二级索引。
* 为 key3 列建立的 idx_key3 二级索引。
* 为 key_part1 、 key_part2 、 key_part3 列建立的 idx_key_part 二级索引，这也是一个联合索引。

然后我们需要为这个表插入10000行记录，除 id 列外其余的列都插入随机值就好了，具体的插入语句我就不写了，自己写个程序插入吧（id列是自增主键列，不需要我们手动插入）。

## 访问方法的概念

对于单个表的查询来说，MySQL把查询的执行方式大致分为下边两种：

* 使用全表扫描进行查询
  
  这种执行方式很好理解，就是把表的每一行记录都扫一遍嘛，把符合搜索条件的记录加入到结果集就完了。不管是啥查询都可以使用这种方式执行，当然，这种也是最笨的执行方式。
* 使用索引进行查询
  
  因为直接使用全表扫描的方式执行查询要遍历好多记录，所以代价可能太大了。如果查询语句中的搜索条件可以使用到某个索引，那直接使用索引来执行查询可能会加快查询执行的时间。使用索引来执行查询的方式五花八门，又可以细分为许多种类：
  * 针对主键或唯一二级索引的等值查询
  * 针对普通二级索引的等值查询
  * 针对索引列的范围查询
  * 直接扫描整个索引

MySQL 执行查询语句的方式称之为 `访问方法` 或者 `访问类型`。同一个查询语句可能可以使用多种不同的访问方法来执行，虽然最后的查询结果都是一样的，但是执行的时间可能差远了。

下边细细道来各种 `访问方法` 的具体内容。

## const


