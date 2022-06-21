---
description: 认证
autoPrev: README
---

# 认证

在 Spring Security 中，对认证功能做了大量的封装，以至于开发者只需要稍微配置一下就能使用认证功能，然而要深刻理解其源码并非易事，本文带领我们从最基本的用法开始讲解，最终再扩展到对源码的理解。

## Spring Security 基本认证
在 Spring Boot 项目中使用 Spring Security 非常方便，创建一个新的 Spring Boot 项目，只需要引入 Web 和 Spring Security 依赖即可：

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
然后在项目中提供一个用于测试的 `/hello` 接口，代码如下：

```java
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return"hello";
    }
}
```

接下来启动项目，`/hello` 接口就已经被保护起来了。当用户访问 `/hello` 接口时，会自动跳转到登录页面，

![默认登录页面](/blogImg/springsecurity/默认登录页面.jpg)
