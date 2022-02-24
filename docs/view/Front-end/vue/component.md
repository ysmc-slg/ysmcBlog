---
title: 组件
autoPrev: ref
---

## 概念

组件(Component)是Vue.js最强大的功能之一。组件可以扩展HTML元素，封装可重用的代码。根据项目需求，抽象出一些组件，每个组件里包含了展现、功能和样式。每个页面，根据自己所需，使用不同的组件来拼接页面。这种开发模式使前端页面易于扩展，且灵活性高，而且组件之间也实现了解耦。本文将详细介绍Vue组件基础用法

![component](https://images2017.cnblogs.com/blog/740839/201708/740839-20170806165940240-474901218.png)

## 组件注册
组件大体有两种注册方式，`全局注册` 和 `局部注册`，我们会分别来学习。

### 全局组件
1. 使用 extend 创建组件，然后注册
   ```js
   var com1 = Vue.extend({
    template:'<h3>Hello Component</h3>'
   });
   Vue.component("myCom1",com1);
   ```
2. 不使用中间变量，即把com1的内容直接写在Vue.component里面，如：
   ```js
   Vue.component("mycom1",Vue.extend({
     template:'<h3>这是第一种方式</h3>'
   }));
   ```

3. 不使用 extend
   ```js
   Vue.component("my-com1",{
     template:'<div><h3>这是h3标签</h3><span>这是span标签</span></div>'
   });
   ```
4. 在页面上定义外部 template 元素
   ```js
   Vue.component("mycom1",{
    template:'#temp'
   });
   ```
   ```html
   <template id="temp">
    <h3>这是html中的temp</h3>
   </template>
   ```

### 局部注册
```js
var vm = new Vue({
    el:"#newBrand",
    data:{},
    components:{
        mycom1:{
            template: '<div><h3>这是局部template</h3></div>'
        }
    }
});
```

```js

<template id="temp">
    <div><h3>这是局部template啦</h3></div>
</template>

var vm = new Vue({
    el:"#newBrand",
    data:{},
    components:{
        mycom1:{
            template: '#temp'
        }
    }
});
```

:::danger 注意 

在使用组件时要注意组件名的大小写。

如上面组件名写成 `my-com1` 形式时，在引用是必须写成 `<my-com1></my-com1>`

当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-com1> 和 <myCom1> 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

如果是全小写 (mycom1)，可以直接写成 `<mycom1></mycom1>`

:::

如果实在 `vue-cli` 项目中，全局注册的代码要写到 `main.js` 中。