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

这就是 `AbstractUserDetailsAuthenticationProvider` 类的工作流程，有几个抽象方法是在 `DaoAuthenticationProvider` 中实现的，我们再来看一下 `DaoAuthenticationProvider` 中的定义：

```java
public class DaoAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {
	private static final String USER_NOT_FOUND_PASSWORD = "userNotFoundPassword";
	private PasswordEncoder passwordEncoder;
	private volatile String userNotFoundEncodedPassword;
	private UserDetailsService userDetailsService;
	private UserDetailsPasswordService userDetailsPasswordService;

	public DaoAuthenticationProvider() {
		setPasswordEncoder(PasswordEncoderFactories.createDelegatingPasswordEncoder());
	}


	@SuppressWarnings("deprecation")
	protected void additionalAuthenticationChecks(UserDetails userDetails,
			UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException {
		if (authentication.getCredentials() == null) {
			logger.debug("Authentication failed: no credentials provided");

			throw new BadCredentialsException(messages.getMessage(
					"AbstractUserDetailsAuthenticationProvider.badCredentials",
					"Bad credentials"));
		}

		String presentedPassword = authentication.getCredentials().toString();

		if (!passwordEncoder.matches(presentedPassword, userDetails.getPassword())) {
			logger.debug("Authentication failed: password does not match stored value");

			throw new BadCredentialsException(messages.getMessage(
					"AbstractUserDetailsAuthenticationProvider.badCredentials",
					"Bad credentials"));
		}
	}

	protected void doAfterPropertiesSet() {
		Assert.notNull(this.userDetailsService, "A UserDetailsService must be set");
	}

	protected final UserDetails retrieveUser(String username,
			UsernamePasswordAuthenticationToken authentication)
			throws AuthenticationException {
		prepareTimingAttackProtection();
		try {
			UserDetails loadedUser = this.getUserDetailsService().loadUserByUsername(username);
			if (loadedUser == null) {
				throw new InternalAuthenticationServiceException(
						"UserDetailsService returned null, which is an interface contract violation");
			}
			return loadedUser;
		}
		catch (UsernameNotFoundException ex) {
			mitigateAgainstTimingAttack(authentication);
			throw ex;
		}
		catch (InternalAuthenticationServiceException ex) {
			throw ex;
		}
		catch (Exception ex) {
			throw new InternalAuthenticationServiceException(ex.getMessage(), ex);
		}
	}

	@Override
	protected Authentication createSuccessAuthentication(Object principal,
			Authentication authentication, UserDetails user) {
		boolean upgradeEncoding = this.userDetailsPasswordService != null
				&& this.passwordEncoder.upgradeEncoding(user.getPassword());
		if (upgradeEncoding) {
			String presentedPassword = authentication.getCredentials().toString();
			String newPassword = this.passwordEncoder.encode(presentedPassword);
			user = this.userDetailsPasswordService.updatePassword(user, newPassword);
		}
		return super.createSuccessAuthentication(principal, authentication, user);
	}

	private void prepareTimingAttackProtection() {
		if (this.userNotFoundEncodedPassword == null) {
			this.userNotFoundEncodedPassword = this.passwordEncoder.encode(USER_NOT_FOUND_PASSWORD);
		}
	}

	private void mitigateAgainstTimingAttack(UsernamePasswordAuthenticationToken authentication) {
		if (authentication.getCredentials() != null) {
			String presentedPassword = authentication.getCredentials().toString();
			this.passwordEncoder.matches(presentedPassword, this.userNotFoundEncodedPassword);
		}
	}

	public void setPasswordEncoder(PasswordEncoder passwordEncoder) {
		Assert.notNull(passwordEncoder, "passwordEncoder cannot be null");
		this.passwordEncoder = passwordEncoder;
		this.userNotFoundEncodedPassword = null;
	}

	protected PasswordEncoder getPasswordEncoder() {
		return passwordEncoder;
	}

	public void setUserDetailsService(UserDetailsService userDetailsService) {
		this.userDetailsService = userDetailsService;
	}

	protected UserDetailsService getUserDetailsService() {
		return userDetailsService;
	}

	public void setUserDetailsPasswordService(
			UserDetailsPasswordService userDetailsPasswordService) {
		this.userDetailsPasswordService = userDetailsPasswordService;
	}
}
```
在 `DaoAuthenticationProvider` 中：

1. 首先定义了 `USER_NOT_FOUND_PASSWORD` 常量，这个是当用户查找失败时的默认密码；`passwordEncoder` 是一个密码加密和对比工具，这个在后面会介绍；`userNotFoundEncodedPassword` 变量则用来保存默认密码加密后的值；`userDetailsService` 是一个用户查找工具，`userDetailsPasswordService` 则用来提供密码修改服务。
2. 在 `DaoAuthenticationProvider` 的构造方法中，默认就会指定 `PasswordEncoder`，当然开发者也可以通过 `set` 方法自定义 PasswordEncoder。
3. `additionalAuthenticationChecks` 方法主要进行密码校验，该方法第一个参数 `userDetails` 是从数据库中查询出来的用户对象，第二个参数 `authentication` 是登录用户输入的参数。从这两个参数中分别提取出来用户密码，然后调用 `passwordEncoder.matches` 方法进行密码比对。
4. `retrieveUser` 方法是获取用户对象的方法，具体做法就是调用 `UserDetailsService#loadUserByUsername` 方法去数据库中查询。
5. 在 `retrieveUser` 方法中，有一个值得关注的地方。在该方法一开始，首先会调用 `prepareTimingAttackProtection` 方法，该方法的作用是使用 PasswordEncoder 对常量 `USER_NOT_FOUND_PASSWORD` 进行加密，将加密结果保存在 `userNotFoundEncodedPassword` 变量中。当根据用户名查找用户时，如果抛出了 `UsernameNotFoundException` 异常，则调用 `mitigateAgainstTimingAttack` 方法进行密码对比。但这时用户都没查找到，怎么对比密码？需要注意，在调用 `mitigateAgainstTimingAttack` 方法进行密码对比时，使用了 `userNotFoundEncodedPassword` 变量作为默认密码和登录请求传来的用户密码比对。这是一个一开始就注定要失败的密码对比，那么为什么还要进行比对呢？这主要是为了避免旁道攻击（Side-channel attack）。如果根据用户名查找用户失败，就直接抛出异常而不进行密码比对，那么黑客经过大量的测试，就会发现有点请求消耗时间明显小于其他请求，那么进而可以得出该请求的用户是一个不存在的用户名（（因为用户名不存在，所以不需要密码比对，进而节省时间），这样就可以获取到系统信息。为了避免这一问题，所以当用户查找失败时，也会调用`mitigateAgainstTimingAttack` 方法进行密码比对，这样就可以迷惑黑客。
6. `createSuccessAuthentication` 方法则是在登录成功后，创建一个全新的 `UsernamePasswordAuthenticationToken` 对象，同时会判断是否需要进行密码升级，如果需要进行密码升级，就会在该方法中进行加密方案升级。

通过对 `AbstractUserDetailsAuthenticationProvider` 和 `DaoAuthenticationProvider` 的讲解，相信大家已经明白 AuthenticationProvider 中的认证逻辑了。

#### ProviderManager

`ProviderManager` 是 `AuthenticationManager` 的一个重要实现类。在开始学习之前，我们先通过一幅图来了解一下 `ProviderManager` 和 `AuthenticationProvider` 之间的关系，如图 3-1 所示

![3-1](https://img.zxqs.top/20220902095013.png)

在 Spring Security 中，由于系统可能同时支持多种不同的认证方式，例如同时支持 用户名/密码 认证、RemberMe 认证、手机号码动态认证等，而不同的认证方式对应了不同的 `AuthenticationProvider`，所以一个完整的认证流程可能有多个 `AuthenticationProvider` 来提供。

多个 `AuthenticationProvider` 将组成一个列表，这个列表将由 `ProviderManager` 代理。换句话说，在 `ProviderManager` 中存在一个 `AuthenticationProvider` 列表，在 `ProviderManager` 中遍历列表中的每一个 `AuthenticationProvider` 去执行身份认证，最终得到认证结果。

`ProviderManager` 本身也可以再配置一个 `AuthenticationManager` 作为 `parent`，这样当 `ProviderManager` 认证失败之后，就可以进入到 `parent` 中再次进行认证。理论上来说，`ProviderManager` 的 `parent` 可以是任意类型的 `AuthenticationManager`，但是通常都是由 `ProviderManager` 来扮演 `parent` 的角色，也就是 `ProviderManager` 是 `ProviderManager` 的 `parent`。

`ProviderManager` 本身也可以有多个，多个 `ProviderManager` 共用同一个 `parent`，当存在多个过滤器链的时候非常有用。当存在多个过滤器链时，不同的路径可能对应不同的认证方式，但是不同路径可能又会同时存在一些共有的认证方式，这些共有的认证方式可以在 `parent` 中统一处理。

根据上面的介绍，我们绘出新的 `ProviderManager` 和 `AuthenticationProvider` 关系图，如图 3-2 所示。

![3-2](https://img.zxqs.top/20220902133215.png)

我们重点看一下 `ProviderManager` 中的 `authenticate` 方法：

```java
@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		Class<? extends Authentication> toTest = authentication.getClass();
		AuthenticationException lastException = null;
		AuthenticationException parentException = null;
		Authentication result = null;
		Authentication parentResult = null;
		int currentPosition = 0;
		int size = this.providers.size();
		for (AuthenticationProvider provider : getProviders()) {
			if (!provider.supports(toTest)) {
				continue;
			}
			if (logger.isTraceEnabled()) {
				logger.trace(LogMessage.format("Authenticating request with %s (%d/%d)",
						provider.getClass().getSimpleName(), ++currentPosition, size));
			}
			try {
				result = provider.authenticate(authentication);
				if (result != null) {
					copyDetails(authentication, result);
					break;
				}
			}
			catch (AccountStatusException | InternalAuthenticationServiceException ex) {
				prepareException(ex, authentication);
				
				throw ex;
			}
			catch (AuthenticationException ex) {
				lastException = ex;
			}
		}
		if (result == null && this.parent != null) {
			
			try {
				parentResult = this.parent.authenticate(authentication);
				result = parentResult;
			}
			catch (ProviderNotFoundException ex) {
				
			}
			catch (AuthenticationException ex) {
				parentException = ex;
				lastException = ex;
			}
		}
		if (result != null) {
			if (this.eraseCredentialsAfterAuthentication && (result instanceof CredentialsContainer)) {
				
				((CredentialsContainer) result).eraseCredentials();
			}

			if (parentResult == null) {
				this.eventPublisher.publishAuthenticationSuccess(result);
			}

			return result;
		}

		if (lastException == null) {
			lastException = new ProviderNotFoundException(this.messages.getMessage("ProviderManager.providerNotFound",
					new Object[] { toTest.getName() }, "No AuthenticationProvider found for {0}"));
		}
		if (parentException == null) {
			prepareException(lastException, authentication);
		}
		throw lastException;
	}
```

1. 首先获取 authentication 对象的类型。
2. 分别定义当前认证过程抛出的异常、parent 中认证时抛出的异常、当前认证结果以及 parent 中认证结果对应的变量
3. getProviders 方法用来获取当前 ProviderManager 所代理的所有的 AuthenticationProvider 对象，遍历这些 AuthenticationProvider 对象进行身份认证。
4. 判断当前 `AuthenticationProvider` 是否支持当前 Authentication 对象，要是不支持，则继续处理列表中的下一个 AuthenticationProvider 对象。
5. 调用 `provider.authenticate` 方法进行身份认证，如果认证成功，返回认证后的 Authentication 对象，同时调用 `copyDetails` 方法给 `Authentication` 对象的 `details` 属性赋值。由于节能是多个AuthenticationProvider 执行认证操作，所以如果抛出异常，则通过 `lastException` 变量来记录。
6. 在 for 循环执行完成后，如果 `result` 还是没有值，说明所有的 AuthenticationProvider 都认证失败，此时如果 parent 不为空，则调用 parent 的 authenticate 方法进行认证。
7. 接下来，如果 `result` 不为空，就将 result 中的凭证擦除，防止泄露。如果使用了 用户名/密码的方式登录，那么所谓的擦除实际上即使将密码字段设置为null，同时将登录成功的事件发布出去（发布登录成功事件需要 parentResult 为 null。如果 parentResult 不为 null，表示在 parent 中已经认证成功了，认证成功的事件也已经在 parent 中发布出去了，这样会导致认证成功的事件重复发布）。如果用户认证成功，此时就将 result 返回，后面的代码也就不再执行了。
8. 如果前面没能返回 result，说明认证失败。如果 `lastException` 为 null，说明 `parent` 为 null 或者 没有认证亦或者认证失败了但是没有抛出异常，此时构造 `ProviderNotFoundException` 异常赋值给 `lastException`。
9. 如果 parentException 为 null，发布认证失败事件（如果 parentException 不为 null，则说明认证失败事件已经发布过了）
10. 最后抛出 lastException 异常。

现在，大家已经熟悉了 Authentication、AuthenticationManager、AuthenticationProvider 以 及 ProviderManager 的工作原理了，接下来的问题就是这些组件如何跟登录关联起来？这就涉 及一个重要的过滤器—— `AbstractAuthenticationProcessingFilter`。

#### AbstractAuthenticationProcessingFilter

作为 Spring Security 过滤器中的一环，`AbstractAuthenticationProcessingFilter` 可以用来处理任何提交给它的身份认证，图 3-3 描述了 `AbstractAuthenticationProcessingFilter` 的工作流程。

![3-3](https://img.zxqs.top/20220905165139.png)

图中显示的流程是一个通用的架构。`AbstractAuthenticationProcessingFilter` 作为一个抽象类，如果使用用户名/密码的方式登录，那么它对应的实现类是 `UsernamePasswordAuthenticationFilter`，构造出来的 Authentication 对象则是 UsernamePassworldAuthenticationToken。至于 AuthenticationManager，前面已经说过，一般情况下它的实现类就是 `ProviderManager`，这里在 `ProviderManager` 中进行认证，认证成功就会进入认证成功的回调，否则进入失败的回调。因此，我们可以对上面的流程图再做进一步细化，如图 3-4 所示。

![3-4](https://img.zxqs.top/20220906140032.png)

前面所涉及的认证流程基本上就是这样，我们来大致梳理一下：

1. 当用户提交登录请求时，UsernamePasswordAuthenticationFilter 会从当前请求 HttpServletRequest 中提取出登录 用户名/密码，然后创建一个 UsernamePasswordAuthenticationToken 对象。
2. UsernamePasswordAuthenticationToken 对象被传入 ProviderManager 中进行具体的认证操作
3. 如果认证失败，则 SecurityContextHolder 中相关信息将被删除，登录失败回调也会被调用
4. 如果认证成功，则会进行登录信息存储、Session并发处理、登录成功事件发布以及登录成功方法回调等操作。

这是认证的一个大致流程。接下来我们结合 `AbstractAuthenticationProcessingFilter` 和 `UsernamePasswordAuthenticationFilter` 的源码来看一下。

先来看 `AbstractAuthenticationProcessingFilter` 源码：

```java
public abstract class AbstractAuthenticationProcessingFilter extends GenericFilterBean implements ApplicationEventPublisherAware, MessageSourceAware {

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) res;

		if (!requiresAuthentication(request, response)) {
			chain.doFilter(request, response);

			return;
		}

		if (logger.isDebugEnabled()) {
			logger.debug("Request is to process authentication");
		}

		Authentication authResult;

		try {
			authResult = attemptAuthentication(request, response);
			if (authResult == null) {
				// return immediately as subclass has indicated that it hasn't completed
				// authentication
				return;
			}
			sessionStrategy.onAuthentication(authResult, request, response);
		}
		catch (InternalAuthenticationServiceException failed) {
			logger.error(
					"An internal error occurred while trying to authenticate the user.",
					failed);
			unsuccessfulAuthentication(request, response, failed);

			return;
		}
		catch (AuthenticationException failed) {
			// Authentication failed
			unsuccessfulAuthentication(request, response, failed);

			return;
		}

		// Authentication success
		if (continueChainBeforeSuccessfulAuthentication) {
			chain.doFilter(request, response);
		}

		successfulAuthentication(request, response, chain, authResult);
	}

	protected boolean requiresAuthentication(HttpServletRequest request,
			HttpServletResponse response) {
		return requiresAuthenticationRequestMatcher.matches(request);
	}

	public abstract Authentication attemptAuthentication(HttpServletRequest request,
			HttpServletResponse response) throws AuthenticationException, IOException,
			ServletException;

	protected void successfulAuthentication(HttpServletRequest request,
			HttpServletResponse response, FilterChain chain, Authentication authResult)
			throws IOException, ServletException {

		if (logger.isDebugEnabled()) {
			logger.debug("Authentication success. Updating SecurityContextHolder to contain: "
					+ authResult);
		}

		SecurityContextHolder.getContext().setAuthentication(authResult);

		rememberMeServices.loginSuccess(request, response, authResult);

		// Fire event
		if (this.eventPublisher != null) {
			eventPublisher.publishEvent(new InteractiveAuthenticationSuccessEvent(
					authResult, this.getClass()));
		}

		successHandler.onAuthenticationSuccess(request, response, authResult);
	}

	protected void unsuccessfulAuthentication(HttpServletRequest request,
			HttpServletResponse response, AuthenticationException failed)
			throws IOException, ServletException {
		SecurityContextHolder.clearContext();

		if (logger.isDebugEnabled()) {
			logger.debug("Authentication request failed: " + failed.toString(), failed);
			logger.debug("Updated SecurityContextHolder to contain null Authentication");
			logger.debug("Delegating to authentication failure handler " + failureHandler);
		}

		rememberMeServices.loginFail(request, response);

		failureHandler.onAuthenticationFailure(request, response, failed);
	}
}
```
1. 首先通过 requiresAuthentication 方法来判断当前请求是不是登录认证请求，如果是认证请求，就执行接下来的认证代码；如果不是认证请求，则直接继续走剩余的过滤器即可。
2. 调用 attemptAuthentication 方法来获取一个经过认证后的 Authentication 对象，attemptAuthentication 方法是一个抽象方法，具体实现在它的子类 UsernamePasswordAuthenticationFilter 中
3. 认证成功后，通过 sessionStrategy.onAuthentication 来处理 session 并发问题。
4. `continueChainBeforeSuccessfulAuthentication` 变量用来判断请求是否还需要继续向下走。默认情况下该参数的值为 false，即认证成功后，后续的过滤器将不再执行了。
5. `unsuccessfulAuthentication` 用来处理认证失败事宜，主要做了三件事
   * 从 SecurityContextHolder 中清除数据；
   * 清除 Cookie 等信息；
   * 调用认证失败的回调方法

6. `successfulAuthentication` 方法主要用来处理认证成功事宜，主要做了四件事
   * 向 SecurityContextHolder 中存入用户信息
   * 处理 Cookie
   * 发布认证成功事件，这个事件类型是 `InteractiveAuthenticationSuccessEvent`，表示通过一些自动交互方式认证成功，例如通过 RememberMe 的方式登录。
   * 调用认证成功的回调方法。

这就是 `AbstractAuthenticationProcessingFilter` 大致上所做的事情，还有一个抽象方法 attemptAuthentication 是在它的继承类 UsernamePasswordAuthenticationFilter 中实现的，接下来我们来看一下 UsernamePasswordAuthenticationFilter 类：

```java
public class UsernamePasswordAuthenticationFilter extends
		AbstractAuthenticationProcessingFilter {

	public static final String SPRING_SECURITY_FORM_USERNAME_KEY = "username";
	public static final String SPRING_SECURITY_FORM_PASSWORD_KEY = "password";

	private String usernameParameter = SPRING_SECURITY_FORM_USERNAME_KEY;
	private String passwordParameter = SPRING_SECURITY_FORM_PASSWORD_KEY;
	private boolean postOnly = true;


	public UsernamePasswordAuthenticationFilter() {
		super(new AntPathRequestMatcher("/login", "POST"));
	}


	public Authentication attemptAuthentication(HttpServletRequest request,
			HttpServletResponse response) throws AuthenticationException {
		if (postOnly && !request.getMethod().equals("POST")) {
			throw new AuthenticationServiceException(
					"Authentication method not supported: " + request.getMethod());
		}

		String username = obtainUsername(request);
		String password = obtainPassword(request);

		if (username == null) {
			username = "";
		}

		if (password == null) {
			password = "";
		}

		username = username.trim();

		UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(
				username, password);

		// Allow subclasses to set the "details" property
		setDetails(request, authRequest);

		return this.getAuthenticationManager().authenticate(authRequest);
	}


	@Nullable
	protected String obtainPassword(HttpServletRequest request) {
		return request.getParameter(passwordParameter);
	}


	@Nullable
	protected String obtainUsername(HttpServletRequest request) {
		return request.getParameter(usernameParameter);
	}


	protected void setDetails(HttpServletRequest request,
			UsernamePasswordAuthenticationToken authRequest) {
		authRequest.setDetails(authenticationDetailsSource.buildDetails(request));
	}


	public void setUsernameParameter(String usernameParameter) {
		Assert.hasText(usernameParameter, "Username parameter must not be empty or null");
		this.usernameParameter = usernameParameter;
	}

	public void setPasswordParameter(String passwordParameter) {
		Assert.hasText(passwordParameter, "Password parameter must not be empty or null");
		this.passwordParameter = passwordParameter;
	}

	public void setPostOnly(boolean postOnly) {
		this.postOnly = postOnly;
	}

	public final String getUsernameParameter() {
		return usernameParameter;
	}

	public final String getPasswordParameter() {
		return passwordParameter;
	}
}
```
1. 首先声明了默认情况下登录表单的用户名字段和密码字段，用户名字段的key默认是username，密码字段的key默认是password。当然，这两个字段也可以自定义，自定义的方 式 就 是 我 们 在 SecurityConfig 中 配 置 的 .usernameParameter("uname") 和 .passwordParameter("passwd") 参考 [登录表单配置](./Authentication.html#配置细节)
2. 在 UsernamePasswordAuthenticationFilter 过滤器构建的时候，指定了当前过滤器只用来处理登录请求，默认的登录请求是 `/login`，当然开发者也可以自行配置。
3. 接下来就是最重要的 attemptAuthentication 方法了，在该方法中，首先确认请求是 post 类型；然后通过 obtainUsername 和 obtainPassword 方法分别从请求中提取出用户名和密码，具体的提取过程就是调用 request.getParameter 方法；拿到登录请求传来的用户名/密码之后，构造出一个 authRequest，然后调用 getAuthenticationManager().authenticate 方法进行认证，这就进入到我们前面所说的 ProviderManager 的流程中了，具体认证过程就不再赘述了。

以上就是整个认证流程。

搞懂了认证流程，那么接下来如果想要自定义一些认证方式，就会非常容易了，比如定义多个数据源、添加登录校验码等。下面，我们将通过两个案例，来活学活用上面所讲的认证流程。







