---
title: 混入(Mixin)
autoPrev: component
---

## 概念

关于混入，官网是这样说的：

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

简单来说就是如果有两个相似的组件，功能基本是一样的，此时就可以使用 `混入` 将相同的代码抽离出来。

混入的方式有两种：局部混入和全局混入。

## 局部混入

顾名思义，局部混入必须引入混入对象才能使用，并且只有在引入了混入地向的组件中才有效。

看下面代码，创建两个组件，组件A 和 组件B，两个组件是一样的，只是在点击按钮时弹出的内容不一样。

```vue
组件A
<template>
	<div>
		<button @click="showName">组件A</button>
	</div>
</template>

<script>

	export default {
		name:'A',
		data() {
			return {
				name:'我是组件A',
			}
		},
		methods: {
      showName(){
        alert(this.name)
      }
    }
	}
</script>
```

```vue
组件B
<template>
	<div>
		<button @click="showName">组件B</button>
	</div>
</template>

<script>

	export default {
		name:'B',
		data() {
			return {
				name:'我是组件B',
			}
		},
		methods: {
      showName(){
        alert(this.name)
      }
    }
	}
</script>
```
我们可以看到，两个组件都有 `showName` 函数，只是处理逻辑不同，此时我们就可以使用 `混入(mixin)` 将 `showName` 函数抽离出来

新建一个`mixin.js`，将重复的代码放进去
```js
export const hunhe = {
	methods: {
		showName(){
			alert(this.name)
		}
	}
}
```

此时，组件就可以这样写。
```vue
<template>
	<div>
		<button @click="showName">组件A</button>
	</div>
</template>

<script>
	//引入一个hunhe
	import {hunhe} from '../mixin'

	export default {
		name:'School',
		data() {
			return {
				name:'我是组件A',
			}
		},
		mixins:[hunhe],
	}
</script>
```

```vue
<template>
	<div>
		<button @click="showName">组件B</button>
	</div>
</template>

<script>
	import {hunhe} from '../mixin'

	export default {
		name:'Student',
		data() {
			return {
				name:'我是组件B',
			}
		},
		mixins:[hunhe]
	}
</script>
```

添加一个配置项 `mixins`，这就是局部混入，如果有多个混入用 `,` 隔开

## 全局混入
全局混入就简单的多，只需要在 `main.js` 引入 `mixin.js`，然后使用 `Vue.mixin()` 即可。

```js
import {hunhe} from './mixin'
Vue.mixin(hunhe)
```

**注意：**

全局混入完成后，所有的组件都会被添加，所以这种方式一般不会使用
 