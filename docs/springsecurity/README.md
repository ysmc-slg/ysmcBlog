---
description: 初识SpringSecurity
---

# 初识SpringSecurity

## Spring Security 介绍
整体介绍，Spring Security为基于J2EE开发的企业应用软件提供了全面的安全服务，特别是使用Spring开发的企业软件项目，如果你熟悉Spring，尤其是Spring的依赖注入原理，这将帮助你更快掌握Spring Security，目前使用Spring Security有很多原因，通常因为在J2EE的Servlet规范和EJB规范中找不到典型应用场景的解决方案，提到这些规范，特别要指出的是它们不能在WAR或EAR级别进行移植，这样如果你需要更换服务器环境，就要在新的目标环境中进行大量的工作，对你的应用进行重新配置安全，使用Spring Security就解决了这些问题，也为你提供了很多很有用的可定制的安全特性。
​ Spring Security包含三个主要的组件：`SecurityContext`、`AuthenticationManager`、`AccessDecisionManager`.

![组件](/blogImg/springsecurity/1.png)

## 请求拦截

![用户请求](/blogImg/springsecurity/2.png)


![过滤器链](/blogImg/springsecurity/3.png)

​Spring Security提供了很多过滤器，其中`SecurityContextPersistenceFilter`、`UsernamePasswordAuthenticationFilter`、`FilterSecurityInterceptor`分别对应`SecurityContext`、`AuthenticationManager`、`AccessDecisionManager`的处理。

一个请求进入系统的流程如下图：

![请求流程](/blogImg/springsecurity/3.png)

下面分别介绍各个过滤器的功能。

|  过滤器   | 描述  |
|  ----  | ----  |
| WebAsyncManagerIntegrationFilter  | 设置SecurityContext到异步线程中，用于获取用户上下文信息 |
| SecurityContextPersistenceFilter  | 整个请求过程中SecurityContext的创建和清理<br>1.未登录，SecurityContext为null，创建一个新的ThreadLocal的SecurityContext填充SecurityContextHolder.<br>2.已登录，从SecurityContextRepository获取的SecurityContext对象.两个请求完成后都清空SecurityContextHolder，并更新SecurityContextRepository  |
| HeaderWriterFilter  | 添加头信息到响应对象 |
| CsrfFilter  | 防止csrf攻击（跨站请求伪造）的过滤器 |
| LogoutFilter  | 登出处理 |
| UsernamePasswordAuthenticationFilter  | 获取表单用户名和密码，处理基于表单的登录请求 |
| DefaultLoginPageGeneratingFilter  | 默认配置的登录页面 |
| BasicAuthenticationFilter  | 检测和处理http basic认证，将结果放进SecurityContextHolder |
| RequestCacheAwareFilter  | 处理请求request的缓存 |
| SecurityContextHolderAwareRequestFilter  | 包装请求request，便于访问SecurityContextHolder |
| AnonymousAuthenticationFilter  | 匿名身份过滤器，不存在用户信息时调用该过滤器 |
| SessionManagementFilter  | 检测有用户登录认证时做相应的session管理 |
| ExceptionTranslationFilter  | 处理AccessDeniedException访问异常和AuthenticationException认证异常 |
| FilterSecurityInterceptor  | 检测用户是否具有访问资源路径的权限 |
