---
title: 自定义指令
autoPrev: computed
---

除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，Vue 也允许注册自定义指令。

## 钩子函数
在正式开始之前新介绍一下自定义指令声明周期的 `钩子函数`。

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

* `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化
* `inserted`：被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)。
* `update`：组件更新时调用。
* `componentUpdated`：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
* `unbind`：只调用一次，指令与元素解绑时调用。

介绍完了`钩子函数`，接下来看一下钩子函数需要的参数：

### 钩子函数的参数

指令钩子函数会被传入以下参数：

* `el`：指令所绑定的元素，可以用来直接操作DOM，位置必须是第一个参数。
* `binding`：一个对象，包含一下属性。

  * `name`：指令名，不包含 `v-` 前缀
  * `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  * `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  * `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  * `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  * `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar`中，修饰符对象为 `{ foo: true, bar: true }`。

* `vnode`：Vue 编译生成的虚拟节点。
* `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

::: tip 注意

除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。

:::
