(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{450:function(v,_,e){"use strict";e.r(_);var o=e(32),d=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("除了核心功能默认内置的指令 ("),e("code",[v._v("v-model")]),v._v(" 和 "),e("code",[v._v("v-show")]),v._v(")，Vue 也允许注册自定义指令。")]),v._v(" "),e("h2",{attrs:{id:"钩子函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数"}},[v._v("#")]),v._v(" 钩子函数")]),v._v(" "),e("p",[v._v("在正式开始之前新介绍一下自定义指令声明周期的 "),e("code",[v._v("钩子函数")]),v._v("。")]),v._v(" "),e("p",[v._v("一个指令定义对象可以提供如下几个钩子函数 (均为可选)：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("bind")]),v._v("：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化")]),v._v(" "),e("li",[e("code",[v._v("inserted")]),v._v("：被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)。")]),v._v(" "),e("li",[e("code",[v._v("update")]),v._v("：组件更新时调用。")]),v._v(" "),e("li",[e("code",[v._v("componentUpdated")]),v._v("：指令所在组件的 VNode 及其子 VNode 全部更新后调用。")]),v._v(" "),e("li",[e("code",[v._v("unbind")]),v._v("：只调用一次，指令与元素解绑时调用。")])]),v._v(" "),e("p",[v._v("介绍完了"),e("code",[v._v("钩子函数")]),v._v("，接下来看一下钩子函数需要的参数：")]),v._v(" "),e("h3",{attrs:{id:"钩子函数的参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数的参数"}},[v._v("#")]),v._v(" 钩子函数的参数")]),v._v(" "),e("p",[v._v("指令钩子函数会被传入以下参数：")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("el")]),v._v("：指令所绑定的元素，可以用来直接操作DOM，位置必须是第一个参数。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("binding")]),v._v("：一个对象，包含一下属性。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("name")]),v._v("：指令名，不包含 "),e("code",[v._v("v-")]),v._v(" 前缀")]),v._v(" "),e("li",[e("code",[v._v("value")]),v._v("：指令的绑定值，例如："),e("code",[v._v('v-my-directive="1 + 1"')]),v._v(" 中，绑定值为 "),e("code",[v._v("2")]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("oldValue")]),v._v("：指令绑定的前一个值，仅在 "),e("code",[v._v("update")]),v._v(" 和 "),e("code",[v._v("componentUpdated")]),v._v(" 钩子中可用。无论值是否改变都可用。")]),v._v(" "),e("li",[e("code",[v._v("expression")]),v._v("：字符串形式的指令表达式。例如 "),e("code",[v._v('v-my-directive="1 + 1"')]),v._v(" 中，表达式为 "),e("code",[v._v('"1 + 1"')]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("arg")]),v._v("：传给指令的参数，可选。例如 "),e("code",[v._v("v-my-directive:foo")]),v._v(" 中，参数为 "),e("code",[v._v('"foo"')]),v._v("。")]),v._v(" "),e("li",[e("code",[v._v("modifiers")]),v._v("：一个包含修饰符的对象。例如："),e("code",[v._v("v-my-directive.foo.bar")]),v._v("中，修饰符对象为 "),e("code",[v._v("{ foo: true, bar: true }")]),v._v("。")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("vnode")]),v._v("：Vue 编译生成的虚拟节点。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("oldVnode")]),v._v("：上一个虚拟节点，仅在 "),e("code",[v._v("update")]),v._v(" 和 "),e("code",[v._v("componentUpdated")]),v._v(" 钩子中可用。")])])]),v._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),e("p",[v._v("除了 "),e("code",[v._v("el")]),v._v(" 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行。")])])])}),[],!1,null,null,null);_.default=d.exports}}]);