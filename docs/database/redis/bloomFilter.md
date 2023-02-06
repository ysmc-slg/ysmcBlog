---
description: bloomFilter
autoPrev: hyperLogLog
---

# 布隆过滤器

## 数据结构

布隆过滤器是一个由 一个长度为 M 比特的位数组（bit array）与 K 个哈希函数（hash function） 组成的数据结构。

布隆过滤器主要用于用于检索一个元素是否在一个集合中。

位数组中的元素初始值都是 0 ，所有哈希函数可以把输入的数据均匀低散列。

**优点：**

1. 不需要存储数据，只用比特表示，因此在空间占用率上有巨大的优势
2. 检索效率高，插入和查询的时间复杂度都为 O(K)（K 表示哈希函数的个数）
3. 哈希函数之间相互独立，可以在硬件指令层次并行计算，因此效率较高。

**缺点：**
1. 存在不确定的因素，无法判断一个元素是否一定存在，所以不适合要求 100% 准确率的场景
2. 只能插入和查询元素，不能删除元素。

## 原理

添加操作原理如下：

首先根据几个不同 hash 函数给元素进行 hash 运算一个整数索引值，拿到这个索引值之后，跟位数组的长度进行`取模运算`，得到一个位置，每一个 hash 函数都会得到一个位置，将位数组中对应的位置
设置位 1 ，这样就完成了添加操作。

假设用三个hash函数给 `ysmc` 计算一个hash值出来，分别是5、6、8，再用5、6、8 分别和数组长度取模，结果还是5、6、8，最后将数组中这几个位置的值设置为1。

保存 `zxqs.top` 计算的hash值分别是 20\25\36，取模结果为 0 5 6

数据保存在数组的位置如下图：

![image-20230206002138830](https://img.zxqs.top/image-20230206002138830.png)


当判断元素是是否存在时，依然先对元素进行 hash 运算，将运算的结果和位数组取模，然后去对应的位置查看是否有相应的数据，`如果有，表示元素可能存在（因为这个有数据的地方也可能是其他元素存进来的），如果没有表示元素一定不存在`。

**Bloom Filter 中，误判的概率和位数组的大小有很大关系，位数组越大，误判概率越小，当然占用的存储空间越大；位数组越小，误判概率越大，当然占用的存储空间就小.**

## Bloom Filter 安装


建议安装 RedisBloom-2.2.5，否则可能会用各种报错。

https://github.com/RedisBloom/RedisBloom/releases/tag/v2.2.5

下载完成后，在redis目录下解压，然后继续执行以下命令

```text
cd RedisBloom/
make
cd ..
redis-server redis.conf --loadmodule ./RedisBloom/redisbloom.so
```
安装完成后，执行 bf.add 命令，测试安装是否成功，如果有提示证明成功。

每次启动时都输入 `redis-server redis.conf --loadmodule ./RedisBloom/redisbloom.so`比较麻烦，我们可以将要加载的模块在 redis.conf 中提前配置好。


```text
################################## MODULES #####################################
# Load modules at startup. If the server is not able to load modules
# it will abort. It is possible to use multiple loadmodule directives.
#
# loadmodule /path/to/my_module.so
# loadmodule /path/to/other_module.so
loadmodule /root/redis-5.0.7/RedisBloom/redisbloom.so
```

最下面这一句，配置完成后，以后只需要 redis-server redis.conf 来启动 Redis 即可。

## 基本命令

主要是两类命令，添加和判断是否存在。

* BF.ADD	      添加一个元素到布隆过滤器
* BF.EXISTS	    判断元素是否在布隆过滤器
* BF.INFO	      返回有关布隆过滤器的信息
* BF.INSERT	    将多个元素添加到过滤器。如果键不存在，它会创建一个新的过滤器。
* BF.MADD	      添加多个元素到布隆过滤器
* BF.MEXISTS	  判断多个元素是否在布隆过滤器
* BF.RESERVE	  创建一个布隆过滤器。设置误判率和容量
* BF.SCANDUMP	  开始增量保存 Bloom 过滤器。
* BF.LOADCHUNK	恢复之前使用BF.SCANDUMP 保存的布隆过滤器。


## 在项目中使用

在项目中使用（springboot项目）一般有两种方法，使用 `Redisson` 和使用 `lua` 脚本，我们分别来看一下：

**使用redisson**

首先引入依赖：

```pom
<dependency>
    <groupId>org.redisson</groupId>
    <artifactId>redisson</artifactId>
    <version>3.8.2</version>
</dependency>
```
创建配置文件

```java
@Configuration
public class BloomFilterConfig {
    @Bean
    public Config redissionConfig() {
        Config config = new Config();
        SingleServerConfig singleServerConfig = config.useSingleServer();
        singleServerConfig.setAddress("redis://192.168.96.128:6379");
        singleServerConfig.setPassword("123456");

        return config;
    }

    @Bean
    public RedissonClient redissonClient() {
        return Redisson.create(redissionConfig());
    }
}
```

创建 Redisson 工具类

```java
@Component
public class RedisUtil {
	@Autowired
	RedissonClient redissonClient;

   /**
	 * 布隆过滤器初始化
	 * 
	 * @param bloomFilterName 过滤器名称
	 */
	public void bloomFilterInit(String bloomFilterName) {
		RBloomFilter<String> bloomFilter = redissonClient.getBloomFilter(bloomFilterName);
    // 初始化，设置数组的长度和期望的误判率，误判率越低，布隆过滤器计算时间越长， 误差率，例如：0.001,表示误差率为0.1%
		bloomFilter.tryInit(100000L, 0.000001);
	}
	
	/**
	 * 布隆过滤器添加数据
	 * 
	 * @param bloomFilterName 过滤器名称
	 * @param value           要添加的值
	 */
	public void bloomFilterAdd(String bloomFilterName, Object value) {
		RBloomFilter<Object> bloomFilter = redissonClient.getBloomFilter(bloomFilterName);
		bloomFilter.add(value);
	}
	
	/**
	 * 布隆过滤器数据统计
	 * 
	 * @param bloomFilterName
	 * @param value
	 */
	public boolean bloomFilterContains(String bloomFilterName, Object value) {
		RBloomFilter<Object> bloomFilter = redissonClient.getBloomFilter(bloomFilterName);
		return bloomFilter.contains(value);
	}
}
```

测试：

```java
@RestController
public class BloomFilterTest {
  @Autowired
  RedisUtil redisUtil;

  @GetMapping("/filterTest")
  public void add() {
      redisUtil.bloomFilterInit("k1");
      redisUtil.bloomFilterAdd("k1","123");

  }

  @GetMapping("/filterTest2")
  public Boolean mightContain(String params) {

      return redisUtil.bloomFilterContains("k1", params);
  }
}
```

**使用lua脚本**

这里我将 `lua脚本` 写到文件中，你也可以写在代码中。

在 `resources` 目录下，创建redis目录，并新建两个文件，分别为 `bloomFilterAdd.lua`、`bloomFilterExists.lua` 内容如下：

`bloomFilterAdd.lua`

```text
return redis.call("bf.add",KEYS[1],ARGV[1])
```

`bloomFilterExists.lua`

```text
return redis.call("bf.exists",KEYS[1])
```

创建配置文件，读取 lua 脚本的信息

```java
@Configuration
public class BloomFilterConfig {
  /**
    * expectedInsertions：期望添加的数据个数,这个值的设置相当重要，如果设置的过小很容易导致饱和而导致误报率急剧上升，如果设置的过大，也会对内存造成浪费，所以要根据实际情况来定
    * fpp：期望的误判率，期望的误判率越低，布隆过滤器计算时间越长， 误差率，例如：0.001,表示误差率为0.1%
    *
    * @return 返回true，表示可能存在，返回false一定不存在
    */
  @Bean
  public static BloomFilter<String> bloomFilter() {
      BloomFilter<String> filter = BloomFilter.create(Funnels.stringFunnel(Charset.forName("utf-8")), 1000, 0.00001);
      return filter;
  }

  @Bean
  public DefaultRedisScript<Long> addRedisScript() {
      DefaultRedisScript<Long> defaultRedisScript = new DefaultRedisScript<>();
      defaultRedisScript.setResultType(Long.class);
      defaultRedisScript.setScriptSource(new ResourceScriptSource(new
              ClassPathResource("redis/bloomFilterAdd.lua")));
      return defaultRedisScript;
  }

  @Bean
  public DefaultRedisScript<Boolean> existsRedisScript() {
      DefaultRedisScript<Boolean> defaultRedisScript = new DefaultRedisScript<>();
      defaultRedisScript.setResultType(Boolean.class);
      defaultRedisScript.setScriptSource(new ResourceScriptSource(new
              ClassPathResource("redis/bloomFilterExists.lua")));
      return defaultRedisScript;
  }

}

```

测试：

```java
@RestController
public class BloomFilterTest {

  @Autowired
  RedisTemplate redisTemplate;
  @Autowired
  @Qualifier("addRedisScript")
  DefaultRedisScript addRedisScript;

  @Autowired
  @Qualifier("existsRedisScript")
  DefaultRedisScript existsRedisScript;

  @Autowired
  RedisUtil redisUtil;

  @GetMapping("/filterTest")
  public void add() {

      /**
        * 参数1：执行的lua脚本信息
        * 参数2：key，可以有多个
        * 参数3：其他参数，是一个可变参数
        */
      Object k1 = redisTemplate.execute(addRedisScript, Arrays.asList("k1"), "123");

      System.out.println(k1);
  }

  @GetMapping("/filterTest2")
  public boolean mightContain(String param) {

      return (boolean) redisTemplate.execute(existsRedisScript, Arrays.asList("k1"), param);
  }

}
```

## 应用场景

* 网页爬虫url去重
* 垃圾邮件过滤
* 缓存穿透




