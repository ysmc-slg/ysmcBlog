---
description: 使用 Validator 做表单校验
---

创建一个`springboot`项目然后引入依赖：

```xml
<!-- 验证注解 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```

创建一个实体类并加上响应的注解：

```java
public class Channel {
    private static final long serialVersionUID = 1L;

    /**
     * $column.columnComment
     */
    private Long channelId;

    /**
     * 渠道名称
     */
    @NotEmpty(message = "渠道名称不能为空")
    private String channelName;

    /**
     * 渠道状态 0启动 1停止
     */
    @NotNull(message = "渠道状态不能为空")
    @Max(value = 1,message = "渠道状态最大为1")
    @Min(value = 0,message = "渠道状态最小为0")
    private String status;

    /**
     * 渠道类型 1线上渠道，2线下渠道
     */
    @NotNull(message = "渠道类型不能为空")
    @Max(value = 2,message = "渠道类型最大为2")
    @Min(value = 1,message = "渠道类型最小为1")
    private Integer type;

  // ... 省略 setter/getter方法
}
```

创建测试类：

```java
@RestController
public class TestController {

    @PostMapping("/test")
    public Channel test(@Validated @RequestBody Channel channel){
        return channel;
    }
}
```

此时就可以进行测试了，当数据不符合条件是，程序就不会往下执行，如果想将报错信息返回到前端可再创建一个 `全局异常处理器`：

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    /**
     * 自定义验证异常
     */
    @ExceptionHandler(BindException.class)
    public String handleBindException(BindException e) {
        log.error(e.getMessage(), e);
        String message = e.getAllErrors().get(0).getDefaultMessage();
        return message;
    }

    /**
     * 自定义验证异常
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public String handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        log.error(e.getMessage(), e);
        String message = e.getBindingResult().getFieldError().getDefaultMessage();
        return message;
    }
}
```
