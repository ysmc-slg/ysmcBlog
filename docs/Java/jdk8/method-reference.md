---
description: 方法引用
autoPrev: functional
---

# 方法引用

## 使用场景
我们用Lambda表达式来实现匿名方法。但有些情况下，我们用Lambda表达式仅仅是调用一些已经存在的方法，除了调用动作外，没有其他任何多余的动作，在这种情况下，我们倾向于通过方法名来调用它，而Lambda表达式可以帮助我们实现这一要求，它使得Lambda在调用那些已经拥有方法名的方法的代码更简洁、更容易理解。方法引用可以理解为Lambda表达式的另外一种表现形式。

## 使用方法

```java
public class Employee{
  private int id;
	private String name;
	private int age;
	private double salary;
}

@Test
// 获取姓名
public void test2() {
  Employee emp = new Employee(1001,"Tom",23,5600);
  // 使用lambda表达式
  Supplier<String> sup1 = () -> emp.getName();
  System.out.println(sup1.get());

  System.out.println("*******************");
  //使用方法引用
  Supplier<String> sup2 = emp::getName;
  System.out.println(sup2.get());
}
```
使用lambda获取姓名，在Employee对象中也可以获取到姓名。这时就可以使用方法引用。

::: tip 详情

方法引用格式：对象实例(或类名) :: 方法名

实现接口的抽象方法的参数列表和返回值类型，必须与方法引用的
方法的参数列表和返回值类型保持一致！

:::

## 方法引用分类

|    类型    |     语法      |      对应的lambda表达式   |
| :-------: | :-----------: | :----------------------: |
|  静态方法  |  类名 :: 方法  |  () -> Employee.getName  |
| 非静态方法 |  实例 :: 方法  |    () -> emp.getName    |
| 非静态方法 |  类名 :: 方法  |    (inst,args) -> 类名.instMethod(args)  |

### 静态方法引用

比较两个数的大小我们可以使用`Comparator`接口，`Comparator`接口是一个函数式接口，所以可以使用lambda表达式

```java

@Test
public void test() {
  Comparator<Integer> com1 = (t1,t2) -> max(t1, t2);
  // compare 方法返回一个int
  System.out.println(com1.compare(12,21));
}

// 比较方法
public static int max(int a, int b) {
  if(a <= b) {
    return b;
  } else {
    return a;
  }
}
```

我们知道`Integer`中的`compare`静态方法也可以比较大小，同时返回一个int值，大于返回1 小于返回-1 等于返回0。参数也是两个。所以可以使用这个方法替代上面的`max`方法。这就是`静态方法引用`

```java
@Test
public void test(){
  Comparator<Integer> com2 = Integer::compare;
	System.out.println(com2.compare(12,3));
}
```

::: tip

此时的代码比lambda表达式更加简洁，不需要考虑`compare`方法参数传递的问题，在调用`compare`的时候系统回自动传参。

:::

### 非静态方法引用(实例 :: 方法)

```java
@Test
public void test1() {
  Employee emp = new Employee(1001,"Tom",23,5600);

  Supplier<String> sup1 = () -> emp.getName();
  System.out.println(sup1.get());

  System.out.println("*******************");

  Supplier<String> sup2 = emp::getName;
  System.out.println(sup2.get());

}
```

### 非静态方法引用(类 :: 方法)

```java
@Test
public void test1() {
  BiPredicate<String,String> pre1 = (s1,s2) -> s1.equals(s2);
  System.out.println(pre1.test("abc","abc"));

  System.out.println("*******************");
  BiPredicate<String,String> pre2 = String :: equals;
  System.out.println(pre2.test("abc","abd"));
}
```
::: tip 注意

方法体中比较两个字符串是否相同，而String类中的equals也可以比较。

但是`BiPredicate`中的`boolean test(T t1, T t2)`需要两个参数，而`String`中的`boolean t1.equals(t2)`只需要一个参数，为什么也可以使用方法引用呢（上面两个例子返回值和参数个数都是相同的）？
:::

```java
@Test
public void test7() {
  Employee employee = new Employee(1001, "Jerry", 23, 6000);


  Function<Employee,String> func1 = e -> e.getName();
  System.out.println(func1.apply(employee));

  System.out.println("*******************");


  Function<Employee,String> func2 = Employee::getName;
  System.out.println(func2.apply(employee));


}
```

::: tip

这个例子也是这样，`Function`中的`R apply(T t)`需要一个参数，而`Employee`中的`String getName()`不需要参数。

:::

**总结**：个人认为可不可以使用方法引用，只需要看函数式接口的抽象方法与引入的方法返回值是否相同，同时lambda表达式方法体中的操作，在其他方法中已经完成。此时就可以使用方法引用。


## 构造器引用

格式：ClassName :: new

::: tip

与函数式接口相结合，自动与函数式接口中方法兼容。

可以把构造器引用赋值给定义的方法，要求`构造器参数列表要与接口中抽象方法的参数列表一致！且方法的返回值即为构造器对应类的对象`。

:::

```java
@Test
public void test1(){
    // lambda表达式形式
    Function<Integer,Employee> func1 = id -> new Employee(id);
    Employee employee = func1.apply(1001);
    System.out.println(employee);

    // 构造器引用
    Function<Integer,Employee> func2 = Employee :: new;
    Employee employee1 = func2.apply(1002);
    System.out.println(employee1);
}
```

结果：
```java
Employee{id=1001, name='null', age=0, salary=0.0}

Employee{id=1002, name='null', age=0, salary=0.0}
```
::: tip


Employee::new：相当于调用Employee的构造方法，所以可以从lambda形式可以改成构造器引用形式

apply方法的返回值就是`构造器对应类的对象`

:::

## 数组引用

格式：type[] :: new

例如：

```java
Function<Integer, Integer> fun = (n) -> new Integer[n]

// 等同于
Function<Integer, Integer> fun = Integer[] :: new

```