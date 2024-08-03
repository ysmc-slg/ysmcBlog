import{r as p,c as o,a as n,d as e,w as c,F as l,e as s,b as a,o as u}from"./app.6110823a.js";import{_ as k}from"./plugin-vue_export-helper.5a098b48.js";const i={},r=s(`<h1 id="\u81EA\u5B9A\u4E49\u64CD\u4F5C\u65E5\u5FD7\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u64CD\u4F5C\u65E5\u5FD7\u6CE8\u89E3" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u64CD\u4F5C\u65E5\u5FD7\u6CE8\u89E3</h1><p>\u5728\u5F00\u53D1\u4E2D\uFF0C\u4F1A\u6709\u4FDD\u5B58\u7528\u6237\u64CD\u4F5C\u4FE1\u606F\u7684\u8FD9\u79CD\u9700\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u6CE8\u89E3\u7684\u65B9\u5F0F\u5B9E\u73B0\u3002</p><h2 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h2><p>\u6211\u4EEC\u662F\u8981\u5C06\u64CD\u4F5C\u4FE1\u606F\u4FDD\u5B58\u5230\u6570\u636E\u5E93\uFF0C\u4F1A\u6709\u4E00\u4E2A\u64CD\u4F5C\u4FE1\u606F\u8868 <code>sys_oper_log</code></p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SET</span> NAMES utf8mb4<span class="token punctuation">;</span>
<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">\`</span>sys_oper_log<span class="token punctuation">\`</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">\`</span>sys_oper_log<span class="token punctuation">\`</span>  <span class="token punctuation">(</span>
  <span class="token punctuation">\`</span>oper_id<span class="token punctuation">\`</span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u65E5\u5FD7\u4E3B\u952E&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>title<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u6A21\u5757\u6807\u9898&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>business_type<span class="token punctuation">\`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4E1A\u52A1\u7C7B\u578B\uFF080\u5176\u5B83 1\u65B0\u589E 2\u4FEE\u6539 3\u5220\u9664\uFF09&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>method<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u65B9\u6CD5\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>request_method<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u8BF7\u6C42\u65B9\u5F0F&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>operator_type<span class="token punctuation">\`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u64CD\u4F5C\u7C7B\u522B\uFF080\u5176\u5B83 1\u540E\u53F0\u7528\u6237 2\u624B\u673A\u7AEF\u7528\u6237\uFF09&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>oper_name<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u64CD\u4F5C\u4EBA\u5458&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>dept_name<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u90E8\u95E8\u540D\u79F0&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>oper_url<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u8BF7\u6C42URL&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>oper_ip<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u4E3B\u673A\u5730\u5740&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>oper_location<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u64CD\u4F5C\u5730\u70B9&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>oper_param<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u8BF7\u6C42\u53C2\u6570&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>json_result<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u8FD4\u56DE\u53C2\u6570&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span><span class="token keyword">status</span><span class="token punctuation">\`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token number">0</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u64CD\u4F5C\u72B6\u6001\uFF080\u6B63\u5E38 1\u5F02\u5E38\uFF09&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>error_msg<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_unicode_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u9519\u8BEF\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>oper_time<span class="token punctuation">\`</span> <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;\u64CD\u4F5C\u65F6\u95F4&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">\`</span>oper_id<span class="token punctuation">\`</span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> <span class="token number">109</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8mb4_unicode_ci <span class="token keyword">COMMENT</span> <span class="token operator">=</span> <span class="token string">&#39;\u64CD\u4F5C\u65E5\u5FD7\u8BB0\u5F55&#39;</span> ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7136\u540E\u521B\u5EFA\u4E00\u4E2A SpringBoot \u5DE5\u7A0B\uFF0C\u5F15\u5165\u4EE5\u4E0B\u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-aop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>commons-lang3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastjson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.79<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u914D\u7F6E\u6587\u4EF6</p><div class="language-properties ext-properties"><pre class="language-properties"><code><span class="token attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token attr-value">root</span>
<span class="token attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token attr-value">123456</span>
<span class="token attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql:///test08?serverTimezone=Asia/Shanghai&amp;useSSL=false</span>

<span class="token attr-name">mybatis.mapper-locations</span><span class="token punctuation">=</span> <span class="token attr-value">classpath*:mapper/**/*Mapper.xml</span>
</code></pre></div><p>\u521B\u5EFA <code>SysOperLog</code> \u5B9E\u4F53\u7C7B</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SysOperLog</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u65E5\u5FD7\u4E3B\u952E
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> operId<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u6A21\u5757
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4E1A\u52A1\u7C7B\u578B\uFF080\u5176\u5B83 1\u65B0\u589E 2\u4FEE\u6539 3\u5220\u9664\uFF09
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> businessType<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4E1A\u52A1\u7C7B\u578B\u6570\u7EC4
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> businessTypes<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BF7\u6C42\u65B9\u6CD5
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> method<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BF7\u6C42\u65B9\u5F0F
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> requestMethod<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u7C7B\u522B\uFF080\u5176\u5B83 1\u540E\u53F0\u7528\u6237 2\u624B\u673A\u7AEF\u7528\u6237\uFF09
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> operatorType<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u4EBA\u5458
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u90E8\u95E8\u540D\u79F0
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> deptName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BF7\u6C42url
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operUrl<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u5730\u5740
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operIp<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u5730\u70B9
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operLocation<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8BF7\u6C42\u53C2\u6570
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> operParam<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE\u53C2\u6570
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> jsonResult<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u72B6\u6001\uFF080\u6B63\u5E38 1\u5F02\u5E38\uFF09
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> status<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u9519\u8BEF\u6D88\u606F
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> errorMsg<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u65F6\u95F4
     */</span>
    <span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> operTime<span class="token punctuation">;</span>

    <span class="token comment">// ...\u7701\u7565set/get\u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6CE8\u89E3" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6CE8\u89E3</h2><p>\u5B9A\u4E49\u4E00\u4E2A <code>Log</code> \u6CE8\u89E3\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>PARAMETER<span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Log</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u6A21\u5757
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u529F\u80FD
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">BusinessType</span> <span class="token function">businessType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">BusinessType</span><span class="token punctuation">.</span>OTHER<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u4EBA\u7C7B\u522B
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">OperatorType</span> <span class="token function">operatorType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">OperatorType</span><span class="token punctuation">.</span>MANAGE<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u662F\u5426\u4FDD\u5B58\u8BF7\u6C42\u7684\u53C2\u6570
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSaveRequestData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u662F\u5426\u4FDD\u5B58\u54CD\u5E94\u7684\u53C2\u6570
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSaveResponseData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>\u529F\u80FD</code> \u548C <code>\u64CD\u4F5C\u4EBA\u5458\u7C7B\u522B</code> \u662F\u4E24\u4E2A\u679A\u4E3E\u7C7B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">BusinessType</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5176\u5B83
     */</span>
    OTHER<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u65B0\u589E
     */</span>
    INSERT<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u4FEE\u6539
     */</span>
    UPDATE<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u5220\u9664
     */</span>
    DELETE<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u6388\u6743
     */</span>
    GRANT<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u5BFC\u51FA
     */</span>
    EXPORT<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u5BFC\u5165
     */</span>
    IMPORT<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u5F3A\u9000
     */</span>
    FORCE<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u751F\u6210\u4EE3\u7801
     */</span>
    GENCODE<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u6E05\u7A7A\u6570\u636E
     */</span>
    CLEAN<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u64CD\u4F5C\u4EBA\u7C7B\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">OperatorType</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5176\u5B83
     */</span>
    OTHER<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u540E\u53F0\u7528\u6237
     */</span>
    MANAGE<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * \u624B\u673A\u7AEF\u7528\u6237
     */</span>
    MOBILE
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4FDD\u5B58\u64CD\u4F5C\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u64CD\u4F5C\u8BB0\u5F55" aria-hidden="true">#</a> \u4FDD\u5B58\u64CD\u4F5C\u8BB0\u5F55</h2><p>\u5B9A\u4E49\u597D <code>@Log</code> \u6CE8\u89E3\u540E\uFF0C\u5728\u521B\u5EFA\u4E00\u4E2A\u5207\u9762\u5728\u6DFB\u52A0\u6CE8\u89E3\u65F6\u8FDB\u884C\u64CD\u4F5C\u65E5\u5FD7\u5904\u7406\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u64CD\u4F5C\u65E5\u5FD7\u8BB0\u5F55\u5904\u7406
 */</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogAspect</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">LogAspect</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ObjectMapper</span> mapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5904\u7406\u5B8C\u8BF7\u6C42\u540E\u6267\u884C
     *
     * <span class="token keyword">@param</span> <span class="token parameter">joinPoint</span> \u5207\u70B9
     */</span>
    <span class="token annotation punctuation">@AfterReturning</span><span class="token punctuation">(</span>pointcut <span class="token operator">=</span> <span class="token string">&quot;@annotation(controllerLog)&quot;</span><span class="token punctuation">,</span> returning <span class="token operator">=</span> <span class="token string">&quot;jsonResult&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterReturning</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Log</span> controllerLog<span class="token punctuation">,</span> <span class="token class-name">Object</span> jsonResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleLog</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">,</span> controllerLog<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> jsonResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u62E6\u622A\u5F02\u5E38\u64CD\u4F5C
     *
     * <span class="token keyword">@param</span> <span class="token parameter">joinPoint</span> \u5207\u70B9
     * <span class="token keyword">@param</span> <span class="token parameter">e</span>         \u5F02\u5E38
     */</span>
    <span class="token annotation punctuation">@AfterThrowing</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;@annotation(controllerLog)&quot;</span><span class="token punctuation">,</span> throwing <span class="token operator">=</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doAfterThrowing</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Log</span> controllerLog<span class="token punctuation">,</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleLog</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">,</span> controllerLog<span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">handleLog</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Log</span> controllerLog<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Exception</span> e<span class="token punctuation">,</span> <span class="token class-name">Object</span> jsonResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            <span class="token comment">// *========\u6570\u636E\u5E93\u65E5\u5FD7=========*//</span>
            <span class="token class-name">SysOperLog</span> operLog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SysOperLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            operLog<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            operLog<span class="token punctuation">.</span><span class="token function">setOperName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u8BF7\u6C42\u7684\u5730\u5740</span>
            <span class="token class-name">ServletRequestAttributes</span> requestAttributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> ip <span class="token operator">=</span> <span class="token class-name">IpUtils</span><span class="token punctuation">.</span><span class="token function">getIpAddr</span><span class="token punctuation">(</span>requestAttributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            operLog<span class="token punctuation">.</span><span class="token function">setOperIp</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span><span class="token punctuation">;</span>
            operLog<span class="token punctuation">.</span><span class="token function">setOperUrl</span><span class="token punctuation">(</span>requestAttributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                operLog<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                operLog<span class="token punctuation">.</span><span class="token function">setErrorMsg</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u8BBE\u7F6E\u65B9\u6CD5\u540D\u79F0</span>
            <span class="token class-name">String</span> className <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getTarget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> methodName <span class="token operator">=</span> joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            operLog<span class="token punctuation">.</span><span class="token function">setMethod</span><span class="token punctuation">(</span>className <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> methodName <span class="token operator">+</span> <span class="token string">&quot;()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u5F0F</span>
            operLog<span class="token punctuation">.</span><span class="token function">setRequestMethod</span><span class="token punctuation">(</span>requestAttributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5904\u7406\u8BBE\u7F6E\u6CE8\u89E3\u4E0A\u7684\u53C2\u6570</span>
            <span class="token function">getControllerMethodDescription</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">,</span> controllerLog<span class="token punctuation">,</span> operLog<span class="token punctuation">,</span> jsonResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u4FDD\u5B58\u6570\u636E\u5E93</span>
            <span class="token class-name">AsyncManager</span><span class="token punctuation">.</span><span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">AsyncFactory</span><span class="token punctuation">.</span><span class="token function">recordOper</span><span class="token punctuation">(</span>operLog<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> exp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BB0\u5F55\u672C\u5730\u5F02\u5E38\u65E5\u5FD7</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;==\u524D\u7F6E\u901A\u77E5\u5F02\u5E38==&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F02\u5E38\u4FE1\u606F:{}&quot;</span><span class="token punctuation">,</span> exp<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            exp<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u6CE8\u89E3\u4E2D\u5BF9\u65B9\u6CD5\u7684\u63CF\u8FF0\u4FE1\u606F \u7528\u4E8EController\u5C42\u6CE8\u89E3
     *
     * <span class="token keyword">@param</span> <span class="token parameter">log</span>     \u65E5\u5FD7
     * <span class="token keyword">@param</span> <span class="token parameter">operLog</span> \u64CD\u4F5C\u65E5\u5FD7
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getControllerMethodDescription</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Log</span> log<span class="token punctuation">,</span> <span class="token class-name">SysOperLog</span> operLog<span class="token punctuation">,</span> <span class="token class-name">Object</span> jsonResult<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8BBE\u7F6Eaction\u52A8\u4F5C</span>
        operLog<span class="token punctuation">.</span><span class="token function">setBusinessType</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">businessType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BBE\u7F6E\u6807\u9898</span>
        operLog<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">title</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BBE\u7F6E\u64CD\u4F5C\u4EBA\u7C7B\u522B</span>
        operLog<span class="token punctuation">.</span><span class="token function">setOperatorType</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">operatorType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ordinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u662F\u5426\u9700\u8981\u4FDD\u5B58request\uFF0C\u53C2\u6570\u548C\u503C</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">isSaveRequestData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u83B7\u53D6\u53C2\u6570\u7684\u4FE1\u606F\uFF0C\u4F20\u5165\u5230\u6570\u636E\u5E93\u4E2D\u3002</span>
            <span class="token function">setRequestValue</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">,</span> operLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u662F\u5426\u9700\u8981\u4FDD\u5B58response\uFF0C\u53C2\u6570\u548C\u503C</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>log<span class="token punctuation">.</span><span class="token function">isSaveResponseData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> jsonResult <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u5C06\u8FD4\u56DE\u503C\u8F6C\u6210 json \u683C\u5F0F</span>
            operLog<span class="token punctuation">.</span><span class="token function">setJsonResult</span><span class="token punctuation">(</span>mapper<span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>jsonResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u653E\u5230log\u4E2D
     *
     * <span class="token keyword">@param</span> <span class="token parameter">operLog</span> \u64CD\u4F5C\u65E5\u5FD7
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span> \u5F02\u5E38
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setRequestValue</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">SysOperLog</span> operLog<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServletRequestAttributes</span> requestAttributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> requestMethod <span class="token operator">=</span> operLog<span class="token punctuation">.</span><span class="token function">getRequestMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">HttpMethod</span><span class="token punctuation">.</span>PUT<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>requestMethod<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span>POST<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>requestMethod<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53C2\u6570\u653E\u5728\u8BF7\u6C42\u4F53\u91CC\u9762\u7684\u60C5\u51B5</span>
            <span class="token class-name">String</span> params <span class="token operator">=</span> <span class="token function">argsArrayToString</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">.</span><span class="token function">getArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            operLog<span class="token punctuation">.</span><span class="token function">setOperParam</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u53C2\u6570\u653E\u5728\u5730\u5740\u680F\u91CC\u9762\u7684\u60C5\u51B5</span>
            <span class="token comment">// \u63D0\u53D6\u5730\u5740\u680F\u4E2D\u7684\u53C2\u6570</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> paramsMap <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> requestAttributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">HandlerMapping</span><span class="token punctuation">.</span>URI_TEMPLATE_VARIABLES_ATTRIBUTE<span class="token punctuation">)</span><span class="token punctuation">;</span>
            operLog<span class="token punctuation">.</span><span class="token function">setOperParam</span><span class="token punctuation">(</span>paramsMap<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u53C2\u6570\u62FC\u88C5
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">argsArrayToString</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramsArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> params <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>paramsArray <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> paramsArray<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> o <span class="token operator">:</span> paramsArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isFilterObject</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token class-name">String</span> jsonString <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">writeValueAsString</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        params <span class="token operator">+=</span> jsonString <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> params<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5224\u65AD\u662F\u5426\u9700\u8981\u8FC7\u6EE4\u7684\u5BF9\u8C61\u3002
     *\u4E0A\u4F20\u6587\u4EF6\u5BF9\u8C61\uFF0C\u96C6\u5408\u4E2D\u4FDD\u5B58\u7684\u4E0A\u4F20\u5BF9\u8C61\uFF0Cmap\u4E2D\u4FDD\u5B58\u4E86\u6587\u4EF6\u4E0A\u4F20\u5BF9\u8C61\u3001HttpServletRequest\u3001HttpServletResponse\u3001BindingResult \u90FD\u8FC7\u6EE4\u6389
     * <span class="token keyword">@param</span> <span class="token parameter">o</span> \u5BF9\u8C61\u4FE1\u606F\u3002
     * <span class="token keyword">@return</span> \u5982\u679C\u662F\u9700\u8981\u8FC7\u6EE4\u7684\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DEtrue\uFF1B\u5426\u5219\u8FD4\u56DEfalse\u3002
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;rawtypes&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isFilterObject</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> clazz <span class="token operator">=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> clazz<span class="token punctuation">.</span><span class="token function">getComponentType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Collection</span> collection <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> value <span class="token operator">:</span> collection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> value <span class="token keyword">instanceof</span> <span class="token class-name">MultipartFile</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Map</span> map <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span> o<span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> value <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Map<span class="token punctuation">.</span>Entry</span> entry <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token punctuation">)</span> value<span class="token punctuation">;</span>
                <span class="token keyword">return</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">MultipartFile</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> o <span class="token keyword">instanceof</span> <span class="token class-name">MultipartFile</span> <span class="token operator">||</span> o <span class="token keyword">instanceof</span> <span class="token class-name">HttpServletRequest</span> <span class="token operator">||</span> o <span class="token keyword">instanceof</span> <span class="token class-name">HttpServletResponse</span>
                <span class="token operator">||</span> o <span class="token keyword">instanceof</span> <span class="token class-name">BindingResult</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>@AfterReturning</code> \u8FD4\u56DE\u901A\u77E5\uFF0C\u6709\u8FD4\u56DE\u503C\u4F1A\u89E6\u53D1\u6B64\u65B9\u6CD5\uFF0C<code>@AfterThrowing</code> \u5F02\u5E38\u901A\u77E5\uFF0C\u5F53\u6709\u5F02\u5E38\u65F6\u4F1A\u89E6\u53D1\u6B64\u65B9\u6CD5\u3002\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4F1A\u8C03\u7528 <code>handleLog</code> \u65B9\u6CD5\u5BF9 <code>SysOperLog</code> \u8FDB\u884C\u8D4B\u503C\u3002</p><p>\u5728 <code>handleLog()</code> \u65B9\u6CD5\u4E2D\uFF0C\u5BF9 status\u3001operName \u8D4B\u503C\uFF0CoperName \u6211\u8FD9\u91CC\u5199\u6B7B\u4E86\u8FD9\u91CC\u662F\u767B\u5F55\u7528\u6237\u7684\u540D\u79F0\u3002\u7136\u540E\u7ED9 ip \u548C operUrl \u8D4B\u503C\uFF0C\u5982\u679C\u6709\u5F02\u5E38\u66F4\u65B0\u72B6\u6001\u548C\u5F02\u5E38\u4FE1\u606F\u3002</p><p><code>getControllerMethodDescription()</code> \u4E2D\u83B7\u53D6\u6CE8\u89E3\u4E0A\u7684\u4FE1\u606F\u7ED9 <code>operLog</code> \u8D4B\u503C\uFF0C\u5982\u679C\u9700\u8981\u4FDD\u5B58\u53C2\u6570\u4FE1\u606F\uFF0C\u9700\u8981\u5728 <code>setRequestValue()</code> \u65B9\u6CD5\u4E2D\u5BF9\u8BF7\u6C42\u65B9\u5F0F\u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u662F <code>POST</code> \u6216 <code>PUT</code> \u65B9\u5F0F\uFF0C\u83B7\u53D6\u8BF7\u6C42\u4F53\u4E2D\u7684\u5168\u90E8\u53C2\u6570\u8C03\u7528 <code>argsArrayToString()</code> \u65B9\u6CD5\u904D\u5386\u53C2\u6570\uFF0C\u540C\u65F6\u5728<code>isFilterObject()</code> \u4E2D\u5224\u65AD\u662F\u5426\u9700\u8981\u5C06\u53C2\u6570\u8FC7\u6EE4\uFF0C\u56E0\u4E3A\u6587\u4EF6\u4E0A\u4F20\u5BF9\u8C61\u7B49\u53C2\u6570\u53EA\u662F\u4E00\u4E2A\u4E8C\u8FDB\u5236\u4EE3\u7801\uFF0C\u6CA1\u6709\u610F\u4E49\u6240\u4EE5\u8981\u8FC7\u6EE4\u6389\uFF0C\u6700\u540E\u5C06\u53C2\u6570\u8F6C\u6210 JSON \u8FDB\u884C\u62FC\u63A5\u3002\u5982\u662F <code>GET</code> \u7B49\u5176\u4ED6\u65B9\u5F0F\uFF0C\u76F4\u63A5\u83B7\u53D6\u5730\u5740\u680F\u7684\u53C2\u6570\u8FDB\u884C\u8D4B\u503C\u3002\u6700\u540E\u5C06\u8FD4\u56DE\u503C\u4E5F\u8FDB\u884C\u8D4B\u503C\u3002</p><p>\u6700\u540E\u6267\u884C <code>AsyncManager.me().execute(AsyncFactory.recordOper(operLog));</code> \uFF0C\u5173\u4E8E\u5F02\u6B65\u7684\u64CD\u4F5C\u53EF\u4EE5\u770B\u8FD9\u7BC7\u6587\u7AE0 <a href="../asyncManager">\u5F02\u6B65\u7BA1\u7406\u5668</a></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u5F02\u6B65\u5DE5\u5382\uFF08\u4EA7\u751F\u4EFB\u52A1\u7528\uFF09
 *
 * <span class="token keyword">@author</span> tienchin
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> sys_user_logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token string">&quot;sys-user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u65E5\u5FD7\u8BB0\u5F55
     *
     * <span class="token keyword">@param</span> <span class="token parameter">operLog</span> \u64CD\u4F5C\u65E5\u5FD7\u4FE1\u606F
     * <span class="token keyword">@return</span> \u4EFB\u52A1task
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">TimerTask</span> <span class="token function">recordOper</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">SysOperLog</span> operLog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u8FDC\u7A0B\u67E5\u8BE2\u64CD\u4F5C\u5730\u70B9</span>
                operLog<span class="token punctuation">.</span><span class="token function">setOperLocation</span><span class="token punctuation">(</span><span class="token class-name">AddressUtils</span><span class="token punctuation">.</span><span class="token function">getRealAddressByIP</span><span class="token punctuation">(</span>operLog<span class="token punctuation">.</span><span class="token function">getOperIp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">ISysOperLogService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOperlog</span><span class="token punctuation">(</span>operLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,25),m=n("code",null,"SpringUtils.getBean",-1),d=a(" \u83B7\u53D6\u88AB Spring \u7BA1\u7406\u7684 Bean\u3002\u5982\u679C\u4E0D\u4E86\u89E3\u600E\u6837\u5728\u975E Spring \u5BB9\u5668\u4E2D\u83B7\u53D6 Spring \u4E2D\u7684 Bean\uFF0C\u53EF\u4EE5\u53C2\u8003\uFF1A"),g=a("Aware"),y=s(`<div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u64CD\u4F5C\u65E5\u5FD7 \u670D\u52A1\u5C42
 *
 * <span class="token keyword">@author</span> tienchin
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ISysOperLogService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u65B0\u589E\u64CD\u4F5C\u65E5\u5FD7
     *
     * <span class="token keyword">@param</span> <span class="token parameter">operLog</span> \u64CD\u4F5C\u65E5\u5FD7\u5BF9\u8C61
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertOperlog</span><span class="token punctuation">(</span><span class="token class-name">SysOperLog</span> operLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SysOperLogServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">ISysOperLogService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">SysOperLogMapper</span> operLogMapper<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u65B0\u589E\u64CD\u4F5C\u65E5\u5FD7
     *
     * <span class="token keyword">@param</span> <span class="token parameter">operLog</span> \u64CD\u4F5C\u65E5\u5FD7\u5BF9\u8C61
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertOperlog</span><span class="token punctuation">(</span><span class="token class-name">SysOperLog</span> operLog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        operLogMapper<span class="token punctuation">.</span><span class="token function">insertOperlog</span><span class="token punctuation">(</span>operLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SysOperLogMapper</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u65B0\u589E\u64CD\u4F5C\u65E5\u5FD7
     *
     * <span class="token keyword">@param</span> <span class="token parameter">operLog</span> \u64CD\u4F5C\u65E5\u5FD7\u5BF9\u8C61
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertOperlog</span><span class="token punctuation">(</span><span class="token class-name">SysOperLog</span> operLog<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token punctuation">}</span>
</code></pre></div><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top.zxqs.log_annotation.mapper.SysOperLogMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top.zxqs.log_annotation.domain.SysOperLog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysOperLogResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>     <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operId<span class="token punctuation">&quot;</span></span>         <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oper_id<span class="token punctuation">&quot;</span></span>        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span>          <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span>          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>businessType<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>business_type<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>method<span class="token punctuation">&quot;</span></span>         <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>method<span class="token punctuation">&quot;</span></span>         <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>requestMethod<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>request_method<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operatorType<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operator_type<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operName<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oper_name<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptName<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_name<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operUrl<span class="token punctuation">&quot;</span></span>        <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oper_url<span class="token punctuation">&quot;</span></span>       <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operIp<span class="token punctuation">&quot;</span></span>         <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oper_ip<span class="token punctuation">&quot;</span></span>        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operLocation<span class="token punctuation">&quot;</span></span>   <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oper_location<span class="token punctuation">&quot;</span></span>  <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operParam<span class="token punctuation">&quot;</span></span>      <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oper_param<span class="token punctuation">&quot;</span></span>     <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsonResult<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>json_result<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span>         <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span>         <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>errorMsg<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error_msg<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>operTime<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>oper_time<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectOperLogVo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select oper_id, title, business_type, method, request_method, operator_type, oper_name, dept_name, oper_url, oper_ip, oper_location, oper_param, json_result, status, error_msg, oper_time
        from sys_oper_log
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insertOperlog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top.zxqs.log_annotation.domain.SysOperLog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		insert into sys_oper_log(title, business_type, method, request_method, operator_type, oper_name, dept_name, oper_url, oper_ip, oper_location, oper_param, json_result, status, error_msg, oper_time)
        values (#{title}, #{businessType}, #{method}, #{requestMethod}, #{operatorType}, #{operName}, #{deptName}, #{operUrl}, #{operIp}, #{operLocation}, #{operParam}, #{jsonResult}, #{status}, #{errorMsg}, sysdate())
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4);function w(q,f){const t=p("RouterLink");return u(),o(l,null,[r,n("p",null,[m,d,e(t,{to:"/ssm/spring/Aware.html"},{default:c(()=>[g]),_:1})]),y],64)}var b=k(i,[["render",w]]);export{b as default};
