---
description: json 序列化
---

# json 序列化

## fastjson

首先引入依赖

```xml
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <!--（起码1.2.48以上）因为这个版本一下存在漏洞-->
    <version>版本根据自己需要</version>
</dependency>

```

常用API

```java
public static final Object parse(String text); // 把JSON文本parse为JSONObject或者JSONArray

public static final JSONObject parseObject(String text)； // 把JSON文本parse成JSONObject 
    
public static final <T> T parseObject(String text, Class<T> clazz); // 把JSON文本parse为JavaBean 

public static final JSONArray parseArray(String text); // 把JSON文本parse成JSONArray 

public static final <T> List<T> parseArray(String text, Class<T> clazz); //把JSON文本parse成JavaBean集合 

public static final String toJSONString(Object object); // 将JavaBean序列化为JSON文本 

public static final String toJSONString(Object object, boolean prettyFormat); // 将JavaBean序列化为带格式的JSON文本 

public static final Object toJSON(Object javaObject); //将JavaBean转换为JSONObject或者JSONArray。

```

SONObject，JSONArray为JSON的子类，`JSONObject相当于Map<String, Object>，JSONArray相当于List< Object>`

### @JSONField 注解

```java
//指定name属性, 字段的名称
@JSONField(name = "gridId")
private String id;

//使用 ordinal属性, 指定字段的顺序
@JSONField(ordinal = -1)
private String loginName;

//使用 serialize属性, 指定字段不序列化
@JSONField(serialize = false)
private String name;

//使用 format属性, 指定日期格式
@JSONField(format = "yyyy-MM-dd")
private Date createTime;
```

## Jackson

```java
readValue(String content, Class<T> valueType)      // json 字符串 装对象

String writeValueAsString(Object value)           // 对象装json字符串

````

```java
/**
  * 反序列化
  */
@Test
public void test2() throws Exception {
    String str = "{\"id\":1,\"pwd\":\"123\",\"address\":\"河南\",\"website_url\":\"http://www.roadjava.com\",\"register_date\":\"2021-08-17 04:29:42\",\"birth_day\":\"2021-08-17 04:29:42\"}";
    User user = objectMapper.readValue(str, User.class);
    System.out.println(user);
}
/**
  * 序列化
  */
@Test
public void test1() throws JsonProcessingException {
    User user = new User();
    user.setId(1L);
//        user.setName("乐之者java");
    user.setPwd("123");
    user.setAddr("河南");
    user.setWebsiteUrl("http://www.roadjava.com");
    user.setRegisterDate(new Date());
    user.setBirthDay(LocalDateTime.now());
    String string = objectMapper.writeValueAsString(user);
    System.out.println(string);
}
```

### 注解


![2023-02-27_173648](https://img.zxqs.top/20230227173839.png)


### 全局配置

```yml
spring:
  jackson:
    # 设置属性命名策略,对应jackson下PropertyNamingStrategy中的常量值，SNAKE_CASE-返回的json驼峰式转下划线，json body下划线传到后端自动转驼峰式
    property-naming-strategy: SNAKE_CASE
    # 全局设置@JsonFormat的格式pattern
    date-format: yyyy-MM-dd HH:mm:ss
    # 当地时区
    locale: zh_CN
    # 设置全局时区
    time-zone: GMT+8
    # 常用，全局设置pojo或被@JsonInclude注解的属性的序列化方式
    default-property-inclusion: NON_NULL #不为空的属性才会序列化,具体属性可看JsonInclude.Include
    # 常规默认,枚举类SerializationFeature中的枚举属性为key，值为boolean设置jackson序列化特性,具体key请看SerializationFeature源码
    visibility:
      #属性序列化的可见范围
      getter: non_private
      #属性反序列化的可见范围
      setter: protected_and_public
      #静态工厂方法的反序列化
      CREATOR: public_only
      #字段
      FIELD: public_only
      #布尔的序列化
      IS_GETTER: public_only
      #所有类型(即getter setter FIELD）不受影响,无意义
      NONE: public_only
      #所有类型(即getter setter FIELD）都受其影响（慎用）
      ALL: public_only
    serialization:
      #反序列化是否有根节点
      WRAP_ROOT_VALUE: false
      #是否使用缩进，格式化输出
      INDENT_OUTPUT: false
      FAIL_ON_EMPTY_BEANS: true # 对象不含任何字段时是否报错，默认true
      FAIL_ON_SELF_REFERENCES: true #循环引用报错
      WRAP_EXCEPTIONS: true #是否包装异常
      FAIL_ON_UNWRAPPED_TYPE_IDENTIFIERS: true #JsonUnwrapped标记的类有类型信息是否报错
      WRITE_SELF_REFERENCES_AS_NULL: false #循环引用返回null
      CLOSE_CLOSEABLE: true #若对象实现了CLOSEABLE接口，在序列化后是否调用Close方法
      FLUSH_AFTER_WRITE_VALUE: false #流对象序列化之后是否强制刷新
      WRITE_DATES_AS_TIMESTAMPS: true # 返回的java.util.date转换成时间戳
      WRITE_DATES_WITH_ZONE_ID: true #2011-12-03T10:15:30+01:00[Europe/Paris]带时区id
      WRITE_DURATIONS_AS_TIMESTAMPS: true #将DURATIONS转换成时间戳
      WRITE_CHAR_ARRAYS_AS_JSON_ARRAYS: false #是否字符数组输出json数组 (false则输出字符串)
      WRITE_ENUMS_USING_TO_STRING: false # 将枚举输出toString
      WRITE_ENUMS_USING_INDEX: false #枚举下标
      WRITE_ENUM_KEYS_USING_INDEX: false #枚举key类似
      WRITE_NULL_MAP_VALUES: false #是否输出map中的空entry(此特性已过期，请使用JsonInclude注解)
      WRITE_EMPTY_JSON_ARRAYS: true # 对象属性值是空集合是否输出空json数组
      WRITE_SINGLE_ELEM_ARRAYS_UNWRAPPED: false #是否将单个元素的集合展开，（即：去除数组符号"[]"）
      WRITE_BIGDECIMAL_AS_PLAIN: false #是否调用BigDecimal#toPlainString()输出
      WRITE_DATE_TIMESTAMPS_AS_NANOSECONDS: #将timestamp输出为纳秒
      ORDER_MAP_ENTRIES_BY_KEYS: false #map序列化后，是否用key对其排序
      EAGER_SERIALIZER_FETCH: true #是否马上获取序列化器
      USE_EQUALITY_FOR_OBJECT_ID: false #是否使用objectId比较是否相等（在ORM框架Hibernate中有应用）

    # 枚举类DeserializationFeature中的枚举属性为key，值为boolean设置jackson反序列化特性,具体key请看DeserializationFeature源码
    deserialization:
      USE_BIG_DECIMAL_FOR_FLOATS: false #将浮点数反序列化为BIG_DECIMAL
      USE_BIG_INTEGER_FOR_INTS: false #将整数反序列化为BIG_INTEGER
      USE_LONG_FOR_INTS: false #将整型反序列化为长整
      USE_JAVA_ARRAY_FOR_JSON_ARRAY: false #无明确类型时，是否将json数组反序列化为java数组（若是true，就对应Object[] ,反之就是List<?>）
      FAIL_ON_UNKNOWN_PROPERTIES: false # 常用,json中含pojo不存在属性时是否失败报错,默认true
      FAIL_ON_NULL_FOR_PRIMITIVES: false #将null反序列化为基本数据类型是否报错
      FAIL_ON_NUMBERS_FOR_ENUMS: false #用整数反序列化为枚举是否报错
      FAIL_ON_INVALID_SUBTYPE: false #找不至合适的子类否报错 （如注解JsonTypeInfo指定的子类型）
      FAIL_ON_READING_DUP_TREE_KEY: false #出现重复的json字段是否报错
      FAIL_ON_IGNORED_PROPERTIES: false #如果json中出现了java实体字段中已显式标记应当忽略的字段，是否报错
      FAIL_ON_UNRESOLVED_OBJECT_IDS: true #如果反序列化发生了不可解析的ObjectId是否报错
      FAIL_ON_MISSING_CREATOR_PROPERTIES: false #如果缺少静态工厂方法的参数是否报错（false,则使用null代替需要的参数）
      FAIL_ON_NULL_CREATOR_PROPERTIES: false #将空值绑定到构造方法或静态工厂方法的参数是否报错
      FAIL_ON_MISSING_EXTERNAL_TYPE_ID_PROPERTY: false #注解JsonTypeInfo.As#EXTERNAL_PROPERTY标记的属性缺失，是否报错
      FAIL_ON_TRAILING_TOKENS: false #出现尾随令牌是否报错（如果是true,则调用JsonParser#nextToken，检查json的完整性）
      WRAP_EXCEPTIONS: true #是否包装反序列化出现的异常
      ACCEPT_SINGLE_VALUE_AS_ARRAY: true #反序列化时是否将一个对象封装成单元素数组
      UNWRAP_SINGLE_VALUE_ARRAYS: false #反序列化时是否将单元素数组展开为一个对象
      UNWRAP_ROOT_VALUE: false #是否将取消根节点的包装
      ACCEPT_EMPTY_STRING_AS_NULL_OBJECT: false #是否将空字符("")串当作null对象
      ACCEPT_EMPTY_ARRAY_AS_NULL_OBJECT: false #是否接受将空数组("[]")作为null
      ACCEPT_FLOAT_AS_INT: true #是否接受将浮点数作为整数
      READ_ENUMS_USING_TO_STRING: false #按照枚举toString()方法读取，（false则按枚举的name()方法读取）
      READ_UNKNOWN_ENUM_VALUES_AS_NULL: false #读取到未知的枚举当作null
      READ_UNKNOWN_ENUM_VALUES_USING_DEFAULT_VALUE: false #读取到未知的枚举,将其当作被JsonEnumDefaultValue注解标记的枚举
      READ_DATE_TIMESTAMPS_AS_NANOSECONDS: true #将时间戳视为纳秒(false,则视为毫秒)
      ADJUST_DATES_TO_CONTEXT_TIME_ZONE: true #反序列化是否会适应DeserializationContext#getTimeZone()提供的时区 （此特性仅对java8的时间/日期有效）
      EAGER_DESERIALIZER_FETCH: true  #是否马上获取反序列化器
    # 枚举类MapperFeature中的枚举属性为key，值为boolean设置jackson ObjectMapper特性
    # ObjectMapper在jackson中负责json的读写、json与pojo的互转、json tree的互转,具体特性请看MapperFeature,常规默认即可
    mapper:
      USE_ANNOTATIONS: true #是否使用注解自省（检查JsonProperties这些）
      # 使用getter取代setter探测属性，这是针对集合类型，可以直接修改集合的属性
      USE_GETTERS_AS_SETTERS: true #默认false
      PROPAGATE_TRANSIENT_MARKER: false #如何处理transient字段，如果true(不能访问此属性) ，若是false则不能通过字段访问（还是可以使用getter和setter访问）
      AUTO_DETECT_CREATORS: true #是否自动检测构造方法或单参且名为valueOf的静态工厂方法
      AUTO_DETECT_FIELDS: true #是否自动检测字段 （若true,则将所有public实例字段视为为属性）
      AUTO_DETECT_GETTERS: true #确定是否根据标准 Bean 命名约定自动检测常规“getter”方法的（不包括is getter）
      AUTO_DETECT_IS_GETTERS: true #确定是否根据标准 Bean 命名约定自动检测“is getter”方法
      AUTO_DETECT_SETTERS: false # 确定是否根据标准 Bean 命名约定自动检测“setter”方法
      REQUIRE_SETTERS_FOR_GETTERS: false #getter方法必需要有对应的setter或字段或构造方法参数，才能视为一个属性
      ALLOW_FINAL_FIELDS_AS_MUTATORS: true #是否可以修改final成员字段
      INFER_PROPERTY_MUTATORS: true #是否能推断属性，(即使用字段和setter是不可见的，但getter可见即可推断属性)
      INFER_CREATOR_FROM_CONSTRUCTOR_PROPERTIES: true #是否自动推断ConstructorProperties注解
      CAN_OVERRIDE_ACCESS_MODIFIERS: true #调用AccessibleObject#setAccessible设为true .将原来不可见的属性，变为可见
      OVERRIDE_PUBLIC_ACCESS_MODIFIERS: true #对所有的属性调用AccessibleObject#setAccessible设为true .（即使用是公共的）
      USE_STATIC_TYPING: false #序列化使用声明的静态类型还是动态类型  JsonSerialize#typing注解可覆盖它
      USE_BASE_TYPE_AS_DEFAULT_IMPL: false # 反序列化是否使用基本类作为默实现 @JsonTypeInfo.defaultImpl
      DEFAULT_VIEW_INCLUSION: true #没有JsonView注解标记的属性是否会被包含在json序列化视图中
      SORT_PROPERTIES_ALPHABETICALLY: false #按字母表顺序序列化字段（若false，按字段声明的顺序）
      ACCEPT_CASE_INSENSITIVE_PROPERTIES: false #反序列化属性时不区分大小写 （true时，会影响性能）
      ACCEPT_CASE_INSENSITIVE_ENUMS: false #枚举反序列化不区别大小写
      ACCEPT_CASE_INSENSITIVE_VALUES: false #允许解析一些枚举的基于文本的值类型但忽略反序列化值的大小写 如日期/时间类型反序列化器
      USE_WRAPPER_NAME_AS_PROPERTY_NAME: false # 使用包装器名称覆盖属性名称 AnnotationIntrospector#findWrapperName指定的
      USE_STD_BEAN_NAMING: false # 是否以强制与 Bean 名称自省严格兼容的功能，若开启后（getURL()）变成URL （jackson默认false, url）
      ALLOW_EXPLICIT_PROPERTY_RENAMING: false #是否允许JsonProperty注解覆盖PropertyNamingStrategy
      ALLOW_COERCION_OF_SCALARS: true # 是否允许强制使用文本标题 ，即将字符串的"true"当作布尔的true ,字符串的"1.0"当作"double"
      IGNORE_DUPLICATE_MODULE_REGISTRATIONS: true #如果模块相同（Module#getTypeId()返回值相同），只有第一次能会真正调用注册方法
      IGNORE_MERGE_FOR_UNMERGEABLE: true #在合并不能合并的属性时是否忽略错误
      BLOCK_UNSAFE_POLYMORPHIC_BASE_TYPES: false #阻止不安全的基类（如Object Closeable Cloneable AutoCloseable Serializable）
    parser:
      AUTO_CLOSE_SOURCE: true #是否自动关闭不属于解析器的底层输入流
      ALLOW_COMMENTS: false #是否允许json注解（Json规范是不能加注释的，但这里可以配置）
      ALLOW_YAML_COMMENTS: false #是否允许出现yaml注释
      ALLOW_UNQUOTED_FIELD_NAMES: false #是否允许出现字段名不带引号
      ALLOW_SINGLE_QUOTES: false # 是否允许出现单引号,默认false
      ALLOW_UNQUOTED_CONTROL_CHARS: false #是否允许出现未加转义的控制字符
      ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER: false #是否允许对所有字符都可加反斜杠转义
      ALLOW_NUMERIC_LEADING_ZEROS: false #是否允许前导的零 000001
      ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS: false #是否允许前导的小点数 如 ".04314"会被解析成"0.04314"
      ALLOW_NON_NUMERIC_NUMBERS: false #是否允许NaN型的浮点数 （"INF"当作正无穷  "-INF"当作负无穷 "NaN"非数字，类型于除数为0）
      ALLOW_MISSING_VALUES: false # 是否允许json数组中出现缺失值 （如["value1",,"value3",]将被反序列化为["value1", null, "value3", null]）
      ALLOW_TRAILING_COMMA: false # 是否允许json尾部有逗号 （如{"a": true,}）
      STRICT_DUPLICATE_DETECTION: false #是否启用严格的字段名重复检查（开启后会增加20-30%左右的性能开销）
      IGNORE_UNDEFINED: false #属性定义未找到是否报错（这不是针对json,是针对Avro, protobuf等需要Schema的格式）
      INCLUDE_SOURCE_IN_LOCATION: false #是否包含其源信息（如总字节数，总字符数 行号 列号 ）
    generator:
      AUTO_CLOSE_TARGET: true #是否自动关闭不属于生成器的底层输出流
      AUTO_CLOSE_JSON_CONTENT: true #是否自动补全json(当有不匹配的JsonToken#START_ARRAY JsonToken#START_OBJECT时)
      FLUSH_PASSED_TO_STREAM: true #是否刷新generator
      QUOTE_FIELD_NAMES: true #是否为字段名添加引号
      QUOTE_NON_NUMERIC_NUMBERS: true #对于NaN浮点数是否加引号
      ESCAPE_NON_ASCII: false #非ASCII码是否需要转义
      WRITE_NUMBERS_AS_STRINGS: false #将数字当作字符串输出 （防止Javascript长度限制被截断）
      WRITE_BIGDECIMAL_AS_PLAIN: false #按BigDecimal的toPlainString()输出
      STRICT_DUPLICATE_DETECTION: false #是否启用严格的字段名重复检查
      IGNORE_UNKNOWN: false #属性定义未找到是否报错（这不是针对json,是针对Avro, protobuf等需要Schema的格式）


```

 