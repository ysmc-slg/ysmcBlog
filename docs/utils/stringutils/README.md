---
description: StringUtils 工具类
---
在开发中，Apache 的 StringUtils 工具类有许多方法比 jdk 实现的方便许多。

首先引入依赖

```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.5</version>
</dependency>
```

**null 和 "" 有关的 API**

| 方法 | 含义 |  补充  |
|------|------|-------|
| `isEmpty(CharSequence cs)` | 判断是否为null 或者 "" | 不去空格 |
| `isNotEmpty(null)` | 是否不为null，不去空格 | |
| `isBlank(CharSequence cs)` | 判断是否为null 或者 "" | 去空格 |
| `isNotBlank(CharSequence cs)` | 判断是否 `不为` null 或者 "" | 去空格 |
| `trim()` | 去除字符串的空格 | trim(null) 返回 null |
| trimToNull(String str) | 去空格，将 Null 和 "" 转换为 Null | StringUtils.trimToNull("") |
| trimToEmpty(String str) | 去空格，将NULL 和 "" 转换为"" | StringUtils.trimToEmpty(null) |
| defaultString(String str) | 将""或者Null 转换为 "" | 不去空格 |
| defaultString(String str, String defaultStr) | 仅当参数1为 null 是，返回值为 参数2 | StringUtils.defaultString(null, "df") |
| defaultIfEmpty(T str, T defaultStr) | 当字符串为null或者""时，转换为指定的字符串(二参数) | StringUtils.defaultIfEmpty("", "sos") |

**去空格.去字符**

| 方法 | 含义 |  补充  |
|------|------|-------|
| strip(String str, String stripChars) | 如果第二个参数为null去空格(否则去掉字符串2边一样的字符) | StringUtils.strip("fsfsdf", "f") |
| stripStart(String str, String stripChars) | 如果第二个参数为null只去前面空格(否则去掉字符串前面一样的字符) | StringUtils.stripStart("ddsuuu ", "d") |
| stripEnd(String str, String stripChars) | 如果第二个参数为null只去后面空格，(否则去掉字符串后面一样的字符) | StringUtils.stripEnd("dabads", "das") |

**查找,判断**

| 方法 | 含义 |  补充  |
|------|------|-------|
| equals(Object anObject) | 判断2个字符串是否相等相等,Null也相等 | StringUtils.equals(null, null) |
| equalsIgnoreCase(CharSequence cs1, CharSequence cs2) | 不区分大小写比较 | StringUtils.equalsIgnoreCase("abc", "ABc") |
| stripEnd(String str, String stripChars) | 如果第二个参数为null只去后面空格，(否则去掉字符串后面一样的字符) | StringUtils.stripEnd("dabads", "das") |
|indexOf(CharSequence seq, CharSequence searchSeq)| 查找字符第一次出现的下标，如果参数1位null 或 "" 返回 -1 | StringUtils.indexOf(null, "a") 下标从0开始 |
| indexOf(CharSequence seq, CharSequence searchSeq, int startPos) | 从指定位置开始查找字符出现的下标，参数3 是指定查找的位置，查不到返回 -1 | StringUtils.indexOf("akfekcd中华", "k", 2) 下标从0开始 |
|indexOfIgnoreCase(CharSequence str, CharSequence searchStr)| 查找，不区分大小写，返回值为字符出现的下标，查不到返回 -1 |StringUtils.indexOfIgnoreCase("adfs", "D") 下标从0开始|
|indexOfIgnoreCase(CharSequence str, CharSequence searchStr, int startPos)|从指定位置(参数3)开始查找,不区分大小写，查不到返回 -1| StringUtils.indexOfIgnoreCase("adfs", "a", 3) 下标从0开始|
|lastIndexOf(CharSequence seq, CharSequence searchSeq) |从后往前查找| StringUtils.lastIndexOf("adfas", "a") |
|lastIndexOfIgnoreCase(CharSequence seq, CharSequence searchSeq)|从后往前查，不区分大小写|StringUtils.lastIndexOfIgnoreCase("sdffet", "E")|


```java
//参数1是否包含参数2，返回boolean,null返回假
System.out.println(StringUtils.contains("sdf", "dg"));

//参数1是否包含参数2，返回boolean,null返回假,不区分大小写
System.out.println(StringUtils.containsIgnoreCase("sdf", "D"));

//检查是否有含有空格,返回boolean
System.out.println(StringUtils.containsWhitespace(" d"));

//查询字符串跟数组任一元素相同的第一次相同的位置
System.out.println(StringUtils.indexOfAny("absfekf", new String[]{"f", "b"}));

//查询字符串中指定字符串(参数二)出现的次数
System.out.println(StringUtils.indexOfAny("afefes", "e"));

//查找字符串中是否有字符数组中相同的字符，返回boolean
System.out.println(StringUtils.containsAny("asfsd", new char[]{'k', 'e', 's'}));

//参数1是否包含参数2，返回boolean，底层将参数2转成字节数组，和参数1，一一进行比较，只要有一个字节相等就返回 true
System.out.println(StringUtils.containsAny("dfghafb", "fa"));  // true

//检查是否只包含数值。
System.out.println(StringUtils.isNumeric("123"));

//检查是否只包含数值或者空格
System.out.println(StringUtils.isNumericSpace("33 545"));

//检查是否只是空格或""。
System.out.println(StringUtils.isWhitespace(" "));

//检查是否全是英文小写。
System.out.println(StringUtils.isAllLowerCase("kjk33")); //false

//检查是否全是英文大写。
System.out.println(StringUtils.isAllUpperCase("KJKJ"));

```

**交集操作**

```java
// 去掉两个参数开头共有的字符，没有相同的返回参数2
System.out.println(StringUtils.difference("中国加油", "中国人民共和加油")); // 人民共和加油

//统计2个字符串开始部分共有的字符个数，没有相同返回0
System.out.println(StringUtils.indexOfDifference("ww.taobao", "www.taobao.com")); //2

//统计数组中各个元素的字符串开始都一样的字符个数，没有相同返回0
System.out.println(StringUtils.indexOfDifference(new String[] {"中国加油", "中国共和", "中国人民"})); // 2

//返回数组中元素开头共有的字符串，开头没有相同返回 ""
System.out.println(StringUtils.getCommonPrefix(new String[] {"中国加油", "中国共和", "中国人民"})); // 中国

//统计参数一中每个字符与参数二中每个字符不同部分的字符个数
System.out.println(StringUtils.getLevenshteinDistance("中国共和发国人民", "共和国"));

//判断开始部分是否与二参数相同
System.out.println(StringUtils.startsWith("中国共和国人民", "中国"));

//判断开始部分是否与二参数相同。不区分大小写
System.out.println(StringUtils.startsWithIgnoreCase("中国共和国人民", "中国"));

//判断字符串开始部分是否与数组中的某一元素相同
System.out.println(StringUtils.startsWithAny("abef", new String[]{"ge", "af", "ab"}));

//判断结尾是否相同
System.out.println(StringUtils.endsWith("abcdef", "def"));

//判断结尾是否相同，不区分大小写
System.out.println(StringUtils.endsWithIgnoreCase("abcdef", "Def"));
```