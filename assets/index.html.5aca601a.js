import{e as n}from"./app.6e2e0f01.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u5F02\u6B65\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7BA1\u7406\u5668" aria-hidden="true">#</a> \u5F02\u6B65\u7BA1\u7406\u5668</h1><p>\u5982\u679C\u7CFB\u7EDF\u6BCF\u4E00\u6B65\u7684\u65E5\u5FD7\u8BB0\u5F55\u90FD\u662F\u4F34\u968F\u7740\u4E1A\u52A1\u4E00\u8D77\u6267\u884C\u7684\uFF0C\u90A3\u4E48\u5F53\u7CFB\u7EDF\u8BBF\u95EE\u91CF\u589E\u52A0\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5927\u5927\u964D\u4F4E\u7CFB\u7EDF\u7684\u54CD\u5E94\u901F\u5EA6\u3002\u8FD9\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528\u5F02\u6B65\u7BA1\u7406\u5668\u53BB\u4FDD\u5B58\u65E5\u5FD7\u4FE1\u606F\u3002</p><h2 id="\u521B\u5EFA\u5F02\u6B65\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5F02\u6B65\u7BA1\u7406\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u5F02\u6B65\u7BA1\u7406\u5668</h2><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncManager</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u64CD\u4F5C\u5EF6\u8FDF10\u6BEB\u79D2
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> OPERATE_DELAY_TIME <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5F02\u6B65\u64CD\u4F5C\u4EFB\u52A1\u8C03\u5EA6\u7EBF\u7A0B\u6C60
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">ScheduledExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">&quot;scheduledExecutorService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5355\u4F8B\u6A21\u5F0F
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">AsyncManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AsyncManager</span> me <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AsyncManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AsyncManager</span> <span class="token function">me</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> me<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6267\u884C\u4EFB\u52A1
     *
     * <span class="token keyword">@param</span> <span class="token parameter">task</span> \u4EFB\u52A1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">TimerTask</span> task<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        executor<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> OPERATE_DELAY_TIME<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u505C\u6B62\u4EFB\u52A1\u7EBF\u7A0B\u6C60
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Threads</span><span class="token punctuation">.</span><span class="token function">shutdownAndAwaitTermination</span><span class="token punctuation">(</span>executor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7 <code>SpringUtils.getBean(&quot;scheduledExecutorService&quot;)</code> \u4ECESpring \u4E2D\u83B7\u53D6 <code>scheduledExecutorService</code>\uFF0C\u8FD9\u4E2A <code>Bean</code> \u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u8C03\u5EA6\u7EBF\u7A0B\u6C60\u6267\u884C\u5668\u3002</p><h2 id="\u7EBF\u7A0B\u6C60\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u914D\u7F6E" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u914D\u7F6E</h2><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6838\u5FC3\u7EBF\u7A0B\u6C60\u5927\u5C0F</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> corePoolSize <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>

    <span class="token comment">// \u6700\u5927\u53EF\u521B\u5EFA\u7684\u7EBF\u7A0B\u6570</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxPoolSize <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>

    <span class="token comment">// \u961F\u5217\u6700\u5927\u957F\u5EA6</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> queueCapacity <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7EBF\u7A0B\u6C60\u7EF4\u62A4\u7EBF\u7A0B\u6240\u5141\u8BB8\u7684\u7A7A\u95F2\u65F6\u95F4</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> keepAliveSeconds <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;threadPoolTaskExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ThreadPoolTaskExecutor</span> <span class="token function">threadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThreadPoolTaskExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setMaxPoolSize</span><span class="token punctuation">(</span>maxPoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setCorePoolSize</span><span class="token punctuation">(</span>corePoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setQueueCapacity</span><span class="token punctuation">(</span>queueCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        executor<span class="token punctuation">.</span><span class="token function">setKeepAliveSeconds</span><span class="token punctuation">(</span>keepAliveSeconds<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u7EBF\u7A0B\u6C60\u5BF9\u62D2\u7EDD\u4EFB\u52A1(\u65E0\u7EBF\u7A0B\u53EF\u7528)\u7684\u5904\u7406\u7B56\u7565</span>
        executor<span class="token punctuation">.</span><span class="token function">setRejectedExecutionHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>CallerRunsPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> executor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6267\u884C\u5468\u671F\u6027\u6216\u5B9A\u65F6\u4EFB\u52A1
     */</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;scheduledExecutorService&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">protected</span> <span class="token class-name">ScheduledExecutorService</span> <span class="token function">scheduledExecutorService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledThreadPoolExecutor</span><span class="token punctuation">(</span>corePoolSize<span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">BasicThreadFactory<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">namingPattern</span><span class="token punctuation">(</span><span class="token string">&quot;schedule-pool-%d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">daemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterExecute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterExecute</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Threads</span><span class="token punctuation">.</span><span class="token function">printException</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>threadPoolTaskExecutor</code> \u521D\u59CB\u5316 <code>ThreadPoolTaskExecutor</code> \u7EBF\u7A0B\u6C60\u4EFB\u52A1\u6267\u884C\u5668</p><p><code>scheduledExecutorService</code> Bean \u5B9E\u4F8B\u662F\u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u8C03\u5EA6\u7EBF\u7A0B\u6C60\u6267\u884C\u5668\uFF0C\u5E76\u9700\u91CD\u5199 <code>afterExecute()</code> \u65B9\u6CD5\uFF0C\u53BB\u5904\u7406\u6267\u884C\u4EFB\u52A1\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5F02\u5E38\u6216\u6267\u884C\u5B8C\u6210\u540E\u7684\u4E0B\u4E00\u6B65\u64CD\u4F5C\u6D41\u7A0B\uFF0C\u4E3B\u8981\u662F\u7528\u4E8E <code>\u6267\u884C\u5468\u671F\u6027\u6216\u5B9A\u65F6\u4EFB\u52A1</code> \uFF0C\u540E\u9762\u4F1A\u7528\u5230\u5B83\u53BB\u5F02\u6B65\u6267\u884C\u8BB0\u5F55\u767B\u5F55\u65E5\u5FD7\u4EFB\u52A1\u3002</p><h2 id="\u5F02\u6B65\u4EFB\u52A1\u5DE5\u5382" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u4EFB\u52A1\u5DE5\u5382" aria-hidden="true">#</a> \u5F02\u6B65\u4EFB\u52A1\u5DE5\u5382</h2><p>\u8BBE\u8BA1\u8FD9\u4E2A\u7C7B\u4E3B\u8981\u662F\u7528\u6765\u4EA7\u751F TimerTask \u7684\uFF0C\u6BD4\u5982\u7528\u6237\u8BBF\u95EE\u767B\u5F55\u9875\u9762\uFF0C\u767B\u5F55\u5224\u65AD\u7684\u540C\u65F6\uFF0C\u8FD8\u9700\u8BB0\u5F55\u4E0B\u7528\u6237\u767B\u5F55\u7684\u65E5\u5FD7\u60C5\u51B5\uFF0C\u662F\u767B\u5F55\u6210\u529F\u4E86\u5462\uFF1F\u8FD8\u662F\u5931\u8D25\u4E86\uFF01\u9000\u51FA\u767B\u5F55\u4E5F\u53EF\u4EE5\u8BB0\u5F55\u5230\u65E5\u5FD7\u8868\u4E2D\uFF0C\u5E76\u4E14\u5B8C\u5168\u4E0D\u7528\u62C5\u5FC3\u540E\u7AEF\u5904\u7406\u4E0D\u8FC7\u6765\u7684\u95EE\u9898\uFF0C\u56E0\u4E3A\u5B83\u662F\u653E\u5728\u5F02\u6B65\u64CD\u4F5C\u4EFB\u52A1\u8C03\u5EA6\u7EBF\u7A0B\u6C60\u5F53\u4E2D\u3002</p><p>\u8FD9\u4E2A\u7C7B\u662F\u751F\u4EA7 <code>TimerTask</code> \uFF0C\u6240\u4EE5\u76F4\u63A5 new \u4E00\u4E2A <code>TimerTask</code> \u8FD4\u56DE\u5C31\u53EF\u4EE5\u4E86\uFF0C\u81F3\u4E8E\u91CC\u9762\u7684\u64CD\u4F5C\uFF0C\u5C31\u8981\u770B\u5B9E\u9645\u4E1A\u52A1\u4E86\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncFactory</span> <span class="token punctuation">{</span>
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
                operLog<span class="token punctuation">.</span><span class="token function">setOperLocation</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">ISysOperLogService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOperlog</span><span class="token punctuation">(</span>operLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
