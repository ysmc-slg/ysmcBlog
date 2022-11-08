---
description: Class类
autoPrev: README
---

# Class类

## 简介
对于每个类而言，JRE 都为其保留一个不变的 Class 类型的对象。一个 Class 对象包含
了特定某个结构的有关信息。

* Class本身也是一个类
* Class 对象只能由系统建立对象
* 一个加载的类在 JVM 中只会有一个Class实例
* 一个Class对象对应的是一个加载到JVM中的一个.class文件
* 每个类的实例都会记得自己是由哪个 Class 实例所生成
* 通过Class可以完整地得到一个类中的所有被加载的结构

## 获取字节码文件对象的几种方式

* 对象.getClass()
* 类名.class
* Class.forName(String className) 全限定名
* ClassLoader.loadClass(String name)


```java
public class Demo {
    public static void main(String[] args) throws ClassNotFoundException {
        // - 对象.getClass()
        Stu stu = new Stu();
        Class<? extends Stu> c1 = stu.getClass();
        //- 类名.class
        Class<Stu> c2 = Stu.class;

        System.out.println(c1 == c2);

        //- Class.forName(String className)  全限定名
        Class<?> c3 = Class.forName("_23reflect.com.cskaoyan._02cls.Stu");
        System.out.println(c1 == c3);
        //- ClassLoader.loadClass(String name)
        ClassLoader systemClassLoader = ClassLoader.getSystemClassLoader();
        Class<?> c4 = systemClassLoader.loadClass("_23reflect.com.cskaoyan._02cls.Stu");

        System.out.println(c1 == c4);
    }
}


class Stu{

}
```

## 获取构造方法

**获取所有构造方法**

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| Constructor[] | getConstructors()  | 只能获取被public修饰的构造方法 |
| Constructor[] | getDeclaredConstructors()  | 获取所有构造方法 |

**获取指定构造方法**

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| `Constructor<T>` | getConstructor(Class<?>... parameterTypes)  | 获取指定的 public 构造方法，参数是一个 Class 类（String.class ...） |
| `Constructor<T>` | getDeclaredConstructor(Class<?>... parameterTypes)  | 获取指定的构造方法 |

**使用Constructor创建对象**

```java
// 通过反射获取构造方法
public class Demo {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        // 获取字节码文件对象
        Class<?> personCls = Class.forName("_23reflect.com.cskaoyan.bean.Person");

        System.out.println("获取所有的public的构造方法");
        // Constructor[] getConstructors()
        Constructor<?>[] constructors = personCls.getConstructors();
        for (Constructor constructor : constructors) {
            System.out.println(constructor);
        }
        System.out.println("获取所有的构造方法------");

        //Constructor[] getDeclaredConstructors()
        Constructor<?>[] declaredConstructors = personCls.getDeclaredConstructors();
        for (Constructor constructor : declaredConstructors) {
            System.out.println(constructor);
        }
        System.out.println("获取指定的public的构造方法------");

        // Constructor<T> getConstructor(Class<?>... parameterTypes)
        Constructor<?> constructor = personCls.getConstructor(String.class, int.class, boolean.class);
        System.out.println(constructor);

        System.out.println("获取指定的构造方法------");

        //Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes)
        Constructor<?> declaredConstructor = personCls.getDeclaredConstructor(String.class, int.class);
        System.out.println(declaredConstructor);

        // **使用Constructor创建对象**
        Object o = constructor.newInstance("zs", 20, true);
        System.out.println(o);

        // void setAccessible(boolean flag)
        // 忽略java语法检查
        declaredConstructor.setAccessible(true);
        Object o1 = declaredConstructor.newInstance("ls", 21);
        System.out.println(o1);


    }
}
```

## 通过反射获取成员变量

**获取所有成员变量**

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| Field[] | getFields()  | 获取所有被 public 修饰的成员变量 |
| Field[] | getDeclaredFields()  | 获取所有成员变量 |

**获取指定成员变量**

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| Field | getField(String name)  | 获取指定被public修改的变量 |
| Field | getDeclaredField(String name)  | 获取指定成员变量 |
```java
public class Demo2 {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchFieldException, NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException {
        // **通过反射获取所有成员变量**
        Class<?> personCls = Class.forName("_23reflect.com.cskaoyan.bean.Person");

        System.out.println("通过反射获取所有的public成员变量");
        // Field[] getFields()
        Field[] fields = personCls.getFields();
        for (Field field : fields) {
            System.out.println(field);
        }
        //Field[] getDeclaredFields()
        System.out.println("通过反射获取所有成员变量");
        Field[] declaredFields = personCls.getDeclaredFields();

        for (Field field : declaredFields) {
            System.out.println(field);
        }

        // **获取指定成员变量**
        System.out.println("通过反射获取指定的public成员变量");
        //Field getField(String name)
        Field nameField = personCls.getField("name");
        System.out.println(nameField);
        //Field getDeclaredField(String name)
        System.out.println("通过反射获取指定的成员变量");
        Field ageField = personCls.getDeclaredField("age");
        System.out.println(ageField);

    }
}
```
## 通过反射获取成员方法
**获取所有成员方法**

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| Method[] | getMethods()  | 获取所有被 public 修饰的成员方法 |
| Method[] | getDeclaredMethods()  | 获取所有成员方法 |

**获取指定的成员方法**

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| Method | getMethods(String name, Class<?>... parameterTypes)  | 获取指定的，被 public 修饰的成员方法，参数可以有多个，是 Class 类 |
| Method | getDeclaredMethods(String name, Class<?>... parameterTypes)  | 获取指定的成员方法，参数可以有多个，是 Class 类 |

**利用Method调用对象的方法**

```java
Object invoke(Object obj, Object... args)
```

第一个参数为调用的对象，args是一个可变参数，是调用方法需要的参数

```java
public class Demo3 {
    public static void main(String[] args) throws Exception {
        Class<?> personCls = Class.forName("_23reflect.com.cskaoyan.bean.Person");

        System.out.println("**获取所有public成员方法**");
        // Method[] getMethods()
        Method[] methods = personCls.getMethods();
        for (Method method : methods) {
            System.out.println(method);
        }
        //Method[] getDeclaredMethods()
        System.out.println("**获取所有的成员方法**");

        Method[] declaredMethods = personCls.getDeclaredMethods();
        for (Method method : declaredMethods) {
            System.out.println(method);
        }

        System.out.println("**获取指定的public成员方法**");
        // Method getMethod(String name, Class<?>... parameterTypes)
        Method eatMethod1 = personCls.getMethod("eat");
        System.out.println(eatMethod1);
        //Method getDeclaredMethod(String name, Class<?>... parameterTypes)
        Method eatMethod2 = personCls.getDeclaredMethod("eat", String.class);
        System.out.println(eatMethod2);

        //**利用Method调用对象的方法**
        // Object invoke(Object obj, Object... args)
        Constructor<?> declaredConstructor = personCls.getDeclaredConstructor();
        Object o = declaredConstructor.newInstance();
        eatMethod1.invoke(o);

        eatMethod2.setAccessible(true);
        eatMethod2.invoke(o, "apple");

    }
}
```
## Properties
`Properties` 类表示了一个持久的属性集。`Properties`  可保存在流中或从流中加载。属性列表中每个键及其对应值都是一个字符串。

**成员方法**

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| void | load(InputStream inStream) | 从输入流中读取属性列表（键和元素对）。 |
| void | load(Reader reader)  | 按简单的面向行的格式从输入字符流中读取属性列表（键和元素对）。 |
| String | getProperty(String key)  | 用指定的键在此属性列表中搜索属性 |

**案例：读取配置配置文件中的配置，通过反射调用类中的方法。**

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

**<div style="color:red">注意</div>**：

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

## 其他API

|返回值|方法|详情|
| ---- | --------------------- | --------- |
| String | getName() | 获取全类名 |
| String | getSimpleName  | 获取类名 |
| `Class<?>` | getSuperclass()  | 获取父类 | 
| `Class<?>[]` | getInterfaces()  | 获取实现的接口 |
| `ClassLoade` | getClassLoader()  | 获取类加载器 |
| `Class<?>` | getSuperclass()  | 获取父类 |
| `Class<?>` | getSuperclass()  | 获取父类 |

```java
public class Demo2 {
    public static void main(String[] args) throws Exception{
        Class<?> personCls = Class.forName("_23reflect.com.cskaoyan.bean.Person");
        //Class<?> personCls = Class.forName("java.io.OutputStream");
        // 获取全类名
        String name = personCls.getName();
        System.out.println(name);
        // 获取简单名
        String simpleName = personCls.getSimpleName();
        System.out.println(simpleName);

        // 获取父类
        Class<?> superclass = personCls.getSuperclass();
        System.out.println(superclass.getSimpleName());

        // 获取实现的接口
        Class<?>[] interfaces = personCls.getInterfaces();
        for (Class i : interfaces) {
            System.out.println(i);
        }

        // 获取类加载器
        ClassLoader classLoader = personCls.getClassLoader();
        System.out.println(classLoader);

        Field nameField = personCls.getDeclaredField("name");
        // 获取权限修饰符
        int modifiers = nameField.getModifiers();
        System.out.println(modifiers);
        // static String toString(int mod)
        //          返回描述指定修饰符中的访问修饰符标志的字符串
        String s = Modifier.toString(modifiers);
        System.out.println(s);

        Method eatMethod = personCls.getDeclaredMethod("eat", String.class);
        // 方法的返回值
        Class<?> returnType = eatMethod.getReturnType();
        System.out.println(returnType);
		    // 方法参数
        Class<?>[] parameterTypes = eatMethod.getParameterTypes();
        for (Class p : parameterTypes) {
            System.out.println(p);
        }

    }
}
```

## 哪些类型可以有Class对象

1. class： 外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类
2. interface：接口
3. []：数组
4. enum：枚举
5. annotation：注解@interface
6. primitive type：基本数据类型
7. void

