---
description: 混入(Mixin)
autoPrev: component
---

# 混入(Mixin)

## 概念

关于混入，官网是这样说的：

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

简单来说就是如果有两个相似的组件，功能基本是一样的，此时就可以使用 `混入` 将相同的代码抽离出来。

混入的方式有两种：局部混入和全局混入。

## 局部混入

顾名思义，**局部混入必须引入混入对象才能使用，并且只有在引入了混入地向的组件中才有效**。

将组件公共的部分抽离出来最为一个混入对象，如下：

```js
export default {
	//数据
	data() {
		return {
			message: '我是混入',
			foo: 'abc'
		}
	},
	//生命周期
	created() {
		console.log('混入的created被调用')
	},
	// 方法
	methods: {
		foo2(){
			console.log('混入的foo2被调用')
		},
		conflicting(){
			console.log('混入的conflicting被调用')
		}
	}
}
```
使用局部混入

```vue
<template>
	<div>
		{{message}}
	</div>
</template>

<script>
  import mixin from './mixin'
	export default {
		name:'App',
		//局部混入
    	mixins: [mixin],

		data() {
			return {
				message: '我是APP',
				bar: 'def'
			}
		},
		created() {
			console.log('组件的created被调用');
			console.log(this.$data);

			this.bar2()
			this.foo2()
			this.conflicting()
		},
		methods: {
			bar2() {
				console.log('组件的bar2被调用')
			},
			conflicting() {
				console.log('组件的conflicting被调用')
			}
		}
	}
</script>
```

添加一个配置项 `mixins`，这就是局部混入，如果有多个混入用 `,` 隔开

## 选项合并
1. 当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。并在发生冲突时以组件数据优先。

	```js
	export default {
		//数据
		data() {
			return {
				message: '我是混入',
				foo: 'abc'
			}
		}
	}
	```
	```js
	export default {
		name:'App',
		//局部混入
		mixins: [mixin],

		data() {
			return {
				message: '我是APP',
				bar: 'def'
			}
		},
		created() {
			console.log(this.$data);
		},
	}

	// 结果：
	bar: "def"
	foo: "abc"
	message: "我是APP"
	```
2. 同名钩子函数将合并为一个数组，因此都将被调用。另外，**混入对象的钩子将在组件自身钩子之前调用**。

	```js
	export default {
		//生命周期
		created() {
			console.log('混入的created被调用')
		}
	}
	```
	```js
	export default {
		name:'App',
		//局部混入
    mixins: [mixin],

		created() {
			console.log('组件的created被调用');
		}
	}

	// 结果
	混入的created被调用

	组件的created被调用
	```

3. 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
  ```js
	export default {
		// 方法
		methods: {
			foo2(){
				console.log('混入的foo2被调用')
			},
			conflicting(){
				console.log('混入的conflicting被调用')
			}
		}
	}
	```
	```js
	export default {
		name:'App',
		//局部混入
			mixins: [mixin],

		created() {
			this.bar2()
			this.foo2()
			this.conflicting()
		},
		methods: {
			bar2() {
				console.log('组件的bar2被调用')
			},
			conflicting() {
				console.log('组件的conflicting被调用')
			}
		}
	}
	// 结果
	组件的bar2被调用
	混入的foo2被调用
	组件的conflicting被调用
  ```

## 全局混入
全局混入就简单的多，只需要在 `main.js` 引入 `mixin.js`，然后使用 `Vue.mixin()` 即可。

```js
import {mixin} from './mixin'
Vue.mixin(mixin)
```

**注意：**

全局混入完成后，所有的组件都会被添加，所以这种方式一般不会使用



 