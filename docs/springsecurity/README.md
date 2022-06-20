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

![请求流程](/blogImg/springsecurity/4.png)

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

## 数据库管理

![请求流程](/blogImg/springsecurity/5.png)

上图展示的Spring Security核心处理流程。当一个用户登录时，会先进行身份认证，如果身份认证未通过会要求用户重新认证，当用户身份证通过后就会调用角色管理器判断他是否可以访问，这里，如果要实现数据库管理用户及权限，就需要自定义用户登录功能，Spring Security已经提供好了一个接口UserDetailsService。

```java
package org.springframework.security.core.userdetails;
 
public interface UserDetailsService {
	
	/**
	 * Locates the user based on the username. In the actual implementation, the search
	 * may possibly be case sensitive, or case insensitive depending on how the
	 * implementation instance is configured. In this case, the <code>UserDetails</code>
	 * object that comes back may have a username that is of a different case than what
	 * was actually requested..
	 *
	 * @param username the username identifying the user whose data is required.
	 *
	 * @return a fully populated user record (never <code>null</code>)
	 *
	 * @throws UsernameNotFoundException if the user could not be found or the user has no
	 * GrantedAuthority
	 */
	UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
    
}
```
​ UserDetailService该接口只有一个方法，通过方法名可以看出方法是通过用户名来获取用户信息的，但返回结果是UserDetails对象，UserDetails也是一个接口，接口中任何一个方法返回false用户的凭证就会被视为无效。

```java
package org.springframework.security.core.userdetails;
 
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
 
import java.io.Serializable;
import java.util.Collection;
 
public interface UserDetails extends Serializable {
	// ~ Methods
	// ========================================================================================================
 
	/**
	 * 权限集合
	 */
	Collection<? extends GrantedAuthority> getAuthorities(); 
 
	/**
	 * 密码
	 */
	String getPassword(); 
 
	/**
	 * 用户名
	 */
	String getUsername(); 
 
	/**
   * 账户是否未过期
   * @return
  */
	boolean isAccountNonExpired();
 
	/**
   * 账户是否未锁定
   * @return
  */
	boolean isAccountNonLocked();
 
	/**
   * 密码是否未过期
   * @return
  */
	boolean isCredentialsNonExpired();
 
	/**
   * 账户是否可用
   * @return
  */
	boolean isEnabled(); 
}
```
这里需要注意的是 `Authentication` 与 `UserDetails` 对象的区分，`Authentication` 对象才是 `Spring Security` 使用的进行安全访问控制用户信息的安全对象，实际上`Authentication`对象有未认证和已认证两种状态，在作为参数传入认证管理器的时候，它是一个为认证的对象，它从客户端获取用户的身份认证信息，如用户名、密码，可以是从一个登录页面，也可以是从 `cookie` 中获取，并由系统自动生成一个`Authentication` 对象，而这里的 `UserDetails` 代表的是一个用户安全信息的源，这个源可以是从数据库、LDAP服务器、CA中心返回，`Spring Security` 要做的就是将未认证的 `Authentication` 对象与`UserDetails` 对象进行匹配，成功后将 `UserDetails` 对象中的权限信息拷贝到 `Authentication` 中，组成一个完整的 `Authentication` 对象，与其他组件进行共享。

```java
package org.springframework.security.core;
 
import java.io.Serializable;
import java.security.Principal;
import java.util.Collection;
 
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
 
public interface Authentication extends Principal, Serializable {
	Collection<? extends GrantedAuthority> getAuthorities();
	Object getCredentials();
	Object getDetails();
	Object getPrincipal();
 
	boolean isAuthenticated();

	void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException;
}
```
1. getAuthorities 方法用来获取用户的权限。
2. getCredentials 方法用来获取用户凭证，一般来说就是密码。
3. getDetails 方法用来获取用户携带的详细信息，可能是当前请求之类的东西。
4. getPrincipal 方法用来获取当前用户，可能是一个用户名，也可能是一个用户对象。
5. isAuthenticated 当前用户是否认证成功。

了解了Spring Security的上面三个对象，当我们需要数据库管理用户时，我们需要手动实现UserDetailsService对象中的loadUserByUsername方法，这就需要我们同时准备以下几张数据表，分别是用户表（user）、角色表（role）、权限表（permission）、用户和角色关系表（user_role）、权限和角色关系表（permission_role），UserDetails中的用户状态通过用户表里的属性去填充，UserDetails中的权限集合则是通过角色表、权限表、用户和角色关系表、权限和角色关系表构成的RBAC模型来提供，这样就可以把用户认证、用户权限集合放在数据库中进行管理了。