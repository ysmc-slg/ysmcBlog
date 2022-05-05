---
title: springboot整合视图层
autoPrev: basicconfig
---

## Thymeleaf

Thymeleaf 是新一代 Java 模板引擎，它类似于 Velocity、FreeMarker 等传统 Java 模板引擎，但是与传统 Java 模板引擎不同的是，Thymeleaf 支持 HTML 原型。

它既可以让前端工程师在浏览器中直接打开查看样式，也可以让后端工程师结合真实数据查看显示效果，同时，SpringBoot 提供了 Thymeleaf 自动化配置解决方案，因此在 SpringBoot 中使用 Thymeleaf 非常方便。

事实上， Thymeleaf 除了展示基本的 HTML ，进行页面渲染之外，也可以作为一个 HTML 片段进行渲染，例如我们在做邮件发送时，可以使用 Thymeleaf 作为邮件发送模板。

另外，由于 Thymeleaf 模板后缀为 `.html`，可以直接被浏览器打开，因此，预览时非常方便。


## spring boot 整合 Thymeleaf

Spring Boot 中整合 Thymeleaf 非常容易。只需要添加依赖就行

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>

```

Spring Boot 针对 Thymeleaf 提供了一整套的自动化配置方案，可以在`properties文件`中自定义。也可以直接是由默认的配置。具体配置如下：

```properties
# THYMELEAF (ThymeleafAutoConfiguration)
# 开启模板缓存（默认值： true ）
spring.thymeleaf.cache=true
# 检查模板是否存在，然后再呈现
spring.thymeleaf.check-template=true
# 检查模板位置是否正确（默认值 :true ）
spring.thymeleaf.check-template-location=true
#Content-Type 的值（默认值： text/html ）
spring.thymeleaf.content-type=text/html
# 开启 MVC Thymeleaf 视图解析（默认值： true ）
spring.thymeleaf.enabled=true
# 模板编码
spring.thymeleaf.encoding=UTF-8
# 要被排除在解析之外的视图名称列表，⽤逗号分隔
spring.thymeleaf.excluded-view-names=
# 要运⽤于模板之上的模板模式。另⻅ StandardTemplate-ModeHandlers( 默认值： HTML5)
spring.thymeleaf.mode=HTML5
# 在构建 URL 时添加到视图名称前的前缀（默认值： classpath:/templates/ ）
spring.thymeleaf.prefix=classpath:/templates/
# 在构建 URL 时添加到视图名称后的后缀（默认值： .html ）
spring.thymeleaf.suffix=.html
```

接下来我们就可以创建 Controller 了，实际上引入 Thymeleaf 依赖之后，我们可以不做任何配置。新建的 IndexController 如下：

```java
@Controller
public class IndexController {
    @GetMapping("/index")
    public String index(Model model) {
        List<User> users = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            User u = new User();
            u.setId((long) i);
            u.setName("ysmc:" + i);
            u.setAddress("济南:" + i);
            users.add(u);
        }
        model.addAttribute("users", users);
        return "index";
    }
}
public class User {
    private Long id;
    private String name;
    private String address;
    //省略 getter/setter
}

```

在 IndexController 中返回逻辑视图名+数据，逻辑视图名为 index ，意思我们需要在 `resources/templates` 目录下提供一个名为 index.html 的 Thymeleaf 模板文件。

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<table border="1">
    <tr>
        <td>编号</td>
        <td>用户名</td>
        <td>地址</td>
    </tr>
    <tr th:each="user : {users}">
        <td th:text="{user.id}"></td>
        <td th:text="{user.name}"></td>
        <td th:text="{user.address}"></td>
    </tr>
</table>
</body>
</html>

```
在`Thymeleaf` 中，通过 `th:each` 指令来遍历一个集合，数据的展示通过 `th:text` 指令来实现，

注意 `index.html` 最上面引入 thymeleaf 名称空间（最新版并无强制要求）。

配置完成后，就可以启动项目了，访问 `/index` 接口，就能看到集合中的数据了：


![thymeleaf](/blogImg/springboot/Screenshot_5.png)

## Thymeleaf 细节

### 标准表达式语法

`${...}`

直接使用 `th:xx = "${}"` 获取对象属性。

