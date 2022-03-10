(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{482:function(s,a,e){"use strict";e.r(a);var n=e(32),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("单键多值")]),s._v(" "),e("p",[s._v("Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。")]),s._v(" "),e("p",[s._v("它的底层实际是个"),e("code",[s._v("双向链表")]),s._v("，对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blogImg/20210526143014.png",alt:"20210526143014"}})]),s._v(" "),e("h2",{attrs:{id:"数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[s._v("#")]),s._v(" 数据结构")]),s._v(" "),e("p",[s._v("List的数据结构为，快速链表quickList。\n首先在列表元素较少的情况下会使用一块连续的内存存储，这个结构是ziplist，也即是压缩列表。")]),s._v(" "),e("p",[s._v("它将所有的元素紧挨着一起存储，分配的是一块连续的内存。\n当数据量比较多的时候才会改成quicklist。\n因为普通的链表需要的附加指针空间太大，会比较浪费空间。比如这个列表里存的只是int类型的数据，结构上还需要两个额外的指针prev和next。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blogImg/%E5%9B%BE%E7%89%872.png",alt:"图片2"}})]),s._v(" "),e("p",[s._v("Redis将链表和ziplist结合起来组成了quicklist。也就是将多个ziplist使用双向指针串起来使用。这样既满足了快速的插入删除性能，又不会出现太大的空间冗余。")]),s._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("div",{staticClass:"language-redis line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("从 左边/右边 插入一个或多个值\nlpush/rpush <key> <value1> <value2> <value3>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"/blogImg/20210526143530.png",alt:"20210526143530.png"}})]),s._v(" "),e("div",{staticClass:"language-redis line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 从左边/右边吐出一个值。值在键在，值光键亡。\nlpop/rpop <key>     \n    \n// 从<key1>列表右边吐出一个值，插到<key2>列表左边。\nrpoplpush  <key1><key2> \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"/blogImg/20210526144109.png",alt:"20210526144109.png"}})]),s._v(" "),e("div",{staticClass:"language-redis line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 按照索引下标获得元素(从左到右)\n// lrange mylist 0 -1   0左边第一个，-1右边第一个，（0 -1表示获取所有）\nlrange <key> <start> <stop>\n    \n// 获得列表长度\nindex <key>    \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language-redis line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 在<value>的 前面/后面 插入<newvalue>插入值\nlinsert key before/after <value> <newvalue>\n    \n// 从左边删除n个value(从左到右)\nlrem <key> <n> <value>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"/blogImg/20210526145446.png",alt:"20210526145446.png"}})]),s._v(" "),e("div",{staticClass:"language-redis line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 将列表key，下标为index的值替换成value\nlset <key> <index> <value>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"/blogImg/20210526145728.png",alt:"20210526145728.png"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);