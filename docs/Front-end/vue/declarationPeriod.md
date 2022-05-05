---
title: 生命周期
autoPrev: diyCommand
---
## 简介
每个 `Vue` 实例在被创建时都要经历一系列的初始化过程，例如：需要设置数据的监听，编译模板，将实例挂载到`DOM` 上，并且在数据变化时更新 `DOM` 等，这些过程统称为 `Vue` 实例的生命周期。同时在这个过程中也会运行一些叫做 `生命周期钩子的函数` ，这给了用户在不同阶段添加自己的代码的机会。

先来看一张图

![生命周期](/blogImg/vue/生命周期.jpg)

`Vue` 的声明周期主要分为三个阶段，分别是

* 挂载（初始化相关属性,例如 `watch` 属性，`method` 属性）
* 更新（元素或组件的变更操作）
* 销毁（销毁相关属性）

每个阶段还有不同的钩子函数，下面我们一一讲解。

## 挂载
1. 在 `new Vue({})` 时，生命周期就已经开始了，可以看上面的图片，首先`Init Events & Lifecycle` 进行初始化。

2. 然后触发 `beforeCreate` 钩子，此时数据还没进行绑定，所以拿不到 `data` 中的数据
3. 此时来到 `Init injections & reactivity`，这里主要是，初始化会被使用到的状态，状态包括 `props`,`methods`,`data`,`computed`,`watch`。而且会实现对 `data` 中属性的监听，进行数据代理将 `data` 绑定到 VM
4. 触发 `created` 钩子，此时就可以通过 `vm` 获取到 `data` 中的数据和`methods` 中的方法。此时是无法获取 `Dom` 的因为页面还没有进行解析。
   ```js
   created() {
          console.log("created");
          console.log("el===", this.$el);// undefined
          console.log("data==", this.$data);// 可以获取数据
          console.log("foo==", this.foo);//可以获取数据
        },
   ```
5. `created` 钩子执行完毕之后，下面会判断 `vue` 中有没有 `el` 选项。如果有，继续执行下面的流程，判断是否有 `template` 选项。

   * 如果 `Vue` 中有 `template` 参数选项，则将其作为模板编译成 `render` 函数，来完成渲染
   * 如果没有 `template` 参数选项，则将外部的 `HTML` 作为编译模板(`template`)，也就是说，`template` 参数选项的优先级要比外部的 `HTML` 高，如果同时有 `template` 模板与外部的 `html` ，则会优先渲染 `template` 里面的数据

   再回过头看如果没有 `el` 选项，则停止整个生命周期的流程，直到执行了`vm.$mount(el)`。

   此时模板已经生成了 `虚拟DOM`，但是页面还不能显示解析好的内容。
6. 接下来就触发 `beforeMount` 这个钩子函数，在执行该钩子函数的时候，虚拟`DOM`已经创建完成，马上就要渲染了，但是在这里可以更改 `data` 中的数据或者对`DOM` 记性操作，最终都是不奏效的，因为不会执行 `updated`。
7. 接下来将虚拟DOM 转为真实DOM 插入页面。创建一个 `$el` 保存真实DOM，用于复用。
8. 页面渲染完成后，触发 `mounted` 钩子函数。这时对`data` 或 `DOM` 操作都会奏效，会执行 `updated` 钩子函数进行更新。

至此挂载阶段完成，下面是更新阶段。

## 更新

当整个组件挂在完成后，有可能会进行数据的修改，当 `Vue` 发现 `data` 中的数据发生了变化，会触发对应组件的重新渲染，先后调用了`beforeUpdate` 和`updated` 钩子函数。

在 `beforeUpdate`时 虽然`data` 中的数据已经是修改后的，但是页面依旧是之前的数据。

在 `updated` 之前 `beoreUpdate` 之后有一个非常重要的操作就是虚拟DOM会重新构建，也就是新构建的虚拟DOM与上一次的虚拟DOM树利用 `diff` 算法进行对比之后重新渲染。

而到了updated这个方法，就表示数据已经更新完成，dom也重新render完成。

## 销毁
下面如果我们调用了 `vm.$destroy` 方法后，就会销毁所有的资源。

首先会执行`beforeDestroy` 这个钩子函数，这个钩子函数在实例销毁前调用，在这一步，实例仍然可用。在该方法中，可以做一些清理的工作，例如：清除定时器等。

但是执行到`destroyed`钩子函数的时候，`Vue`实例已经被销毁，所有的事件监听器会被移除，所有的子实例也会被销毁

**总结：**
:::tip 

`beforeCreate()`     该钩子函数执行时，组件实例还未创建.
`created()`          组件初始化完毕，各种数据可以使用，可以使用ajax发送异步请求获取数据
`beforeMounted()`    未执行渲染，更新，虚拟DOM完成，真实DOM未创建
`mounted()`          初始化阶段结束，真实DOM已经创建，可以发送异步请求获取数据,也可以访问dom元素
`beforeUpdate()`     更新前，可用于获取更新前各种状态数据
`updated()`          更新后执行该钩子函数，所有的状态数据是最新的。
`beforeDestroy()`    销毁前执行，可以用于一些定时器的清除。
`destroyed()`        组件已经销毁，事件监听器被移除，所有的子实例也会被销毁。

:::