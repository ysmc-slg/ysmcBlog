---
description: 初识SpringSecurity
sidebarDepth: 2
---

::: tip 声明

本文参考《深入浅出Spring Security》，目的在于记录学习笔记，如有侵权请联系删除。

:::

# 初识SpringSecurity

## Spring Security 核心功能

Spring Security 和其他安全管理框架一样，核心功能就是：
* 认证
* 授权

### 认证
Spring Security 支持多种不同的认证方式，这些认证方式有的是 Spring Security 自己提供的认证功能，有的是第三方标准组织制订的。Spring Security 集成的主流认证机制主要有如下几种：
* 表单认证
* OAuth2.0 认证
* SAML2.0 认证
* CAS 认证
* RememberMe 自动认证
* JAAS 认证
* OpenID 去中心化认证
* Pre-Authentication Scenarios 认证
* X509 认证
* HTTP Basic 认证
* HTTP Digest 认证

作为一个开放的平台，Spring Security 提供的认证机制不仅仅包括上面这些，我们还可以通过引入第三方依赖来支持更多的认证方式，同时，如果这些认证方式无法满足我们的需求，我们也可以自定义认证逻辑，特别是当我们和一些“老破旧”的系统进行集成时，自定义认证逻辑就显得非常重要了。

### 授权
无论采用了上面哪种认证方式，都不影响在 Spring Security 中使用授权功能。Spring Security 支持基于 URL 的请求授权、支持方法访问授权、支持 SpEL 访问控制、支持域对象安全（ACL），同时也支持动态权配配置、支持 RBAC 权限模型等，总之，我们常见的权限管理需求，Spring Security 基本上都是支持的。

## Spring Security 整体架构
子具体学习 Spring Security 各种用法之前，我们先介绍一下 Spring Security 中常见的概念，以及认证、授权思路，方便读者从整体上把握 Spring Security 架构。

### 认证和授权

#### 认证
在 Spring Security 的架构设计中，认证（Authentication）和授权（Authorization）是分开的，无论使用什么样的认证方式，都不会影响授权，这是
两个独立的存在，这种独立带来的好处之一，就是 Spring Security 可以非常方便地整合一些外部的认证方案。

在 Spring Security 中，用户的认证信息主要由 Authentication 的实现类来保存，Authentication 接口定义如下：
```java
public interface Authentication extends Principal, Serializable {
 Collection<? extends GrantedAuthority> getAuthorities();
 Object getCredentials();
 Object getDetails();
 Object getPrincipal();
 boolean isAuthenticated();
 void setAuthenticated(boolean isAuthenticated);
}
```
这里接口中定义的方法如下：
* getAuthorities 方法：用来获取用户的权限
* getCredentials 方法：用来获取用户凭证，一般来说就是密码
* getDetails  方法：用来获取用户携带的详细信息，可能是当前请求之类等
* getPrincipal  方法：用来获取当前用户，例如是一个用户或者一个用户对象

当用户使用 `用户名/密码` 登录或使用 `Remember-me` 登录时，都会对应一个不同的 Authentication 实例。Spring Security 中的认证工作主要由 AuthenticationManager 接口来负责，下面来看一下该接口的定义：
```java
public interface AuthenticationManager {
	Authentication authenticate(Authentication authentication)
		throws AuthenticationException;
}
```

AuthenticationManaget 只有一个 authenticate 方法可以用来做认证，改方法有三个不同的返回值：

* 返回 Authentication，表示认证成功
* 抛出 AuthenticationException 异常，表示用户输入了无效的凭证。
* 返回 null，表示不能断定

AuthenticationManager 最主要的实现类是 ProviderManager，ProviderManager 管理了众多的 AuthenticationProvider 实例，AuthenticationProvider 有点类似于 AuthenticationManager，但是它多了一个 supports 方法用来判断是否支持给定的 Authentication 类型。

```java
public interface AuthenticationProvider {
	Authentication authenticate(Authentication authentication)
		throws AuthenticationException;
	boolean supports(Class<?> authentication);
}
```
由 于 Authentication 拥有众多不同的实现类 ， 这 些不同的实现类又由不同的 AuthenticationProvider 来处理，所以 AuthenticationProvider 会有一个 supports 方法，用来判断
当前的 Authentication Provider 是否支持对应的 Authentication。

在一次完整的认证流程中，可能会同时存在多个 AuthenticationProvider（例如，项目同时支持 form 表单登录和短信验证码登录），多个 AuthenticationProvider 统一由 ProviderManager 来管理。同时，ProviderManager 具有一个可选的 parent，如果所有的 AuthenticationProvider 都认证失败，那么就会调用 parent 进行认证。parent 相当于一个备用认证方式，即各个 AuthenticationProvider 都无法处理认证问题的时候，就由 parent 出场收拾残局。

#### 授权

当完成认证后，接下来就是授权了。在 Spring Security 的授权体系中，有两个关键接口：
* AccessDecisionManager
* AccessDecisionVoter

AccessDecisionVoter 是一个投票器，投票器会检查用户是否具备应有的角色，进而投出赞
成、反对或者弃权票；AccessDecisionManager 则是一个决策器，来决定此次访问是否被允许。
AccessDecisionVoter 和 AccessDecisionManager 都有众多的实现类，在 AccessDecisionManager 中会挨个遍历 AccessDecisionVoter，进而决定是否允许用户访问，因而 AccessDecisionVoter 和 AccessDecisionManager 两者的关系类似于 AuthenticationProvider 和 ProviderManager 的关系。

在 Spring Security 中，用户请求一个资源（通常是一个网络接口或者一个 Java 方法）所需要的角色会被封装成一个 ConfigAttribute 对象，在 ConfigAttribute 中只有一个 getAttribute 方法，该方法返回一个 String 字符串，就是角色的名称。一般来说，角色名称都带有一个 ROLE_ 前缀，投票器 AccessDecisionVoter 所做的事情，其实就是比较用户所具备的角色和请求某个资源所需的 ConfigAttribute 之间的关系。

### web安全

在 Spring Security 中，认证、授权等功能都是基于过滤器来完成的。表 1-1 列出了 Spring Security 中常见的过滤器，注意这里说的是否默认加载是指引入 Spring Security 依赖之后，开发者不做任何配置时，会自动加载的过滤器。

|  过滤器   | 过滤器作用  | 是否默认加载 |
|  ----  | ----  | ----  |
|  ChannelProcessingFilter  | 过滤请求协议，如 HTTPS 和 HTTP  | NO  |
|  WebAsyncManagerIntegrationFilter  | 将 WebAsyncManager 与 Spring Security 上下文进行集成  | NO  |
|  SecurityContextPersistenceFilter  | 在处理请求之前，将安全信息加载到 SecurityContextHolder 中以方便后续使用。请求结束后，再擦除 SecurityContextHolder 中的信息  | YES  |
|  HeaderWriterFilter  | 头信息加入到响应中  | YES  |
|  CorsFilter  | 处理跨域问题  | NO  |
|  CsrfFilter  | 处理 CSRF 攻击  | YES  |
|  LogoutFilter  | 处理注销登录  | YES  |
|  OAuth2AuthorizationRequestRedirectFilter  | 处理 OAuth2 认证重定向  | NO  |
|  Saml2WebSsoAuthenticationRequestFilter  | 处理 SAML 认证  | NO  |
|  X509AuthenticationFilter  | 处理 X509 认证  | NO  |
|  AbstractPreAuthenticatedProcessingFilter  | 处理预认证问题  | NO  |
|  CasAuthenticationFilter  | 处理 CAS 单点登录  | NO  |
|  OAuth2LoginAuthenticationFilter  | 处理 OAuth2 认证  | NO  |
|  Saml2WebSsoAuthenticationFilter  | 处理 SAML 认证  | NO  |
|  UsernamePasswordAuthenticationFilter  | 处理表单登录  | YES  |
|  OpenIDAuthenticationFilter  | 处理 OpenID 认证  | NO  |
|  DefaultLoginPageGeneratingFilter  | 配置默认登录页面  | YES  |
|  DefaultLogoutPageGeneratingFilter  | 配置默认注销页面  | YES  |
|  ConcurrentSessionFilter  | 处理 Session 有效期  | NO  |
|  DigestAuthenticationFilter  | 处理 HTTP 摘要认证  | NO  |
|  BearerTokenAuthenticationFilter  | 处理 OAuth2 认证时的 Access Token  | NO  |
|  BasicAuthenticationFilter  | 处理 HttpBasic 登录  | YES  |
|  RequestCacheAwareFilter  | 处理请求缓存  | YES  |
|  SecurityContextHolderAwareRequestFilter  | 包装原始请求  | YES  |
|  JaasApiIntegrationFilter  | 处理 JAAS 认证  | NO  |
|  RememberMeAuthenticationFilter  | 处理 RememberMe 登录  | NO  |
|  AnonymousAuthenticationFilter  | 配置匿名认证  | YES  |
|  OAuth2AuthorizationCodeGrantFilter  | 处理 OAuth2 认证中的授权码  | NO  |
|  SessionManagementFilter  | 处理 Session 并发问题  | YES  |
|  ExceptionTranslationFilter  | 处理异常认证/授权中的情况  | YES  |
|  FilterSecurityInterceptor  | 处理授权  | YES  |
|  SwitchUserFilter  | 处理账户切换  | NO  |

开发者所见到的 Spring Security 提供的功能，都是通过这些过滤器来实现的，这些过滤器按照既定的优先级排列，最终形成一个过滤器链。开发者也可以自定义过滤器，并通过 `@Order` 注解去调整自定义过滤器在过滤器链中的位置。

### 登录数据保存

如果不使用 Spring Security 这一类的安全管理框架，大部分的开发者可能会将登录用户数据保存在Session中，事实上，Spring Security也是这么做的。但是，为了使用方便，Spring Security 在此基础上还做了一些改进，其中最主要的一个变化就是线程绑定。

当用户登录成功后，Spring Security 会将登录成功的用户信息保存到 SecurityContextHolder 中。SecurityContextHolder 中的数据保存默认是通过 ThreadLocal 来实现的，使用 ThreadLocal 创建的变量只能被当前线程访问，不能被其他线程访问和修改，也就是用户数据和请求线程绑定在一起。当登录请求处理完毕后，Spring Security 会将 SecurityContextHolder 中的数据拿出来保存到 Session 中，同时将 SecurityContextHolder 中的数据清空。以后每当有请求到来时，Spring Security 就会先从 Session 中取出用户登录数据，保存到 SecurityContextHolder 中，方便在该请求的后续处理过程中使用，同时在请求结束时将 SecurityContextHolder 中的数据拿出来保存到 Session 中，然后将 SecurityContextHolder 中的数据清空。

这一策略非常方便用户在 Controller 或者 Service 层获取当前登录用户数据，但是带来的另外一个问题就是，在子线程中想要获取用户登录数据就比较麻烦。Spring Security 对此也提供了相应的解决方案，如果开发者使用 `@Async` 注解来开启异步任务的话，那么只需要添加如下配置，使用 Spring Security 提供的异步任务代理，就可以在异步任务中从 Security ContextHolder 里边获取当前登录用户的信息：

```java
@Configuration
public class ApplicationConfiguration extends AsyncConfigurerSupport {
	@Override
	public Executor getAsyncExecutor() {
		return new DelegatingSecurityContextExecutorService(
			Executors.newFixedThreadPool(5));
	} 
}
```