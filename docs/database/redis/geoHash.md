---
description: geoHash
autoPrev: redisCurrentlimiting
---

# GeoHash

## GeoHash 算法介绍

GeoHash是一种地址编码方法。他能够把二维的空间经纬度数据编码成一个字符串。

我们知道，经度范围是东经180到西经180，纬度范围是南纬90到北纬90，我们设定西经为负，南纬为负，所以地球上的经度范围就是`[-180， 180]`，纬度范围就是`[-90，90]`。如果以本初子午线、赤道为界，地球可以分成4个部分。

如果纬度范围[-90°, 0°)用二进制0代表，（0°, 90°]用二进制1代表，经度范围[-180°, 0°)用二进制0代表，（0°, 180°]用二进制1代表，那么地球可以分成如下4个部分：

![image-20230214150750839](https://img.zxqs.top/20230214150759.png)

如果在小块范围内递归对半划分呢？

![image-20230214150824502](https://img.zxqs.top/20230214150825.png)

可以看到，划分的区域更多了，也更精确了。geohash算法就是基于这种思想，划分的次数更多，区域更多，区域面积更小了。通过将经纬度编码，给地理位置分区

## 算法过程
**第一步：将经纬度转换为二进制**

以经纬度值：（116.389550， 39.928167）进行算法说明，对纬度39.928167进行逼近编码 (地球纬度区间是[-90,90]）

1. 区间[-90,90]进行二分为[-90,0),[0,90]，称为左右区间，可以确定39.928167属于右区间[0,90]，给标记为1
2. 接着将区间[0,90]进行二分为 [0,45),[45,90]，可以确定39.928167属于左区间 [0,45)，给标记为0
3. 递归上述过程39.928167总是属于某个区间[a,b]。随着每次迭代区间[a,b]总在缩小，并越来越逼近39.928167
4. 如果给定的纬度x（39.928167）属于左区间，则记录0，如果属于右区间则记录1，序列的长度跟给定的区间划分次数有关，如下图;

![image-20230214151721436](https://img.zxqs.top/20230214151722.png)

通过上述计算，纬度产生的编码为`1 0 1 1 1 0 0 0 1 1 0 0 0 1 1`

同理，地球经度区间是[-180,180]，可以对经度116.389550进行编码，经度产生的编码为 `1 1 0 1 0 0 1 0 1 1 0 0 0 1 0`

**第二步：将经纬度的二进制编码合并**

**从偶数 0 开始，经度占偶数位，纬度占奇数位。**

| 序号     | 0    | 1    | 2    | 3    | 4    | 5    | 6    | 7    | 8    | 9    | 10   | 11   | 12   | 13   | 14   | 15   | 16   | 17   | 18   | 19   | 20   | 21   | 22   | 23   | 24   | 25   | 26   | 27   | 28   | 29   |
| -------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| **编码** | 1    | 1    | 1    | 0    | 0    | 1    | 1    | 1    | 0    | 1    | 0    | 0    | 1    | 0    | 0    | 0    | 1    | 1    | 1    | 1    | 0    | 0    | 0    | 0    | 0    | 0    | 1    | 1    | 0    | 1    |

**第三步：将合并后的二进制数做Base32编码**

按照每5位一组，分成6组，每组计算其对应的十进制数值，按照Base32进行编码。

Base32编码表的其中一种如下，是用0-9、b-z（去掉a, i, l, o）这32个字母进行编码.

![image-20230214151721434](https://img-blog.csdnimg.cn/img_convert/d401276fb5b3448e02aedade4ec6491e.png)


```text
11100  11101  00100  01111  00000  01101
28(w)  29(x)   4(4)   15(g)  0(0)   13(e)
```

最终得到的经纬度编码为：wx4g0e

## GeoHash算法的特点

1. Geohash比直接用经纬度的高效很多，而且使用者可以发布地址编码，既能表明自己的位置，又不至于暴露自己的精确坐标，有助于隐私保护。 
2. GeoHash表示的并不是一个点，而是一个矩形区域。
3. GeoHash编码的前缀可以表示更大的区域。例如wx4g0ec1，它的前缀wx4g0e表示包含编码wx4g0ec1在内的更大范围。 这个特性可以用于附近地点搜索。
4. 编码越长，表示的范围越小，位置也越精确。因此我们就可以通过比较GeoHash匹配的位数来判断两个点之间的大概距离。下表编码长度的误差：

![image-20230214151721434dfsdf](https://img-blog.csdnimg.cn/20210719154223831.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L29raXdpbGxkb2l0,size_16,color_FFFFFF,t_70)


## Redis 中使用GeoHash算法

redis的Geo指令共7个。

### geoadd

```text
geoadd key [NX|XX] [CH] longitude latitude member [longitude latitude member...]
```
`[NX|XX] [CH]`: 可选参数

longitude latitude：经度和纬度

member：名称

可以写多个 `经度 纬度 名称`


geoadd指令携带集合名称以及多个经纬度名称三元组，注意可以是多个三元组，如下指令:

```text
geoadd k1 117.13936 36.68104 qlrjy
geoadd k1 117.14336 36.68286 mlgc
geoadd k1 117.19229 36.68655 sdjzdx 117.20229 36.70218 zxjxtd
```

Geo存储结构使用的是zset，我们可以使用zset相关的指令来操作Geo数据。例如，元素的删除可以使用zrem命令。

### geodist

```text
geodist key member1 member2 [m|km|ft|mi]
```

geodist 命令用来计算两个元素之间的距离，参数为：`key名称 元素名称 距离单位`，距离单位分为 `米/公里/英尺/英里` 默认是 米。

```text
127.0.0.1:6379> geodist k1 qlrjy mlgc
"410.3637"
```

### geopos 获取元素位置
geopos命令可以获取key中任意元素的经纬度坐标。

```text
127.0.0.1:6379> geopos k1 qlrjy sdjzdx
1) 1) "117.13936060667037964"
   2) "36.68104109425305381"
2) 1) "117.19229131937026978"
   2) "36.68654904333229894"
127.0.0.1:6379>

```

### geohash

GeoHash可以获取元素的经纬度编码字符串，它是base32编码。

```text
127.0.0.1:6379> geohash k1 mlgc zxjxtd
1) "wwe29tvjnh0"
2) "wwe2g12jeq0"

```
可以用这个编码值在网站：http://geohash.org/hash值 直接进行定位。

**注意：**

如果用上面的网站去进行定位，要确保你保存在redis的经纬度是根据 `WGS84坐标系`的地图，从百度或高德获取的经纬度，在此网站定位是有偏差的的。

这是因为谷歌使用的是 `WGS84坐标系`，高德和百度分别使用的是 `GCJ-02(火星)坐标系` 和 `BD09坐标系`

### georadiusbymember 

```text
georadiusbymember key member radius m|km|ft|mi [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] [ASC|DESC]
```

这个指令用来查询指定元素附近的其他元素。

```text
// 获取 6km 范围内的其他元素，最多三个（包括自己），按照距离顺序排序
127.0.0.1:6379> georadiusbymember k1 qlrjy 6 km count 3 asc
1) "qlrjy"
2) "mlgc"
3) "tyxy"

```

WITHCOORD 携带坐标，WITHDIST 携带距离，WITHHASH 携带 hash

```text
127.0.0.1:6379> georadiusbymember k1 qlrjy 5 km count 3 asc withcoord
1) 1) "qlrjy"
   2) 1) "117.13263362646102905"
      2) "36.67478793715296348"
2) 1) "mlgc"
   2) 1) "117.13681250810623169"
      2) "36.67613894353089421"
127.0.0.1:6379> georadiusbymember k1 qlrjy 6 km count 3 asc withcoord
1) 1) "qlrjy"
   2) 1) "117.13263362646102905"
      2) "36.67478793715296348"
2) 1) "mlgc"
   2) 1) "117.13681250810623169"
      2) "36.67613894353089421"
3) 1) "tyxy"
   2) 1) "117.19615906476974487"
      2) "36.68414105823092797"

```

```text
127.0.0.1:6379> georadiusbymember k1 qlrjy 6 km count 3 asc withdist
1) 1) "qlrjy"
   2) "0.0000"
2) 1) "mlgc"
   2) "0.4019"
3) 1) "tyxy"
   2) "5.7613"
127.0.0.1:6379>
```

```text
127.0.0.1:6379> georadiusbymember k1 qlrjy 6 km count 3 asc withhash
1) 1) "qlrjy"
   2) (integer) 4065935358376967
2) 1) "mlgc"
   2) (integer) 4065935384198624
3) 1) "tyxy"
   2) (integer) 4065935809566811

```

### georadius

根据坐标值查询附近元素
```text
georadius key longitude latitude radius m|km|ft|mi [WITHCOORD] [WITHDIST] [WITHHASH] [COUNT count [ANY]] [ASC|DESC] [STORE key] [STOREDIST key]
```

```text
127.0.0.1:6379> georadius k1 117.13263362646102905 36.67478793715296348 6 km count 3 desc withhash
1) 1) "tyxy"
   2) (integer) 4065935809566811
2) 1) "mlgc"
   2) (integer) 4065935384198624
3) 1) "qlrjy"
   2) (integer) 4065935358376967
```


## springboot 中使用

**添加信息：**

```java
public void addGeo() {
   Map<String, Point> pointMap = new HashMap<>();
   pointMap.put("jining",new Point(116.576795,35.355297));
   pointMap.put("jinan",new Point(117.132454,36.674582));
   pointMap.put("tengzhou",new Point(117.240922,34.989832));

   final Long city = redisTemplate.boundGeoOps(GEO_STAGE).add(pointMap);
   System.out.println(city);
}
```

`boundGeoOps()` 的参数是保存的 `key`。

**根据位置名称查询坐标信息：**

```java
public void getGeo() {
   List<Point> position = redisTemplate.boundGeoOps(GEO_STAGE).position("jining", "jinan", "tengzhou");

   for(Point point : position){
      System.out.println(point);
   }

}
```

**计算两点间距离：**

```java
public void getDistance() {
   // 计算两点之间的距离，单位-KM，没写就默认-M
   Distance distance = redisTemplate.boundGeoOps(GEO_STAGE).distance("jining", "jinan", Metrics.KILOMETERS);
   
   // 距离
   double value = distance.getValue();
   // 单位
   String unit = distance.getUnit();
   System.out.println("两地之间的距离："+value+unit);
}
```

**根据坐标查询附近位置**

```java
public void getRadius() {
   // 指定经纬度
   Point point = new Point(117.132454, 36.674582);
   // 指定距离和单位
   Distance distance = new Distance(200,Metrics.KILOMETERS);
   Circle circle = new Circle(point,distance);

   // 配置返回信息
   RedisGeoCommands.GeoRadiusCommandArgs args = RedisGeoCommands.GeoRadiusCommandArgs.newGeoRadiusArgs();
   args.sortAscending()         // 升序排序
            //.sortDescending()  // 降序排序
            .includeCoordinates()  //包含坐标信息
            .includeDistance()   // 包含距离信息
            .limit(3);           // 显示返回数量

   GeoResults<RedisGeoCommands.GeoLocation<String>> radius = redisTemplate.boundGeoOps(GEO_STAGE).radius(circle, args);

   for (GeoResult<RedisGeoCommands.GeoLocation<String>> result : radius){
      // 返回网点信息
      RedisGeoCommands.GeoLocation<String> location = result.getContent();
      // 网点名
      String name = location.getName();
      // 网点坐标
      Point point1 = location.getPoint();
      // 返回距离
      Distance dis = result.getDistance();
      // 距离
      double value = dis.getValue();
      // 单位
      String unit = dis.getUnit();
      // 输出
      System.out.println("网点名："+ name + "x坐标"+point1.getX() + "y坐标" + point1.getY() + "距离：" + value + "单位：" + unit);
   }
}
```

**根据名称查询附近位置**

```java
public void getRadius2() {

   // 指定距离和单位
   Distance distance = new Distance(200,Metrics.KILOMETERS);

   // 配置返回信息
   RedisGeoCommands.GeoRadiusCommandArgs args = RedisGeoCommands.GeoRadiusCommandArgs.newGeoRadiusArgs();
   args.sortAscending()         // 升序排序
            //.sortDescending()  // 降序排序
            .includeCoordinates()  //包含坐标信息
            .includeDistance()   // 包含距离信息
            .limit(3);           // 显示返回数量

   GeoResults<RedisGeoCommands.GeoLocation<String>> radius = redisTemplate.boundGeoOps(GEO_STAGE).radius("jinan",distance,args);

   for (GeoResult<RedisGeoCommands.GeoLocation<String>> result : radius){
      // 返回网点信息
      RedisGeoCommands.GeoLocation<String> location = result.getContent();
      // 网点名
      String name = location.getName();
      // 网点坐标
      Point point1 = location.getPoint();
      // 返回距离
      Distance dis = result.getDistance();
      // 距离
      double value = dis.getValue();
      // 单位
      String unit = dis.getUnit();
      // 输出
      System.out.println("网点名："+ name + "x坐标"+point1.getX() + "y坐标" + point1.getY() + "距离：" + value + "单位：" + unit);
   }
}
```

**特别注意：**

这里的位置名称一定要存在，如果位置名称不存在就会报异常。`org.springframework.data.redis.RedisSystemException: Error in execution; nested exception is io.lettuce.core.RedisCommandExecutionException: ERR could not decode requested zset member`
