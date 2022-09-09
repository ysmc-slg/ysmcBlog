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

```java
public final class DefaultSecurityFilterChain implements SecurityFilterChain {
	private static final Log logger = LogFactory.getLog(DefaultSecurityFilterChain.class);
	private final RequestMatcher requestMatcher;
	private final List<Filter> filters;

	public DefaultSecurityFilterChain(RequestMatcher requestMatcher, Filter... filters) {
		this(requestMatcher, Arrays.asList(filters));
	}

	public DefaultSecurityFilterChain(RequestMatcher requestMatcher, List<Filter> filters) {
		logger.info("Creating filter chain: " + requestMatcher + ", " + filters);
		this.requestMatcher = requestMatcher;
		this.filters = new ArrayList<>(filters);
	}

	public RequestMatcher getRequestMatcher() {
		return requestMatcher;
	}

	public List<Filter> getFilters() {
		return filters;
	}

	public boolean matches(HttpServletRequest request) {
		return requestMatcher.matches(request);
	}

	@Override
	public String toString() {
		return "[ " + requestMatcher + ", " + filters + "]";
	}
}
```

可以看到，在 DefaultSecurityFilterChain 的构造方法中，需要传入两个对象，一个是请求匹配器 requestMatcher，另一个则是过滤器集合或者过滤器filters。这个实现类比较简单，这里就不再赘述了。

**注意：**

需要注意的是，在一个 SpringSecurity 项目中，SecurityFilterChain 的实例可能会有多个，我们后面会详细分析，并演示多个SecurityFilterChain 实例的情况。

### SecurityBuilder

SpringSecurity 中所有需要构建的对象都可以通过SecurityBuilder 来实现，默认的过滤器链、代理过滤器、AuthenticationManager 等，都可以通过 SecurityBuilder 来构建。

SecurityBuilder 的实现类如图 4-2 所示。

![4-2](https://img.zxqs.top/20220908130244.png)

我们先来看 SecurityBuilder 的源码：

```java
public interface SecurityBuilder<O> {

	O build() throws Exception;
}
```

SecurityBuilder 中只有一个 build 方法，就是对象构建方法，即使对象构建方法。build 方法的返回值，就是具体构建的对象泛型O，也就是说不同的 SecurityBuilder 将来会构建不同的对象。

#### HttpSecurityBuilder

HttpSecurityBuilder 是用来构建 HttpSecurity 对象的，HttpSecurityBuildder 的定义如下：

```java
public interface HttpSecurityBuilder<H extends HttpSecurityBuilder<H>> extends SecurityBuilder<DefaultSecurityFilterChain> {

	<C extends SecurityConfigurer<DefaultSecurityFilterChain, H>> C getConfigurer(Class<C> clazz);
	<C extends SecurityConfigurer<DefaultSecurityFilterChain, H>> C removeConfigurer(Class<C> clazz);
	<C> void setSharedObject(Class<C> sharedType, C object);
	<C> C getSharedObject(Class<C> sharedType);
	H authenticationProvider(AuthenticationProvider authenticationProvider);
	H userDetailsService(UserDetailsService userDetailsService) throws Exception;
	H addFilterAfter(Filter filter, Class<? extends Filter> afterFilter);
	H addFilterBefore(Filter filter, Class<? extends Filter> beforeFilter);
	H addFilter(Filter filter);
}
```

1. HttpSecurityBuilder 对象本身定义时就有一个泛型，这个泛型是 `HttpSecurityBuilder` 的子类，由于默认情况下 HttpSecurityBuilder 的实现类只有一个 HttpSecurity，所以可以暂且把接口中的 H 都当成 HttpSecurity 来理解。
2. HttpSecurityBuilder 继承自 SecurityBuilder 接口，同时也指定了 SecurityBuilder 中的泛型为 DefaultSecurityFilterChain，也就是说，HttpSecurityBuilder 最终想要构建的对象是DefaultSecurityFilterChain。
3. getConfigurer 方法用来获取一个配置器，所谓的配置器就是 xxxConfigurer，
4. removeConfigurer方法用来移除一个配置器（相当于从 SpringSecurity 过滤器链中移除一个过滤器）
5. setSharedObject/getSharedObject 这两个方法用来设置或者获取一个可以在多个配置器之间共享的对象。
6. authenticationProvider 方法可以用来配置一个认证器 AuthenticationProvider
7. userDetailsService 方法可以用来配置一个数据源 UserDetailsService。
8. addFilterAfter/addFilterBefore 方法表示在某一个过滤器之后或者之前添加一个自定义的过滤器
9. addFilter 方法可以添加一个过滤器，这个过滤器必须是 SpringSecurity 框架提供的过滤器的一个实例或者扩展，添加完成后，会自动进行过滤器的排序。

#### AbstractSecurityBuilder

AbstractSecurityBuilder 实现了 SecurityBuilder 接口，并对build做了完善，并对build做了完善，确保只Build。我们来看一下 AbstractSecurityBuilder 源码：


```java
public abstract class AbstractSecurityBuilder<O> implements SecurityBuilder<O> {
	private AtomicBoolean building = new AtomicBoolean();

	private O object;

	public final O build() throws Exception {
		if (this.building.compareAndSet(false, true)) {
			this.object = doBuild();
			return this.object;
		}
		throw new AlreadyBuiltException("This object has already been built");
	}

	public final O getObject() {
		if (!this.building.get()) {
			throw new IllegalStateException("This object has not been built");
		}
		return this.object;
	}

	protected abstract O doBuild() throws Exception;
}
```
由上述代码可以看到，在AbstractSecurityBuilder类中：

1. 首先声明了 building 变量，可以确保即使在多线程环境下，配置类也只构建一次。
2. 对 build 方法进行重写，并且设置为 final，这样AbstractSecurityBuilder的子类中将不能再次重写build方法。在build方法内部，通过 building 变量来控制配置类只构建一次，具体的构建工作则交给 doBuild 方法去完成。
3. getObject 方法用来返回构建的对象。
4. doBuild方法则是具体的构建方法，该方法在 AbstractSecurityBuilder中是一个抽象方法，具体的实现在其子类中。

一言以蔽之，AbstractSecurityBuilder的作用是确保目标对象只 被构建一次。

#### AbstractConfiguredSecurityBuilder

`AbstractConfiguredSecurityBuilder` 类的源码就稍微长一点，我 们分别来看。

首先在 `AbstractConfiguredSecurityBuilder` 中声明了一个枚举类，用来描述构建过程的不同状态：

```java
private enum BuildState {
		
  UNBUILT(0),
  INITIALIZING(1),
  CONFIGURING(2),
  BUILDING(3),
  BUILT(4);
  private final int order;
  BuildState(int order) {
    this.order = order;
  }

  public boolean isInitializing() {
    return INITIALIZING.order == order;
  }

  public boolean isConfigured() {
    return order >= CONFIGURING.order;
  }
}
```

可以看到，整个构建过程一共有五种不同的状态：

1. UNBUILT：配置类构建前。
2. INITIALIZING：初始化中（初始化完成之前是这个状态）
3. CONFIGURING：配置中（开始构建之前是这个状态）
4. BUILDING：构建中
5. BUILT：构建完成

这个枚举类里边还提供了两个判断方法，`isInitializing` 表示是否正在初始化中，`isConfigured` 方法表示是否已完成配置。

AbstractConfiguredSecurityBuilder 中还声明了 configurers 变量，用来保存所有的配置类。针对 configurers 变量，我们可以进行添加配置、移除配置等操作，相关方法如下：

```java
public abstract class AbstractConfiguredSecurityBuilder<O, B extends SecurityBuilder<O>>
		extends AbstractSecurityBuilder<O> {
	private final Log logger = LogFactory.getLog(getClass());

	private final LinkedHashMap<Class<? extends SecurityConfigurer<O, B>>, List<SecurityConfigurer<O, B>>> configurers = new LinkedHashMap<>();
	private final List<SecurityConfigurer<O, B>> configurersAddedInInitializing = new ArrayList<>();

	private final Map<Class<?>, Object> sharedObjects = new HashMap<>();

	private final boolean allowConfigurersOfSameType;

	private BuildState buildState = BuildState.UNBUILT;

	private ObjectPostProcessor<Object> objectPostProcessor;

	protected AbstractConfiguredSecurityBuilder(
			ObjectPostProcessor<Object> objectPostProcessor) {
		this(objectPostProcessor, false);
	}

	protected AbstractConfiguredSecurityBuilder(
			ObjectPostProcessor<Object> objectPostProcessor,
			boolean allowConfigurersOfSameType) {
		Assert.notNull(objectPostProcessor, "objectPostProcessor cannot be null");
		this.objectPostProcessor = objectPostProcessor;
		this.allowConfigurersOfSameType = allowConfigurersOfSameType;
	}


	public O getOrBuild() {
		if (isUnbuilt()) {
			try {
				return build();
			}
			catch (Exception e) {
				logger.debug("Failed to perform build. Returning null", e);
				return null;
			}
		}
		else {
			return getObject();
		}
	}


	@SuppressWarnings("unchecked")
	public <C extends SecurityConfigurerAdapter<O, B>> C apply(C configurer)
			throws Exception {
		configurer.addObjectPostProcessor(objectPostProcessor);
		configurer.setBuilder((B) this);
		add(configurer);
		return configurer;
	}


	public <C extends SecurityConfigurer<O, B>> C apply(C configurer) throws Exception {
		add(configurer);
		return configurer;
	}


	@SuppressWarnings("unchecked")
	public <C> void setSharedObject(Class<C> sharedType, C object) {
		this.sharedObjects.put(sharedType, object);
	}

	
	@SuppressWarnings("unchecked")
	public <C> C getSharedObject(Class<C> sharedType) {
		return (C) this.sharedObjects.get(sharedType);
	}

	
	public Map<Class<?>, Object> getSharedObjects() {
		return Collections.unmodifiableMap(this.sharedObjects);
	}


	@SuppressWarnings("unchecked")
	private <C extends SecurityConfigurer<O, B>> void add(C configurer) {
		Assert.notNull(configurer, "configurer cannot be null");

		Class<? extends SecurityConfigurer<O, B>> clazz = (Class<? extends SecurityConfigurer<O, B>>) configurer
				.getClass();
		synchronized (configurers) {
			if (buildState.isConfigured()) {
				throw new IllegalStateException("Cannot apply " + configurer
						+ " to already built object");
			}
			List<SecurityConfigurer<O, B>> configs = allowConfigurersOfSameType ? this.configurers
					.get(clazz) : null;
			if (configs == null) {
				configs = new ArrayList<>(1);
			}
			configs.add(configurer);
			this.configurers.put(clazz, configs);
			if (buildState.isInitializing()) {
				this.configurersAddedInInitializing.add(configurer);
			}
		}
	}


	@SuppressWarnings("unchecked")
	public <C extends SecurityConfigurer<O, B>> List<C> getConfigurers(Class<C> clazz) {
		List<C> configs = (List<C>) this.configurers.get(clazz);
		if (configs == null) {
			return new ArrayList<>();
		}
		return new ArrayList<>(configs);
	}

	
	@SuppressWarnings("unchecked")
	public <C extends SecurityConfigurer<O, B>> List<C> removeConfigurers(Class<C> clazz) {
		List<C> configs = (List<C>) this.configurers.remove(clazz);
		if (configs == null) {
			return new ArrayList<>();
		}
		return new ArrayList<>(configs);
	}

	@SuppressWarnings("unchecked")
	public <C extends SecurityConfigurer<O, B>> C getConfigurer(Class<C> clazz) {
		List<SecurityConfigurer<O, B>> configs = this.configurers.get(clazz);
		if (configs == null) {
			return null;
		}
		if (configs.size() != 1) {
			throw new IllegalStateException("Only one configurer expected for type "
					+ clazz + ", but got " + configs);
		}
		return (C) configs.get(0);
	}

	@SuppressWarnings("unchecked")
	public <C extends SecurityConfigurer<O, B>> C removeConfigurer(Class<C> clazz) {
		List<SecurityConfigurer<O, B>> configs = this.configurers.remove(clazz);
		if (configs == null) {
			return null;
		}
		if (configs.size() != 1) {
			throw new IllegalStateException("Only one configurer expected for type "
					+ clazz + ", but got " + configs);
		}
		return (C) configs.get(0);
	}

	@SuppressWarnings("unchecked")
	public O objectPostProcessor(ObjectPostProcessor<Object> objectPostProcessor) {
		Assert.notNull(objectPostProcessor, "objectPostProcessor cannot be null");
		this.objectPostProcessor = objectPostProcessor;
		return (O) this;
	}

	protected <P> P postProcess(P object) {
		return this.objectPostProcessor.postProcess(object);
	}

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

	private Collection<SecurityConfigurer<O, B>> getConfigurers() {
		List<SecurityConfigurer<O, B>> result = new ArrayList<>();
		for (List<SecurityConfigurer<O, B>> configs : this.configurers.values()) {
			result.addAll(configs);
		}
		return result;
	}
}
```