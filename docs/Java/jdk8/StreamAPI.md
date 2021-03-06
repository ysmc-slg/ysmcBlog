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

**filter(Predicate p)**

```java
// 查询员工表中薪资大于7000的员工信息
public void test(){
  List<Employee> list = EmployeeData.getEmployees();
  Stream<Employee> stream = list.stream();

  stream.filter(e -> e.getSalary() > 7000).forEach(System.out::println);
}
```

```js
// 结果：
Employee{id=1002, name='李四', age=12, salary=9876.12}
Employee{id=1004, name='赵六', age=26, salary=7657.37}
Employee{id=1006, name='比尔盖茨', age=42, salary=9500.43}
```

由于Stream是`延迟执行`所以必须有`终止操作`，这里使用了`forEach`后面会详细讲解终止操作。


**注意**：

```js
Stream<T> filter(Predicate<? super T> predicate);

filter需要一个参数`Predicate`，而`Predicate`是一个函数式接口(抽象方法: boolean test(T t);)，所以可以已使用lambda表达式。

lambda表达式中参数`e`是list集合中的每一个`Employee`对象
```

**limit(n)**：
```java
// 打印集合中前3个对象
public void test(){
  List<Employee> list = EmployeeData.getEmployees();
  list.stream().limit(3).forEach(System.out::println);
}
```
```java
// 结果：
Employee{id=1001, name='张三', age=34, salary=6000.38}
Employee{id=1002, name='李四', age=12, salary=9876.12}
Employee{id=1003, name='王五', age=33, salary=3000.82}
```

```js
limit方法：Stream<T> limit(long maxSize);

返回值也是一个Stream，参数是一个long类型的数字
```

**skip(n)**：
```java
// 跳过前3个对象
public void test(){
  List<Employee> list = EmployeeData.getEmployees();
  list.stream().skip(3).forEach(System.out::println);
}
```
```java
// 结果：
Employee{id=1004, name='赵六', age=26, salary=7657.37}
Employee{id=1005, name='赵四', age=65, salary=5555.32}
Employee{id=1006, name='比尔盖茨', age=42, salary=9500.43}
Employee{id=1007, name='库克', age=26, salary=4333.32}
Employee{id=1008, name='扎克伯格', age=35, salary=2500.32}
```

```js
skip方法：Stream<T> skip(long n)

返回值也是一个Stream，参数是一个long类型的数字
```

**distinct()**：
```java
public void test(){
  List<Employee> list = EmployeeData.getEmployees();
  list.add(new Employee(1010,"谢广坤",40,8000));
  list.add(new Employee(1010,"谢广坤",41,8000));
  list.add(new Employee(1010,"谢广坤",40,8000));
  list.add(new Employee(1010,"谢广坤",40,8000));
  list.add(new Employee(1010,"谢广坤",40,8000));

  // 去掉集合中重复的对象
  list.stream().distinct().forEach(System.out::println);
}
```
```java
// 结果
Employee{id=1010, name='谢广坤', age=40, salary=8000.0}
Employee{id=1010, name='谢广坤', age=41, salary=8000.0}
```

### 2. 映射 <Badge text="重要" type="error"/>
|     方法     |    描述    |
|:------------:|:----------:|
| map(Function f)| 接收一个函数作为参数，<br>该函数会被应用到每个元素上，<br>并将其映射成一个新的元素。|
|  mapToDouble(ToDoubleFunction f)  |   接收一个函数作为参数，<br>该函数会被应用到每个元素上，<br>产生一个新的 DoubleStream。    |
| mapToInt(ToIntFunction f) | 接收一个函数作为参数，<br>该函数会被应用到每个元素上，<br>产生一个新的 IntStream。 |
| mapToLong(ToLongFunction f) | 接收一个函数作为参数，<br>该函数会被应用到每个元素上，<br>产生一个新的 LongStream。 |
| flatMap(Function f) | 接收一个函数作为参数，<br>将流中的每个值都换成另一个流，<br>然后把所有流连接成一个流 |

**map(Function f)**
```java
public void test(){
  // 获取姓名大于3的员工姓名
  List<Employee> employees = EmployeeData.getEmployees();
  employees.stream().map(Employee::getName).filter(name -> name.length() > 3).forEach(System.out :: println);

  // mapToDouble
  List<String> stringList = Arrays.asList("33.5", "55", "546.33");
  stringList.stream().mapToDouble(d -> Double.parseDouble(d)).forEach(System.out :: println);

  // mapToInt
  stringList.stream().mapToInt(s -> Integer.parseInt(s)).forEach(System.out :: println);
}
```
```java
// 结果
比尔盖茨
扎克伯格
33.0
55.0
546.0

33
55
546
```
**flatMap(Function f)**：
```java
public void test(){
  List<String> strings = Arrays.asList("a", "b", "c");
  Stream<Character> characterStream = strings.stream().flatMap(StreamAPITest1::fromStringToStream);
}

//将字符串中的多个字符构成的集合转换为对应的Stream的实例
public static Stream<Character> fromStringToStream(String str){
    ArrayList<Character> list = new ArrayList<>();
    for(Character c : str.toCharArray()){
        list.add(c);
    }
    return list.stream();

}
```

### 3. 排序 <Badge text="重要" type="error"/>

|     方法     |    描述    |
|:------------:|:----------:|
|   sorted()   |  产生一个新流，其中按自然顺序排序 |
| sorted(Comparator com) | 产生一个新流，其中按比较器顺序排序 |

**sorted()**：
```java
public void test(){
  List<Double> doubles = Arrays.asList(12.32, 10.0, 23.56, 87.56, 34.6, 765.3, 786.5);
  List<Double> doubleList = doubles.stream().sorted().collect(Collectors.toList());
  System.out.println(doubleList);
}
```
```js
结果：
[10.0, 12.32, 23.56, 34.6, 87.56, 765.3, 786.5]
```


**sorted(Comparator com)**：
```java
// 按照年龄排序，年龄相等根据薪资倒序排
public void test(){
  List<Employee> employees = EmployeeData.getEmployees();
  employees.stream().sorted( (e1,e2) -> {
      // Integer.compare 比较两个值的大小，大于返回 1 ，小于返回 -1 ，等于返回 0，默认从小到大排序
      int ageValue = Integer.compare(e1.getAge(),e2.getAge());
      if(ageValue != 0){
          return ageValue;
      }else{
          // "-"：薪资倒序排列
          return -Double.compare(e1.getSalary(),e2.getSalary());
      }

  }).forEach(System.out::println);
}
```
结果：
```java {2,3}
Employee{id=1002, name='李四', age=12, salary=9876.12}
Employee{id=1004, name='赵六', age=26, salary=7657.37}
Employee{id=1007, name='库克', age=26, salary=4333.32}
Employee{id=1003, name='王五', age=33, salary=3000.82}
Employee{id=1001, name='张三', age=34, salary=6000.38}
Employee{id=1008, name='扎克伯格', age=35, salary=2500.32}
Employee{id=1006, name='比尔盖茨', age=42, salary=9500.43}
Employee{id=1005, name='赵四', age=65, salary=5555.32}
```

## 终止操作<Badge text="重要" type="error"/>

```js

终端操作会从流的流水线生成结果。其结果可以是任何不是流的值，例如：List、Integer，甚至是 void

流进行了终止操作后，不能再次使用。
```

### 1. 匹配与查找

|    方法    |         描述         |
|:----------:|:--------------------:|
| allMatch(Predicate p)  |     检查是否匹配所有元素     |
| anyMatch(Predicate p) | 检查是否至少匹配一个元素 |
| noneMatch(Predicate p) | 检查是否没有匹配所有元素 |
| findFirst() | 返回第一个元素 |
| findAny() | 返回当前流中的任意元素 |
| count() | 返回流中元素总数 |
| max(Comparator c) | 返回流中最大值 |
| min(Comparator c) | 返回流中最小值 |
| forEach(Consumer c) | 内部迭代(使用 Collection 接口需要用户去做迭代，<br>称为外部迭代。<br>相反，Stream API 使用内部迭代——它帮你把迭代做了) |

```java
@Test
public void test1(){
    List<Employee> employees = EmployeeData.getEmployees();

    // boolean allMatch(Predicate p)——检查是否匹配所有元素。
    // 练习：是否所有的员工的年龄都大于18
    boolean allMatch = employees.stream().allMatch(e -> e.getAge() > 18);
    System.out.println(allMatch);

    // boolean anyMatch(Predicate p)——检查是否至少匹配一个元素。
    // 练习：是否存在员工的工资大于 10000
    boolean anyMatch = employees.stream().anyMatch(e -> e.getSalary() > 10000);
    System.out.println(anyMatch);

    // boolean noneMatch(Predicate p)——检查是否没有匹配的元素。
    // 练习：是否不存在员工姓“李”
    boolean noneMatch = employees.stream().noneMatch(e -> e.getName().startsWith("李"));
    System.out.println(noneMatch);

    // Optional<T> findFirst() ——返回第一个元素
    Optional<Employee> employee = employees.stream().findFirst();
    System.out.println(employee);

    // Optional<T> findAny() ——返回当前流中的任意元素
    Optional<Employee> employee1 = employees.parallelStream().findAny();
    System.out.println(employee1);

}
```
```java
// 结果：
false
false
false
Optional[Employee{id=1001, name='张三', age=34, salary=6000.38}]
Optional[Employee{id=1006, name='比尔盖茨', age=42, salary=9500.43}]
```

```ja

noneMatch(Predicate p)：是否没有匹配的元素，没有匹配的返回`true`，有匹配的返回`false`

```

```java
@Test
public void test2(){
    List<Employee> employees = EmployeeData.getEmployees();
    // long count——返回流中元素的总个数
    long count = employees.stream().filter(e -> e.getSalary() > 5000).count();
    System.out.println(count);

    // Optional<T> max(Comparator c)——返回流中最大值
    // 练习：返回最高的工资：
    Stream<Double> salaryStream = employees.stream().map(e -> e.getSalary());
    Optional<Double> maxSalary = salaryStream.max(Double::compare);
    System.out.println(maxSalary);

    // Optional<T> min(Comparator c)——返回流中最小值
    // 练习：返回最低工资的员工
    Optional<Employee> employee = employees.stream().min((e1, e2) -> Double.compare(e1.getSalary(), e2.getSalary()));
    System.out.println(employee);
    System.out.println();

    // void forEach(Consumer c)——内部迭代
    employees.stream().forEach(System.out::println);
}
```
```java
结果：
5
Optional[9876.12]
Optional[Employee{id=1008, name='扎克伯格', age=35, salary=2500.32}]

Employee{id=1001, name='张三', age=34, salary=6000.38}
Employee{id=1002, name='李四', age=12, salary=9876.12}
Employee{id=1003, name='王五', age=33, salary=3000.82}
Employee{id=1004, name='赵六', age=26, salary=7657.37}
Employee{id=1005, name='赵四', age=65, salary=5555.32}
Employee{id=1006, name='比尔盖茨', age=42, salary=9500.43}
Employee{id=1007, name='库克', age=26, salary=4333.32}
Employee{id=1008, name='扎克伯格', age=35, salary=2500.32}
```


### 2. 规约
| 方法 | 描述 |
|:------:|:------:|
| reduce(T iden, BinaryOperator b) | 可以将流中元素反复结合起来，得到一个值。返回 T |
| reduce(BinaryOperator b) | 可以将流中元素反复结合起来，得到一个值。<br>返回 Optional |

```java
@Test
public void test3(){
  // T reduce(T identity, BinaryOperator)——可以将流中元素反复结合起来，得到一个值。返回 T
  // 练习1：计算1-10的自然数的和
  List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);

  Integer reduce = list.stream().reduce(0, Integer::sum);
  System.out.println(reduce);


  // Optional<T> reduce(BinaryOperator) ——可以将流中元素反复结合起来，得到一个值。返回 Optional<T>
  // 练习2：计算公司所有员工工资的总和

  List<Employee> employees = EmployeeData.getEmployees();

  Optional<Double> reduce1 = employees.stream().map(Employee::getSalary).reduce(Double::sum);
  System.out.println(reduce1);
}
```

:::tip

identity：默认值或初始值。

BinaryOperator：函数式接口，取两个值并产生一个新值。

如果缺少`identity`参数，则没有默认值或初始值，并且它返回 `Optional<T>`。

:::

### 3. 收集

|    方法    |      描述      |
|:----------:|:--------------:|
| collect(Collector c) | 将流转换为其他形式。接收一个 Collector接口的实现，<br>用于给Stream中元素做汇总的方法  |

```java
@Test
public void test4(){
    // <R, A> R collect(Collector c)——将流转换为其他形式。接收一个 Collector接口的实现，用于给Stream中元素做汇总的方法
    // 练习1：查找工资大于6000的员工，结果返回为一个List或Set

    List<Employee> employees = EmployeeData.getEmployees();
    List<Employee> employeeList = employees.stream().filter(e -> e.getSalary() > 6000).collect(Collectors.toList());

    employeeList.forEach(System.out::println);
    System.out.println();
    Set<Employee> employeeSet = employees.stream().filter(e -> e.getSalary() > 6000).collect(Collectors.toSet());

    employeeSet.forEach(System.out::println);
}
```

:::tip

`collect(Collector c)`方法需要一个Collector接口，在系统中`Collectors`工具类已经内置了一些常用的方法。方法返回的就是一个`Collector`接口的实现类

:::

Collectors中还有很多方法，请点击：[Collectors更多方法](./CollectorsApi.html)
