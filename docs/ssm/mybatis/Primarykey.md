---
description: MyBatis中主键回填的两种实现方式
autoPrev: select
---

# MyBatis中主键回填的两种实现方式

主键回填其实是一个非常常见的需求，特别是在数据添加的过程中，我们经常需要添加完数据之后，需要获取刚刚添加的数据 id，无论是 Jdbc 还是各种各样的数据库框架都对此提供了相关的支持，本文我就来和和大家分享下数据库主键回填在 MyBatis 中的两种实现思路。

一般情况下，主键有两种生成方式：
1. 主键自增长
2. 自定义主键（一般可以使用UUID）

如果是第二种，主键一般是在Java代码中生成，然后传入数据库执行插入操作，如果是第一个主键自增长，此时，Java 可能需要知道数据添加成功后的主键。

MyBatis 的基本用法就无需多说了，这也不是本文的重点，我们还是来看看 MyBatis 中主键回填的两种不同实现方式吧！

## 方式一

```xml
<insert id="addUser" useGeneratedKeys="true" keyProperty="id">
    insert into user (username,address) values (#{username},#{address});
</insert>
```

这种方式比较简单，就是在插入节点上添加 useGeneratedKeys 属性，同时设置接收回传主键的属性。配置完成后，我们执行一个插入操作，插入时传入一个对象，插入完成后，这个对象的 id 就会被自动赋值，值就是刚刚插入成功的id。


## 方式二

第二种方式则是利用MySQL自带的 `last_insert_id()` 函数查询刚刚插入的id，示例代码如下：

```xml
<insert id="addUser">
    <selectKey keyProperty="id" resultType="java.lang.Integer">
        SELECT LAST_INSERT_ID()
    </selectKey>
    insert into user (username,address) values (#{username},#{address});
</insert>
```

这种方式是在 insert 节点中添加 selectKey 来实现主键回填，实际上这种方式的功能更加丰富，因为 selectKey 节点中的 SQL 我们既可以在插入之前执行，也可以在插入之后执行（通过设置节点的 Order 属性为 AFTER 或者 BEFORE 可以实现），具体什么时候执行，还是要看具体的需求，如果是做主键回填，我们当然需要在插入 SQL 执行之后执行 selectKey 节点中的 SQL。

注意第二种方式一样也要通过设置 keyProperty 来指定将查询到的数据绑定到哪个属性上。
