(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{439:function(e,v,s){"use strict";s.r(v);var _=s(31),t=Object(_.a)({},(function(){var e=this,v=e.$createElement,s=e._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),s("p",[e._v("版本："),s("code",[e._v("redis-6.2.3")])]),e._v(" "),s("p",[e._v("环境："),s("code",[e._v("Linux")])]),e._v(" "),s("p",[e._v("下载地址：https://redis.io/")]),e._v(" "),s("p",[s("img",{attrs:{src:"/blogImg/20210519105652.png",alt:"下载地址"}})]),e._v(" "),s("p",[e._v("因为redis的编译需要C 语言的编译环境，所以先安装"),s("code",[e._v("gcc")])]),e._v(" "),s("p",[s("code",[e._v("yum install gcc")])]),e._v(" "),s("p",[e._v("使用："),s("code",[e._v("gcc --version")]),e._v("查看是否安装成功")]),e._v(" "),s("h2",{attrs:{id:"开始安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始安装"}},[e._v("#")]),e._v(" 开始安装 "),s("Badge",{attrs:{text:"重要",type:"error"}})],1),e._v(" "),s("ul",[s("li",[s("p",[e._v("将下载的压缩包传递到linux "),s("code",[e._v("/data")]),e._v(" 目录下（放那个目录都可以）")])]),e._v(" "),s("li",[s("p",[e._v("使用"),s("code",[e._v("tar -zxvf redis-6.2.3.tar.gz")]),e._v("解压文件")])]),e._v(" "),s("li",[s("p",[e._v("进入"),s("code",[e._v("redis-6.2.3")]),e._v("文件夹，使用"),s("code",[e._v("make")]),e._v("进行编译")])]),e._v(" "),s("li",[s("p",[e._v("编译完成后使用"),s("code",[e._v("make install")]),e._v("进行安装")])]),e._v(" "),s("li",[s("p",[e._v("默认安装目录在"),s("code",[e._v("usr/local/bin")])])])]),e._v(" "),s("p",[e._v("usr/local/bin 目录下会有几个文件：")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("详情")]),e._v(" "),s("p",[e._v("redis-benchmark:性能测试工具，可以在自己本子运行，看看自己本子性能如何")]),e._v(" "),s("p",[e._v("redis-check-aof：修复有问题的AOF文件，rdb和aof后面讲")]),e._v(" "),s("p",[e._v("redis-check-dump：修复有问题的dump.rdb文件")]),e._v(" "),s("p",[e._v("redis-sentinel：Redis集群使用")]),e._v(" "),s("p",[e._v("redis-server：Redis服务器启动命令")]),e._v(" "),s("p",[e._v("redis-cli：客户端，操作入口")])]),e._v(" "),s("h2",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("一种是直接使用"),s("code",[e._v("redis-server")]),e._v("启动，但是这种方式在窗口关闭时服务器就会停止。")])]),e._v(" "),s("li",[s("p",[e._v("还有就是，让服务在后台启动")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("ol",[s("li",[e._v("为了方便恢复初始设置，所以将"),s("code",[e._v("redis.conf")]),e._v("拷贝到"),s("code",[e._v("/etc")]),e._v("目录下")]),e._v(" "),s("li",[e._v("修改redis.conf文件将里面的daemonize no 改成 yes")]),e._v(" "),s("li",[e._v("使用"),s("code",[e._v("redis-server /etc/redis.conf")]),e._v("启动redis，使用redis-cli客户端访问")])])])])]),e._v(" "),s("h2",{attrs:{id:"设置密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[e._v("#")]),e._v(" 设置密码")]),e._v(" "),s("p",[e._v("如果是本地虚拟机安装，可以不需要设置密码，但如果是阿里云或腾讯云这种安装在云上的话，还是有必要设置一下密码的，之前我没设置，经常有数据被莫名其妙被设置成乱码的情况。设置密码也很简单。")]),e._v(" "),s("ol",[s("li",[e._v("找到"),s("code",[e._v("redis.conf")]),e._v("文件")]),e._v(" "),s("li",[e._v("找到"),s("code",[e._v("requirepass")]),e._v("在后面添加你的密码，如"),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 指定密码为 123")]),e._v("\nrequirepass "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("123")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])]),e._v(" "),s("li",[e._v("重新启动,"),s("code",[e._v("redis-server /etc/redis.conf")]),e._v("，然后输入命令"),s("code",[e._v("auth 123")]),e._v("。")])])])}),[],!1,null,null,null);v.default=t.exports}}]);