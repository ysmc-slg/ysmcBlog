---
title: springboot 整合web 开发
autoPrev: springboot-view
---

## 整合 Jackson
SpringBoot 中，已经对 Jackson 做了自动化配置，`spring-boot-starter-web` 中也包含了 Jackson 依赖，所以在SpringBoot中什么都不需要配置就可以使用 Jackson。

### 使用方法
接下来我们来说 Jackson 的使用方法。

```java
public class User {
    private String username;
    private Date birthday;

    private String address;
    private Integer age;

    // 省略 setter/getter 方法
}
```

```java
@RestController
public class UserController {

    @GetMapping("/user")
    public User getUserById(){
        User user = new User();
        user.setAge(12);
        user.setBirthday(new Date());
        user.setAddress("北京");
        user.setUsername("张三");

        return user;
    }
}
```

只需要创建一个 User 类，和一个 Controller 并且加上 `@RestController` 注解，就可以将对象序列化为 `json` 字符串。

还可以使用注解进行一些操作：

```java
//@JsonIgnoreProperties({"birthday","address"})
public class User {

    //@JsonProperty(value = "name",index = 99)
    private String username;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "Asia/Shanghai")
    private Date birthday;

    //@JsonIgnore
    private String address;
    
    @JsonProperty(index = 96)
    private Integer age;

}
```

|  注解  |  含义  |
|:-----:|:----:|
|@JsonProperty| name属性，指定属性序列化/反序列化 时的名称。index 代表排列的顺序 |
| @JsonFormat| 日期格式化。注意时区问题 |
|@JsonIgnore| 序列化/反序列化时 忽略某一个字段，在一个属性上和 @JsonProperty 只能使用一个 |
|@JsonIgnoreProperties|序列化/反序列化 批量忽略字段|

如果感觉每一个对象，都要设置 日期 的格式。也可以全局配置。

```java
@Configuration
public class JsonConfig {

    ObjectMapper objectMapper(){
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
        objectMapper.setTimeZone(TimeZone.getTimeZone("GMT+8"));
        return objectMapper;
    }
}
```