---
title: 枚举常见的用法
---

### 常量定义

```java
public enum WeekDay {
    SUN, MON, TUE, WED, THT, FRI, SAT
}
```

### swich

```java
public enum WeekDay {
    SUN, MON, TUE, WED, THT, FRI, SAT
}
 
public class SelectDay{
    WeekDay weekday = WeekDay.SUN;
    public void select(){
        switch(weekday){
            case SUN:
                weekday = WeekDay.SUN;
                break;
            ...
        }
    }
}
```

### 向枚举添加新方法

```java
public enum Color {  
    RED("红色", 1), GREEN("绿色", 2), BLANK("白色", 3), YELLO("黄色", 4);  
    // 成员变量  
    private String name;  
    private int index;  
    // 构造方法  
    private Color(String name, int index) {  
        this.name = name;  
        this.index = index;  
    }  
    // 普通方法  
    public static String getName(int index) {  
        for (Color c : Color.values()) {  
            if (c.getIndex() == index) {  
                return c.name;  
            }  
        }  
        return null;  
    }  
    // get set 方法  
    public String getName() {  
        return name;  
    }  
    public void setName(String name) {  
        this.name = name;  
    }  
    public int getIndex() {  
        return index;  
    }  
    public void setIndex(int index) {  
        this.index = index;  
    }  
}  
```

### 实现接口
```java
public interface Behaviour { 
    void print(); 
    String getInfo(); 
} 
public enum Color implements Behaviour{ 
    RED("红色", 1), GREEN("绿色", 2), BLANK("白色", 3), YELLO("黄色", 4); 
    // 成员变量 
    private String name; 
    private int index; 
    // 构造方法 
    private Color(String name, int index) { 
        this.name = name; this.index = index; 
    } 
    //接口方法 
    @Override 
    public String getInfo() { 
        return this.name; 
    } 
    //接口方法 
    @Override 
    public void print() { 
        System.out.println(this.index+":"+this.name); 
    } 
}
```