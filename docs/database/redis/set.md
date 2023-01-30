---
description: set
autoPrev: list
---

# Set

:::tip

Redis set对外提供的功能与list类似，是一个列表的功能，特殊之处在于set是可以`自动排重`的，当你需要存储一个列表数据，又不希望出现重复数据时，set是一个很好的选择，并且set提供了`判断某个成员是否在一个set集合内`命令，这个也是list所不能提供的。

Redis的Set是string类型的无序集合。它底层其实是一个value为null的hash表

:::

## 常用命令

**sadd**

```text
sadd <key> <member> [member...]
```

member也就是值，可以写多个。

**smembers**

```text
smembers <key>
```
获取一个 key 下所有的元素

![image-20230130144202153](https://img.zxqs.top/20230130144203.png)

**srem**

```text
srem <key> <member> [member...]
```

移除指定的元素

![image-20230130154715654](https://img.zxqs.top/20230130154716.png)


**scard**

```text
scard <key>
```
返回集合中数据的数量

**srandmember**

```text
srandmember <key>
```

随机返回一个元素，并不影响源集合

**spop**

```text
spop <key>
```
随机返回一个元素，并移出集合

![image-20230130225825900](https://img.zxqs.top/image-20230130225825900.png)

**smove**

```text
smove <source> <destination> <member>
```

把 source 集合中的 member 移到 destination 集合中去

![image-20230130230525888](https://img.zxqs.top/image-20230130230525888.png)

**sdiff**

```text
sdiff <key> [key...]
```
返回两个集合的差集

**sinter**

```text
sinter <key> [key...]
```

返回两个集合的交集

![image-20230130231115914](https://img.zxqs.top/image-20230130231115914.png)

**sunion**

```text
sunion <key> [key...]
```

求并集

![image-20230130232003699](https://img.zxqs.top/image-20230130232003699.png)

**sdiffstore**

```text
sdiffstore <destination> <key> [key...]
```
返回两个集合的差集，保存在 `destination` 集合中

![image-20230130231612533](https://img.zxqs.top/image-20230130231612533.png)

**sinterstore**

```text
sinterstore <destination> <key> [key...]
```

返回两个集合的交集，保存在 `destination` 集合中。

![image-20230130231820594](https://img.zxqs.top/image-20230130231820594.png)

**sunionstore**

```text
sunionstore <destination> <key> [key...]
```
返回两个集合的并集，保存在 `destination` 集合中。

![image-20230130232156575](https://img.zxqs.top/image-20230130232156575.png)



