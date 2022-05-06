---
description: Mapper 详解
autoPrev: Primarykey
---

# Mapper 详解

## 引入 Mapper
前面我们所写的增删改查是存在问题的。主要问题就是冗余代码过多，模板化代码过多。例如，我想开发一个 UserDao，可能是下面这样：

```java
public class UserDao {
    private SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtils.getInstance();

    public User getUserById(Integer id) {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        User user = (User) sqlSession.selectOne("top.zxqs.mapper.UserMapper.getUserById", id);
        sqlSession.close();
        return user;
    }

    public Integer addUser(User user) {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        int insert = sqlSession.insert("top.zxqs.mapper.UserMapper.addUser", user);
        sqlSession.commit();
        sqlSession.close();
        return insert;
    }

    public Integer addUser2(User user) {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        int insert = sqlSession.insert("top.zxqs.mapper.UserMapper.addUser2", user);
        sqlSession.commit();
        sqlSession.close();
        return insert;
    }

    public Integer deleteUserById(Integer id) {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        int delete = sqlSession.delete("top.zxqs.mapper.UserMapper.deleteUserById", id);
        sqlSession.commit();
        sqlSession.close();
        return delete;
    }

    public Integer updateUser(User user) {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        int delete = sqlSession.delete("top.zxqs.mapper.UserMapper.updateUser", user);
        sqlSession.commit();
        sqlSession.close();
        return delete;
    }

    public List<User> getAllUser() {
        SqlSession sqlSession = sqlSessionFactory.openSession();
        List<User> users = sqlSession.selectList("top.zxqs.mapper.UserMapper.getAllUser");
        sqlSession.close();
        return users;
    }
}

```

然后，和这个 UserDao 对应的，还有一个 UserMapper.xml:

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <select id="getUserById" resultType="top.zxqs.model.User">
        select * from user where id=#{id};
    </select>
    <insert id="addUser" parameterType="top.zxqs.model.User">
        insert into user (username,address) values (#{username},#{address});
    </insert>
    <insert id="addUser2" parameterType="top.zxqs.model.User">
        <selectKey resultType="java.lang.String" keyProperty="id" order="BEFORE">
            select uuid();
        </selectKey>
        insert into user (id,username,address) values (#{id},#{username},#{address});
    </insert>

    <delete id="deleteUserById" parameterType="java.lang.Integer">
        delete from user where id=#{id}
    </delete>

    <update id="updateUser" parameterType="top.zxqs.model.User">
        update user set username = #{username} where id=#{id};
    </update>

    <select id="getAllUser" resultType="top.zxqs.model.User">
        select * from user;
    </select>
</mapper>

```

此时，我们分析这个 UserDao，发现它有很多可以优化的地方。每个方法中都要获取 SqlSession，涉及到增删改的方法，还需要 commit，SqlSession 用完之后，还需要关闭，sqlSession 执行时需要的参数就是方法的参数，sqlSession 要执行的 SQL ，和 XML 中的定义是一一对应的。这是一个模板化程度很高的代码。

既然模板化程度很高，我们就要去解决它，原理很简单，就是前面 Spring 中所说的动态代理。我们可以将当前方法简化成 一个接口：

```java
package top.zxqs.mapper;

public interface UserMapper {
    User getUserById(Integer id);

    Integer addUser(User user);

    Integer addUser2(User user);

    Integer deleteUserById(Integer id);

    Integer updateUser(User user);

    List<User> getAllUser();
}
```
这个接口对应的 Mapper 文件如下

```xml
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <select id="getUserById" resultType="top.zxqs.model.User" parameterType="java.lang.Long">
        select * from user where id=#{id};
    </select>

    <select id="getAllUser" resultType="top.zxqs.model.User">
        select * from user;
    </select>

    <insert id="addUser" parameterType="top.zxqs.model.User" useGeneratedKeys="true"  keyProperty="id">
        <!--<selectKey resultType="java.lang.String" keyProperty="id" order="BEFORE">
            select uuid();
        </selectKey>-->
        insert into user (username,address) values (#{username},#{address});
    </insert>

    <delete id="deleteUserById" parameterType="java.lang.Long">
        delete from user where id=#{id}
    </delete>

    <update id="updateUserById" parameterType="top.zxqs.model.User">
        update user set username = #{username} where id=#{id};
    </update>
</mapper>
```

使用这个接口，完全可以代替上面的 UserDao，为什么呢？因为这个接口提供了 UserDao 所需要的最核心的东西，根据这个接口，就可以自动生成 UserDao：

* 首先，UserDao 中定义了 SqlSessionFactory，这是一套固定的代码
* UserMapper 所在的包+UserMapper 类名+UserMapper 中定义好的方法名，就可以定位到要调用的 SQL
* 要调用 SqlSession 中的哪个方法，根据定位到的 SQL 节点就能确定

然后，加载配置文件，获取 UserMapper，并调用它里边的方法：

```java
public class Main2 {
    public static void main(String[] args) {
        SqlSessionFactory instance = SqlSessionFactoryUtils.getInstance();
        SqlSession sqlSession = instance.openSession();
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        List<User> allUser = mapper.getAllUser();
        System.out.println(allUser);
    }
}


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

**注意：**

在 Maven 中，默认情况下，Maven 要求我们将 XML 配置、properties 配置等，都放在 `resources` 目录下，如果我们强行放在 java 目录下，默认情况下，`打包的时候这个配置文件会被自动忽略掉`。对于这两个问题，我们有两种解决办法：

1. 不要忽略 XML 配置：

    我们可以在 pom.xml 中，添加如下配置，让 Maven 不要忽略我在 java 目录下的 XML 配置：
    ```xml
    <build>
        <resources>
            <resource>
                <directory>src/main/java</directory>
                <includes>
                    <include>**/*.xml</include>
                </includes>
            </resource>
            <resource>
                <directory>src/main/resources</directory>
            </resource>
        </resources>
    </build>
    ```

2. 按照 Maven 的要求来
    就是放到`resources` 目录下，将 xml 文件放到 resources 目录下，但是，MyBatis 中默认情况下要求，UserMapper.xml 和 UserMapper 接口，必须放在一起，所以，我们需要手动在 resources 目录下，创建一个和 UserMapper 接口相同的目录` top.zxqs.mapper`。

    还有就是，将 Mapper.xml 和 Mapper 接口，的位置都在mybatis配置文件中进行配置
    ```xml
    mybatis-config.xml
    
    <mappers>
       <!-- Mapper.xml 的位置 -->
        <mapper resource="mapper\UserMapper.xml"/>
        <!-- Mapper接口 的位置 -->
        <package name="top.zxqs.mapper.UserMapper"/>
    </mappers>
    ```

    此时，UserMapper.xml 和 UserMapper 接口，就可以不在同意目录下。UserMapper.xml在 resources 下的mapper目录中

## $ 和 # 的区别

这是一个非常高频的面试题，虽然简单。在面试中，如果涉及到 MyBatis，一般情况下，都是这个问题。

在 MyBatis 中，我们在 mapper 引用变量时，默认使用的是 `#`，像下面这样：
```xml
<select id="getUserById" resultType="top.zxqs.mode.User">
    select * from user where id=#{id};
</select>
```
除了使用 `#` 之外，我们也可以使用 `$` 来引用一个变量：
```xml
<select id="getUserById" resultType="top.zxqs.mode.User">
    select * from user where id=${id};
</select>
```

既然 # 和 $ 符号都可以使用，那么他们有什么区别呢？

我们在 `resources` 目录下，添加 `log4j.properties`，将Mybatis 执行时的 SQL打印出来：
```properties
log4j.rootLogger=DEBUG,stdout
log4j.logger.org.mybatis=DEBUG
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%5p %d %C: %m%n 
```

然后添加日志依赖：

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.5</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.7.5</version>
</dependency>
```

然后，我们可以分别观察 `$` 和 `#` 执行时的日志：
![mybatis-7-1-1](/blogImg/ssm/mybatis-7-1-1.png)

上面这个日志，是 `$` 符号执行的日志，可以看到，SQL 直接拼接好了，没有参数。

下面这个，是 `#` 执行的日志，可以看到，这个日志中，使用了预编译的方式：
![mybatis-7-1-1](/blogImg/ssm/mybatis-7-1-2.png)

在 JDBC 调用中，SQL 的执行，我们可以通过字符串拼接的方式来解决参数的传递问题，也可以通过占位符的方式来解决参数的传递问题。当然，这种方式也传递到 MyBatis 中，在 MyBatis 中，`$` 相当于是参数拼接的方式，而 `#` 则相当于是占位符的方式。

一般来说，由于参数拼接的方式存在 SQL 注入的风险，因此我们使用较少，但是在一些特殊的场景下，又不得不使用这种方式。

例如传入一个动态字段进来，假设我想查询所有数据，要排序查询，但是排序的字段不确定，需要通过参数传入，这种场景就只能使用 `$`，例如如下方法：
```java
List<User> getAllUser(String orderBy);
```
定义该方法对应的 XML 文件
```xml
<select id="getAllUser" resultType="top.zxqs.mode.User">
    select * from user order by ${orderBy} desc;
</select>
```

测试一下：

```java
@Test
public void test1 (){
    List<User> allUser = userMapper.getAllUser("id");
    System.out.println(allUser);
}
```

小结：

面试中，遇到这个问题，一定要答出来 Statement 和 PreparedStatement 之间的区别，这个问题才算理解到位了。

## parameterType
这个表示输入的参数类型

### 简单类型
简单数据类型传递比较容易，像前面的根据 `id` 查询一条记录就算是这一类的。

这里再举一个例子，比如根据id 修改用户名：
```java
public interface UserMapper {
    Integer updateUserById(String username,Integer id);
}
```

再定义该方法对应的mapper：
```xml
<update id="updateUserById">
    update user set username = #{username} where id=#{id};
</update>
```

此时，如果直接调用该方法，会抛出异常

```java
org.apache.ibatis.exceptions.PersistenceException: 
### Error updating database.  Cause: org.apache.ibatis.binding.BindingException: Parameter 'username' not found. Available parameters are [arg1, arg0, param1, param2]
### The error may exist in mapper\UserMapper.xml
### The error may involve defaultParameterMap
### The error occurred while setting parameters
### SQL: update user set username = ? where id=?;
### Cause: org.apache.ibatis.binding.BindingException: Parameter 'username' not found. Available parameters are [arg1, arg0, param1, param2]
```
这里是说，找不到我们定义的 `username` 和 `id` 这两个参数。同时，这个错误提示中提示，可用的参数名是 [arg1, arg0, param1, param2]，相当于我们自己给变量取的名字失效了，要使用系统提供的默认名字，默认名字实际上是两套体系：

第一套就是 arg0，arg1...

第二套就是 param1，param2...

注意，这两个的下标是不一样的。

因此，按照错误提示，我们将参数改为下面这样：
```xml
<update id="updateUserById">
    update user set username = #{arg0} where id=#{arg1};
</update>
```
或者下面这样
```xml
<update id="updateUserById">
    update user set username = #{param1} where id=#{param2};
</update>
```

这两种方式，都可以使该方法顺利执行。

但是，默认的名字不好记，容易出错，我们如果想要使用自己写的变量的名字，可以通过给参数添加 @Param 来指定参数名（一般在又多个参数的时候，需要加），一旦用 @Param 指定了参数类型之后，可以省略掉参数类型，就是在 xml 文件中，不用定义 parameterType 了：
```java
Integer updateUsernameById(@Param("username") String username, @Param("id") Integer id);
```
这样定义之后，我们在 mapper.xml 文件中，就可以直接使用 username 和 id 来引用变量了。
```xml
<update id="updateUserById">
    update user set username = #{username} where id=#{id};
</update>
```

### 对象参数
例如添加一个用户：
```java
public interface UserMapper {
    Integer addUser(User user);
}
```
对应的 mapper 文件如下：
```xml
<insert id="addUser" parameterType="top.zxqs.mode.User">
    insert into user (username,address) values (#{username},#{address});
</insert>
```
我们在引用的时候，直接使用属性名就能够定位到对象了。如果对象存在多个，我们也需要给对象添加 @Param 注解，如果给对象添加了 @Param 注解，那么对象属性的引用，会有一些变化。如下：
```java
public interface UserMapper {
    Integer addUser(@Param("user")User user);
}
```
如果对象参数添加了 @Param 注解，Mapper 中的写法就会发生变化：
```xml
<insert id="addUser" parameterType="top.zxqs.mode.User">
    insert into user (username,address) values (#{user.username},#{user.address});
</insert>
```
注意多了一个前缀，这个前缀不是变量名，而是 @Param 注解中定义名称。

如果对象中还存在对象，用 `.` 继续取访问就可以了。

### Map 参数
一般不推荐在项目中使用 Map 参数。如果想要使用 Map 传递参数，技术上来说，肯定是没有问题的。
```java
Integer updateUsernameById(HashMap<String,Object> map);
```

## resultType

resultType 是返回类型，在实际开发中，如果返回的数据类型比较复杂，一般我们使用 `resultMap`，但是，对于一些简单的返回，使用 `resultType` 就够用了。

resultType 返回的类型可以是简单类型，可以是对象，可以是集合，也可以是一个 hashmap，如果是 hashmap，map 中的 key 就是字段名，value 就是字段的值。

输出 pojo 对象和输出 pojo 列表在 sql 中定义的 resultType 是一样的。
返回单个 pojo 对象要保证 sql 查询出来的结果集为单条，内部使用 sqlSession.selectOne 方法调用，mapper 接口使用 pojo 对象作为方法返回值。返回 pojo 列表表示查询出来的结果集可能为多条，内部使用 sqlSession.selectList 方法，mapper 接口使用 List 对象作为方法返回值。

## resultMap
在实际开发中，resultMap 是使用较多的返回数据类型配置。因为实际项目中，一般的返回数据类型比较丰富，要么字段和属性对不上，要么是一对一、一对多的查询，等等，这些需求，单纯的使用 resultType 是无法满足的，因此我们还需要使用 resultMap，也就是自己定义映射的结果集。

先来看一个基本用法：

首先在 `mapper.xml` 中定义一个 `resultMap`：

```xml
<resultMap id="MyResultMap" type="top.zxqs.mode.User">
    <id column="id" property="id"/>
    <result column="username" property="username"/>
    <result column="address" property="address"/>
</resultMap>
```

在这个 `resultMap` 中，id 用来描述主键，column 是数据库查询出来的列名，property 则是对象中的属性名。

然后再查询结果中，定义返回值时使用这个 `resultMap`
```xml
<select id="selectUserById" resultMap="MyResultMap">
    select * from user where id = #{id};
</select>
```
**注意，在旧版的 MyBatis 中，要求实体类一定要有一个无参构造方法，新版的 MyBatis 没有这个要求。**

当然，我们也可以在 resultMap 中，自己指定要调用的构造方法，指定方式如下：
```xml
<resultMap id="MyResultMap" type="top.zxqs.mode.User">
    <constructor>
        <idArg column="id" name="id"/>
        <arg column="username" name="username"/>
    </constructor>
</resultMap>
```

这个就表示使用两个参数的构造方法取构造一个 User 实例。注意，name 属性表示构造方法中的变量名，默认情况下，变量名是 arg0、arg1、、、、或者 param1、param2、、、，如果需要自定义，我们可以在构造方法中，手动加上 @Param 注解。

```java
public class User {
    private Integer id;
    private String username;
    private String address;

    public User(@Param("id") Integer id, @Param("username") String username) {
        this.id = id;
        this.username = username;
        System.out.println("这是两个参数的构造方法");
    }

    // 省略setter、getter方法
}
```

## 动态 SQL

动态 SQL 是 MyBatis 中非常强大的一个功能。例如一些常见的查询场景：

* 查询条件不确定
* 批量插入
* ….
这些类似需求，我们都可以通过 MyBatis 提供的动态 SQL 来解决。

MyBatis 中提供的动态 SQL 节点非常多。

### if
if 是一个判断节点，如果满足某个条件，节点中的 SQL 就会生效，例如分页查询，要传递两个参数，页码和查询的记录数，如果这两个参数都为null，那就查所有。
```java
List<User> getUserByPage(@Param("start") Integer start, @Param("count") Integer count);
```
接口定义成功后，接下来在 XML 中定义 SQL：
```xml
<select id="getUserByPage" resultMap="MyResultMap">
    select * from user
    <if test="start !=null and count!=null">
        limit #{start},#{count}
    </if>
</select>
```
if 节点中，test 表示判断条件，如果判断结果为 true，则 if 节点的中的 SQL 会生效，否则不会生效。也就是说，在方法调用时，如果分页的两个参数都为 null，则表示查询所有数据：

```java
@Test
public void getUserByPage (){
    List<User> users = userMapper.getUserByPage(3,3);
    //List<User> users = userMapper.getUserByPage(null,null);
    System.out.println(users);
}
```

### where
where 用来处理查询参数，例如存在下面一个查询函数
```java
List<User> getUserByUsernameAndId(@Param("id") Integer id, @Param("name") String name);
```
这个查询的复杂之处在于：每一个参数都是可选的，如果 id 为null，则表示根据 name 查询，name 为null，则表示根据id查询，两个都为null，表示查询所有。

```xml
<select id="getUserByUsernameAndId" resultMap="MyResultMap">
    select * from user
    <where>
        <if test="id != null">
            and id = #{id}
        </if>
        <if test="name != null">
            and username like concat('%',#{name},'%')
        </if>
    </where>
</select>
```
用 where 节点将所有的查询条件包起来，如果有满足的条件 `where` 节点会自动加上，如果没有，`where` 节点也将不存在，在只有一个参数的情况下，`where` 还会自动将 `and` 关键字去掉。

```java
@Test
public void getUserByUsernameAndId(){
    List<User> users = userMapper.getUserByUsernameAndId(12, "广坤");
    System.out.println(users);
}
```

### foreach

`foreach` 用来处理数组/集合参数。

例如，我们有一个批量查询的需求。
```java
List<User> getUserByIds(Integer[] ids);
```
对应的 XML 如下：

```xml
<select id="getUserByIds" resultMap="MyResultMap">
    select * from user where id in
    <foreach collection="array" open="(" close=")" item="id" separator=",">
        #{id}
    </foreach>
</select>
```

在 `mapper` 中，通过 `foreach` 节点来遍历数组，`collection` 表示数组变量，`open` 表示循环开始时，左边的符号，`close` 表示循环结束后，右边的符号，`item` 数组中的每一个`id`，`separator`表示循环的元素之间的分隔符。

::: waring 注意

默认情况下，无论你的数组/集合 参数名字是什么，在 XML 中访问的时候，都是 `array`，开发者可以通过 `@Param` 注解给参数重新指定名字。

:::

例如还有一个批量插入的需求
```java
Integer batchInsertUser(@Param("users") List<User> users);
```
然后，定义该方法对应的 `mapper`：

```xml
<insert id="batchInsertUser">
    insert into user (username,address) values 
    <foreach collection="users" separator="," item="user">
        (#{user.username},#{user.address})
    </foreach>
</insert>
```
然后进行测试：
```java
@Test
public void batchInsertUser(){
    List<User> users = new ArrayList<User>();
    User user = new User();
    user.setUsername("ysmc");
    user.setAddress("www.zxqs.top");
    users.add(user);

    User user2 = new User();
    user2.setUsername("zhangsan");
    user2.setAddress("济南");
    users.add(user2);

    Integer integer = userMapper.batchInsertUser(users);
    System.out.println(integer);
    SQLSESSION.commit();
}
```

### SQL 片段
大家知道，在 SQL 查询中，一般不建议写 `*`，因为 select `*` 会降低查询效率。但是，每次查询都要把字段名列出来，太麻烦。这种情况，我们可以利用 SQL 片段来解决这个问题。

例如，我们在 mapper 中定义一个 SQL 片段。

```xml
<sql id="baseColumn">
    select id,username,address from user
</sql>
```
然后，在其他 SQL 中，就可以引用这个变量。修改之前的根据id查询用户的sql。

```xml
<select id="selectUserById" resultMap="MyResultMap">
    <include refid="baseColumn"/>
    where id = #{id};
</select>
```

### set
set 关键字一般用在更新中，因为大部分情况下，更新的字段可能不确定，如果对象中存在改字段的值，就更新该字段，不存在，就不更新。例如如下方法：
``` java
Integer updateUser(User user);
```
现在，这个方法的需求是，根据用户 id 来跟新用户的其他属性，所以，user 对象中一定存在 id，其他属性则不确定，其他属性要是有值，就更新，没值（也就是为 null 的时候），则不处理该字段。

我们结合 set 节点，写出来的 sql 如下：
```xml
<update id="updateUser" parameterType="top.zxqs.mode.User">
    update user
    <set>
        <if test="username != null">username = #{username},</if>
        <if test="address != null">address = #{address}</if>
    </set>
    where id = #{id}
</update>
```

测试：
```java
@Test
public void updateUser(){
    User user = new User();
    user.setId(12);
    user.setUsername("lisi");
    user.setAddress("新疆");

    Integer integer = userMapper.updateUser(user);
    System.out.println(integer);
    SQLSESSION.commit();

}
```
