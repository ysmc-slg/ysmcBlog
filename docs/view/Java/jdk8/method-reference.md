---
title: 方法引用
autoPrev: functional
---
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
| 非静态方法 |  类名 :: 方法  |    () -> Employee.getName  |

### 静态方法引用


