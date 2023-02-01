---
description: list(列表)
autoPrev: string
---

# list(列表)

## 简介
单键多值

Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。

它的底层实际是个`双向链表`，对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。

![20210526143014](/blogImg/20210526143014.png)

## 数据结构
List的数据结构为，快速链表quickList。
首先在列表元素较少的情况下会使用一块连续的内存存储，这个结构是ziplist，也即是压缩列表。

它将所有的元素紧挨着一起存储，分配的是一块连续的内存。
当数据量比较多的时候才会改成quicklist。
因为普通的链表需要的附加指针空间太大，会比较浪费空间。比如这个列表里存的只是int类型的数据，结构上还需要两个额外的指针prev和next。

![图片2](/blogImg/图片2.png)

Redis将链表和ziplist结合起来组成了quicklist。也就是将多个ziplist使用双向指针串起来使用。这样既满足了快速的插入删除性能，又不会出现太大的空间冗余。

## 常用命令

**lpush**

```text
lpush <key> <value> [value...]
```
将所有指定的值 `从左到右` 插入到存于 key 的列表的头部。如果 key 不存在，那么在进行 push 操作前会创建一个空列表。如果 key 对应的值不是一个 list 的话，那么会返回一个错误。

**lrange**

```text
lrange <key> <start> <end>
```
返回列表指定区间内的元素。-1 表示全部元素。

![image-20230130125756386](https://img.zxqs.top/20230130125757.png)

**rpush**

```text
rpush <key> <value> [value...]
```

`从右向左` 将数据插入，和 `lpush` 相反。

![image-20230130130406927](https://img.zxqs.top/20230130130408.png)

**rpop**

```text
rpop <key>
```
移除并返回列表的尾元素。

**lpop**

```text
lpop <key>
```
移除并返回列表的头元素。

![image-20230130130834206](https://img.zxqs.top/20230130130835.png)

**lset**

```text
lset <key> <index> <value>
```
替换下标 index 的值为 value。

![image-20230130143555114](https://img.zxqs.top/20230130143556.png)

**lindex**

```text
lindex <key> <index>
```

返回列表中，下标为 index 的元素。

![image-20230130131203462](https://img.zxqs.top/20230130131204.png)

**ltrim**

```text
ltrim <key> <start> <end>
```

ltrim 可以对一个列表进行修剪。其实就是对列表进行截取，返回在范围中的数据

![image-20230130142354220](https://img.zxqs.top/20230130142355.png)

**linsert**

```text
linsert <key> <before>/<after> <value> <newvalue>
```

在指定的值，前面或后面插入一个值。

![image-20230130143203251](https://img.zxqs.top/20230130143204.png)

**blpop/brpop**

```text
// 移出并获取列表的第一个元素， 如果列表没有元素会阻塞列表直到等待超时或发现可弹出元素为止。
blpop <key> <timeout>
```



