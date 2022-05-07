---
description: 组件
autoPrev: ref
---

# 组件

## 概念

组件(Component)是Vue.js最强大的功能之一。组件可以扩展HTML元素，封装可重用的代码。根据项目需求，抽象出一些组件，每个组件里包含了展现、功能和样式。每个页面，根据自己所需，使用不同的组件来拼接页面。这种开发模式使前端页面易于扩展，且灵活性高，而且组件之间也实现了解耦。本文将详细介绍Vue组件基础用法

![component](/blogImg/vue/component1.jpg)

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





