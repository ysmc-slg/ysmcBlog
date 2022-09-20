---
description: 分页
autoPrev: multitable
---

# 分页

语法：

```sql
limit [位置偏移量],行数
```

举例：

```sql
--前10条记录： 
SELECT * FROM 表名 LIMIT 0,10; 
-- 或者
SELECT * FROM 表名 LIMIT 10;

--第11至20条记录： 
SELECT * FROM 表名 LIMIT 10,10;

--第21至30条记录： 
SELECT * FROM 表名 LIMIT 20,10;
```

分页显示公式：（当前页数-1）* 每页条数,每页条数

```sql
SELECT * FROM table 
LIMIT(PageNo - 1) * PageSize,PageSize;
```

* 注意：LIMIT 子句必须放在整个SELECT语句的最后！

