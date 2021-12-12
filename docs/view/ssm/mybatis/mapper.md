---
title: Mapper 详解
autoPrev: Primarykey
---

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

## Mapper 映射文件

mapper 映射文件，是 MyBatis 中最重要的部分，涉及到的细节也是非常非常多。

### 
