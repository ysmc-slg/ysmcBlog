---
title: SpringBoot基本配置
---

## Web容器基本配置

```xml
# 设置端口
server.port=8081 
```
有三种情况：

1. 值为 1 代表关闭所有的http端点
2. 0 代表随机生成端口 
3. 自定义端口

### 获取服务端口

由于随机生成端口我们不知道端口是多少，可以使用过滤器获取服务端口

```java
@Component
public class MyApplicationListener implements ApplicationListener<WebServerInitializedEvent> {
    @Override
    public void onApplicationEvent(WebServerInitializedEvent event) {
        System.out.println("event.getWebServer().getPort() = " + event.getWebServer().getPort());
    }
}
```

开发中一般不会这么写，也不会关闭所有端点和随机生成端口。

**设置请求压缩**
```xml
# 开启请求压缩，默认关闭
server.compression.enabled=true

# 如果server.compression.enabled中没有想要的，可以手动设置需要压缩的格式
# server.compression.mime-types=

# 返回数据超过多少进行压缩，默认2KB
#server.compression.min-response-size=2KB
```

![d](/blogImg/java/Screenshot_1.png)

## tomcat 日志配置

```xml
# 开启访问日志，默认的日志位置在项目运行的临时目录中，默认生成的日志格式 access_log.yyyy-MM-dd.log
server.tomcat.accesslog.enabled=true

# 设置生成的访问日志在该目录下
server.tomcat.basedir=D:/Users/IDEAworkspace/new_springboot/tomcat-log
# 生成日志文件的前缀，默认是 access_log
server.tomcat.accesslog.prefix=zxqs_log
# 生成日志文件的后缀
server.tomcat.accesslog.suffix=.log

# 日志文件中的日期格式
server.tomcat.accesslog.file-date-format=.yyyyMMdd

# 生成的日志文件内容格式也是可以调整的
# %h 请求的客户端IP
# %l 用户的身份
# %u 用户名
# %t 请求时间
# %r 请求地址
# %s 响应的状态码
# %b 响应的大小
server.tomcat.accesslog.pattern=%h %l %u %t \"%r\" %s %b

# 服务器内部日志开启
logging.level.org.apache.tomcat=debug
logging.level.org.apache.catalina=debug
```

## 配置文件名称和路径

