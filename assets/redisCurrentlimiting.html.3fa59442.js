import{e as n}from"./app.7e2e1522.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="redis-\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#redis-\u9650\u6D41" aria-hidden="true">#</a> Redis \u9650\u6D41</h1><p>Redis \u9650\u6D41\u80FD\u6709\u9650\u7684\u89E3\u51B3 <code>\u7F13\u5B58\u51FB\u7A7F</code> \u95EE\u9898\uFF0C\u901A\u8FC7\u63A7\u5236\u4E00\u6BB5\u65F6\u95F4\u5185\u7684\u8BBF\u95EE\u91CF\u6765\u63A7\u5236\uFF0C\u8FDB\u5165\u7F13\u5B58\u548C\u6570\u636E\u5E93\u7684\u8BF7\u6C42\u6B21\u6570\u3002</p><h2 id="\u4F7F\u7528-pipeline" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-pipeline" aria-hidden="true">#</a> \u4F7F\u7528 Pipeline</h2><p>\u8FD9\u91CC\u6211\u7528springboot\u9879\u76EE\u6765\u6F14\u793A\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoTest</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/pipelineTest&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">PipelineTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u7528\u6237id</span>
        <span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//\u884C\u4E3Akey</span>
        <span class="token class-name">String</span> actionKey <span class="token operator">=</span> <span class="token string">&quot;good&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//\u65F6\u95F4\u8303\u56F4</span>
        <span class="token class-name">Integer</span> period <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6B21\u6570\u4E0A\u9650</span>
        <span class="token class-name">Integer</span> maxCount <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">executePipelined</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RedisCallback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">doInRedis</span><span class="token punctuation">(</span><span class="token class-name">RedisConnection</span> connection<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">DataAccessException</span> <span class="token punctuation">{</span>
                connection<span class="token punctuation">.</span><span class="token function">openPipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hist:%s:%s&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">,</span> actionKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">long</span> nowTs <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u4E1A\u52A1\u4EE3\u7801\uFF0Cconnection\u4E2D\u6709\u5404\u79CD\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u540D\u548Credis\u547D\u4EE4\u884C\u4E00\u81F4\uFF0Cstring\uFF0Clist\uFF0Cset\uFF0Czset</span>
                connection<span class="token punctuation">.</span><span class="token function">zAdd</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> nowTs<span class="token punctuation">,</span> <span class="token punctuation">(</span>nowTs <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//\u6E05\u7406\u65E0\u7528\u7684\u6570\u636E\uFF0C\u5F53\u524D\u65F6\u95F4\u51CF\u53BB\u65F6\u95F4\u8303\u56F4\u5C31\u662F\u8303\u56F4\u5916\u7684\u65F6\u95F4\uFF0C\u7136\u540E\u53BB\u9664\uFF0C\u4FDD\u8BC1connection\u662F\u6700\u65B060\u79D2\u5185\u7684\u6570\u636E</span>
                connection<span class="token punctuation">.</span><span class="token function">zRemRangeByScore</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nowTs <span class="token operator">-</span> period <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u8BBE\u7F6Ekey\u6709\u6548\u65F6\u95F4 \u5BF9\u51B7\u6570\u636E\u81EA\u52A8\u6E05\u7406</span>
                connection<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> period <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//\u83B7\u53D6\u6B21\u6570</span>
                <span class="token class-name">Long</span> card <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">zCard</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> card<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> maxCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DF2\u7ECF\u8D85\u51FA\u6700\u5927\u70B9\u8D5E\u91CF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8C03\u7528 <code>redisTemplate.executePipelined</code> \u65B9\u6CD5\uFF0C\u9700\u8981\u4E00\u4E2A\u56DE\u8C03\uFF0C<code>RedisConnection</code> \u4E2D\u7684\u65B9\u6CD5\u548Credis\u547D\u4EE4\u662F\u4E00\u6837\u7684\uFF0C\u5982\u4FDD\u5B58 string \u7C7B\u578B\u65B9\u6CD5\u540D\u4E5F\u662F <code>set</code>\uFF0C<code>connection.set(key,value)</code>\uFF0Czset\u7C7B\u578B\u5C31\u662F connection.zAdd\u3002</p><p>\u9664\u4E86 <code>RedisCallback</code>\uFF0CredisTemplate \u8FD8\u63D0\u4F9B\u4E86\uFF0C<code>SessionCallback</code> \u4E5F\u53EF\u4EE5\u64CD\u4F5C redis\uFF0C\u65B9\u6CD5\u548C <code>RedisCallback</code> \u662F\u6709\u4E0D\u4E00\u6837\u7684\uFF0C\u5177\u4F53\u6211\u4EEC\u4EE5\u540E\u518D\u8BF4\u3002</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">executePipelined</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SessionCallback</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Long</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">RedisOperations</span> operations<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">DataAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hist:%s:%s&quot;</span><span class="token punctuation">,</span> userId<span class="token punctuation">,</span> actionKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> nowTs <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ZSetOperations</span> zSetOperations <span class="token operator">=</span> operations<span class="token punctuation">.</span><span class="token function">opsForZSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        zSetOperations<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token punctuation">(</span>nowTs <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>nowTs<span class="token punctuation">)</span><span class="token punctuation">;</span>
        zSetOperations<span class="token punctuation">.</span><span class="token function">removeRangeByScore</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nowTs <span class="token operator">-</span> period <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>nowTs <span class="token operator">-</span> period <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> card <span class="token operator">=</span> zSetOperations<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> card<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="redis-cell-\u4EE4\u724C\u6876\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#redis-cell-\u4EE4\u724C\u6876\u9650\u6D41" aria-hidden="true">#</a> Redis-Cell \u4EE4\u724C\u6876\u9650\u6D41</h2><p>\u5982\u679C\u5728\u4E00\u4E2A\u5E76\u53D1\u91CF\u5F88\u9AD8\u7684\u63A5\u53E3\uFF0C\u518D\u4F7F\u7528 Pipeline \u7684\u8BDD\uFF0C\u5C31\u4F1A\u5BFC\u81F4 zset \u53D8\u7684\u5F88\u5927\uFF0C\u8FD9\u663E\u7136\u4E0D\u592A\u5408\u9002\u3002\u6B64\u65F6\u53EF\u4EE5\u7528 <code>Redis-Cell</code> \u6765\u9650\u6D41</p><h3 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h3><p>\u7CFB\u7EDF\u4F1A\u7EF4\u62A4\u4E00\u4E2A\u5BB9\u5668\u7528\u4E8E\u5B58\u653E\u4EE4\u724C\uFF08token\uFF09\uFF0C\u5E76\u4E14\u7CFB\u7EDF\u4EE5\u4E00\u4E2A\u56FA\u5B9A\u901F\u7387\u5F80\u5BB9\u5668\u4E2D\u6DFB\u52A0\u4EE4\u724C\uFF08token\uFF09\uFF0C\u8FD9\u4E2A\u901F\u7387\u901A\u5E38\u66F4\u52A0\u7CFB\u7EDF\u7684\u5904\u7406\u80FD\u529B\u6765\u6743\u8861\u3002\u5F53\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u6253\u8FC7\u6765\u65F6\uFF0C\u9700\u8981\u4ECE\u4EE4\u724C\u6876\u4E2D\u83B7\u53D6\u5230\u4EE4\u724C\uFF08token\uFF09\u4E4B\u540E\uFF0C\u8FD9\u4E2A\u8BF7\u6C42\u624D\u4F1A\u88AB\u5904\u7406\uFF0C\u5426\u5219\u76F4\u63A5\u62D2\u7EDD\u670D\u52A1\u3002</p><p><img src="https://img.zxqs.top/image-20230206224144834.png" alt="image-20230206224144834"></p><h2 id="\u5B89\u88C5-redis-cell" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-redis-cell" aria-hidden="true">#</a> \u5B89\u88C5 Redis-Cell</h2><p>Redis\u9ED8\u8BA4\u662F\u6CA1\u6709\u96C6\u6210Redis-Cell\u8FD9\u4E2A\u9650\u6D41\u6A21\u5757\u7684\uFF0C\u5C31\u597D\u6BD4Redis\u4F7F\u7528\u5E03\u9686\u8FC7\u6EE4\u5668\u4E00\u6837\uFF0C\u6211\u4EEC\u4E5F\u9700\u8981\u5BF9\u8BE5\u6A21\u5757\u8FDB\u884C\u5B89\u88C5\u4E0E\u96C6\u6210\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>https://github.com/brandur/redis-cell/releases/download/v0.2.4/redis-cellv0.2.4-x86_64-unknown-linux-gnu.tar.gz
</code></pre></div><p>\u4E0B\u8F7D\u5B8C\u6210\u540E\u89E3\u538B\uFF0C\u7136\u540E\u91CD\u542F\u3002</p><p>\u63A5\u4E0B\u6765\u4FEE\u6539 redis.conf \u6587\u4EF6\uFF0C\u52A0\u8F7D\u989D\u5916\u7684\u6A21\u5757\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>loadmodule /root/redis-5.0.7/redis-cell/libredis_cell.so
</code></pre></div><p>\u91CD\u542F Redis</p><h2 id="cl-throttle-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#cl-throttle-\u6307\u4EE4" aria-hidden="true">#</a> CL.THROTTLE \u6307\u4EE4</h2><p>\u6307\u4EE4 <code>cl.throttle</code> \u53C2\u6570\u542B\u4E49</p><div class="language-text ext-text"><pre class="language-text"><code> CL.THROTTLE  ysmc  10  6 60 1
               \u25B2     \u25B2  \u25B2  \u25B2 \u25B2
               |     |  |  | \u2514\u2500\u2500\u2500\u2500\u2500 apply 1 token (default if omitted) (\u672C\u6B21\u7533\u8BF7\u4E00\u4E2Atoken)
               |     |  \u2514\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500 6 tokens / 60 seconds  (60\u79D2\u6DFB\u52A06\u4E2Atoken\u5230\u4EE4\u724C\u6876\u4E2D)
               |     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 10 max_burst    (\u6700\u5927\u7684\u7A81\u53D1\u8BF7\u6C42\uFF0C\u4E0D\u662F\u4EE4\u724C\u6876\u7684\u6700\u5927\u5BB9\u91CF)
               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 key &quot;ysmc&quot; (\u9650\u6D41key)
</code></pre></div><p>\u8F93\u51FA\u53C2\u6570\u503C\u542B\u4E49</p><div class="language-text ext-text"><pre class="language-text"><code>127.0.0.1:6379&gt; cl.throttle ysmc 10 6 60 1
1) (integer) 0                    # \u5F53\u524D\u8BF7\u6C42\u662F\u5426\u88AB\u5141\u8BB8\uFF0C0\u8868\u793A\u5141\u8BB8\uFF0C1\u8868\u793A\u4E0D\u5141\u8BB8
2) (integer) 11                    # \u4EE4\u724C\u6876\u7684\u6700\u5927\u5BB9\u91CF\uFF0C\u4EE4\u724C\u6876\u4E2D\u4EE4\u724C\u6570\u7684\u6700\u5927\u503C(max_burst + 1)
3) (integer) 10                   # \u4EE4\u724C\u6876\u4E2D\u5F53\u524D\u7684\u4EE4\u724C\u6570
4) (integer) -1                    # \u5982\u679C\u88AB\u62D2\u7EDD\uFF0C\u9700\u8981\u591A\u957F\u65F6\u95F4\u540E\u5728\u91CD\u8BD5\uFF0C\u5982\u679C\u5F53\u524D\u88AB\u5141\u8BB8\u5219\u4E3A-1
5) (integer) 12                    # \u591A\u957F\u65F6\u95F4\u540E\u4EE4\u724C\u6876\u4E2D\u7684\u4EE4\u724C\u4F1A\u6EE1
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><p>\u524D <code>\u6700\u5927\u5BB9\u91CF\u4E2A</code> \u5E76\u4E0D\u4F1A\u8FDB\u884C\u9650\u6D41\uFF0C\u6700\u540E\u4E00\u4E2A\u8FD4\u56DE\u503C\u6CA1\u6709\u610F\u4E49\uFF0C\u4E0D\u8981\u770B</p><p>\u4E5F\u5C31\u662F\u8BF4\u524D 11 \u4E2A\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F \u90FD\u662F 0\uFF0C\u5E76\u4E0D\u662F 10\u79D2\u8FD4\u56DE\u4E00\u4E2A\uFF0C\u540E\u9762\u7684\u6B63\u5E38</p><h2 id="java\u4EE3\u7801\u5B9E\u73B0redis-cell-\u9650\u6D41" tabindex="-1"><a class="header-anchor" href="#java\u4EE3\u7801\u5B9E\u73B0redis-cell-\u9650\u6D41" aria-hidden="true">#</a> java\u4EE3\u7801\u5B9E\u73B0Redis-Cell \u9650\u6D41</h2><p><strong>\u5BFC\u5165\u4F9D\u8D56</strong></p><div class="language-pom ext-pom"><pre class="language-pom"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.lettuce&lt;/groupId&gt;
    &lt;artifactId&gt;lettuce-core&lt;/artifactId&gt;
    &lt;version&gt;5.3.4.RELEASE&lt;/version&gt;
&lt;/dependency&gt;
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IRedisCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Commands</span> <span class="token punctuation">{</span>
 
    <span class="token doc-comment comment">/**
     * \u5B9A\u4E49\u9650\u6D41\u65B9\u6CD5
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>           \u9650\u6D41key
     * <span class="token keyword">@param</span> <span class="token parameter">maxBurst</span>      \u6700\u5927\u7684\u7A81\u53D1\u8BF7\u6C42\uFF0C\u6876\u5BB9\u91CF\u7B49\u4E8EmaxBurst + 1
     * <span class="token keyword">@param</span> <span class="token parameter">tokens</span>        tokens \u4E0E seconds \u662F\u7EC4\u5408\u53C2\u6570\uFF0C\u8868\u793Aseconds\u79D2\u5185\u6DFB\u52A0\u4E2Atokens
     * <span class="token keyword">@param</span> <span class="token parameter">seconds</span>       tokens \u4E0E seconds \u662F\u7EC4\u5408\u53C2\u6570\uFF0C\u8868\u793Aseconds\u79D2\u5185\u6DFB\u52A0\u4E2Atokens
     * <span class="token keyword">@param</span> <span class="token parameter">apply</span>         \u5F53\u524D\u7533\u8BF7\u7684token\u6570
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Command</span><span class="token punctuation">(</span><span class="token string">&quot;CL.THROTTLE ?0 ?1 ?2 ?3 ?4&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> maxBurst<span class="token punctuation">,</span> <span class="token keyword">long</span> tokens<span class="token punctuation">,</span> <span class="token keyword">long</span> seconds<span class="token punctuation">,</span> <span class="token keyword">long</span> apply<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 *      Redis-Cell\u4EE4\u724C\u6876\u9650\u6D41
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 *
 * @Author: ysmc
 * @Date: 2021/9/8 23:47
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TokenBucketRateLimiter</span> <span class="token punctuation">{</span>


    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> SUCCESS <span class="token operator">=</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisClient</span> client<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">StatefulRedisConnection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> connection<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">IRedisCommand</span> command<span class="token punctuation">;</span>

<span class="token comment">//    private final Logger logger = LoggerFactory.getLogger(TokenBucketRateLimiter.class);</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> log <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">TokenBucketRateLimiter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">TokenBucketRateLimiter</span><span class="token punctuation">(</span><span class="token class-name">RedisClient</span> client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>client <span class="token operator">=</span> client<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>connection <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisCommandFactory</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCommands</span><span class="token punctuation">(</span><span class="token class-name">IRedisCommand</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
 
    <span class="token doc-comment comment">/**
     * \u8BF7\u662F\u5426\u88AB\u5141\u8BB8
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>
     * <span class="token keyword">@param</span> <span class="token parameter">maxBurst</span>
     * <span class="token keyword">@param</span> <span class="token parameter">tokens</span>
     * <span class="token keyword">@param</span> <span class="token parameter">seconds</span>
     * <span class="token keyword">@param</span> <span class="token parameter">apply</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isActionAllowed</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token keyword">long</span> maxBurst<span class="token punctuation">,</span> <span class="token keyword">long</span> tokens<span class="token punctuation">,</span> <span class="token keyword">long</span> seconds<span class="token punctuation">,</span> <span class="token keyword">long</span> apply<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6267\u884C CL.THROTTLE</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> command<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> maxBurst<span class="token punctuation">,</span> tokens<span class="token punctuation">,</span> seconds<span class="token punctuation">,</span> apply<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> result<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;{}\u9650\u6D41{}\u8FD4\u56DE\uFF1A{}&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>key<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> SUCCESS<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;{}\u9650\u6D41{}\u8FD4\u56DE\uFF1A{}&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 *      \u6D4B\u8BD5\u4EE4\u724C\u6876\u9650\u6D41
 *      \u6D4B\u8BD5\u53C2\u6570 1 \u79D2\u5185\u53EA\u80FD\u8BBF\u95EE 100 \u6B21
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 *
 * @Author: ysmc
 * @Date: 2021/9/9 0:02
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestTokenBucketRateLimiter</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RedisClient</span> client <span class="token operator">=</span> <span class="token class-name">RedisClient</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;redis://123456@192.168.96.128:6379&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TokenBucketRateLimiter</span> limiter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TokenBucketRateLimiter</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// cl.throttle liziba 10 5 60 1</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token comment">// 1\u79D2\u4EA7\u751F100\u4E2A\u4EE4\u724C\uFF0C\u4E5F\u5C31\u662F1\u79D2\u6700\u591A\u653E\u51FA100\u4E2A\u8BF7\u6C42\uFF0C\u4E00\u4E2A\u8BF7\u6C42\u83B7\u53D6\u4E00\u4E2A\u4EE4\u724C</span>
            <span class="token keyword">boolean</span> success <span class="token operator">=</span> limiter<span class="token punctuation">.</span><span class="token function">isActionAllowed</span><span class="token punctuation">(</span><span class="token string">&quot;ysmc&quot;</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token punctuation">}</span>
 
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre></div>`,34);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};