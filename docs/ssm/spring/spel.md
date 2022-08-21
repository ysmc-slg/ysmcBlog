---
title: spel 表达式
autoPrev: AOP
---
# spel 表达式

## 概念

Spring表达式语言全称为“Spring Expression Language”，缩写为“SpEL”，类似于Struts2x中使用的OGNL表达式语言，能在运行时构建复杂表达式、存取对象图属性、对象方法调用等等，并且能与Spring功能完美整合，如能用来配置Bean定义。

表达式语言给静态Java语言增加了动态功能。

`SpEL是单独模块，只依赖于core模块，不依赖于其他模块，可以单独使用。`

SpEL 支持如下表达式：

1. 基本表达式： 字面量表达式、关系，逻辑与算数运算表达式、字符串连接及截取表达式、三目运算及Elivis表达式、正则表达式、括号优先级表达式；
2. 类相关表达式： 类类型表达式、类实例化、instanceof表达式、变量定义及引用、赋值表达式、自定义函数、对象属性存取及安全导航表达式、对象方法调用、Bean引用；
3. 集合相关表达式： 内联List、内联数组、集合，字典访问、列表，字典，数组修改、集合投影、集合选择；不支持多维内联数组初始化；不支持内联字典定义；
4. 其他表达式：模板表达式。


**注：SpEL表达式中的关键字是不区分大小写的。**

## 基础

### HelloWorld

首先创建一个 springboot 工程，添加springweb 依赖。

SpEL在求表达式值时一般分为四步，其中第三步可选：首先构造一个解析器，其次解析器解析字符串表达式，在此构造上下文，最后根据上下文得到表达式运算后的值。

```java
@SpringBootTest
class SpelDemoApplicationTests {

    @Test
    public void test1() {
        ExpressionParser parser = new SpelExpressionParser();
        Expression expression = parser.parseExpression("('Hello' + ' World').concat(#end)");
        EvaluationContext context = new StandardEvaluationContext();
        context.setVariable("end", "!");
        System.out.println(expression.getValue(context));
    }

}
```

输出：
```text
Hello World!
```

1. 创建解析器：SpEL使用 `ExpressionParser` 接口表示解析器，提供 `SpelExpressionParser` 默认实现；
2. 解析表达式：使用 `ExpressionParser` 的 `parseExpression` 来解析相应的表达式为 `Expression` 对象。
3. 构造上下文：准备比如变量定义等等表达式需要的上下文数据。
4. 求值：通过Expression接口的getValue方法根据上下文获得表达式值。

## 获取类中的属性

首先创建一个 user 类。

```java
public class User {

    private Integer id;
    private String username;
    private String address;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
```

获取 user 类的 `username` 属性。

```java
@Test
void test(){
    // 这个表达式的含义表示调用user对象中的username属性
    String exp = "#user.username";

    SpelExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression(exp);

    User user = new User();
    user.setId(1);
    user.setUsername("zxq");
    user.setAddress("济南");
    // 创建上下文环境并设置值
    StandardEvaluationContext context = new StandardEvaluationContext();
    context.setVariable("user",user);

    String value = expression.getValue(context, String.class);

    System.out.println("value = " + value);
}
```

expression.getValue：第一个参数是上下文对象，第二个参数是返回值的类型。

`#user` 要对应 `context.setVariable` 的第一个参数，表达式也可以不写`#user` 直接写要获取的属性，代码如下

```java
@Test
void test2(){
    // 这个表达式的含义表示调用user对象中的username属性
    String exp = "username";

    SpelExpressionParser parser = new SpelExpressionParser();
    Expression expression = parser.parseExpression(exp);

    User user = new User();
    user.setId(1);
    user.setUsername("zxq");
    user.setAddress("济南");
    // 创建上下文环境并设置值
    StandardEvaluationContext context = new StandardEvaluationContext();
    context.setRootObject(user);

    String value = expression.getValue(context, String.class);

    System.out.println("value = " + value);
}
```

此时在设置上下文是需要调用 `context.setRootObject` 将 user 设置为 `RootObject`，这样机会直接获取user 对象中的 username 属性。

## 调用类中的方法

```java
public class UserService {

    public String sayhello(String username){
        return username;
    }
}
```

```java
@Test
void test3(){
    String exp = "#us.sayhello(\"zxq\")";
    SpelExpressionParser parser = new SpelExpressionParser();
    // 解析
    Expression expression = parser.parseExpression(exp);

    // 创建上下文环境并设置值
    StandardEvaluationContext context = new StandardEvaluationContext();
    UserService us = new UserService();
    context.setVariable("us",us);

    String value = expression.getValue(context, String.class);

    System.out.println("value = " + value);
}
```

同样也可以不写 `#us`。

```java
@Test
void test3(){
    String exp = "sayhello(\"zxq\")";
    SpelExpressionParser parser = new SpelExpressionParser();
    // 解析
    Expression expression = parser.parseExpression(exp);

    // 创建上下文环境并设置值
    StandardEvaluationContext context = new StandardEvaluationContext();
    UserService us = new UserService();
    context.setRootObject(us);

    String value = expression.getValue(context, String.class);

    System.out.println("value = " + value);
}
```

## Bean 引用


首先创建一个类，交给spring容器管理

```java
@Service("bs")
public class BookService {
    public String sayHello(){
        return "这是一本好书";
    }
}
```

```java
@SpringBootTest
class SpelDemoApplicationTests {

    @Autowired
    BeanFactory beanFactory;

    @Test
    void test4(){
        String exp = "@bs.sayHello()";
        SpelExpressionParser parser = new SpelExpressionParser();
        // 解析
        Expression expression = parser.parseExpression(exp);

        // 创建上下文环境并设置值
        StandardEvaluationContext context = new StandardEvaluationContext();
        context.setBeanResolver(new BeanFactoryResolver(beanFactory));

        String value = expression.getValue(context, String.class);

        System.out.println("value = " + value);
    }

}
```
SpEL支持使用“@”符号来引用Bean，在引用Bean时需要使用BeanResolver接口实现来查找Bean，Spring提供BeanFactoryResolver实现。

`@bs` bs 为 Bean 的名称

