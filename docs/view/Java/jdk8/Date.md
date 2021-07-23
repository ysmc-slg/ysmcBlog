---
title: 日期和时间
autoPrev: CollectorsApi
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


| 方法 | 返回值 | 用途 |
|:----:|:----:|:-----:|
| now () | `LocalDate`，<br>`LocalTime`，<br>`LocalDateTime`  | 获取当前日期，<br>时间，<br>日期和时间 |
| of () | `LocalDate`，<br>`LocalTime`，<br>`LocalDateTime`  | 构造指定的日期，<br>时间，<br>日期和时间 |
| equals(Object object) | boolean | 比较两个日期是否相等 | 
| plusYears(long years) | `LocalDate`，<br>`LocalDateTime` | 增加年份 |
| plusMonths(long months) | `LocalDate`，<br>`LocalDateTime`  | 增加月份 |
| plusDays(long days) | `LocalDate`，<br>`LocalDateTime` | 增加天数 |
| plusHours(long hours) | `LocalDate`，<br>`LocalTime`，<br>`LocalDateTime` | 增加小时 |
| plusMinute(long minute) | `LocalDate`，<br>`LocalTime`，<br>`LocalDateTime` | 增加分钟 |
| plusSeconds(long seconds) | `LocalDate`，<br>`LocalTime`，<br>`LocalDateTime` | 增加秒 |
| minusYears(long years) | `LocalDate`，<br>`LocalDateTime` | 减去年份 |
| minusMonths(long months) | `LocalDate`，<br>`LocalDateTime` | 减去月份 |
| getYear() | `int` | 获取年份，LocalTime只获取时间，<br>所以没有这个方法 |
| getMonthValue() | `int` | 获取月份，LocalTime实例没有这个方法 |
| getDayOfYear() | `int` | 当前时间是一年中的第几天,LocalTime实例没有这个方法|
| getDayOfMonth() | `int` | 一个月中的第几天,LocalTime实例没有这个方法 |
| getDayOfWeek() | `DayOfWeek` | 获取周几，直接打印返回值是英文周几，返回的`DayOfWeek`对象中有getValue()方法可以获取数字周几，同时还有puls()和minus()方法|
| compareTo(ChronoLocalDateTime<?> other) | `int` | 比较两个`LocalDateTime`的大小，大于返回`正数`，等于返回`0`，小于返回`负数` |
| compareTo(ChronoLocalDate other) | int | 比较两个`LocalDate`的大小，大于返回`正数`，等于返回`0`，小于返回`负数` |
| equals(Object ob) | boolean | 判断日期是否相同 |
| toSecondOfDay() | `int` | 将时间提取为秒，从0到24 * 60 * 60 - 1。|



