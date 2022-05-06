---
description: Collectors其他方法
autoPrev: StreamAPI
---

# Collectors其他方法

## Collectors常用的20个方法

**返回List集合: toList()** <Badge text="重要" type="error"/>

用于将元素累积到`List`集合中。它将创建一个新`List`集合（不会更改当前集合）。

```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
List<Integer> newList = integers.stream().map(x -> x*x).collect(Collectors.toList());
// 结果: [1,4,9,16,25,36,36]
```

**返回Set集合: toSet()** <Badge text="重要" type="error"/>

用于将元素累积到`Set`集合中。<div style="color:red">它会删除重复元素。</div>

```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
Set<Integer> newSet = integers.stream().map(x -> x*x).collect(Collectors.toSet());
// 结果: [1,4,9,16,25,36]
```

**返回指定的集合: toCollection()**：

可以将元素累积到指定的集合中。

```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
LinkedList<Integer> collect = integers
      .stream()
      .filter(x -> x > 2)
      .collect(Collectors.toCollection(LinkedList::new));

// 结果: [3,4,5,6,6]
```

**计算元素数量: Counting()**：

用于返回计算集合中存在的元素个数。
```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
Long collect = integers.stream().filter(x -> x <4).collect(Collectors.counting());

// 结果: 3
```

**求最小值: minBy()**：<Badge text="重要" type="error"/>

用于返回列表中存在的最小值。
```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
List<String> strings = Arrays.asList("alpha","beta","gamma");
integers
    .stream()
    .collect(Collectors.minBy(Comparator.naturalOrder()))
    .get();

// 结果: 1

strings
   .stream()
   .collect(Collectors.minBy(Comparator.naturalOrder()))
   .get();

// 结果: alpha
```
可以使用reverseOrder（）方法反转顺序。

```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
List<String> strings = Arrays.asList("alpha","beta","gamma");
integers
    .stream()
    .collect(Collectors.minBy(Comparator.reverseOrder()))
    .get();
// 结果: 6

strings
   .stream()
   .collect(Collectors.minBy(Comparator.reverseOrder()))
   .get();
// 结果: gamma
```

**求最大值: maxBy()**：<Badge text="重要" type="error"/>

和最小值方法类似，使用`maxBy()`方法来获得最大值。

```java
List<String> strings = Arrays.asList("alpha","beta","gamma");
strings
   .stream()
   .collect(Collectors.maxBy(Comparator.naturalOrder()))
   .get();
// 结果: gamma
```

**分区列表:partitioningBy()**：

用于将一个集合划分为2个集合并将其添加到映射中，1个满足给定条件，另一个不满足，例如从集合中分离奇数。因此它将在`map`中生成2条数据，1个以`true`为`key`，奇数为值，第2个以`false`为`key`，以偶数为值。

```java
List<String> strings = Arrays.asList("a","alpha","beta","gamma");
Map<Boolean, List<String>> collect1 = strings
          .stream()
          .collect(Collectors.partitioningBy(x -> x.length() > 2));

// 结果: {false=[a], true=[alpha, beta, gamma]}
```
这里我们将长度大于2的字符串与其余字符串分开。

**返回不可修改的List集合：toUnmodifiableList()**

用于创建只读`List`集合。任何试图对此不可修改`List`集合进行更改的尝试都将导致`UnsupportedOperationException。`
```java
List<String> strings = Arrays.asList("alpha","beta","gamma");
List<String> collect2 = strings
       .stream()
       .collect(Collectors.toUnmodifiableList());
// 结果: ["alpha","beta","gamma"]
```
**返回不可修改的Set集合：toUnmodifiableSet()**

用于创建只读`Set`集合。任何试图对此不可修改`Set`集合进行更改的尝试都将导致`UnsupportedOperationException`。<div style="color:red">它会删除重复元素。</div>

```java
List<String> strings = Arrays.asList("alpha","beta","gamma","alpha");
Set<String> readOnlySet = strings
       .stream()
       .sorted()
       .collect(Collectors.toUnmodifiableSet());
// 结果: ["alpha","beta","gamma"]
```

**连接元素：Joining()** <Badge text="重要" type="error"/>

用指定的字符串链接集合内的元素。
```java
List<String> strings = Arrays.asList("alpha","beta","gamma");
String collect3 = strings
        .stream()
        .distinct()
        .collect(Collectors.joining("-"));

结果：alpha-beta-gamma
```
**Long类型集合的平均值：averagingLong()** <Badge text="重要" type="error"/>

查找`Long`类型集合的平均值。

注意：<div style="color:red">返回的是Double类型而不是 Long类型</div>
```java
List<Long> longValues = Arrays.asList(100L, 200L, 300L);
Double d1 = longValues
        .stream()
        .collect(Collectors.averagingLong(x -> x * 2));
// 结果: 400.0
```
**Integer类型集合的平均值：averagingInt()** <Badge text="重要" type="error"/>

查找Integer类型集合的平均值。

注意：<div style="color:red">返回的是Double类型而不是 int类型</div>

```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
Double d2 = integers
        .stream()
        .collect(Collectors.averagingInt(x -> x));

结果：3.857142857142857
```
**Double类型集合的平均值：averagingDouble()** <Badge text="重要" type="error"/>

查找`Double`类型集合的平均值。
```java
List<Double> doubles = Arrays.asList(1.1,2.0,3.0,4.0,5.0,5.0);
Double d3 = doubles
    .stream()
    .collect(Collectors.averagingDouble(x -> x));
// 结果: 3.35
```

**整数求和:summingInt ()** <Badge text="重要" type="error"/>

查找集合中所有整数的和。它并不总是初始集合的和，就像我们在下面的例子中使用的是字符串列表，首先我们把每个字符串转换成一个等于它的长度的整数，然后把所有的长度相加。
```java
List<String> strings = Arrays.asList("alpha","beta","gamma");
Integer collect4 = strings
      .stream()
      .collect(Collectors.summingInt(String::length));
// 结果: 14
```
或直接集合值和
```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
Integer sum = integers
    .stream()
    .collect(Collectors.summingInt(x -> x));
// output: 27
```

**double求和:summingDouble ()** <Badge text="重要" type="error"/>

类似于整数求和，只是它用于双精度值
```java
List<Double>  doubleValues = Arrays.asList(1.1,2.0,3.0,4.0,5.0,5.0);
Double sum = doubleValues
     .stream()
     .collect(Collectors.summingDouble(x ->x));
// 结果: 20.1
```
**Long求和:summingLong ()** <Badge text="重要" type="error"/>

与前两个相同，用于添加`long`值或`int`值。<div style="color:red">可以对`int`值使用`summinglong()`，但不能对`long`值使用`summingInt()`。</div>
```java
List<Long> longValues = Arrays.asList(100L,200L,300L);
Long sum = longValues
    .stream()
    .collect(Collectors.summingLong(x ->x));
// 结果: 600
```
**汇总整数:summarizingInt ()** <Badge text="重要" type="error"/>

它给出集合中值的所有主要算术运算值，如所有值的平均值、最小值、最大值、所有值的计数和总和。
```java
List<Integer> integers = Arrays.asList(1,2,3,4,5,6,6);
IntSummaryStatistics stats = integers
      .stream()
      .collect(Collectors.summarizingInt(x -> x ));

//结果: IntSummaryStatistics{count=7, sum=27, min=1, average=3.857143, max=6}
```
可以使用`get`方法提取不同的值，如:
```java
stats.getAverage();   // 3.857143
stats.getMax();       // 6
stats.getMin();       // 1
stats.getCount();     // 7
stats.getSum();       // 27
```

**分组函数:GroupingBy ()**

GroupingBy()是一种高级方法，用于从任何其他集合创建Map
```java
List<String> strings = Arrays.asList("alpha","beta","gamma");
Map<Integer, List<String>> collect = strings
      .stream()
      .collect(Collectors.groupingBy(String::length));
// 结果: {4=[beta, beta], 5=[alpha, gamma]}
```
它将字符串长度作为key，并将该长度的字符串列表作为value。

```java
List<String> strings = Arrays.asList("alpha","beta","gamma");
Map<Integer, LinkedList<String>> collect1 = strings
    .stream()
    .collect(Collectors.groupingBy(String::length,Collectors.toCollection(LinkedList::new)));
// 结果: {4=[beta, beta], 5=[alpha, gamma]}
```
这里指定了Map中需要的列表类型(Libkedlist)。

文章来源：[Java-Collectors常用的20个方法](https://www.cnblogs.com/merryyou/p/13977493.html)