---
title: 代理
autoPrev: transaction
---

代理(Proxy)是一种设计模式,提供了对目标对象另外的访问方式;即通过代理对象访问目标对象.这样做的好处是:可以在目标对象实现的基础上,增强额外的功能操作,即扩展目标对象的功能.

ava当中有三种方式来创建代理对象：

1. 静态代理
2. 基于jdk(接口)的动态代理
3. 基于CGLLIB（父类）的动态代理。

## 静态代理

这里我们用一个订单的操作来进行演示：

首先创建一个订单的service接口，同时创建实现类

```java
public interface OrderService {
    /**
     * 生成订单
     */
    void generate();
    /**
     * 修改订单信息
     */
    void modify();
    /**
     * 查看订单详情
     */
    void detail();
}
```

```java
public class OrderServiceImpl implements OrderService {
    @Override
    public void generate() {
        System.out.println("订单以生成");
    }

    @Override
    public void modify() {
        System.out.println("订单已修改");
    }

    @Override
    public void detail() {
        System.out.println("查看订单详情");
    }
}
```

此时，我们想增加每一次订单方法的执行需要的时间功能，如果直接在 OrderServiceImpl 中写，就会对代码有侵入，此时我们用静态代理来做。

创建一个代理类，并且实现 OrderService 接口：

```java
public class OrderServiceProxy implements OrderService {

    private OrderService orderService;

    public OrderServiceProxy(OrderService orderService) {
        this.orderService = orderService;
    }

    @Override
    public void generate() {
        long l = System.currentTimeMillis();
        orderService.generate();

        long l1 = System.currentTimeMillis();

        System.out.println("生成订单消耗了"+ (l1-l) + "毫秒");
    }

    @Override
    public void modify() {
        long l = System.currentTimeMillis();
        orderService.modify();

        long l1 = System.currentTimeMillis();

        System.out.println("修改订单消耗了"+ (l1-l) + "毫秒");
    }

    @Override
    public void detail() {
        long l = System.currentTimeMillis();
        orderService.detail();

        long l1 = System.currentTimeMillis();

        System.out.println("查看订单消耗了"+ (l1-l) + "毫秒");
    }
}
```

这样做不会应该到 OrderServiceImpl 中的代码，最后调用的时候要使用代理对象去调用：

```java
public class OrderClient {
    public static void main(String[] args) {
        OrderService orderService = new OrderServiceImpl();

        OrderServiceProxy proxy = new OrderServiceProxy(orderService);

        proxy.generate();
        proxy.modify();
        proxy.detail();
    }
}
```

如果系统中业务接口很多，一个接口对应一个代理类，显然也是不合理的，会导致类爆炸。怎么解决这个问题？动态代理可以解决。因为在动态代理中可以在内存中动态的为我们生成代理类的字节码。代理类不需要我们写了。类爆炸解决了，而且代码只需要写一次，代码也会得到复用。

## 动态代理

### jdk 动态代理

还是一样创建一个订单的service接口，同时创建实现类

```java
public interface OrderService {

    String getName();
    /**
     * 生成订单
     */
    void generate();
    /**
     * 修改订单信息
     */
    void modify();
    /**
     * 查看订单详情
     */
    void detail();
}
```

```java
public class OrderServiceImpl implements OrderService {

    @Override
    public String getName() {
        return "张三";
    }

    @Override
    public void generate() {
        System.out.println("订单以生成");
    }

    @Override
    public void modify() {
        System.out.println("订单已修改");
    }

    @Override
    public void detail() {
        System.out.println("查看订单详情");
    }
}
```

上面我们还要创建一个代理类，此时就不需要了，在动态代理中UserServiceProxy代理类是可以动态生成的。这个类不需要写。我们直接写客户端程序即可：

```java
public class OrderClient {
    public static void main(String[] args) {
        OrderService target = new OrderServiceImpl();

        // 使用jdk动态代理
        OrderService orderService = (OrderService) Proxy.newProxyInstance(target.getClass().getClassLoader(),
                target.getClass().getInterfaces(),
                new TimeInvocationHandler(target));

        String name = orderService.getName();
        System.out.println(name);
    }
}
```

`Proxy.newProxyInstance()` 这行代码做了两件事：

1. 在内存中生成了代理类的字节码
2. 创建代理对象

`Proxy.newProxyInstance()` 有三个参数：

1. 第一个参数是类加载器，在内存中生成了字节码，要想执行这个字节码，也是需要先把这个字节码加载到内存当中的。所以要指定使用哪个类加载器加载。
2. 第二个参数是接口类型，代理类和目标类实现相同的接口，所以要通过这个参数告诉JDK动态代理生成的类要实现哪些接口。
3. 第三个参数是处理器`InvocationHandler`，就是在此接口的实现类中完成对代码的增强。

所以接下来我们要写一下java.lang.reflect.InvocationHandler接口的实现类，并且实现接口中的方法，代码如下：

```java
public class TimeInvocationHandler implements InvocationHandler {
    // 目标对象
    private Object target;

    // 通过构造方法来传目标对象
    public TimeInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        long begin = System.currentTimeMillis();

        // 调用目标方法的方法
        Object invoke = method.invoke(target, args);
        long end = System.currentTimeMillis();


        System.out.println("消耗了"+(end-begin)+"毫秒");

        return invoke;
    }
}
```

InvocationHandler接口中有一个方法invoke，这个invoke方法上有三个参数：

* 第一个参数：Object proxy。代理对象。设计这个参数只是为了后期的方便，如果想在invoke方法中使用代理对象的话，尽管通过这个参数来使用。
* 第二个参数：Method method。目标方法。
* 第三个参数：Object[] args。目标方法调用时要传的参数。

如果有返回值需要将 invoke 返回。

我们可以看到，不管你有多少个Service接口，多少个业务类，这个TimerInvocationHandler接口是不是只需要写一次就行了。

而且最重要的是，以后程序员只需要关注核心业务的编写了，像这种统计时间的代码根本不需要关注。因为这种统计时间的代码只需要在调用处理器中编写一次即可。到这里，JDK动态代理的原理就结束了。

**注意：**

需要注意的是，jdk动态代理只能代理接口，目标类一定要实现一个接口


### CGLIB 动态代理

CGLIB既可以代理接口，又可以代理类。底层采用继承的方式实现。所以被代理的目标类不能使用final修饰。

使用CGLIB，需要引入它的依赖：

```xml
<dependency>
  <groupId>cglib</groupId>
  <artifactId>cglib</artifactId>
  <version>3.3.0</version>
</dependency>
```

我们准备一个没有实现接口的类，如下：

```java
public class UserService {

    public void login(){
        System.out.println("用户正在登录系统....");
    }

    public void logout(){
        System.out.println("用户正在退出系统....");
    }
}
```

使用CGLIB在内存中为UserService类生成代理类，并创建对象：

```java
public class Client {
    public static void main(String[] args) {
        // 创建字节码增强器
        Enhancer enhancer = new Enhancer();
        // 告诉cglib要继承哪个类
        enhancer.setSuperclass(UserService.class);
        // 设置回调接口
        enhancer.setCallback(new TimerMethodInterceptor());
        // 生成源码，编译class，加载到JVM，并创建代理对象
        UserService userServiceProxy = (UserService)enhancer.create();

        userServiceProxy.login();
        userServiceProxy.logout();

    }
}
```

和JDK动态代理原理差不多，在`CGLIB`中需要提供的不是 `InvocationHandler`，而是：`net.sf.cglib.proxy.MethodInterceptor`

```java
public class TimerMethodInterceptor implements MethodInterceptor {
    @Override
    public Object intercept(Object target, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        // 前增强
        long begin = System.currentTimeMillis();
        // 调用目标
        Object retValue = methodProxy.invokeSuper(target, objects);
        // 后增强
        long end = System.currentTimeMillis();
        System.out.println("耗时" + (end - begin) + "毫秒");
        // 一定要返回
        return retValue;
    }
}

```

MethodInterceptor接口中有一个方法intercept()，该方法有4个参数：

* 第一个参数：目标对象
* 第二个参数：目标方法
* 第三个参数：目标方法调用时的实参
* 第四个参数：代理方法

