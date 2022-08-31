---
description: 认证流程
autoPrev: Authentication
---

# 认证流程分析
Spring Security 中默认的一套登录流程是非常完善并且严谨的。但是项目需求非常多样化，很多时候，我们可能还需要对 Spring Security 登录流程进行定制，定制的前提是开发者先深刻理解 Spring Security 登录流程，然后在此基础之上，完成对登录流程的定制。本章将从头梳理 Spring Security 登录流程，并通过几个常见的登录定制案例，让读者更加深刻地理解 SpringSecurity 登录流程。

本文涉及的只要知识点有：
1. 登录流程分析
2. 配置多个数据源
3. 添加登录验证码

## 登录流程分析
要搞清楚 Spring Security 认证流程，我们得先认识与之相关的三个基本组件 Authentication（这个前面已经介绍过）、AuthenticationManaget、ProviderManager 以及 AuthenticationProvider，同时还要去了解接入认证功能的过滤器 AbstractAuthenticationProcessingFilter，这四个类搞明白了，基本上认证流程也就清楚了，下面我们逐个分析一下。

### AuthenticationManager
AuthenticationManager 是一个认证管理器，它定义了 Spring Security 过滤器要如何执行认证操作。AuthenticationManager 在认证成功后，会返回一个 Authentication 对象，这个 Authentication 对象会被设置到 SecurityContextHolder 中。如果开发者不想使用Spring Security 提供的一套认证机制，那么也可以自定义认证流程，认证成功后，手动将 Authentication 存入 SecurityContextHolder 中。
```java
public interface AuthenticationManager {
 Authentication authenticate(Authentication authentication)
      throws AuthenticationException;
}
```
从 AuthenticationManager 源码中可以看到，AuthenticationManager 对传入的 Authentication 对象进行身份认证，此时传入的 Authentication 参数只有 用户名/密码 等简单的属性，如果认证成功，返回的 Authentication 的属性会得到完全填充，包括用户所具备的角色信息。

AuthenticationManager 是一个接口，它有着诸多的实现类，开发者也可以自定义 AuthenticationManager 的实现类，不过在实际应用中，我们使用最多的是 ProviderManager。在 Spring Security 框架中，默认也是使用 ProviderManager。

### AuthenticationProvider

在前面的 [登录用户数据获取](./Authentication.html#登录用户数据获取) 我们已经介绍了，Spring Security 支持不同的认证方式，不同的认证方式对应不同的身份类型，`AuthenticationProvider` 就是针对不同的身份类型执行具体的身份认证。例如，常见的  `DaoAuthenticationProvider` 用来支持 用户名/密码登录认证，`RememberMeAuthenticationProvider` 用来支持 "记住我" 的认证。

AuthenticationProvider 的源码如下：

```java
public interface AuthenticationProvider {
 Authentication authenticate(Authentication authentication) throws AuthenticationException;
 boolean supports(Class<?> authentication);
}
```

1. authenticate：用来执行具体的身份认证
2. supports：用来判断当前 AuthenticationProvider 是否支持对应的身份类型。

当使用 用户名/密码 的方式登录是，对应的 AuthenticationProvider 实现类是 `DaoAuthenticationProvider`，而 DaoAutehnticationProvider 继承自 `AbstractUserDetailsAuthenticationProvider` 并且没有重写 `authenticate`方法，所以具体的认证逻辑在 `AbstractUserDetailsAuthenticationProvider` 的 `authenticate` 方法中。我们就从 `AbstractUserDetailsAuthenticationProvider` 开始看起。

```java
public abstract class AbstractUserDetailsAuthenticationProvider implements
		AuthenticationProvider, InitializingBean, MessageSourceAware {

	protected final Log logger = LogFactory.getLog(getClass());


	protected MessageSourceAccessor messages = SpringSecurityMessageSource.getAccessor();
	private UserCache userCache = new NullUserCache();
	private boolean forcePrincipalAsString = false;
	protected boolean hideUserNotFoundExceptions = true;
	private UserDetailsChecker preAuthenticationChecks = new DefaultPreAuthenticationChecks();
	private UserDetailsChecker postAuthenticationChecks = new DefaultPostAuthenticationChecks();
	private GrantedAuthoritiesMapper authoritiesMapper = new NullAuthoritiesMapper();

	
	protected abstract void additionalAuthenticationChecks(UserDetails userDetails,
			UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException;

	public final void afterPropertiesSet() throws Exception {
		Assert.notNull(this.userCache, "A user cache must be set");
		Assert.notNull(this.messages, "A message source must be set");
		doAfterPropertiesSet();
	}

	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
		Assert.isInstanceOf(UsernamePasswordAuthenticationToken.class, authentication,
				() -> messages.getMessage(
						"AbstractUserDetailsAuthenticationProvider.onlySupports",
						"Only UsernamePasswordAuthenticationToken is supported"));

		String username = (authentication.getPrincipal() == null) ? "NONE_PROVIDED"
				: authentication.getName();

		boolean cacheWasUsed = true;
		UserDetails user = this.userCache.getUserFromCache(username);

		if (user == null) {
			cacheWasUsed = false;

			try {
				user = retrieveUser(username,
						(UsernamePasswordAuthenticationToken) authentication);
			}
			catch (UsernameNotFoundException notFound) {
				logger.debug("User '" + username + "' not found");

				if (hideUserNotFoundExceptions) {
					throw new BadCredentialsException(messages.getMessage(
							"AbstractUserDetailsAuthenticationProvider.badCredentials",
							"Bad credentials"));
				}
				else {
					throw notFound;
				}
			}

			Assert.notNull(user,
					"retrieveUser returned null - a violation of the interface contract");
		}

		try {
			preAuthenticationChecks.check(user);
			additionalAuthenticationChecks(user,
					(UsernamePasswordAuthenticationToken) authentication);
		}
		catch (AuthenticationException exception) {
			if (cacheWasUsed) {
				cacheWasUsed = false;
				user = retrieveUser(username,
						(UsernamePasswordAuthenticationToken) authentication);
				preAuthenticationChecks.check(user);
				additionalAuthenticationChecks(user,
						(UsernamePasswordAuthenticationToken) authentication);
			}
			else {
				throw exception;
			}
		}

		postAuthenticationChecks.check(user);

		if (!cacheWasUsed) {
			this.userCache.putUserInCache(user);
		}

		Object principalToReturn = user;

		if (forcePrincipalAsString) {
			principalToReturn = user.getUsername();
		}

		return createSuccessAuthentication(principalToReturn, authentication, user);
	}

	
	protected Authentication createSuccessAuthentication(Object principal,Authentication authentication, UserDetails user) {
		UsernamePasswordAuthenticationToken result = new UsernamePasswordAuthenticationToken(
				principal, authentication.getCredentials(),
				authoritiesMapper.mapAuthorities(user.getAuthorities()));
		result.setDetails(authentication.getDetails());

		return result;
	}

	protected void doAfterPropertiesSet() throws Exception {
	}

	public UserCache getUserCache() {
		return userCache;
	}

	public boolean isForcePrincipalAsString() {
		return forcePrincipalAsString;
	}

	public boolean isHideUserNotFoundExceptions() {
		return hideUserNotFoundExceptions;
	}

	
	protected abstract UserDetails retrieveUser(String username,
			UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException;

	public void setForcePrincipalAsString(boolean forcePrincipalAsString) {
		this.forcePrincipalAsString = forcePrincipalAsString;
	}

	
	public void setHideUserNotFoundExceptions(boolean hideUserNotFoundExceptions) {
		this.hideUserNotFoundExceptions = hideUserNotFoundExceptions;
	}

	public void setMessageSource(MessageSource messageSource) {
		this.messages = new MessageSourceAccessor(messageSource);
	}

	public void setUserCache(UserCache userCache) {
		this.userCache = userCache;
	}

	public boolean supports(Class<?> authentication) {
		return (UsernamePasswordAuthenticationToken.class
				.isAssignableFrom(authentication));
	}

	protected UserDetailsChecker getPreAuthenticationChecks() {
		return preAuthenticationChecks;
	}

	
	public void setPreAuthenticationChecks(UserDetailsChecker preAuthenticationChecks) {
		this.preAuthenticationChecks = preAuthenticationChecks;
	}

	protected UserDetailsChecker getPostAuthenticationChecks() {
		return postAuthenticationChecks;
	}

	public void setPostAuthenticationChecks(UserDetailsChecker postAuthenticationChecks) {
		this.postAuthenticationChecks = postAuthenticationChecks;
	}

	public void setAuthoritiesMapper(GrantedAuthoritiesMapper authoritiesMapper) {
		this.authoritiesMapper = authoritiesMapper;
	}

	private class DefaultPreAuthenticationChecks implements UserDetailsChecker {
		public void check(UserDetails user) {
			if (!user.isAccountNonLocked()) {
				logger.debug("User account is locked");

				throw new LockedException(messages.getMessage(
						"AbstractUserDetailsAuthenticationProvider.locked",
						"User account is locked"));
			}

			if (!user.isEnabled()) {
				logger.debug("User account is disabled");

				throw new DisabledException(messages.getMessage(
						"AbstractUserDetailsAuthenticationProvider.disabled",
						"User is disabled"));
			}

			if (!user.isAccountNonExpired()) {
				logger.debug("User account is expired");

				throw new AccountExpiredException(messages.getMessage(
						"AbstractUserDetailsAuthenticationProvider.expired",
						"User account has expired"));
			}
		}
	}

	private class DefaultPostAuthenticationChecks implements UserDetailsChecker {
		public void check(UserDetails user) {
			if (!user.isCredentialsNonExpired()) {
				logger.debug("User account credentials have expired");

				throw new CredentialsExpiredException(messages.getMessage(
						"AbstractUserDetailsAuthenticationProvider.credentialsExpired",
						"User credentials have expired"));
			}
		}
	}
}
```
`AbstractUserDetailsAuthenticationProvider` 是一个抽象类，抽象方法在它的实现类 `DaoAuthenticationProvider` 中完成。AbstractUserDetailsAuthenticationProvider 本身逻辑很简单：

1. 一开始先声明一个用户缓存对象 userCache，默认情况下没有启动缓存对象。
2. `hideUserNotFoundExceptions` 表示是否隐藏用户名查询失败的异常，默认为 true。为了确保系统安全，用户在登录失败时会给出一个模糊提示，例如 “用户名或密码输入错误”。在 Spring Secvurity 内部，如果用户名查找失败，则会抛出 `UsernameNotFoundException` 异常，但是该异常会被自动隐藏，转而通过一个 `BadCredentialsException` 异常来代替它，这样，开发者在处理登录失败异常时，无论是用户名输入错误还是密码输入错误，收到的总是 `BadCredentialsException`，这样做的一个好处是可以避免新手程序员将用户名输入错误和密码输入错误两个异常分开提示。
3. `forcePrincipalAsString` 表示是否将 `Principal` 对象当成字符串来处理，默认是 false。`Authentication` 中的 `principal` 属性类型是一个 Object，正常来说，通过 principal 属性可以获取到当前登录用户对象（即 UserDetails），但是如果 `forcePrincipalAsString` 设置为 true，则 `Authentication` 中的 `principal` 属性返回就是当前登录用户名，而不是用户对象。
4. `preAuthenticationChecks` 对象则是用于做用户状态检查，在用户认证过程中，需要检验用户状态是否正常，例如账户是否被锁定、账户是否可用、账户是否过期等。
5. `postAuthenticationChecks` 对象主要负责在密码校验成功后，检查密码是否过期。
6. `additionalAuthenticationChecks` 是一个抽象方法，主要就是校验密码，具体的实现在 `DaoAuthenticationProvider` 中。
7. `authenticate` 方法就是核心的校验方法了。在方法中，首先从登录数据中获取用户名，然后根据用户名去缓存中查询用户对象，如果查询不到，则根据用户名调用 `retrieveUser` 方法从数据库中加载用户；如果没有加载到用户，则抛出异常（用户不存在异常会被隐藏）。拿到用户对象之后，首先调用 `preAuthenticationChecks.check` 方法进行用户状态检查，然后调用 `additionalAuthenticationChecks` 方法进行密码的校验操作，最后调用 `postAuthenticationChecks.check` 方法检查密码是否过期，当所有步骤都顺利完成后，调用 `createSuccessAuthentication` 方法创建一个认证后的 `UsernamePasswordAuthenticationToken` 对象并返回，认证后的对象中包含了认证主体、凭证以及角色等信息。

