import{e as n}from"./app.f4d3b26c.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u81EA\u5B9A\u4E49\u5BFC\u5165\u5BFC\u51FA\u548C\u6587\u4EF6\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5BFC\u5165\u5BFC\u51FA\u548C\u6587\u4EF6\u4E0B\u8F7D" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5BFC\u5165\u5BFC\u51FA\u548C\u6587\u4EF6\u4E0B\u8F7D</h1><p>\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/ysmc-slg/excel-poi</p><h2 id="excel\u5BFC\u5165\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#excel\u5BFC\u5165\u5BFC\u51FA" aria-hidden="true">#</a> Excel\u5BFC\u5165\u5BFC\u51FA</h2><p>\u5728\u9700\u8981\u5BFC\u51FA\u7684\u5B9E\u4F53\u7C7B\u4E0A\u52A0\u4E0A <code>@Excel</code> \u6CE8\u89E3\uFF0C\u6CE8\u89E3\u6709\u591A\u4E2A\u5C5E\u6027\uFF0C\u4E0B\u9762\u505A\u4E00\u4E0B\u5177\u4F53\u8BF4\u660E\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">// \u5BFC\u51FA\u5230Excel\u4E2D\u7684\u540D\u5B57</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u65E5\u671F\u683C\u5F0F \u5982: yyyy/MM/dd</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">dateFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>             

<span class="token comment">// \u8BFB\u53D6\u5185\u5BB9\u8868\u8FBE\u5F0F (\u5982: 0=\u7537,1=\u5973,2=\u672A\u77E5)\uFF0C\u4E0B\u8F7D\u65F6\u4F1A\u5C06\u6570\u5B57\u8F6C\u6210\u5B57\u7B26\uFF0C\u4E0A\u4F20\u5C06\u5B57\u7B26\u8F6C\u6210\u6570\u5B57</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">readConverterExp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>       

<span class="token doc-comment comment">/**
* \u6587\u5B57\u540E\u7F00,\u5982% 90 \u53D8\u621090%
*/</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">suffix</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u5F53\u503C\u4E3A\u7A7A\u65F6,\u5B57\u6BB5\u7684\u9ED8\u8BA4\u503C
*/</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">defaultValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u9F20\u6807\u653E\u4E0A\u53BB\u7684\u63D0\u793A\u4FE1\u606F
*/</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u8BBE\u7F6E\u53EA\u80FD\u9009\u62E9\u4E0D\u80FD\u8F93\u5165\u7684\u5217\u5185\u5BB9.\u4E0B\u62C9\u6846\uFF0C\u683C\u5F0F\u4E3A\uFF1A&quot;xxx,xxx&quot;
*/</span>
<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">combo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u662F\u5426\u5BFC\u51FA\u6570\u636E,\u5E94\u5BF9\u9700\u6C42:\u6709\u65F6\u6211\u4EEC\u9700\u8981\u5BFC\u51FA\u4E00\u4EFD\u6A21\u677F,\u8FD9\u662F\u6807\u9898\u9700\u8981\u4F46\u5185\u5BB9\u9700\u8981\u7528\u6237\u624B\u5DE5\u586B\u5199.
*/</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u53E6\u4E00\u4E2A\u7C7B\u4E2D\u7684\u5C5E\u6027\u540D\u79F0,\u652F\u6301\u591A\u7EA7\u83B7\u53D6,\u4EE5\u5C0F\u6570\u70B9\u9694\u5F00
*/</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">targetAttr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u662F\u5426\u81EA\u52A8\u7EDF\u8BA1\u6570\u636E,\u5728\u6700\u540E\u8FFD\u52A0\u4E00\u884C\u7EDF\u8BA1\u6570\u636E\u603B\u548C
*/</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isStatistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>



<span class="token doc-comment comment">/**
* \u5BFC\u51FA\u5B57\u4F53\u989C\u8272
*/</span>
<span class="token keyword">public</span> <span class="token class-name">IndexedColors</span> <span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">IndexedColors</span><span class="token punctuation">.</span>BLACK<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u5BFC\u51FA\u5B57\u6BB5\u5BF9\u9F50\u65B9\u5F0F
*/</span>
<span class="token keyword">public</span> <span class="token class-name">HorizontalAlignment</span> <span class="token function">align</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">HorizontalAlignment</span><span class="token punctuation">.</span>CENTER<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u5206\u9694\u7B26\uFF0C\u8BFB\u53D6\u5B57\u7B26\u4E32\u7EC4\u5185\u5BB9
*/</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">separator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* BigDecimal \u7CBE\u5EA6 \u9ED8\u8BA4:-1(\u9ED8\u8BA4\u4E0D\u5F00\u542FBigDecimal\u683C\u5F0F\u5316)
*/</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* BigDecimal \u820D\u5165\u89C4\u5219 \u9ED8\u8BA4:BigDecimal.ROUND_HALF_EVEN
*/</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">roundingMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_EVEN<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u5BFC\u51FA\u65F6\u5728excel\u4E2D\u6BCF\u4E2A\u5217\u7684\u9AD8\u5EA6 \u5355\u4F4D\u4E3A\u5B57\u7B26
*/</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">14</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
* \u5BFC\u51FA\u65F6\u5728excel\u4E2D\u6BCF\u4E2A\u5217\u7684\u5BBD \u5355\u4F4D\u4E3A\u5B57\u7B26
*/</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">16</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
* \u5B57\u6BB5\u7C7B\u578B\uFF080\uFF1A\u5BFC\u51FA\u5BFC\u5165\uFF1B1\uFF1A\u4EC5\u5BFC\u51FA\uFF1B2\uFF1A\u4EC5\u5BFC\u5165\uFF09
*/</span>
<span class="token class-name">Type</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Type</span><span class="token punctuation">.</span>ALL<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Type</span> <span class="token punctuation">{</span>
    <span class="token function">ALL</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">EXPORT</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">IMPORT</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token class-name">Type</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
* \u5BFC\u51FA\u5355\u5143\u683C\u7C7B\u578B\uFF080\u6570\u5B57 1\u5B57\u7B26\u4E32 2\u56FE\u7247\uFF09
*/</span>
<span class="token keyword">public</span> <span class="token class-name">ColumnType</span> <span class="token function">cellType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">ColumnType</span><span class="token punctuation">.</span>STRING<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ColumnType</span> <span class="token punctuation">{</span>
    <span class="token function">NUMERIC</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">STRING</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">IMAGE</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token class-name">ColumnType</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u5177\u4F53\u7528\u6CD5\u5982\u4E0B\uFF1A</p><p>\u9996\u5148\u5728\u5B9E\u4F53\u7C7B\u4E2D\u52A0\u5165\u6CE8\u89E3\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TienchinChannel</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> channelId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u540D\u79F0&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> channelName<span class="token punctuation">;</span>


    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u72B6\u6001&quot;</span><span class="token punctuation">,</span>prompt<span class="token operator">=</span><span class="token string">&quot;\u8BF7\u9009\u62E9&quot;</span><span class="token punctuation">,</span>combo<span class="token operator">=</span><span class="token string">&quot;\u6B63\u5E38,\u7981\u7528&quot;</span><span class="token punctuation">,</span>readConverterExp<span class="token operator">=</span><span class="token string">&quot;0=\u7981\u7528,1=\u6B63\u5E38&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> status<span class="token punctuation">;</span>

    
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u6E20\u9053\u7C7B\u578B&quot;</span><span class="token punctuation">,</span>prompt<span class="token operator">=</span><span class="token string">&quot;\u8BF7\u9009\u62E9&quot;</span><span class="token punctuation">,</span>combo<span class="token operator">=</span><span class="token string">&quot;\u7EBF\u4E0A\u6E20\u9053,\u7EBF\u4E0B\u6E20\u9053&quot;</span><span class="token punctuation">,</span>readConverterExp<span class="token operator">=</span><span class="token string">&quot;1=\u7EBF\u4E0A\u6E20\u9053,2=\u7EBF\u4E0B\u6E20\u9053&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> type<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u521B\u5EFA\u65F6\u95F4&quot;</span><span class="token punctuation">,</span>dateFormat <span class="token operator">=</span> <span class="token string">&quot;yyyy/MM/dd&quot;</span><span class="token punctuation">,</span>type<span class="token operator">=</span><span class="token class-name">Type</span><span class="token punctuation">.</span>EXPORT<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd HH:ss:mm&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

    <span class="token comment">// ... \u7701\u7565setter/getter \u65B9\u6CD5</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BFC\u51FA\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/export&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">export</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">TienchinChannel</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u67E5\u8BE2\u8981\u5BFC\u51FA\u7684\u6570\u636E</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> channelService<span class="token punctuation">.</span><span class="token function">selectTienchinChannelList</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ExcelUtil</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span> util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExcelUtil</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    util<span class="token punctuation">.</span><span class="token function">exportExcel</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> list<span class="token punctuation">,</span> <span class="token string">&quot;\u6E20\u9053\u6570\u636E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="https://img.zxqs.top/20230112095854.png" alt="image-20230112095846290"></p><p>\u5BFC\u5165\u65B9\u6CD5\uFF1A</p><p>\u5BFC\u5165\u9996\u5148\u8981\u5BFC\u51FA\u6A21\u677F</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
\u5BFC\u51FA\u6A21\u677F
*/</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/importTemplate&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">importTemplate</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ExcelUtil</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span> util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExcelUtil</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    util<span class="token punctuation">.</span><span class="token function">importTemplateExcel</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token string">&quot;\u6E20\u9053\u6570\u636E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BFC\u5165\u65B9\u6CD5\uFF1A</p><p>\u5176\u4E2D updateSupport \u53C2\u6570\u662F\u5DF2\u5B58\u5728\u7684\u6570\u636E\u8981\u4E0D\u8981\u4FEE\u6539\uFF0C\u8FD9\u91CC\u7684\u4E1A\u52A1\u903B\u8F91\u9700\u8981\u81EA\u5DF1\u53BB\u5199</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/importData&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">importData</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">,</span> <span class="token keyword">boolean</span> updateSupport<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">ExcelUtil</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span> util <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExcelUtil</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TienchinChannel</span><span class="token punctuation">&gt;</span></span> userList <span class="token operator">=</span> util<span class="token punctuation">.</span><span class="token function">importExcel</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        String operName = getUsername();</span>
<span class="token comment">//        String message = userService.importUser(userList, updateSupport, operName);</span>
    <span class="token keyword">return</span> <span class="token string">&quot;df&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D</h2><p>\u9996\u5148\u8981\u8BF4\u7684\u662F\u6B64\u5DE5\u5177\u662F\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u672C\u5730\u3002</p><p>\u914D\u7F6E\u6587\u4EF6\u4FDD\u5B58\u7684\u8DEF\u5F84</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">demo</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6587\u4EF6\u8DEF\u5F84 \u793A\u4F8B\uFF08 Windows\u914D\u7F6ED:/demo/uploadPath\uFF0CLinux\u914D\u7F6E /home/demo/uploadPath\uFF09</span>
  <span class="token key atrule">profile</span><span class="token punctuation">:</span> D<span class="token punctuation">:</span>/demo/uploadPath
</code></pre></div><p>\u7136\u540E\u901A\u8FC7\u901A\u7528\u7684\u8BF7\u6C42\u5904\u7406\u8FDB\u884C\u4E0A\u4F20\u4E0B\u8F7D\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u901A\u7528\u8BF7\u6C42\u5904\u7406
 *
 * <span class="token keyword">@author</span> tienchin
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/common&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CommonController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">CommonController</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> FILE_DELIMETER <span class="token operator">=</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u901A\u7528\u4E0A\u4F20\u8BF7\u6C42\uFF08\u5355\u4E2A\uFF09
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u8DEF\u5F84</span>
            <span class="token class-name">String</span> filePath <span class="token operator">=</span> <span class="token class-name">ExcelConfig</span><span class="token punctuation">.</span><span class="token function">getUploadPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u4E0A\u4F20\u5E76\u8FD4\u56DE\u65B0\u6587\u4EF6\u540D\u79F0</span>
            <span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token class-name">FileUploadUtils</span><span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> fileName<span class="token punctuation">;</span>
<span class="token comment">//            AjaxResult ajax = AjaxResult.success();</span>
<span class="token comment">//            ajax.put(&quot;url&quot;, url);</span>
<span class="token comment">//            ajax.put(&quot;fileName&quot;, fileName);</span>
<span class="token comment">//            ajax.put(&quot;newFileName&quot;, FileUtils.getName(fileName));</span>
<span class="token comment">//            ajax.put(&quot;originalFilename&quot;, file.getOriginalFilename());</span>
            <span class="token keyword">return</span> url<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u901A\u7528\u4E0A\u4F20\u8BF7\u6C42\uFF08\u591A\u4E2A\uFF09
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/uploads&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">uploadFiles</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MultipartFile</span><span class="token punctuation">&gt;</span></span> files<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u8DEF\u5F84</span>
            <span class="token class-name">String</span> filePath <span class="token operator">=</span> <span class="token class-name">ExcelConfig</span><span class="token punctuation">.</span><span class="token function">getUploadPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> urls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fileNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> newFileNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> originalFilenames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file <span class="token operator">:</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u4E0A\u4F20\u5E76\u8FD4\u56DE\u65B0\u6587\u4EF6\u540D\u79F0</span>
                <span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token class-name">FileUploadUtils</span><span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> fileName<span class="token punctuation">;</span>
                urls<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
                fileNames<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                newFileNames<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                originalFilenames<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getOriginalFilename</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
<span class="token comment">//            AjaxResult ajax = AjaxResult.success();</span>
<span class="token comment">//            ajax.put(&quot;urls&quot;, StringUtils.join(urls, FILE_DELIMETER));</span>
<span class="token comment">//            ajax.put(&quot;fileNames&quot;, StringUtils.join(fileNames, FILE_DELIMETER));</span>
<span class="token comment">//            ajax.put(&quot;newFileNames&quot;, StringUtils.join(newFileNames, FILE_DELIMETER));</span>
<span class="token comment">//            ajax.put(&quot;originalFilenames&quot;, StringUtils.join(originalFilenames, FILE_DELIMETER));</span>
            <span class="token keyword">return</span> <span class="token string">&quot;\u6210\u529F&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u672C\u5730\u8D44\u6E90\u901A\u7528\u4E0B\u8F7D
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/download/resource&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resourceDownload</span><span class="token punctuation">(</span><span class="token class-name">String</span> resource<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span>
            <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">checkAllowDownload</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;\u8D44\u6E90(%s)\u975E\u6CD5\uFF0C\u4E0D\u5141\u8BB8\u4E0B\u8F7D\u3002&quot;</span><span class="token punctuation">,</span>resource<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u672C\u5730\u8D44\u6E90\u8DEF\u5F84</span>
            <span class="token class-name">String</span> localPath <span class="token operator">=</span> <span class="token class-name">ExcelConfig</span><span class="token punctuation">.</span><span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u6570\u636E\u5E93\u8D44\u6E90\u5730\u5740</span>
            <span class="token class-name">String</span> downloadPath <span class="token operator">=</span> localPath <span class="token operator">+</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">substringAfter</span><span class="token punctuation">(</span>resource<span class="token punctuation">,</span> <span class="token string">&quot;/profile&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u4E0B\u8F7D\u540D\u79F0</span>
            <span class="token class-name">String</span> downloadName <span class="token operator">=</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">substringAfterLast</span><span class="token punctuation">(</span>downloadPath<span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span>APPLICATION_OCTET_STREAM_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">setAttachmentResponseHeader</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> downloadName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">writeBytes</span><span class="token punctuation">(</span>downloadPath<span class="token punctuation">,</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0B\u8F7D\u6587\u4EF6\u5931\u8D25&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u901A\u7528\u4E0B\u8F7D\u8BF7\u6C42
     *
     * <span class="token keyword">@param</span> <span class="token parameter">fileName</span> \u6587\u4EF6\u540D\u79F0
     * <span class="token keyword">@param</span> <span class="token parameter">delete</span>   \u662F\u5426\u5220\u9664
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/download&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fileDownload</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">,</span> <span class="token class-name">Boolean</span> delete<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">checkAllowDownload</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;\u6587\u4EF6\u540D\u79F0(%s)\u975E\u6CD5\uFF0C\u4E0D\u5141\u8BB8\u4E0B\u8F7D\u3002&quot;</span><span class="token punctuation">,</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">String</span> realFileName <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> fileName<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>fileName<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> filePath <span class="token operator">=</span> <span class="token class-name">ExcelConfig</span><span class="token punctuation">.</span><span class="token function">getDownloadPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> fileName<span class="token punctuation">;</span>

            response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span>APPLICATION_OCTET_STREAM_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">setAttachmentResponseHeader</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> realFileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">writeBytes</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> response<span class="token punctuation">.</span><span class="token function">getOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>delete<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">deleteFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0B\u8F7D\u6587\u4EF6\u5931\u8D25&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u5B8C\u6574\u7684\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u5305\u62EC\uFF1A\u57DF\u540D\uFF0C\u7AEF\u53E3\uFF0C\u4E0A\u4E0B\u6587\u8BBF\u95EE\u8DEF\u5F84
     *
     * <span class="token keyword">@return</span> \u670D\u52A1\u5730\u5740
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ServletRequestAttributes</span> attributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> attributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">getDomain</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getDomain</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuffer</span> url <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> contextPath <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> url<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>contextPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E0A\u4F20\u6587\u4EF6\u8FD4\u56DE\u7684\u8DEF\u5F84\u524D\u7F00\u662F <code>/profile</code>\uFF0C\u5982\u4FDD\u5B58\u6587\u4EF6\u8DEF\u5F84\u662F <code>D:\\demo\\uploadPath\\upload\\2023\\01\\11\\xxx.jpg</code>\u800C\u65B9\u6CD5 <code>upload</code> \u8FD4\u56DE\u8DEF\u5F84\u662F <code>\\profile\\upload\\2023\\01\\11\\xxx.jpg</code>\uFF0C\u6700\u540E\u5728\u62FC\u63A5\u5B8C\u6574\u7684\u8BF7\u6C42\u8DEF\u5F84<code>http://localhost:8080/profile/upload/2023/01/12/xxx.jpg</code> \u4E5F\u5C31\u662F\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u7684\u3002\u52A0\u4E0A\u524D\u7F00\u7684\u539F\u56E0\u662F\uFF0C\u8981\u5BF9\u6587\u4EF6\u8FDB\u884C\u5339\u914D\u6620\u5C04\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResourcesConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/** \u8DEF\u5F84\u5339\u914D\u6620\u5C04 */</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/profile&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;file:&quot;</span> <span class="token operator">+</span> <span class="token class-name">ExcelConfig</span><span class="token punctuation">.</span><span class="token function">getProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u62E6\u622A <code>/profile</code> \u8DEF\u5F84\uFF0C\u6620\u5C04\u5230\u672C\u5730\u76EE\u5F55\uFF0C\u6700\u540E\u7684 <code>/</code> \u5FC5\u987B\u52A0\uFF0C\u6240\u6709\u7CFB\u7EDF\u90FD\u8FD9\u6837\u5199\u3002</p>`,26);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};
