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

只能有一个抽象方法，可以有静态或默认方法。

@FunctionalInterface：可加可不加，加上之后如果有多个抽象方法会报错。不加有多个抽象方法就不会报错，当然这时接口就不是函数式接口了。

:::