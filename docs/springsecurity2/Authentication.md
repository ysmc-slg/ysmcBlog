---
description: 认证
autoPrev: README
---

# 认证

在 Spring Security 中，对认证功能做了大量的封装，以至于开发者只需要稍微配置一下就能使用认证功能，然而要深刻理解其源码并非易事，本文带领我们从最基本的用法开始讲解，最终再扩展到对源码的理解。

## Spring Security 基本认证
### 快速入门
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

接下来启动项目，`/hello` 接口就已经被保护起来了。当用户访问 `/hello` 接口时，会自动跳转到登录页面，如图 2-1 所示，用户登录成功后，才能访问到 `/hello` 接口。



默认的登录用户名是 `user`，登录密码则是一个随机生成的 UUID 字符串，在项目启动日志中可以看到登录密码（这也意味着项目每次启动时，密码都会发生变化）：
```properties
Using generated security password: 8ef9c800-17cf-47a3-9984-8ff936db6dd8
```
输入默认的用户名和密码，就可以成功登录了。这就是 Spring Security 的强大之处，只需要引入一个依赖，所有的接口就会被自动保护起来。

### 流程分析
通过一个简单那的流程图来看一下上面案例中的请求流程，如图 2-2 所示。

![请求流程图](/blogImg/springsecurity/请求流程图.jpg)

流程图比较清晰地说明了整个请求过程：
1. 浏览器发起请求去访问 `/hello` 接口，这个接口默认是需要认证之后才能访问的。
2. 这个请求会走一遍 Spring Security 中的过滤器链，在最后的 `FilterSecurityInterceptor` 过滤器中被拦截下来，因为系统发现用户未认证。请求拦截下来之后，接下来抛出 `AccessDeniedException` 异常。
3. 抛出 `AccessDeniedException` 异常在 `ExceptionTranslationFilter` 过滤器中被捕获，`ExceptionTranslationFilter` 过滤器通过调用 `LoginUrlAuthenticationEntryPoint#commence` 方法给客户端返回 302，要求客户端重定向到 `/login` 页面。
4. 客户端发送 `/login` 请求
5. `/login` 请求被 `DefaultLonginPageGeneratingFilter` 过滤器拦截下来，并在该过滤器中返回登录页面。所以当用户访问 `/hello` 接口时会首先看到登录页面。

在整个过程中，相当于客户端一共发送了两个请求，第一个请求是 `/hello`，服务端收到之后，返回302，要求客户重定向到 `login`，于是客户端又发送了 `/login` 请求。

**注意**：

上面的流程分析是对添加完 Spring Security 依赖，什么都没设置，系统默认进行的流程。我们其实可以进行一些自定义配置，如：

前后端分离项目中，在用户未认证的情况下，不会跳转到 `/login` 页面，而是返回 `用户未认证`，至于前端怎样处理就不是我们管的了。处理这个问题一般会创建一个类实现 `AuthenticationEntryPoint` 接口，在类中实现认证失败的操作，当认证失败后就会进入自定义的类中。所以上面的 4、5 就不会执行了。

还有，登录页面也是可以配置的，下面的文章会专门展开讲解

### 原理分析
在 [快速入门](./Authentication.html#快速入门) 中，虽然只是引入了一个依赖，代码不多，但是 Spring Boot 背后却默默做了很多事情：

* 开启 Spring Security 自动化配置，开启后，会自动创建一个名为 springSecurityFilterChain 的过滤器，幵注入到 Spring 容器中，这个过滤器将负责所有的安全管理，包括用户的认证、授权、重定向到登录页面等（springSecurityFilterChain 实际上代理了 Spring Security 中的过滤器链）
* 创建一个 UserDetailsService 实例，UserDetailsService 负责提供用户数据，默认的用户数据是基于内存的用户，用户名为 user，密码则是随机生成的 UUID 字符串。
* 给用户生成一个默认的登录页面。
* 开启 CSRF 攻击防御。
* 开启会话固定攻击防御。
* 集成 X-XSS-Protection。 
* 集成 X-Frame-Options 以防止单击劫持。

这里涉及的细节还是非常多的，登录的细节我们会在后面的章节继续详细介绍，这里主要分析一下默认用户的生成以及默认登录页面的生成。

#### 默认用户生成
Spring Security 中定义了 UserDetails 接口来规范开发者自定义的用户对象，这样方便一些旧系统、用户表已经固定的系统集成到 Spring Security 认证体系中。

UserDetails 接口定义如下：

```java
public interface UserDetails extends Serializable {
  Collection<? extends GrantedAuthority> getAuthorities();
  String getPassword();
  String getUsername();
  boolean isAccountNonExpired();
  boolean isAccountNonLocked();
  boolean isCredentialsNonExpired();
  boolean isEnabled();
}
```
该接口中一共定义了 7 个方法：
1. getAuthorities 方法：返回当前账户所具备的权限。
2. getPassword 方法：返回当前账户的密码。
3. getUsername 方法：返回当前账户的用户名。
4. isAccountNonExpired 方法：返回当前账户是否未过期。
5. isAccountNonLocked 方法：返回当前账户是否未锁定。
6. isCredentialsNonExpired 方法：返回当前账户凭证（如密码）是否未过期。
7. isEnabled 方法：返回当前账户是否可用。

这是用户对象的定义，而负责提供用户数据源的接口 是 UserDetailsService ，UserDetailsService 中只有一个查询用户的方法，代码如下：
```java
public interface UserDetailsService {
 UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
```

loadUserByUsername 有一个参数是 username，这是用户在认证时传入的用户名，最常见的就是用户在登录表单中输入的用户名（实际开发时还可能存在其他情况，例如使用 CAS 单点登录时，username 并非表单输入的用户名，而是 CAS Server 认证成功后回调的用户名参数），开发者在这里拿到用户名之后，再去数据库中查询用户，最终返回一个 UserDetails 实例。在实际项目中，一般需要开发者自定义 UserDetailsService 的实现。如果开发者没有自定义 UserDetailsService 的实现，Spring Security 也为 UserDetailsService 提供了默认实现，如图 2-3 所示。

![UserDetailsService的默认实现类](/blogImg/springsecurity/UserDetailsService的默认实现类.jpg)

* UserDetailsManager 在 UserDetailsService 的基础上，继续定义了添加用户、更新用户、
删除用户、修改密码以及判断用户是否存在共 5 种方法。
* JdbcDaoImpl 在 UserDetailsService 的基础上，通过 spring-jdbc 实现了从数据库中查询用户的方法。
* InMemoryUserDetailsManager 实现了 UserDetailsManager 中关于用户的增删改查方法，不过都是基于内存的操作，数据幵没有持久化。
* JdbcUserDetailsManager 继承自 JdbcDaoImpl 同时又实现了 UserDetailsManager 接口，因
    此可以通过 JdbcUserDetailsManager 实现对用户的增删改查操作，这些操作都会持久化到数据库中。不过 JdbcUserDetailsManager 有一个局限性，就是操作数据库中用户的 SQL 都是提前写好的，不够灵活，因此在实际开发中 JdbcUserDetailsManager 使用幵不多。
* CachingUserDetailsService 的特点是会将 UserDetailsService 缓存起来。
* UserDetailsServiceDelegator 则是提供了 UserDetailsService 的懒加载功能。
* ReactiveUserDetailsServiceAdapter 是 webflux-web-security 模块定义的 UserDetailsService 实现

当我们使用 Spring Security 时，如果仅仅只是引入一个 Spring Security 依赖，则默认使用的用户就是由 InMemoryUserDetailsManager 提供的。

大家知道，Spring Boot 之所以能够做到零配置使用 Spring Security，就是因为它提供了众多的自动化配置类。其中，针对 UserDetailsService 的自动化配置类是 UserDetailsServiceAutoConfiguration，这个类的源码并不长，我们一起来看一下：

```java
@Configuration(
    proxyBeanMethods = false
)
@ConditionalOnClass({AuthenticationManager.class})
@ConditionalOnBean({ObjectPostProcessor.class})
@ConditionalOnMissingBean(
    value = {AuthenticationManager.class, AuthenticationProvider.class, UserDetailsService.class},
    type = {"org.springframework.security.oauth2.jwt.JwtDecoder", "org.springframework.security.oauth2.server.resource.introspection.OpaqueTokenIntrospector"}
)
public class UserDetailsServiceAutoConfiguration {
    private static final String NOOP_PASSWORD_PREFIX = "{noop}";
    private static final Pattern PASSWORD_ALGORITHM_PATTERN = Pattern.compile("^\\{.+}.*$");
    private static final Log logger = LogFactory.getLog(UserDetailsServiceAutoConfiguration.class);

    public UserDetailsServiceAutoConfiguration() {
    }

    @Bean
    @ConditionalOnMissingBean(
        type = {"org.springframework.security.oauth2.client.registration.ClientRegistrationRepository"}
    )
    @Lazy
    public InMemoryUserDetailsManager inMemoryUserDetailsManager(SecurityProperties properties, ObjectProvider<PasswordEncoder> passwordEncoder) {
        User user = properties.getUser();
        List<String> roles = user.getRoles();
        return new InMemoryUserDetailsManager(
				User.withUsername(user.getName()).password(getOrDeducePassword(user, passwordEncoder.getIfAvailable()))
						.roles(StringUtils.toStringArray(roles)).build());
    }

    private String getOrDeducePassword(User user, PasswordEncoder encoder) {
        String password = user.getPassword();
        if (user.isPasswordGenerated()) {
            logger.info(String.format("%n%nUsing generated security password: %s%n", user.getPassword()));
        }

        return encoder == null && !PASSWORD_ALGORITHM_PATTERN.matcher(password).matches() ? "{noop}" + password : password;
    }
}
```
从上述代码中可以看到，有两个比较重要的条件促使系统自动提供一个 InMemoryUserDetailsManager 的实例：

1. 当前 classpath 下存在 AuthenticationManager 类。 
2. 当前项目中，系统没有提供 AuthenticationManager、AuthenticationProvider、UserDetailsService 以及 ClientRegistrationRepository 实例。

默认情况下，上面的条件都会满足，此时 Spring Security 会提供一个 InMemoryUserDetailsManager 实例。从 inMemoryUserDetailsManager 方法中可以看到，用户数据源自 `SecurityProperties#getUser` 方法：

```java
@ConfigurationProperties(prefix = "spring.security")
  public class SecurityProperties {
    private User user = new User();
    public User getUser() {
    return this.user;
  }
  public static class User {
    private String name = "user";
    private String password = UUID.randomUUID().toString();
    private List<String> roles = new ArrayList<>();
    //省略 getter/setter
  } 
 }
```

从 SecurityProperties.User 类中，我们就可以看到默认的用户名是 user，默认的密码是一个 UUID 字符串。再回到 inMemoryUserDetailsManager 方法中，构造 InMemoryUserDetailsManager 实例时
需要一 个 User 对 象 。 这 里 的 User 对 象 不 是 SecurityProperties.User ， 而 是 org.springframework.security.core.userdetails.User，这是 Spring Security 提供的一个实现了 UserDetails 接口的用户类，该类提供了相应的静态方法，用来构造一个默认的 User 实例。同时，默认的用户密码还在 getOrDeducePassword 方法中进行了二次处理，由于默认的 encoder 为 null，所以密码的二次处理只是给密码加了一个前缀{noop}，表示密码是明文存储的。

经过以上的源码梳理，相信大家已经明白了 Spring Security 默认的用户名/密码是来自哪里了！另外，当看了 SecurityProperties 的源码后，只要对 Spring Boot 中 properties 属性的加载机制有一点了解，就会明白，只要我们在项目的 application.properties 配置文件中添加如下配置，就能定制 SecurityProperties.User 类中各属性的值：

```propertie
spring.security.user.name=javaboy
spring.security.user.password=123
spring.security.user.roles=admin,user
```

配置完成后，重启项目，此时登录的用户名就是 javaboy，登录密码就是 123 ，登录成功
后用户具备 admin 和 user 两个角色。

#### 默认页面生成
[快速入门](./Authentication.html#快速入门) 小节的案例中，一共存在两个默认页面，一个就是图 2-1 所示的登录页面，另外一个则是注销登录页面。当用户登录成功之后，在浏览器中输入 http://localhost:8080/logout 就
可以看到注销登录页面，如图 2-4 所示。


![注销登录页面](/blogImg/springsecurity/注销登录页面.jpg)

那么这两个页面是从哪里来的呢？这里剖析一下。在 [上篇文章](./#web安全) 中，我们介绍了 Spring Security 中常见的过滤器，在这些常见的过滤器中就包含两个和页面相关的过滤器：DefaultLoginPageGeneratingFilter 和 DefaultLogoutPageGeneratingFilter。

通过过滤器的名字就可以分辨出 DefaultLoginPageGeneratingFilter 过滤器用来生成默认的登录页面，DefaultLogoutPageGeneratingFilter 过滤器则用来生成默认的注销页面。

先来看 DefaultLoginPageGeneratingFilter。作为 Spring Security 过滤器链中的一员，在第一次请求/hello 接口的时候，就会经过 DefaultLoginPageGeneratingFilter 过滤器，但是由于/hello 接口和登录无关，因此 DefaultLoginPageGeneratingFilter 过滤器并未干涉/hello 接口。等到第二次重定向到/login 页面的时候，这个时候就和 DefaultLoginPageGeneratingFilter 有关系了，此时请求就会在 DefaultLoginPageGeneratingFilter 中进行处理，生成登录页面返回给客户端。

我们来看一下 DefaultLoginPageGeneratingFilter 的源码，源码比较长，这里仅列出核心部分：
```java
public class DefaultLoginPageGeneratingFilter extends GenericFilterBean {
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) res;

		boolean loginError = isErrorPage(request);
		boolean logoutSuccess = isLogoutSuccess(request);
		if (isLoginUrlRequest(request) || loginError || logoutSuccess) {
			String loginPageHtml = generateLoginPageHtml(request, loginError,
					logoutSuccess);
			response.setContentType("text/html;charset=UTF-8");
			response.setContentLength(loginPageHtml.getBytes(StandardCharsets.UTF_8).length);
			response.getWriter().write(loginPageHtml);

			return;
		}

		chain.doFilter(request, response);
	}

  // 生成页面
  private String generateLoginPageHtml(HttpServletRequest request, boolean loginError,
			boolean logoutSuccess) {
		String errorMsg = "Invalid credentials";

		if (loginError) {
			HttpSession session = request.getSession(false);

			if (session != null) {
				AuthenticationException ex = (AuthenticationException) session
						.getAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
				errorMsg = ex != null ? ex.getMessage() : "Invalid credentials";
			}
		}

		StringBuilder sb = new StringBuilder();

		sb.append("<!DOCTYPE html>\n"
				+ "<html lang=\"en\">\n"
				+ "  <head>\n"
				+ "    <meta charset=\"utf-8\">\n"
				+ "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n"
				+ "    <meta name=\"description\" content=\"\">\n"
				+ "    <meta name=\"author\" content=\"\">\n"
				+ "    <title>Please sign in</title>\n"
				+ "    <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M\" crossorigin=\"anonymous\">\n"
				+ "    <link href=\"https://getbootstrap.com/docs/4.0/examples/signin/signin.css\" rel=\"stylesheet\" crossorigin=\"anonymous\"/>\n"
				+ "  </head>\n"
				+ "  <body>\n"
				+ "     <div class=\"container\">\n");

		String contextPath = request.getContextPath();
		if (this.formLoginEnabled) {
			sb.append("      <form class=\"form-signin\" method=\"post\" action=\"" + contextPath + this.authenticationUrl + "\">\n"
					+ "        <h2 class=\"form-signin-heading\">Please sign in</h2>\n"
					+ createError(loginError, errorMsg)
					+ createLogoutSuccess(logoutSuccess)
					+ "        <p>\n"
					+ "          <label for=\"username\" class=\"sr-only\">Username</label>\n"
					+ "          <input type=\"text\" id=\"username\" name=\"" + this.usernameParameter + "\" class=\"form-control\" placeholder=\"Username\" required autofocus>\n"
					+ "        </p>\n"
					+ "        <p>\n"
					+ "          <label for=\"password\" class=\"sr-only\">Password</label>\n"
					+ "          <input type=\"password\" id=\"password\" name=\"" + this.passwordParameter + "\" class=\"form-control\" placeholder=\"Password\" required>\n"
					+ "        </p>\n"
					+ createRememberMe(this.rememberMeParameter)
					+ renderHiddenInputs(request)
					+ "        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n"
					+ "      </form>\n");
		}

		if (openIdEnabled) {
			sb.append("      <form name=\"oidf\" class=\"form-signin\" method=\"post\" action=\"" + contextPath + this.openIDauthenticationUrl + "\">\n"
					+ "        <h2 class=\"form-signin-heading\">Login with OpenID Identity</h2>\n"
					+ createError(loginError, errorMsg)
					+ createLogoutSuccess(logoutSuccess)
					+ "        <p>\n"
					+ "          <label for=\"username\" class=\"sr-only\">Identity</label>\n"
					+ "          <input type=\"text\" id=\"username\" name=\"" + this.openIDusernameParameter + "\" class=\"form-control\" placeholder=\"Username\" required autofocus>\n"
					+ "        </p>\n"
					+ createRememberMe(this.openIDrememberMeParameter)
					+ renderHiddenInputs(request)
					+ "        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n"
					+ "      </form>\n");
		}

		if (oauth2LoginEnabled) {
			sb.append("<h2 class=\"form-signin-heading\">Login with OAuth 2.0</h2>");
			sb.append(createError(loginError, errorMsg));
			sb.append(createLogoutSuccess(logoutSuccess));
			sb.append("<table class=\"table table-striped\">\n");
			for (Map.Entry<String, String> clientAuthenticationUrlToClientName : oauth2AuthenticationUrlToClientName.entrySet()) {
				sb.append(" <tr><td>");
				String url = clientAuthenticationUrlToClientName.getKey();
				sb.append("<a href=\"").append(contextPath).append(url).append("\">");
				String clientName = HtmlUtils.htmlEscape(clientAuthenticationUrlToClientName.getValue());
				sb.append(clientName);
				sb.append("</a>");
				sb.append("</td></tr>\n");
			}
			sb.append("</table>\n");
		}

		if (this.saml2LoginEnabled) {
			sb.append("<h2 class=\"form-signin-heading\">Login with SAML 2.0</h2>");
			sb.append(createError(loginError, errorMsg));
			sb.append(createLogoutSuccess(logoutSuccess));
			sb.append("<table class=\"table table-striped\">\n");
			for (Map.Entry<String, String> relyingPartyUrlToName : saml2AuthenticationUrlToProviderName.entrySet()) {
				sb.append(" <tr><td>");
				String url = relyingPartyUrlToName.getKey();
				sb.append("<a href=\"").append(contextPath).append(url).append("\">");
				String partyName = HtmlUtils.htmlEscape(relyingPartyUrlToName.getValue());
				sb.append(partyName);
				sb.append("</a>");
				sb.append("</td></tr>\n");
			}
			sb.append("</table>\n");
		}
		sb.append("</div>\n");
		sb.append("</body></html>");

		return sb.toString();
	}
}

```

DefaultLoginPageGeneratingFilter 的源码执行流程还是非常清晰的，我们梳理一下：
1. 在 doFilter 方法中，首先判断出当前请求是否为登录出错请求、注销成功请求或者登录请求。如果是这三种请求中的任意一个，就会在 DefaultLoginPageGeneratingFilter 过滤器中生成登录页面并返回，否则请求继续往下走，执行下一个过滤器（这就是一开始的/hello 请求为什么没有被 DefaultLoginPageGeneratingFilter 拦截下来的原因）。
2. 如果当前请求是登录出错请求、注销成功请求或者登录请求中的任意一个，就会调用 generateLoginPageHtml 方法去生成登录页面。在该方法中，如果有异常信息就把异常信息取出来一同返回给前端，然后根据不同的登录场景，生成不同的登录页面。生成过程其实就是字符串拼接，拼接出不同的登录表单（由于源码太长，上面没有贴出来具体的字符串拼接源码，读者可以自行查看 DefaultLoginPageGeneratingFilter 类的源码）。
3. 登录页面生成后，接下来通过 HttpServletResponse 将登录页面写回到前端，然后调用 return 方法跳出过滤器链。这就是 DefaultLoginPageGeneratingFilter 的工作过程。这里重点搞明白为什么/hello 请求没有被拦截，而/login 请求却被拦截了，其他都很好懂。
   
理解了 DefaultLoginPageGeneratingFilter，再来看 DefaultLogoutPageGeneratingFilter 就更容易了，DefaultLogoutPageGeneratingFilter 部分核心源码如下：

```java
public class DefaultLogoutPageGeneratingFilter extends OncePerRequestFilter {
  private RequestMatcher matcher = new AntPathRequestMatcher("/logout", "GET");
  @Override
  protected void doFilterInternal(HttpServletRequest request,HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    if (this.matcher.matches(request)) {
      renderLogout(request, response);
    } else {
      filterChain.doFilter(request, response);
    }
  }


  private void renderLogout(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String page = "";
    response.setContentType("text/html;charset=UTF-8");
    response.getWriter().write(page);
  } 
}
```

从上述源码中可以看出，请求到来之后，会先判断是否是注销请求 `/logout`，如果是 `/logout` 请求，则渲染一个注销请求的页面返回给客户端，渲染过程和前面登录页面的渲染过程类似，也是字符串拼接（这里省略了字符串拼接，读者可以参考 DefaultLogoutPageGeneratingFilter 的源码）；否则请求继续往下走，执行下一个过滤器。

通过前面的分析，相信大家对这个简单的案例已经有所了解，看似只是加了一个依赖，但实际上 Spring Security 和 Spring Boot 在背后都默默做了很多事情，当然还有很多没有介绍到的，我们将在后面的章节中和大家一起继续深究。

## 登录表单配置
理解了入门案例之后，接下来我们再来看一下登录表单的详细配置。首先创建一个新的 Spring Boot 项目，引入 Web 和 Spring Security 依赖，代码如下：

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
项目创建好之后，为了方便测试，需要在 application.properties 中添加如下配置，将登录用户名和密码固定下来：
```properties
spring.security.user.name=javaboy
spring.security.user.password=123
```
接下来，我们在 resources/static 目录下创建一个 login.html 页面，这个是我们自定义的登录页面：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>登录</title>
		<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
			id="bootstrap-css">
		<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js">
		</script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
		</script>
	</head>
	<style>
		#login .container #login-row #login-column #login-box {
			border: 1px solid #9C9C9C;
			background-color: #EAEAEA;
		}
	</style>
	<body>
	<div id="login">
		<div class="container">
			<div id="login-row" class="row justify-content-center align-items-center">
				<div id="login-column" class="col-md-6">
					<div id="login-box" class="col-md-12">
						<form id="login-form" class="form" action="/doLogin" method="post">
							<h3 class="text-center text-info">登录</h3>
							<div class="form-group">
								<label for="username" class="text-info">用户名:</label><br>
								<input type="text" name="uname" id="username" class="form-control">
							</div>
							<div class="form-group">
								<label for="password" class="text-info">密码:</label><br>
								<input type="text" name="passwd" id="password" class="form-control">
							</div>
							<div class="form-group">
								<input type="submit" name="submit" class="btn btn-info btn-md" value="登录">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
```
这个 login.html 中的核心内容就是一个登录表单，登录表单中有三个需要注意的地方：
1. form 的 `action`，这里给出的是 `/doLogin`，表示表单要提交到 `/doLogin` 接口上。
2. 用户名输入框的 name 属性值为 `uname`，当然这个值是可以自定义的，这里采用了 `uname`。
3. 密码输入框的 name 属性值为 `passwd`，`passwd` 也是可以自定义的。

`login.html` 定义好之后，接下来定义两个测试接口，作为受保护的资源。当用户登录成功后，就可以访问到受保护的资源。接口定义如下：
```java
@RestController
public class LoginController {
	@RequestMapping("/index")
	public String index() {
		return "login success";
	}
	@RequestMapping("/hello")
	public String hello() {
		return "hello spring security";
	} 
}
```

最后再提供一个 Spring Security 的配置类：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
	http.authorizeRequests()
				.anyRequest().authenticated()
				.and()
				.formLogin()
				.loginPage("/login.html")
				.loginProcessingUrl("/doLogin")
				.defaultSuccessUrl("/index ")
				.failureUrl("/login.html")
				.usernameParameter("uname")
				.passwordParameter("passwd")
				.permitAll()
				.and()
				.csrf().disable();
	} 
}
```
在 Spring Security 中，如果我们需要自定义配置，基本上都是继承自 `WebSecurityConfigurerAdapter` 来实现的，当然 `WebSecurityConfigurerAdapter` 本身的配置还是比较复杂，同时也是比较丰富的，这里先不做过多的展开，仅就结合上面的代码来解释，在下一个小节中我们将会对这里的配置再做更加详细的介绍。

1. 首先 `configure` 方法中是一个链式配置，当然也可以不用链式配置，每一个属性配置完毕后再从 `http.` 重新开始写起
2. authorizeRequests() 方法表示开启权限配置（该方法的含义其实比较复杂，我们在后面还会再次介绍该方法），anyRequest().authenticated()表示所有的请求都要认证之后才能访问。
3. `and()` 方法会返回 HttpSecurityBuilder 对象的一个子类（实际上就是 HttpSecurity），所以 `and()` 方法相当于又回到 HttpSecurity 实例，重新开启新一轮的配置。如果觉得 `and()` 方法很难理解，也可以 不用 `and()` 方法 ，在 `.anyRequest().authenticated()` 配置完成后直接用分号（;）结束，然后通过 `http.formLogin()` 继续配置表单登录。
4. formLogin() 表示开启表单登录配置， `loginPage` 用来配置登录页面地址 ；`loginProcessingUrl` 用来配置登录接口地址；`defaultSuccessUrl` 表示登录成功后的跳转地址；`failureUrl` 表示登录失败后的跳转地址；`usernameParameter` 表示登录用户名的参数名称；`passwordParameter` 表示登录密码的参数名称；`permitAll` 表示跟登录相关的页面和接口不做拦截，直接通过。需要注意的是，`loginProcessingUrl`、`usernameParameter`、`passwordParameter` 需要和 `login.html` 中登录表单的配置一致。
5. 最后的 `csrf().disable()` 表示禁用 CSRF 防御功能，Spring Security 自带了 CSRF 防御机制，但是我们这里为了测试方便，先将 CSRF 防御机制关闭，后面将会详细介绍 CSRF 攻击与防御问题。

配置完成后，启动 Spring Boot 项目，浏览器地址栏中输入 http://localhost:8080/index，会自动跳转到 http://localhost:8080/login.html 页面（为什么跳转到login.html 在[流程分析](./Authentication.html#流程分析)中说过 ），如图 2-5 所示。输入用户名和密码进行登录（用户名为 javaboy，密码为 123），登录成功之后，就可以访问到 index 页面了，如图 2-6 所示。

![登录](/blogImg/springsecurity/登录.jpg)

经过上面的配置，我们已经成功自定义了一个登录页面出来，用户在登录成功之后，就可以访问受保护的资源了。

### 配置细节

这里还有一些配置的细节需要说一下，在前面的配置中，我们用 `defaultSuccessUrl` 表示用户登录成功后的跳转地址，用 `failureUrl` 表示用户登录失败后的跳转地址。关于登录成功和登录失败，除了这两个方法可以配置之外，还有另外两个方法也可以配置。

#### 登录成功
当用户登录成功之后，除了 `defaultSuccessUrl` 方法可以实现登录成功后的跳转之外，`successForwardUrl` 也可以实现登录成功后的跳转，代码如下：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	 @Override
	 protected void configure(HttpSecurity http) throws Exception {
			http.authorizeRequests()
			.anyRequest().authenticated()
			.and()
			.formLogin()
			.loginPage("/login.html")
			.loginProcessingUrl("/doLogin")
			.successForwardUrl("/index ")
			.failureUrl("/login.html")
			.usernameParameter("uname")
			.passwordParameter("passwd")
			.permitAll()
			.and()
			.csrf().disable();
	 } 
 }
```

defaultSuccessUrl 和 successForwardUrl 的区别如下：

1. defaultSuccessUrl 表示用户登录成功后，会自动重定向到登录之前的地址上，如果用户本身就是直接访问的登录页面，则登陆成功后就会重定向到 `defaultSuccessUrl` 指定页面中。例如，用户在未认证的情况下，访问了 `/hello` 页面，此时会自动重定向到登录页面，当用户登录成功后，就会自动重定向到/hello 页面；而用户如果一开始就访问登录页面，则登录成功后就会自动重定向到 `defaultSuccessUrl` 所指定的页面中。
2. `successForwardUrl` 则不会考虑用户之前的访问地址，只要用户登录成功，就会通过服务器端跳转到 `successForwardUrl` 所指定的页面。
3. `defaultSuccessUrl` 有一个重载方法，如果重载方法的第二个参数传入 `true`，则 `defaultSuccessUrl` 的效果与 `successForwardUrl` 类似，即不考虑用户之前的访问地址，只要登录成功，就重定向到 `defaultSuccessUrl` 所指定的页面。不同之处在于，`defaultSuccessUrl` 是通过重定向实现的跳转（客户端跳转），而 `successForwardUrl` 则是通过服务器端跳转实现的。

无论是 `defaultSuccessUrl` 还是 `successForwardUrl`，最终所配置的都是 `AuthenticationSuccessHandler` 接口的实例。Spring Security 中专门提供了 `AuthenticationSuccessHandler` 接口用来处理登录成功事项：
```java
public interface AuthenticationSuccessHandler {

	default void onAuthenticationSuccess(HttpServletRequest request,
			HttpServletResponse response, FilterChain chain, Authentication authentication)
			throws IOException, ServletException{
		onAuthenticationSuccess(request, response, authentication);
		chain.doFilter(request, response);
	}

	void onAuthenticationSuccess(HttpServletRequest request,HttpServletResponse response, Authentication authentication) throws IOException, ServletException;

}
```
由上述代码可以看到，`AuthenticationSuccessHandler` 接口中一共定义了两个方法，其中一个是 default 方法，此方法是 Spring Security 5.2 开始加入进来的，在处理特定的认证请求 `Authentication Filter` 中会用到；另外一个非 default 方法，则用来处理登录成功的具体事项，其中 `request` 和 `response` 参数好理解，`authentication` 参数保存了登录成功的用户信息。我们将在后面的文章中详细介绍 authentication 参数。

`AuthenticationSuccessHandler` 接口共有三个实现类，如图 2-7 所示。

![AuthenticationSuccessHandler实现类](/blogImg/springsecurity/AuthenticationSuccessHandler实现类.jpg)

1. `SimpleUrlAuthenticationSuccessHandler` 继承自 `AbstractAuthenticationTargetUrlRequestHandler`，通过 `AbstractAuthenticationTargetUrlRequestHandler` 中的 `handle` 方法实现请求重定向。
2. `SavedRequestAwareAuthenticationSuccessHandler` 在 `SimpleUrlAuthenticationSuccessHandler` 的基础上增加了请求缓存的功能，可以记录之前请求的地址，进而在登录成功后重定向到一开始访问的地址。
3. `ForwardAuthenticationSuccessHandler` 的实现则比较容易，就是一个服务端跳转。

我们来重点分析 `SavedRequestAwareAuthenticationSuccessHandler` 和 `ForwardAuthenticationSuccessHandler` 的实现。

当通过 `defaultSuccessUrl` 来设置登录成功后重定向的地址时，实际上对应的实现类就是 `SavedRequestAwareAuthenticationSuccessHandler`，代码如下：
```java
public class SavedRequestAwareAuthenticationSuccessHandler extends
		SimpleUrlAuthenticationSuccessHandler {
	protected final Log logger = LogFactory.getLog(this.getClass());

	private RequestCache requestCache = new HttpSessionRequestCache();

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request,
			HttpServletResponse response, Authentication authentication)
			throws ServletException, IOException {
		SavedRequest savedRequest = requestCache.getRequest(request, response);

		if (savedRequest == null) {
			super.onAuthenticationSuccess(request, response, authentication);

			return;
		}
		String targetUrlParameter = getTargetUrlParameter();
		if (isAlwaysUseDefaultTargetUrl()
				|| (targetUrlParameter != null && StringUtils.hasText(request
						.getParameter(targetUrlParameter)))) {
			requestCache.removeRequest(request, response);
			super.onAuthenticationSuccess(request, response, authentication);

			return;
		}

		clearAuthenticationAttributes(request);

		// Use the DefaultSavedRequest URL
		String targetUrl = savedRequest.getRedirectUrl();
		logger.debug("Redirecting to DefaultSavedRequest Url: " + targetUrl);
		getRedirectStrategy().sendRedirect(request, response, targetUrl);
	}

	public void setRequestCache(RequestCache requestCache) {
		this.requestCache = requestCache;
	}
}
```
这里的核心方法就是 `onAuthenticationSuccess`：

1. 首先从 `requestCache` 中获取缓存下来的请求，如果没有获取到缓存请求，就说明用户在访问登录页面之前并没有访问其他页面，此时直接调用父类的`onAuthenticationSuccess` 方法来处理，最终会重定向到 `defaultSuccessUrl` 指定的地址。
2. 接下来会获取一个 `targetUrlParameter`，这个是用户显式指定的、希望登录成功后重定向的地址，例如用户发送的登录请求是 http://localhost:8080/doLogin?target=/hello，这就表示当用户登录成功之后，希望自动重定向到 `/hello` 这个接口。`getTargetUrlParameter` 就是要获取重定向地址参数的 `key`，也就是上面的 `target`，拿到 `target` 之后，就可以获取到重定向地址了。
3. 如果 `targetUrlParameter` 存在，或者用户设置了 `alwaysUseDefaultTargetUrl` 为 true，这个时候缓存下来的请求就没有意义了。此时会直接调用父类的 `onAuthenticationSuccess` 方法完成重定向。
   * `targetUrlParameter` 存在，则直接重定向到 `targetUrlParameter` 指定的地址；
   * `alwaysUseDefaultTargetUrl` 为 true，则直接重定向到 `defaultSuccessUrl` 指定的地址；
   * `targetUrlParameter` 存在并且 `alwaysUseDefaultTargetUrl` 为 true，则重定向到 `defaultSuccessUrl` 指定的地址

4. 如果前面的条件都不满足，那么最终会从缓存请求 `savedRequest` 中获取重定向地址，然后进行重定向操作。

这就是 `SavedRequestAwareAuthenticationSuccessHandler` 的实现逻辑，开发者也可以配置自己的 `SavedRequestAwareAuthenticationSuccessHandler`，代码如下：

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login.html")
                .loginProcessingUrl("/doLogin")
                .successHandler(successHandler())
                .failureUrl("/login.html")
                .usernameParameter("uname")
                .passwordParameter("passwd")
                .permitAll()
                .and()
                .csrf().disable();
    }

    SavedRequestAwareAuthenticationSuccessHandler successHandler(){
        SavedRequestAwareAuthenticationSuccessHandler handler = new SavedRequestAwareAuthenticationSuccessHandler();
        handler.setDefaultTargetUrl("/hi");
        handler.setTargetUrlParameter("target");
        return handler;
    }
}
```
**注意**：

在配置时指定了 `targetUrlParameter` 为 `target`，这样用户就可以在登录请求中，通过 `target` 来指定跳转地址，然后需要修改一下前面 `login.html` 中的 `form` 表单：

```html
<form id="login-form" class="form" action="/doLogin?target=/hello" method="post">
		<h3 class="text-center text-info">登录</h3>
		<div class="form-group">
				<label for="username" class="text-info">用户名:</label><br>
				<input type="text" name="uname" id="username" class="form-control">
		</div>
		<div class="form-group">
				<label for="password" class="text-info">密码:</label><br>
				<input type="text" name="passwd" id="password" class="form-control">
		</div>
		<div class="form-group">
				<input type="submit" name="submit" class="btn btn-info btn-md" value="登录">
		</div>
</form>
```
在 from 表单中，action 修改为 `/doLogin?target=/hello`，这样当用户登录成功之后，就始终跳转到 `/hello` 接口了。

当我们通过 `successForwardUrl` 来设置登录成功后重定向的地址时，实际上对应的实现类就是 `ForwardAuthenticationSuccessHandler`，`ForwardAuthenticationSuccessHandler` 的源码特别简单，就是一个服务端转发，代码如下：

```java
public class ForwardAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

	private final String forwardUrl;

	public ForwardAuthenticationSuccessHandler(String forwardUrl) {
		Assert.isTrue(UrlUtils.isValidRedirectUrl(forwardUrl),
				() -> "'" + forwardUrl + "' is not a valid forward URL");
		this.forwardUrl = forwardUrl;
	}

	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
		request.getRequestDispatcher(forwardUrl).forward(request, response);
	}
}
```

由上述代码可以看到，主要功能就是调用 `getRequestDispatcher` 方法进行服务端转发。

`AuthenticationSuccessHandler` 默认的三个实现类无论是哪一个，都是用来处理页面跳转的。有时候页面跳转并不能满足我们的需求，特别是现在流行的前后端分离开发中，用户登录成功后，就不再需要页面跳转了，只需要给前端返回一个 JSON 数据即可，告诉前端登录成功还是登录失败，前端收到消息之后自行处理。像这样的需求，我们可以通过自定义 `AuthenticationSuccessHandler` 的实现类来完成：

```java
public class MyAuthenticationSuccessHandler implements AuthenticationSuccessHandler{
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, 
		HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
			response.setContentType("application/json;charset=utf-8");
			Map<String, Object> resp = new HashMap<>();
			resp.put("status", 200);
			resp.put("msg", "登录成功!");
			ObjectMapper om = new ObjectMapper();
			String s = om.writeValueAsString(resp);
			response.getWriter().write(s);
	 } 
 }
```
在自定义的 MyAuthenticationSuccessHandler 中，重写 `onAuthenticationSuccess` 方法，在该方法中，通过 HttpServletResponse 对象返回一段登录成功的 JSON 字符串给前端即可。最后，在 SecurityConfig 中配置自定义的 MyAuthenticationSuccessHandler，代码如下：

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login.html")
                .loginProcessingUrl("/doLogin")
                .successHandler(new MyAuthenticationSuccessHandler())
                .failureUrl("/login.html")
                .usernameParameter("uname")
                .passwordParameter("passwd")
                .permitAll()
                .and()
                .csrf().disable();
    }
}
```

配置完成后，重启项目。此时，当用户成功登录之后，就不会进行页面跳转了，而是返回一段 JSON 字符串。


#### 登录失败

接下来来看登录失败的处理逻辑。为了方便在前端页面展示登录失败的异常信息，我们首先在项目的 `pom.xml` 文件中引入 `thymeleaf` 依赖，代码如下：
```xml
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```
然后在 `resources/templates` 目录下新建 `mylogin.html`，代码如下：

```html
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
	<head>
		<meta charset="UTF-8">
		<title>登录</title>
		<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min. css" rel="stylesheet"
			id="bootstrap-css">
		<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js">
		</script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">
		</script>
	</head>
	<style>
		#login .container #login-row #login-column #login-box {
			border: 1px solid #9C9C9C;
			background-color: #EAEAEA;
		}
	</style>
	<body>
		<div id="login">
			<div class="container">
				<div id="login-row" class="row justify-content-center align-items-center">
					<div id="login-column" class="col-md-6">
						<div id="login-box" class="col-md-12">
							<form id="login-form" class="form" action="/doLogin" method="post">
								<h3 class="text-center text-info">登录</h3>
								<div th:text="${SPRING_SECURITY_LAST_EXCEPTION}">
								</div>
								<div class="form-group">
									<label for="username" class="text-info">用户名:</label><br>
									<input type="text" name="uname" id="username" class="form-control">
								</div>
								<div class="form-group">
									<label for="password" class="text-info">密码:</label><br>
									<input type="text" name="passwd" id="password" class="form-control">
								</div>
								<div class="form-group">
									<input type="submit" name="submit" class="btn btn-info btn-md" value="登录">
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
```
mylogin.html 和前面的 login.html 基本类似，前面的 login.html 是静态页面，这里的 mylogin.html 是 thymeleaf 模板页面，mylogin.html 页面在 form 中多了一个 div，用来展示登录失败时候的异常信息，登录失败的异常信息会放在 request 中返回到前端，开发者可以将其直接提取出来展示。

既然 mylogin.html 是动态页面，就不能像静态页面那样直接访问了，需要我们给 mylogin.html 页面提供一个访问控制器：

```java
@Controller
public class MyLoginController {
    @RequestMapping("/mylogin.html")
    public String mylogin() {
        return "mylogin";
    }
}
```
最后再在 SecurityConfig 中配置登录页面，代码如下：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/mylogin.html")
                .loginProcessingUrl("/doLogin")
                .defaultSuccessUrl("/hello")
                .failureUrl("/mylogin.html")
                .usernameParameter("uname")
                .passwordParameter("passwd")
                .permitAll()
                .and()
                .csrf().disable();
    }

}
```
`failureUrl` 表示登录失败后重定向到 `mylogin.html` 页面。重定向是一种客户端跳转，重定向不方便携带请求失败的异常信息（只能放在 URL 中）。

如果希望能够在前端展示请求失败的异常信息，可以使用下面这种方式：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/mylogin.html")
                .loginProcessingUrl("/doLogin")
                .defaultSuccessUrl("/hello")
                .failureForwardUrl("/mylogin.html")
                .usernameParameter("uname")
                .passwordParameter("passwd")
                .permitAll()
                .and()
                .csrf().disable();
    }

}
```
`failureForwardUrl` 方法从名字上就可以看出，这种跳转是一种服务器端跳转，服务器端跳转的好处是可以携带登录异常信息。如果登录失败，自动跳转回登录页面后，就可以将错误信息展示出来，如图 2-8 所示。

![faillogin](/blogImg/springsecurity/faillogin.jpg)

无论是 `failureUrl` 还是 `failureForwardUrl`，最终所配置的都是 `AuthenticationFailureHandler` 接口的实现。Spring Security 中提供了 `AuthenticationFailureHandler` 接口，用来规范登录失败的实现：

`AuthenticationFailureHandler` 接口中只有一个 `onAuthenticationFailure` 方法，用来处理登录失败请求，request 和 response 参数很好理解，最后的 `exception` 则表示登录失败的异常信息。Spring Security 中为 `AuthenticationFailureHandler` 一共提供了五个实现类，如下图。

![FailureHandler](/blogImg/springsecurity/FailureHandler.jpg)

1. SimpleUrlAuthenticationFailureHandler 默认的处理逻辑就是通过重定向跳转到登录页面，当然也可以通过配置 forwardToDestination 属性将重定向改为服务器端跳转，failureUrl 方法的底层实现逻辑就是 SimpleUrlAuthenticationFailureHandler。 
2. ExceptionMappingAuthenticationFailureHandler 可以实现根据不同的异常类型，映射到不同的路径。
3. ForwardAuthenticationFailureHandler 表示通过服务器端跳转来重新回到登录页面，failureForwardUrl 方法的底层实现逻辑就是 ForwardAuthenticationFailureHandler。 
4. AuthenticationEntryPointFailureHandler 是 Spring Security 5.2 新引进的处理类，可以通过 AuthenticationEntryPoint 来处理登录异常。
5. DelegatingAuthenticationFailureHandler 可以实现为不同的异常类型配置不同的登录失败处理回调

这里举一个简单的例子。假如不使用 `failureForwardUrl` 方法，同时又想在登录失败后通过服务器端跳转回到登录页面，那么可以自定义 `SimpleUrlAuthenticationFailureHandler` 配置，并将 `forwardToDestination` 属性设置为 true，代码如下： 
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/mylogin.html")
                .loginProcessingUrl("/doLogin")
                .defaultSuccessUrl("/hello")
                .failureHandler(failureHandler())
                .usernameParameter("uname")
                .passwordParameter("passwd")
                .permitAll()
                .and()
                .csrf().disable();
    }

    SimpleUrlAuthenticationFailureHandler failureHandler(){
        SimpleUrlAuthenticationFailureHandler handler = new SimpleUrlAuthenticationFailureHandler("mylogin.html");
        handler.setUseForward(true);
        return handler;
    }

}
```

这样配置之后，如果用户再次登录失败，就会通过服务端跳转重新回到登录页面，登录页面也会展示相应的错误信息，效果和 failureForwardUrl 一致。

SimpleUrlAuthenticationFailureHandler 的源码也很简单，我们一起来看一下实现逻辑（源码比较长，这里列出来核心部分）：
```java
public class SimpleUrlAuthenticationFailureHandler implements
		AuthenticationFailureHandler {
	protected final Log logger = LogFactory.getLog(getClass());

	private String defaultFailureUrl;
	private boolean forwardToDestination = false;
	private boolean allowSessionCreation = true;
	private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

	public SimpleUrlAuthenticationFailureHandler() {
	}

	public SimpleUrlAuthenticationFailureHandler(String defaultFailureUrl) {
		setDefaultFailureUrl(defaultFailureUrl);
	}
	public void onAuthenticationFailure(HttpServletRequest request,
			HttpServletResponse response, AuthenticationException exception)
			throws IOException, ServletException {

		if (defaultFailureUrl == null) {
			logger.debug("No failure URL set, sending 401 Unauthorized error");

			response.sendError(HttpStatus.UNAUTHORIZED.value(),
				HttpStatus.UNAUTHORIZED.getReasonPhrase());
		}
		else {
			saveException(request, exception);

			if (forwardToDestination) {
				logger.debug("Forwarding to " + defaultFailureUrl);

				request.getRequestDispatcher(defaultFailureUrl)
						.forward(request, response);
			}
			else {
				logger.debug("Redirecting to " + defaultFailureUrl);
				redirectStrategy.sendRedirect(request, response, defaultFailureUrl);
			}
		}
	}
	protected final void saveException(HttpServletRequest request,
			AuthenticationException exception) {
		if (forwardToDestination) {
			request.setAttribute(WebAttributes.AUTHENTICATION_EXCEPTION, exception);
		}
		else {
			HttpSession session = request.getSession(false);

			if (session != null || allowSessionCreation) {
				request.getSession().setAttribute(WebAttributes.AUTHENTICATION_EXCEPTION,
						exception);
			}
		}
	}

	public void setUseForward(boolean forwardToDestination) {
		this.forwardToDestination = forwardToDestination;
	}

```

从这段源码中可以看到，当用户构造 SimpleUrlAuthenticationFailureHandler 对象的时候，就传入了 defaultFailureUrl，也就是登录失败时要跳转的地址。在 onAuthenticationFailure 方法中，如果发现 defaultFailureUrl 为 null，则直接通过 response 返回异常信息，否则调用 saveException 方法。在 saveException 方法中，如果 forwardToDestination 属性设置为 true，表示通过服务器端跳转回到登录页面，此时就把异常信息放到 request 中 。 再回到 onAuthenticationFailure 方法中，如果用户设置了 forwardToDestination 为 true，就通过服务器端跳转回到登录页面，否则通过重定向回到登录页面。

如果是前后端分离开发，登录失败时就不需要页面跳转了，只需要返回 JSON 字符串给前端即可，此时可以通过自定义 AuthenticationFailureHandler 的实现类来完成，代码如下：

```java
public class MyAuthenticationFailureHandler implements AuthenticationFailureHandler {
	@Override
	public void onAuthenticationFailure(HttpServletRequest request,HttpServletResponse response,AuthenticationException exception) throws IOException, ServletException {
		response.setContentType("application/json;charset=utf-8");
		Map<String, Object> resp = new HashMap<>();
		resp.put("status", 500);
		resp.put("msg", "登录失败!" + exception.getMessage());
		ObjectMapper om = new ObjectMapper();
		String s = om.writeValueAsString(resp);
		response.getWriter().write(s);
	}
}
```
然后在 SecurityConfig 中进行配置即可：

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
					.anyRequest().authenticated()
					.and()
					.formLogin()
					.loginPage("/mylogin.html")
					.loginProcessingUrl("/doLogin")
					.defaultSuccessUrl("/index.html")
					.failureHandler(new MyAuthenticationFailureHandler())
					.usernameParameter("uname")
					.passwordParameter("passwd")
					.permitAll()
					.and()
					.csrf().disable();
		} 
 }
```
配置完成后，当用户再次登录失败，就不会进行页面跳转了，而是直接返回 JSON 字符串，如图 2-10 所示。

![handler](/blogImg/springsecurity/handler.jpg)


#### 注销登录

Spring Security 中提供了默认的注销页面，当然开发者也可以根据自己的需求对注销登录进行定制。

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
					.anyRequest().authenticated()
					.and()
					.formLogin()
					//省略其他配置
					.and()
					.logout()
					.logoutUrl("/logout")
					.invalidateHttpSession(true)
					.clearAuthentication(true)
					.logoutSuccessUrl("/mylogin.html")
					.and()
					.csrf().disable();
		} 
 }
```

1. 通过.logout()方法开启注销登录配置。
2. logoutUrl 指定了注销登录请求地址，默认是 GET 请求，路径为/logout。 
3. invalidateHttpSession 表示是否使 session 失效，默认为 true。 
4. clearAuthentication 表示是否清除认证信息，默认为 true。 
5. logoutSuccessUrl 表示注销登录后的跳转地址。

配置完成后，再次启动项目，登录成功后，在浏览器中输入 http://localhost:8080/logout 就可以发起注销登录请求了。注销成功后，会自动跳转到 mylogin.html 页面。

如果项目有需要，开发者也可以配置多个注销登录的请求，同时还可以指定请求的方法：

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                //省略其他配置
                .and()
                .logout()
                .logoutRequestMatcher(new OrRequestMatcher(new AntPathRequestMatcher("/logout1", "GET"),
                                        new AntPathRequestMatcher("/logout2", "POST")))
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .logoutSuccessUrl("/mylogin.html")
                .and()
                .csrf().disable();
    } 
}
```

上面这个配置表示注销请求路径有两个：

* 第一个是/logout1，请求方法是 GET。 
* 第二个是/logout2，请求方法是 POST。

使用任意一个请求都可以完成登录注销。

如果项目是前后端分离的架构，注销成功后就不需要页面跳转了，只需将注销成功的信息返回给前端即可，此时我们可以自定义返回内容：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                //省略其他配置
                .and()
                .logout()
                .logoutRequestMatcher(new OrRequestMatcher(
                        new AntPathRequestMatcher("/logout1", "GET"),
                        new AntPathRequestMatcher("/logout2", "POST")))
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .logoutSuccessHandler((req,resp,auth)->{
                    resp.setContentType("application/json;charset=utf-8");
                    Map<String, Object> result = new HashMap<>();
                    result.put("status", 200);
                    result.put("msg", "注销成功!");
                    ObjectMapper om = new ObjectMapper();
                    String s = om.writeValueAsString(result);
                    resp.getWriter().write(s);
                })
                .and()
                .csrf().disable();
    } 
}
```
配置 logoutSuccessHandler 和 logoutSuccessUrl 类似于前面所介绍的 successHandler 和defaultSuccessUrl 之间的关系，只是类不同而已，因此这里不再赘述，读者可以按照我们前面的分析思路自行分析。

配置完成后，重启项目，登录成功后再去注销登录，无论是使用/logout1 还是/logout2 进行注销，只要注销成功后，就会返回一段 JSON 字符串。

如果开发者希望为不同的注销地址返回不同的结果，也是可以的，配置如下：
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                //省略其他配置
                .and()
                .logout()
                .logoutRequestMatcher(new OrRequestMatcher(
                        new AntPathRequestMatcher("/logout1", "GET"),
                        new AntPathRequestMatcher("/logout2", "POST")))
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .defaultLogoutSuccessHandlerFor((req,resp,auth)->{
                    resp.setContentType("application/json;charset=utf-8");
                    Map<String, Object> result = new HashMap<>();
                    result.put("status", 200);
                    result.put("msg", "使用 logout1 注销成功!");
                    ObjectMapper om = new ObjectMapper();
                    String s = om.writeValueAsString(result);
                    resp.getWriter().write(s);
                },new AntPathRequestMatcher("/logout1","GET"))
                .defaultLogoutSuccessHandlerFor((req,resp,auth)->{
                    resp.setContentType("application/json;charset=utf-8");
                    Map<String, Object> result = new HashMap<>();
                    result.put("status", 200);
                    result.put("msg", "使用 logout2 注销成功!");
                    ObjectMapper om = new ObjectMapper();
                    String s = om.writeValueAsString(result);
                    resp.getWriter().write(s);
                },new AntPathRequestMatcher("/logout2","POST"))
                .and()
                .csrf().disable();
    } 
}
```
通过 defaultLogoutSuccessHandlerFor 方法可以注册多个不同的注销成功回调函数，该方法第一个参数是注销成功回调，第二个参数则是具体的注销请求。当用户注销成功后，使用了哪个注销请求，就给出对应的响应信息。

### 登录用户数据获取

登录成功后，在后续的业务逻辑中，开发者可能还需要获取登录成功的用户对象，如果不使用任何安全管理框架，那么可以将用户信息保存在 HttpSession 中，以后需要的时候直接从 HttpSession 中获取数据。在 Spring Security 中，用户登录信息本质上还是保存在 HttpSession 中，但是为了方便使用 Spring Security 对 HttpSession 中的用户信息进行了封装，封装之后，开发者若再想获取用户登录数据就会有两种不同的思路：

1. 从 `SecurityContextHolder` 中获取
2. 从当前请求对象中获取

这里列出来的两种方式是主流的做法，开发者也可以使用一些非主流的方式获取登录成功后的用户信息，例如直接从 HttpSession 中获取用户登录数据。

无论是那种获取方式，都离不开一个对象：`Authentication`。在 Spring Security 中，Authentication 对象主要有两方面的功能：

1. 作为 `AuthenticationManager` 的输入参数，提供用户身份认证的凭证，当它作为一个输入参数时，他的 `isAuthentication` 方法返回 `false`，表示用户还未认证。
2. 代表已经经过身份认证的用户，此时的 `Authentication` 可以从 `SecurityContext` 中获取。

一个 `Authentication` 对象包含三个方面的信息：

1. principal：定义认证的用户。如果用户使用 `用户名/密码` 的方式登录，principal 通常就是一个 `UserDetails` 对象。
2. credentials：登录凭证，一般就是密码。当用户登录成功之后，登录凭证会被自动擦除，以防止泄露。
3. authorities：用户被授予的权限信息。

java 本身提供了 `Principal` 接口用来描述认证主体，`Principal` 可以代表一个公司、个人或者登录 ID。Spring Security 中定义了 `Authentication` 接口用来规范登录用户信息，`Authentication` 继承自 `Principal`。

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
这里接口中定义的方法都很好理解：
* getAuthorities 方法：用来获取用户权限
* getCredentials 方法：用来获取用户凭证，一般来说就是密码。
* getDetails 方法：用来获取用户的详细信息，可能是当前的请求之类
* getPrincipal 方法：用来获取当前用户信息，可能是一个用户名，也可能是一个用户对象
* isAuthenticated 方法：当前用户是否认证成功

可以看到，在 Spring Security 中，只要获取到 `Authentication` 对象，就可以获取到登录用户的详细信息。

不同的认证方式对应不同的 `Authentication` 实例，Spring Security 中的 `Authentication` 实现类如图 2-11 所示。

![AbstractAuthenticationToken](/blogImg/springsecurity/AbstractAuthenticationToken.jpg)

1. AbstractAuthenticationToken：该类实现了 `Authentication` 和 `CredentialsContainer` 两个接口，在 `AbstractAuthenticationToken` 中对 `Authentication` 接口定义的各个数据获取方法进行了实现 `CredentialsContainer` 则提供了登录凭证擦除方法。
2. RememberMeAuthenticationToken：如果用户使用 `RememberMe` 的方式登录，登录信息将封装在 `RememberMeAuthenticationToken` 中。
3. TestingAuthenticationToken：单元测试时封装对象。
4. AnonymousAuthenticationToken：匿名登录时封装的用户对象
5. RunAsUserToken：替换验证身份时封装的用户对象
6. UsernamePasswordAuthenticationToken：表单登录时封装的用户对象
7. JaasAuthenticationToken：JAAS 认证时封装的用户对象
8. PreAuthenticatedAuthenticationToken：Pre-Authentication 场景下封装的用户对象。

在这些 Authentication 的实例中，最常见的有两个：`UsernamePasswordAuthenticationToken` 和 `RememberMeAuthenticationToken`。在[快速入门](./Authentication.html#快速入门) 案例对应的用户认证对象就是 `UsernamePasswordAuthenticationToken`。

了解了 Authentication 对象之后，接下来我们来看一下如何在登录成功后获取用户登录信息，即 Authentication 对象。

#### 从 SecurityContextHolder 中获取

我们在 [登录表单配置](./Authentication.html#登录表单配置) 案例的基础上，在添加一个 UserController，内容如下：

```java
@RestController
public class UserController {
    @GetMapping("/user")
    public void userInfo() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String name = authentication.getName();
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        System.out.println("name = " + name);
        System.out.println("authorities = " + authorities);
    }
}
```
配置完成后，启动项目，登陆成功后，访问 `/user` 接口，控制台就会打印出登录用户信息，我们目前没有给用户配置角色，所以默认的用户角色为空数组，如图 2-12 所示

![2-12](/blogImg/springsecurity/2-12.jpg)

这里为了演示方便，我们在 Conroller 中获取登录用户信息，可以发现，`SecurityContextHolder.getContext()` 是一个静态方法，也就意味着我们随时随地都可以获取到登录用户信息，在 service 层也可以获取到登录用户信息（在实际项目中，大部分情况下也都是在 service 层获取登录用户信息）。

##### SecurityContextHolder

`SecurityContextHolder` 中存储的是 `SecurityContext`，`SecurityContext` 中存储的则是 `Authentication`，三者的关系如图 2-13 所示。

![2-13](/blogImg/springsecurity/2-13.jpg)

这幅图清晰地描述了 SecurityContextHolder、SecurityContext 以及 Authentication 三者之间的关系。

首先在 SecurityContextHolder 中存放的是 SecurityContext，SecurityContextHolder 中定义了三种不同的数据存储策略，这实际上是一种典型的策略模式：

1. MODE_THREADLOCAL：这种策略是将 SecurityContext 存放在 ThreadLocal 中，ThreadLocal 的特点是在哪个线程中存储就要在哪个线程中读取，这其实非常适合 Web 应用，因为在默认情况下，一个请求无论经过多少 Filter 到达 Servlet，都是由一个线程来处理的。这也是 SecurityContextHolder 的默认存储策略，这种存储策略意味着如果在具体的业务代码中，开启了子线程，在子线程中去获取登陆用户数据，就会获取不到。
2. MODE_INHERITABLETHREADLOCAL：这种存储模式适用于多线程环境，如果希望在子线程中也能够获取到登录用户数据，那么可以使用这种存储模式。
3. MODE_GLOBAL：这种存储模式实际上是将数据保存在一个静态变量中，在 JavaWEB 开发中，这种模式很少使用到。

Spring Security 中定义了 `SecurityContextHolderStrategy` 接口用来规范存储策略中的方法，我们来看一下：

```java
public interface SecurityContextHolderStrategy {

	void clearContext();
	SecurityContext getContext();
	void setContext(SecurityContext context);
	SecurityContext createEmptyContext();

}
```

接口中一共定义了四个方法：

1. clearContext：该方法用来清除存储的 `SecurityContext` 对象。
2. getContext：该方法用来获取存储的 `SecurityContext` 对象。
3. setContext：改方法用来设置存储的 `SecurityContext` 对象。
4. createEmptyContext：该方法则用来创建一个空的 `SecurityContext` 对象。

在 Spring Security 中，`SecurityContextHolderStrategy` 接口一共有三个实现类，对应了三种不同的存储策略，如图 2-14 所示

![2-14](/blogImg/springsecurity/2-14.jpg)

每一种实现类都对应了不同的实现策略，我们先来看一下 `ThreadLocalSecurityContextHolderStrategy`：

```java
final class ThreadLocalSecurityContextHolderStrategy implements
		SecurityContextHolderStrategy {

	private static final ThreadLocal<SecurityContext> contextHolder = new ThreadLocal<>();

	public void clearContext() {
		contextHolder.remove();
	}

	public SecurityContext getContext() {
		SecurityContext ctx = contextHolder.get();

		if (ctx == null) {
			ctx = createEmptyContext();
			contextHolder.set(ctx);
		}

		return ctx;
	}

	public void setContext(SecurityContext context) {
		Assert.notNull(context, "Only non-null SecurityContext instances are permitted");
		contextHolder.set(context);
	}

	public SecurityContext createEmptyContext() {
		return new SecurityContextImpl();
	}
}
```

`ThreadLocalSecurityContextHolderStrategy` 实现了 `SecurityContextHolderStrategy` 接口，并实现了接口中的方法，存储数据的载体就是一个 `ThreadLocal`，所以针对 `SecurityContext` 的清空、获取以及存储，都是在 ThreadLocal 中进行操作，例如清空就是调用 ThreadLocal 的 remove 方法。SecurityContext 是一个接口，它只有一个实现类 `SecurityContextImpl`，所以创建就直接创建一个 SecurityContextImpl 对象即可。

再来看 `InheritableThreadLocalSecurityContextHolderStrategy`：

```java
final class InheritableThreadLocalSecurityContextHolderStrategy implements
		SecurityContextHolderStrategy {

	private static final ThreadLocal<SecurityContext> contextHolder = new InheritableThreadLocal<>();

	public void clearContext() {
		contextHolder.remove();
	}

	public SecurityContext getContext() {
		SecurityContext ctx = contextHolder.get();

		if (ctx == null) {
			ctx = createEmptyContext();
			contextHolder.set(ctx);
		}

		return ctx;
	}

	public void setContext(SecurityContext context) {
		Assert.notNull(context, "Only non-null SecurityContext instances are permitted");
		contextHolder.set(context);
	}

	public SecurityContext createEmptyContext() {
		return new SecurityContextImpl();
	}
}
```
`InheritableThreadLocalSecurityContextHolderStrategy`和`ThreadLocalSecurityContextHolderStrategy` 的实现策略基本一致，不同的是存储数据的载体变了，在 `InheritableThreadLocalSecurityContextHolderStrategy` 中存储数据的载体变成了 `InheritableThreadLocal`。`InheritableThreadLocal` 继承自 `ThreadLocal`，但是多了一个特性，就是在子线程创建的一瞬间，会自动将父线程中的数据复制到子线程中。该存储策略正式利用了这一特性，实现了在子线程中获取登录用户信息的功能。

最后再来看一下 `GlobalSecurityContextHolderStrategy`：

```java
final class GlobalSecurityContextHolderStrategy implements SecurityContextHolderStrategy {

	private static SecurityContext contextHolder;

	public void clearContext() {
		contextHolder = null;
	}

	public SecurityContext getContext() {
		if (contextHolder == null) {
			contextHolder = new SecurityContextImpl();
		}

		return contextHolder;
	}

	public void setContext(SecurityContext context) {
		Assert.notNull(context, "Only non-null SecurityContext instances are permitted");
		contextHolder = context;
	}

	public SecurityContext createEmptyContext() {
		return new SecurityContextImpl();
	}
}
```
`GlobalSecurityContextHolderStrategy` 的实现就更简单了，用一个静态变量来保存 `SecurityContext`，所以它也可以在多线程环境下使用。但是一般在 Web 开发中，这种存储策略使用得较少。

最后在看一下 SecurityContextHolder 的源码：

```java
public class SecurityContextHolder {
	
	public static final String MODE_THREADLOCAL = "MODE_THREADLOCAL";
	public static final String MODE_INHERITABLETHREADLOCAL = "MODE_INHERITABLETHREADLOCAL";
	public static final String MODE_GLOBAL = "MODE_GLOBAL";
	public static final String SYSTEM_PROPERTY = "spring.security.strategy";
	private static String strategyName = System.getProperty(SYSTEM_PROPERTY);
	private static SecurityContextHolderStrategy strategy;
	private static int initializeCount = 0;

	static {
		initialize();
	}

	public static void clearContext() {
		strategy.clearContext();
	}

	
	public static SecurityContext getContext() {
		return strategy.getContext();
	}

	
	public static int getInitializeCount() {
		return initializeCount;
	}

	private static void initialize() {
		if (!StringUtils.hasText(strategyName)) {
			// Set default
			strategyName = MODE_THREADLOCAL;
		}

		if (strategyName.equals(MODE_THREADLOCAL)) {
			strategy = new ThreadLocalSecurityContextHolderStrategy();
		}
		else if (strategyName.equals(MODE_INHERITABLETHREADLOCAL)) {
			strategy = new InheritableThreadLocalSecurityContextHolderStrategy();
		}
		else if (strategyName.equals(MODE_GLOBAL)) {
			strategy = new GlobalSecurityContextHolderStrategy();
		}
		else {
			// Try to load a custom strategy
			try {
				Class<?> clazz = Class.forName(strategyName);
				Constructor<?> customStrategy = clazz.getConstructor();
				strategy = (SecurityContextHolderStrategy) customStrategy.newInstance();
			}
			catch (Exception ex) {
				ReflectionUtils.handleReflectionException(ex);
			}
		}

		initializeCount++;
	}

	public static void setContext(SecurityContext context) {
		strategy.setContext(context);
	}


	public static void setStrategyName(String strategyName) {
		SecurityContextHolder.strategyName = strategyName;
		initialize();
	}

	
	public static SecurityContextHolderStrategy getContextHolderStrategy() {
		return strategy;
	}

	public static SecurityContext createEmptyContext() {
		return strategy.createEmptyContext();
	}

	@Override
	public String toString() {
		return "SecurityContextHolder[strategy='" + strategyName + "'; initializeCount="
				+ initializeCount + "]";
	}
}
```

从这段代码中可以看到，SecurityContextHolder 定义了三个静态常量用来描述三种不同的存储策略；存储策略 `strategy` 会在静态代码块中进行初始化，根据不同的 `strategyName` 初始化不同的存储策略；`strategyName` 变量表示目前正在使用的存储策略，开发者可以通过配置系统变量或者调用 `setStrategyName` 来修改 SecurityContextHolder 中的存储策略，调用 `setStrategyName` 后会重新初始化 `strategy`。

默认情况下，如果开发者视图从子进程中获取当前登录用户数据，就会获取失败，代码如下：

```java
@RestController
public class HelloController {

    @GetMapping("/user")
    public void userInfo() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();
        String name = authentication.getName();
        Collection<? extends GrantedAuthority> authorities =
                authentication.getAuthorities();
        System.out.println("name = " + name);
        System.out.println("authorities = " + authorities);
        new Thread(new Runnable() {
            @Override
            public void run() {
                Authentication authentication =
                        SecurityContextHolder.getContext().getAuthentication();
                if (authentication == null) {
                    System.out.println("获取用户信息失败");
                    return;
                }
                String name = authentication.getName();
                Collection<? extends GrantedAuthority> authorities =
                        authentication.getAuthorities();
                String threadName = Thread.currentThread().getName();
                System.out.println(threadName + ":name = " + name);
                System.out.println(threadName + ":authorities = " + authorities);
            }
        }).start();
    }
}
```

在子线程中尝试获取登录用户数据时，获取到的数据为 null，如图 2-15 所示。

![2-15](/blogImg/springsecurity/2-15.jpg)

子线程之所以获取不到登录用户信息，就是因为数据存储在 `ThreadLocal` 中，存储和读取不是同一个线程，所以获取不到。如果希望子线程也能获取到登录用户信息，可以将 `SecurityContextHolder` 中存储策略改为 `MODE_INHERITABLETHREADLOCAL`，这样就支持多线程 环境下获取登录用户信息了。

默认的存储策略是通过 System.getProperty 加载的，因此我们可以通过配置系统变量来修改默认的存储策略，以 IntelliJ IDEA 为例，首先点击启动按钮，选择 Edit Configurations 按钮，如图 2-16 所示，然后在打开的选项中，配置 VM options 参数，添加如下一行，配置界面按钮如图 2-17 所示。

```properties
-Dspring.security.strategy=MODE_INHERITABLETHREADLOCAL
```
![2-16](/blogImg/springsecurity/2-16.jpg)

![2-17](/blogImg/springsecurity/2-17.jpg)

这样，在 `SecurityContextHolder` 中通过 `System.getProperty` 加载到默认的存储策略就支持多线程了。

配置完成之后，再次启动项目，此时访问 `/user` 接口，即使在子线程中，也可以获取登录用户信息了。

![2-18](/blogImg/springsecurity/2-18.jpg)

既然 `SecurityContextHolder` 默认是将用户信息存储在 `ThreadLocal` 中，在 Spring Boot 中不同的请求都是不同的线程处理的，那为什么每一次请求都还能从 SecurityContextHolder 中获取到登录用户信息呢？这就不得不提到 Spring Security 过滤器链中重要的一环————`SecurityContextPersistenceFilter`。

默认情况下，在 SpringSecurity 过滤器链中，`SecurityContextPersistenceFilter` 是第二道防线，位于`WebAsyncManagerIntegrationFilter` 之后。从 `SecurityContextPersistenceFilter` 这个过滤器的名字上就可以推断出出来，它的作用是为了存储 `SecurityContext` 而设计的。

整体上来说，`SecurityContextPersistenceFilter` 主要做两件事：

1. 当一个请求来到时，从 `HttpSession` 中获取 `SecurityContext` 并存入 `SecurityContextHolder` 中，这样同一个请求在后续处理过程中，开发者始终可以通过 `SecurityContextHolder` 获取到当前登录用户信息。
2. 当一个请求处理完毕时，从 `SecurityContextHolder` 中获取 `SecurityContext` 并存入 `HttpSession`(主要针对异步Servlet) 中，方便下一个请求到来时，再从 HttpSession 中拿出来使用，同时擦除 `SecurityContextHolder` 中的登录用户信息。

::: tip 注意

在 SecurityContextPersistenceFilter 过滤器中，当一个请求处理完毕时，从SecurityContextHolder 中获取 SecurityContext 存入 HttpSession 中，这一步的操作主要是针对异步 Servlet。如果不是异步 Servlet，在响应提交时，就会将 SecurityContext 保存到 HttpSession 中了，而不会等到在 SecurityContextPersistenceFilter 过滤器中再去存储

:::

这就是 `SecurityContextPersistenceFilter` 大致上做的事情，在正式开始介绍 SecurityContextPersistenceFilter 之前，需要先介绍另外一个接口，这就是 `SecurityContextRepository` 接口。

将 `SecurityContext` 存入 `HttpSession`，或者从 `HttpSession` 中加载数据并转为 `SecurityContext` 对象，这些事情都是由 `SecurityContextRepository` 接口的实现类完成的，因此这里我们就先从 `SecurityContextRepository` 接口开始看起。

首先我们来看一下 SecurityContextRepository 接口的定义：

```java
public interface SecurityContextRepository {

	SecurityContext loadContext(HttpRequestResponseHolder requestResponseHolder);

	void saveContext(SecurityContext context, HttpServletRequest request, HttpServletResponse response);

	boolean containsContext(HttpServletRequest request);

}
```
`SecurityContextRepository` 接口中一共定义了三个方法：

1. loadContext：这个方法用来加载 `SecurityContext` 对象出来，对于没有登录的用户，这里会返回一个空的 `SecurityContext` 对象，注意空的 `SecurityContext` 对象是指 `SecurityContext` 中不存在 `Authentication` 对象，而不是该方法返回 null.
2. saveContext：该方法用来保存一个 SecurityContext 对象。
3. containsContex：该方法可以判断 SecurityContext 对象是否存在。

在 SpringSecurity 框架中，为 `SecurityContextRepository` 接口一共提供了三个实现类，如图 2-19 所示。

![2-19](/blogImg/springsecurity/2-19.jpg)

在这三个实现类中，`TestSecurityContextRepository` 为单元测试提供支持；NullSecurityContextRepository 实现类中，loadContext 方法总是返回一个空的 SecurityContext 对象，saveContext 方 法未做任何实现， containsContext 方 法 总 是 返 回 false ， 所 以 NullSecurityContextRepository 实现类实际上未做 SecurityContext 的存储工作。

在 Spring Security 中默认使用的实现类是 HttpSessionSecurityContextRepository，通过 HttpSessionSecurityContextRepository 实现了将 SecurityContext 存储到 HttpSession 以及从 HttpSession 中加载 SecurityContext 出来。这里我们来重点看一下 HttpSessionSecurityContextRepository 类。

没写完


#### 从当前请求对象中获取

接下来我们来看一下登录数据获取方式 —— 从当前请求中获取。代码如下：

```java
@RequestMapping("/authentication")
public void authentication(Authentication authentication) {
 	System.out.println("authentication = " + authentication);
}
@RequestMapping("/principal")
public void principal(Principal principal) {
 	System.out.println("principal = " + principal);
}
```

开发者可以直接在 `Controller` 的请求参数中放入 `Authentication` 对象来获取登录用户信息。通过前面的讲解，大家已经知道 Authentication 是 Principal 的子类，所以也可以直接在请求参
数中放入 Principal 来接收当前登录用户信息。需要注意的是，即使参数是 Principal，真正的实例依然是 Authentication 的实例。

Controller 中方法的参数都是当前请求 HttpServletRequest 带来的。毫无疑问，前面的 Authentication 和 Principal 参数也都是 HttpServletRequest 带来的，那么这些数据到底是何时放入 HttpServletRequest 的呢？又是以何种形式存在的呢？接下来我们一起分析一下。

在 Servlet 规范中，最早有三个和安全管理相关的方法：

```java
public String getRemoteUser();
public boolean isUserInRole(String role);
public java.security.Principal getUserPrincipal();
```
1. getRemoteUser：获取登录用户名
2. isUserInRole：判断当前登录用户是否具备一个指定的角色
3. getUserPrincipal：获取当前认证主体。

从 Servlet 3.0 开始，在这三个方法的基础之上，又增加了三个和安全管理相关的方法：

```java
public boolean authenticate(HttpServletResponse response)
 throws IOException, ServletException;
public void login(String username, String password) throws ServletException;
public void logout() throws ServletException;
```

1. authenticate：判断当前请求是否成功。
2. login：执行登录操作
3. logout：执行注销操作

不过 HttpServletRequest 只是一个接口，这些安全认证相关的方法，在不同环境下会有不同的实现。

如果是一个普通的 WEB 项目，不使用任何框架，HttpServletRequest 默认实现类是 Tomcat 中的 `RequestFacade`，从这个类的名字上就可以看出来，这是一个使用了 Facade 模式（外观模式）的类，真正提供底层服务的是 Tomcat 中的 Request 对象，只不过这个 Request 对象在实现 Servlet 规范的同时，还定义了很多 Tomcat 内部的方法，为了避免开发者直接调用到这些内部方法，这里使用了外观模式。

如果使用了 Spring Security 框架，那么我们在 Controller 参数中拿到的 HttpServletRequest 实例将是 `Servlet3SecurityContextHolderAwareRequestWrapper`，很显然，这是被 SpringSecurity 封装过的请求。

我们来看一下 `Servlet3SecurityContextHolderAwareRequestWrapper` 的继承关系，如图 2-21 所示。

![2-21](https://img.zxqs.top/20220825154447.png)

`SecurityContextHolderAwareRequestWrapper` 类主要实现了 `Servlet 3.0` 之前和安全管理相关的三个方法，也就是 `getRemoteUser()`、`isUserInRole(String)` 以及 `getUserPrincipal()`。Servlet 3.0 中新增的三个安全管理相关的方法， 则在 `Servlet3SecurityContextHolderAwareRequestWrapper` 类中实现。获取用户登录信息主要和前面三个方法有关，因此这里我们主要来看一下 `SecurityContextHolderAwareRequestWrapper` 类中相关方法的实现。

```java
public class SecurityContextHolderAwareRequestWrapper extends HttpServletRequestWrapper {

	private final AuthenticationTrustResolver trustResolver;

	private final String rolePrefix;


	public SecurityContextHolderAwareRequestWrapper(HttpServletRequest request,
			String rolePrefix) {
		this(request, new AuthenticationTrustResolverImpl(), rolePrefix);
	}

	public SecurityContextHolderAwareRequestWrapper(HttpServletRequest request,
			AuthenticationTrustResolver trustResolver, String rolePrefix) {
		super(request);
		Assert.notNull(trustResolver, "trustResolver cannot be null");
		this.rolePrefix = rolePrefix;
		this.trustResolver = trustResolver;
	}

	private Authentication getAuthentication() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();

		if (!trustResolver.isAnonymous(auth)) {
			return auth;
		}

		return null;
	}

	@Override
	public String getRemoteUser() {
		Authentication auth = getAuthentication();

		if ((auth == null) || (auth.getPrincipal() == null)) {
			return null;
		}

		if (auth.getPrincipal() instanceof UserDetails) {
			return ((UserDetails) auth.getPrincipal()).getUsername();
		}

		return auth.getPrincipal().toString();
	}

	@Override
	public Principal getUserPrincipal() {
		Authentication auth = getAuthentication();

		if ((auth == null) || (auth.getPrincipal() == null)) {
			return null;
		}

		return auth;
	}

	private boolean isGranted(String role) {
		Authentication auth = getAuthentication();

		if (rolePrefix != null && role != null && !role.startsWith(rolePrefix)) {
			role = rolePrefix + role;
		}

		if ((auth == null) || (auth.getPrincipal() == null)) {
			return false;
		}

		Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();

		if (authorities == null) {
			return false;
		}

		for (GrantedAuthority grantedAuthority : authorities) {
			if (role.equals(grantedAuthority.getAuthority())) {
				return true;
			}
		}

		return false;
	}

	@Override
	public boolean isUserInRole(String role) {
		return isGranted(role);
	}

	@Override
	public String toString() {
		return "SecurityContextHolderAwareRequestWrapper[ " + getRequest() + "]";
	}
```

1. getAuthentication：该方法用来获取当前登录对象 Authentication，获取方式就是前面讲的从 `SecurityContextHolder` 中获取。如果不是匿名对象就返回，否则就返回null。
2. getRemoteUser：该方法返回可当前登录用户的用户名；如果 Authentication 对象中存储的 Principal 是当前登录用户对象，则返回用户名；如果 Authentication 对象中存储的 Principal 是当前登录用户名（字符串），则直接返回即可。
3. getUserPrincipal：返回当前登录用户对象，其实就是 Authentication 的实例。
4. isGranted：该方法是一个私有方法，作用是判断当前登录用户是否具备某一个指定的角色。判断逻辑也很简单，先对传入进来的角色进行预处理，有点情况下可能需要添加 `ROLE_` 前缀，然后调用 `Authentication#getAuthorities`方法获取当前登录用户具备的所有角色，然后在和传进来的参数进行比较。
5. isUserInRole：该方法调用 isGranted 方法，进而实现判断当前用户是否具备某一个指定角色的功能。

在使用了 Spring Security 之后，我们通过 HttpServletRequest 就可以获取到很多当前登录用户信息了，代码如下：

```java
@RequestMapping("/info")
public void info(HttpServletRequest req) {
	String remoteUser = req.getRemoteUser();
	Authentication auth = ((Authentication) req.getUserPrincipal());
	boolean admin = req.isUserInRole("admin");
	System.out.println("remoteUser = " + remoteUser);
	System.out.println("auth.getName() = " + auth.getName());
	System.out.println("admin = " + admin);
}
```

打印结果如下：
```text
remoteUser = zxq
auth.getName() = zxq
admin = false
```
前面我们直接将 Authentication 或者 Principal 写到 Controller 参数中，实际上就是 SpringMVC 框架从 `Servlet3SecurityContextHolderAwareRequestWrapper` 中提取的用户信息。

那么 Spring Security 是如何将默认的请求对象转化为 `Servlet3SecurityContextHolderAwareRequestWrapper` 的呢？这就涉及 Spring Security 过滤器链中另外一个重要的过滤器——
`SecurityContextHolderAwareRequestFilter`。

该过滤器的主要作用就是对 HttpServletRequest 请求进行再包装，重写 HttpServletRequest 中和安全管理相关的方法。HttpServletRequest 在整个请求过程中会被包装多次，每一次的包装都会给它增添新的功能。

我们来看一下 `SecurityContextHolderAwareRequestFilter` 过滤器的源码：

```java
public class SecurityContextHolderAwareRequestFilter extends GenericFilterBean {

	private String rolePrefix = "ROLE_";

	private HttpServletRequestFactory requestFactory;

	private AuthenticationEntryPoint authenticationEntryPoint;

	private AuthenticationManager authenticationManager;

	private List<LogoutHandler> logoutHandlers;

	private AuthenticationTrustResolver trustResolver = new AuthenticationTrustResolverImpl();

	public void setRolePrefix(String rolePrefix) {
		Assert.notNull(rolePrefix, "Role prefix must not be null");
		this.rolePrefix = rolePrefix;
		updateFactory();
	}

	public void setAuthenticationEntryPoint(AuthenticationEntryPoint authenticationEntryPoint) {
		this.authenticationEntryPoint = authenticationEntryPoint;
	}

	public void setAuthenticationManager(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}


	public void setLogoutHandlers(List<LogoutHandler> logoutHandlers) {
		this.logoutHandlers = logoutHandlers;
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {
		chain.doFilter(this.requestFactory.create((HttpServletRequest) req, (HttpServletResponse) res), res);
	}

	@Override
	public void afterPropertiesSet() throws ServletException {
		super.afterPropertiesSet();
		updateFactory();
	}

	private void updateFactory() {
		String rolePrefix = this.rolePrefix;
		this.requestFactory = createServlet3Factory(rolePrefix);
	}

	public void setTrustResolver(AuthenticationTrustResolver trustResolver) {
		Assert.notNull(trustResolver, "trustResolver cannot be null");
		this.trustResolver = trustResolver;
		updateFactory();
	}

	private HttpServletRequestFactory createServlet3Factory(String rolePrefix) {
		HttpServlet3RequestFactory factory = new HttpServlet3RequestFactory(rolePrefix);
		factory.setTrustResolver(this.trustResolver);
		factory.setAuthenticationEntryPoint(this.authenticationEntryPoint);
		factory.setAuthenticationManager(this.authenticationManager);
		factory.setLogoutHandlers(this.logoutHandlers);
		return factory;
	}

}
```
从源码中可以看到，在 `SecurityContextHolderAwareRequestFilter#doFilter` 方法中，会调用 `requestFactory.create` 方法对请求重新进行包装。requestFactory 就是 `HttpServletRequestFactory` 接口的实例 `HttpServlet3RequestFactory`，它的 `create` 方法里边就直接创建一个 `Servlet3SecurityContextHolderAwareRequestWrapper` 实例。

对请求的 HttpServletRequest 包装之后，接下来在过滤器链中传递 HttpServletRequest 对象，它的 `getRemoteUser()`，`isUserInRole()` 以及 `getUserPrincipal()` 方法就可以直接使用了。

HttpServletRequest 中 `getUserPrincipal()` 方法有了返回值之后，最终在 Spring MVC 的 `ServletRequestMethodArgumentResolver#resolveArgument(Class<?>, HttpServletRequest)` 方法中进行默认参数解析，自动解析出 Principal 对象。开发者在 Controller 中既可以通过 Principal 来接收参数，也可以通过 Authentication 对象来接受。

### 用户定义

在前面的案例中，我们的登录用户是基于配置文件来配置的（本质是基于内存），但是在实际开发中，这种方式肯定是不可取的，在实际项目中，用户信息肯定要存入数据库之中。Spring Security 支持多种用户定义方式，接下来我们就逐个来看一下这些定义方式。自定义用户其实就是使用 `UserDetailsService` 的不同实现类来提供用户数据，同时将配置好的 `UserDetailsService` 配置给 `AuthenticationManagerBuilder`，系统再将 `UserDetailsService` 提供给 `AuthenticationProvider` 使用。

#### 基于内存

前面案例中用户的定义本质上还是基于内存，只是我们没有将 `InMemoryUserDetailsManager` 类明确抽出来自定义，现在我们通过自定义 `InMemoryUserDetailsManager` 来看一下基于内存的用户是如何自定义的。

重写 `WebSecurityConfigurerAdapter` 类的 `cinfigure(AuthenticationManagetBuilder)` 方法，内容如下：

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
        manager.createUser(User.withUsername("ysmc").password("{noop}123").roles("admin").build());
        manager.createUser(User.withUsername("zxq").password("{noop}123").roles("user").build());
        
        auth.userDetailsService(manager);
    }
}
```

首先构造一个 `InMemoryUserDetailsManager` 实例，调用该实例的 createUser 方法来创建用户对象，我们在这里分别设置了用户名、密码以及用户角色。需要注意的是，用户密码加了一个 {noop} 前缀，表示密码不加密（关于密码加密问题，以后介绍）。

配置完成后，启动项目，此时就可以使用这里配置的两个用户登录了。

`InMemoryUserDeatilsManager` 部分代码如下：

```java
public class InMemoryUserDetailsManager implements UserDetailsManager, UserDetailsPasswordService {

	private final Map<String, MutableUserDetails> users = new HashMap<>();

	@Override
	public void createUser(UserDetails user) {
		Assert.isTrue(!userExists(user.getUsername()), "user should not exist");
		this.users.put(user.getUsername().toLowerCase(), new MutableUser(user));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDetails user = this.users.get(username.toLowerCase());
		if (user == null) {
			throw new UsernameNotFoundException(username);
		}
		return new User(user.getUsername(), user.getPassword(), user.isEnabled(), user.isAccountNonExpired(),
				user.isCredentialsNonExpired(), user.isAccountNonLocked(), user.getAuthorities());
	}

}

```

代码非常简单，它间接实现了 `UserDetailsService` 接口并重写了里边的 `loadUserByUsername` 方法，`createUser`方法就是将创建的用户存储到变量 map 中，key 就是用户名，value 则是用户对象。`loadUserByUsername` 方法则根据用户名（key）读取用户对象，最后返回一个 `User`，其实也就是 `UserDetails`。

#### 基于 JdbcUserDetailsManager 
JdbcUserDetailsManager 支持将用户数据持久化到数据库，同时它封装了一系列操作用户的方法，例如用户的添加、更新、查找等。

SpringSecurity 中为 JdbcUserDetailsManager 提供了数据库脚本，位置在 `org/springframework/security/core/userdetails/jdbc/users.ddl`，内容如下：

```sql
create table users(username varchar_ignorecase(50) not null 
primary key,
password varchar_ignorecase(500) not null,
enabled boolean not null);

create table authorities (username varchar_ignorecase(50) not null,
authority varchar_ignorecase(50) not null,
constraint fk_authorities_users 
foreign key(username) references users(username));
create unique index ix_auth_username on authorities (username,authority);
```
一共创建了两张表，users表存放用户信息，authorities 表存放用户角色。但是大家注意 SQL 的数据类型中有一个 `varchar_ignorecase`，这个其实是针对 HSQLDB 的数据类型，我们这里使用的是 MySQL 数据库，所以这里手动将 `varchar_ignorecase` 类型修改为 `varchar` 类型，然后去数据库中执行修改后的脚本。

另一方面，由于要将数据存入数据库中，所以我们的项目也要提供数据库支持，JdbcUserDetailsManager 底层实际上就是使用 JdbcTemplate 来完成的，所以我们要添加两个依赖：
```xml
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<dependency>
 <groupId>mysql</groupId>
 <artifactId>mysql-connector-java</artifactId>
</dependency>
```

然后在 `resources/application.properties` 中配置数据库连接信息：

```properties
spring.datasource.username=root
spring.datasource.password=123
spring.datasource.url=jdbc:mysql:///security?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
```

1. 当引入 `spring-boot-starter-jdbc` 并配置了数据库连接信息后，一个 `DataSource` 实例就有了，这里首先引入 DataSource 实例。
2. 在 configure 方法中，创建一个 JdbcUserDetailsManager 实例，在创建时传入 DataSource 实例。通过 userExists 方法可以判断一个用户是否存在，该方法本质上就是去数据库中查询对应的用户；如果用户不存在，则通过 createUser 方法创建一个用户，该方法本质上就是向数据库中添加一个用户。
3. 最后将manager实例设置到 auth 对象中。

配置完成后，重启项目，如果项目启动成功，数据库中就会自动添加进来两条数据，如图

![image-20220826162407075](https://img.zxqs.top/20220826162410.png)

此时，我们就可以使用 用户名和密码 进行登录测试了。

在 JdbcUserDetailsManager 的继承体系中，首先是 `JdbcDaoImpl` 实现了 `UserDetailsService` 接口，并实现了基本的 `loadUserByUsername` 方法。JdbcUserDetailsManager 则 继承 自 `JdbcDaoImpl`，同时完善了数据库操作，又封装了用户的增删改查方法。这里，我们以 `loadUserByUsername` 为例，看一下源码，其余的增删改操作相对来说都比较容易，这里就不再赘述了。

`JdbcDaoImpl#loadUserByUsername`：
```java
@Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	List<UserDetails> users = loadUsersByUsername(username);
	if (users.size() == 0) {
		this.logger.debug("Query returned no results for user '" + username + "'");
		throw new UsernameNotFoundException(this.messages.getMessage("JdbcDaoImpl.notFound",
				new Object[] { username }, "Username {0} not found"));
	}
	UserDetails user = users.get(0); // contains no GrantedAuthority[]
	Set<GrantedAuthority> dbAuthsSet = new HashSet<>();
	if (this.enableAuthorities) {
		dbAuthsSet.addAll(loadUserAuthorities(user.getUsername()));
	}
	if (this.enableGroups) {
		dbAuthsSet.addAll(loadGroupAuthorities(user.getUsername()));
	}
	List<GrantedAuthority> dbAuths = new ArrayList<>(dbAuthsSet);
	addCustomAuthorities(user.getUsername(), dbAuths);
	if (dbAuths.size() == 0) {
		this.logger.debug("User '" + username + "' has no authorities and will be treated as 'not found'");
		throw new UsernameNotFoundException(this.messages.getMessage("JdbcDaoImpl.noAuthority",
				new Object[] { username }, "User {0} has no GrantedAuthority"));
	}
	return createUserDetails(username, user, dbAuths);
}

protected List<UserDetails> loadUsersByUsername(String username) {
	// @formatter:off
	RowMapper<UserDetails> mapper = (rs, rowNum) -> {
		String username1 = rs.getString(1);
		String password = rs.getString(2);
		boolean enabled = rs.getBoolean(3);
		return new User(username1, password, enabled, true, true, true, AuthorityUtils.NO_AUTHORITIES);
	};
	// @formatter:on
	return getJdbcTemplate().query(this.usersByUsernameQuery, mapper, username);
}
```
1. 首先根据用户名，调用 `loadUsersByUsername` 方法去数据库中查询用户，查询出来的是一个 List 集合，集合中如果没有数据，说明用户不存在，则直接抛出异常。
2. 如果集合中存在数据，则将集合中的第一条数据拿出来，然后再去查询用户角色，最后根据这些信息创建一个新的 UserDetails 出来。
3. 需要注意的是，这里还引入了分组的概念，不过考虑到 JdbcUserDetailsManager 并非我们实际项目中的主流方案，因此这里不做过多介绍。

这就是使用 JdbcUserDetailsManager 做数据持久化。这种方式看起来简单，都不用开发者自己写 SQL，但是局限性比较大，无法灵活地定义用户表、角色表等，而在实际开发中，我 们还是希望能够灵活地掌控数据表结构，因此 JdbcUserDetailsManager 使用场景非常有限。

#### 基于MyBatis

使用 MyBatista 做数据持久化是目前大多数企业应用采取的方法，Spring Security 中结合MyBatista 可以灵活地定制用户表以及角色表，我们对此进行详细介绍。

首先需要设计三张表，分别是用户表、角色表以及用户角色关联表，三张表的关系图如 2-24 所示。

![2-24](https://img.zxqs.top/20220829132942.png)

用户和角色是多对多的关系，我们使用 `user_role` 将两者关联起来。

数据库脚本如下：
```sql
CREATE TABLE `role` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `name` varchar(32) DEFAULT NULL,
 `nameZh` varchar(32) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(32) DEFAULT NULL,
 `password` varchar(255) DEFAULT NULL,
 `enabled` tinyint(1) DEFAULT NULL,
 `accountNonExpired` tinyint(1) DEFAULT NULL,
 `accountNonLocked` tinyint(1) DEFAULT NULL,
 `credentialsNonExpired` tinyint(1) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `user_role` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `uid` int(11) DEFAULT NULL,
 `rid` int(11) DEFAULT NULL,
 PRIMARY KEY (`id`),
 KEY `uid` (`uid`),
 KEY `rid` (`rid`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

对于角色表，三个字段从上往下含义分别为`角色id`、角色英文名以及角色中文名称。

对于用户表，七个字段从上往下含义依次为：用户id、用户名、用户密码、账户是否可用、账户是否没有过期、账户是否没有锁定以及凭证（密码）是否没有过期

数据库创建完成后，可以向数据库中添加几条模拟数据，代码如下：

```sql
INSERT INTO `role` (`id`, `name`, `nameZh`)
VALUES
 (1,'ROLE_dba','数据库管理员'),
 (2,'ROLE_admin','系统管理员'),
 (3,'ROLE_user','用户');


INSERT INTO `user` (`id`, `username`, `password`, `enabled`, 
 `accountNonExpired`, `accountNonLocked`, `credentialsNonExpired`)
VALUES
 (1,'root','{noop}123',1,1,1,1),
 (2,'admin','{noop}123',1,1,1,1),
 (3,'sang','{noop}123',1,1,1,1);


INSERT INTO `user_role` (`id`, `uid`, `rid`)
VALUES
 (1,1,1),
 (2,1,2),
 (3,2,2),
 (4,3,3);
```

这样，数据库的准备工作就算完成了。

在 Spring Security 项目中，我们需要引入 MyBatis 和 MySQL 依赖，代码如下：
```xml
<dependency>
 <groupId>org.mybatis.spring.boot</groupId>
 <artifactId>mybatis-spring-boot-starter</artifactId>
 <version>2.1.3</version>
</dependency>
<dependency>
 <groupId>mysql</groupId>
 <artifactId>mysql-connector-java</artifactId>
</dependency>
```

同时在 `resources/application.properties` 中配置数据库基本连接信息：

```properties
spring.datasource.username=root
spring.datasource.password=123
spring.datasource.url=jdbc:mysql:///security02?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
```

接下来创建用户类和角色类：
```java
public class User implements UserDetails {
	private Integer id;
	private String username;
	private String password;
	private Boolean enabled;
	private Boolean accountNonExpired;
	private Boolean accountNonLocked;
	private Boolean credentialsNonExpired;
	private List<Role> roles = new ArrayList<>();
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		for (Role role : roles) {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		}
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		return accountNonExpired;
	}

	@Override
	public boolean isAccountNonLocked() {
		return accountNonLocked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return credentialsNonExpired;
	}

	@Override
	public boolean isEnabled() {
		return enabled;
	}
	//省略其他 getter/setter
}
```

```java
public class Role {
	private Integer id;
	private String name;
	private String nameZh;
	//省略 getter/setter
}
```

自定义用户类需要实现 `UserDetails` 接口，并实现接口中的方法，其中 roles 属性用来保存用户所具备的角色信息，由于系统获取用户角色调用的方法是 `getAuthorities`，所以我们在`getAuthorities` 方法中将 roles 中的角色转为系统可以识别的对象并返回。

User 类中的 isXXX 方法可以当成 get 方法对待，不需要再给这些属性生成 get 方法

接下来我们自定义 `UserDetailsService` 以及对应的数据库查询方法：
```java
@Service
public class MyUserDetailsService implements UserDetailsService {
 	@Autowired
 	UserMapper userMapper;
 	@Override
 	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
 		User user = userMapper.loadUserByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("用户不存在");
		}
 		user.setRoles(userMapper.getRolesByUid(user.getId()));
 		return user;
 } 
}
```

```java
@Mapper
public interface UserMapper {
 List<Role> getRolesByUid(Integer id);
 User loadUserByUsername(String username);
}
```

自定义 `MyUserDetailsService` 实现 `UserDetailsService` 接口，并实现该接口中的方法 `loadUserByUsername`，该方法就是根据用户名去数据库中加载用户，如果从数据库中没有查到用户，则抛出 `UsernameNotFoundException` 异常；如果查询到用户了，则给用户设置roles 属性。

UserMapper 中定义了两个方法用于支持 `MyUserDetailsService` 中的查询操作。

最后，在 `UserMapper.xml` 中定义查询 SQL，代码如下：

```xml
<!DOCTYPE mapper
 PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
 "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.javaboy.formlogin.mapper.UserMapper">
 	<select id="loadUserByUsername" resultType="org.javaboy.formlogin.model.User">
 		select * from user where username=#{username};
 	</select>

 	<select id="getRolesByUid" resultType="org.javaboy.formlogin.model.Role">
 		select r.* from role r,user_role ur where r.`id`=ur.`rid`
 	</select>
</mapper>
```

为了方便，我们将 `UserMapper.xml` 文件和 `UserMapper` 接口放在了相同的包下。为了防止 Maven 打包时自动忽略了 XML 文件，还需要在 pom.xml 中添加如下配置：

```xml
<build>
 <resources>
		<resource>
			<directory>src/main/java</directory>
			<includes>
			<include>**/*.xml</include>
			</includes>
		</resource>
		<resource>
			<directory>src/main/resources</directory>
		</resource>
 </resources>
</build>
```
最后一步，就是在 `SecurityConfig` 中注入 `UserDetailsService`：

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
		@Autowired
		MyUserDetailsService myUserDetailsService;
		@Override
		protected void configure(AuthenticationManagerBuilder auth) throws Exception {
			auth.userDetailsService(myUserDetailsService);
		}

		@Override
		protected void configure(HttpSecurity http) throws Exception {
			http.authorizeRequests()
		  //省略
		} 
 }
```

配置 `UserDetailsService` 的方式和前面配置 `JdbcUserDeatilsManager` 的方式基本一致，只不过配置对象变成了 `myUserDetailsService` 而已。

至此，整个配置工作就完成了。

接下来启动项目，利用数据库中添加的模拟用户进行登录测试，就可以成功登录了。测试方式和前面一致，这里不在赘述。

#### 基于 Spring Data JPA

考虑到在 Spring Boot 技术栈中有不少人使用 Spring Data JPA，因此这里针对Spring Security + Spring Data JPA 也做一个简单介绍，具体思路和基于 MyBatis 的整合类似。

首先引入 Spring Data JPA 的依赖和 MySQL 依赖：

```xml
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
 <groupId>mysql</groupId>
 <artifactId>mysql-connector-java</artifactId>
</dependency>
```
然后在 `resources/application.properties` 中配置数据库和 JPA，代码如下：

```properties
spring.datasource.username=root
spring.datasource.password=123
spring.datasource.url=jdbc:mysql:///security03?useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai
spring.jpa.database=mysql
spring.jpa.database-platform=mysql
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

数据库的配置还是和以前一样，JPA 的配置则主要配置了数据库平台，数据表更新方式、是否打印 SQL 以及对应的数据库方言。

使用 Spring Data JPA 的好处是我们不用提前准备 SQL 脚本，所以接下来配置两个数据库实体类即可：

```java
@Entity(name = "t_user")
public class User implements UserDetails {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String username;
	private String password;
	private boolean accountNonExpired;
	private boolean accountNonLocked;
	private boolean credentialsNonExpired;
	private boolean enabled;
 @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
 	private List<Role> roles;

 @Override
 public Collection<? extends GrantedAuthority> getAuthorities() {
	List<SimpleGrantedAuthority> authorities = new ArrayList<>();
	for (Role role : getRoles()) {
		authorities.add(new SimpleGrantedAuthority(role.getName()));
 }
 	return authorities;
 }

 @Override
 public String getPassword() {
 	return password;
 }

 @Override
 public String getUsername() {
 	return username;
 }
 @Override
 public boolean isAccountNonExpired() {
 	return accountNonExpired;
 }
 @Override
 public boolean isAccountNonLocked() {
	return accountNonLocked;
 }
 @Override
 public boolean isCredentialsNonExpired() {
 	return credentialsNonExpired;
 }
 @Override
 public boolean isEnabled() {
 	return enabled;
 }
 //省略 getter/setter
}

```
```java
@Entity(name = "t_role")
public class Role {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String name;
 private String nameZh;
 //省略 getter/setter
}
```

这两个实体类和前面 MyBatis 中实体类的配置类似，需要注意的是 roles 属性上多了一个多对多配置。

接下来配置 UserDetailsService，并提供数据查询方法：

```java
@Service
public class MyUserDetailsService implements UserDetailsService {
 @Autowired
 UserDao userDao;
 @Override
 public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
 User user = userDao.findUserByUsername(username);
 if (user == null) {
 	throw new UsernameNotFoundException("用户不存在");
 }
 	return user;
 } 
}

```
```java
public interface UserDao extends JpaRepository<User,Integer> {
 User findUserByUsername(String username);
}
```
`MyUserDetailsService` 的定义也和前面的类似，不同之处在于数据查询方法的变化。定义UserDao 继承自 JpaRepository，并定义一个 `findUserByUsername`方法，剩下的事情 Spring Data JPA 框架会帮我们完成。

最后，再在 SecurityConfig 中配置 `MyUserByUsername` 方法，配置方式和 MyBatis 一模一样。

使用了 Spring Data JPA 之后，当项目启动时，会自动在数据库中创建相关表，而不用我们自己去写脚本，这也是使用 Spring Data JPA 的方便之处。

为了测试方便，我们可以在单元测试中执行如下代码，想数据库中添加测试数据。

```java
@Autowired
UserDao userDao;
@Test
void contextLoads() {
  User u1 = new User();
  u1.setUsername("javaboy");
  u1.setPassword("{noop}123");
  u1.setAccountNonExpired(true);
  u1.setAccountNonLocked(true);
  u1.setCredentialsNonExpired(true);
  u1.setEnabled(true);
  List<Role> rs1 = new ArrayList<>();
  Role r1 = new Role();
  r1.setName("ROLE_admin");
  r1.setNameZh("管理员");
  rs1.add(r1);
  u1.setRoles(rs1);
  userDao.save(u1);
}
```

测试数据添加成功之后，接下来启动项目，使用测试数据进行登录测试。


至此，四种不同的用户定义方式就介绍完了。这四种方式，异曲同工，只是数据存储的方式不一样而已，其他的执行流程都是一样的。