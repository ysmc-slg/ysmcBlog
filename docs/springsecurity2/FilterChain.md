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

