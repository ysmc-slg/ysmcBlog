---
title: flowable-ui
autoPrev: README
---

# flowable-ui

flowable-ui 是 Flowale 官方推荐的一个流程引擎辅助工具。

## 安装

有两种安装方式：

1. 官方提供的是一个 war 包，这个虽然是一个 war 包，但是除了将之扔到 Tomcat 中去运行之外，也可以直接执行 java -jar xxx.war 这个命令去启动这个 war 包。
   
   war 下载地址：https://github.com/flowable/flowable-engine/releases/download/flowable-6.7.2/flowable-6.7.2.zip，这个 zip 包下载之后，里边有一个 wars 文件夹，里边包含了 flowable-ui 的 war 包。然后，就像启动 Spring Boot 一样，直接启动这个 war 包即可：

   启动命令：

   ```shell
    java -jar flowable-ui.war
   ```

   ![image-20221214175415210](https://img.zxqs.top/image-20221214175415210.png)

   启动之后，默认的端口号是 8080。浏览器输入 http://localhost:8080/flowable-ui/idm/#/login，如果看到如下页面，表示启动成功：

   ![image-20221214175458116](https://img.zxqs.top/image-20221214175458116.png)

2. 使用 docker 安装

   ```shell
   docker run -p 8086:8080 -d  flowable/flowable-ui
   ``` 

   ![image-20221214175603289](https://img.zxqs.top/image-20221214175603289.png)

## 登录 

默认登录用户名是 `admin`，默认的登录密码是 test。

## 功能模块

flowable-ui 是完整的 flowable 体验 Demo，而不仅仅是一个流程图的绘制工具。所以它里边不仅可以画流程图，还可以运行流程图。

1. 任务应用程序：我们绘制好的流程图，可以直接将之发布到一个应用中，然后在这里进行部署，这个模块其实就是这些部署的应用程序。
2. 建模器应用程序：这个专门用来画流程图的。
3. 管理员应用程序：这个主要用来管理应用，一些具有管理员权限的用户，可以通过这个功能模块去查询 BPMN、DMN、FORM 等等信息。
4. 身份管理应用程序：这个功能模块，为所有的 flowable-ui 应用程序提供一个单点登录功能，并且还可以为这些用户设置用户组、用户权限等。



