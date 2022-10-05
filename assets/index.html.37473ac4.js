import{e as n}from"./app.19b4a03f.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="\u81EA\u5B9A\u4E49\u52A8\u6001\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u52A8\u6001\u6570\u636E\u6E90" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u52A8\u6001\u6570\u636E\u6E90</h1><p>\u5728\u5F00\u53D1\u4E2D\u53EF\u80FD\u9700\u8981\u7528\u5230\u6570\u636E\u6E90\uFF0C\u4E0D\u540C\u7684\u8BF7\u6C42\u53EF\u80FD\u4F1A\u5728\u4E0D\u540C\u7684\u6570\u636E\u5E93\u4E2D\u8FDB\u884C\u67E5\u627E\u3002</p><p>\u672C\u7BC7\u6587\u7AE0\u6211\u4EEC\u5C31\u5F00\u770B\u770B\u600E\u6837\u5B9E\u73B0\u591A\u6570\u636E\u6E90\u3002</p><h2 id="_1-\u5927\u6982\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#_1-\u5927\u6982\u601D\u8DEF" aria-hidden="true">#</a> 1. \u5927\u6982\u601D\u8DEF</h2><p>Spring \u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u62BD\u8C61\u7C7B <code>AbstractRoutingDataSource</code>\uFF0C\u8BE5\u7C7B\u5145\u5F53\u4E86 <code>DataSource</code> \u7684\u8DEF\u7531\u4E2D\u4ECB\uFF0C\u5F53\u9879\u76EE\u8FD0\u884C\u65F6\uFF0C\u4F1A\u6839\u636E\u67D0\u79CD <code>key</code> \u503C\u6765\u52A8\u6001\u5207\u6362\u5230\u771F\u6B63\u7684 DataSource \u4E0A\u3002</p><p>\u5927\u81F4\u7684\u7528\u6CD5\u5C31\u662F\u4F60\u63D0\u524D\u51C6\u5907\u597D\u5404\u79CD\u6570\u636E\u6E90\uFF0C\u5B58\u5165\u5230\u4E00\u4E2A Map \u4E2D\uFF0CMap \u7684 key \u5C31\u662F\u8FD9\u4E2A\u6570\u636E\u6E90\u7684\u540D\u5B57\uFF0CMap \u7684 value \u5C31\u662F\u8FD9\u4E2A\u5177\u4F53\u7684\u6570\u636E\u6E90\uFF0C\u7136\u540E\u518D\u628A\u8FD9\u4E2A Map \u914D\u7F6E\u5230 <code>AbstractRoutingDataSource</code> \u4E2D\u3002</p><p>\u5177\u4F53\u7528\u5230\u90A3\u4E2A\u6570\u636E\u6E90\uFF0C\u6211\u4EEC\u4F1A\u81EA\u5B9A\u4E49\u4E00\u4E2A\u6CE8\u89E3\uFF0C\u5728\u6CE8\u89E3\u4E2D\u5B9A\u4E49\u5177\u4F53\u7684\u6570\u636E\u6E90\u540D\u79F0\u3002\u7136\u540E\u5C06\u6570\u636E\u6E90\u540D\u79F0\u5B58\u5230 <code>ThreadLocal</code> \u4E2D\uFF0C\u6700\u540E\u5728 <code>AbstractRoutingDataSource</code> \u4E2D\u7684 <code>determineCurrentLookupKey</code> \u65B9\u6CD5\u4E2D\u8BFB\u53D6 <code>ThreadLocal</code> \u4E2D\u7684\u6570\u636E\u6E90\u540D\u79F0\uFF0C\u5E76\u4E14\u627E\u5230\u5BF9\u5E94\u7684\u6570\u636E\u6E90\u53BB\u6267\u884Csql</p><p>\u5927\u81F4\u601D\u8DEF\u5C31\u662F\u8FD9\u6837\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u770B\u770B\u600E\u4E48\u73A9\u3002</p><h2 id="_2-\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> 2. \u521B\u5EFA\u9879\u76EE</h2><p>\u521B\u5EFA\u4E00\u4E2A springboot \u9879\u76EE\uFF0C\u7136\u540E\u5F15\u5165 web\u3001MyBatis\u3001MySQL\u3001Druid\u3001AOP \u4F9D\u8D56</p><div class="language-pom ext-pom"><pre class="language-pom"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;!--AOP--&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;
    &lt;/dependency&gt;


    &lt;dependency&gt;
        &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;
        &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;
        &lt;version&gt;2.2.2&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;dependency&gt;
        &lt;groupId&gt;com.alibaba&lt;/groupId&gt;
        &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;
        &lt;version&gt;1.2.9&lt;/version&gt;
    &lt;/dependency&gt;

    &lt;dependency&gt;
        &lt;groupId&gt;mysql&lt;/groupId&gt;
        &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
        &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
</code></pre></div><h2 id="_3-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3. \u914D\u7F6E\u6587\u4EF6</h2><p>\u521B\u5EFA\u4E00\u4E2A <code>application.yml</code> \u6587\u4EF6\uFF0C\u7528\u6765\u914D\u7F6E\u6570\u636E\u6E90\u4FE1\u606F\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># \u6570\u636E\u6E90\u914D\u7F6E</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token key atrule">driverClassName</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">ds</span><span class="token punctuation">:</span>
      <span class="token comment"># \u4E3B\u5E93\u6570\u636E\u6E90</span>
      <span class="token key atrule">master</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/test09<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> root
        <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token comment"># \u4ECE\u5E93\u6570\u636E\u6E90</span>
      <span class="token key atrule">slave</span><span class="token punctuation">:</span>
        <span class="token comment"># \u4ECE\u6570\u636E\u6E90\u5F00\u5173/\u9ED8\u8BA4\u5173\u95ED</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/test08<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> root
        <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token comment"># \u521D\u59CB\u8FDE\u63A5\u6570</span>
    <span class="token key atrule">initialSize</span><span class="token punctuation">:</span> <span class="token number">5</span>
    <span class="token comment"># \u6700\u5C0F\u8FDE\u63A5\u6C60\u6570\u91CF</span>
    <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">10</span>
    <span class="token comment"># \u6700\u5927\u8FDE\u63A5\u6C60\u6570\u91CF</span>
    <span class="token key atrule">maxActive</span><span class="token punctuation">:</span> <span class="token number">20</span>
    <span class="token comment"># \u914D\u7F6E\u83B7\u53D6\u8FDE\u63A5\u7B49\u5F85\u8D85\u65F6\u7684\u65F6\u95F4</span>
    <span class="token key atrule">maxWait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
</code></pre></div><p>ds \u91CC\u9762\u914D\u7F6E\u6211\u4EEC\u6240\u6709\u7684\u6570\u636E\u6E90\uFF0C\u6BCF\u4E00\u4E2A\u6570\u636E\u6E90\u90FD\u6709\u4E00\u4E2A\u540D\u5B57\uFF0C<code>master</code> \u662F\u9ED8\u8BA4\u6570\u636E\u6E90\u7684\u540D\u5B57\uFF0C\u4E0D\u53EF\u4FEE\u6539\uFF0C\u5176\u4ED6\u6570\u636E\u6E90\u53EF\u4EE5\u81EA\u5B9A\u4E49\u540D\u5B57\u3002</p><p>\u5173\u4E8E\u5176\u4ED6\u7684\u914D\u7F6E\uFF0C\u5982 <code>initialSize</code>,<code>minIdle</code> \u8FD9\u4E9B\u914D\u7F6E\u6BCF\u4E2A\u6570\u636E\u6E90\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u5F53\u7136\u5982\u679C\u4F60\u60F3\u4E0D\u540C\u7684\u6570\u636E\u6E90\u90FD\u6709\u4E0D\u540C\u7684\u521D\u59CB\u8FDE\u63A5\u6570\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u6211\u5C31\u4F7F\u7528\u4E0A\u9762\u7684\u914D\u7F6E\u4E86\u3002</p><p>\u63A5\u4E0B\u6765\u8FD8\u9700\u8981\u63D0\u4F9B\u4E00\u4E2A\u914D\u7F6E\u7C7B\uFF0C\u5C06\u4E0A\u9762\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u52A0\u8F7D\u5230\u7C7B\u4E2D\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span>: zxq
 * <span class="token keyword">@create</span>: 2022-05-28 14:21
 */</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DruidProperties</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> type<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> driverClassName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** key\u4E3A\u6570\u636E\u6E90\u540D\u79F0\uFF0Cvalue\u4E3A\u6570\u636E\u6E90\u7684\u503C\uFF0C\u56E0\u4E3A\u6570\u636E\u6E90\u91CC\u6709url\u7B49\u4FE1\u606F\u6240\u4EE5\u662F\u4E00\u4E2AMap */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ds<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> initialSize<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> minIdle<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> maxActive<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> maxWait<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5728\u5916\u90E8\u6784\u9020\u597D\u4E00\u4E2A DruidDataSource \u5BF9\u8C61\uFF0C\u4F46\u662F\u8FD9\u4E2A\u5BF9\u8C61\u53EA\u5305\u542B\u4E09\u4E2A\u6838\u5FC3\u5C5E\u6027 url\u3001username\u3001password
     * \u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\uFF0C\u7ED9DruidDataSource \u8BBE\u7F6E\u516C\u5171\u5C5E\u6027
     * <span class="token keyword">@param</span> <span class="token parameter">druidDataSource</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token class-name">DruidDataSource</span> druidDataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        druidDataSource<span class="token punctuation">.</span><span class="token function">setInitialSize</span><span class="token punctuation">(</span>initialSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        druidDataSource<span class="token punctuation">.</span><span class="token function">setMinIdle</span><span class="token punctuation">(</span>minIdle<span class="token punctuation">)</span><span class="token punctuation">;</span>
        druidDataSource<span class="token punctuation">.</span><span class="token function">setMaxActive</span><span class="token punctuation">(</span>maxActive<span class="token punctuation">)</span><span class="token punctuation">;</span>
        druidDataSource<span class="token punctuation">.</span><span class="token function">setMaxWait</span><span class="token punctuation">(</span>maxWait<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> druidDataSource<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setType</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDriverClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> driverClassName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDriverClassName</span><span class="token punctuation">(</span><span class="token class-name">String</span> driverClassName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>driverClassName <span class="token operator">=</span> driverClassName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">getDs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ds<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDs</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ds <span class="token operator">=</span> ds<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getInitialSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> initialSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setInitialSize</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> initialSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>initialSize <span class="token operator">=</span> initialSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getMinIdle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> minIdle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMinIdle</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> minIdle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>minIdle <span class="token operator">=</span> minIdle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getMaxActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> maxActive<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMaxActive</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> maxActive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxActive <span class="token operator">=</span> maxActive<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getMaxWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> maxWait<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMaxWait</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> maxWait<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maxWait <span class="token operator">=</span> maxWait<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u591A\u4E2A\u6570\u636E\u6E90\u5C31\u88AB\u8BFB\u53D6\u5230\u4E86 \u540D\u4E3A <code>ds</code> \u7684 <code>Map</code> \u4E2D\uFF0C<code>Map</code> \u4E2D\u7684 <code>key</code> \u5C31\u662F\u6570\u636E\u6E90\u7684\u540D\u79F0\uFF0C<code>value</code> \u8FD8\u662F\u4E00\u4E2A Map \u4FDD\u5B58\u7684\u662F<code>url\u3001paswword</code> \u7B49\u4FE1\u606F\u3002\u5C06\u6765\u6211\u4EEC\u5C31\u6839\u636E\u8FD9\u4E2A <code>ds</code> \u4E2D\u7684\u6570\u636E\u6765\u6784\u9020\u6570\u636E\u6E90\u3002</p><h2 id="_4-\u52A0\u8F7D\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#_4-\u52A0\u8F7D\u6570\u636E\u6E90" aria-hidden="true">#</a> 4. \u52A0\u8F7D\u6570\u636E\u6E90</h2><p>\u63A5\u4E0B\u6765\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u6765\u52A0\u8F7D\u6570\u636E\u6E90\uFF0C\u52A0\u8F7D\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">DruidProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LoadDataSource</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">DruidProperties</span> druidProperties<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u52A0\u8F7DDataSource\uFF0C
     * <span class="token keyword">@return</span> Map<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>String,</span> <span class="token attr-name">DataSource</span><span class="token punctuation">&gt;</span></span>  key\u4E3A\u6570\u636E\u6E90\u7684\u540D\u79F0\uFF0Cvalue \u52A0\u8F7D\u5B8C\u6210\u7684\u6570\u636E\u6E90
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">DataSource</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadAllDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">DataSource</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> ds <span class="token operator">=</span> druidProperties<span class="token punctuation">.</span><span class="token function">getDs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> keySet <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> keySet<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token class-name">DruidDataSourceFactory</span><span class="token punctuation">.</span><span class="token function">createDataSource</span><span class="token punctuation">(</span>ds<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// \u6B64\u65F6\u7684 dataSource \u4E2D\u53EA\u6709 url\u3001username\u3001password\uFF0C\u8FD8\u9700\u8981\u8C03\u7528 druidProperties.dataSource \u6DFB\u52A0\u4E0A\u5176\u4ED6\u4FE1\u606F</span>
                map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> druidProperties<span class="token punctuation">.</span><span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">DruidDataSource</span><span class="token punctuation">)</span> dataSource<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>  <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> map<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u8BE6\u89E3</p><p><code>loadAllDataSource</code> \u4E2D\u4F7F\u7528 <code>druidProperties.getDs()</code> \u83B7\u53D6\u6240\u6709\u6570\u636E\u6E90\uFF0C\u7136\u540E\u904D\u5386\u5F97\u5230\u6240\u6709\u6570\u636E\u6E90\u7684\u540D\u79F0</p><p><code>DruidDataSourceFactory.createDataSource</code> \u6839\u636E\u4E0D\u540C\u7684\u6570\u636E\u6E90\u540D\u79F0\u521B\u5EFA\u6570\u636E\u6E90\uFF0C\u8C03\u7528 <code>druidProperties.dataSource</code> \u914D\u7F6E\u5176\u4ED6\u516C\u5171\u5C5E\u6027\uFF08\u6700\u5927\u8FDE\u63A5\u6570\u3001\u521D\u59CB\u8FDE\u63A5\u6570\u7B49\uFF09</p><p>\u6700\u540E\uFF0C\u4EE5 key-value \u7684\u5F62\u5F0F\u5C06\u6570\u636E\u6E90\u5B58\u5165\u4E00\u4E2A Map \u96C6\u5408\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u6570\u636E\u6E90\u7684 key \u5C31\u662F\u4F60\u5728 YAML \u4E2D\u914D\u7F6E\u7684\u6570\u636E\u6E90\u540D\u79F0\uFF0Cvalue\u5C31\u662F\u5904\u7406\u597D\u7684\u6570\u636E\u6E90\u5BF9\u8C61\u3002</p></div><h2 id="_5-\u5B9A\u4E49\u52A8\u6001\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#_5-\u5B9A\u4E49\u52A8\u6001\u6570\u636E\u6E90" aria-hidden="true">#</a> 5. \u5B9A\u4E49\u52A8\u6001\u6570\u636E\u6E90</h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u81EA\u5B9A\u4E49\u4E00\u4E2A\u52A8\u6001\u6570\u636E\u6E90\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * \u52A8\u6001\u6570\u636E\u6E90
 *
 * \u5F53 Mapper \u6267\u884C\u7684\u65F6\u5019\uFF0C\u9700\u8981 DataSource \u4F1A\u6765\u5230 AbstractRoutingDataSource \u627E\u5230\u5BF9\u5E94\u7684\u6570\u636E\u6E90\uFF0C\u6211\u4EEC\u8981\u7EE7\u627F\u8FD9\u4E2A\u7C7B
 *
 * <span class="token keyword">@author</span>: zxq
 * <span class="token keyword">@create</span>: 2022-05-28 15:09
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSource</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractRoutingDataSource</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u914D\u7F6E\u6570\u636E\u6E90
     * <span class="token keyword">@param</span> <span class="token parameter">loadDataSource</span>
     */</span>
    <span class="token class-name">DynamicDataSource</span><span class="token punctuation">(</span><span class="token class-name">LoadDataSource</span> loadDataSource<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">DataSource</span><span class="token punctuation">&gt;</span></span> allDs <span class="token operator">=</span> loadDataSource<span class="token punctuation">.</span><span class="token function">loadAllDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1. \u8BBE\u7F6E\u6240\u6709\u7684\u6570\u636E\u6E90\uFF0C\u53C2\u6570\u662F\u4E00\u4E2AMap\u5176\u5B9E\u5C31\u662F\u6570\u636E\u6E90\u540D\u79F0\u548C\u6570\u636E\u6E90</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setTargetDataSources</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>allDs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2. \u8BBE\u7F6E\u9ED8\u8BA4\u7684\u6570\u636E\u6E90</span>
        <span class="token comment">// \u5C06\u6765\u5E76\u4E0D\u662F\u6240\u6709\u7684\u65B9\u6CD5\u4E0A\u90FD\u6709 @DataSource \u6CE8\u89E3\uFF0C\u5BF9\u4E8E\u6CA1\u6709 @DataSource \u6CE8\u89E3\u7684\u65B9\u6CD5\uFF0C\u5C31\u4E0D\u4F1A\u88ABAOP\u62E6\u622A\uFF0CdetermineCurrentLookupKey\u8FD4\u56DE\u7684\u5C31\u662F null</span>
        <span class="token comment">// \u6240\u4EE5\u8981\u914D\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u6570\u636E\u6E90</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">setDefaultTargetDataSource</span><span class="token punctuation">(</span>allDs<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">DataSourceType</span><span class="token punctuation">.</span>DEFAULT_DS_NAME<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * \u8FD9\u4E2A\u65B9\u6CD5\u7528\u6765\u8FD4\u56DE\u6570\u636E\u6E90\u540D\u79F0\uFF0C\u5F53\u7CFB\u7EDF\u9700\u8981\u83B7\u53D6\u6570\u636E\u6E90\u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528\u8BE5\u65B9\u6CD5\u83B7\u53D6\u6570\u636E\u6E90\u7684\u540D\u79F0
     *
     * \u56E0\u4E3A\u6211\u4EEC\u662F\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u6E90\uFF0C\u5E76\u4E14\u5B58\u5230 ThreadLocal \u4E2D\u4E86\uFF0C\u6240\u4EE5\u53EA\u9700\u8981\u5B58\u91CC\u9762\u53D6\u51FA\u5373\u53EF
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">determineCurrentLookupKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">getDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u8FD9\u5C31\u662F\u6211\u4EEC\u6587\u7AE0\u5F00\u5934\u6240\u8BF4\u7684 AbstractRoutingDataSource \u4E86\uFF0C\u8BE5\u7C7B\u6709\u4E00\u4E2A\u65B9\u6CD5\u540D\u4E3A determineCurrentLookupKey\uFF0C\u5F53\u9700\u8981\u4F7F\u7528\u6570\u636E\u6E90\u7684\u65F6\u5019\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5F53\u524D\u6570\u636E\u6E90\u7684\u6807\u8BB0\uFF0C\u5982 master \u6216\u8005 slave \u6216\u8005\u5176\u4ED6\uFF0C\u62FF\u5230\u6807\u8BB0\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u636E\u6B64\u83B7\u53D6\u5230\u4E00\u4E2A\u6570\u636E\u6E90\u4E86\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>setTargetDataSources\uFF1A \u8FD9\u4E2A\u5C31\u662F\u5F53\u524D\u6240\u6709\u7684\u6570\u636E\u6E90\uFF0C\u628A\u5F53\u524D\u6240\u6709\u7684\u6570\u636E\u6E90\u90FD\u544A\u8BC9\u7ED9 <code>AbstractRoutingDataSource</code>\uFF0C\u8FD9\u4E9B\u6570\u636E\u6E90\u90FD\u662F <code>key-value</code> \u7684\u5F62\u5F0F\uFF08\u5C06\u6765\u6839\u636E <code>determineCurrentLookupKey</code> \u65B9\u6CD5\u8FD4\u56DE\u7684 <code>key</code> \u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u5177\u4F53\u7684\u6570\u636E\u6E90\u4E86\uFF09</p><p>setDefaultTargetDataSource: \u8FD9\u4E2A\u5C31\u662F\u9ED8\u8BA4\u7684\u6570\u636E\u6E90\uFF0C\u5F53\u6211\u4EEC\u6267\u884C\u4E00\u4E2A\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u6570\u636E\u6E90\uFF08\u4F8B\u5982 Service \u5C42\u7684\u65B9\u6CD5\u6CA1\u6709\u52A0 @DataSource \u6CE8\u89E3\uFF09\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u5C31\u4F7F\u7528\u8FD9\u4E2A\u6570\u636E\u6E90\u3002</p></div><h2 id="_6-\u6570\u636E\u6E90\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#_6-\u6570\u636E\u6E90\u5207\u6362" aria-hidden="true">#</a> 6. \u6570\u636E\u6E90\u5207\u6362</h2><p>\u6587\u7AE0\u4E00\u5F00\u59CB\u5C31\u8BF4\u4E86\uFF0C\u6211\u4EEC\u662F\u5C06\u6570\u636E\u6E90\u4FE1\u606F\u5B58\u5165\u5230 <code>ThreadLocal</code> \u4E2D\uFF0C<code>ThreadLocal</code> \u7684\u7279\u70B9\uFF0C\u7B80\u5355\u8BF4\u5C31\u662F\u5728\u54EA\u4E2A\u7EBF\u7A0B\u4E2D\u5B58\u5165\u7684\u6570\u636E\uFF0C\u5728\u54EA\u4E2A\u7EBF\u7A0B\u624D\u80FD\u53D6\u51FA\u6765\uFF0C\u6362\u4E00\u4E2A\u7EBF\u7A0B\u5C31\u53D6\u4E0D\u51FA\u6765\u4E86\uFF0C\u8FD9\u6837\u53EF\u4EE5\u786E\u4FDD\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\u7684\u6570\u636E\u5B89\u5168\u3002</p><p>\u5148\u7B80\u5355\u5C01\u88C5\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * \u8FD9\u4E2A\u7C7B\u7528\u6765\u5B58\u50A8\u5F53\u524D\u7EBF\u7A0B\u6240\u4F7F\u7528\u7684\u6570\u636E\u6E90\u540D\u79F0
 *
 * <span class="token keyword">@author</span>: zxq
 * <span class="token keyword">@create</span>: 2022-05-27 22:35
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DynamicDataSourceContextHolder</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> CONTEXT_HOLDER <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setDataSourceType</span><span class="token punctuation">(</span><span class="token class-name">String</span> dsType<span class="token punctuation">)</span><span class="token punctuation">{</span>
        CONTEXT_HOLDER<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>dsType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> CONTEXT_HOLDER<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">clearDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        CONTEXT_HOLDER<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u63A5\u4E0B\u6765\u81EA\u5B9A\u4E49\u4E00\u4E2A\u6CE8\u89E3\u7528\u6765\u6807\u8BB0\u5F53\u524D\u7684\u6570\u636E\u6E90\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u591A\u6570\u636E\u6E90\u6CE8\u89E3
 *
 * \u8FD9\u4E2A\u6CE8\u89E3\u5C06\u6765\u53EF\u4EE5\u52A0\u5728\u67D0\u4E00\u4E2A service \u7C7B\u6216\u8005\u65B9\u6CD5\u4E0A\uFF0C\u901A\u8FC7 value \u5C5E\u6027\u6765\u6307\u5B9A\u7C7B\u6216\u8005\u65B9\u6CD5\u5E94\u8BE5\u4F7F\u7528\u90A3\u4E2A\u6570\u636E\u6E90
 *
 * <span class="token keyword">@author</span> MC
 */</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6570\u636E\u6E90\u540D\u79F0</span>
    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u4E2A\u6CE8\u89E3\u5C06\u6765\u52A0\u5728 Service \u5C42\u7684\u65B9\u6CD5\u4E0A\uFF0C\u4F7F\u7528\u8BE5\u6CE8\u89E3\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6307\u5B9A\u4E00\u4E2A\u6570\u636E\u6E90\u540D\u79F0\uFF0C\u4E0D\u6307\u5B9A\u7684\u8BDD\uFF0C\u9ED8\u8BA4\u5C31\u4F7F\u7528 master \u4F5C\u4E3A\u6570\u636E\u6E90\u3002</p><p>\u6211\u4EEC\u8FD8\u9700\u8981\u901A\u8FC7 AOP \u6765\u89E3\u6790\u5F53\u524D\u7684\u81EA\u5B9A\u4E49\u6CE8\u89E3\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * \u5904\u7406 @DataSource \u6CE8\u89E3
 * <span class="token keyword">@author</span>: zxq
 * <span class="token keyword">@create</span>: 2022-05-27 22:41
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceAspect</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@annotation</span>(top.zxqs.dd.annotation.DataSource)  \u8868\u793A\u65B9\u6CD5\u4E0A\u6709 @DataSource \u6CE8\u89E3\u5C31\u5C06\u65B9\u6CD5\u62E6\u622A\u4E0B\u6765
     * <span class="token keyword">@within</span>(top.zxqs.dd.annotation.DataSource)  \u8868\u793A\u5982\u679C\u7C7B\u4E0A\u9762\u6709 @DataSource \u6CE8\u89E3\uFF0C\u5C31\u5C06\u7C7B\u4E2D\u7684\u65B9\u6CD5\u62E6\u622A\u4E0B\u6765
     */</span>
    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(top.zxqs.dd.annotation.DataSource) || @within(top.zxqs.dd.annotation.DataSource)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">pointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">&quot;pointcut()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">around</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> pjp<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">DataSource</span> dataSource <span class="token operator">=</span> <span class="token function">getDataSource</span><span class="token punctuation">(</span>pjp<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>dataSource <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u83B7\u53D6\u6CE8\u89E3\u4E2D\u6570\u636E\u6E90\u7684\u540D\u79F0</span>
            <span class="token class-name">String</span> value <span class="token operator">=</span> dataSource<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5C06\u6570\u636E\u6E90\u540D\u79F0\u4FDD\u5B58\u5230\u7EBF\u7A0B\u4E2D</span>
            <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">setDataSourceType</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> pjp<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            throwable<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6E05\u9664\u7EBF\u7A0B\u4E2D\u7684\u5185\u5BB9</span>
            <span class="token class-name">DynamicDataSourceContextHolder</span><span class="token punctuation">.</span><span class="token function">clearDataSourceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u6CE8\u89E3
     * <span class="token keyword">@param</span> <span class="token parameter">pjp</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">getDataSource</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> pjp<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">MethodSignature</span> signature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span> pjp<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u67E5\u627E\u65B9\u6CD5\u4E0A\u7684\u6CE8\u89E3\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662FMethod\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8FD4\u56DE\u7684\u7C7B\u578B</span>
        <span class="token class-name">DataSource</span> annotation <span class="token operator">=</span> <span class="token class-name">AnnotationUtils</span><span class="token punctuation">.</span><span class="token function">findAnnotation</span><span class="token punctuation">(</span>signature<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>annotation <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u8BF4\u660E\u65B9\u6CD5\u4E0A\u6709 @DataSource \u6CE8\u89E3</span>
            <span class="token keyword">return</span> annotation<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u65B9\u6CD5\u4E0A\u6CA1\u6709\u5C31\u4ECE\u7C7B\u4E0A\u67E5\u627E\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u6240\u5728\u7C7B\u7684\u7C7B\u578B\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8FD4\u56DE\u7684\u7C7B\u578B</span>
        <span class="token keyword">return</span> <span class="token class-name">AnnotationUtils</span><span class="token punctuation">.</span><span class="token function">findAnnotation</span><span class="token punctuation">(</span>signature<span class="token punctuation">.</span><span class="token function">getDeclaringType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">DataSource</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><ol><li><p>\u9996\u5148\u5728 <code>pointcut()</code> \u65B9\u6CD5\u4E0A\u5B9A\u4E49\u5207\u70B9\uFF0C\u62E6\u622A\u6240\u6709\u5E26\u6709 <code>@DataSource</code> \u6CE8\u89E3\u7684\u65B9\u6CD5\uFF0C\u540C\u65F6\u8BE5\u6CE8\u89E3\u4E5F\u53EF\u4EE5\u52A0\u5728\u7C7B\u4E0A\uFF0C\u5982\u679C\u8BE5\u6CE8\u89E3\u52A0\u5728\u7C7B\u4E0A\uFF0C\u5C31\u8868\u793A\u7C7B\u4E2D\u7684\u6240\u6709\u65B9\u6CD5\u90FD\u4F7F\u7528\u8BE5\u6570\u636E\u6E90\u3002</p></li><li><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u73AF\u7ED5\u901A\u77E5\uFF0C\u9996\u5148\u6839\u636E\u5F53\u524D\u7684\u5207\u70B9\uFF0C\u8C03\u7528 <code>getDataSource</code> \u65B9\u6CD5\u83B7\u53D6\u5230 <code>@DataSource</code> \u6CE8\u89E3\uFF0C\u8FD9\u4E2A\u6CE8\u89E3\u53EF\u80FD\u6765\u81EA\u65B9\u6CD5\u4E0A\u4E5F\u53EF\u80FD\u6765\u81EA\u7C7B\u4E0A\uFF0C\u65B9\u6CD5\u4E0A\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E\u7C7B\u4E0A\u7684\u4F18\u5148\u7EA7\u3002\u5982\u679C\u62FF\u5230\u7684\u6CE8\u89E3\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u6211\u4EEC\u5728 <code>DynamicDataSourceContextHolder</code> \u4E2D\u8BBE\u7F6E\u5F53\u524D\u7684\u6570\u636E\u6E90\u540D\u79F0\uFF0C\u8BBE\u7F6E\u5B8C\u6210\u540E\u8FDB\u884C\u65B9\u6CD5\u7684\u8C03\u7528\uFF1B\u5982\u679C\u62FF\u5230\u7684\u6CE8\u89E3\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u5C31\u76F4\u63A5\u8FDB\u884C\u65B9\u6CD5\u7684\u8C03\u7528\uFF0C\u4E0D\u518D\u8BBE\u7F6E\u6570\u636E\u6E90\u4E86\uFF08\u5C06\u6765\u4F1A\u81EA\u52A8\u4F7F\u7528\u9ED8\u8BA4\u7684\u6570\u636E\u6E90\uFF09\u3002\u6700\u540E\u8BB0\u5F97\u65B9\u6CD5\u8C03\u7528\u5B8C\u6210\u540E\uFF0C\u4ECE <code>ThreadLocal</code> \u4E2D\u79FB\u9664\u6570\u636E</p></li></ol></div><h2 id="_7-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_7-\u6D4B\u8BD5" aria-hidden="true">#</a> 7. \u6D4B\u8BD5</h2><p>\u597D\u5566\uFF0C\u5927\u529F\u544A\u6210\uFF0C\u6211\u4EEC\u518D\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u5199\u4E00\u4E2A UserMapper\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Select</span><span class="token punctuation">(</span><span class="token string">&quot;select count(*) from user&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">Integer</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u6570\u636E\u5E93\u67E5\u8BE2\u64CD\u4F5C\u3002</p><p>\u518D\u6765\u4E00\u4E2A service\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@DataSource</span><span class="token punctuation">(</span><span class="token string">&quot;master&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">master</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userMapper<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DataSource</span><span class="token punctuation">(</span><span class="token string">&quot;slave&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">slave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userMapper<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7 <code>@DataSource</code> \u6CE8\u89E3\u6765\u6307\u5B9A\u5177\u4F53\u64CD\u4F5C\u7684\u6570\u636E\u6E90\uFF0C\u5982\u679C\u6CA1\u6709\u4F7F\u7528\u8BE5\u6CE8\u89E3\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u5C31\u4F7F\u7528 master \u6570\u636E\u6E90\u3002</p><p>\u6700\u540E\u53BB\u5355\u5143\u6D4B\u8BD5\u4E2D\u6D4B\u4E00\u4E0B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">class</span> <span class="token class-name">DynamicDatasourceDemoApplicationTests</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;userService.master() = &quot;</span> <span class="token operator">+</span> userService<span class="token punctuation">.</span><span class="token function">master</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;userService.slave() = &quot;</span> <span class="token operator">+</span> userService<span class="token punctuation">.</span><span class="token function">slave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="_8-\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#_8-\u5C0F\u7ED3" aria-hidden="true">#</a> 8. \u5C0F\u7ED3</h2><p>\u4EE5\u4E0A\u4EE3\u7801\u53EF\u80FD\u4F1A\u5F88\u4E71\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F1A\u627E\u4E0D\u5230\u6267\u884C\u7684\u6D41\u7A0B\uFF0C\u8FD9\u91CC\u6211\u4EEC\u8FDB\u884C\u68B3\u7406\u4E00\u4E0B\uFF1A</p><ol><li>\u7A0B\u5E8F\u542F\u52A8\u4E4B\u540E\u4F1A\u5148\u52A0\u8F7D <code>DruidProperties</code> \u8BFB\u53D6\u914D\u7F6E\u6587\u4EF6\u4E2D\u662F\u5185\u5BB9\u3002</li><li>\u6267\u884C <code>DynamicDataSource</code> \u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u6267\u884C <code>loadAllDataSource()</code> \u65B9\u6CD5\u52A0\u8F7D\u6570\u636E\u6E90\uFF0C\u8FD4\u56DE\u7684 <code>Map</code> \u4E2D\u5C31\u662F\u5BF9\u914D\u7F6E\u6587\u4EF6\u4E2D\u6570\u636E\u6E90\u7684\u914D\u7F6E\uFF0C\u52A0\u8F7D\u540E\u5F62\u6210\u7684\u6570\u636E\u6E90\uFF0C<code>key</code> \u4E3A\u6570\u636E\u6E90\u540D\u79F0\uFF0C<code>value</code> \u4E3A\u6570\u636E\u6E90\u5BF9\u8C61(DataSource)\uFF0C\u62FF\u5230\u6570\u636E\u6E90\u540E\u8BBE\u7F6E\u6240\u6709\u6570\u636E\u6E90\u548C\u9ED8\u8BA4\u6570\u636E\u6E90\u3002</li><li>\u6267\u884C\u4F7F\u7528 <code>@DataSource</code> \u6CE8\u89E3\u7684\u65B9\u6CD5\uFF0C\u88AB <code>DataSourceAspect</code> \u62E6\u622A\uFF0C\u5C06\u6CE8\u89E3\u643A\u5E26\u7684\u6570\u636E\u6E90\u540D\u79F0\u4FDD\u5B58\u5230 <code>ThreadLocal</code> \u4E2D\u3002</li><li>\u6700\u540E\u5728\u6267\u884C <code>mapper</code> \u7684\u65F6\u5019\uFF0C\u4F1A\u81EA\u52A8\u8C03\u7528 <code>AbstractRoutingDataSource</code> \u4E2D\u7684 <code>determineCurrentLookupKey()</code> \u65B9\u6CD5\uFF08\u4E5F\u662F <code>DynamicDataSource</code> \u4E2D\u7684\u65B9\u6CD5\uFF09\u5728 <code>ThreadLocal</code> \u83B7\u53D6\u9700\u8981\u6267\u884C\u7684\u6570\u636E\u6E90\u7684\u540D\u79F0\uFF0C\u6700\u540E\u901A\u8FC7\u4E0D\u540C\u7684\u6570\u636E\u6E90\u6267\u884C\u76F8\u5E94\u7684 <code>sql</code></li></ol>`,51);function p(o,e){return t}var l=a(s,[["render",p]]);export{l as default};
