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

**字符串截取**

```java
//从指定位置开始截取到最后，从0开始包含头。null返回null.""返回""
System.out.println(StringUtils.substring("人生自古谁无死", 2));  //自古谁无死
//截取指定区间的字符，包含头不包含尾
System.out.println(StringUtils.substring("留取丹心照汗青", 2, 4));  //丹心
//从左截取指定长度的字符串，从1开始
System.out.println(StringUtils.left("说点什么好呢", 3));  // 说点什
//从右截取指定长度的字符串，从1开始
System.out.println(StringUtils.right("说点什么好呢", 3)); // 么好呢
// 从指定位置截取，截取字符长度为2，包含头尾
System.out.println(StringUtils.mid("说点什么好呢", 3, 2));  // 么好
//截取到等于指定字符为止，不包含指定字符
System.out.println(StringUtils.substringBefore("说点什么好呢", "好")); // 说点什么
//从左往右查，过滤掉第二个参数之前的数据，保留之后的数据
System.out.println(StringUtils.substringAfter("说点什么好呢", "点")); // 什么好呢
// 从右往左差，过滤掉第二个参数之前的数据，保留之后的数据
System.out.println(StringUtils.substringBeforeLast("说点什么好点呢", "点"));  //说点什么好
//这个截取同上是从右往左。保留第二个参数之前的数据
System.out.println(StringUtils.substringAfterLast("说点什么好点呢？", "点"));  // 呢？
// 截取 参数2 第一次出现和第二次出现中间的字符串
System.out.println(StringUtils.substringBetween("南非2010世界杯在南非，在南非", "南非")); // 2010世界杯在
```

**移除，删除**
```java
//删除所有空格符
System.out.println(StringUtils.deleteWhitespace(" s 中 你 4j"));
//移除开始部分的相同的字符
System.out.println(StringUtils.removeStart("www.baidu.com", "www."));
//移除开始部分的相同的字符,不区分大小写
System.out.println(StringUtils.removeStartIgnoreCase("www.baidu.com", "WWW"));
//移除后面相同的部分
System.out.println(StringUtils.removeEnd("www.baidu.com", ".com"));
//移除后面相同的部分，不区分大小写
System.out.println(StringUtils.removeEndIgnoreCase("www.baidu.com", ".COM"));
//移除所有相同的部分
System.out.println(StringUtils.remove("www.baidu.com/baidu", "bai"));
//移除结尾字符为"\n", "\r", 或者 "\r\n".
System.out.println(StringUtils.chomp("abcrabc\r"));
//去掉末尾最后一个字符.如果是"\n", "\r", 或者 "\r\n"也去除
System.out.println(StringUtils.chop("wwe.baidu"));
```

**添加，增加**

```java

//复制参数一的字符串，参数二为复制的次数
System.out.println(StringUtils.repeat("ba", 3));
//复制参数一的字符串，参数三为复制的次数。参数二为复制字符串中间的连接字符串
System.out.println(StringUtils.repeat("ab", "ou", 3));
//如何字符串长度小于参数二的值，末尾加空格补全。(小于字符串长度不处理返回)
System.out.println(StringUtils.rightPad("海川", 4));
//字符串长度小于二参数，末尾用参数三补上，多于的截取(截取补上的字符串)
System.out.println(StringUtils.rightPad("海川", 4, "河流啊"));
//同上在前面补全空格
System.out.println(StringUtils.leftPad("海川", 4));
//字符串长度小于二参数，前面用参数三补上，多于的截取(截取补上的字符串)
System.out.println(StringUtils.leftPad("海川", 4, "大家好"));
//字符串长度小于二参数。在两侧用空格平均补全（测试后面补空格优先）
System.out.println(StringUtils.center("海川", 3));
//字符串长度小于二参数。在两侧用三参数的字符串平均补全（测试后面补空格优先）
System.out.println(StringUtils.center("海川", 5, "流"));
//只显示指定数量(二参数)的字符,后面以三个点补充(参数一截取+三个点=二参数)
System.out.println(StringUtils.abbreviate("中华人民共和国", 5));
//2头加点这个有点乱。本例结果: ...ijklmno
System.out.println(StringUtils.abbreviate("abcdefghijklmno", 12, 10));
//保留指定长度，最后一个字符前加点.本例结果: ab.f
System.out.println(StringUtils.abbreviateMiddle("abcdef", ".", 4));
```

**替换**

```java
//替换指定的字符，只替换第一次出现的
System.out.println(StringUtils.replaceOnce("www.baidu.com/baidu", "baidu", "hao123"));
//替换所有出现过的字符
System.out.println(StringUtils.replace("www.baidu.com/baidu", "baidu", "hao123"));
//也是替换，最后一个参数表示替换几个
System.out.println(StringUtils.replace("www.baidu.com/baidu", "baidu", "hao123", 1));
//这个有意识，二三参数对应的数组，查找二参数数组一样的值，替换三参数对应数组的值。本例:baidu替换为taobao。com替换为net
System.out.println(StringUtils.replaceEach("www.baidu.com/baidu", new String[]{"baidu", "com"}, new String[]{"taobao", "net"}));
//同上，未发现不同
System.out.println(StringUtils.replaceEachRepeatedly("www.baidu.com/baidu", new String[]{"baidu", "com"}, new String[]{"taobao", "net"}));
//这个更好，不是数组对应，是字符串参数二和参数三对应替换.(二三参数不对应的话，自己看后果)
System.out.println(StringUtils.replaceChars("www.baidu.com", "bdm", "qo"));
//替换指定开始(参数三)和结束(参数四)中间的所有字符
System.out.println(StringUtils.overlay("www.baidu.com", "hao123", 4, 9));
```

**转换,刷选**

```java
//转换第一个字符为大写.如何第一个字符是大写原始返回
System.out.println(StringUtils.capitalize("Ddf"));
//转换第一个字符为大写.如何第一个字符是大写原始返回
System.out.println(StringUtils.uncapitalize("DTf"));
//反向转换，大写变小写，小写变大写
System.out.println(StringUtils.swapCase("I am Jiang, Hello"));
//将字符串倒序排列
System.out.println(StringUtils.reverse("中国人民"));
//根据特定字符(二参数)分隔进行反转
System.out.println(StringUtils.reverseDelimited("中:国:人民", ':'));
```