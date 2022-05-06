---
title: rabbitmq安装
autoPrev: rabbitmq
---

## 下载

`官网下载地址`：https://www.rabbitmq.com/download.html

因为`rabbitmq`是基于`erlang`语言的，所以还得安装`erlang`环境。本文在centos7上使用rabbitmq的3.8.8版本。

`rabbitmq安装包下载`：[rabbitmq](/assets/file/rabbitmq-server-3.8.8-1.el7.noarch.rpm)

`erlang安装包下载`：[erlang](/assets/file/erlang-21.3-1.el7.x86_64.rpm)

## 安装步骤
::: tip

1. 将下载好的文件上传到 `/daata/`目录下。
2. 安装文件(分别按照以下顺序安装)

   rpm -ivh erlang-21.3-1.el7.x86_64.rpm

   yum install socat -y

   rpm -ivh rabbitmq-server-3.8.8-1.el7.noarch.rpm
3. 常用命令
    
   chkconfig rabbitmq-server on   添加开机启动 RabbitMQ 服务

   /sbin/service rabbitmq-server start   启动服务

   /sbin/service rabbitmq-server status   查看服务状态

   /sbin/service rabbitmq-server stop    停止服务(选择执行) 

   rabbitmq-plugins enable rabbitmq_management     开启 web 管理插件

4. 设置服务器放开 `15672`和`5672`端口
5. 此时访问 http://47.115.185.244:15672/ 用默认账号`guest`登陆失败，需要添加一个新的用户
6. 添加一个新的用户

   rabbitmqctl add_user admin 123456     创建账号，设置密码

   rabbitmqctl set_user_tags admin administrator     设置用户角色

   set_permissions [-p <vhostpath>] <user> <conf> <write> <read>

   rabbitmqctl set_permissions -p "/" admin ".*" ".*" ".*"      设置权限

:::

此时访问 http://47.115.185.244:15672 使用新创建的用户，就可以进入rabbitmq的web管理界面。
