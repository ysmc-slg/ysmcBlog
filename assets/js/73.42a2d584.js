(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{500:function(t,a,r){"use strict";r.r(a);var s=r(32),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("上一节我们已经看到了如何处理任务不丢失的情况，但是如何保障当 RabbitMQ 服务停掉以后消息生产者发送过来的消息不丢失。默认情况下 RabbitMQ 退出或由于某种原因崩溃时，它忽视队列和消息，除非告知它不要这样做。确保消息不会丢失需要做两件事："),r("strong",[t._v("我们需要将队列和消息都标记为持久化")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"持久化队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#持久化队列"}},[t._v("#")]),t._v(" 持久化队列")]),t._v(" "),r("p",[t._v("之前我们创建的队列都是非持久化的，rabbitmq 如果重启的化，该队列就会被删除掉，如果\n要队列实现持久化 需要在声明队列的时候把 durable 参数设置为持久化")]),t._v(" "),r("p",[r("img",{attrs:{src:"/blogImg/rabbitmq/durable.png",alt:"durable"}})]),t._v(" "),r("p",[t._v("但是需要注意的就是如果之前声明的队列不是持久化的，需要把原先队列先删除，或者重新\n创建一个持久化的队列，不然就会出现错误")]),t._v(" "),r("p",[t._v("以下为控制台中持久化与非持久化队列的 UI 显示区：")]),t._v(" "),r("p",[r("img",{attrs:{src:"/blogImg/rabbitmq/ui.png",alt:"durable2"}})]),t._v(" "),r("p",[t._v("这个时候即使重启 rabbitmq 队列也依然存在")]),t._v(" "),r("h2",{attrs:{id:"持久化消息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#持久化消息"}},[t._v("#")]),t._v(" 持久化消息")]),t._v(" "),r("p",[t._v("要想让消息实现持久化需要在消息"),r("code",[t._v("生产者")]),t._v("修改代码，在props参数上添加，"),r("code",[t._v("MessageProperties.PERSISTENT_TEXT_PLAIN")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/blogImg/rabbitmq/props.png",alt:"durable2"}})]),t._v(" "),r("p",[t._v("将消息标记为持久化并不能完全保证不会丢失消息。尽管它告诉 RabbitMQ 将消息保存到磁盘，但是\n这里依然存在当消息刚准备存储在磁盘的时候 但是还没有存储完，消息还在缓存的一个间隔点。此时并没\n有真正写入磁盘。持久性保证并不强，但是对于我们的简单任务队列而言，这已经绰绰有余了。如果需要\n更强有力的持久化策略，参考后边课件"),r("RouterLink",{attrs:{to:"/view/mq/rabbitmq/messageConfirmation.html"}},[t._v("发布确认")]),t._v("章节。")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);