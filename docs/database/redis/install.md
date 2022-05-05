---
title: 'redis6安装'
---

## 准备工作 
版本：`redis-6.2.3`

环境：`Linux`

下载地址：https://redis.io/

![下载地址](/blogImg/20210519105652.png)

因为redis的编译需要C 语言的编译环境，所以先安装`gcc`

`yum install gcc`

使用：`gcc --version`查看是否安装成功

## 开始安装 <Badge text="重要" type="error"/>
* 将下载的压缩包传递到linux `/data` 目录下（放那个目录都可以）

* 使用`tar -zxvf redis-6.2.3.tar.gz`解压文件

* 进入`redis-6.2.3`文件夹，使用`make`进行编译

* 编译完成后使用`make install`进行安装

* 默认安装目录在`usr/local/bin`

usr/local/bin 目录下会有几个文件：

::: tip 详情
redis-benchmark:性能测试工具，可以在自己本子运行，看看自己本子性能如何

redis-check-aof：修复有问题的AOF文件，rdb和aof后面讲

redis-check-dump：修复有问题的dump.rdb文件

redis-sentinel：Redis集群使用

redis-server：Redis服务器启动命令

redis-cli：客户端，操作入口
:::

## 启动
* 一种是直接使用`redis-server`启动，但是这种方式在窗口关闭时服务器就会停止。
* 还有就是，让服务在后台启动

  :::tip

  1. 为了方便恢复初始设置，所以将`redis.conf`拷贝到`/etc`目录下
  2. 修改redis.conf文件将里面的daemonize no 改成 yes
  3.   使用`redis-server /etc/redis.conf`启动redis，使用redis-cli客户端访问 

  :::  

## 设置密码

如果是本地虚拟机安装，可以不需要设置密码，但如果是阿里云或腾讯云这种安装在云上的话，还是有必要设置一下密码的，之前我没设置，经常有数据被莫名其妙被设置成乱码的情况。设置密码也很简单。

1. 找到`redis.conf`文件
2. 找到`requirepass`在后面添加你的密码，如
   ```java
   // 指定密码为 123
   requirepass 123
   ```
3. 重新启动,`redis-server /etc/redis.conf`，然后输入命令`auth 123`。

   