---
description: redisCurrentlimiting
autoPrev: bloomFilter
---

# Redis 限流

Redis 限流能有限的解决 `缓存击穿` 问题，通过控制一段时间内的访问量来控制，进入缓存和数据库的请求次数。

## 使用 Pipeline

这里我用springboot项目来演示：

```java
@RestController
public class DemoTest {

    @Autowired
    RedisTemplate redisTemplate;

    @GetMapping("/pipelineTest")
    public void PipelineTest() {
        //用户id
        String userId = "zhangsan";
        //行为key
        String actionKey = "good";
        //时间范围
        Integer period = 60;
        //次数上限
        Integer maxCount = 5;

        List<Object> list = redisTemplate.executePipelined(new RedisCallback<Long>() {

            @Override
            public Long doInRedis(RedisConnection connection) throws DataAccessException {
                connection.openPipeline();
                String key = String.format("hist:%s:%s", userId, actionKey);
                long nowTs = System.currentTimeMillis();
                //业务代码，connection中有各种方法，方法名和redis命令行一致，string，list，set，zset
                connection.zAdd(key.getBytes(), nowTs, (nowTs + "").getBytes());

                //清理无用的数据，当前时间减去时间范围就是范围外的时间，然后去除，保证connection是最新60秒内的数据
                connection.zRemRangeByScore(key.getBytes(), 0, nowTs - period * 1000);
                //设置key有效时间 对冷数据自动清理
                connection.expire(key.getBytes(), period + 1);
                //获取次数
                Long card = connection.zCard(key.getBytes());
                return card;
            }
        });

        

        System.out.println(list);
        if ((Long) list.get(list.size() - 1) >= maxCount) {
            System.out.println("已经超出最大点赞量");
        }
    }
}
```

调用 `redisTemplate.executePipelined` 方法，需要一个回调，`RedisConnection` 中的方法和redis命令是一样的，如保存 string 类型方法名也是 `set`，`connection.set(key,value)`，zset类型就是 connection.zAdd。

除了 `RedisCallback`，redisTemplate 还提供了，`SessionCallback` 也可以操作 redis，方法和 `RedisCallback` 是有不一样的，具体我们以后再说。


```java
List<Object> list = redisTemplate.executePipelined(new SessionCallback<Long>() {

    @Override
    public Long execute(RedisOperations operations) throws DataAccessException {
        String key = String.format("hist:%s:%s", userId, actionKey);
        long nowTs = System.currentTimeMillis();
        ZSetOperations zSetOperations = operations.opsForZSet();

        zSetOperations.add(key,(nowTs + "").getBytes(),nowTs);
        zSetOperations.removeRangeByScore(key, 0, nowTs - period * 1000);
        redisTemplate.expire(key,nowTs - period * 1000, TimeUnit.SECONDS);
        Long card = zSetOperations.size(key);
        return card;
    }
});
```


## Redis-Cell 令牌桶限流

如果在一个并发量很高的接口，再使用 Pipeline 的话，就会导致 zset 变的很大，这显然不太合适。此时可以用 `Redis-Cell` 来限流

### 简介

系统会维护一个容器用于存放令牌（token），并且系统以一个固定速率往容器中添加令牌（token），这个速率通常更加系统的处理能力来权衡。当客户端的请求打过来时，需要从令牌桶中获取到令牌（token）之后，这个请求才会被处理，否则直接拒绝服务。

![image-20230206224144834](https://img.zxqs.top/image-20230206224144834.png)

## 安装 Redis-Cell

Redis默认是没有集成Redis-Cell这个限流模块的，就好比Redis使用布隆过滤器一样，我们也需要对该模块进行安装与集成。

```text
https://github.com/brandur/redis-cell/releases/download/v0.2.4/redis-cellv0.2.4-x86_64-unknown-linux-gnu.tar.gz
```

下载完成后解压，然后重启。

接下来修改 redis.conf 文件，加载额外的模块：

```text
loadmodule /root/redis-5.0.7/redis-cell/libredis_cell.so
```

重启 Redis

## CL.THROTTLE 指令

指令 `cl.throttle` 参数含义
```text
 CL.THROTTLE  ysmc  10  6 60 1
               ▲     ▲  ▲  ▲ ▲
               |     |  |  | └───── apply 1 token (default if omitted) (本次申请一个token)
               |     |  └──┴─────── 6 tokens / 60 seconds  (60秒添加6个token到令牌桶中)
               |     └───────────── 10 max_burst    (最大的突发请求，不是令牌桶的最大容量)
               └─────────────────── key "ysmc" (限流key)
```

输出参数值含义

```text
127.0.0.1:6379> cl.throttle ysmc 10 6 60 1
1) (integer) 0                    # 当前请求是否被允许，0表示允许，1表示不允许
2) (integer) 11                    # 令牌桶的最大容量，令牌桶中令牌数的最大值(max_burst + 1)
3) (integer) 10                   # 令牌桶中当前的令牌数
4) (integer) -1                    # 如果被拒绝，需要多长时间后在重试，如果当前被允许则为-1
5) (integer) 12                    # 多长时间后令牌桶中的令牌会满
```

**注意：**

前 `最大容量个` 并不会进行限流，最后一个返回值没有意义，不要看

也就是说前 11 个返回第一个参数是 都是 0，并不是 10秒返回一个，后面的正常

## java代码实现Redis-Cell 限流

**导入依赖**

```pom
<dependency>
    <groupId>io.lettuce</groupId>
    <artifactId>lettuce-core</artifactId>
    <version>5.3.4.RELEASE</version>
</dependency>
```

```java
public interface IRedisCommand extends Commands {
 
    /**
     * 定义限流方法
     *
     * @param key           限流key
     * @param maxBurst      最大的突发请求，桶容量等于maxBurst + 1
     * @param tokens        tokens 与 seconds 是组合参数，表示seconds秒内添加个tokens
     * @param seconds       tokens 与 seconds 是组合参数，表示seconds秒内添加个tokens
     * @param apply         当前申请的token数
     * @return
     */
    @Command("CL.THROTTLE ?0 ?1 ?2 ?3 ?4")
    List<Object> throttle(String key, long maxBurst, long tokens, long seconds, long apply);
 
}
```

```java
/**
 * <p>
 *      Redis-Cell令牌桶限流
 * </p>
 *
 * @Author: ysmc
 * @Date: 2021/9/8 23:47
 */
public class TokenBucketRateLimiter {


    private static final String SUCCESS = "0";
    private RedisClient client;
    private StatefulRedisConnection<String, String> connection;
    private IRedisCommand command;

//    private final Logger logger = LoggerFactory.getLogger(TokenBucketRateLimiter.class);
    private static final Logger log = LoggerFactory.getLogger(TokenBucketRateLimiter.class);
    public TokenBucketRateLimiter(RedisClient client) {
        this.client = client;
        this.connection = client.connect();
        this.command = new RedisCommandFactory(connection).getCommands(IRedisCommand.class);
    }
 
 
    /**
     * 请是否被允许
     *
     * @param key
     * @param maxBurst
     * @param tokens
     * @param seconds
     * @param apply
     * @return
     */
    public boolean isActionAllowed(String key, long maxBurst, long tokens, long seconds, long apply) {
        // 执行 CL.THROTTLE
        List<Object> result = command.throttle(key, maxBurst, tokens, seconds, apply);

        if (result != null && result.size() > 0) {
            log.info("{}限流{}返回：{}", new Date(),key, result);
            return SUCCESS.equals(result.get(0).toString());
        }
        log.info("{}限流{}返回：{}",new Date(), key, result);
        return false;
    }
 
}
```

```java
/**
 * <p>
 *      测试令牌桶限流
 *      测试参数 1 秒内只能访问 100 次
 * </p>
 *
 * @Author: ysmc
 * @Date: 2021/9/9 0:02
 */
public class TestTokenBucketRateLimiter {
 
    public static void main(String[] args) {
        RedisClient client = RedisClient.create("redis://123456@192.168.96.128:6379");
        TokenBucketRateLimiter limiter = new TokenBucketRateLimiter(client);
        // cl.throttle liziba 10 5 60 1
        for (int i = 1; i <= 1000; i++) {
            
            // 1秒产生100个令牌，也就是1秒最多放出100个请求，一个请求获取一个令牌
            boolean success = limiter.isActionAllowed("ysmc",100,100,1,1);
            
        }
 
    }
 
}
```

