import{r as p,c as t,a as o,d as e,w as c,F as u,e as n,b as s,o as l}from"./app.7e2e1522.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const r={},k=n(`<h1 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog" aria-hidden="true">#</a> HyperLogLog</h1><p>\u4E00\u822C\u6211\u4EEC\u8BC4\u4F30\u4E00\u4E2A\u7F51\u7AD9\u7684\u8BBF\u95EE\u91CF\uFF0C\u6709\u51E0\u4E2A\u4E3B\u8981\u7684\u53C2\u6570\uFF1A</p><ul><li>PV\uFF08Page View\uFF09\uFF1A\u9875\u9762\u7684\u6D4F\u89C8\u91CF</li><li>UV\uFF08User View\uFF09\uFF1A\u8BBF\u95EE\u7684\u7528\u6237</li></ul><p>\u5982\u679C\u6709\u8FD9\u6837\u4E00\u4E2A\u9700\u6C42\uFF1A\u7EDF\u8BA1\u7CFB\u7EDF\u9875\u9762\u7684\u8BBF\u95EE\u91CF\uFF08pv\uFF09\uFF0C\u548C\u8BBF\u95EE\u7528\u6237\uFF08uv\uFF09\uFF0C\u6B64\u65F6\u8BE5\u600E\u6837\u53BB\u8BBE\u8BA1\u3002</p><p>pv \u6BD4\u8F83\u7B80\u5355\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 Redis \u8BA1\u6570\u5668\u5C31\u80FD\u5B9E\u73B0\uFF0C\u628A\u8FD9\u4E2A\u6280\u672F\u533A\u7684key\u540E\u7F00\u52A0\u4E0A\u5F53\u5B83\u7684\u65E5\u671F\uFF0C\u8FD9\u6837\u4E00\u4E2A\u8BF7\u6C42\u8FC7\u6765\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u6267\u884Cincr\u3001incrby\u6307\u4EE4\u7EDF\u8BA1\u6240\u6709PV\u3002</p><p>\u4F46\u662F uv \u5C31\u4E0D\u4E00\u6837\uFF0Cuv \u6D89\u53CA\u5230\u53E6\u5916\u4E00\u4E2A\u95EE\u9898\uFF0C\u53BB\u91CD\u3002\u4E00\u4E2A\u7528\u6237\u5728\u5F53\u5929\uFF08\u6216\u4E00\u4E2A\u65F6\u95F4\u6BB5\uFF09\u4E0D\u7BA1\u767B\u5F55\u591A\u5C11\u6B21\u90FD\u8981\u7B97\u4F5C\u4E00\u6B21\u3002</p><ol><li>\u5982\u679C\u5C06\u5B58\u50A8\u5728\u6570\u636E\u5E93\u8868\u4E2D\uFF0C\u4F7F\u7528<code>distinct count</code> \u8BA1\u7B97\u4E0D\u91CD\u590D\u7684\u4E2A\u6570\uFF0C\u968F\u7740\u6570\u636E\u91CF\u7684\u589E\u52A0\uFF0C\u5B58\u50A8\u6570\u636E\u7684\u7A7A\u95F4\u5360\u7528\u8D8A\u6765\u8D8A\u5927\uFF0C\u6D6A\u8D39\u7A7A\u95F4\u3002</li><li>\u4F7F\u7528Redis\u7684set\u3001hash\u3001bitmaps\u7B49\u6570\u636E\u7ED3\u6784\u6765\u5B58\u50A8\uFF0C\u6BD4\u5982\u4F7F\u7528set\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7528\u6237ID\uFF0C\u901A\u8FC7sadd\u52A0\u5165set\u96C6\u5408\u3002\u8FD9\u6837\u7EDF\u8BA1\u7684\u6027\u80FD\u6BD4\u8F83\u6162\uFF0C\u867D\u7136\u53EF\u4EE5\u901A\u8FC7\u5F02\u6B65\u65B9\u5F0F\u7EDF\u8BA1\uFF0C\u4F46\u662F\u6027\u80FD\u5E76\u4E0D\u7406\u60F3</li></ol><p><strong>\u56E0\u6B64\u9488\u5BF9UV\u7684\u7EDF\u8BA1\uFF0C\u6211\u4EEC\u5C06\u4F1A\u8003\u8651\u4F7F\u7528Redis\u7684\u65B0\u6570\u636E\u7C7B\u578B HyperLogLog.</strong></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>HyperLogLog \u662F\u7528\u6765\u505A\u57FA\u6570\u7EDF\u8BA1\u7684\u7B97\u6CD5\uFF0C\u5B83\u63D0\u4F9B\u4E0D\u592A\u7CBE\u786E\u7684\u53BB\u91CD\u8BA1\u6570\u65B9\u6848\uFF0C\u6807\u51C6\u8BEF\u5DEE\u662F<code>0.81%</code>\uFF0C\u5BF9\u4E8EUV\u8FD9\u79CD\u7EDF\u8BA1\u6765\u8BF4\u8FD9\u6837\u7684\u8BEF\u5DEE\u8303\u56F4\u662F\u88AB\u5141\u8BB8\u7684\u3002</p><p>HyperLogLog \u7684\u4F18\u70B9\u5728\u4E8E\uFF0C\u8F93\u5165\u5143\u7D20\u7684\u6570\u91CF\u6216\u8005\u4F53\u79EF\u975E\u5E38\u5927\u65F6\uFF0C\u57FA\u6570\u8BA1\u7B97\u7684\u5B58\u50A8\u7A7A\u95F4\u662F\u56FA\u5B9A\u7684\u3002\u5728 Redis \u4E2D\uFF0C\u6BCF\u4E2A HyperLogLog \u952E\u53EA\u9700\u8981\u82B1\u8D39 12KB \u5185\u5B58\uFF0C\u5C31\u53EF\u4EE5\u8BA1\u7B97\u63A5\u8FD1 2^64 \u4E2A\u4E0D\u540C\u7684\u57FA\u6570\u3002</p><p><code>HyperLogLog \u53EA\u80FD\u7EDF\u8BA1\u57FA\u6570\u7684\u5927\u5C0F\uFF08\u4E5F\u5C31\u662F\u6570\u636E\u96C6\u7684\u5927\u5C0F\uFF0C\u96C6\u5408\u7684\u4E2A\u6570\uFF09\uFF0C\u4ED6\u4E0D\u80FD\u5B58\u50A8\u5143\u7D20\u7684\u672C\u8EAB\uFF0C\u4E0D\u80FD\u5411set\u96C6\u5408\u90A3\u6837\u5B58\u50A8\u5143\u7D20\u672C\u8EAB\uFF0C\u4E5F\u5C31\u662F\u8BF4\u65E0\u6CD5\u8FD4\u56DE\u5143\u7D20\u3002</code></p></div><h2 id="\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u7840\u547D\u4EE4</h2><p>HyperLogLog \u4E3B\u8981\u63D0\u4F9B\u4E86\u4E24\u4E2A\u547D\u4EE4\uFF1A<code>pfadd</code> \u548C <code>pfcount</code>\u3002</p><p><strong>pfadd\uFF1A</strong></p><div class="language-text ext-text"><pre class="language-text"><code>pfadd key element [element...]
</code></pre></div><p>pfadd \u7528\u6765\u6DFB\u52A0\u8BB0\u5F55\uFF0C\u6DFB\u52A0\u8FC7\u7A0B\u4E2D\u91CD\u590D\u7684\u8BB0\u5F55\u4F1A\u81EA\u52A8\u53BB\u91CD\uFF0C\u6DFB\u52A0\u6210\u529F\u8FD4\u56DE 1\uFF0C\u5931\u8D25\u8FD4\u56DE 0</p><p><strong>pfcount\uFF1A</strong></p><div class="language-text ext-text"><pre class="language-text"><code>pfcount key [key...]
</code></pre></div><p>\u547D\u4EE4\u4F5C\u7528\u4E8E\u5355\u4E2A\u952E\u65F6\uFF0C\u8FD4\u56DE\u5B58\u50A8\u5728\u7ED9\u5B9A\u952E\u7684HyperLogLog\u7684\u8FD1\u4F3C\u57FA\u6570\uFF0C\u5982\u679C\u952E\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE0\uFF1B</p><p>\u5F53\u547D\u4EE4\u4F5C\u7528\u4E8E\u591A\u4E2A\u952E\u65F6\uFF0C\u5C06\u591A\u4E2A key \u5408\u5E76\u5230\uFF0C\u8FD4\u56DE\u53BB\u91CD\u4E4B\u540E\u7684\u4E2A\u6570\u3002</p><p><img src="https://img.zxqs.top/image-20230205170343582.png" alt="image-20230205170343582"></p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><p>\u5B9E\u73B0\u65B9\u5F0F\u5F88\u591A\uFF0Cspring\u9879\u76EE\u4E2D\u53EF\u4EE5\u4F7F\u7528 lua \u811A\u672C\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 RedisTemplate\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528 jedis\u3002</p><p><strong>spring\u9879\u76EE\u4E2D\u5B9E\u73B0\uFF1A</strong></p><p>\u5F88\u7B80\u5355\u77E5\u8BC6\u8981\u4E00\u884C\u4EE3\u7801\u5C31\u53EF\u4EE5\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">// \u6DFB\u52A0\u6570\u636E</span>
stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForHyperLogLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> obj<span class="token punctuation">)</span>
<span class="token comment">// \u7EDF\u8BA1\u6570\u636E</span>
stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForHyperLogLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,24),d=s("\u5177\u4F53\u6574\u5408 redis\uFF0C\u8BF7\u770B\u8FD9\u7BC7\u6587\u7AE0 "),g=s("springboot\u6574\u5408redis"),m=n(`<p><strong>\u4F7F\u7528Jedis\uFF1A</strong></p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestJedis</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Jedis</span> jedis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jedis</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.96.128&quot;</span><span class="token punctuation">,</span><span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jedis<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            jedis<span class="token punctuation">.</span><span class="token function">pfadd</span><span class="token punctuation">(</span><span class="token string">&quot;uv&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;u&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> <span class="token string">&quot;u&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> uv <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">pfcount</span><span class="token punctuation">(</span><span class="token string">&quot;uv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>uv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED3\u679C\uFF1A994</span>
</code></pre></div><p>\u771F\u6B63\u5B58\u5165\u7684\u503C\u53BB\u91CD\u4E4B\u540E\u662F <code>1001</code>\uFF0C\u4F46\u662F\u7ED3\u679C\u662F 994\uFF0C\u6709\u8BEF\u5DEE\uFF0C\u4F46\u662F\u5728\u53EF\u4EE5\u63A5\u53D7\u7684\u8303\u56F4\u5185\u3002</p>`,3);function h(y,f){const a=p("RouterLink");return l(),t(u,null,[k,o("p",null,[d,e(a,{to:"/database/redis/springbootredis.html#%E6%A6%82%E5%BF%B5"},{default:c(()=>[g]),_:1})]),m],64)}var _=i(r,[["render",h]]);export{_ as default};