---
description: 插件
autoPrev: mixin
---

# 插件

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制，一般有下面几种：

1. 添加全局方法或者 `property`。
2. 添加全局资源：自定义指令/过滤器/全局方法
3. 通过全局混入来添加一些组件选项
4. 添加 Vue 实例方法，通过把他们添加到 `Vue.prototype` 上实现

## 开发插件

插件必须暴露一个 `insall` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的。

创建一个 `plugin.js`

```js
export default {
	install(Vue,x,y,z){
		//全局过滤器
		Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})

		//定义全局指令
		Vue.directive('fbind',{
			//指令与元素成功绑定时
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		})

		//定义混入
		Vue.mixin({
			data() {
				return {
					x:100,
					y:200
				}
			},
		})

		//给Vue原型上添加一个方法
		Vue.prototype.hello = ()=>{alert('你好啊')}
	}
}
```

## 使用

使用就很简单了，在`main.js` 中，通过全局方法 `Vue.use()` 使用插件。

```js
import plugin from './plugin'

Vue.use(plugin,1,2,3)
```
第一个参数是插件，其他的是可选项。

`Vue.use` 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一个该插件。
