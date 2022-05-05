---
title: 静态资源访问与拦截器
autoPrev: json
---

## 静态资源访问

在 SpringMVC 中，静态资源，默认都是被拦截的，例如 html、js、css、jpg、png、txt、pdf 等等，都是无法直接访问的。因为所有请求都被拦截了，所以，针对静态资源，我们要做额外处理，处理方式很简单，直接在 SpringMVC 的配置文件中，添加如下内容：

```xml
<mvc:resources mapping="/static/html/**" location="/static/html/"/>
```
mapping 表示映射规则，也是拦截规则，就是说，如果请求地址是 `/static/html` 这样的格式的话，那么对应的资源就去 `/static/html/` 这个目录下查找。会自动将mapping `*` 的地址，补充道 `location` 的后面

在映射路径的定义中，最后是两个 `*`，这是一种 Ant 风格的路径匹配符号，一共有三个通配符：
|   通配符   |    含义   |
|:---------:|:-----:|
|**    |匹配多层路径|
|*|匹配一层路径|
|?|	匹配任意单个字符|

一个比较原始的配置方式可能如下：
```xml
<mvc:resources mapping="/static/html/**" location="/static/html/"/>
<mvc:resources mapping="/static/js/**" location="/static/js/"/>
<mvc:resources mapping="/static/css/**" location="/static/css/"/>

```

但是，由于 `**` 可以表示多级路径，所以，以上配置，我们可以进行简化：
<mvc:resources mapping="/**" location="/"/>

## 拦截器

SpringMVC 中的拦截器，相当于 Jsp/Servlet 中的过滤器，只不过拦截器的功能更为强大。

拦截器的定义非常容易：

```java
@Component
public class MyInterceptor1 implements HandlerInterceptor {
    /**
     * 这个是请求预处理的方法，只有当这个方法返回值为 true 的时候，后面的方法才会执行
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("MyInterceptor1:preHandle");
        return true;
    }

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("MyInterceptor1:postHandle");

    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("MyInterceptor1:afterCompletion");

    }
}
@Component
public class MyInterceptor2 implements HandlerInterceptor {
    /**
     * 这个是请求预处理的方法，只有当这个方法返回值为 true 的时候，后面的方法才会执行
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("MyInterceptor2:preHandle");
        return true;
    }

    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("MyInterceptor2:postHandle");

    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("MyInterceptor2:afterCompletion");

    }
}

```
拦截器定义好之后，需要在 SpringMVC 的配置文件中进行配置：

```xml
<mvc:interceptors>
    <mvc:interceptor>
        <mvc:mapping path="/**"/>
        <ref bean="myInterceptor1"/>
    </mvc:interceptor>
    <mvc:interceptor>
        <mvc:mapping path="/**"/>
        <ref bean="myInterceptor2"/>
    </mvc:interceptor>
</mvc:interceptors>

```

如果存在多个拦截器，拦截规则如下：

* preHandle 按拦截器定义顺序调用
* postHandler 按拦截器定义逆序调用
* afterCompletion 按拦截器定义逆序调用
* postHandler 在拦截器链内所有拦截器返成功调用
* afterCompletion 只有 preHandle 返回 true 才调用