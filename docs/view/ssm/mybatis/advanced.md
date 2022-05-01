---
title: Mybatis 查询进阶
autoPrev: mapper
---

## 一对一查询
在实际开发中，经常会遇到一对一查询，一对多查询等。这里我们先来看一对一查询。

例如：每个用户一般只会对应一个地址。

先创建两个表 `user` 和 `address`。建表sql如下：
```sql
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `address_id` bigint NULL DEFAULT NULL COMMENT '地址id',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (7, '张三', 1);
INSERT INTO `user` VALUES (8, '李四', 2);
INSERT INTO `user` VALUES (9, '王五', 3);
INSERT INTO `user` VALUES (10, '赵六', 4);
INSERT INTO `user` VALUES (11, '刘某', 6);
INSERT INTO `user` VALUES (12, 'lisi', 5);

SET FOREIGN_KEY_CHECKS = 1;



DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `address_id` bigint NOT NULL AUTO_INCREMENT,
  `province` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '省市',
  `city` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '城市',
  PRIMARY KEY (`address_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (1, '山东', '济南');
INSERT INTO `address` VALUES (2, '河南', '郑州');
INSERT INTO `address` VALUES (3, '河北', '石家庄');
INSERT INTO `address` VALUES (4, '湖南', '长沙');
INSERT INTO `address` VALUES (5, '湖北', '武汉');
INSERT INTO `address` VALUES (6, '四川', '成都');

SET FOREIGN_KEY_CHECKS = 1;

```
然后分别定义两个实体类

```java
public class User {
    private Long userId;
    private String userName;
    private Long addressId;

    private Address address;

    // 省略 setter/getter/toString 方法
}
```
```java
public class Address {
    private Long addressId;
    private String province;
    private String city;

    // 省略 setter/getter/toString 方法
}
```

再然后创建 Mapper 接口和 Mapper文件。

```java
public interface UserMapper {
    List<User> getAllerUser();
}
```

UserMapper 中定义了一个查询 `getAllerUser` 的方法，但是我希望查出来 `User` 的同时，也能查出来它的 `Address`。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <resultMap id="UserResult" type="top.zxqs.mode.User">
        <id property="userId" column="user_id"/>
        <result property="userName" column="user_name"/>
        <result property="addressId" column="address_id"/>

        <association property="address" javaType="top.zxqs.mode.Address">
            <id property="addressId" column="address_id"/>
            <result property="province" column="province"/>
            <result property="city" column="city"/>
        </association>
    </resultMap>

    <sql id="base_sql">
        select u.user_id,u.user_name,u.address_id,a.address_id,a.province,a.city from user u,address a where u.address_id = a.address_id
    </sql>


    <select id="getAllerUser" resultMap="UserResult">
        <include refid="base_sql"/>
    </select>
</mapper>
```

在这个查询 SQL 中，首先应该做好一对一查询，然后，返回值一定要定义成 `resultMap`，注意，这里千万不能写错。然后，在 `resultMap` 中，来定义查询结果的映射关系。

其中，`association` 节点用来描述一对一的关系。这个节点中的内容，和 `resultMap` 一样，也是 id，result 等，在这个节点中，我们还可以继续描述一对一。

接下来进行测试
```java
public class MybatisTest {
    private SqlSession sqlSession;
    private UserMapper userMapper;
    private AddressMapper addressMapper;
    @Before
    public void before(){
        SqlSessionFactory sessionFactory = SqlSessionFactoryUtils.getInstance();
        sqlSession = sessionFactory.openSession();
        userMapper = sqlSession.getMapper(UserMapper.class);
        addressMapper = sqlSession.getMapper(AddressMapper.class);
    }

    @Test
    public void getAllerUser(){
        List<User> allerUser = userMapper.getAllerUser();
        for(User user : allerUser){
            System.out.println(user);
        }
    }

    @After
    public void after(){
        sqlSession.close();
    }
}
```
结果：
```java
User2{userId=7, userName='张三', addressId=1, address=Address{addressId=1, province='山东', city='济南'}}
User2{userId=8, userName='李四', addressId=2, address=Address{addressId=2, province='河南', city='郑州'}}
User2{userId=9, userName='王五', addressId=3, address=Address{addressId=3, province='河北', city='石家庄'}}
User2{userId=10, userName='赵六', addressId=4, address=Address{addressId=4, province='湖南', city='长沙'}}
User2{userId=11, userName='刘某', addressId=6, address=Address{addressId=6, province='四川', city='成都'}}
User2{userId=12, userName='lisi', addressId=5, address=Address{addressId=5, province='湖北', city='武汉'}}
```

### resultMap 优化和技巧

由于在实际项目中，每次返回的数据类型可能都会有差异，这就需要定义多个 resultMap，而这多个 resultMap 中，又有一部份属性是相同的，所以，我们可以将相同的部分抽出来，做成一个公共的模板，然后被其他 resultMap 继承，优化之后的 mapper 如下：
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <resultMap id="BaseResult" type="top.zxqs.mode.User">
        <id property="userId" column="user_id"/>
        <result property="userName" column="user_name"/>
        <result property="addressId" column="address_id"/>
    </resultMap>

    <resultMap id="UserResult" type="top.zxqs.mode.User" extends="baseResout">
        <association property="address" javaType="top.zxqs.mode.Address">
            <id property="addressId" column="address_id"/>
            <result property="province" column="province"/>
            <result property="city" column="city"/>
        </association>
    </resultMap>

    <sql id="base_sql">
        select u.user_id,u.user_name,u.address_id,a.address_id,a.province,a.city from user u,address a where u.address_id = a.address_id
    </sql>

    <select id="getAllerUser" resultMap="UserResult">
        <include refid="base_sql"/>
    </select>
</mapper>
```

在实际开发中也可以将 `association` 中的属性拆分出来，如下：
```xml
<resultMap id="UserResult" type="top.zxqs.mode.User">
    <id property="userId" column="user_id"/>
    <result property="userName" column="user_name"/>
    <result property="addressId" column="address_id"/>
    <association property="address" javaType="top.zxqs.mode.Address" resultMap="AddressResult"/>
</resultMap>

<resultMap id="AddressResult" type="top.zxqs.mode.Address">
    <id property="addressId" column="address_id"/>
    <result property="province" column="province"/>
    <result property="city" column="city"/>
</resultMap>
```

在`association`中使用`resultMap`引用其他的resultMap。

`UserMapper.XML` 中有了`AddressResult`，如果在 `AddressMapper.XML` 也需要查询，也得再写一个`AddressResult`，为了不重复声明，在`association`中使用`resultMap`也可以直接引用`AddressMapper.XML`中的`AddressResult`。此时只需要在`AddressMapper.XML`中声明`AddressResult`，`UserMapper.XML`不需要声明。具体代码如下：

在`AddressMapper.XML`中声明`AddressResult`
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.AddressMapper">
    <resultMap id="AddressResult" type="top.zxqs.mode.Address">
        <id property="addressId" column="address_id"/>
        <result property="province" column="province"/>
        <result property="city" column="city"/>
    </resultMap>
</mapper>
```
在`association`引用：
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <resultMap id="UserResult" type="top.zxqs.mode.User">
        <id property="userId" column="user_id"/>
        <result property="userName" column="user_name"/>
        <result property="addressId" column="address_id"/>
        <association property="address" javaType="top.zxqs.mode.Address" resultMap="top.zxqs.mapper.AddressMapper.AddressResult"/>
    </resultMap>

    <sql id="base_sql">
        select u.user_id,u.user_name,u.address_id,a.address_id,a.province,a.city from user u,address a where u.address_id = a.address_id
    </sql>

    <select id="getAllerUser" resultMap="UserResult">
        <include refid="base_sql"/>
    </select>
</mapper>
```

## 一对一映射懒加载
上面说的这些加载方式，是一次性的读取到所有数据。然后在 resultMap 中做映射。如果一对一的属性使用不是很频繁，可能偶尔用一下，这种情况下，我们也可以启用懒加载。

懒加载，就是先查询 User，查询 User 的过程中，不去查询 Address，当用户第一次调用了 User 中的 Address 属性后，再去查询 Address。

例如，我们来定义查询方法。
```java
public interface UserMapper {

  User getUserById(Long id);
}
```
```java
public interface AddressMapper {
  Address getAddressById(Long id);
}
```
在`Mapper.XML`中进行配置

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">

    <resultMap id="UserResult" type="top.zxqs.mode.User">
        <id property="userId" column="user_id"/>
        <result property="userName" column="user_name"/>
        <result property="addressId" column="address_id"/>
        <!--id代表getAddressById的参数名，address_id代表getUserById返回的列明-->
        <association property="address" javaType="top.zxqs.mode.Address" select="top.zxqs.mapper.AddressMapper.getAddressById" column="{id=address_id}" fetchType="lazy"/>
    </resultMap>

    <select id="getUserById" resultMap="UserResult">
        select * from user where user_id = #{id}
    </select>
</mapper>
```
这里，定义 `association` 的时候，不直接指定映射的字段，而是指定要执行的方法，通过 `select` 字段来指定。

`column` 表示执行方法时传递的参数字段，前面的`id`表示`getUserById`方法的参数，后面的`address_id`是执行`getUserById` 查询返回的address的id。将查询到的`address_id`的值赋值给`getAddressById`方法的参数，作为查询条件进行查询。如果`getAddressById`有多个参数，用 `,`分隔 `{id=address_id,xx=xx}`

fetchType 表示开启懒加载。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.AddressMapper">
    <resultMap id="AddressResult" type="top.zxqs.mode.Address">
        <id property="addressId" column="address_id"/>
        <result property="province" column="province"/>
        <result property="city" column="city"/>
    </resultMap>

    <select id="getAddressById" resultMap="AddressResult">
        select * from address where address_id = #{id}
    </select>
</mapper>
```

最后进行测试
```java
@Test
public void getUserById(){
    User userById = userMapper.getUserById(8L);
    System.out.println("user.getUserId() = " + user.getUserId());
}
```
不调用 Address 属性时，`getAddressById` 方法不会执行

![getAddressById1](/blogImg/ssm/2021-12-16_16-40-02.png)

```java
@Test
public void getUserById(){
  User user = userMapper.getUserById(8L);
  System.out.println(user.getAddress());
}
```
此时，`getAddressById` 就会执行

![getAddressById2](/blogImg/ssm/2021-12-16_16-44-40.png)

## 一对多查询

一对多查询，也是一个非常典型的使用场景。比如用户和角色的关系，一个用户可以具备多个角色。

用户表继续用一对一的，新建角色表，因为用户和角色是多对多，所以还需要一个`user_role`表

```sql
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `role_id` bigint(0) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(155) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色名称',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, '管理员');
INSERT INTO `role` VALUES (2, '普通角色');

SET FOREIGN_KEY_CHECKS = 1;
```

```sql
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `user_id` bigint(0) NOT NULL COMMENT '用户id',
  `role_id` bigint(0) NOT NULL COMMENT '角色id',
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (7, 1);
INSERT INTO `user_role` VALUES (7, 2);
INSERT INTO `user_role` VALUES (8, 2);

SET FOREIGN_KEY_CHECKS = 1;
```
创建`role`表的实体类，同时修改 User 类

```java
public class Role {
    private Long roleID;
    private String roleName;

    // 省略setter/geter/toString方法
}
```

```java
public class User {
    private Long userId;
    private String userName;
    private Long addressId;

    private List<Role> roles;
    // 省略setter/geter/toString方法
}
```

在`UserMapper.XML`中进行查询

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="top.zxqs.mapper.UserMapper">
    <resultMap id="UserResult" type="top.zxqs.mode.User">
        <id property="userId" column="user_id"/>
        <result property="userName" column="user_name"/>
        <result property="addressId" column="address_id"/>
        <collection property="roles" ofType="top.zxqs.mode.Role">
            <id property="roleId" column="role_id"/>
            <result property="roleName" column="role_name"/>
        </collection>
    </resultMap>

    <select id="getAllUserRole" resultMap="UserResult">
        select u.*,r.role_name from user u
            left join user_role ur on u.user_id = ur.user_id
            left join role r on ur.role_id = r.role_id
    </select>
</mapper>
```
在 resultMap 中，通过 `collection` 节点来描述集合的映射关系。

在接口中定义方法：
```java
public interface UserMapper {

    List<User> getAllUserRole();
}
```

最后性质查询方法
```java
@Test
public void getAllUserRole(){
    List<User> allUserRole = userMapper.getAllUserRole();
    for(User user : allUserRole){
        System.out.println(user);
    }
}
```

结果如下：

```java
10:19:39.740 [main] DEBUG top.zxqs.mapper.UserMapper.getAllUserRole - <==      Total: 7
User{userId=7, userName='张三', addressId=1, roles=[Role{roleID=null, roleName='管理员'}, Role{roleID=null, roleName='普通角色'}]}
User{userId=8, userName='李四', addressId=2, roles=[Role{roleID=null, roleName='普通角色'}]}
User{userId=9, userName='王五', addressId=3, roles=[]}
User{userId=10, userName='赵六', addressId=4, roles=[]}
User{userId=11, userName='刘某', addressId=6, roles=[]}
User{userId=12, userName='lisi', addressId=5, roles=[]}
```

可以看到执行sql查询返回的个数是7，而打印的 user 有6个，这是因为 mybatis 会将主键相同的两条记录，自动整合成一个对象，前提是 `<resultMap>` 标签下的主键要放到 `<id>` 标签里面。

如：
```xml
<resultMap id="UserResult" type="top.zxqs.mode.User">
    <id property="userId" column="user_id"/>
    <result property="userName" column="user_name"/>
    <result property="addressId" column="address_id"/>
    <collection property="roles" ofType="top.zxqs.mode.Role">
        <id property="roleId" column="role_id"/>
        <result property="roleName" column="role_name"/>
    </collection>
</resultMap>
```

一对多也可以使用 `懒加载` 和一对一是一样的，这里就不多说了。
