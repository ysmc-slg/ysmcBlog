---
description: 常用方法
autoPrev: class
---

# 常用方法

## 获取类的方法

获取Class类的四种方法上面已经说了，这里不多介绍。下面主要介绍常用的一些方法.

```java
Class<?> clazz  = Class.forName("com.Dan.Consumer");
Object object = clazz.newInstance();
```

```java
public Method[] getDeclaredMethods()
// 返回 Method 对象的一个数组，获取本类所有方法，`包括公共、保护、默认（包）访问和私有方法，但不包括继承的方法`。
```

 
