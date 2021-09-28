(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{462:function(t,e,n){"use strict";n.r(e);var a=n(32),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"rabbitmq-的概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-的概念"}},[t._v("#")]),t._v(" RabbitMQ 的概念")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("简介")]),t._v(" "),n("p",[t._v("基于"),n("code",[t._v("AMQP")]),t._v("协议，erlang语言开发，是部署最广泛的开源消息中间件,是最受欢迎的开源消息中间件之一。")]),t._v(" "),n("p",[t._v("它接受并转发消息。你可以把它当做一个快递站点，当你要发送一个包\n裹时，你把你的包裹放到快递站，快递员最终会把你的快递送到收件人那里，按照这种逻辑 RabbitMQ 是\n一个快递站，一个快递员帮你传递快件。RabbitMQ 与快递站的主要区别在于，它不处理快件而是接收，\n存储和转发消息数据。")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("AMQP（advanced message queuing protocol）在2003年时被提出，最早用于解决金融领不同平台之间的消息传递交互问题。顾名思义，AMQP是一种协议，更准确的说是一种binary wire-level protocol（链接协议）。这是其和JMS的本质差别，AMQP不从API层进行限定，而是直接定义网络交换的数据格式。这使得实现了AMQP的provider天然性就是跨平台的。以下是AMQP协议模型:")])]),t._v(" "),n("p",[n("img",{attrs:{src:"/blogImg/rabbitmq/image-20200311182438041.png",alt:"AMQP协议模型"}})]),t._v(" "),n("p",[n("code",[t._v("官网")]),t._v(": https://www.rabbitmq.com/")]),t._v(" "),n("p",[n("code",[t._v("官方教程")]),t._v(": https://www.rabbitmq.com/#getstarted")]),t._v(" "),n("h2",{attrs:{id:"四大核心概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四大核心概念"}},[t._v("#")]),t._v(" 四大核心概念")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("生产者")]),t._v(" "),n("p",[t._v("产生数据发送消息的程序是生产者")])]),t._v(" "),n("li",[n("p",[t._v("交换机")]),t._v(" "),n("p",[t._v("交换机是 RabbitMQ 非常重要的一个部件，一方面它接收来自生产者的消息，另一方面它将消息推送到队列中。交换机必须确切知道如何处理它接收到的消息，是将这些消息推送到特定队列还是推送到多个队列，亦或者是把消息丢弃，这个得")])]),t._v(" "),n("li",[n("p",[t._v("队列")]),t._v(" "),n("p",[t._v("队列是 RabbitMQ 内部使用的一种数据结构，尽管消息流经 RabbitMQ 和应用程序，但它们只能存储在队列中。队列仅受主机的内存和磁盘限制的约束，本质上是一个大的消息缓冲区。许多生产者可以将消息发送到一个队列，许多消费者可以尝试从一个队列接收数据。这就是我们使用队列的方式")])]),t._v(" "),n("li",[n("p",[t._v("消费者")]),t._v(" "),n("p",[t._v("消费与接收具有相似的含义。消费者大多时候是一个等待接收消息的程序。请注意生产者，消费者和消息中间件很多时候并不在同一机器上。同一个应用程序既可以是生产者又是可以是消费者。")])])]),t._v(" "),n("h2",{attrs:{id:"工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),n("p",[n("img",{attrs:{src:"/blogImg/rabbitmq/rabbitmq02.png",alt:"工作原理图"}})]),t._v(" "),n("p",[n("strong",[t._v("Producer")]),t._v("：生产者")]),t._v(" "),n("p",[n("strong",[t._v("Consummer")]),t._v("：消费者")]),t._v(" "),n("p",[n("strong",[t._v("Connection")]),t._v("：建立Producer、Broker、Consummer之间的TCP连接。")]),t._v(" "),n("p",[n("strong",[t._v("Broker")]),t._v("：接收和分发消息的应用，RabbitMQ Server 就是Message Broker")]),t._v(" "),n("p",[n("strong",[t._v("Channel(信道)")]),t._v("：如果每一次访问 RabbitMQ 都建立一个 Connection，在消息量大的时候建立 TCP\nConnection 的开销将是巨大的，效率也较低。Channel 是在 connection 内部建立的逻辑连接，如果应用程\n序支持多线程，通常每个 thread 创建单独的 channel 进行通讯，AMQP method 包含了 channel id 帮助客\n户端和 message broker 识别 channel，所以 channel 之间是完全隔离的。"),n("code",[t._v("Channel 作为轻量级的 Connection 极大减少了操作系统建立 TCP connection 的开销")])]),t._v(" "),n("p",[n("strong",[t._v("Exchange")]),t._v("(交换机)：message 到达 broker 的第一站，根据分发规则，匹配查询表中的 routing key，分发\n消息到 queue 中去。常用的类型有：direct (point-to-point), topic (publish-subscribe) and fanout\n(multicast)")]),t._v(" "),n("p",[n("strong",[t._v("Queue(队列)")]),t._v("：消息最终被送到这里等待 consumer 取走")]),t._v(" "),n("p",[n("strong",[t._v("Binding")]),t._v("：exchange 和 queue 之间的虚拟连接，binding 中可以包含 routing key，Binding 信息被保\n存到 exchange 中的查询表中，用于 message 的分发依据")]),t._v(" "),n("p",[n("strong",[t._v("Virtual host")]),t._v("：出于多租户和安全因素设计的，把 AMQP 的基本组件划分到一个虚拟的分组中，类似\n于网络中的 namespace 概念。当多个不同的用户使用同一个 RabbitMQ server 提供的服务时，可以划分出\n多个 vhost，每个用户在自己的 vhost 创建 exchange／queue 等")])])}),[],!1,null,null,null);e.default=v.exports}}]);