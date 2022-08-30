---
description: 认证流程
autoPrev: Authentication
---

# 认证流程分析
Spring Security 中默认的一套登录流程是非常完善并且严谨的。但是项目需求非常多样化，很多时候，我们可能还需要对 Spring Security 登录流程进行定制，定制的前提是开发者先深刻理解 Spring Security 登录流程，然后在此基础之上，完成对登录流程的定制。本章将从头梳理 Spring Security 登录流程，并通过几个常见的登录定制案例，让读者更加深刻地理解 SpringSecurity 登录流程。

本文涉及的只要知识点有：
1. 登录流程分析
2. 配置多个数据源
3. 添加登录验证码

