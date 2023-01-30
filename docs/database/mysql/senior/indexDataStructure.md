---
title: 索引的数据结构
autoPrev: dataPage
---

# 索引的数据结构

索引是存储引擎用于快速找到数据记录的一种数据结构，就好比一本教科书的目录部分，通过目录中找到对应文章的页码，便可快速定位到需要的文章。MySQL中也是一样的道理，进行数据查找时，首先查看查询条件是否命中某条索引，符合则通过索引查找相关数据，如果不符合则需要全表扫描，即需要一条一条地查找记录，直到找到与条件符合的记录。

## 没有索引的查找

本文的主题是 `索引` ，在正式介绍 `索引` 之前，我们需要了解一下没有索引的时候是怎么查找记录的。为了方便大家理解，我们下边先只唠叨搜索条件为对某个列精确匹配的情况，所谓精确匹配，就是搜索条件中用等于 `=` 连接起的表达式，比如这样：

```sql
SELECT [列名列表] FROM 表名 WHERE 列名 = xxx;
```

* 在一个页中查找
  假设目前表中的记录比较少，所有的记录都可以被存放到一个页中，在查找记录的时候可以根据搜索条件的不同分为两种情况：

  * 以主键为搜索条件

    可以在页目录中使用 `二分法` 快速定位到对应的槽，然后再遍历该槽对用分组中的记录即可快速找到指定记录。
  * 以其他列作为搜索条件
  
    因为在数据页中并没有对非主键列建立所谓的页目录，所以我们无法通过二分法快速定位相应的槽。这种情况下只能从 `最小记录` 开始 `依次遍历单链表中的每条记录`， 然后对比每条记录是不是符合搜索条件。很显然，这种查找的效率是非常低的。

* 在很多页中查找
  
   在很多页中查找记录的活动可以分为两个步骤：

  1. 定位到记录所在的页。
  2. 从所在的页内中查找相应的记录。

在没有索引的情况下，不论是根据主键列或者其他列的值进行查找，`由于我们并不能快速的定位到记录所在的页，所以只能 从第一个页沿着双向链表 一直往下找，在每一个页中根据我们上面的查找方式去查 找指定的记录`。因为要遍历所有的数据页，所以这种方式显然是 超级耗时 的。如果一个表有一亿条记录呢？此时 `索引` 应运而生。

## InnoDB 中索引的推演

建一个表：

```sql
mysql> CREATE TABLE index_demo(
-> c1 INT,
-> c2 INT,
-> c3 CHAR(1),
-> PRIMARY KEY(c1)
-> ) ROW_FORMAT = Compact;
```

这个新建的 `index_demo` 表中有2个INT类型的列，1个CHAR(1)类型的列，而且我们规定了c1列为主键， 这个表使用 `Compact` 行格式来实际存储记录的。这里我们简化了index_demo表的行格式示意图：

![image-20221120141949800](https://img.zxqs.top/image-20221120141949800.png)

我们只在示意图中展示记录的这几个部分：

* record_type：记录头衔西的一项属性，表示记录的类型， 0 表示普通记录、 2 表示最小记录、 3 表示最大记录、 1 B+ 树非叶子节点记录。
* next_record：记录头信息的一项属性，表示下一条地址相对于本条记录的地址偏移量，为了方便大家理解，我们都会用箭头来表明下一条记录是谁。
* 各个列的值：这里指记录在 `index_demo` 表中的三个列，分别是 c1、c2和c3。
* 其他信息：除了上述3种信息以外的所有信息，包括其他隐藏列的值以及记录的额外信息。

为了节省篇幅，我们之后的示意图中会把记录的 其他信息 这个部分省略掉，因为它占地方并且不会有什么观赏效果。另外，为了方便理解，我们觉得把记录竖着放看起来感觉更好，所以将记录格式示意图的 其他信息 去掉并把它竖起来的效果就是这样：

![image-20221120143101697](https://img.zxqs.top/image-20221120143101697.png)

把一些记录放到页里的示意图就是：

![image-20221120143202399](https://img.zxqs.top/image-20221120143202399.png)

### 一个简单的索引设计方案

我们在根据某个搜索条件查找一些记录时为什么要遍历所有的数据页呢？因为各个页中的记录并没有规律，我们并不知道我们的搜索条件匹配哪些页中的记录，所以不得不依次遍历所有的数据页。所以如果我们 `想快速的定位到需要查找的记录在哪些数据页` 中该咋办？我们可以为快速定位记录所在的数据页而建立一个目录 ，建这个目录必须完成下边这些事：

1. **下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值。**
  假设：每个数据结构最多能存放3条记录（实际上一个数据页非常大，可以存放下好多记录）。
  ```sql
  INSERT INTO index_demo VALUES(1, 4, 'u'), (3, 9, 'd'), (5, 3, 'y');
  ```

​ 那么这些记录以及按照主键值的大小串联成一个单向链表了，如图所示：

![image-20221120155157036](https://img.zxqs.top/image-20221120155157036.png)

从图中可以看出来， index_demo 表中的3条记录都被插入到了编号为10的数据页中了。此时我们再来插入一条记录

```sql
INSERT INTO index_demo VALUES(4, 4, 'a');
```

因为 页10 最多只能放3条记录，所以我们不得不再分配一个新页：

![image-20221120155642467](https://img.zxqs.top/image-20221120155642467.png)

注意：新分配的 `数据页编号可能并不是连续的`。它们只是通过维护者上一个页和下一个页的编号而建立了 `链表` 关系。另外，页10中用户记录最大的主键值是5，而页28中有一条记录的主键值是4，因为5>4，所以这就不符合下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值的要求，所以在插入主键值为4的记录的时候需要伴随着一次 `记录移动`，也就是把主键值为5的记录移动到页28中，然后再把主键值为4的记录插入到页10中，这个过程的示意图如下：

![image-20221120155844886](https://img.zxqs.top/image-20221120155844886.png)

这个过程表明了在对页中的记录进行增删改查操作的过程中，我们必须通过一些诸如 `记录移动` 的操作来始终保证这个状态一直成立：下一个数据页中用户记录的主键值必须大于上一个页中用户记录的主键值。这个过程称为 `页分裂`。

2. **给所有的页建立一个目录项。**
   
   由于数据页的 `编号可能是不连续` 的，所以在向 index_demo 表中插入许多条记录后，可能是这样的效果：

    ![image-20221120161825130](https://img.zxqs.top/image-20221120161825130.png)

    此时指定查询语句，需要遍历所有的数据页查找数据，所以我们需要给它们做个 `目录`，`每个页对应一个目录项`，每个目录项包括下边两个部分：

   1. 页的用户记录最小主键值，我们用 key 还表示
   2. 页号，我们用 page_on 表示
   
   ![image-20221120162650842](https://img.zxqs.top/image-20221120162650842.png)

以 页28 为例，它对应 目录项2 ，这个目录项中包含着该页的页号 28 以及该页中用户记录的最小主 键值 5 。我们只需要把几个目录项在物理存储器上连续存储（比如：数组），就可以实现根据主键 值快速查找某条记录的功能了。比如：查找主键值为 20 的记录，具体查找过程分两步：

   1. 先从目录项中根据 `二分法` 快速确定出主键值为 `20` 的记录在 目录项3 中（因为 12 < 20 < 209 ），它对应的页是 `页9 `。
   2. 再根据前边说的在页中查找记录的方式去 页9 中定位具体的记录。

至此，针对数据页做的简易目录就搞定了。这个目录有一个别名，称为 `索引` 。

### InnoDB中的索引方案

#### 目录项纪录的页

上边之所以称为一个简易的索引方案，是因为我们为了在根据主键值进行查找时使用二分法快速定位具体的目录项而假设所有目录项都可以在物理存储器上连续存储，但是这样做有几个问题：

* InnoDB 是使用页来作为管理存储空间的基本单位，也就是最多能保证 `16KB` 的连续存储空间，而随着表中记录数量的增多，需要非常大的连续的存储空间才能把所有的目录项都放下，这对记录数量非常多的表是不现实的。
* 我们时常会对记录进行增删，假设我们把 页28 中的记录都删除了， 页28 也就没有存在的必要了，那意味着 目录项2 也就没有存在的必要了，这就需要把 目录项2 后的目录项都向前移动一下，这种牵一发而动全身的设计不是什么好主意～

那么InniDB 的设计者是怎样解决问题的呢？

他们复用了之前存储用户记录的数据页来存储目录项，为了和用户记录做一下区分，我们把这些用来表示目录项的记录称为 `目录项记录`。那 InnoDB 怎么区分一条记录是普通的 用户记录 还是 目录项记录 呢？别忘了记录头信息里的 `record_type` 属性，它的各个取值代表的意思如下：

* 0：普通的用户记录
* 1：目录项记录
* 2：最小记录
* 3：最大记录

我们把前边使用到的目录项放到数据页中的样子就是这样：


![image-20221120165006262](https://img.zxqs.top/image-20221120165006262.png)

从图中可以看出来，我们新分配了一个编号为30的页来专门存储目录项记录。这里再次强调 `目录项记录` 和普通的 `用户记录` 的不同点：

* 目录项记录 的 `record_type` 值是1，而 普通用户记录 的 `record_type` 值是0。
* 目录项记录只有 `主键值和页的编号` 两个列，而普通的用户记录的列是用户自己定义的，可能包含 `很多列` ，另外还有InnoDB自己添加的隐藏列。

**相同点：**

两者用的是一样的数据页，都会为主键值生成 `Page Directory （页目录）`，从而在按照主键值进行查找时可以使用 `二分法` 来加快查询速度。

#### 多个目录项纪录的页

虽然说 目录项记录 中`只存储主键值和对应的页号`，比用户记录需要的存储空间小多了，但是不论怎么说一个页只有 16KB 大小，能存放的 目录项记录 也是有限的，那如果表中的数据太多，以至于一个数据页不足以存放所有的 目录项记录 ，该咋办呢？

当然是再多整一个存储 `目录项记录` 的页喽～ 为了大家更好的理解新分配一个 目录项记录 页的过程，我们假设一个存储 目录项记录 的页最多只能存放4条 目录项记录 （请注意是假设哦，真实情况下可以存放好多条的），所以如果此时我们再向上图中插入一条主键值为 320 的用户记录的话，那就需要分配一个新的存储 目录项记录的页：

![image-20221120170614027](https://img.zxqs.top/image-20221120170614027.png)

从图中可以看出，我们插入了一条主键值为320的用户记录之后需要两个新的数据页：

* 为存储该用户记录而新生成了 页31
* 因为原先存储目录项记录的 页30的容量已满 （我们前边假设只能存储4条目录项记录），所以不得 不需要一个新的 页32 来存放页31对应的目录项。

如果我们表中的数据非常多则会产生很多存储 `目录项记录` 的页，那我们怎么根据主键值快速定位一个存储 `目录项记录` 的页呢？其实也简单，为这些存储 `目录项记录` 的页再生成一个`更高级的目录`，就像是一个多级目录一样，`大目录里嵌套小目录`，小目录里才是实际的数据，所以现在各个页的示意图就是这样子：

![image-20221120171237439](https://img.zxqs.top/image-20221120171237439.png)

如图，我们生成了一个存储更高级目录项的 页33 ，这个页中的两条记录分别代表页30和页32，如果用 户记录的主键值在 [1, 320) 之间，则到页30中查找更详细的目录项记录，如果主键值 不小于320 的 话，就到页32中查找更详细的目录项记录。

我们可以用下边这个图来描述它：

![image-20221120171523707](https://img.zxqs.top/image-20221120171523707.png)

这个数据结构，它的名称是 B+树 。

一个B+树的节点其实可以分成好多层，规定最下边的那层，也就是存放我们用户记录的那层为第 0 层， 之后依次往上加。之前我们做了一个非常极端的假设：存放用户记录的页 最多存放3条记录 ，存放目录项 记录的页 最多存放4条记录 。其实真实环境中一个页存放的记录数量是非常大的，假设所有存放用户记录 的叶子节点代表的数据页可以存放 100条用户记录 ，所有存放目录项记录的内节点代表的数据页可以存 放 1000条目录项记录 ，那么：

* 如果B+树只有1层，也就是只有1个用于存放用户记录的节点，最多能存放 100 条记录。
* 如果B+树有2层，最多能存放 1000×100=10,0000 条记录。
* 如果B+树有3层，最多能存放 1000×1000×100=1,0000,0000 条记录。
* 如果B+树有4层，最多能存放 1000×1000×1000×100=1000,0000,0000 条记录。相当多的记录！

所以一般情况下，我们用到的 `B+树都不会超过4层` ，那我们通过主键值去查找某条记录最多只需要做4个页面内的查找（查找3个目录项页和一个用户记录页），又因为在每个页面内有所谓的 Page Directory （页目录），所以在页面内也可以通过 `二分法` 实现快速 定位记录。

## 常见索引概念

索引按照物理实现方式，索引可以分为 2 种：聚簇（聚集）和非聚簇（非聚集）索引。我们也把非聚集 索引称为二级索引或者辅助索引。

### 聚簇索引

聚簇索引并不是一种单独的索引类型，而是`一种数据存储方式`（所有的用户记录都存储在了叶子结点），也就是所谓的 索引即数据，数据即索引。

我们上边介绍的 B+ 树本身就是一个目录，或者说本身就是一个索引。它有两个特点:

* 使用记录主键值的大小进行记录和页的排序，这包括三个方面的含义：
  * 页内的记录是按照主键的大小顺序排成一个`单项链表`。
  * 各个存放 `用户记录的页（叶子节点）` 也是根据用户记录主键大小排序排成一个 `双向链表`。
  * `目录页` 分为不同的层次，在同一个层次中的页也是根据主键的顺序排成一个 `双向链表`。
* B+树的 叶子节点 存储的是完整的用户记录。
  * 所谓完整的用户记录，就是指这个记录中存储了所有列的值（包括隐藏列）。

我们把具有这两种特性的B+树称为聚簇索引，所有完整的用户记录都存放在这个 `聚簇索引的叶子节点处`。这种聚簇索引并不需要我们在MySQL语句中显式的使用INDEX 语句去创建， `InnDB` 存储引擎会 `自动` 的为我们创建聚簇索引。

**优点：**

* `数据访问更快`，因为聚簇索引将索引和数据保存在同一个B+树中，因此从聚簇索引中获取数据比非聚簇索引更快
* 聚簇索引对于主键的 `排序查找` 和 `范围查找` 速度非常快
* 按照聚簇索引排列顺序，查询显示一定范围数据的时候，由于数据都是紧密相连，数据库不用从多 个数据块中提取数据，所以 `节省了大量的io操作` 。

**缺点：**

* 插入速度严重依赖于插入顺序 ，按照主键的顺序插入是最快的方式，否则将会出现页分裂，严重影响性能。因此，对于InnoDB表，我们一般都会定义一个自增的ID列为主键
* 更新主键的代价很高 ，因为将会导致被更新的行移动。因此，对于InnoDB表，我们一般定义主键为不可更新
* 二级索引访问需要两次索引查找 ，第一次找到主键值，第二次根据主键值找到行数据

### 二级索引（辅助索引，非聚簇索引）

如果我们想以别的列作为搜索条件该怎么办？肯定不能是从头到尾沿着链表依次遍历记录一遍。

答案：我们可以多建几颗B+树，不同的B+树中的数据采用不同的排列规则。比方说我们用c2列的大小作为数据页、页中记录的排序规则，再建一课B+树，效果如下图所示：


![image-20221120175652241](https://img.zxqs.top/image-20221120175652241.png)

这个B+树与上边介绍的聚簇索引有几处不同：

![image-20221120175816551](https://img.zxqs.top/image-20221120175816551.png)

**回表**：

我们根据这个以c2列大小排序的B+树只能确定我们要查找记录的主键值，所以如果我们想根 据c2列的值查找到完整的用户记录的话，仍然需要到 聚簇索引 中再查一遍，这个过程称为 回表 。也就 是根据c2列的值查询一条完整的用户记录需要使用到 2 棵B+树！

为什么我们还需要一次 回表 操作呢？直接把完整的用户记录放到叶子节点不OK吗？

如果把完整的用户记录放到叶子结点是可以不用回表。但是`太占地方了`，相当于每建立一课B+树都需要把所有的用户记录再都拷贝一遍，这就有点太浪费存储空间了。

因为这种按照`非主键列`建立的B+树需要一次回表操作才可以定位到完整的用户记录，所以这种B+树也被称为`二级索引`，或者辅助索引。由于使用的是c2列的大小作为B+树的排序规则，所以我们也称这个B+树为c2列简历的索引。

非聚簇索引的存在不影响数据在聚簇索引中的组织，所以一张表可以有多个非聚簇索引。

![image-20221121110250540](https://img.zxqs.top/20221121110259.png)


### 联合索引

我们也可以同时以多个列的大小作为排序规则，也就是同时为多个列建立索引，比方说我们想让B+树按 照 c2和c3列 的大小进行排序，这个包含两层含义：

* 先把各个记录和页按照 c2 列进行排序
* 在记录的 c2 列相同的情况下，采用 c3 列进行排序

为c2和c3建立的索引的示意图如下：

![image-20221121111247626](https://img.zxqs.top/20221121111248.png)

如图所示，我们需要注意以下几点：

* 每条目录项都有c2、c3、页号这三个部分组成，各条记录先按照c2列的值进行排序，如果记录的c2列相同，则按照c3列的值进行排序
* B+树叶子节点处的用户记录由c2、c3和主键c1列组成

注意一点，以c2和c3列的大小为排序规则建立的B+树称为 联合索引 ，本质上也是一个二级索引。它的意 思与分别为c2和c3列分别建立索引的表述是不同的，不同点如下：

* 建立 联合索引 只会建立如上图一样的1棵B+树。
* 为c2和c3列分别建立索引会分别以c2和c3列的大小为排序规则建立2棵B+树。

##  InnoDB的B+树索引的注意事项

### 根页面位置万年不动

上文介绍 B+ 树索引的时候，为了大家理解上的方便，先把存储用户记录的叶子节点都画出来，然后接着画存储目录项记录的内节点，实际上 B+ 树的形成过程是这样的：

* 每当为某个表创建一个 B+ 树索引（聚簇索引不是人为创建的，默认就有）时候，都会为这个索引创建一个 根节点 页面。最开始表中没有数据的时候，每个 B+ 树索引对应的 根节点 中既没有用户记录，也没有目录项记录。
* 随后向表中插入用户记录时，先把用户记录存储到这个 根节点 中。
* 当 根节点 中的可用空间用完时继续插入记录，此时会将 根节点 中的所有记录复制到一个新分配的页，比如 页a 中，然后对这个新页进行 页分裂 的操作，得到另一个新页，比如 页b 。这时新插入的记录根据键值（也就是聚簇索引中的主键值，二级索引中对应的索引列的值）的大小就会被分配到 页a 或者 页b 中，而根节点 便升级为存储目录项记录的页。

这个过程需要大家特别注意的是：`一个B+树索引的根节点自诞生之日起，便不会再移动`。这样只要我们对某个表建立一个索引，那么它的 `根节点` 的页号便会被记录到某个地方，然后凡是 InnoDB 存储引擎需要用到这个索引的时候，都会从那个固定的地方取出 根节点 的页号，从而来访问这个索引。

### 内节点中目录项记录的唯一性

我们知道B+树索引的内节点中目录项记录的内容是 `索引列 + 页号` 的搭配，但是这个搭配对于二级索引来说有点不严谨。还拿 index_demo 表为例，假设这个表中的数据是这样的：

|c1|c2|c3|
|---|---|---|
|1|1|u|
|2|1|d|
|5|1|y|
|7|1|a|

如果二级索引中目录项记录的内容只是 索引列 + 页号 的搭配的话，那么为 c2 列简历索引后的B+树应该长这样：

![image-20221121124704146](https://img.zxqs.top/20221121124705.png)

如果我们想新插入一行记录，其中 `c1` 、`c2` 、`c3` 的值分别是: `9`、`1`、`c`, 那么在修改这个为 c2 列建立的二级索引对应的 B+ 树时便碰到了个大问题：由于 `页3` 中存储的目录项记录是由 `c2列 + 页号` 的值构成的，`页3` 中的两条目录项记录对应的 c2 列的值都是1，而我们 `新插入的这条记录` 的 c2 列的值也是 `1`，那我们这条新插入的记录到底应该放在 `页4` 中，还是应该放在 `页5` 中？答案：对不起，懵了

为了让新插入记录找到自己在那个页面，我们需要`保证在B+树的同一层页节点的目录项记录除页号这个字段以外是唯一的` 所以对于二级索引的内节点的目录项记录的内容实际上是由三个部分构成的：

* 索引列的值
* 主键值
* 页号

也就是我们把`主键值`也添加到二级索引内节点中的目录项记录，这样就能保住 B+ 树每一层节点中各条目录项记录除页号这个字段外是唯一的，所以我们为c2建立二级索引后的示意图实际上应该是这样子的：

![image-20221121132745281](https://img.zxqs.top/20221121132746.png)

这样我们再插入记录 `(9, 1, 'c')` 时，由于 `页3` 中存储的目录项记录是由 `c2列 + 主键 + 页号` 的值构成的，可以先把新纪录的 `c2` 列的值和 `页3` 中各目录项记录的 `c2` 列的值作比较，如果 `c2` 列的值相同的话，可以接着比较主键值，因为B+树同一层中不同目录项记录的 `c2列 + 主键`的值肯定是不一样的，所以最后肯定能定位唯一的一条目录项记录，在本例中最后确定新纪录应该被插入到 `页5` 中。

### 一个页面最少存储 2 条记录

一个B+树只需要很少的层级就可以轻松存储数亿条记录，查询速度相当不错！这是因为B+树本质上就是一个大的多层级目录，每经过一个目录时都会过滤掉许多无效的子目录，直到最后访问到存储真实数据的目录。那如果一个大的目录中只存放一个子目录是个啥效果呢？那就是目录层级非常非常多，而且最后的那个存放真实数据的目录中只存放一条数据。所以 **InnoDB 的一个数据页至少可以存放两条记录。**

## MyISAM中的索引方案

B树索引使用存储引擎如表所示：

| 索引 / 存储引擎 | MyISAM | InnoDB | Memory |
| --------------- | ------ | ------ | ------ |
| B-Tree索引      | 支持   | 支持   | 支持   |

即使多个存储引擎支持同一种类型的索引，但是他们的实现原理也是不同的。Innodb和MyISAM默认的索 引是Btree索引；而Memory默认的索引是Hash索引。

MyISAM引擎使用 B+Tree 作为索引结构，叶子节点的data域存放的是 数据记录的地址 。


### MyISAM 索引的原理

我们知道 `InnoDB中索引即数据`，也就是聚簇索引的那颗B+树的叶子节点中已经把所有完整的用户记录都包含了，而 `MyISAM` 的索引方案也使用树形结构，但是却将 `索引和数据分开存储`：

* 将表中的记录 `按照记录的插入顺序` 单独存储在一个文件中，称之为 `数据文件`。这个文件并不划分为若干个数据页，有多少记录就往这个文件中存多少记录就成了。由于插入数据的时候并 `没有刻意按照主键大小排序`，所以我们并不能在这些数据上使用二分法进行查找。
* 使用 `MyISAM` 存储引擎的表会把索引信息存储到一个称为`索引文件`的另一个文件中。MyISAM 会单独为表的主键创建一个索引，只不过在索引的叶子节点中存储的不是完整的用户信息，而是`主键值 + 数据记录地址` 的组合。

![image-20221121142054243](https://img.zxqs.top/20221121142055.png)

![image-20221121142244422](https://img.zxqs.top/20221121142245.png)


## MyISAM 与 InnoDB对比

1. InnoDB的数据文件本身就是索引文件，而MyISAM索引文件和数据文件是 分离的 ，索引文件仅保存数 据记录的地址。
2. 在InnoDB存储引擎中，我们只需要根据主键值对 聚簇索引 进行一次查找就能找到对应的记录，而在 MyISAM 中却需要进行一次 回表 操作，意味着MyISAM中建立的索引相当于全部都是 二级索引 。
3. MyISAM的回表操作是十分 快速 的，因为是拿着地址偏移量直接到文件中取数据的，反观InnoDB是通 过获取主键之后再去聚簇索引里找记录，虽然说也不慢，但还是比不上直接用地址去访问。
4. InnoDB要求表 必须有主键 （ MyISAM可以没有 ）。如果没有显式指定，则MySQL系统会自动选择一个 可以非空且唯一标识数据记录的列作为主键。如果不存在这种列，则MySQL自动为InnoDB表生成一个隐 含字段作为主键，这个字段长度为6个字节，类型为长整型。