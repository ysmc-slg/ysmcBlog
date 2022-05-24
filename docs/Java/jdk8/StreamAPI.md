---
description: StreamAPI
autoPrev: method-reference
---

# StreamAPI

## Stream说明
Java8中有两大最为重要的改变。第一个是 Lambda 表达式；另外一个则是 Stream API。

Stream 是 Java8 中处理集合的关键抽象概念，它可以指定你希望对集合进行的操作，可以执行非常复杂的`查找`、`过滤`和`映射数据`等操作。 使用Stream API 对集合数据进行操作，就类似于使用 SQL 执行的数据库查询。也可以使用 Stream API 来并行执行操作。简言之，Stream API 提供了一种高效且易于使用的处理数据的方式。

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

## 创建Stream

### 方式一：通过集合
```java
@Test
public void test1(){
    List<Employee> employees = EmployeeData.getEmployees();

    //default Stream<E> stream() : 返回一个顺序流
    Stream<Employee> stream = employees.stream();

    //default Stream<E> parallelStream() : 返回一个并行流
    Stream<Employee> parallelStream = employees.parallelStream();
}

public class EmployeeData {
	
	public static List<Employee> getEmployees(){
		List<Employee> list = new ArrayList<>();
		
		list.add(new Employee(1001, "马化腾", 34, 6000.38));
		list.add(new Employee(1002, "马云", 12, 9876.12));
		list.add(new Employee(1003, "刘强东", 33, 3000.82));
		list.add(new Employee(1004, "雷军", 26, 7657.37));
		list.add(new Employee(1005, "李彦宏", 65, 5555.32));
		list.add(new Employee(1006, "比尔盖茨", 42, 9500.43));
		list.add(new Employee(1007, "任正非", 26, 4333.32));
		list.add(new Employee(1008, "扎克伯格", 35, 2500.32));
		
		return list;
	}
	
}
```
顺序流和并行流后面再说

### 方式二：通过数组
```java
@Test
public void test2(){
    int[] arr = new int[]{1,2,3,4,5,6};
    //调用Arrays类的static <T> Stream<T> stream(T[] array): 返回一个流
    IntStream stream = Arrays.stream(arr);

    //对象数组
    Employee e1 = new Employee(1001,"Tom");
    Employee e2 = new Employee(1002,"Jerry");
    Employee[] arr1 = new Employee[]{e1,e2};
    Stream<Employee> stream1 = Arrays.stream(arr1);

}
```
重载形式，能够处理对应基本类型的数组：

* public static IntStream stream(int[] array)
* public static LongStream stream(long[] array)
* public static DoubleStream stream(double[] array)

### 方式三：通过Stream的of()
可以调用Stream类静态方法 of(), 通过显示值创建一个流。它可以接收任意数量的参数。
```java
@Test
public void test3(){
    Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5, 6);
}
```
### 方式四：创建无限流
可以使用静态方法 Stream.iterate() 和 Stream.generate(), 创建无限流。
```java
@Test
public void test4(){

    //迭代
    //public static<T> Stream<T> iterate(final T seed, final UnaryOperator<T> f)
    //从0开始遍历前10个偶数
    Stream.iterate(0, t -> t + 2).limit(10).forEach(System.out :: println);

    System.out.println();

    //生成
    //public static<T> Stream<T> generate(Supplier<T> s)
    //打印10个0-1的随机数
    Stream.generate(Math::random).limit(10).forEach(System.out::println);
}
```

## 中间操作<Badge text="重要" type="error"/>

多个中间操作可以连接起来形成一个流水线，除非流水线上触发终止操作，`否则中间操作不会执行任何的处理！而在终止操作时一次性全部处理，称为“惰性求值”`。

![中间操作](/blogImg/Stream2.png)

无状态：指元素的处理不受之前元素的影响；

有状态：指该操作只有拿到所有元素之后才能继续下去。

### 1. 筛选与切片

|    方法    |    描述    |
|:----------:|:----------:|
| filter(Predicate p) | 接收参数，从流中过滤某些元素 |
| distinct() | 筛选，通过流所生成元素的 hashCode()和equals()去除重复元素 |
| limit(long maxSize) | 截断流，使其元素不超过给定数量 |
| skip(long n) | 跳过元素，返回一个扔掉了前 n 个元素的流。<br>若流中元素不足 n 个，则返回一个空流。与 limit(n) 互补 |


```java
public class EmployeeData {
	
	public static List<Employee> getEmployees(){
		List<Employee> list = new ArrayList<>();
		
		list.add(new Employee(1001, "张三", 34, 6000.38));
		list.add(new Employee(1002, "李四", 12, 9876.12));
		list.add(new Employee(1003, "王五", 33, 3000.82));
		list.add(new Employee(1004, "赵六", 26, 7657.37));
		list.add(new Employee(1005, "赵四", 65, 5555.32));
		list.add(new Employee(1006, "比尔盖茨", 42, 9500.43));
		list.add(new Employee(1007, "库克", 26, 4333.32));
		list.add(new Employee(1008, "扎克伯格", 35, 2500.32));
		
		return list;
	}
}
```



