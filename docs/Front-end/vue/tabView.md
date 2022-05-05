---
title: 列表渲染
autoPrev: view
---
我们可以使用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，集中 `items` 是原数据数组，而 `item` 则是被迭代的数组元素的**别名**

## 遍历数组 <Badge text="重要" type="error"/>
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>基本列表</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 遍历数组 -->
			<h2>人员列表（遍历数组）</h2>
			<ul>
				<li v-for="p in persons" :key="p.id">
					{{p.name}}-{{p.age}}
				</li>
			</ul>
		</div>

		<script type="text/javascript">
			new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'张三',age:18},
						{id:'002',name:'李四',age:19},
						{id:'003',name:'王五',age:20}
					]
				}
			})
		</script>
</html>
```
`v-for` 还支持一个可选的第二个参数，即当前项的索引。

```html
<ul>
	<li v-for="(p,index) in persons" :key="p.id">
		{{p.name}}-{{p.age}}
	</li>
</ul>
```

同时也可以用 `of` 代替 `in` 作为分隔符，因为它更接近 js 迭代器的语法：

```html
<ul>
	<li v-for="(p,index) of persons" :key="p.id">
		{{p.name}}-{{p.age}}
	</li>
</ul>
```

```js
<script type="text/javascript">
	new Vue({
		el:'#root',
		data:{
			persons:[
				{id:'001',name:'张三',age:18},
				{id:'002',name:'李四',age:19},
				{id:'003',name:'王五',age:20}
			]
		}
	})
</script>
```

## 遍历对象 <Badge text="重要" type="error"/>
```html
<ul>
	<li v-for="(value,key,index) of car" :key="key">
		{{key}}-{{value}}
	</li>
</ul>
```

```js
<script type="text/javascript">
	new Vue({
		el:'#root',
		data:{
			car:{
				name:'奥迪A8',
				price:'70万',
				color:'黑色'
			}
		}
	})
</script>
```
结果：

:::tip

name-奥迪A8--0
price-70万--1
color-黑色--2

:::

其中 `key` 是 对象中属性的名称。


## 其他遍历 <Badge text="不常用" type="tip"/>

### 遍历字符串
```html
<ul>
	<li v-for="(char,index) of str" :key="index">
		{{char}}-{{index}}
	</li>
</ul>
``` 

```js
new Vue({
	el:'#root',
	data:{
		str:'hello'
	}
})
```

### 遍历指定次数
```html
<ul>
	<li v-for="(number,index) of 5" :key="index">
		{{index}}-{{number}}
	</li>
</ul>
```

## key的作用 <Badge text="重点" type="error"/>

上面写的 `v-for` 都加了一个 `:key`，为什么要加上呢。

要解释 `key` 的作用首先要了解 虚拟DOM和Diff算法。

vue和react都实现了一套虚拟DOM，使我们可以不直接操作DOM元素，只操作数据便可以重新渲染页面。而隐藏在背后的原理便是其高效的Diff算法。

vue和react的虚拟DOM的Diff算法大致相同，其核心是基于两个简单的假设：

1. 两个相同的组件产生类似的DOM结构，不同的组件产生不同的DOM结构。

2. 同一层级的一组节点，他们可以通过唯一的id进行区分。

![before](/blogImg/vue/before.jpg)

当页面的数据发生变化时，Diff算法只会比较同一层级的节点：

**如果节点类型不同，直接干掉之前的节点，再创建并插入新的节点，不会再比较这个节点以后的子节点了。**

**如果节点类型相同，则会重新设置该节点的属性，从而实现节点的更新。**

当某一层有很多相同的节点时，也就是列表节点时，Diff算法的更新过程默认情况下也是遵循以上原则。

比如一下这个情况：

![diff1](/blogImg/vue/diff1.jpg)

我们希望可以在B和C之间加一个F，Diff算法默认执行起来是这样的：

![diff2](/blogImg/vue/diff2.jpg)

即把C更新成F，D更新成C，E更新成D，最后再插入E。这样做很没有效率。

所以我们需要使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。

![diff3](/blogImg/vue/diff3.jpg)

**key的作用主要是为了高效的更新虚拟DOM**。

通过下面例子感受一下。

在数组前面添加一条数据
```html
<button @click.once="add">添加一个老刘</button>
<ul>
  <li v-for="(p,index) of persons" :key="index">
    {{p.name}}-{{p.age}}
    <input type="text">
  </li>
</ul>
```

```js
<script type="text/javascript">
  new Vue({
    el:'#root',
    data:{
      persons:[
        {id:'001',name:'张三',age:18},
        {id:'002',name:'李四',age:19},
        {id:'003',name:'王五',age:20}
      ]
    },
    methods: {
      add(){
        const p = {id:'004',name:'老刘',age:40}
        this.persons.unshift(p)
      }
    },
  })
</script>
```

我们在 `input` 输入框输入数据

![diff4](/blogImg/vue/diff4.jpg)

然后点击添加，发现老刘虽然添加了，但是后面的输入框数据不对，应该是空的才对，其他人员后面的输入框中的数据也不对，这是为什么呢？

![diff5](/blogImg/vue/diff5.jpg)

有上图我们能看到，首先初始数据会生成 `虚拟DOM` 然后再将 `虚拟DOM` 转换成 `真实DOM`，最后才渲染到页面上，在input上输出数据。

点击按钮，添加一个成员，根据新数据生成 `虚拟DOM`，然后通过 `diff` 算法根据 `key` 和初始虚拟DOM，进行比较，根据图片看到新虚拟DOM中 `key=0` 的数据和 初始虚拟DOM中的不一样，但是 `<input>` 标签是一样的，这时在转换真实DOM的时候，`老刘-30` 重新渲染，`<input>` 标签复用之前的。其他的道理一样，一直到 `key=3` 此时，初始虚拟DOM没有 `key=3` 所以整个 `<li>` 都会转为真实DOM，input 里面自然也就没有数据。 

总结原因就是

::: tip

当以数组为下标的index作为key值时，其中一个元素(例如增删改查)发生了变化就有可能导致所有的元素的key值发生改变
diff算法时比较同级之间的不同，以key来进行关联，当对数组进行下标的变换时，比如删除第一条数据，那么以后所有的index都会发生改变，那么key自然也跟着全部发生改变，所以index作为key值是不稳定的，而这种不稳定性有可能导致性能的浪费，导致diff无法关联起上一次一样的数据。

:::

因此，能不使用index作为key就不使用index。要是用不会改变的唯一标识符。

我们上面的案例就要改一下了，将 `key` 改成 id
```html
<li v-for="(p,index) of persons" :key="p.id">
  {{p.name}}-{{p.age}}
  <input type="text">
</li>
```

这时，就不会出现问题了。

![diff6](/blogImg/vue/diff6.jpg)