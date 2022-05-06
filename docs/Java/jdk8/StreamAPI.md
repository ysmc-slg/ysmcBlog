---
description: StreamAPI
autoPrev: method-reference
---

# StreamAPI

## Stream说明
Java8中有两大最为重要的改变。第一个是 Lambda 表达式；另外一个则是 Stream API。

Stream 是 Java8 中处理集合的关键抽象概念，它可以指定你希望对集合进
行的操作，可以执行非常复杂的`查找`、`过滤`和`映射数据`等操作。 使用
Stream API 对集合数据进行操作，就类似于使用 SQL 执行的数据库查询。
也可以使用 Stream API 来并行执行操作。简言之，Stream API 提供了一种
高效且易于使用的处理数据的方式。

::: danger 注意

* Stream 自己不会存储元素。
* Stream 不会改变源对象。相反，他们会返回一个持有结果的新Stream。
* 惰性求值，流在中间处理过程中，只是对操作进行了记录，并不会立即执行，需要等到执行终止操作的时候才会进行实际的计算。

:::

## Stream操作的三个步骤
1. 创建 Stream
   
   一个数据源（如：集合、数组），获取一个流

2. 中间操作
   
   一个中间操作链，对数据源的数据进行处理
3. 终止操作(终端操作)
   
   一旦执行终止操作，就执行中间操作链，并产生结果。之后，不会再被使用

![流程图](/blogImg/Stream01.png)


