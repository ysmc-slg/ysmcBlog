---
description: 对象复制 工具类
---

```java
/**
 * 自定义属性赋值工具
 * @author zxq
 */
public class CustomCopyUtil {

    /**
     * 属性复制方法，兼容自动映射和显式映射两种模式
     *
     * @param source       源对象
     * @param target       目标对象
     * @param fieldMapping 显式字段映射（可为 null）
     */
    public static void copyProperties(Object source, Object target, Map<String, String> fieldMapping) {
        if (source == null || target == null) {
            throw new IllegalArgumentException("Source and target objects must not be null.");
        }

        if (fieldMapping == null) {
            fieldMapping = new HashMap<>();
        }

        // 自动映射字段
        autoMapFields(source.getClass(), target.getClass(), fieldMapping);

        for (Map.Entry<String, String> entry : fieldMapping.entrySet()) {
            String sourceFieldPath = entry.getKey();
            String targetFieldPath = entry.getValue();

            try {
                Object sourceValue = getNestedFieldValue(source, sourceFieldPath);
                if (sourceValue != null) {
                    setNestedFieldValue(target, targetFieldPath, sourceValue);
                }
            } catch (Exception e) {
                System.err.println("Error copying field: " + sourceFieldPath + " -> " + targetFieldPath);
                e.printStackTrace();
            }
        }
    }

    /**
     * 自动匹配字段映射
     *
     * @param sourceClass  源类
     * @param targetClass  目标类
     * @param fieldMapping 字段映射
     */
    private static void autoMapFields(Class<?> sourceClass, Class<?> targetClass, Map<String, String> fieldMapping) {
        for (Field sourceField : sourceClass.getDeclaredFields()) {
            String sourceFieldName = sourceField.getName();

            // 如果显式映射中没有该字段，尝试自动匹配
            if (!fieldMapping.containsKey(sourceFieldName)) {
                try {
                    Field targetField = targetClass.getDeclaredField(sourceFieldName);
                    if (targetField != null) {
                        // 自动匹配字段
                        fieldMapping.putIfAbsent(sourceFieldName, sourceFieldName);
                    }
                } catch (NoSuchFieldException ignored) {
                    // 如果目标类中不存在该字段，跳过
                }
            }
        }
    }

    /**
     * 获取嵌套字段的值
     */
    private static Object getNestedFieldValue(Object obj, String fieldPath) throws Exception {
        String[] fields = fieldPath.split("\\.");
        Object currentObj = obj;

        for (String fieldName : fields) {
            if (currentObj == null) {
                return null;
            }
            Field field = currentObj.getClass().getDeclaredField(fieldName);
            field.setAccessible(true);
            currentObj = field.get(currentObj);
        }
        return currentObj;
    }

    /**
     * 设置嵌套字段的值
     */
    private static void setNestedFieldValue(Object obj, String fieldPath, Object value) throws Exception {
        String[] fields = fieldPath.split("\\.");
        Object currentObj = obj;

        for (int i = 0; i < fields.length - 1; i++) {
            String fieldName = fields[i];
            Field field = currentObj.getClass().getDeclaredField(fieldName);
            field.setAccessible(true);

            Object nextObj = field.get(currentObj);
            if (nextObj == null) {
                nextObj = field.getType().getDeclaredConstructor().newInstance();
                field.set(currentObj, nextObj);
            }
            currentObj = nextObj;
        }

        String finalFieldName = fields[fields.length - 1];
        Field finalField = currentObj.getClass().getDeclaredField(finalFieldName);
        finalField.setAccessible(true);
        finalField.set(currentObj, value);
    }

}
```

使用方法：

```java
public class User {
    private String name;
    private int age;
    private Son son;
}
```

```java
// Person.java
public class Person {
    private String userName;
    private String age;
    private Son son;
}
```

```java
// Son.java
public class Son {
    private String name;
    private int age;
}
```

```java
public void test(){
    User user = new User();
    user.setName("Alice");
    user.setAge(30);

    Son son = new Son();
    son.setName("Tom");
    son.setAge(10);
    user.setSon(son);

    Person person = new Person();

    CustomCopyUtil.copyProperties(user,person,reverse());
    log.error("person:{}",person);
}

public Map<String, String> reverse(){
    Map<String, String> fieldMapping = new HashMap<>();
    fieldMapping.put("name", "userName");
    fieldMapping.put("son.age", "son.age");
    return fieldMapping;
}

```

如果两个实体的变量名是一致的，fieldMapping 可以传 `null` 或者 `空串`。变量名不一致的情况要指定映射规则，对象嵌套的场景也可是复制
