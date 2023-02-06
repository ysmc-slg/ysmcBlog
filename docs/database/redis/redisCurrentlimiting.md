---
description: redisCurrentlimiting
autoPrev: bloomFilter
---

# Redis 限流

Redis 限流能有限的解决 `缓存击穿` 问题，通过控制一段时间内的访问量来控制，进入缓存和数据库的请求次数。

## 使用 Pipeline

