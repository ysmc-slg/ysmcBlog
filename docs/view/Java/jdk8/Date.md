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


| 方法 | 返回值 | 描述 |
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
| getDayOfMonth() | `int` | 一个月中的第几天，也就是日。LocalTime实例没有这个方法 |
| getHour() | `int` | 获取小时 |
| getMinute() | `int` | 获取分钟 |
| getSecond() | `int` | 获取秒 |
| getDayOfYear() | `int` | 当前时间是一年中的第几天,LocalTime实例没有这个方法|
| getDayOfWeek() | `DayOfWeek` | 获取周几，直接打印返回值是英文周几，返回的`DayOfWeek`对象中有getValue()方法可以获取数字周几，同时还有puls()和minus()方法|
| compareTo(ChronoLocalDateTime<?> other) | `int` | 比较两个`LocalDateTime`的大小，大于返回`正数`，等于返回`0`，小于返回`负数` |
| compareTo(ChronoLocalDate other) | int | 比较两个`LocalDate`的大小，大于返回`正数`，等于返回`0`，小于返回`负数` |
| equals(Object ob) | boolean | 判断日期是否相同 |
| toSecondOfDay() | `int` | 将时间提取为秒，从0到24 * 60 * 60 - 1。|

## Duration
计算两个时间的时间差

::: tip

Duration.between(开始时间,结束时间);

返回值是一个Duration

:::

```java
public void test(){
    LocalDateTime now = LocalDateTime.now();

        LocalDateTime now1 = LocalDateTime.of(2021, 7, 24, 21, 59, 12);

        // 计算两个时间之间的间隔
        Duration between = Duration.between(now1,now);

        // 间隔几分钟
        long l = between.toMinutes();
        System.out.println(l);
}

```

| 方法 | 返回值 | 描述 |
|:----:|:----:|:-----:|
|  Duration.between(Temporal startInclusive, Temporal endExclusive) | Duration | 计算两个时间之间的间隔 |
| toDays() | long | 间隔天数 |
| toHours() | long | 间隔小时数 |
| toMinutes() | long | 间隔分钟 |
| getSeconds() | long | 间隔秒数 |
| toMillis() | long | 间隔毫秒 |
| toNanos() | long | 间隔纳秒 |

还有计算的方法，和LocalDateTime是一样的，就不说了

::: tip

plusNanos()，plusMillis()，plusSeconds()，plusMinutes()，plusHours()，plusDays()

minusNanos()，minusMillis()，minusSeconds()，minusMinutes()，minusHours()，minusDays()

:::

## TemporalAdjuster(时间校正器)

java 8 引入了新的日期、时间库————即java.time包，TemporalAdjuster 类是其中之一。简而言之，TemporalAdjuster 类是调整Temporal对象的策略。

TemporalAdjuster 是函数接口，在TemporalAdjusters 类中有很多预定义的实现。可以执行复杂的日期操作，例如，可以获得下一个星期日对于日期、当月的最后一天、下一年的第一天。

TemporalAdjusters类有很多预定义的static方法返回TemporalAdjuster对象，使用不同方式调节Temporal对象而与Temporal实现无关。

下面列举部分方法及其定义描述：

| 方法 | 描述 |
|:-----:|:-----:|
| dayOfWeekInMonth(int ordinal, DayOfWeek dayOfWeek) |  同一个月中第几个周几的时间 |
| firstDayOfMonth() | 返回当月的第一天 |
| firstDayOfNextMonth() | 返回下月的第一天 |
| firstDayOfNextYear() | 返回下年的第一天 |
| firstDayOfYear() | 返回本年的第一天 |
| firstInMonth(DayOfWeek dayOfWeek) | 本月的第一个星期几的时间 |
| lastDayOfMonth() | 返回当月的最后一天 |
| lastDayOfNextMonth() | 返回下月的最后一天 |
| lastDayOfNextYear() | 返回下一年的最后一天 |
| lastDayOfYear() | 返回本年的最后一天 |
| lastInMonth(DayOfWeek dayOfWeek) | 返回同一个月中最后一个星期几 |
| next / previous (DayOfWeek dayOfWeek) | 返回后一个/前一个给定的星期几 |
| nextOrSame (DayOfWeek dayOfWeek) | 下一个与dayOfWeek相同的时间，包括当前时间 |
| previousOrSame(DayOfWeek dayOfWeek) | 上一个与dayOfWeek相同的时间，包括当前时间 |

```java
public void test(){
    LocalDateTime dateTime = LocalDateTime.now();
    // 获取这个月的第二个周一的时间
    LocalDateTime with1 = dateTime.with(TemporalAdjusters.dayOfWeekInMonth(2,DayOfWeek.MONDAY));
    System.out.println(with1);
    
    // 上个月最后一个星期一，第一个参数为0时，是上个月最后的星期几
    LocalDateTime with2 = dateTime.with(TemporalAdjusters.dayOfWeekInMonth(0,DayOfWeek.MONDAY));
    System.out.println(with2);

    // 这个月的倒数第二个周日，第一个参数为负数 这个月的倒数星期几
    LocalDateTime with3 = dateTime.with(TemporalAdjusters.dayOfWeekInMonth(-2, DayOfWeek.SUNDAY));
    System.out.println(with3);
}

结果：
2021-07-12T00:49:22.684
2021-06-28T00:49:22.684
2021-07-18T00:49:22.684
```

```java
public void test(){
    LocalDate of = LocalDate.of(2021, 7, 25);

    // 下一个也是周日的日期，包括当前日期。
    LocalDate with1 = of.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY));
    System.out.println(with1);

    // 下一个也是周一的日期
    LocalDate with2 = of.with(TemporalAdjusters.nextOrSame(DayOfWeek.MONDAY));
    System.out.println(with2);

     // 上一个也是周日的日期，包括当前日期。
    LocalDate with8 = of.with(TemporalAdjusters.previousOrSame(DayOfWeek.SUNDAY));
    System.out.println(with8);

     // 上一个也是周一的日期
    LocalDate with9 = of.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
    System.out.println(with9);
    
}

结果：
2021-07-25
2021-07-26
2021-07-25
2021-07-19
```

### 自定义

`TemporalAdjuster`是一个函数式接口，所以可以使用lambda表达式，自定义时间校正器

```java
public void test(){
    LocalDateTime dateTime = LocalDateTime.now();

    // 自定义校正器：下一个工作日
    LocalDateTime with2 = dateTime.with(l -> {
        LocalDateTime l1 = (LocalDateTime) l;
        DayOfWeek dayOfWeek = l1.getDayOfWeek();

        if (dayOfWeek.equals(DayOfWeek.FRIDAY)) {
            return l1.plusDays(3);
        } else if (dayOfWeek.equals(DayOfWeek.SATURDAY)) {
            return l1.plusDays(2);
        } else {
            return l1.plusDays(1);
        }
    });
}
```

## 格式化时间/日期

上面全是`ISO标准日历`格式的的日期和时间，当我们需要自定义日期和时间的格式时可以使用，`DateTimeFormatter`。

**1.字符串转换成日期时间类型**

类名.parse
```java
public void test(){
    // String --> LocalDate
    LocalDate localDate = LocalDate.parse("2021-07-25");

    // String --> LocalTime
    LocalTime localTime = LocalTime.parse("07:43:53");

    // String -->LocalDateTime
    DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    LocalDateTime parse = LocalDateTime.parse("2021-07-25 15:34:55", formatter2);
    
    System.out.println(localDate);
    System.out.println(localTime);
    System.out.println(parse);
}

结果：
2021-07-25
07:43:53
2021-07-25T15:34:55
```

**2.日期时间类型转换成字符串**

内置格式使用`日期对象.format()`

自定义使用`localDateTime.format`
```java
public void test10(){
    //localDate --> String
    LocalDate localDate = LocalDate.now();
    String format1 = localDate.format(DateTimeFormatter.BASIC_ISO_DATE);    //yyyyMMdd
    String format2 = localDate.format(DateTimeFormatter.ISO_DATE);            //yyyy-MM-dd


    //2.LocalTime  --> String
    LocalTime localTime = LocalTime.now();
    String format3 = localTime.format(DateTimeFormatter.ISO_TIME);            //20:19:22.42
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("hh:mm:ss");
    String format4 = localTime.format(formatter);

    //3.LocalDateTime  --> String
    LocalDateTime localDateTime = LocalDateTime.now();
    DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("yyyy年MM月dd日 HH:mm:ss");
    String format5 = localDateTime.format(formatter2);

    System.out.println(format1);
    System.out.println(format2);
    System.out.println(format3);
    System.out.println(format4);
    System.out.println(format5);
}

结果：
20210725
2021-07-25
15:43:45.551
03:43:45
2021年07月25日 15:43:45
```