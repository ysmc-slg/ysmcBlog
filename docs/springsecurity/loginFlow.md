---
description: SpringSecurity 登录流程
autoPrev: introduction
---
# SpringSecurity 登录流程

## 登录流程
在 `Spring Security` 中，用户名和密码登录方式，认证与授权的相关校验都是在一系列的过滤器链中完成的，在这一系列的过滤器链中，和认证相关的过滤器就是 UsernamePasswordAuthenticationFilter。

```java
public class UsernamePasswordAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

	public static final String SPRING_SECURITY_FORM_USERNAME_KEY = "username";

	public static final String SPRING_SECURITY_FORM_PASSWORD_KEY = "password";

	private static final AntPathRequestMatcher DEFAULT_ANT_PATH_REQUEST_MATCHER = new AntPathRequestMatcher("/login",
			"POST");

	private String usernameParameter = SPRING_SECURITY_FORM_USERNAME_KEY;

	private String passwordParameter = SPRING_SECURITY_FORM_PASSWORD_KEY;

	private boolean postOnly = true;

	public UsernamePasswordAuthenticationFilter() {
		super(DEFAULT_ANT_PATH_REQUEST_MATCHER);
	}

	public UsernamePasswordAuthenticationFilter(AuthenticationManager authenticationManager) {
		super(DEFAULT_ANT_PATH_REQUEST_MATCHER, authenticationManager);
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		if (this.postOnly && !request.getMethod().equals("POST")) {
			throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
		}
		String username = obtainUsername(request);
		username = (username != null) ? username : "";
		username = username.trim();
		String password = obtainPassword(request);
		password = (password != null) ? password : "";
		UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
		// Allow subclasses to set the "details" property
		setDetails(request, authRequest);
		return this.getAuthenticationManager().authenticate(authRequest);
	}

    @Nullable
	protected String obtainPassword(HttpServletRequest request) {
		return request.getParameter(this.passwordParameter);
	}


	@Nullable
	protected String obtainUsername(HttpServletRequest request) {
		return request.getParameter(this.usernameParameter);
	}

	protected void setDetails(HttpServletRequest request, UsernamePasswordAuthenticationToken authRequest) {
		authRequest.setDetails(this.authenticationDetailsSource.buildDetails(request));
	}
    // ......
}
```
根据这段源码我们可以看出：

1. 首先通过 `obtainUsername` 和 `obtainPassword` 方法提取出请求里边的用户名/密码出来，提取方式就是 request.getParameter ，这也是为什么 Spring Security 中默认的表单登录要通过 `key/value` 的形式传递参数，而不能传递 JSON 参数，如果像传递 JSON 参数，修改这里的逻辑即可。
2. 获取到请求里传递来的用户名/密码之后，接下来就构造一个 `UsernamePasswordAuthenticationToken` 对象，传入 `username` 和 `password`，`username` 对应了 `UsernamePasswordAuthenticationToken` 中的 `principal` 属性，而 `password` 则对应了它的 `credentials` 属性。
3. 接下来 `setDetails` 方法给 `details` 属性赋值，`UsernamePasswordAuthenticationToken` 本身是没有 `details` 属性的，这个属性在它的父类 `AbstractAuthenticationToken` 中。`details` 是一个对象，这个对象里边放的是 `WebAuthenticationDetails` 实例，该实例主要描述了两个信息，请求的 `remoteAddress` 以及请求的 `sessionId`。
4. 最后一步，就是调用 authenticate 方法去做校验了。

好了，从这段源码中，大家可以看出来请求的各种信息基本上都找到了自己的位置，找到了位置，这就方便我们未来去获取了。

接下来我们再来看请求的具体校验操作。

在前面的 `UsernamePasswordAuthenticationFilter#attemptAuthentication` 方法中，该方法的最后一步开始做校验，校验操作首先要获取到一个 `AuthenticationManager`，这里拿到的是 `ProviderManager` ，所以接下来我们就进入到 `ProviderManager` 的 `authenticate` 方法中，当然这个方法也比较长，我这里仅仅摘列出来几个重要的地方：

```java
public Authentication authenticate(Authentication authentication)
		throws AuthenticationException {
	Class<? extends Authentication> toTest = authentication.getClass();
	for (AuthenticationProvider provider : getProviders()) {
		if (!provider.supports(toTest)) {
			continue;
		}
		result = provider.authenticate(authentication);
		if (result != null) {
			copyDetails(authentication, result);
			break;
		}
	}
	if (result == null && parent != null) {
		result = parentResult = parent.authenticate(authentication);
	}
	if (result != null) {
		if (eraseCredentialsAfterAuthentication
				&& (result instanceof CredentialsContainer)) {
			((CredentialsContainer) result).eraseCredentials();
		}
		if (parentResult == null) {
			eventPublisher.publishAuthenticationSuccess(result);
		}
		return result;
	}
	throw lastException;
}
```

1. 首先获取 authentication 的 Class，判断当前 provider 是否支持该 authentication。
2. 如果支持，则调用 provider 的 authenticate 方法开始做校验，校验完成后，会返回一个新的 Authentication。一会来和大家捋这个方法的具体逻辑。
3. 这里的 provider 可能有多个，如果 provider 的 authenticate 方法没能正常返回一个 Authentication，则调用 provider 的 parent 的 authenticate 方法继续校验。
4. copyDetails 方法则用来把旧的 Token 的 details 属性拷贝到新的 Token 中来。
5. 接下来会调用 eraseCredentials 方法擦除凭证信息，也就是你的密码，这个擦除方法比较简单，就是将 Token 中的 credentials 属性置空。
6. 最后通过 publishAuthenticationSuccess 方法将登录成功的事件广播出去。

大致的流程，就是上面这样，在 for 循环中，第一次拿到的 provider 是一个 AnonymousAuthenticationProvider，这个 provider 压根就不支持 UsernamePasswordAuthenticationToken，也就是会直接在 provider.supports 方法中返回 false，结束 for 循环，然后会进入到下一个 if 中，直接调用 parent 的 authenticate 方法进行校验。

而 parent 就是 ProviderManager，所以会再次回到这个 authenticate 方法中。再次回到 authenticate 方法中，provider 也变成了 DaoAuthenticationProvider，这个 provider 是支持 UsernamePasswordAuthenticationToken 的，所以会顺利进入到该类的 authenticate 方法去执行，而 DaoAuthenticationProvider 继承自 AbstractUserDetailsAuthenticationProvider 并且没有重写 authenticate 方法，所以 我们最终来到 AbstractUserDetailsAuthenticationProvider#authenticate 方法中：

```java
public abstract class AbstractUserDetailsAuthenticationProvider
		implements AuthenticationProvider, InitializingBean, MessageSourceAware {

    public Authentication authenticate(Authentication authentication)
		throws AuthenticationException {
	String username = (authentication.getPrincipal() == null) ? "NONE_PROVIDED" : authentication.getName();

	user = retrieveUser(username,(UsernamePasswordAuthenticationToken) authentication);
	preAuthenticationChecks.check(user);
	additionalAuthenticationChecks(user,(UsernamePasswordAuthenticationToken) authentication);
	postAuthenticationChecks.check(user);
	Object principalToReturn = user;
	if (forcePrincipalAsString) {
		principalToReturn = user.getUsername();
	}
	return createSuccessAuthentication(principalToReturn, authentication, user);
}
}
```

 这里的逻辑就比较简单了：

1. 首先从 Authentication 提取出登录用户名。
2. 然后通过拿着 username 去调用 retrieveUser 方法去获取当前用户对象，这一步会调用我们自己在登录时候的写的 UserDetailsService 实现类的 loadUserByUsername 方法，所以这里返回的 user 其实就是你的登录对象

3. 接下来调用 preAuthenticationChecks.check 方法去检验 user 中的各个账户状态属性是否正常，例如账户是否被禁用、账户是否被锁定、账户是否过期等等。
4. additionalAuthenticationChecks 方法则是做密码比对的，好多小伙伴好奇 Spring Security 的密码加密之后，是如何进行比较的，看这里就懂了，因为比较的逻辑很简单，我这里就不贴代码出来了。
5. 最后在 postAuthenticationChecks.check 方法中检查密码是否过期。
6. 接下来有一个 forcePrincipalAsString 属性，这个是是否强制将 Authentication 中的 principal 属性设置为字符串，这个属性我们一开始在 UsernamePasswordAuthenticationFilter 类中其实就是设置为字符串的（即 username），但是默认情况下，当用户登录成功之后， 这个属性的值就变成当前用户这个对象了。之所以会这样，就是因为 forcePrincipalAsString 默认为 false，不过这块其实不用改，就用 false，这样在后期获取当前用户信息的时候反而方便很多。
7. 最后，通过 createSuccessAuthentication 方法构建一个新的 UsernamePasswordAuthenticationToken。

好了，那么登录的校验流程现在就基本和大家捋了一遍了。那么接下来还有一个问题，登录的用户信息我们去哪里查找？


## 用户信息保存


要去找登录的用户信息，我们得先来解决一个问题，就是上面我们说了这么多，这一切是从哪里开始被触发的？

我们来到 UsernamePasswordAuthenticationFilter 的父类 AbstractAuthenticationProcessingFilter 中，这个类我们经常会见到，因为很多时候当我们想要在 Spring Security 自定义一个登录验证码或者将登录参数改为 JSON 的时候，我们都需自定义过滤器继承自 AbstractAuthenticationProcessingFilter ，毫无疑问，UsernamePasswordAuthenticationFilter#attemptAuthentication 方法就是在 AbstractAuthenticationProcessingFilter 类的 doFilter 方法中被触发的：

```java
public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
		throws IOException, ServletException {
	HttpServletRequest request = (HttpServletRequest) req;
	HttpServletResponse response = (HttpServletResponse) res;
	Authentication authResult;
	try {
		authResult = attemptAuthentication(request, response);
		if (authResult == null) {
			return;
		}
		sessionStrategy.onAuthentication(authResult, request, response);
	}
	catch (InternalAuthenticationServiceException failed) {
		unsuccessfulAuthentication(request, response, failed);
		return;
	}
	catch (AuthenticationException failed) {
		unsuccessfulAuthentication(request, response, failed);
		return;
	}
	if (continueChainBeforeSuccessfulAuthentication) {
		chain.doFilter(request, response);
	}
	successfulAuthentication(request, response, chain, authResult);
}
```

从上面的代码中，我们可以看到，当 attemptAuthentication 方法被调用时，实际上就是触发了 UsernamePasswordAuthenticationFilter#attemptAuthentication 方法，当登录抛出异常的时候，unsuccessfulAuthentication 方法会被调用，而当登录成功的时候，successfulAuthentication 方法则会被调用，那我们就来看一看 successfulAuthentication 方法：

```java
protected void successfulAuthentication(HttpServletRequest request,
		HttpServletResponse response, FilterChain chain, Authentication authResult)
		throws IOException, ServletException {
	SecurityContextHolder.getContext().setAuthentication(authResult);
	rememberMeServices.loginSuccess(request, response, authResult);
	// Fire event
	if (this.eventPublisher != null) {
		eventPublisher.publishEvent(new InteractiveAuthenticationSuccessEvent(
				authResult, this.getClass()));
	}
	successHandler.onAuthenticationSuccess(request, response, authResult);
}
```

在这里有一段很重要的代码，就是 SecurityContextHolder.getContext().setAuthentication(authResult); ，登录成功的用户信息被保存在这里，也就是说，在任何地方，如果我们想获取用户登录信息，都可以从 SecurityContextHolder.getContext() 中获取到，想修改，也可以在这里修改。

最后大家还看到有一个 successHandler.onAuthenticationSuccess，这就是我们在 SecurityConfig 中配置登录成功回调方法，就是在这里被触发的。