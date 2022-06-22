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


