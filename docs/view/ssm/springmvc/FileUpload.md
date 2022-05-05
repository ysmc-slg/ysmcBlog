---
title: SpringMVC 实现文件上传
autoPrev: requestmapping
---
::: tip

文章引用 江南一点雨 [SpringMVC 实现文件上传](http://itboyhub.com/2021/01/28/springmvc-fileupload/)

:::

SpringMVC 中对文件上传做了封装，我们可以更加方便的实现文件上传。从 Spring3.1 开始，对于文件上传，提供了两个处理器：
* CommonsMultipartResolver
* StandardServletMultipartResolver

第一个处理器兼容性较好，可以兼容 Servlet3.0 之前的版本，但是它依赖了 `commons-fileupload` 这个第三方工具，如果使用 `CommonsMultipartResolver`，一定要添加 `commons-fileupload` 依赖

第二个兼容性较差，它适用与 Servlet3.0 之后的版本，不依赖第三方工具，使用它可以直接做文件上传。

## CommonsMultipartResolver

除了 springmvc 基本的依赖外，还需要`commons-fileupload` 依赖，如下：

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>RELEASE</version>
    </dependency>
    <dependency>
        <groupId>javax.servlet</groupId>
        <artifactId>javax.servlet-api</artifactId>
        <version>4.0.1</version>
    </dependency>
    <dependency>
        <groupId>javax.servlet.jsp</groupId>
        <artifactId>javax.servlet.jsp-api</artifactId>
        <version>2.3.3</version>
    </dependency>

    <!--commons-fileupload 文件上传-->
    <dependency>
        <groupId>commons-fileupload</groupId>
        <artifactId>commons-fileupload</artifactId>
        <version>1.4</version>
    </dependency>
</dependencies>
```

然后，在SpringMVC的配置文件中，配置 `MultipartResolver`：
```xml
<bean class="org.springframework.web.multipart.commons.CommonsMultipartResolver" id="multipartResolver"/>
```
**注意：** <font color='red'>这个 Bean 一定要有 id，并且必须是 multipartResolver</font>

接下来，创建 jsp 页面
```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <input type="submit" value="上传">
</form>

</body>
</html>
```

注意文件上传请求是 POST 请求，enctype 一定是 `multipart/form-data`

然后，开发文件上传接口：
```java
@Controller
public class FileUploadController {

  @PostMapping("/upload")
  @ResponseBody
  public String upload(MultipartFile file, HttpServletRequest request){
      String format = sdf.format(new Date());
      // 1.准备路径
      String realPath  = request.getServletContext().getRealPath("/") + format;
      File folder = new File(realPath);

      if(!folder.exists()){
          folder.mkdirs();
      }

      // 2. 获取文件名
      String oldName = file.getOriginalFilename();
      // 组装新文件名
      String newName = UUID.randomUUID().toString() + oldName.substring(oldName.lastIndexOf("."));

      try {
          file.transferTo(new File(folder,newName));
          // 拼接返回 url
          return request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + format + newName;
      } catch (Exception e) {
          e.printStackTrace();
      }

      return "error";
  }
}
```
这个文件上传方法中，一共做了四件事：
1. 解决文件保存路径，这里是保存在项目运行目录下的（也就是 `\webapps\ROOT\`目录下），然后利用日期继续分类
2. 处理文件名问题，使用UUID做新的文件名，用来代替旧的文件名，可以有效防止文件名冲突
3. 保存文件
4. 生成文件访问路径

访问返回的 url ，并不能访问成功，那是因为，在SpringMVC 中，静态资源默认都是被自动拦截的，无法访问，意味着上传成功的图片无法访问，因此，还需要我们在 SpringMVC 的配置文件中，在添加如下配置：
```xml
<mvc:resources mapping="/**" location="/"/>
```
这样上传之后，访问返回的 url 就可以看到上传的图片了。关于静态资源访问后面会有一篇文章专门来说。

当然，默认配置不一定满足我们的需求，我们还可以自己手动配置文件上传大小等：
```xml
<bean class="org.springframework.web.multipart.commons.CommonsMultipartResolver" id="multipartResolver">
    <!--默认的编码-->
    <property name="defaultEncoding" value="UTF-8"/>
    <!--上传的总文件大小-->
    <property name="maxUploadSize" value="1048576"/>
    <!--上传的单个文件大小  1024*1024 = 1MB-->
    <property name="maxUploadSizePerFile" value="1048576"/>
    <!--内存中最大的数据量，超过这个数据量，数据就要开始往硬盘中写了-->
    <property name="maxInMemorySize" value="4096"/>
    <!--临时目录，超过 maxInMemorySize 配置的大小后，数据开始往临时目录写，等全部上传完成后，再将数据合并到正式的文件上传目录-->
    <property name="uploadTempDir" value="file:///E:\\tmp"/>
</bean>
```

## StandardServletMultipartResolver

这种文件上传方式，不需要依赖 `commons-fileupload`，但是也不支持 Servlet3.0 之前的版本。

使用 StandardServletMultipartResolver，那我们首先在 SpringMVC 的配置文件中，配置这个 Bean：
```xml
<bean class="org.springframework.web.multipart.support.StandardServletMultipartResolver" id="multipartResolver"></bean>
```
**注意：**<font color="red">这里Bean的名字依然叫 `multipartResolver` 

配置完成后，注意，<font color="red">这个 bean 无法直接配置上传文件大小等限制</font>。需要在 `web.xml` 中进行配置（这里，即使不需要限制文件上传大小，也需要在 web.xml 中配置 `multipart-config`）：

```xml
<servlet>
  <servlet-name>springmvc</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:springmvc-servlet.xml</param-value>
  </init-param>

  <!--文件上传-->
  <multipart-config>
      <!--临时上传目录-->
      <location>D:\\temp</location>
      <!--上传单个文件大小-->
      <max-file-size>1048576</max-file-size>
      <!--内存中保存的文件最大大小-->
      <file-size-threshold>4096</file-size-threshold>
  </multipart-config>

</servlet>
<servlet-mapping>
  <servlet-name>springmvc</servlet-name>
  <url-pattern>/</url-pattern>
</servlet-mapping>
```
临时上传目录，必须存在，否则会报错。配置完成后，就可以测试文件上传了，测试方式和上面一样。

## 多文件上传
多文件上传分为两种，一种是 key 相同的文件，另一种是 key 不同的文件。

### key 相同的文件
这种上传，前端页面一般如下：
```jsp
<form action="/upload2" method="post" enctype="multipart/form-data">
    <input type="file" name="files" multiple>
    <input type="submit" value="上传">
</form>
```
主要是 `input` 节点多了 `multiple` 属性。后端用一个数组来接收即可：
```java
@RequestMapping("/upload2")
@ResponseBody
public void upload2(MultipartFile[] files, HttpServletRequest req) {
    String format = sdf.format(new Date());
    String realPath = req.getServletContext().getRealPath("/") + format;
    File folder = new File(realPath);
    if (!folder.exists()) {
        folder.mkdirs();
    }
    try {
        for (MultipartFile file : files) {
            String oldName = file.getOriginalFilename();
            String newName = UUID.randomUUID().toString() + oldName.substring(oldName.lastIndexOf("."));
            file.transferTo(new File(folder, newName));
            String url = req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort() +  format + newName;
            System.out.println(url);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

### key 不同的文件
key 不同的，一般前端定义如下：
```jsp
<form action="/upload3" method="post" enctype="multipart/form-data">
    <input type="file" name="file1">
    <input type="file" name="file2">
    <input type="submit" value="上传">
</form>
```

这种，在后端用不同的变量来接收就行了。

```java
@RequestMapping("/upload3")
@ResponseBody
public void upload3(MultipartFile file1, MultipartFile file2, HttpServletRequest req) {
    String format = sdf.format(new Date());
    String realPath = req.getServletContext().getRealPath("/") + format;
    File folder = new File(realPath);
    if (!folder.exists()) {
        folder.mkdirs();
    }
    try {
        String oldName = file1.getOriginalFilename();
        String newName = UUID.randomUUID().toString() + oldName.substring(oldName.lastIndexOf("."));
        file1.transferTo(new File(folder, newName));
        String url1 = req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort()  + format + newName;
        System.out.println(url1);
        String oldName2 = file2.getOriginalFilename();
        String newName2 = UUID.randomUUID().toString() + oldName2.substring(oldName2.lastIndexOf("."));
        file2.transferTo(new File(folder, newName2));
        String url2 = req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort()  + format + newName2;
        System.out.println(url2);
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```



