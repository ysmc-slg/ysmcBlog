import{e as a}from"./app.b5d881e3.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const n={},t=a(`<h1 id="mybatis\u4E2D\u4E3B\u952E\u56DE\u586B\u7684\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#mybatis\u4E2D\u4E3B\u952E\u56DE\u586B\u7684\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> MyBatis\u4E2D\u4E3B\u952E\u56DE\u586B\u7684\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F</h1><p>\u4E3B\u952E\u56DE\u586B\u5176\u5B9E\u662F\u4E00\u4E2A\u975E\u5E38\u5E38\u89C1\u7684\u9700\u6C42\uFF0C\u7279\u522B\u662F\u5728\u6570\u636E\u6DFB\u52A0\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u6DFB\u52A0\u5B8C\u6570\u636E\u4E4B\u540E\uFF0C\u9700\u8981\u83B7\u53D6\u521A\u521A\u6DFB\u52A0\u7684\u6570\u636E id\uFF0C\u65E0\u8BBA\u662F Jdbc \u8FD8\u662F\u5404\u79CD\u5404\u6837\u7684\u6570\u636E\u5E93\u6846\u67B6\u90FD\u5BF9\u6B64\u63D0\u4F9B\u4E86\u76F8\u5173\u7684\u652F\u6301\uFF0C\u672C\u6587\u6211\u5C31\u6765\u548C\u548C\u5927\u5BB6\u5206\u4EAB\u4E0B\u6570\u636E\u5E93\u4E3B\u952E\u56DE\u586B\u5728 MyBatis \u4E2D\u7684\u4E24\u79CD\u5B9E\u73B0\u601D\u8DEF\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E3B\u952E\u6709\u4E24\u79CD\u751F\u6210\u65B9\u5F0F\uFF1A</p><ol><li>\u4E3B\u952E\u81EA\u589E\u957F</li><li>\u81EA\u5B9A\u4E49\u4E3B\u952E\uFF08\u4E00\u822C\u53EF\u4EE5\u4F7F\u7528UUID\uFF09</li></ol><p>\u5982\u679C\u662F\u7B2C\u4E8C\u79CD\uFF0C\u4E3B\u952E\u4E00\u822C\u662F\u5728Java\u4EE3\u7801\u4E2D\u751F\u6210\uFF0C\u7136\u540E\u4F20\u5165\u6570\u636E\u5E93\u6267\u884C\u63D2\u5165\u64CD\u4F5C\uFF0C\u5982\u679C\u662F\u7B2C\u4E00\u4E2A\u4E3B\u952E\u81EA\u589E\u957F\uFF0C\u6B64\u65F6\uFF0CJava \u53EF\u80FD\u9700\u8981\u77E5\u9053\u6570\u636E\u6DFB\u52A0\u6210\u529F\u540E\u7684\u4E3B\u952E\u3002</p><p>MyBatis \u7684\u57FA\u672C\u7528\u6CD5\u5C31\u65E0\u9700\u591A\u8BF4\u4E86\uFF0C\u8FD9\u4E5F\u4E0D\u662F\u672C\u6587\u7684\u91CD\u70B9\uFF0C\u6211\u4EEC\u8FD8\u662F\u6765\u770B\u770B MyBatis \u4E2D\u4E3B\u952E\u56DE\u586B\u7684\u4E24\u79CD\u4E0D\u540C\u5B9E\u73B0\u65B9\u5F0F\u5427\uFF01</p><h2 id="\u65B9\u5F0F\u4E00" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E00" aria-hidden="true">#</a> \u65B9\u5F0F\u4E00</h2><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useGeneratedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    insert into user (username,address) values (#{username},#{address});
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u8FD9\u79CD\u65B9\u5F0F\u6BD4\u8F83\u7B80\u5355\uFF0C\u5C31\u662F\u5728\u63D2\u5165\u8282\u70B9\u4E0A\u6DFB\u52A0 useGeneratedKeys \u5C5E\u6027\uFF0C\u540C\u65F6\u8BBE\u7F6E\u63A5\u6536\u56DE\u4F20\u4E3B\u952E\u7684\u5C5E\u6027\u3002\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u6267\u884C\u4E00\u4E2A\u63D2\u5165\u64CD\u4F5C\uFF0C\u63D2\u5165\u65F6\u4F20\u5165\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u63D2\u5165\u5B8C\u6210\u540E\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u7684 id \u5C31\u4F1A\u88AB\u81EA\u52A8\u8D4B\u503C\uFF0C\u503C\u5C31\u662F\u521A\u521A\u63D2\u5165\u6210\u529F\u7684id\u3002</p><h2 id="\u65B9\u5F0F\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u5F0F\u4E8C" aria-hidden="true">#</a> \u65B9\u5F0F\u4E8C</h2><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u5219\u662F\u5229\u7528MySQL\u81EA\u5E26\u7684 <code>last_insert_id()</code> \u51FD\u6570\u67E5\u8BE2\u521A\u521A\u63D2\u5165\u7684id\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>selectKey</span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.Integer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        SELECT LAST_INSERT_ID()
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>selectKey</span><span class="token punctuation">&gt;</span></span>
    insert into user (username,address) values (#{username},#{address});
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u8FD9\u79CD\u65B9\u5F0F\u662F\u5728 insert \u8282\u70B9\u4E2D\u6DFB\u52A0 selectKey \u6765\u5B9E\u73B0\u4E3B\u952E\u56DE\u586B\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u79CD\u65B9\u5F0F\u7684\u529F\u80FD\u66F4\u52A0\u4E30\u5BCC\uFF0C\u56E0\u4E3A selectKey \u8282\u70B9\u4E2D\u7684 SQL \u6211\u4EEC\u65E2\u53EF\u4EE5\u5728\u63D2\u5165\u4E4B\u524D\u6267\u884C\uFF0C\u4E5F\u53EF\u4EE5\u5728\u63D2\u5165\u4E4B\u540E\u6267\u884C\uFF08\u901A\u8FC7\u8BBE\u7F6E\u8282\u70B9\u7684 Order \u5C5E\u6027\u4E3A AFTER \u6216\u8005 BEFORE \u53EF\u4EE5\u5B9E\u73B0\uFF09\uFF0C\u5177\u4F53\u4EC0\u4E48\u65F6\u5019\u6267\u884C\uFF0C\u8FD8\u662F\u8981\u770B\u5177\u4F53\u7684\u9700\u6C42\uFF0C\u5982\u679C\u662F\u505A\u4E3B\u952E\u56DE\u586B\uFF0C\u6211\u4EEC\u5F53\u7136\u9700\u8981\u5728\u63D2\u5165 SQL \u6267\u884C\u4E4B\u540E\u6267\u884C selectKey \u8282\u70B9\u4E2D\u7684 SQL\u3002</p><p>\u6CE8\u610F\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u4E00\u6837\u4E5F\u8981\u901A\u8FC7\u8BBE\u7F6E keyProperty \u6765\u6307\u5B9A\u5C06\u67E5\u8BE2\u5230\u7684\u6570\u636E\u7ED1\u5B9A\u5230\u54EA\u4E2A\u5C5E\u6027\u4E0A\u3002</p>`,14);function e(p,o){return t}var u=s(n,[["render",e]]);export{u as default};
