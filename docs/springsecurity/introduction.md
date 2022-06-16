---
description: SpringSecurity 入门
autoPrev: README
---
# SpringSecurity 入门

## 创建项目

首先新建一个 Spring Boot 项目，创建时引入 `Spring Security` 依赖和 `web` 依赖

创建成功后，我们添加一个测试的 `HelloController` 内容如下：

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return"hello";
    }
}
```
接下来什么事情都不用做，我们直接来启动项目。

在项目启动过程中，我们会看到如下一行日志：

```properties
Using generated security password: 30abfb1f-36e1-446a-a79b-f70024f589ab
```

这就是 Spring Security 为默认用户 user 生成的临时密码，是一个 UUID 字符串。

接下来我们去访问 http://localhost:8080/hello 接口，就可以看到自动重定向到登录页面了：

![登录页面](/blogImg/springsecurity/6.png)

在登录页面，默认的用户名就是 `user`，默认的登录密码则是项目启动时控制台打印出来的密码，输入用户名密码之后，就登录成功了，登录成功后，我们就可以访问到 `/hello`接口了。

在 `Spring Security` 中，默认的登录页面和登录接口，都是 `/login` ，只不过一个是 `get` 请求（登录页面），另一个是 `post` 请求（登录接口）。

有人说，你怎么知道知道生成的默认密码是一个 UUID 呢？

这个其实很好判断。

和用户相关的自动化配置类在 `UserDetailsServiceAutoConfiguration` 里边，在该类的 `getOrDeducePassword` 方法中，我们看到如下一行日志：

```java
if (user.isPasswordGenerated()) {
	logger.info(String.format("%n%nUsing generated security password: %s%n", user.getPassword()));
}
```

毫无疑问，我们在控制台看到的日志就是从这里打印出来的。打印的条件是 `isPasswordGenerated` 方法返回 `true`，即密码是默认生成的。

进而我们发现，`user.getPassword` 出现在 `SecurityProperties` 中，在 `SecurityProperties` 中我们看到如下定义：

```java
/**
 * Default user name.
 */
private String name = "user";
/**
 * Password for the default user name.
 */
private String password = UUID.randomUUID().toString();
private boolean passwordGenerated = true;
```

可以看到，默认的用户名就是 `user`，默认的密码则是 `UUID`，而默认情况下，`passwordGenerated` 也为 `true`。

## 用户配置

### 配置文件
我们可以在 `application.properties` 中配置默认的用户名密码。

怎么配置呢？大家还记得上一小节我们说的 `SecurityProperties`，默认的用户就定义在它里边，是一个静态内部类，我们如果要定义自己的用户名密码，必然是要去覆盖默认配置，我们先来看下 `SecurityProperties` 的定义：

```java
@ConfigurationProperties(prefix = "spring.security")
publicclass SecurityProperties {
}
```

这就很清晰了，我们只需要以 spring.security.user 为前缀，去定义用户名密码即可：

```properties
spring.security.user.name=zxqs
spring.security.user.password=123
```

这就是我们新定义的用户名密码。

在 properties 中定义的用户名密码最终是通过 set 方法注入到属性中去的，这里我们顺便来看下 `SecurityProperties.User#setPassword` 方法:

```java
public void setPassword(String password) {
	if (!StringUtils.hasLength(password)) {
		return;
	}
	this.passwordGenerated = false;
	this.password = password;
}
```

从这里我们可以看到，`application.properties` 中定义的密码在注入进来之后，还顺便设置了 `passwordGenerated` 属性为 `false`，这个属性设置为 `false` 之后，控制台就不会打印默认的密码了。

此时重启项目，就可以使用自己定义的用户名/密码登录了。

