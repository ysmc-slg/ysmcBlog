---
title: 操作用户和用户组
autoPrev: flowable-ui
---

# 操作用户和用户组

首先创建一个 springboot 工程，添加MySQL和flowable依赖

```xml
 <dependency>
    <groupId>org.flowable</groupId>
    <artifactId>flowable-spring-boot-starter</artifactId>
    <version>6.7.2</version>
</dependency>

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <scope>runtime</scope>
</dependency>
```

然后配置 `properties` 文件

```prpperties
# 数据库驱动：
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
# 数据库连接地址
spring.datasource.url=jdbc:mysql://localhost:3306/flowable_idm?serverTimezone=Asia/Shanghai&useSSL=false&nullCatalogMeansCurrent=true
# 数据库用户名&密码：
spring.datasource.username=root
spring.datasource.password=123456

logging.level.org.flowable=debug
```

启动项目后会自动在数据库中创建flowable需要的表

## 创建一个用户

```java
@SpringBootTest
class FlowableApplicationTests {
    private static final Logger logger = LoggerFactory.getLogger(FlowableApplicationTests.class);


    @Autowired
    IdentityService identityService;

    @Autowired
    IdmManagementService idmManagementService;

    @Test
    void test() {
        // 用户的实体类，对应的是 act_id_user 表
        UserEntityImpl user = new UserEntityImpl();

        user.setId("ysmc");
        user.setDisplayName("余生慢尝");
        user.setPassword("123");
        user.setFirstName("ysmc");
        user.setLastName("ysmc");
        user.setEmail("ysmc@qq.com");
        // 注意：如果是添加用户，一定要设置 Revision 属性为0（默认是1），表示是一个新的用户，在 SaveUserCmd.execute 方法中判断的
        // flowable 的用户表使用了乐观锁，而 revision 字段其实就是配合乐观锁使用的。
        user.setRevision(0);
        // 保存一个用户
        // 这里有两个功能 1. 如果用户存在，则更新  2. 如果用户不存在，则添加
        identityService.saveUser(user);
    }
}
```

::: tip 注意

springboot 已经完成了一些功能，identityService 负责和用户相关的操作，例如 添加/删除/修改用户或者，添加/删除/修改用户组等

如果是添加用户，一定要设置 `Revision` 属性为0（默认是1），表示是一个新的用户。

:::


## 更新用户


```java
@Test
void test02() {
    UserEntityImpl user = new UserEntityImpl();
    user.setId("ysmc");
    user.setPassword("123456");
    user.setEmail("ysmc12356@qq.com");
    user.setRevision(2);
    identityService.saveUser(user);
}
```

::: tip 解析


更新用户信息 saveUser 方法可以用来更新用户信息，但是不能更新密码。每一次更新，数据库中的 Revision 会自增 1 

修改的时候，需要确保 Revision 的版本号和数据库中的保持一致，否则会认为有其他线程操作数据（报错FlowableOptimisticLockingException），这就是一个乐观锁。
    
:::

我们每一次更新都要获取上一次更新的 `revision`，所以需要先查询在修改：

```java
@Test
void test02(){
    // 根据 userId 查询
    User user = identityService.createUserQuery().userId("ysmc").singleResult();

    user.setEmail("111333@11.com");

    identityService.saveUser(user);
}


/**
 updateUserPassword 能修改密码，同时也能修改其他字段
*/
@Test
void test03(){
    // 根据 userId 查询
    User user = identityService.createUserQuery().userId("ysmc").singleResult();

    user.setEmail("dsf@df.com");
    user.setPassword("888");

    identityService.updateUserPassword(user);
}
```

## 查询用户

```java
@Test
void test04(){
   User user = identityService.createUserQuery().userId("ysmc").singleResult();
   logger.info("id:{};displayName:{}",user.getId(),user.getDisplayName());
   
}

/**
    查询所有用户并且根据 id 排序
*/
@Test
void test05(){
    List<User> list = identityService.createUserQuery().orderByUserId().desc().list();

    for(User user : list){
        logger.info("id:{};displayName:{}",user.getId(),user.getDisplayName());
    }
}

```

还有根据 用户名、邮箱等进行查询，这里就不一一列举了。

除了使用 springboot 封装好的以外，也可以自定义 SQL 进行查询，如下：

```java
@Test
void test06(){
    User email = identityService.createNativeUserQuery().sql("select * from act_id_user where EMAIL_=#{email}")
            .parameter("email", "dsf@df.com")
            .singleResult();

    logger.info("id:{};displayName:{}",email.getId(),email.getDisplayName());

}

```

可以看到参数获取方式和 mybatis 一样，其实底层依赖的就是 mybatis。


## 创建用户组

```java
@Test
void test07(){
    GroupEntityImpl groupEntity = new GroupEntityImpl();
    groupEntity.setName("经理");
    groupEntity.setId("leader");
    groupEntity.setRevision(0);

    identityService.saveGroup(groupEntity);
}
```
::: tip

GroupEntityImpl，对应的表是 `act_id_group`

和 用户 一样，用户组中 Revision 也是一个乐观锁，saveGroup也可以完成 `创建` 和修改 `操作`。

用户和用户组是多对多的关系，数据库对应的表是 `act_id_membership`。


:::

紧接着来看一下，怎样添加用户组和用户的关联关系：


```java
@Test
void test08(){
    String userId = "ysmc";
    String groupId = "managers";
    // 添加用户组和用户的关联关系
    identityService.createMembership(userId,groupId);
}
```

这里，表的底层使用了 `外键`，所以要确保传递的参数在 `act_id_group` 和`act_id_user` 表中都是真实存在的否则会报错。

执行sql 如下：

```log
: ==>  Preparing: insert into ACT_ID_MEMBERSHIP (USER_ID_, GROUP_ID_) values ( ?, ? )
: ==> Parameters: ysmc(String), managers(String)
: <==    Updates: 1
```

## 更新用户组

也是先查询后修改：

```java
@Test
void test9(){
    Group managers = identityService.createGroupQuery().groupId("managers").singleResult();

    managers.setName("CEO");
    identityService.saveGroup(managers);
}
```

## 查询用户组

```java
@Test
void test10(){
    Group ceo = identityService.createGroupQuery().groupName("CEO").singleResult();

    logger.info("id:{}.name:{}",ceo.getId(),ceo.getName());
}
```

这里值展示根据用户组的名称进行查找

**根据用户名查找用户所在用户组的信息：**

这个需要多表联合查询，下面案例，查询包含 ysmc 这个用户的用户组

```java
@Test
void test11(){
    List<Group> groups = identityService.createGroupQuery().groupMember("ysmc").list();

    for(Group group:groups){
        logger.info("id:{}.name:{}",group.getId(),group.getName());
    }
}
```

执行 SQL 如下：

```log
==>  Preparing: SELECT RES.* from ACT_ID_GROUP RES WHERE exists(select 1 from ACT_ID_MEMBERSHIP M where M.GROUP_ID_ = RES.ID_ and M.USER_ID_ = ?) order by RES.ID_ asc
==> Parameters: ysmc(String)
<==      Total: 1
```

## 其他相关 API

```java
@Test
void test12(){
    // 查询系统信息，本质上是查询 act_id_property
    Map<String, String> properties = idmManagementService.getProperties();
    Set<String> strings = properties.keySet();

    for(String string : strings){
        logger.info("key:{};value:{}",string,properties.get(string));
    }

    // 查询实体类所对应的表名称
    String tableName = idmManagementService.getTableName(Group.class);
    logger.info("tableName:{}",tableName);
    
    // 获取表的详细信息
    TableMetaData tableMetaData = idmManagementService.getTableMetaData(tableName);
    logger.info("列明：{}",tableMetaData.getColumnNames());
    logger.info("列的类型：{}",tableMetaData.getColumnTypes());
}
```



