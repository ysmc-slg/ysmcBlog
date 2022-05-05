---
title: 全局异常处理和数据校验
autoPrev: FileUpload
---

## 全局异常处理
项目中，可能会抛出多个异常，我们不可能直接将异常的堆栈信息展示给用户，一是用户的体验不好，另一个对系统而言，非常不安全。

所以，针对异常，我们可以自定义异常处理，SpringMVC 中，针对全局异常也提供了相对应的解决方案，主要是通过 `@ControllerAdvice` 和 `@ExceptionHandler` 两个注解来处理的。

以上一篇文件上传为例，如果上传文件大小超过限制就会报错，我们时候自定义异常进行处理。

```java
@ControllerAdvice
public class MyException {
    @ExceptionHandler(Exception.class)
    public ModelAndView fileuploadException(Exception e) {
        ModelAndView error = new ModelAndView("error");
        error.addObject("error", e.getMessage());
        return error;
    }
}
```
* `@ControllerAdvice`：表示这是一个增强版的 Controller，主要用来做全局数据处理
* `@ExceptionHandler`：表示这是一个异常处理方法，这个注解的参数，表示需要拦截的异常，参数为 `Exception` 表示拦截所有异常，这里也可以具体到某一个异常，如果具体到某一个异常，那么发生其他异常则不会被拦截。
* 异常方法的定义，和 Controller 中方法的定义一样，可以返回 `ModeAndView`，也可以返回String 或 void

例如如下代码，拦截文件上传超过显示的异常，其他异常和它没关系，不会进入到这里面来。
```java
@ControllerAdvice
public class MyException {
    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ModelAndView fileuploadException(MaxUploadSizeExceededException e) {
        ModelAndView error = new ModelAndView("error");
        error.addObject("error", e.getMessage());
        return error;
    }
}
```

## 服务端数据校验

B/S 系统中对 http 请求数据的校验多数在客户端进行，这也是出于简单及用户体验性上考虑，但是在一些安全性要求高的系统中服务端校验是必不可少的，实际上，几乎所有的系统，凡是设计到数据校验，都需要在服务端进行二次校验。为什么要在服务端进行二次校验呢？这需要理解客户端校验和服务端校验各自的目的。
1. 客户端校验，主要是为了提高用户体验，例如用户输入一个邮箱地址，要校验这个邮箱地址是否合法，没有必要发送到服务端进行校验，直接在前端进行校验即可。但是前端校验是无法确保数据完整性，所以还要进行服务端校验。
2. 服务端校验，虽然用户体验不好，但是可以有效的保证数据安全与完整性。
3. 综上，实际项目中，两个一起用。

### 普通校验

普通校验，是这里最基本的用法。

首先，我们需要加入校验需要的依赖：
```xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>6.1.0.Final</version>
</dependency>
```
接下来，在SpringMVC 的配置文件中配置校验的 Bean：
```xml
<!--数据校验-->
<bean class="org.springframework.validation.beanvalidation.LocalValidatorFactoryBean" id="validatorFactoryBean">
    <property name="providerClass" value="org.hibernate.validator.HibernateValidator"/>
</bean>

<mvc:annotation-driven validator="validatorFactoryBean"/>
```
配置时，提供一个 `LocalValidatorFactoryBean` 的实例，然后 Bean 的校验使用 `HibernateValidator`。

这样，配置就算完成了。

接下来，我们提供一个添加学生(student)的页面：

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/addstudent" method="post">
    <table>
        <tr>
            <td>学生编号：</td>
            <td><input type="text" name="id"></td>
        </tr>
        <tr>
            <td>学生姓名：</td>
            <td><input type="text" name="name"></td>
        </tr>
        <tr>
            <td>学生邮箱：</td>
            <td><input type="text" name="email"></td>
        </tr>
        <tr>
            <td>学生年龄：</td>
            <td><input type="text" name="age"></td>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" value="提交">
            </td>
        </tr>
    </table>
</form>
</body>
</html>
```

在这里需要提供的数据中，假设学生编号不能为空，学生姓名长度不能超过10切不能为空，邮箱地址要合法，年龄不能超过150。那么定义实体类的时候，就可以加入这个判断条件：

```java
public class Student {
    @NotNull(message = "id不能为空")
    private Integer id;
    @NotNull(message = "姓名不能为空")
    @Size(min = 2,max = 10)
    private String name;
    @Email(message = "邮箱格式不正确")
    private String email;
    @Max(150)
    private Integer age;

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                '}';
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```
在这里：
* @NotNull 表示这个字段不能为空
* @Size 中描述了这个字符串长度的限制
* @Email 表示这个字段的值必须是一个邮箱地址
* @Max 表示这个字段的最大值

定义完成后，我们进行测试。

```java
@PostMapping("/addstudent")
@ResponseBody
public void addStudent(@Validated Student student, BindingResult result) {
    if (result != null) {
        //校验未通过，获取所有的异常信息并展示出来
        List<ObjectError> allErrors = result.getAllErrors();
        for (ObjectError allError : allErrors) {
            System.out.println(allError.getObjectName()+":"+allError.getDefaultMessage());
        }
    }
}
```

在这里：
* @Validated 表示 Student 中定义的校验规则将会生效
* BindingResult 表示出错信息，如果这个变量不为空，表示有错误，否则校验通过
* 还有一点就是，ssm 校验不正确并不会抛出异常，所以全局异常是捕获不到的。只能通过BindingResult 获取错误信息。这一点和SpringBoot是不同的，SpringBoot 校验失败会抛出异常。

现在就可以启动项目进行访问了。

### 分组校验

由于校验规则都是定义在实体类上面的，但是，在不同的数据提交环境下，校验规则可能不一样。例如，用户的 id 是自增长的，添加的时候，可以不用传递用户id，但是修改的时候必须传递用户 id ，这种情况下，就需要使用分组校验。

分组检验，首先需要定义校验组，所谓的校验组，其实就是空接口：
```java
public interface ValidationGroup1 {
}

public interface ValidationGroup2 {
}
```
然后，在实体类中，指定每一个校验规则所属的组：

```java
public class Student {
    @NotNull(message = "{student.id.notnull}",groups = ValidationGroup1.class)
    private Integer id;
    @NotNull(message = "{student.name.notnull}",groups = {ValidationGroup1.class, ValidationGroup2.class})
    @Size(min = 2,max = 10,message = "{student.name.length}",groups = {ValidationGroup1.class, ValidationGroup2.class})
    private String name;
    @Email(message = "{student.email.error}",groups = {ValidationGroup1.class, ValidationGroup2.class})
    private String email;
    @Max(value = 150,message = "{student.age.error}",groups = {ValidationGroup2.class})
    private Integer age;

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                '}';
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

在 `group` 中指定每一个校验规则所属的组，一个规则可以属于一个组，也可以属于多个组。

最后，在接收参数的地方，指定校验组：
```java
@Controller
public class StudentController {
  @RequestMapping("/addstudent")
  @ResponseBody
  public void addStudent(@Validated(ValidationGroup2.class) Student student, BindingResult result) {
      if (result != null) {
          //校验未通过，获取所有的异常信息并展示出来
          List<ObjectError> allErrors = result.getAllErrors();
          for (ObjectError allError : allErrors) {
              System.out.println(allError.getObjectName()+":"+allError.getDefaultMessage());
          }
      }
  }
}
```
配置完成后，属于 ValidationGroup2 这个组的校验规则，才会生效。

### 校验注解

* @Null 被注解的元素必须为 null
* @NotNull 被注解的元素必须不为 null
* @AssertTrue 被注解的元素必须为 true
* @AssertFalse 被注解的元素必须为 false
* @Min(value) 被注解的元素必须是一个数字，其值必须大于等于指定的最小值
* @Max(value) 被注解的元素必须是一个数字，其值必须小于等于指定的最大值
* @DecimalMin(value) 被注解的元素必须是一个数字，其值必须大于等于指定的最小值
* @DecimalMax(value) 被注解的元素必须是一个数字，其值必须小于等于指定的最大值
* @Size(max=, min=) 被注解的元素的大小必须在指定的范围内
* @Digits (integer, fraction) 被注解的元素必须是一个数字，其值必须在可接受的范围内
* @Past 被注解的元素必须是一个过去的日期
* @Future 被注解的元素必须是一个将来的日期
* @Pattern(regex=,flag=) 被注解的元素必须符合指定的正则表达式
* @NotBlank(message =) 验证字符串非 null，且长度必须大于0
* @Email 被注解的元素必须是电子邮箱地址
* @Length(min=,max=) 被注解的字符串的大小必须在指定的范围内
* @NotEmpty 被注解的字符串的必须非空
* @Range(min=,max=,message=) 被注解的元素必须在合适的范围内

