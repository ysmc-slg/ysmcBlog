---
title: MyBatis 简介
---
::: tip

文章引用微信公众号：江南一点雨 Mybaits 教程

:::

## MyBatis 介绍

MyBatis 本是 apache 的一个开源项目 iBatis, 2010 年这个项目由 apache software foundation 迁移到了 google code，并且改名为 MyBatis，实质上 Mybatis 对 ibatis 进行一些改进。MyBatis 是一个优秀的持久层框架，它对 jdbc 的操作数据库的过程进行封装，使开发者只需要关注 SQL 本身，而不需要花费精力去处理例如注册驱动、创建 connection、创建 statement、手动设置参数、结果集检索等 jdbc 繁杂的过程代码。Mybatis 通过 xml 或注解的方式将要执行的各种 statement（statement、preparedStatemnt、CallableStatement）配置起来，并通过 java 对象和 statement 中的 sql 进行映射生成最终执行的 sql 语句，最后由 mybatis 框架执行 sql 并将结果映射成 java 对象并返回。

与其他的对象关系映射框架不同，MyBatis 并没有将 Java 对象与数据库表关联起来，而是将 Java 方法与 SQL 语句关联。MyBatis 允许用户充分利用数据库的各种功能，例如存储过程、视图、各种复杂的查询以及某数据库的专有特性。如果要对遗留数据库、不规范的数据库进行操作，或者要完全控制 SQL 的执行，MyBatis 是一个不错的选择。

MyBatis 官网：https://mybatis.org/mybatis-3/zh/index.html

## Hello World

我们通过一个简单的 HelloWorld 先来看下 MyBatis 的基本用法。

首先来准备一个数据库：

```sql
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '小明', '杭州');
INSERT INTO `user` VALUES (3, 'tom', '上海');
INSERT INTO `user` VALUES (4, '张三', '深圳');
INSERT INTO `user` VALUES (5, '李四', '广州');
INSERT INTO `user` VALUES (6, '王五', '北京');

SET FOREIGN_KEY_CHECKS = 1;
```

接下来创建一个普通的 Maven 工程，不用创建 Web 工程，JavaSE 工程即可。项目创建完成后，添加 MyBatis 依赖：

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.2</version>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.17</version>
</dependency>

```

接下来，在`resource` 目录下创建一个 `Mapper文件（UserMapper.xml）`，Mapper 是用来在 MyBatis 中定义 SQL 的 XML 配置文件，也可以放在其他目录，后面我们再详细说明。

首先需要首先给它取一个 namespace，这相当于是一个分隔符，因为我们在项目中，会存在很多个 Mapper，每一个 Mapper 中都会定义相应的增删改查方法，为了避免方法冲突，也为了便于管理，每一个 Mapper 都有自己的 namespace，而且这个 namespace 不可以重复。

接下来，在 Mapper 中，定义一个简单的查询方法，根据 id 查询一个用户：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <select id="getUserById" resultType="top.zxqs.model.User">
        select * from user where id=#{id};
    </select>

    <select id="getAllUser" resultType="top.zxqs.model.User">
        select * from user;
    </select>
</mapper>

```
在 Mapper 中，首先定义一个 select ，id 表示查询方法的唯一标识符，resultType 定义了返回值的类型。在 select 节点中，定义查询 SQL，#{id}，表示这个位置用来接收外部传进来的参数。

定义的 User 实体类，如下：

```java
public class User {
    private Integer id;
    private String username;
    private String address;

    // 省略setter/getter方法 
}

```

接下来，创建 MyBatis 配置文件。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql:///test?serverTimezone=Asia/Shanghai"/>
                <property name="username" value="root"/>
                <property name="password" value="123"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <mapper resource="mapper\UserMapper.xml"/>
        <package name="top.zxqs.mapper.UserMapper"/>
    </mappers>
</configuration>

```

在这个配置文件中，我们只需要配置 `environments` 和 `mapper` 即可，`environment` 就是 MyBatis 所连接的数据库的环境信息，它放在一个 `environments` 节点中，意味着 environments 中可以有多个 environment，为什么需要多个呢？开发、测试、生产，不同环境各一个 environment，每一个 environment 都有一个 id，也就是它的名字，然后，在 environments 中，通过 default 属性，指定你需要的 environment。每一个 environment 中，定义一个数据的基本连接信息。

在 `mappers` 节点中，定义 `Mapper`，也就是指定我们上一步所写的 Mapper文件（UserMapper.xml）的路径。


最后，我们来加载这个主配置文件：

```java
public class Main {
    public static void main(String[] args) {
        SqlSessionFactory factory = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream("mybatis-config.xml"));
        SqlSession sqlSession = factory.openSession();
        List<User> list = sqlSession.selectList("top.zxqs.mapper.UserMapper.getAllUser");
        for (User user : list) {
            System.out.println("user = " + user);
        }
        sqlSession.close();
    }
}
```

首先，我们加载主配置文件，生成一个 `SqlSessionFactory`，再由 `SqlSessionFactory` 生成一个 `SqlSession`，一个 `SqlSession` 就相当于是我们的一个会话，类似于 JDBC 中的一个连接，在 SQL 操作完成后，这个会话是可以关闭的。

在这里，`SqlSessionFactoryBuilder` 用于创建 `SqlSessionFacoty`，`SqlSessionFacoty` 一旦创建完成就不需要 `SqlSessionFactoryBuilder` 了，因为 SqlSession 是通过 `SqlSessionFactory` 生产，所以可以将 `SqlSessionFactoryBuilder` 当成一个工具类使用，最佳使用范围是方法范围即方法体内局部变量。

`SqlSessionFactory` 是一个接口，接口中定义了 `openSession` 的不同重载方法，`SqlSessionFactory` 的最佳使用范围是整个应用运行期间，一旦创建后可以重复使用，通常以单例模式管理 `SqlSessionFactory`。

`SqlSession` 中封装了对数据库的操作，如：查询、插入、更新、删除等。通过 `SqlSessionFactory` 创建 `SqlSession`，而 `SqlSessionFactory` 是通过 `SqlSessionFactoryBuilder` 进行创建。`SqlSession` 是一个面向用户的接口， sqlSession 中定义了数据库操作，默认使用 `DefaultSqlSession` 实现类。每个线程都应该有它自己的 SqlSession 实例。SqlSession 的实例不能共享使用，它也是线程不安全的。因此最佳的范围是请求或方法范围。绝对不能将 SqlSession 实例的引用放在一个类的静态字段或实例字段中。打开一个 SqlSession；使用完毕就要关闭它。通常把这个关闭操作放到 finally 块中以确保每次都能执行关闭。

基于上面几点，我们可以对 SqlSessionFactory 进行封装：

```java
public class SqlSessionFactoryUtils {
    private static SqlSessionFactory SQLSESSIONFACTORY = null;
    public static SqlSessionFactory getInstance() {
        if (SQLSESSIONFACTORY == null) {
            try {
                SQLSESSIONFACTORY = new SqlSessionFactoryBuilder().build(Resources.getResourceAsStream("mybatis-config.xml"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return SQLSESSIONFACTORY;
    }
}
```

这样，在需要使用的时候，通过这个工厂方法来获取 SqlSessionFactory 的实例。