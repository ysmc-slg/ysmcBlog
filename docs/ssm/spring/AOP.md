---
description: AOP
autoPrev: Aware
---

# AOP

## 定义
Aop（Aspect Oriented Programming），面向切面编程，这是对，面向对象思想的一种补充。

面向切面编程，就是在程序运行时，不改变程序源码的情况下，动态的增强方法的功能，常见的使用场景非常多：

1. 日志
2. 事务
3. 数据库操作
4. .....

这些操作中无一例外，都有很多模板化的代码，而解决模板化代码，消除臃肿就是 `Aop` 的强项

在 `Aop` 中，有几个常见的概念：

|概念|说明|
|:----|:-----|
|切点|要添加代码的地方，称作切点|
|通知（增强）|通知就是向切点动态添加代码|
|切面|切点+通知|
|连接点|切点的定义|

## 五中通知

`Spring` 中 `Aop` 的通知类型有 5 中：
* 前置通知
* 后置通知
* 异常通知
* 返回通知
* 环绕通知

具体实现，给计算器的方法增强功能。首先，在项目中，引入 `Spring` 依赖。

```xml
 <dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.1.9.RELEASE</version>
    </dependency>

    <dependency>
        <groupId>org.aspectj</groupId>
        <artifactId>aspectjweaver</artifactId>
        <version>1.9.5</version>
    </dependency>

    <dependency>
        <groupId>org.aspectj</groupId>
        <artifactId>aspectjrt</artifactId>
        <version>1.9.5</version>
    </dependency>
</dependencies>
```

接下来，定义切点，这里介绍两种切点的定义方式：
1. 使用自定义注解
2. 使用规则

### 自定义注解
首先定义一个注解：
```java
@Target({ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Action {
}
```
然后再需要拦截的方法上，添加该注解，在 `add` 方法上添加了 `@Action` 注解，表示该方法将会被 `AOP` 拦截，而其他未添加该注解的方法则不收影响。

```java
@Service
public class MyCalculatorImpl  {
    @Action
    public int add(int a, int b) {
        return a+b;
    }

    public void min(int a, int b) {
        System.out.println(a + "-" + b + "=" + (a-b));
    }
}
```

接下来，定义增强

```java
@Component
@Aspect // 表示这是一个切面
public class LogAspect {

    /**
     * 前置通知
     * @param joinPoint 包含了目标方法的关键信息
     * @Before 注解表示这是一个前置通知，在目标方法执行之前执行，注解中需要填入切点
     */
    @Before(value = "@annotation(Action)")
    public void before(JoinPoint joinPoint){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方法开始执行了");
    }

    /**
     * 后置通知
     * @param joinPoint   包含了目标方法的关键信息
     * @After  表示这是一个后置通知，即在目标方法执行之后执行
     */
    @After("@annotation(Action)")
    public void after(JoinPoint joinPoint){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发执行结束了");
    }

    /**
     *
     * @param joinPoint
     * @AfterReturning 表示这是一个返回通知  
     */
    @AfterReturning(value = "@annotation(Action)", returning = "r")
    public void returning(JoinPoint joinPoint,Integer r){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发返回通知：" + r);
    }
}
```

**注意**：

前置，后置通知很好理解，主要讲一下返回通知。

返回通知：即`目标方法有返回值的时候才会触发`，<div style="color:red">该注解中的 `returning` 属性表示目标方法返回值的变量名，这个需要和下面`returning` 方法中的第二个参数一一对应，同时`returning`方法中参数的类型也要和目标方法的返回值类型一致</div>，否则拦截不到，如果想拦截所有(包括返回值为 void )，`returning` 方法中的参数返回值可以为 Object，此时返回值为 `void` 的返回的r是 `null`。



接下来是异常通知和环绕通知。

```java
@Component
@Aspect // 表示这是一个切面
public class LogAspect {

   /**
     * 异常通知
     * @param joinPoint
     * @param e 目标方法所抛出的异常，这个参数必须是目标方法所抛出的异常或者是所抛出异常的父类，*          只有这要，才会捕获。如果想拦截所有，参数类型声明为 Exception
     */
    @AfterThrowing(value = "@annotation(Action)",throwing = "e")
    public void afterThrowing(JoinPoint joinPoint,Exception e){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发抛异常了" + e.getMessage());
    }

    /**
     * 环绕通知
     * 环绕通知是集大成者，可以用环绕通知实现上面的四个通知，这个方法的核心有点类似于在这里通过反射执行方法
     * @param pjp
     * @return 这里的返回值类型最好是 Object，和拦截到的方法相匹配
     */
    @Around("@annotation(Action)")
    public Object around(ProceedingJoinPoint pjp){
        Object procceed = null;
        try {
            // 这个相当于 method.invoke 方法，我们可以在这个方法的前后分别添加日志，就相当于是前置/后置通知
            procceed = pjp.proceed();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        
        return procceed;
    }
}
```

通知定义完成后，接下来在配置类中，开启包扫描和自动代理
```java
@Configuration
@ComponentScan
// 开启自动代理
@EnableAspectJAutoProxy
public class JavaConfig {
}
```

然后在 Main 方法中，开启调用

```java
public class JavaMain {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(JavaConfig.class);
        MyCalculatorImpl bean = ctx.getBean(MyCalculatorImpl.class);

        bean.add(3, 4);
        bean.min(3,4);
    }
}
```

再回顾 `LogAspect` 切面，我们发现，切点的定义不够灵活，之前的切点是直接写在注解里面的，这样，如果要修改切点，每个方法上都要修改，因此，我们可以将切点统一定义，然后统一调用。

```java
@Component
// 表示这是一个切面
@Aspect
public class LogAspect {
    
    /**
    * 统一定义切点
    */
    @Pointcut("@annotation(Action)")
    public void pointcut(){
        
    }

    /**
     *
     * @param joinPoint 包含了目标方法的关键信息
     * @Before 注解表示这是一个前置通知，在目标方法执行之前执行，注解中需要填入切点
     */
    @Before(value = "pointcut()")
    public void before(JoinPoint joinPoint){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方法开始执行了");
    }
}
```

### 使用规则
使用注解是侵入式的，需要在源码上加注解，我们还可以继续优化，改为非侵入式的。重新定义切点，新切点的定义就不需要 `@Action` 注解了，要拦截的目标方法上也不用添加 `@Action` 注解。下面这种方式是更为通用的拦截方式：

去掉MyCalculatorImpl 方法上的 `@Action` 注解
```java
@Component
// 表示这是一个切面
@Aspect
public class LogAspect2 {

    /**
     * 统一定义切点
     *
     * 第一个 * 表示要拦截的目标方法返回值任意(也可以明确指定返回值类型)
     * 第二个 * 表示包中的任意类（也可以明确指定类）
     * 第三个 * 表示类中的任意方法
     * 最后两个点表示方法任意参数，个数任意，类型任意
     */
    @Pointcut("execution(* top.zxqs.service.*.*(..))")
    public void pointcut(){

    }

    /**
     *
     * @param joinPoint 包含了目标方法的关键信息
     * @Before 注解表示这是一个前置通知，在目标方法执行之前执行，注解中需要填入切点
     */
    @Before(value = "pointcut()")
    public void before(JoinPoint joinPoint){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方法开始执行了");
    }

    /**
     *
     * @param joinPoint
     */
    @After("pointcut()")
    public void after(JoinPoint joinPoint){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发执行结束了");
    }

    /**
     *
     * @param joinPoint
     * @param r
     */
    @AfterReturning(value = "pointcut()", returning = "r")
    public void returning(JoinPoint joinPoint,Integer r){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发返回通知：" + r);
    }

    /**
     *
     * @param joinPoint
     * @param e
     */
    @AfterThrowing(value = "pointcut()",throwing = "e")
    public void afterThrowing(JoinPoint joinPoint,Exception e){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发抛异常了" + e.getMessage());
    }

    /**
     *
     * @param pjp
     * @return
     */
    @Around("pointcut()")
    public Object around(ProceedingJoinPoint pjp){
        Object procceed = null;
        try {
            procceed = pjp.proceed();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }

        return procceed;
    }
}

```



XML 配置 AOP

定义通知/增强，只是单纯定义自己的行为即可，不在需要注解：

```java
public class LogAspect2 {


    public void before(JoinPoint joinPoint){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方法开始执行了");
    }

   
    public void after(JoinPoint joinPoint){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发执行结束了");
    }

   
    public void returning(JoinPoint joinPoint,Integer r){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发返回通知：" + r);
    }

 
    public void afterThrowing(JoinPoint joinPoint,Exception e){
        Signature signature = joinPoint.getSignature();
        String name = signature.getName();
        System.out.println(name + "方发抛异常了" + e.getMessage());
    }

   
    public Object around(ProceedingJoinPoint pjp){
        Object procceed = null;
        try {
            procceed = pjp.proceed();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }

        return procceed;
    }
}
```

接下来在 `xml` 中配置 Aop：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">
    
    <bean class="top.zxqs.LogAspect" id="logAspect"/>
    
    <aop:config>
        <!-- 拦截规则 -->
        <aop:pointcut id="pc1" expression="execution(* top.zxqs.service.*.*(..))"/>
        <bean class="top.zxqs.service.MyCalculatorImpl" id="myCalculator"/>

        <aop:aspect ref="logAspect">
            <!--method就是类中的方法-->
            <aop:before method="before" pointcut-ref="pc1"/>
            <aop:after method="after" pointcut-ref="pc1"/>
            <aop:after-returning method="returning" pointcut-ref="pc1" returning="r"/>
            <aop:after-throwing method="afterThrowing" pointcut-ref="pc1" throwing="e"/>
            <aop:around method="around" pointcut-ref="pc1"/>
        </aop:aspect>
    </aop:config>
</beans>
```

最后，在 `Main` 方法中加载配置文件：

```java
public class JavaMain {
    public static void main(String[] args) {

        ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");

        MyCalculatorImpl bean = ctx.getBean(MyCalculatorImpl.class);

        bean.add(1,2);
    }
}
```

### 通知方法的参数

**1. JoinPoint**

提供访问当前被通知方法的目标对象、代理对象、方法参数等数据，`任何通知方法的第一个参数都可以是 JoinPoint（环绕通知是ProceedingJoinPoint，JoinPoint子类）`，具体方法如下：

::: tip

String toString();                     //连接点所在位置的相关信息  

String toShortString();                //连接点所在位置的简短相关信息

String toLongString();                 //连接点所在位置的全部相关信息  

Object getThis();                      //返回AOP代理对象  

Object getTarget();                    //返回目标对象，就是注解所在的类的实例  

Object[] getArgs();                    //返回被通知方法参数列表，也就是注解所在方法的参数  

Signature getSignature();              //返回当前连接点签名，就是返回值+ 方法名，void top.zxqs.aop_demo.LogController.test2()  

SourceLocation getSourceLocation();    //返回连接点方法所在类文件中的位置  

String getKind();                      //连接点类型  

StaticPart getStaticPart();            //返回连接点静态部分  

:::

最主要的是 `getTarget` 和 `getSignature`

```java
@Aspect
@Component
public class LogAspect {

    @Pointcut("@annotation(Log)")
    public void pointCut(){

    }

    @Before(value = "pointCut()")
    public void doBefore(JoinPoint joinPoint) throws NoSuchMethodException {

        System.out.println("joinPoint.toString() = " + joinPoint.toString());
        System.out.println("joinPoint.toShortString() = " + joinPoint.toShortString());
        System.out.println("joinPoint.toLongString() = " + joinPoint.toLongString());
        System.out.println("joinPoint.getThis() = " + joinPoint.getThis().toString());
        System.out.println("joinPoint.getTarget() = " + joinPoint.getTarget());
        System.out.println("joinPoint.getArgs() = " + joinPoint.getArgs().toString());
        System.out.println("joinPoint.getSignature() = " + joinPoint.getSignature());
        System.out.println("joinPoint.getSourceLocation() = " + joinPoint.getSourceLocation());
        System.out.println("joinPoint.getKind() = " + joinPoint.getKind());
        System.out.println("joinPoint.getStaticPart() = " + joinPoint.getStaticPart());

        System.out.println("---------------------------------------------------------------");

        Signature signature = joinPoint.getSignature();
        System.out.println("signature.getName() = " + signature.getName());
        System.out.println("signature.toLongString() = " + signature.toLongString());
        System.out.println("signature.getDeclaringTypeName() = " + signature.getDeclaringTypeName());
        System.out.println("signature.getDeclaringType() = " + signature.getDeclaringType());
        System.out.println("signature.toShortString() = " + signature.toShortString());
        System.out.println("signature.getModifiers() = " + signature.getModifiers());

        System.out.println("---------------------------------------------------------------");


        // 获取方法上的注解 @Log(title = "测试2",businessType = "查询2")
        MethodSignature signature1 = (MethodSignature) joinPoint.getSignature();
        Method method = signature1.getMethod();
        Log log = method.getAnnotation(Log.class);
        // 获取注解的参数
        String title = log.title();

        System.out.println(title);

        Object[] args = joinPoint.getArgs();

        for(Object object: args){
            System.out.println(object);
        }


    }
}
```

测试代码：


```java
@RestController
public class LogController {

    @Log(title = "测试",businessType = "查询")
    @RequestMapping("/test")
    public void test(String username,int age){
    }

    @Log(title = "测试2",businessType = "查询2")
    @RequestMapping("/test2")
    public void test2(String username,int age){
    }
}
```

结果：

```test
joinPoint.toString() = execution(void top.zxqs.aop_demo.LogController.test(String,int))
joinPoint.toShortString() = execution(LogController.test(..))
joinPoint.toLongString() = execution(public void top.zxqs.aop_demo.LogController.test(java.lang.String,int))
joinPoint.getThis() = top.zxqs.aop_demo.LogController@1bc6d990
joinPoint.getTarget() = top.zxqs.aop_demo.LogController@1bc6d990
joinPoint.getArgs() = [Ljava.lang.Object;@578ffc0e
joinPoint.getSignature() = void top.zxqs.aop_demo.LogController.test(String,int)
joinPoint.getSourceLocation() = org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint$SourceLocationImpl@5948088f
joinPoint.getKind() = method-execution
joinPoint.getStaticPart() = execution(void top.zxqs.aop_demo.LogController.test(String,int))
---------------------------------------------------------------
signature.getName() = test
signature.toLongString() = public void top.zxqs.aop_demo.LogController.test(java.lang.String,int)
signature.getDeclaringTypeName() = top.zxqs.aop_demo.LogController
signature.getDeclaringType() = class top.zxqs.aop_demo.LogController
signature.toShortString() = LogController.test(..)
signature.getModifiers() = 1
---------------------------------------------------------------
测试
zhangsan
18
```

**2. ProceedingJoinPoint**

用于环绕通知，使用proceed()方法来执行目标方法：

::: tip

 public Object proceed() throws Throwable;  
 public Object proceed(Object[] args) throws Throwable;  

:::

### AOP 失效的场景

1. 只能通过public修饰方法，不能用private等修饰
2. 如果同一个类中，没有注解的方法调用有注解的方法，aop也会失效。因为 aop 是通过动态代理来实现的，所以要通过动态代理去调用aop方法。
   首先要添加 `@EnableAspectJAutoProxy(exposeProxy = true)` 注解暴露该代理对象，然后使用 `AopContext.currentProxy()` 获取该类的代理对象



