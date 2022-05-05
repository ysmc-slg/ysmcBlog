---
title: Class类
---
## 简介
对于每个类而言，JRE 都为其保留一个不变的 Class 类型的对象。一个 Class 对象包含
了特定某个结构的有关信息。

* Class本身也是一个类
* Class 对象只能由系统建立对象
* 一个加载的类在 JVM 中只会有一个Class实例
* 一个Class对象对应的是一个加载到JVM中的一个.class文件
* 每个类的实例都会记得自己是由哪个 Class 实例所生成
* 通过Class可以完整地得到一个类中的所有被加载的结构

## Class类的常用方法
|方法名|功能说明|
|:-----|:-----|
|static Class forName(String reference)|根据类的全路径名，返回一个 Class类|
|Object newInstance()|返回该Class对象的一个实例|
|getName()|返回此Class对象所表示的实体`全路径名`|
|Class getSuperclass()|返回当前Class对象的父类的Class对象|
|Class [] getInterfaces()|获取当前Class对象的接口|
|ClassLoader getClassLoader()|返回该类的类加载器|
|Constructor[] getConstructors()|返回一个包含某些Constructor对象的数组|
|Field[] getDeclaredFields()|返回Field对象的一个数组|
|Method getMethod(String name,Class … paramTypes)|返回一个Method对象，此对象的形参类型为paramType|

## 反射的应用举例
案例：读取配置配置文件中的配置，通过反射调用类中的方法。

re.properties
```properties
classpath=top.zxqs.Cat
method=hello
```
```java
public void test(){
  Properties properties = new Properties();
  // 读取配置文件的内容
  properties.load(new FileInputStream("src\\re.properties"));

  String classpath = properties.getProperty("classpath");
  String methodName = properties.getProperty("method");

  // 加载类，返回Class类型的对象
  Class<?> aClass = Class.forName(classpath);
  // 得到 classpath 的对象实例
  Object cat = aClass.newInstance();
  /**
    * String name, Class<?>... parameterTypes  获取方法对象
    * methodName：方法名称
    * parameterTypes：方法需要的参数的 Class 类型，可以有多个
    */
  Method method = aClass.getMethod(methodName,String.class);

  /**
    * invoke(Object obj, Object... args)   执行方法
    * obj：对象实例
    * args：根据getMethod()设置的parameterTypes，传递相对应类型的值
    */
  method.invoke(cat,"2");

  Field nameFile = aClass.getField("age");
}
```
结果：hello2招财猫

```java
public class Cat extends Animal {
    public String name = "招财猫";
    public Integer age = 4;
    public String color = "白色";
    public void hello(String num){
        System.out.println("hello"+ num + name);
    }
    public void hello2(){
        System.out.println("hello2" + name);
    }
    public Cat(String name) {
        this.name = name;
    }
    public Cat() {
    }
    @Override
    public String toString() {
        return "Cat{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", color='" + color + '\'' +
                '}';
    }
}
```

**<font color='red'>注意</font>**：

::: tip

aClass.newInstance() 只能调用空参构造，所以类中必须有空参构造，同时，类的构造器的访问权限需要足够

可以使用`getDeclaredConstructor(Class … parameterTypes)`方法获取对应的构造器然后再得到对象实例

:::

```java
Class<?> aClass = Class.forName(classpath);
//调用指定参数结构的构造器，生成Constructor的实例
Constructor<?> declaredConstructor = aClass.getDeclaredConstructor(String.class,Integer.class,String.class);
// 通过Constructor的实例创建对应类的对象，并初始化类属性
Cat cat = (Cat) declaredConstructor.newInstance("加菲猫",5,"黄色");

System.out.println(cat);
```

::: tip

getField() 方法不能获取`私有(private)`的成员变量

:::


## 获取Class实例的方法

1. 若已知具体的类，通过类的class属性获取，该方法最为安全可靠，程序性能最高 
   
   `Class clazz = String.class;`
2. 已知某个类的实例，调用该实例的getClass()方法获取Class对象
   
   `Class clazz = cat.getClass();`

3. 已知一个类的全类名

   `Class clazz = Class.forName("java.lang.String");`

4. 其他方式

   `ClassLoader cl = this.getClass().getClassLoader();`

   `lass clazz4 = cl.loadClass(“类的全类名”);`

## 哪些类型可以有Class对象

1. class： 外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类
2. interface：接口
3. []：数组
4. enum：枚举
5. annotation：注解@interface
6. primitive type：基本数据类型
7. void

