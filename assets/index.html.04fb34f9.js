import{e as n}from"./app.31bf0e1c.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="mybatis-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#mybatis-\u7B80\u4ECB" aria-hidden="true">#</a> MyBatis \u7B80\u4ECB</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6587\u7AE0\u5F15\u7528\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF1A\u6C5F\u5357\u4E00\u70B9\u96E8 Mybaits \u6559\u7A0B</p></div><h2 id="mybatis-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#mybatis-\u4ECB\u7ECD" aria-hidden="true">#</a> MyBatis \u4ECB\u7ECD</h2><p>MyBatis \u672C\u662F apache \u7684\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE iBatis, 2010 \u5E74\u8FD9\u4E2A\u9879\u76EE\u7531 apache software foundation \u8FC1\u79FB\u5230\u4E86 google code\uFF0C\u5E76\u4E14\u6539\u540D\u4E3A MyBatis\uFF0C\u5B9E\u8D28\u4E0A Mybatis \u5BF9 ibatis \u8FDB\u884C\u4E00\u4E9B\u6539\u8FDB\u3002MyBatis \u662F\u4E00\u4E2A\u4F18\u79C0\u7684\u6301\u4E45\u5C42\u6846\u67B6\uFF0C\u5B83\u5BF9 jdbc \u7684\u64CD\u4F5C\u6570\u636E\u5E93\u7684\u8FC7\u7A0B\u8FDB\u884C\u5C01\u88C5\uFF0C\u4F7F\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8 SQL \u672C\u8EAB\uFF0C\u800C\u4E0D\u9700\u8981\u82B1\u8D39\u7CBE\u529B\u53BB\u5904\u7406\u4F8B\u5982\u6CE8\u518C\u9A71\u52A8\u3001\u521B\u5EFA connection\u3001\u521B\u5EFA statement\u3001\u624B\u52A8\u8BBE\u7F6E\u53C2\u6570\u3001\u7ED3\u679C\u96C6\u68C0\u7D22\u7B49 jdbc \u7E41\u6742\u7684\u8FC7\u7A0B\u4EE3\u7801\u3002Mybatis \u901A\u8FC7 xml \u6216\u6CE8\u89E3\u7684\u65B9\u5F0F\u5C06\u8981\u6267\u884C\u7684\u5404\u79CD statement\uFF08statement\u3001preparedStatemnt\u3001CallableStatement\uFF09\u914D\u7F6E\u8D77\u6765\uFF0C\u5E76\u901A\u8FC7 java \u5BF9\u8C61\u548C statement \u4E2D\u7684 sql \u8FDB\u884C\u6620\u5C04\u751F\u6210\u6700\u7EC8\u6267\u884C\u7684 sql \u8BED\u53E5\uFF0C\u6700\u540E\u7531 mybatis \u6846\u67B6\u6267\u884C sql \u5E76\u5C06\u7ED3\u679C\u6620\u5C04\u6210 java \u5BF9\u8C61\u5E76\u8FD4\u56DE\u3002</p><p>\u4E0E\u5176\u4ED6\u7684\u5BF9\u8C61\u5173\u7CFB\u6620\u5C04\u6846\u67B6\u4E0D\u540C\uFF0CMyBatis \u5E76\u6CA1\u6709\u5C06 Java \u5BF9\u8C61\u4E0E\u6570\u636E\u5E93\u8868\u5173\u8054\u8D77\u6765\uFF0C\u800C\u662F\u5C06 Java \u65B9\u6CD5\u4E0E SQL \u8BED\u53E5\u5173\u8054\u3002MyBatis \u5141\u8BB8\u7528\u6237\u5145\u5206\u5229\u7528\u6570\u636E\u5E93\u7684\u5404\u79CD\u529F\u80FD\uFF0C\u4F8B\u5982\u5B58\u50A8\u8FC7\u7A0B\u3001\u89C6\u56FE\u3001\u5404\u79CD\u590D\u6742\u7684\u67E5\u8BE2\u4EE5\u53CA\u67D0\u6570\u636E\u5E93\u7684\u4E13\u6709\u7279\u6027\u3002\u5982\u679C\u8981\u5BF9\u9057\u7559\u6570\u636E\u5E93\u3001\u4E0D\u89C4\u8303\u7684\u6570\u636E\u5E93\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6216\u8005\u8981\u5B8C\u5168\u63A7\u5236 SQL \u7684\u6267\u884C\uFF0CMyBatis \u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002</p><p>MyBatis \u5B98\u7F51\uFF1Ahttps://mybatis.org/mybatis-3/zh/index.html</p><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><p>\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684 HelloWorld \u5148\u6765\u770B\u4E0B MyBatis \u7684\u57FA\u672C\u7528\u6CD5\u3002</p><p>\u9996\u5148\u6765\u51C6\u5907\u4E00\u4E2A\u6570\u636E\u5E93\uFF1A</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">\`</span><span class="token keyword">user</span><span class="token punctuation">\`</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token punctuation">\`</span><span class="token keyword">user</span><span class="token punctuation">\`</span>  <span class="token punctuation">(</span>
  <span class="token punctuation">\`</span>id<span class="token punctuation">\`</span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>username<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token punctuation">\`</span>address<span class="token punctuation">\`</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">COLLATE</span> utf8mb4_general_ci <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span><span class="token punctuation">)</span> <span class="token keyword">USING</span> <span class="token keyword">BTREE</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> <span class="token number">8</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8mb4 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8mb4_general_ci ROW_FORMAT <span class="token operator">=</span> Dynamic<span class="token punctuation">;</span>

<span class="token comment">-- ----------------------------</span>
<span class="token comment">-- Records of user</span>
<span class="token comment">-- ----------------------------</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span><span class="token keyword">user</span><span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5C0F\u660E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u676D\u5DDE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span><span class="token keyword">user</span><span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u4E0A\u6D77&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span><span class="token keyword">user</span><span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6DF1\u5733&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span><span class="token keyword">user</span><span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5E7F\u5DDE&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token punctuation">\`</span><span class="token keyword">user</span><span class="token punctuation">\`</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">&#39;\u738B\u4E94&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5317\u4EAC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SET</span> FOREIGN_KEY_CHECKS <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>\u63A5\u4E0B\u6765\u521B\u5EFA\u4E00\u4E2A\u666E\u901A\u7684 Maven \u5DE5\u7A0B\uFF0C\u4E0D\u7528\u521B\u5EFA Web \u5DE5\u7A0B\uFF0CJavaSE \u5DE5\u7A0B\u5373\u53EF\u3002\u9879\u76EE\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u6DFB\u52A0 MyBatis \u4F9D\u8D56\uFF1A</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.5.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>\u63A5\u4E0B\u6765\uFF0C\u5728<code>resource</code> \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>Mapper\u6587\u4EF6\uFF08UserMapper.xml\uFF09</code>\uFF0CMapper \u662F\u7528\u6765\u5728 MyBatis \u4E2D\u5B9A\u4E49 SQL \u7684 XML \u914D\u7F6E\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u653E\u5728\u5176\u4ED6\u76EE\u5F55\uFF0C\u540E\u9762\u6211\u4EEC\u518D\u8BE6\u7EC6\u8BF4\u660E\u3002</p><p>\u9996\u5148\u9700\u8981\u9996\u5148\u7ED9\u5B83\u53D6\u4E00\u4E2A namespace\uFF0C\u8FD9\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A\u5206\u9694\u7B26\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5728\u9879\u76EE\u4E2D\uFF0C\u4F1A\u5B58\u5728\u5F88\u591A\u4E2A Mapper\uFF0C\u6BCF\u4E00\u4E2A Mapper \u4E2D\u90FD\u4F1A\u5B9A\u4E49\u76F8\u5E94\u7684\u589E\u5220\u6539\u67E5\u65B9\u6CD5\uFF0C\u4E3A\u4E86\u907F\u514D\u65B9\u6CD5\u51B2\u7A81\uFF0C\u4E5F\u4E3A\u4E86\u4FBF\u4E8E\u7BA1\u7406\uFF0C\u6BCF\u4E00\u4E2A Mapper \u90FD\u6709\u81EA\u5DF1\u7684 namespace\uFF0C\u800C\u4E14\u8FD9\u4E2A namespace \u4E0D\u53EF\u4EE5\u91CD\u590D\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u5728 Mapper \u4E2D\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u7684\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u6839\u636E id \u67E5\u8BE2\u4E00\u4E2A\u7528\u6237\uFF1A</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top.zxqs.mapper.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top.zxqs.model.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user where id=#{id};
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getAllUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top.zxqs.model.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>\u5728 Mapper \u4E2D\uFF0C\u9996\u5148\u5B9A\u4E49\u4E00\u4E2A select \uFF0Cid \u8868\u793A\u67E5\u8BE2\u65B9\u6CD5\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0CresultType \u5B9A\u4E49\u4E86\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u3002\u5728 select \u8282\u70B9\u4E2D\uFF0C\u5B9A\u4E49\u67E5\u8BE2 SQL\uFF0C#{id}\uFF0C\u8868\u793A\u8FD9\u4E2A\u4F4D\u7F6E\u7528\u6765\u63A5\u6536\u5916\u90E8\u4F20\u8FDB\u6765\u7684\u53C2\u6570\u3002</p><p>\u5B9A\u4E49\u7684 User \u5B9E\u4F53\u7C7B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>

    <span class="token comment">// \u7701\u7565setter/getter\u65B9\u6CD5 </span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u63A5\u4E0B\u6765\uFF0C\u521B\u5EFA MyBatis \u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Config 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>development<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>JDBC<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POOLED<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>driver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.mysql.cj.jdbc.Driver<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jdbc:mysql:///test?serverTimezone=Asia/Shanghai<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mapper\\UserMapper.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>package</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top.zxqs.mapper.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>\u5728\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u914D\u7F6E <code>environments</code> \u548C <code>mapper</code> \u5373\u53EF\uFF0C<code>environment</code> \u5C31\u662F MyBatis \u6240\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u7684\u73AF\u5883\u4FE1\u606F\uFF0C\u5B83\u653E\u5728\u4E00\u4E2A <code>environments</code> \u8282\u70B9\u4E2D\uFF0C\u610F\u5473\u7740 environments \u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A environment\uFF0C\u4E3A\u4EC0\u4E48\u9700\u8981\u591A\u4E2A\u5462\uFF1F\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u751F\u4EA7\uFF0C\u4E0D\u540C\u73AF\u5883\u5404\u4E00\u4E2A environment\uFF0C\u6BCF\u4E00\u4E2A environment \u90FD\u6709\u4E00\u4E2A id\uFF0C\u4E5F\u5C31\u662F\u5B83\u7684\u540D\u5B57\uFF0C\u7136\u540E\uFF0C\u5728 environments \u4E2D\uFF0C\u901A\u8FC7 default \u5C5E\u6027\uFF0C\u6307\u5B9A\u4F60\u9700\u8981\u7684 environment\u3002\u6BCF\u4E00\u4E2A environment \u4E2D\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u6570\u636E\u7684\u57FA\u672C\u8FDE\u63A5\u4FE1\u606F\u3002</p><p>\u5728 <code>mappers</code> \u8282\u70B9\u4E2D\uFF0C\u5B9A\u4E49 <code>Mapper</code>\uFF0C\u4E5F\u5C31\u662F\u6307\u5B9A\u6211\u4EEC\u4E0A\u4E00\u6B65\u6240\u5199\u7684 Mapper\u6587\u4EF6\uFF08UserMapper.xml\uFF09\u7684\u8DEF\u5F84\u3002</p><p>\u6700\u540E\uFF0C\u6211\u4EEC\u6765\u52A0\u8F7D\u8FD9\u4E2A\u4E3B\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SqlSessionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">selectList</span><span class="token punctuation">(</span><span class="token string">&quot;top.zxqs.mapper.UserMapper.getAllUser&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">User</span> user <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user = &quot;</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9996\u5148\uFF0C\u6211\u4EEC\u52A0\u8F7D\u4E3B\u914D\u7F6E\u6587\u4EF6\uFF0C\u751F\u6210\u4E00\u4E2A <code>SqlSessionFactory</code>\uFF0C\u518D\u7531 <code>SqlSessionFactory</code> \u751F\u6210\u4E00\u4E2A <code>SqlSession</code>\uFF0C\u4E00\u4E2A <code>SqlSession</code> \u5C31\u76F8\u5F53\u4E8E\u662F\u6211\u4EEC\u7684\u4E00\u4E2A\u4F1A\u8BDD\uFF0C\u7C7B\u4F3C\u4E8E JDBC \u4E2D\u7684\u4E00\u4E2A\u8FDE\u63A5\uFF0C\u5728 SQL \u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u8FD9\u4E2A\u4F1A\u8BDD\u662F\u53EF\u4EE5\u5173\u95ED\u7684\u3002</p><p>\u5728\u8FD9\u91CC\uFF0C<code>SqlSessionFactoryBuilder</code> \u7528\u4E8E\u521B\u5EFA <code>SqlSessionFacoty</code>\uFF0C<code>SqlSessionFacoty</code> \u4E00\u65E6\u521B\u5EFA\u5B8C\u6210\u5C31\u4E0D\u9700\u8981 <code>SqlSessionFactoryBuilder</code> \u4E86\uFF0C\u56E0\u4E3A SqlSession \u662F\u901A\u8FC7 <code>SqlSessionFactory</code> \u751F\u4EA7\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5C06 <code>SqlSessionFactoryBuilder</code> \u5F53\u6210\u4E00\u4E2A\u5DE5\u5177\u7C7B\u4F7F\u7528\uFF0C\u6700\u4F73\u4F7F\u7528\u8303\u56F4\u662F\u65B9\u6CD5\u8303\u56F4\u5373\u65B9\u6CD5\u4F53\u5185\u5C40\u90E8\u53D8\u91CF\u3002</p><p><code>SqlSessionFactory</code> \u662F\u4E00\u4E2A\u63A5\u53E3\uFF0C\u63A5\u53E3\u4E2D\u5B9A\u4E49\u4E86 <code>openSession</code> \u7684\u4E0D\u540C\u91CD\u8F7D\u65B9\u6CD5\uFF0C<code>SqlSessionFactory</code> \u7684\u6700\u4F73\u4F7F\u7528\u8303\u56F4\u662F\u6574\u4E2A\u5E94\u7528\u8FD0\u884C\u671F\u95F4\uFF0C\u4E00\u65E6\u521B\u5EFA\u540E\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\uFF0C\u901A\u5E38\u4EE5\u5355\u4F8B\u6A21\u5F0F\u7BA1\u7406 <code>SqlSessionFactory</code>\u3002</p><p><code>SqlSession</code> \u4E2D\u5C01\u88C5\u4E86\u5BF9\u6570\u636E\u5E93\u7684\u64CD\u4F5C\uFF0C\u5982\uFF1A\u67E5\u8BE2\u3001\u63D2\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u7B49\u3002\u901A\u8FC7 <code>SqlSessionFactory</code> \u521B\u5EFA <code>SqlSession</code>\uFF0C\u800C <code>SqlSessionFactory</code> \u662F\u901A\u8FC7 <code>SqlSessionFactoryBuilder</code> \u8FDB\u884C\u521B\u5EFA\u3002<code>SqlSession</code> \u662F\u4E00\u4E2A\u9762\u5411\u7528\u6237\u7684\u63A5\u53E3\uFF0C sqlSession \u4E2D\u5B9A\u4E49\u4E86\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u4F7F\u7528 <code>DefaultSqlSession</code> \u5B9E\u73B0\u7C7B\u3002\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u5E94\u8BE5\u6709\u5B83\u81EA\u5DF1\u7684 SqlSession \u5B9E\u4F8B\u3002SqlSession \u7684\u5B9E\u4F8B\u4E0D\u80FD\u5171\u4EAB\u4F7F\u7528\uFF0C\u5B83\u4E5F\u662F\u7EBF\u7A0B\u4E0D\u5B89\u5168\u7684\u3002\u56E0\u6B64\u6700\u4F73\u7684\u8303\u56F4\u662F\u8BF7\u6C42\u6216\u65B9\u6CD5\u8303\u56F4\u3002\u7EDD\u5BF9\u4E0D\u80FD\u5C06 SqlSession \u5B9E\u4F8B\u7684\u5F15\u7528\u653E\u5728\u4E00\u4E2A\u7C7B\u7684\u9759\u6001\u5B57\u6BB5\u6216\u5B9E\u4F8B\u5B57\u6BB5\u4E2D\u3002\u6253\u5F00\u4E00\u4E2A SqlSession\uFF1B\u4F7F\u7528\u5B8C\u6BD5\u5C31\u8981\u5173\u95ED\u5B83\u3002\u901A\u5E38\u628A\u8FD9\u4E2A\u5173\u95ED\u64CD\u4F5C\u653E\u5230 finally \u5757\u4E2D\u4EE5\u786E\u4FDD\u6BCF\u6B21\u90FD\u80FD\u6267\u884C\u5173\u95ED\u3002</p><p>\u57FA\u4E8E\u4E0A\u9762\u51E0\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5BF9 SqlSessionFactory \u8FDB\u884C\u5C01\u88C5\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SqlSessionFactoryUtils</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">SqlSessionFactory</span> SQLSESSIONFACTORY <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>SQLSESSIONFACTORY <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                SQLSESSIONFACTORY <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;mybatis-config.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> SQLSESSIONFACTORY<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6837\uFF0C\u5728\u9700\u8981\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u5DE5\u5382\u65B9\u6CD5\u6765\u83B7\u53D6 SqlSessionFactory \u7684\u5B9E\u4F8B\u3002</p>`,32);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
