---
title: 增删改查与基本架构介绍
---

前面的 HelloWorld ，我们做了一个查询的 Demo，这里我们来看另外四种常见的操作。

## 增

添加记录，id有两种不同的处理方式，一种就是自增长，另一种则是 Java 代码传一个 ID 进来，传一个 ID 进来，这个 ID　可以是一个　UUID，也可以是其他的自定义的　ID。在 MyBatis 中，对这两种方式都提供了相应的支持。

### 主键自增长
首先我们在 Mapper 中，添加 SQL 插入语句：
```xml
<insert id="addUser" parameterType="top.zxqs.model.User">
    insert into user (username,address) values (#{username},#{address});
</insert>
```

这里有一个 `parameterType` 表示传入的参数类型。参数都是通过 `#` 来引用。

然后，在 Java 代码中，调用这个方法：

```java
public class Main {
    public static void main(String[] args) {
        SqlSessionFactory factory = SqlSessionFactoryUtils.getInstance();
        SqlSession sqlSession = factory.openSession();
        User user = new User();
        user.setUsername("赵六");
        user.setAddress("北京");
        int insert = sqlSession.insert("top.zxqs.mapper.UserMapper.addUser", user);

        System.out.println(insert);
        sqlSession.commit();
        sqlSession.close();
    }
}
```

注意，SQL 插入完成后，一定要提交，即 sqlSession.commit()


### 使用 UUID 做主键

也可以使用 UUID 做主键，使用 UUID 做主键，又有两种不同的思路，第一种思路，就是在 Java 代码中生成 UUID，直接作为参数传入到 SQL 中，这种方式就和传递普通参数一样，另一种方式，就是使用 MySQL 自带的 UUID 函数来生成 UUID。

这里我们使用第二种方式，因为第一种方式没有技术含量（自己练习）。使用 MySQL 自带的 UUID 函数，整体思路是这样：首先调用 MySQL 中的 UUID 函数，获取到一个 UUID，然后，将这个 UUID 赋值给 User 对象的 ID 属性，然后再去执行 SQL 插入操作，再插入时使用这个 UUID。

<font color='red'>**注意，这个实验需要先将数据的 ID 类型改为 varchar，同时实体类id也要改成String，测试完成后复原**</font>

```xml
<insert id="addUser" parameterType="top.zxqs.model.User">
    <selectKey resultType="java.lang.String" keyProperty="id" order="BEFORE">
        select uuid();
    </selectKey>
    insert into user (id,username,address) values (#{id},#{username},#{address});
</insert>
```

* selectKey 表示查询 key
* keyProperty 属性表示将查询的结果赋值给传递进来的 User 对象的 id 属性
* resultType 表示查询结果的返回类型
* order 表示这个查询操作的执行时机，BEFORE 表示这个查询操作在 insert 之前执行，AFTER就表示之后执行
* 在 selectKey 节点的外面定义 insert 操作

最后，在Java代码中，调用这个方法

```java
private SqlSession sqlSession;
@Before
public void before() {
    sqlSession = SqlSessionFactoryUtils.getInstance().openSession();
}

@Test
public void addUser() {
    User user = new User();
    user.setUsername("ysmc");
    user.setAddress("www.zxqs.top");
    int insert = sqlSession.insert("top.zxqs.mapper.UserMapper.addUser", user);
    System.out.println("insert = " + insert);
    sqlSession.commit();
}

@After
public void after() {
    sqlSession.close();
}
```

## 删

删除操作比较容易，首先在UserMapper中定义删除sql

```xml
<delete id="deleteUserById" parameterType="java.lang.Long">
    delete from user where id=#{id}
</delete>
```

然后，在 Java 代码中调用该方法：
```java
@Test
public void deleteUserById() {
    int delete = sqlSession.delete("top.zxqs.mapper.UserMapper.deleteUserById", 6L);
    sqlSession.commit();
    System.out.println("delete = " + delete);
}
```

这里的返回值为该 SQL 执行后，数据库受影响的行数。

## 改

修改操作，也是先定义SQL：
```xml
<update id="updateUserById" parameterType="top.zxqs.model.User">
    update user set username = #{username} where id=#{id};
</update>
```

最后在 Java 代码中调用

```java
@Test
public void updateUserById() {
    User user = new User();
    user.setId(5L);
    user.setUsername("李四222");
    int update = sqlSession.update("top.zxqs.model.User.updateUserById", user);
    sqlSession.commit();
    System.out.println("update = " + update);
}
```

查询在上一节 Hello World 中已经写了，这里就不重复了

## MyBatis 架构介绍

看完前面的 HelloWorld，接下来我们通过一张网络图片来看下 MyBatis 架构：

![架构图](/plogImg/ssm/mybatis-4-1.png)

1. mybatis 配置:`mybatis-config.xml`，此文件作为 mybatis 的`全局配置文件`，配置了 mybatis 的运行环境等信息。另一个 `mapper.xml` 文件即 sql 映射文件，文件中配置了操作数据库的 sql 语句。此文件需要在 mybatis-config.xml 中加载。
2. 通过 mybatis 环境等配置信息构造 SqlSessionFactory 即会话工厂
3. 由会话工厂创建 sqlSession 即会话，操作数据库需要通过 sqlSession 进行。
4. mybatis 底层自定义了 Executor 执行器接口操作数据库，Executor 接口有两个实现，一个是基本执行器、一个是缓存执行器。
5. Mapped Statement 也是 mybatis 一个底层封装对象，它包装了 mybatis 配置信息及 sql 映射信息等。mapper.xml 文件中一个 sql 对应一个 Mapped Statement 对象，sql 的 id 即是Mapped statement 的 id。
6. Mapped Statement 对 sql 执行输入参数进行定义，包括 HashMap、基本类型、pojo，Executor 通过 Mapped Statement 在执行 sql 前将输入的 java 对象映射至 sql 中，输入参数映射就是 jdbc 编程中对 preparedStatement 设置参数。

7. Mapped Statement 对 sql 执行输出结果进行定义，包括 HashMap、基本类型、pojo，Executor 通过 Mapped Statement 在执行 sql 后将输出结果映射至 java 对象中，输出结果映射过程相当于 jdbc 编程中对结果的解析处理过程。

## MyBatis 所解决的 JDBC 中存在的问题

1. 数据库链接创建、释放频繁造成系统资源浪费从而影响系统性能，如果使用数据库链接池可解决此问题。解决：在 mybatis-config.xml 中配置数据链接池，使用连接池管理数据库链接。

2. Sql语句写在代码中造成代码不易维护，实际应用 sql 变化的可能较大，sql 变动需要改变 java 代码。解决：将 Sql 语句配置在 XXXXmapper.xml 文件中与 java 代码分离。

3. 向 sql 语句传参数麻烦，因为 sql 语句的 where 条件不一定，可能多也可能少，占位符需要和参数一一对应。解决：Mybatis 自动将 java 对象映射至 sql 语句，通过 statement 中的 parameterType 定义输入参数的类型。

4. 对结果集解析麻烦，sql 变化导致解析代码变化，且解析前需要遍历，如果能将数据库记录封装成 pojo 对象解析比较方便。解决：Mybatis 自动将 sql 执行结果映射至 java 对象，通过 statement 中的 resultType 定义输出结果的类型。