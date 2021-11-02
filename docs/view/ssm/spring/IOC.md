---
title: IOC
---
## IOC 概念
IOC（Inversion of Control），中文叫做控制反转。这是一个概念，也是一种思想。控制反转，实际上就是指，对一个对象的控制权的反转。例如，如下代码：
```java
public class Book {
  private Integer id;
  private String name;
  private Double price;

  // ...省略 setter/getter方法
}
```
```java
public class User {
  private Integer id;
  private String name;
  private Integer age;

  public void doSth(){
    Book book = new Book();
    book.setID(1);
    book.setName("三国演义");
    book.setPrice(20.0d)
  }
}
```

在这种情况下，Book对象的控制权在User对象里边，这样，Book和User高度耦合，如果在其他对象中使用Book对象，得重新创建，也就是说，对象的创建、初始化、销毁等操作，统统都要开发者自己来完成。如果能将这些操作交给容器来管理，开发者就可以极大的从对象的创建中解脱出来。

使用Spring之后，我们可以将对象的创建、初始化、销毁等操作交给spring容器来管理。就是说，在项目启动时，所有的Bean都将自己注册到spring容器中去（如果有必要的话），然后如果其他Bean需要使用到这个Bean，则不需要自己去new，而是直接去Spring容器中去要