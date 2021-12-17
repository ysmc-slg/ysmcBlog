---
title: 自定义类型转换器
autoPrev: advanced
---
每当MyBatis设置参数到`PrepareStatement`或者从`ResultSet`结果集中取值时，就会用到TypeHandler来处理数据库类型与Java类型之间的转换。

mybatis 类型转换器适用于 Java 实体类中的类型和数据库中的类型不对应时。

下图是默认的TypeHandler：

![TypeHandler](/blogImg/ssm/20190219000805162.png)

但是，有些操作默认的 TypeHandler 是解决不了的。比如，java类中是一个 list 集合，对应的数据库表字段是 varchar。此时就得使用自定义类型转换器了。

```java
public class User {
  private Long userId;
  private String userName;
  private List<String> favorites;
  // 省略setter/getter方法
}
```
一个用户可能有多个爱好，所以是一个集合，和数据库表中的favorites字段则是 `varchar`

定义接口方法
```java
public interface UserMapper {
  List<User> getAllerUser();

  Integer insertUser();
}
```

创建自定义类型转换器

```java
@MappedJdbcTypes(JdbcType.VARCHAR)
@MappedTypes(List.class)
// TypeHandler 的泛型为 要转换参数的类型
public class List2VarcharHandler implements TypeHandler<List<String>> {

    /**
     * 此方法是在插入时进行设置参数，将 list 转换成 String
     * @param ps
     * @param i          为JDBC 预编译时设置参数的索引值
     * @param parameter  需要转换的参数
     * @param jdbcType   要插入 JDBC 的类型
     * @throws SQLException
     */
    public void setParameter(PreparedStatement ps, int i, List<String> parameter, JdbcType jdbcType) throws SQLException {
        StringBuffer buffer = new StringBuffer();

        for(String s : parameter){
            buffer.append(s).append(",");
        }
        // 执行添加sql
        ps.setString(i,buffer.toString());
    }

    /**
     * 将查询到的结果，转换成 list
     *
     * @param rs           查询当前类数据
     * @param columnName   查询当前列名称，需要转换的字段
     * @return
     * @throws SQLException
     */
    public List<String> getResult(ResultSet rs, String columnName) throws SQLException {
        String string = rs.getString(columnName);
        if(string != null){
            return Arrays.asList(string.split(","));
        }
        return null;
    }
    
    public List<String> getResult(ResultSet rs, int columnIndex) throws SQLException {
        String string = rs.getString(columnIndex);
        if(string != null){
            return Arrays.asList(string.split(","));
        }
        return null;
    }

    public List<String> getResult(CallableStatement cs, int columnIndex) throws SQLException {
        String string = cs.getString(columnIndex);
        if(string != null){
            return Arrays.asList(string.split(","));
        }
        return null;
    }
}
```

设置`UserMapper.XML`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <resultMap id="UserResult2" type="top.zxqs.mode.User">
        <id property="userId" column="user_id"/>
        <result property="userName" column="user_name"/>
        <result property="favorites" column="favorites" typeHandler="top.zxqs.handler.List2VarcharHandler"/>
    </resultMap>
    
    <select id="selectUser" resultMap="UserResult2">
        select * from user
    </select>

    <insert id="insertUser" parameterType="top.zxqs.mode.User">
        insert into user (
            <if test="userName != null">user_name,</if>
            <if test="favorites != null">favorites</if>
        ) values (
            <if test="userName != null">#{userName},</if>
            <if test="favorites != null">#{favorites,typeHandler = top.zxqs.handler.List2VarcharHandler}</if>
        )
    </insert>
    
</mapper>
```

