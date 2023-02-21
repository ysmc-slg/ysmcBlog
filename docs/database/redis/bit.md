---
description: Bit位图
autoPrev: distributedLock
---

# Bit位图

BIT位图不是实际的数据类型，而是在 String 类型上定义的一组面向位的操作。而 String 类型的 key 是二进制格式的，所以任意二进制格式的数据都可以作为key。

用户一年的签到记录，如果你用 string 类型来存储，那你需要 365 个 key/value，操作起来麻烦。通过位图可以有效的简化这个操作。

它的统计很简单：

01111000111

每天的记录占一个位，365 天就是 365 个位，大概 46 个字节，这样可以有效的节省存储空间，如果有一天想要统计用户一共签到了多少天，统计 1 的个数即可。

对于位图的操作，可以直接操作对应的字符串（get/set），可以直接操作位（getbit/setbit）.

## SETBIT/GETBIT

```text
setbit <key> <offset> <value>
getbit <key> <offset>
```

* setbit：将指定的 key 的 offset(偏移量)下标设置为 0 或者 1。
* getbit：获取指定 offset（偏移量）下标的二进制，返回 0 或者 1。当offset超过下标时，一直返回0。

**案例：存储一个 Java字符串，字符的 ASCII 和 二进制如下**：

|字符|ASCII|二进制|
|:---|:---|:----|
|J|74|01001010|
|a|97|01100001|
|v|118|01110110|
|a|97|01100001|

使用 `setbit` 命令，设置对应 offset（偏离量）上的值为1，0 不需要设置会自动补齐，偏移量从0开始。然后使用 `get <key>` 查看二进制对应的字符串，如下：

![image-20230202103721531](https://img.zxqs.top/20230202103722.png)

需要注意的是，**如果 `setbit` key 已经存在了，会修改之前的`offset`上的值，如果超过下标时会一直返回0**


使用 `getbit` 可以拿到对应的二进制位上的值。

![image-20230202104615188](https://img.zxqs.top/20230202104616.png)

## 统计

例如签到记录：

01111000111

1 表示签到，0 表示没签到，统计总的签到天数：

可以使用 `bitcount <key> [start end]` 命令，`bitcount` 返回指定范围中 1 存在的次数。

还是用上面的 "Java" 字符串做演示：

```text
bitcount name 0 0 
bitcount name 0 1
bitcount name 0 2 
```
![image-20230202111224963](https://img.zxqs.top/20230202111225.png)

::: tip 注意

start 和 end 指的是 "Java" 字符串中字符的范围，并非二进制中的范围。

例如，bitcount name 0 0，统计的是 "J" 对应的二进制中的 1 的个数，有 3 个 1

bitcount name 0 1，统计的是 "Ja" 对应的二进制中的 1 的个数，有 6 个 1

bitcount name 0 1，统计的是 "Jav" 对应的二进制中的 1 的个数，有 11 个 1

"Java" 中总共有多少个 1，可以使用 `bitcount name 0 3` 或者 `bitcount name 0 3` 来统计

:::


## bit 批处理

在 Redis 3.2 之后，新加了一个功能叫做 `bitfiled` ，可以对 bit 进行批量操作。

```text
bitfield <key> [get type offset] [set type offset value] [incrby type offset increment]
```

有多个可选的参数，get、set、incrby。我们先来看一下 get

**get**

```text
bitfield name get u4 0
```
获取name中的为，从 0 开始获取，获取4位，返回一个无符号数字。

* u 表示无符号数字
* i 表示有符号数字，有符号的话，第一个符号就是符号位，1表示是一个负数

此命令获取4位，那就是 `0100`，转成十进制就是 4。

bitfield 也可以一次执行多个操作。

![image-20230202132839037](https://img.zxqs.top/20230202132840.png)

**set**

```text
bitfield name set u8 8 98
```
用无符号的 98 转成的 8 位二进制数字，替代从第 8 位开始接下来的 8 位数字。

![image-20230202133446610](https://img.zxqs.top/20230202133447.png)

**incrby**

对指定范围进行自增操作，自增操作可能会出现溢出，比如要操作范围中的二进制为 `11111111`，再进行自增就会溢出。Redis 中对于溢出的处理方案是折返。8 位无符号数 255（11111111）加 1 溢出变为 0；8 位有符号数 127，加 1 变为 - 128.

案例：

"J" 的二进制是 `01001010` 我们将后两位进行自增：

```text
// 从第6位开始对后两位进行自增
bitfield name incrby u2 6 1
```
![image-20230202134830818](https://img.zxqs.top/20230202134831.png)

第一个自增后两位由 `10` 变成 `11`，第二次自增溢出变为 `00`，所以最后 "Java" 变成了 "Hava"

也可以修改默认的溢出策略，可以改为 fail ，表示执行失败，添加 `overflow fail` 参数。
```text
BITFIELD name overflow fail incrby u2 6 1
```
此时name值为 `Hava`，可以在自增3次，第四次报错，过程如下

![image-20230202140311345](https://img.zxqs.top/20230202140312.png)


致命错误：jemalloc/jemalloc.h：没有那个文件或目录


## springboot 使用

```java
// 添加 bit
Boolean aBoolean = connection.setBit(key.getBytes(), offset, value);

// 根据key获取值，返回值是一个 字符串
String key1 = stringRedisTemplate.opsForValue().get("key");

// 获取所有1的个数
long count = (long)redisTemplate.execute((RedisCallback<Long>) connection -> connection.bitCount(key.getBytes()));

// 从 0 开始，截取 4 个无符号位，返回值十进制数
List<Long> list = redisTemplate.opsForValue().bitField(key, BitFieldSubCommands.create().get(BitFieldSubCommands.BitFieldType.unsigned(4)).valueAt(0));
```

下面我们通过一个 `签到` 案例来具体了解一下：

代码如下：

```java
@RestController
@RequestMapping("/sign")
public class SignController {

    DateTimeFormatter monthFormatter = DateTimeFormatter.ofPattern("yyyyMM");

    @Autowired
    RedisTemplate redisTemplate;

    // key的格式：sign_用户ID_月份
    public String getKey(){
        long userId = 1;
        LocalDate now = LocalDate.now();
        // 月份
        String month = now.format(monthFormatter);

        String key = "sign" + "_" + userId + "_" + month;

        return key;
    }

    /**
     * 签到，每一天占一个bit位，为了方便测试，day从前端传递
     * @param day
     * @return
     */
    @PostMapping
    public String sign(int day,boolean isSign){
//        LocalDateTime now = LocalDateTime.now();
//        int day = now.getDayOfMonth() - 1;
        // setBit返回原始值,返回true表示已签过
        Boolean aBoolean = redisTemplate.opsForValue().setBit(getKey(), day, isSign);
        if(aBoolean){
            return "请勿重复签到";
        }
        return "签到成功";
    }

    /**
     * 当月总签到次数
     * @return
     */
    @GetMapping("/monthTotalCount")
    public long monthTotalCount(){
        String key = getKey();
        long count = (long) redisTemplate.execute((RedisCallback<Long>) connection -> connection.bitCount(key.getBytes()));
        return count;
    }

    /**
     * 本月连续签到的天数
     * @return
     */
    @GetMapping("/continuousDays")
    public int continuousDays(){
        String key = getKey();
        LocalDateTime dateTime = LocalDateTime.now();
        int day = dateTime.getDayOfMonth();
        int signCount = 0;
        long mask = 0b1;
        // 获取本月第一天到今天的数据
        List<Long> signList = redisTemplate.opsForValue().bitField(key, BitFieldSubCommands.create().get(BitFieldSubCommands.BitFieldType.unsigned(day)).valueAt(0));

        if (signList != null && signList.size() > 0) {
            long sign = signList.get(0) == null ? 0 : signList.get(0);
            for (int i = 0; i < day; i++) {
                //判断低位为0表示没有签到
                if ((sign & mask) == 0) {
                    //第一次遍历时，如果当天没有签到，结果也是0，但是这天我们不需要计算
                    if (i > 0) break;
                } else {
                    signCount++;
                }
                //右移1位
                sign >>= 1;
            }
        }

        return signCount;
    }

    /**
     当月签到日历
    */
    @GetMapping("currentMonthSign")
    public Result currentMonthSign() {
        String key = getKey();
        Map<String, Long> signMap = new TreeMap<>();
        LocalDate localDate = LocalDate.now();
        long mask = 0b1;
        //用bitfield命令取出第一天到当月最后一天的数据
        List<Long> signList = (List<Long>) redisTemplate.execute(new RedisCallback<List<Long>>() {
            @Override
            public List<Long> doInRedis(RedisConnection connection) throws DataAccessException {
                return connection.bitField(key.getBytes(), BitFieldSubCommands.create().get(BitFieldSubCommands.BitFieldType.unsigned(localDate.lengthOfMonth())).valueAt(0));
            }
        });
        if (CollectionUtil.isNotEmpty(signList)) {
            long sign = signList.get(0) == null ? 0 : signList.get(0);
            // 获取当月有几天，然后遍历
            for (int i = localDate.lengthOfMonth(); i > 0; i--) {
                //从最后一天往前算，withDayOfMonth方法返回一个LocalDate，年月是当月，日是指定的参数
                LocalDate d = localDate.withDayOfMonth(i);
                //放入时间和最后一位签到记录
                signMap.put(dateFormatter.format(d), sign & mask);
                //右移1位
                sign >>= 1;
            }
        }
        return resultOk(signMap);
    }
}
```

签到方法中，为了方便测试，`day` 和 `是否签到` 都是前端传递的，项目中不要这样做。

这里着重说一下 `本月连续签到的天数`，首先通过 `bitField` 获取本月从开始到当前时间的数据，返回值是一个集合，集合中只有一个值，就是我们存入的数值，只不过转成了 `十进制`。

然后将返回的结果与 `1` 进行 `位与（&）`操作，& 两边都是数字的话，要先把运算符两侧的数转化为二进制数再进行运算。

为什么与 1 进行运算呢？

假如 `sign` 的值是 `65310` 做位运算转为二进制 `1111111100011110`，1的二进制是`1（高位补0）`。

`i=0` 时 `sign & mask` 的值是0，这是当天没有签到的情况。

然后 `sign` 右移一位变成 `0111111110001111`，与 `1` 做位运算，结果是 `0000000000000001`，不等于0，然后 `signCount+1`，`sign` 右移一位变成 `0011111111000111`

以此类推直到 `sign` 最高位是0时，位运算结果为0，此时连续签到中断，结束遍历。


`当月签到日历`和上面一样就不再多说。













