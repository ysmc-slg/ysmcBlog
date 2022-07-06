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

我们在 [快速入门](./Authentication.html#登录表单配置) 案例的基础上，在添加一个 UserController，内容如下：

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

首先在
