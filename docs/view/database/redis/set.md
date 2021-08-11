---
title: Set
autoPrev: list
---

:::tip

Redis set对外提供的功能与list类似，是一个列表的功能，特殊之处在于set是可以`自动排重`的，当你需要存储一个列表数据，又不希望出现重复数据时，set是一个很好的选择，并且set提供了`判断某个成员是否在一个set集合内`命令，这个也是list所不能提供的。

Redis的Set是string类型的无序集合。它底层其实是一个value为null的hash表

:::

## 常用命令
```java
// 将一个或多个 member 元素加入到集合 key 中，已经存在的 member 元素将被忽略
sadd <key><value1><value2> ..... 
```
![sadd](http://img.zxqs.top/20210528101002.png)