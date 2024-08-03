import{e as n}from"./app.7e2e1522.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u5E03\u9686\u8FC7\u6EE4\u5668</h1><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u662F\u4E00\u4E2A\u7531 \u4E00\u4E2A\u957F\u5EA6\u4E3A M \u6BD4\u7279\u7684\u4F4D\u6570\u7EC4\uFF08bit array\uFF09\u4E0E K \u4E2A\u54C8\u5E0C\u51FD\u6570\uFF08hash function\uFF09 \u7EC4\u6210\u7684\u6570\u636E\u7ED3\u6784\u3002</p><p>\u5E03\u9686\u8FC7\u6EE4\u5668\u4E3B\u8981\u7528\u4E8E\u7528\u4E8E\u68C0\u7D22\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u5728\u4E00\u4E2A\u96C6\u5408\u4E2D\u3002</p><p>\u4F4D\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u521D\u59CB\u503C\u90FD\u662F 0 \uFF0C\u6240\u6709\u54C8\u5E0C\u51FD\u6570\u53EF\u4EE5\u628A\u8F93\u5165\u7684\u6570\u636E\u5747\u5300\u4F4E\u6563\u5217\u3002</p><p><strong>\u4F18\u70B9\uFF1A</strong></p><ol><li>\u4E0D\u9700\u8981\u5B58\u50A8\u6570\u636E\uFF0C\u53EA\u7528\u6BD4\u7279\u8868\u793A\uFF0C\u56E0\u6B64\u5728\u7A7A\u95F4\u5360\u7528\u7387\u4E0A\u6709\u5DE8\u5927\u7684\u4F18\u52BF</li><li>\u68C0\u7D22\u6548\u7387\u9AD8\uFF0C\u63D2\u5165\u548C\u67E5\u8BE2\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u4E3A O(K)\uFF08K \u8868\u793A\u54C8\u5E0C\u51FD\u6570\u7684\u4E2A\u6570\uFF09</li><li>\u54C8\u5E0C\u51FD\u6570\u4E4B\u95F4\u76F8\u4E92\u72EC\u7ACB\uFF0C\u53EF\u4EE5\u5728\u786C\u4EF6\u6307\u4EE4\u5C42\u6B21\u5E76\u884C\u8BA1\u7B97\uFF0C\u56E0\u6B64\u6548\u7387\u8F83\u9AD8\u3002</li></ol><p><strong>\u7F3A\u70B9\uFF1A</strong></p><ol><li>\u5B58\u5728\u4E0D\u786E\u5B9A\u7684\u56E0\u7D20\uFF0C\u65E0\u6CD5\u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u4E00\u5B9A\u5B58\u5728\uFF0C\u6240\u4EE5\u4E0D\u9002\u5408\u8981\u6C42 100% \u51C6\u786E\u7387\u7684\u573A\u666F</li><li>\u53EA\u80FD\u63D2\u5165\u548C\u67E5\u8BE2\u5143\u7D20\uFF0C\u4E0D\u80FD\u5220\u9664\u5143\u7D20\u3002</li></ol><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u6DFB\u52A0\u64CD\u4F5C\u539F\u7406\u5982\u4E0B\uFF1A</p><p>\u9996\u5148\u6839\u636E\u51E0\u4E2A\u4E0D\u540C hash \u51FD\u6570\u7ED9\u5143\u7D20\u8FDB\u884C hash \u8FD0\u7B97\u4E00\u4E2A\u6574\u6570\u7D22\u5F15\u503C\uFF0C\u62FF\u5230\u8FD9\u4E2A\u7D22\u5F15\u503C\u4E4B\u540E\uFF0C\u8DDF\u4F4D\u6570\u7EC4\u7684\u957F\u5EA6\u8FDB\u884C<code>\u53D6\u6A21\u8FD0\u7B97</code>\uFF0C\u5F97\u5230\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u6BCF\u4E00\u4E2A hash \u51FD\u6570\u90FD\u4F1A\u5F97\u5230\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u5C06\u4F4D\u6570\u7EC4\u4E2D\u5BF9\u5E94\u7684\u4F4D\u7F6E \u8BBE\u7F6E\u4F4D 1 \uFF0C\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u6DFB\u52A0\u64CD\u4F5C\u3002</p><p>\u5047\u8BBE\u7528\u4E09\u4E2Ahash\u51FD\u6570\u7ED9 <code>ysmc</code> \u8BA1\u7B97\u4E00\u4E2Ahash\u503C\u51FA\u6765\uFF0C\u5206\u522B\u662F5\u30016\u30018\uFF0C\u518D\u75285\u30016\u30018 \u5206\u522B\u548C\u6570\u7EC4\u957F\u5EA6\u53D6\u6A21\uFF0C\u7ED3\u679C\u8FD8\u662F5\u30016\u30018\uFF0C\u6700\u540E\u5C06\u6570\u7EC4\u4E2D\u8FD9\u51E0\u4E2A\u4F4D\u7F6E\u7684\u503C\u8BBE\u7F6E\u4E3A1\u3002</p><p>\u4FDD\u5B58 <code>zxqs.top</code> \u8BA1\u7B97\u7684hash\u503C\u5206\u522B\u662F 20\\25\\36\uFF0C\u53D6\u6A21\u7ED3\u679C\u4E3A 0 5 6</p><p>\u6570\u636E\u4FDD\u5B58\u5728\u6570\u7EC4\u7684\u4F4D\u7F6E\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://img.zxqs.top/image-20230206002138830.png" alt="image-20230206002138830"></p><p>\u5F53\u5224\u65AD\u5143\u7D20\u662F\u662F\u5426\u5B58\u5728\u65F6\uFF0C\u4F9D\u7136\u5148\u5BF9\u5143\u7D20\u8FDB\u884C hash \u8FD0\u7B97\uFF0C\u5C06\u8FD0\u7B97\u7684\u7ED3\u679C\u548C\u4F4D\u6570\u7EC4\u53D6\u6A21\uFF0C\u7136\u540E\u53BB\u5BF9\u5E94\u7684\u4F4D\u7F6E\u67E5\u770B\u662F\u5426\u6709\u76F8\u5E94\u7684\u6570\u636E\uFF0C<code>\u5982\u679C\u6709\uFF0C\u8868\u793A\u5143\u7D20\u53EF\u80FD\u5B58\u5728\uFF08\u56E0\u4E3A\u8FD9\u4E2A\u6709\u6570\u636E\u7684\u5730\u65B9\u4E5F\u53EF\u80FD\u662F\u5176\u4ED6\u5143\u7D20\u5B58\u8FDB\u6765\u7684\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u8868\u793A\u5143\u7D20\u4E00\u5B9A\u4E0D\u5B58\u5728</code>\u3002</p><p><strong>Bloom Filter \u4E2D\uFF0C\u8BEF\u5224\u7684\u6982\u7387\u548C\u4F4D\u6570\u7EC4\u7684\u5927\u5C0F\u6709\u5F88\u5927\u5173\u7CFB\uFF0C\u4F4D\u6570\u7EC4\u8D8A\u5927\uFF0C\u8BEF\u5224\u6982\u7387\u8D8A\u5C0F\uFF0C\u5F53\u7136\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u8D8A\u5927\uFF1B\u4F4D\u6570\u7EC4\u8D8A\u5C0F\uFF0C\u8BEF\u5224\u6982\u7387\u8D8A\u5927\uFF0C\u5F53\u7136\u5360\u7528\u7684\u5B58\u50A8\u7A7A\u95F4\u5C31\u5C0F.</strong></p><h2 id="bloom-filter-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#bloom-filter-\u5B89\u88C5" aria-hidden="true">#</a> Bloom Filter \u5B89\u88C5</h2><p>\u5EFA\u8BAE\u5B89\u88C5 RedisBloom-2.2.5\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u7528\u5404\u79CD\u62A5\u9519\u3002</p><p>https://github.com/RedisBloom/RedisBloom/releases/tag/v2.2.5</p><p>\u4E0B\u8F7D\u5B8C\u6210\u540E\uFF0C\u5728redis\u76EE\u5F55\u4E0B\u89E3\u538B\uFF0C\u7136\u540E\u7EE7\u7EED\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-text ext-text"><pre class="language-text"><code>cd RedisBloom/
make
cd ..
redis-server redis.conf --loadmodule ./RedisBloom/redisbloom.so
</code></pre></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6267\u884C bf.add \u547D\u4EE4\uFF0C\u6D4B\u8BD5\u5B89\u88C5\u662F\u5426\u6210\u529F\uFF0C\u5982\u679C\u6709\u63D0\u793A\u8BC1\u660E\u6210\u529F\u3002</p><p>\u6BCF\u6B21\u542F\u52A8\u65F6\u90FD\u8F93\u5165 <code>redis-server redis.conf --loadmodule ./RedisBloom/redisbloom.so</code>\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u8981\u52A0\u8F7D\u7684\u6A21\u5757\u5728 redis.conf \u4E2D\u63D0\u524D\u914D\u7F6E\u597D\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>################################## MODULES #####################################
# Load modules at startup. If the server is not able to load modules
# it will abort. It is possible to use multiple loadmodule directives.
#
# loadmodule /path/to/my_module.so
# loadmodule /path/to/other_module.so
loadmodule /root/redis-5.0.7/RedisBloom/redisbloom.so
</code></pre></div><p>\u6700\u4E0B\u9762\u8FD9\u4E00\u53E5\uFF0C\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u4EE5\u540E\u53EA\u9700\u8981 redis-server redis.conf \u6765\u542F\u52A8 Redis \u5373\u53EF\u3002</p><h2 id="\u57FA\u672C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u672C\u547D\u4EE4</h2><p>\u4E3B\u8981\u662F\u4E24\u7C7B\u547D\u4EE4\uFF0C\u6DFB\u52A0\u548C\u5224\u65AD\u662F\u5426\u5B58\u5728\u3002</p><ul><li>BF.ADD \u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\u5230\u5E03\u9686\u8FC7\u6EE4\u5668</li><li>BF.EXISTS \u5224\u65AD\u5143\u7D20\u662F\u5426\u5728\u5E03\u9686\u8FC7\u6EE4\u5668</li><li>BF.INFO \u8FD4\u56DE\u6709\u5173\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u4FE1\u606F</li><li>BF.INSERT \u5C06\u591A\u4E2A\u5143\u7D20\u6DFB\u52A0\u5230\u8FC7\u6EE4\u5668\u3002\u5982\u679C\u952E\u4E0D\u5B58\u5728\uFF0C\u5B83\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8FC7\u6EE4\u5668\u3002</li><li>BF.MADD \u6DFB\u52A0\u591A\u4E2A\u5143\u7D20\u5230\u5E03\u9686\u8FC7\u6EE4\u5668</li><li>BF.MEXISTS \u5224\u65AD\u591A\u4E2A\u5143\u7D20\u662F\u5426\u5728\u5E03\u9686\u8FC7\u6EE4\u5668</li><li>BF.RESERVE \u521B\u5EFA\u4E00\u4E2A\u5E03\u9686\u8FC7\u6EE4\u5668\u3002\u8BBE\u7F6E\u8BEF\u5224\u7387\u548C\u5BB9\u91CF</li><li>BF.SCANDUMP \u5F00\u59CB\u589E\u91CF\u4FDD\u5B58 Bloom \u8FC7\u6EE4\u5668\u3002</li><li>BF.LOADCHUNK \u6062\u590D\u4E4B\u524D\u4F7F\u7528BF.SCANDUMP \u4FDD\u5B58\u7684\u5E03\u9686\u8FC7\u6EE4\u5668\u3002</li></ul><h2 id="\u5728\u9879\u76EE\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728\u9879\u76EE\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728\u9879\u76EE\u4E2D\u4F7F\u7528</h2><p>\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\uFF08springboot\u9879\u76EE\uFF09\u4E00\u822C\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u4F7F\u7528 <code>Redisson</code> \u548C\u4F7F\u7528 <code>lua</code> \u811A\u672C\uFF0C\u6211\u4EEC\u5206\u522B\u6765\u770B\u4E00\u4E0B\uFF1A</p><p><strong>\u4F7F\u7528redisson</strong></p><p>\u9996\u5148\u5F15\u5165\u4F9D\u8D56\uFF1A</p><div class="language-pom ext-pom"><pre class="language-pom"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.redisson&lt;/groupId&gt;
    &lt;artifactId&gt;redisson&lt;/artifactId&gt;
    &lt;version&gt;3.8.2&lt;/version&gt;
&lt;/dependency&gt;
</code></pre></div><p>\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BloomFilterConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Config</span> <span class="token function">redissionConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SingleServerConfig</span> singleServerConfig <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">useSingleServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        singleServerConfig<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token string">&quot;redis://192.168.96.128:6379&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        singleServerConfig<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> config<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RedissonClient</span> <span class="token function">redissonClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Redisson</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token function">redissionConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u521B\u5EFA Redisson \u5DE5\u5177\u7C7B</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisUtil</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token class-name">RedissonClient</span> redissonClient<span class="token punctuation">;</span>

   <span class="token doc-comment comment">/**
	 * \u5E03\u9686\u8FC7\u6EE4\u5668\u521D\u59CB\u5316
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">bloomFilterName</span> \u8FC7\u6EE4\u5668\u540D\u79F0
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bloomFilterInit</span><span class="token punctuation">(</span><span class="token class-name">String</span> bloomFilterName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RBloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> bloomFilter <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getBloomFilter</span><span class="token punctuation">(</span>bloomFilterName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u521D\u59CB\u5316\uFF0C\u8BBE\u7F6E\u6570\u7EC4\u7684\u957F\u5EA6\u548C\u671F\u671B\u7684\u8BEF\u5224\u7387\uFF0C\u8BEF\u5224\u7387\u8D8A\u4F4E\uFF0C\u5E03\u9686\u8FC7\u6EE4\u5668\u8BA1\u7B97\u65F6\u95F4\u8D8A\u957F\uFF0C \u8BEF\u5DEE\u7387\uFF0C\u4F8B\u5982\uFF1A0.001,\u8868\u793A\u8BEF\u5DEE\u7387\u4E3A0.1%</span>
		bloomFilter<span class="token punctuation">.</span><span class="token function">tryInit</span><span class="token punctuation">(</span><span class="token number">100000L</span><span class="token punctuation">,</span> <span class="token number">0.000001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * \u5E03\u9686\u8FC7\u6EE4\u5668\u6DFB\u52A0\u6570\u636E
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">bloomFilterName</span> \u8FC7\u6EE4\u5668\u540D\u79F0
	 * <span class="token keyword">@param</span> <span class="token parameter">value</span>           \u8981\u6DFB\u52A0\u7684\u503C
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bloomFilterAdd</span><span class="token punctuation">(</span><span class="token class-name">String</span> bloomFilterName<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RBloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> bloomFilter <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getBloomFilter</span><span class="token punctuation">(</span>bloomFilterName<span class="token punctuation">)</span><span class="token punctuation">;</span>
		bloomFilter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * \u5E03\u9686\u8FC7\u6EE4\u5668\u6570\u636E\u7EDF\u8BA1
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">bloomFilterName</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">value</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">bloomFilterContains</span><span class="token punctuation">(</span><span class="token class-name">String</span> bloomFilterName<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RBloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> bloomFilter <span class="token operator">=</span> redissonClient<span class="token punctuation">.</span><span class="token function">getBloomFilter</span><span class="token punctuation">(</span>bloomFilterName<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> bloomFilter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BloomFilterTest</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">RedisUtil</span> redisUtil<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/filterTest&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      redisUtil<span class="token punctuation">.</span><span class="token function">bloomFilterInit</span><span class="token punctuation">(</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      redisUtil<span class="token punctuation">.</span><span class="token function">bloomFilterAdd</span><span class="token punctuation">(</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/filterTest2&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token class-name">String</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">return</span> redisUtil<span class="token punctuation">.</span><span class="token function">bloomFilterContains</span><span class="token punctuation">(</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u4F7F\u7528lua\u811A\u672C</strong></p><p>\u8FD9\u91CC\u6211\u5C06 <code>lua\u811A\u672C</code> \u5199\u5230\u6587\u4EF6\u4E2D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5199\u5728\u4EE3\u7801\u4E2D\u3002</p><p>\u5728 <code>resources</code> \u76EE\u5F55\u4E0B\uFF0C\u521B\u5EFAredis\u76EE\u5F55\uFF0C\u5E76\u65B0\u5EFA\u4E24\u4E2A\u6587\u4EF6\uFF0C\u5206\u522B\u4E3A <code>bloomFilterAdd.lua</code>\u3001<code>bloomFilterExists.lua</code> \u5185\u5BB9\u5982\u4E0B\uFF1A</p><p><code>bloomFilterAdd.lua</code></p><div class="language-text ext-text"><pre class="language-text"><code>return redis.call(&quot;bf.add&quot;,KEYS[1],ARGV[1])
</code></pre></div><p><code>bloomFilterExists.lua</code></p><div class="language-text ext-text"><pre class="language-text"><code>return redis.call(&quot;bf.exists&quot;,KEYS[1])
</code></pre></div><p>\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BFB\u53D6 lua \u811A\u672C\u7684\u4FE1\u606F</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BloomFilterConfig</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
    * expectedInsertions\uFF1A\u671F\u671B\u6DFB\u52A0\u7684\u6570\u636E\u4E2A\u6570,\u8FD9\u4E2A\u503C\u7684\u8BBE\u7F6E\u76F8\u5F53\u91CD\u8981\uFF0C\u5982\u679C\u8BBE\u7F6E\u7684\u8FC7\u5C0F\u5F88\u5BB9\u6613\u5BFC\u81F4\u9971\u548C\u800C\u5BFC\u81F4\u8BEF\u62A5\u7387\u6025\u5267\u4E0A\u5347\uFF0C\u5982\u679C\u8BBE\u7F6E\u7684\u8FC7\u5927\uFF0C\u4E5F\u4F1A\u5BF9\u5185\u5B58\u9020\u6210\u6D6A\u8D39\uFF0C\u6240\u4EE5\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u6765\u5B9A
    * fpp\uFF1A\u671F\u671B\u7684\u8BEF\u5224\u7387\uFF0C\u671F\u671B\u7684\u8BEF\u5224\u7387\u8D8A\u4F4E\uFF0C\u5E03\u9686\u8FC7\u6EE4\u5668\u8BA1\u7B97\u65F6\u95F4\u8D8A\u957F\uFF0C \u8BEF\u5DEE\u7387\uFF0C\u4F8B\u5982\uFF1A0.001,\u8868\u793A\u8BEF\u5DEE\u7387\u4E3A0.1%
    *
    * <span class="token keyword">@return</span> \u8FD4\u56DEtrue\uFF0C\u8868\u793A\u53EF\u80FD\u5B58\u5728\uFF0C\u8FD4\u56DEfalse\u4E00\u5B9A\u4E0D\u5B58\u5728
    */</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">bloomFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">BloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> filter <span class="token operator">=</span> <span class="token class-name">BloomFilter</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Funnels</span><span class="token punctuation">.</span><span class="token function">stringFunnel</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">0.00001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> filter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token function">addRedisScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> defaultRedisScript <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      defaultRedisScript<span class="token punctuation">.</span><span class="token function">setResultType</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      defaultRedisScript<span class="token punctuation">.</span><span class="token function">setScriptSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ResourceScriptSource</span><span class="token punctuation">(</span><span class="token keyword">new</span>
              <span class="token class-name">ClassPathResource</span><span class="token punctuation">(</span><span class="token string">&quot;redis/bloomFilterAdd.lua&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> defaultRedisScript<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> <span class="token function">existsRedisScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> defaultRedisScript <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultRedisScript</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      defaultRedisScript<span class="token punctuation">.</span><span class="token function">setResultType</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      defaultRedisScript<span class="token punctuation">.</span><span class="token function">setScriptSource</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ResourceScriptSource</span><span class="token punctuation">(</span><span class="token keyword">new</span>
              <span class="token class-name">ClassPathResource</span><span class="token punctuation">(</span><span class="token string">&quot;redis/bloomFilterExists.lua&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> defaultRedisScript<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><p>\u6D4B\u8BD5\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BloomFilterTest</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;addRedisScript&quot;</span><span class="token punctuation">)</span>
  <span class="token class-name">DefaultRedisScript</span> addRedisScript<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;existsRedisScript&quot;</span><span class="token punctuation">)</span>
  <span class="token class-name">DefaultRedisScript</span> existsRedisScript<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">RedisUtil</span> redisUtil<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/filterTest&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token doc-comment comment">/**
        * \u53C2\u65701\uFF1A\u6267\u884C\u7684lua\u811A\u672C\u4FE1\u606F
        * \u53C2\u65702\uFF1Akey\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A
        * \u53C2\u65703\uFF1A\u5176\u4ED6\u53C2\u6570\uFF0C\u662F\u4E00\u4E2A\u53EF\u53D8\u53C2\u6570
        */</span>
      <span class="token class-name">Object</span> k1 <span class="token operator">=</span> redisTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>addRedisScript<span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/filterTest2&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token class-name">String</span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">boolean</span><span class="token punctuation">)</span> redisTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>existsRedisScript<span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;k1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> param<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> \u5E94\u7528\u573A\u666F</h2><ul><li>\u7F51\u9875\u722C\u866Burl\u53BB\u91CD</li><li>\u5783\u573E\u90AE\u4EF6\u8FC7\u6EE4</li><li>\u7F13\u5B58\u7A7F\u900F</li></ul>`,54);function p(o,e){return t}var u=s(a,[["render",p]]);export{u as default};