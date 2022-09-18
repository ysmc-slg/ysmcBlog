---
description: 过滤器链分析
autoPrev: AuthenticationProcess
---

# 过滤器链分析

本节主要知识点有：

* 初始化流程分析
* ObjectPostProcessor 的使用
* 多种用户定义方式
* 定义多个过滤器链
* 静态资源过滤
* 使用 JSON 格式登录
* 添加登录验证码

## 初始化流程分析

Spring Security初始化流程整体上来说理解起来并不难，但是这 里涉及许多零碎的知识点，把这些零碎的知识点搞懂了，再来梳理初始 化流程就会容易很多。因此，这里先介绍一下Spring Security中一些 常见的关键组件，在理解这些组件的基础上，再来分析初始化流程，就 能加深对其的理解。

### ObjectPostProcessor

ObjectPostProcessor 是 SpringSecurity 中使用频率最高的组件之一，他是一个对象后置处理器，也就是当一个对象创建后，如果还有一些额外的事情需要补充，那么可以通过 ObjetPostProcessor 来进行处理。这个接口中默认只有一个方法 `postProcess`，该方法用来完 成对对象的二次处理，代码如下：

```java
public interface ObjectPostProcessor<T> {
   <O extends T> O postProcess(O object); 
}
```

ObjectPostProcessor 默认有两个继承类，如图 4-1 所示。

![4-1](https://img.zxqs.top/20220907142043.png)

* AutowireBeanFactoryObjectPostProcessor：由于SpringSecurity 中大量采用了 java 配置，许多过滤器都是直接new 出来的，这些直接 new 出来的对象并不会自动注入到 Spring 容器中。SpringSecurity 这样做的本意是 为了简化配置，但是却带来了另一个问题，就是大量new 出来的对象需要我们手动注册到 Spring 容器中去。`AutowireBeanFactoryObjectPostProcessor` 对象所承担的就是这件是，一个对象 new 出来之后，只要调用`AutowireBeanFactoryObjectPostProcessor#postProcess` 方法，就可以成功注入到 Spring 容器中，它的实现原理就是通过调用 Spring 容器中的 `AutowireCapableBeanFactory` 对象将一个 new 出来的对象注入到 Spring 容器中去。
* CompositeObjectPostProcessor：这是 ObjectPostProcessor 另一个实现，一个对象可以有一个后置处理器，开发者也可以自定义多个对象后置处理器。CompositeObjectPostProcessor 是一个组合的对象后置处理器，它里面维护了一个 List 集合，集合中存放了摸一个对象的所有后置处理器器，当需要执行对象的后置处理器时，会遍历集 合中的所有ObjectPostProcessor实例，分别调用实例的 postProcess方法进行对象后置处理。在Spring Security框架 中，最终使用的对象后置处理器其实就是 CompositeObjectPostProcessor，它里边的集合默认只有一个 对象，就是AutowireBeanFactoryObjectPostProcessor。

在SpringSecurity中，开发者可以灵活地配置项目中需要哪些 SpringSecurity过滤器，一旦选定过滤器之后，每一个过滤器都会有 一个对应的配置器，叫作xxxConfigurer（例如CorsConfigurer、 CsrfConfigurer等），过滤器都是在xxxConfigurer中new出来的，然 后在postProcess方法中处理一遍，就将这些过滤器注入到Spring容器 中了。

这是对象后置处理器ObjectPostProcessor的主要作用。

### SecurityFilterChain

从名称上可以看出，SecurityFilterChain就是Spring Security中 的过滤器链对象。下面来看一下SecurityFilterChain的源码：

```java
public interface SecurityFilterChain {
   boolean matches(HttpServletRequest request); 
   List<Filter> getFilters(); 
}
```

可以看到，SecurityFilterChain 中有两个方法：

* matches：该方法用来判断 request 请求是否应该该被当前过滤器链所处理。
* getFilters：该方法返回一个List集合，集合中存放的就是SpringSecurity中的过滤器。换言之，如果 matches 方法返回 true，那么 request 请求就会在 getFilters 方法返回的 Filter 集合中被处理。

`SecurityFilterChain` 只有一个默认的实现类就是 `DefaultSecurityFilterChain`，其中定义了两个属性，并具体实现了 SecurityFilterChain中的两个方法：



1. 首先声明了一个 `configurers` 变量，用来保存所有的配置类， key是配置类Class对象，值是一个List集合中放着配置类。
2. apply 方法有两个，参数类型略有差异，主要功能基本一致，都是向 configurers 变量中添加配置类，具体的添加过程则是调用 add 方法。
3. add 方法用来将所有的配置类保存 configurers 中，在添加的过程中，如果 allowConfigurersOfSameType 变量为 true，则表示允许相同类型的配置类存在，也就是 List 集合中可以存在多个相同类型的配置类。默认情况下，如果是普通配置类，allowConfigurersOfSameType 是 false，所以List集合中的配置类始终只有一个配置类；如果在 AuthenticationManagerBuilder 中设置 allowConfigurersOfSameType 为true，此时相同类型的配置类可以有多个
4. getConfigurers(Class<C>)方法可以从configurers中返回某一个配置类对应的所有实例。
5. removeConfigurers方法可以从configurers中移除某一个 配置类对应的所有实例，并返回被移除掉的配置类实例集合。
6. getConfigurer方法也是获取配置类实例，但是只获取集合 中第一项。
7. removeConfigurer方法可以从configurers中移除某一个配 置类对应的所有配置类实例，并返回被移除掉的配置类实例中的第一 项。
8. getConfigurers方法是一个私有方法，主要是把所有的配置 类实例放到一个集合中返回。在配置类初始化和配置的时候，会调用到 该方法

这些就是AbstractConfiguredSecurityBuilder中关于 configurers的所有操作。 

接下来就是AbstractConfiguredSecurityBuilder中的doBuild方 法了，这是核心的构建方法，我们一起来看一下与之相关的方法：

```java
@Override
protected final O doBuild() throws Exception {
	synchronized (configurers) {
		buildState = BuildState.INITIALIZING;

		beforeInit();
		init();

		buildState = BuildState.CONFIGURING;

		beforeConfigure();
		configure();

		buildState = BuildState.BUILDING;

		O result = performBuild();

		buildState = BuildState.BUILT;

		return result;
	}
}

protected void beforeInit() throws Exception {
}

protected void beforeConfigure() throws Exception {
}

protected abstract O performBuild() throws Exception;

@SuppressWarnings("unchecked")
private void init() throws Exception {
	Collection<SecurityConfigurer<O, B>> configurers = getConfigurers();

	for (SecurityConfigurer<O, B> configurer : configurers) {
		configurer.init((B) this);
	}

	for (SecurityConfigurer<O, B> configurer : configurersAddedInInitializing) {
		configurer.init((B) this);
	}
}

@SuppressWarnings("unchecked")
private void configure() throws Exception {
	Collection<SecurityConfigurer<O, B>> configurers = getConfigurers();

	for (SecurityConfigurer<O, B> configurer : configurers) {
		configurer.configure((B) this);
	}
}
```

1. 在doBuild方法中，一边更新构建状态，一边执行构建方 法。构建方法中，beforeInit是一个空的初始化方法，如果需要在初始 化之前做一些准备工作，可以通过重写该方法实现。
2. init方法是所有配置类的初始化方法，在该方法中，遍历所 有的配置类，并调用其init方法完成初始化操作。
3. beforeConfigure方法可以在configure方法执行之前做一些 准备操作。该方法默认也是一个空方法。
4. configure方法用来完成所有配置类的配置，在configure方 法中，遍历所有的配置类，分别调用其configure方法完成配置。
5. performBuild方法用来做最终的构建操作，前面的准备工作 完成后，最后在performBuild方法中完成构建，这是一个抽象方法， 具体的实现则在不同的配置类中。

这些就是AbstractConfiguredSecurityBuilder中最主要的几个方 法，其他一些方法比较简单，这里就不一一赘述了。

#### ProviderManagerBuilder

ProviderManagerBuilder继承自SecurityBuilder接口，并制定 了构建的对象是AuthenticationManager，代码如下：

```java
public interface ProviderManagerBuilder<B extends ProviderManagerBuilder<B>> extends SecurityBuilder<AuthenticationManager> {

	B authenticationProvider(AuthenticationProvider authenticationProvider);
}
```
可以看到，ProviderManagerBuilder中增加了一个 authenticationProvider方法，同时通过泛型指定了构建的对象为 AuthenticationManager。

#### AuthenticationManagerBuilder

AuthenticationManagerBuilder用来构建 AuthenticationManager对象，它继承自Abstract ConfiguredSecurityBuilder，并且实现了ProviderManagerBuilder 接口，源码比较长，我们截取部分常用代码，代码如下：

```java
public class AuthenticationManagerBuilder
		extends
		AbstractConfiguredSecurityBuilder<AuthenticationManager, AuthenticationManagerBuilder>
		implements ProviderManagerBuilder<AuthenticationManagerBuilder> {
	private final Log logger = LogFactory.getLog(getClass());

	private AuthenticationManager parentAuthenticationManager;
	private List<AuthenticationProvider> authenticationProviders = new ArrayList<>();
	private UserDetailsService defaultUserDetailsService;
	private Boolean eraseCredentials;
	private AuthenticationEventPublisher eventPublisher;

	public AuthenticationManagerBuilder(ObjectPostProcessor<Object> objectPostProcessor) {
		super(objectPostProcessor, true);
	}

	
	public AuthenticationManagerBuilder parentAuthenticationManager(
			AuthenticationManager authenticationManager) {
		if (authenticationManager instanceof ProviderManager) {
			eraseCredentials(((ProviderManager) authenticationManager)
					.isEraseCredentialsAfterAuthentication());
		}
		this.parentAuthenticationManager = authenticationManager;
		return this;
	}


	public InMemoryUserDetailsManagerConfigurer<AuthenticationManagerBuilder> inMemoryAuthentication()
			throws Exception {
		return apply(new InMemoryUserDetailsManagerConfigurer<>());
	}

	public JdbcUserDetailsManagerConfigurer<AuthenticationManagerBuilder> jdbcAuthentication()
			throws Exception {
		return apply(new JdbcUserDetailsManagerConfigurer<>());
	}

	public <T extends UserDetailsService> DaoAuthenticationConfigurer<AuthenticationManagerBuilder, T> userDetailsService(
			T userDetailsService) throws Exception {
		this.defaultUserDetailsService = userDetailsService;
		return apply(new DaoAuthenticationConfigurer<>(
				userDetailsService));
	}


	public AuthenticationManagerBuilder authenticationProvider(
			AuthenticationProvider authenticationProvider) {
		this.authenticationProviders.add(authenticationProvider);
		return this;
	}

	@Override
	protected ProviderManager performBuild() throws Exception {
		if (!isConfigured()) {
			logger.debug("No authenticationProviders and no parentAuthenticationManager defined. Returning null.");
			return null;
		}
		ProviderManager providerManager = new ProviderManager(authenticationProviders,
				parentAuthenticationManager);
		if (eraseCredentials != null) {
			providerManager.setEraseCredentialsAfterAuthentication(eraseCredentials);
		}
		if (eventPublisher != null) {
			providerManager.setAuthenticationEventPublisher(eventPublisher);
		}
		providerManager = postProcess(providerManager);
		return providerManager;
	}
}
```
1. 首先在AuthenticationManagerBuilder的构造方法中，调用了父类的构造方法，注意第二个参数传递了true，表示允许相同类型 的配置类同时存在（结合AbstractConfiguredSecurityBuilder的源码 来理解）。 
2. parentAuthenticationManager方法用来给一个 AuthenticationManager设置parent。
3. inMemoryAuthentication方法用来配置基于内存的数据 源，该方法会自动创建InMemoryUserDetailsManagerConfigurer配 置类，并最终将该配置类添加到父类的configurers变量中。由于设置 了允许相同类型的配置类同时存在，因此inMemoryAuthentication方 法可以反复调用多次。 
4. jdbcAuthentication以及userDetailsService方法与 inMemoryAuthentication方法类似，也是用来配置数据源的，这里不 再赘述。
5. authenticationProvider方法用来向 authenticationProviders集合中添加Authentication Provider对 象，根据前面第3章的介绍，我们已经知道一个 AuthenticationManager实例中包含多个AuthenticationProvider实 例，那么多个AuthenticationProvider实例可以通过authentication Provider方法进行添加。 
6. performBuild方法则执行具体的构建工作，常用的 AuthenticationManager实例就是ProviderManager，所以这里创建 ProviderManager对象，并且配置authenticationProviders和 parentAuthenticationManager对象，ProviderManager对象创建成 功之后，再去对象后置处理器中处理一遍再返回。这就是AuthenticationManagerBuilder中的一个大致逻辑。