---
title: 日期和时间
autoPrev: StreamAPI
---

Java 8通过发布新的Date-Time API (JSR 310)来进一步加强对日期与时间的处理。在旧版的 Java 中，日期时间 API 存在诸多问题，其中有：

* 非线程安全 − java.util.Date 是非线程安全的，所有的日期类都是可变的，这是Java日期类最大的问题之一。
* 设计很差 − Java的日期/时间类的定义并不一致，在java.util和java.sql的包中都有日期类，此外用于格式化和解析的类在java.text包中定义。java.util.Date同时包含日期和时间，而java.sql.Date仅包含日期，将其纳入java.sql包并不合理。另外这两个类都有相同的名字，这本身就是一个非常糟糕的设计。
* 时区处理麻烦 − 日期类并不提供国际化，没有时区支持，因此Java引入了java.util.Calendar和java.util.TimeZone类，但他们同样存在上述所有的问题

故此，Java8引入了一套全新的日期时间处理API，新的API基于ISO标准日历系统。

## LocalDateTime

主要有三个类，`LocalDate`，`LocalTime`，`LocalDateTime`。

::: tip

LocalDate：获取日期

LocalTime：获取时间

LocalDateTime：获取日期和时间

:::

```java
@Test
public void test(){
    // 获取当年日期和时间 
    LocalDateTime now = LocalDateTime.now();
    System.out.println(now);

    // 获取当前日期
    LocalDate now1 = LocalDate.now();
    System.out.println(now1);

    // 获取当前时间
    LocalTime now2 = LocalTime.now();
    System.out.println(now2);

    // 指定日期和时间，LocalDate和LocalTime也有of方法，这里就不演示了。
    LocalDateTime of = LocalDateTime.of(2021, 7, 21, 10, 32, 12);
}
```

```java
结果：
2021-07-22T21:27:42.851
2021-07-22
21:27:42.852
2021-07-21T10:32:12
```

还可以对日期和时间进行运算

```java
public void test(){
    LocalDateTime now = LocalDateTime.now();
    LocalDate now1 = LocalDate.now();

    // 加两年，也会返回一个LocalDateTime，不会直接修改now
    LocalDateTime localDateTime = now.plusYears(2);
    System.out.println(localDateTime);

    // 减两个月
    LocalDate localDate1 = now1.minusMonths(2);
    System.out.println(localDate1);
}

```java
结果：
2023-07-22T21:34:12.175
2021-05-22
```

获取年月日

```java
@Test
public void test(){
    LocalDateTime now = LocalDateTime.now();
    
    // 年
    System.out.println(now.getYear());
    // 月
    System.out.println(now.getMonthValue());
    // 一月中的第几天，也就是 日
    System.out.println(now.getDayOfMonth());
    // 时
    System.out.println(now.getHour());
    // 分
    System.out.println(now.getMinute());
    // 秒
    System.out.println(now.getSecond());
}

结果：
2021
7
22
21
37
16
```
以上方法只是其中的一些，在`LocalDate`，`LocalTime`，`LocalDateTime`中这些方法基本都是通用的。只有个别是例外。比如`LocalTime`本身就是是时间，所以就没有获取年月日的方法。

以下是整理的常用的一些方法。


| 方法 | 返回值 | 那些类中有 | 用途 | 使用方法 |
|:----:|:----:|:----------:|:-----:|:-------:|
| now () | `LocalDate`，`LocalTime`，`LocalDateTime` | 三个类中都有 | 获取当前日期，时间，日期和时间 | 类名.now() |
| of () | `LocalDate`，`LocalTime`，`LocalDateTime` | 都有 | 构造指定的日期，时间，日期和时间 | 类名.of() |
| equals(Object object) | boolean | 都有 | 比较两个日期是否相等 | 对象.equals(对象) |
| plusYears(long years) | `LocalDate`，`LocalTime` | LocalDateTime没有 | 增加几年 | 对象.plusYears(long years) |



