---
title: 常用方法
autoPrev: class
---

## 获取类的方法

获取Class类的四种方法上面已经说了，这里不多介绍。下面主要介绍常用的一些方法

```java
Class<?> clazz  = Class.forName("com.Dan.Consumer");
Object object = clazz.newInstance();
```
1. 
```java
public Method[] getDeclaredMethods()
```
返回 Method 对象的一个数组，获取本类所有方法，`包括公共、保护、默认（包）访问和私有方法，但不包括继承的方法`。

2. 
```java
public Method getDeclaredMethod(String name,Class<?>... parameterTypes)
```
返回一个 Method 对象，`第一个参数是方法名`，`第二个参数是方法参数`，传入这两个参数之后，便可以根据方法名和方法参数通过反射获取带有参数的方法

3. 
```java
public Method[] getMethods()
```
返回一个包含某些 Method 对象的数组，获取类或接口（包括那些由该类或接口声明的以及从超类和超接口继承的那些的类或接口）的`公共成员方法`。

4. 
```java
public Method getMethod(String name,Class<?>... parameterTypes)
```
返回一个 Method 对象，获取类或接口的指定`公共成员方法`。

得到`Method`可以使用`invoke`方法执行方法。
```java
Class<?> clazz  = Class.forName("com.Dan.Consumer");
Object object = clazz.newInstance();
Method method = clazz.getMethod("info", String.class, long.class);//获取方法
method.invoke(object, "hello world",2017032009);//通过invoke调用该方法
```

## 获取成员变量信息

1. 
```java
public Field[] getDeclaredFields()
```
获得类的所有声明的字段，即包括public、private和proteced，但是`不包括父类的申明字段`。

```java
public Field getDeclaredField(String name)
```
返回一个 Field 对象，仅能获取类本身的属性成员（包括私有、共有、保护）

2. 
```java
public Field[] getFields()
```
返回一个 Field 数组，获得类的所有的公共（public）的字段，包括父类中的字段

3. 
```java
public Field getField(String name)
```
返回一个 Field 对象，获得类的所有的公共（public）的字段，包括父类中的字段

```java
Field aField = clazz.getDeclaredField("name"); //因为name变量是private的，所以不能用getField方法
aField.setAccessible(true);//值为 true 则指示反射的对象在使用时应该取消 Java 语言访问检查。值为 false 则指示反射的对象应该实施 Java 语言访问检查。
aField.set(object,"二大爷");
Object obj = aField.get(object);
System.out.println(obj);
```

## 获取构造器
```java
public Constructor<?>[] getDeclaredConstructors()
public Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes)
public Constructor<?>[] getConstructors()
public Constructor<T> getConstructor(Class<?>... parameterTypes)
```
构造器和上面的方法、属性都是大同小异的。需要注意的是，当返回一个数组的时候，返回类型是Constructor<?>[]而不是Constructor<T>[]，因为从此方法返回之后，该数组可能被修改以保存不同类的 Constructor 对象。
