---
title: SSM 整合
---
上面我们讲了Spring、SpringMVC、Mybatis，在实际开发中这三个是需要一起用的，这篇文章就来说说，Spring、SpringMVC、Mybatis的整合。

::: tip 注意

tomcat和jdk版本需要对应，否则会出现兼容性的问题。

我这里使用的是 `jdk1.8` 和 `tomcat9.0.31`，具体的对应关系请点击：[tomcat和各组件的版本兼容](https://tomcat.apache.org/whichversion.html)

:::

## 准备工作
新建一个 `user` 表：
```sql
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user2
-- ----------------------------
INSERT INTO `user` VALUES (1, '张三', '北京');
INSERT INTO `user` VALUES (2, '李四', '南京');

SET FOREIGN_KEY_CHECKS = 1;
```

引入依赖：
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.3.4</version>
    </dependency>
    <!--mybatis-->
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.5.6</version>
    </dependency>
    <!--spring整合mybatis-->
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis-spring</artifactId>
        <version>2.0.6</version>
    </dependency>
    <!--mysql-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.17</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.12.1</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-jdbc</artifactId>
        <version>5.3.4</version>
    </dependency>

    <!--数据库连接池-->
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
        <version>1.2.8</version>
    </dependency>

</dependencies>
```

然后，创建 `User`实体类，mapper 接口 和 mapper.xml

```java
public class User implements Serializable {
    private Long id;
    private String username;
    private String address;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
```

```java
public interface UserMapper {
    List<User> getAllUsers();
}
```

```xml
<mapper namespace="top.zxqs.mapper.UserMapper">

    <select id="getAllUsers" resultType="User">
        select * from user2
    </select>

</mapper>
```

**注意：** 

`mapper.xml`我习惯于放在 `resources` 目录下，所以一会我直接在spring配置文件指定`mapper.xml`的位置。

如果和 mapper 接口在同一目录下，需要在 `pom.xml` 文件中配置一下：
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

具体为什么有两种方式，在上面 mybatis 中有提到，请移步 [mybatis的mapper配置](../mybatis/mapper.html#引入 Mapper)

最后在 resources 下创建 `db.propertie` 用来配置数据源
```properties
db.username=root
db.password=root
db.url=jdbc:mysql://127.0.0.1:3306/test?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
db.driverClass=com.mysql.cj.jdbc.Driver

# 最大并发连接数
db.maxActive=20
# 初始化连接数量
db.initialSize=1
# 配置获取连接等待超时的时间
db.maxWait=60000
# 最小空闲连接数
db.minIdle=10
# 最大空闲连接数
db.maxIdle=15
```

![结构层次](/blogImg/ssm/Snipaste_2021-12-20_16-35-53.png)

## 开始整合

完成准备工作后，我们正式开始整合 ssm。

创建spring的配置文件 `applicationContext.xml`。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!--加载配置属性文件-->
    <context:property-placeholder location="classpath:db.properties"/>

    <context:component-scan base-package="top.zxqs" use-default-filters="true">
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>

    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="url" value="${db.url}"/>
        <property name="driverClassName" value="${db.driverClass}"/>
        <property name="username" value="${db.username}"/>
        <property name="password" value="${db.password}"/>
        <property name="maxActive" value="${db.maxActive}"/>
        <property name="initialSize" value="${db.initialSize}"/>
        <property name="maxWait" value="${db.maxWait}"/>
        <property name="minIdle" value="${db.minIdle}"/>
        <property name="maxIdle" value="${db.maxIdle}"/>
    </bean>

    <bean class="org.mybatis.spring.SqlSessionFactoryBean" id="sqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <!--设置别名-->
        <property name="typeAliasesPackage" value="top.zxqs.model"/>
        <!--mapper.xml的位置-->
        <property name="mapperLocations" value="classpath*:/mapper/*.xml"/>
    </bean>

    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer" id="mapperScannerConfigurer">
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactoryBean"/>
        <!--mapper接口的位置-->
        <property name="basePackage" value="top.zxqs.mapper"/>
    </bean>
</beans>
```
之前都是在 mybatis 配置文件中对数据源和其他的功能进行配置，在 ssm 整合中，mybatis的配置都交给spring容器进行管理。下面我们来详细讲一下里面的配置。

:::tip 配置详解

1. `context:property-placeholder`：加载配置属性文件，这样就能便捷的去修改连接数据库的信息。使用 `${}` 来获取配置文件中的值。

2. `dataSource`：数据源，这里我是用的书 阿里巴巴的 `Druid`

3. `SqlSessionFactoryBean`：配置 `SqlSessionFactory` 里面的参数很多。
   1. `typeAliasesPackage` 是设置别名，在 mapper.xml 中 resultType 就可以直接写 User，不需要写全类名。 
   2. `mapperLocations`：mapper.xml 的位置。

4. `MapperScannerConfigurer`：
   1. `basePackage`：mapper接口的位置，因为我的 mapper 接口和 mapper.xml 不在同一目录下，所以两个的位置不一样。
    
:::

完成上面的配置之后，spring与mybatis的整合就算完成了。

### spring整合springmvc

创建一个 springMVC 配置文件，`spring-servlet.xml`：
```xml
<context:component-scan base-package="top.zxqs" use-default-filters="false">
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>

<mvc:annotation-driven/>

<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name="prefix" value="/WEB-INFO/page"/>
    <property name="suffix" value=".jsp"/>
</bean>
```
springMVC 简单的配置一下就好了。

最后，分别将 `applicationContext.xml` 和 `spring-servlet.xml` 加载到 `web.xml`，SSM 的整合就算是完成了。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:applicationContext.xml</param-value>
    </context-param>
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:spring-servlet.xml</param-value>
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
    <filter>
        <filter-name>encodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>UTF-8</param-value>
        </init-param>
        <init-param>
            <param-name>forceRequestEncoding</param-name>
            <param-value>true</param-value>
        </init-param>
        <init-param>
            <param-name>forceResponseEncoding</param-name>
            <param-value>true</param-value>
        </init-param>
    </filter>
    <filter-mapping>
        <filter-name>encodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
</web-app>
```


