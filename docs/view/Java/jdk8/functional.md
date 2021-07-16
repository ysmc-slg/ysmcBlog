---
title: 函数式接口
autoPrev: Lambda
---
## 概念
只包含一个抽象方法的接口，称为函数式接口。

函数式接口，即适用于函数式编程场景的接口。 而Java中的函数式编程体现就是Lambda，所以函数式接口就是可以适用于Lambda使用的接口。只有确保接口中有且仅有一个抽象方法，Java中的Lambda才能顺利地进行推导。

## 格式
```java
@FunctionalInterface
public interface MyFunctionalInterface {
    void myMethod();
}
```
::: tip 提示


1.  @FunctionalInterface注解只能标记在"有且仅有一个抽象方法"的接口上。
2.  JDK8接口中的静态方法和默认方法，都不算是抽象方法。
3.  接口默认继承java.lang.Object，所以如果接口显示声明覆盖了Object中方法，那么也不算抽象方法。
4.  @FunctionalInterface注解不是必须的，如果一个接口符合"函数式接口"定义，那么加不加该注解都没有影响。加上该注解能够更好地让编译器进行检查。如果编写的不是函数式接口，但是加上了@FunctionInterface，那么编译器会报错。

:::

## 系统内置常用的函数式接口
| 函数式接口          | 参数类型 | 返回类型  |  用途   |
| :-----------------:|:-------:| :--------:| :------:|
| `Consumer<T>`消费型 |    T    |   void   | 对类型为T的对象应用操作，包含方法：`void accept(T t)` |
| `Supplier<T>`供给型 |   无    |     T    | 对类型为T的对象，包含方法：`T get()` |
| `Function<T,R>`函数型|   T    |     R    | 对类型为T的对象应用操作，并返回结果。结果是R类型的对象。包含方法：`R apply(T t)` |
| `Predicate<T>`断定型 |   T    |  boolean | 确定类型为T的对象是否满足某约束，并返回boolean值。包含方法`boolean test(T t)` |

| 函数式接口          | 参数类型 | 返回类型  |  用途   |
| :-----------------:|:-------:| :--------:| :------:|
| BiFunction<T, U, R>| T,U | R | 对类型为 T, U 参数应用操作，返回 R 类型的结 果。包含方法为: R apply(T t, U u);|
| UnaryOperator (Function子接口) | T | T | 对类型为T的对象进行一元运算，并返回T类型的 结果。包含方法为:T apply(T t); |
| BinaryOperator (BiFunction 子接口)| T,T | T | 对类型为T的对象进行二元运算，并返回T类型的 结果。包含方法为: T apply(T t1, T t2); |
| BiConsumer<T, U> | T,U | void | 对类型为T, U 参数应用操作。 包含方法为: void accept(T t, U u)|
| BiPredicate<T,U> | T,U | bollean | 包含方法为: boolean test(T t,U u)|
| ToIntFunction< T > ToLongFunction< T > ToDoubleFunction< T > | T | int long double | 分别计算int、long、double值的函数|
| IntFunction< R > LongFunction< R > DoubleFunction< R > | int long double | R | 参数分别为int、long、double 类型的函数|




