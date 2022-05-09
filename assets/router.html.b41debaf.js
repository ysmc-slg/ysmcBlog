import{e as n}from"./app.16a97017.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="router" tabindex="-1"><a class="header-anchor" href="#router" aria-hidden="true">#</a> Router</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Vue Router \u662F Vue.js \u7684\u5B98\u65B9\u8DEF\u7531\u3002\u5B83\u4E0E Vue.js \u6838\u5FC3\u6DF1\u5EA6\u96C6\u6210\uFF0C\u8BA9\u7528 Vue.js \u6784\u5EFA\u5355\u9875\u5E94\u7528\u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002\u529F\u80FD\u5305\u62EC\uFF1A</p><ul><li>\u5D4C\u5957\u8DEF\u7531\u6620\u5C04</li><li>\u52A8\u6001\u8DEF\u7531\u9009\u62E9</li><li>\u6A21\u5757\u5316\u3001\u57FA\u4E8E\u7EC4\u4EF6\u7684\u8DEF\u7531\u914D\u7F6E</li><li>\u8DEF\u7531\u53C2\u6570\u3001\u67E5\u8BE2\u3001\u901A\u914D\u7B26</li><li>\u5C55\u793A\u7531 Vue.js \u7684\u8FC7\u6E21\u7CFB\u7EDF\u63D0\u4F9B\u7684\u8FC7\u6E21\u6548\u679C</li><li>\u7EC6\u81F4\u7684\u5BFC\u822A\u63A7\u5236</li><li>\u81EA\u52A8\u6FC0\u6D3B CSS \u7C7B\u7684\u94FE\u63A5</li><li>HTML5 history \u6A21\u5F0F\u6216 hash \u6A21\u5F0F</li><li>\u53EF\u5B9A\u5236\u7684\u6EDA\u52A8\u884C\u4E3A</li><li>URL \u7684\u6B63\u786E\u7F16\u7801</li></ul><h2 id="\u5B89\u88C5\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u548C\u4F7F\u7528" aria-hidden="true">#</a> \u5B89\u88C5\u548C\u4F7F\u7528</h2><ol><li><p>\u9996\u5148\u4F7F\u7528\u547D\u4EE4\u5B89\u88C5 <code>Router</code></p><div class="language-vue ext-vue"><pre class="language-vue"><code>npm i vue-router@3
</code></pre></div><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u9700\u8981\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u4ECE2022\u5E742\u67087\u65E5\u5F00\u59CB\uFF0C<code>vue-router</code> \u7684\u9ED8\u8BA4\u7248\u672C\u4E3A4\uFF0C<code>vue-router4</code> \u53EA\u80FD\u5728 <code>vue3</code> \u4E2D\u4F7F\u7528\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002\u800C\u672C\u6587\u4F7F\u7528\u7684\u662F <code>vue2</code> \u6240\u4EE5\u8981\u662F\u7528 <code>vue-router3</code>\u3002</p></li><li><p>\u7F16\u5199router\u914D\u7F6E\u9879</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8BE5\u6587\u4EF6\u4E13\u95E8\u7528\u4E8E\u521B\u5EFA\u6574\u4E2A\u5E94\u7528\u7684\u8DEF\u7531\u5668</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token comment">//\u5E94\u7528\u63D2\u4EF6</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token comment">//\u5F15\u5165\u7EC4\u4EF6</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;../components/About&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;../components/Home&#39;</span>

<span class="token comment">//\u521B\u5EFA\u5E76\u66B4\u9732\u4E00\u4E2A\u8DEF\u7531\u5668</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span>About
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span>Home
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><p><code>About</code> \u548C <code>Home</code> \u7EC4\u4EF6\u8FD9\u91CC\u5C31\u4E0D\u5199\u4E86</p></li><li><p>\u5728 <code>main.js</code> \u4E2D\u5F15\u5165\u4E0A\u9762\u7684 router \u914D\u7F6E\u6587\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5F15\u5165Vue</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">//\u5F15\u5165App</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token comment">//\u5F15\u5165\u8DEF\u7531\u5668</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

<span class="token comment">//\u5173\u95EDVue\u7684\u751F\u4EA7\u63D0\u793A</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token comment">//\u521B\u5EFAvm</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    el<span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
    router
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u4F7F\u7528 <code>&lt;router-link&gt;</code> \u6807\u7B7E\uFF0C\u5B9E\u73B0\u5207\u6362\u8DEF\u7531</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list-group-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list-group-item<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><code>to</code> \u4E2D\u5BF9\u5E94\u7684\u5C31\u662F\uFF0C\u8DEF\u7531\u914D\u7F6E\u9879\u4E2D\u7684 <code>path</code></p></li><li><p>\u4F7F\u7528 <code>&lt;router-view&gt;</code> \u6307\u5B9A\u7B26\u5408\u8DEF\u7531\u914D\u7F6E\u9879\u7EC4\u4EF6\u7684\u4F4D\u7F6E</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ol><p><strong>\u6CE8\u610F</strong>\uFF1A</p><ol><li>\u901A\u8FC7\u5207\u6362\uFF0C\u201C\u9690\u85CF\u201D\u4E86\u7684\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u662F\u88AB\u9500\u6BC1\u6389\u7684\uFF0C\u9700\u8981\u7684\u65F6\u5019\u518D\u53BB\u6302\u8F7D\u3002</li><li>\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u81EA\u5DF1\u7684 <code>$route</code> \u5C5E\u6027\uFF0C\u91CC\u9762\u5B58\u50A8\u7740\u81EA\u5DF1\u7684\u8DEF\u7531\u4FE1\u606F\u3002</li><li>\u6574\u4E2A\u5E94\u7528\u53EA\u6709\u4E00\u4E2A <code>router</code> \uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u7684 <code>$router</code> \u5C5E\u6027\u83B7\u53D6\u5230\u3002</li></ol><h2 id="\u8DEF\u7531\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5D4C\u5957" aria-hidden="true">#</a> \u8DEF\u7531\u5D4C\u5957</h2><p>\u8FD9\u91CC\u53EA\u5C55\u793A\u914D\u7F6E\u8DEF\u7531\u7684\u89C4\u5219\uFF0C\u5177\u4F53\u7684\u4EE3\u7801\u53EF\u4EE5\u770Bgithub\u6848\u4F8B</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	routes<span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			path<span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
			component<span class="token operator">:</span>About
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			path<span class="token operator">:</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
			component<span class="token operator">:</span>Home<span class="token punctuation">,</span>
			children<span class="token operator">:</span><span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					path<span class="token operator">:</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">,</span>
					component<span class="token operator">:</span>News<span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">{</span>
					path<span class="token operator">:</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span>
					component<span class="token operator">:</span>Message<span class="token punctuation">,</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53EA\u9700\u8981\u5728 <code>VueRouter</code> \u7684\u53C2\u6570\u4E2D\u4F7F\u7528 <code>children</code> \u914D\u7F6E\uFF0C\u6B64\u65F6\u5C31\u7ED9 <code>/home</code> \u8DEF\u7531\u6DFB\u52A0\u4E86\u4E24\u4E2A\u5B50\u8DEF\u7531\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5B50\u8DEF\u7531\u7684 <code>path</code> \u4E0D\u9700\u8981 <code>/</code></p><p>\u7136\u540E\u8FD8\u662F\u4F7F\u7528 <code>&lt;router-link&gt;</code> \u6807\u7B7E\u6765\u8FDB\u884C\u8DEF\u7531\u7684\u8DF3\u8F6C\uFF0C\u4F46\u662F\u8DEF\u5F84\u8981\u5199\u5168\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home/news<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>News<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u547D\u540D\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u8DEF\u7531" aria-hidden="true">#</a> \u547D\u540D\u8DEF\u7531</h2><p>\u6709\u65F6\u5019\uFF0C\u901A\u8FC7\u4E00\u4E2A\u540D\u79F0\u6765\u6807\u8BC6\u4E00\u4E2A\u8DEF\u7531\u663E\u5F97\u66F4\u65B9\u4FBF\u4E00\u4E9B\uFF0C\u7279\u522B\u662F\u5728\u94FE\u63A5\u4E00\u4E2A\u8DEF\u7531\uFF0C\u6216\u8005\u662F\u6267\u884C\u4E00\u4E9B\u8DF3\u8F6C\u7684\u65F6\u5019\u3002\u4F60\u53EF\u4EE5\u5728\u521B\u5EFA Router \u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u5728 routes \u914D\u7F6E\u4E2D\u7ED9\u67D0\u4E2A\u8DEF\u7531\u8BBE\u7F6E\u540D\u79F0\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	routes<span class="token operator">:</span><span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			name<span class="token operator">:</span><span class="token string">&#39;guanyu&#39;</span><span class="token punctuation">,</span>
			path<span class="token operator">:</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
			component<span class="token operator">:</span>About
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53EA\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A<code>name</code> \u5C5E\u6027\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u6B64\u65F6\u5728\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528 <code>&lt;router-link&gt;</code> \u7684 <code>name</code> \u5C5E\u6027\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{name: <span class="token punctuation">&#39;</span>guanyu<span class="token punctuation">&#39;</span>}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h2><p>\u4E0A\u9762\u7684\u6848\u4F8B\u90FD\u662F\u4F7F\u7528 <code>&lt;router-link&gt;</code> \u6807\u7B7E\u6765\u5B8C\u6210\u7684\u8DEF\u7531\u8DF3\u8F6C\uFF0C\u4F46\u662F\u5728\u5F00\u53D1\u4E2D\u4E0D\u53EF\u80FD\u90FD\u662F\u901A\u8FC7\u70B9\u51FB\u6765\u8FDB\u884C\u8DEF\u7531\u7684\u8DF3\u8F6C\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u7F16\u5199\u4EE3\u7801\u6765\u5B9E\u73B0\u8DEF\u7531\u7684\u8DF3\u8F6C\u3002</p><p>\u901A\u8FC7\u7F16\u7801\u5B9E\u73B0\u8DEF\u7531\u8DF3\u8F6C\u6709\u4E24\u79CD\u65B9\u5F0F\u3002</p><ol><li><p>router.push</p><p>\u5728 <code>Vue</code> \u5B9E\u4F8B\u5185\u90E8\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>$route</code> \u8BBF\u95EE\u8DEF\u7531\u5B9E\u4F8B\uFF0C\u8C03\u7528\u5B83\u91CC\u9762\u7684 <code>push</code> \u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u3002</p><table><thead><tr><th>\u58F0\u660E\u5F0F</th><th>\u7F16\u7A0B\u5F0F</th></tr></thead><tbody><tr><td><code>&lt;router-link :to=&quot;...&quot;&gt;</code></td><td><code>router.push(...)</code></td></tr></tbody></table><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;guanyu&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u9ED8\u8BA4\u5C31\u662F path \u7684\u5F62\u5F0F</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;/about&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528 <code>router.push</code> \uFF0C\u4F1A\u5411 history \u6808\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u8BB0\u5F55\uFF0C\u6240\u4EE5\uFF0C\u5F53\u7528\u6237\u70B9\u51FB\u6D4F\u89C8\u5668\u56DE\u9000\u6309\u94AE\u65F6\uFF0C\u5219\u8FD4\u56DE\u4E4B\u524D\u7684URL</p><p>\u5F53\u4F60\u70B9\u51FB <code>&lt;router-link&gt;</code> \u65F6\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u5728\u5185\u90E8\u8C03\u7528\uFF0C\u6240\u4EE5\u8BF4\uFF0C\u70B9\u51FB <code>&lt;router-link :to=&quot;...&quot;&gt;</code> \u7B49\u540C\u4E8E\u8C03\u7528 router.push(...)\u3002</p></li><li><p>router.replace</p><p>\u8DDF router.push \u5F88\u50CF\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u5C31\u662F\uFF0C\u5B83\u4E0D\u4F1A\u5411 history \u6DFB\u52A0\u65B0\u8BB0\u5F55\uFF0C\u800C\u662F\u8DDF\u5B83\u7684\u65B9\u6CD5\u540D\u4E00\u6837 \u2014\u2014 \u66FF\u6362\u6389\u5F53\u524D\u7684 history \u8BB0\u5F55\u3002</p><table><thead><tr><th>\u58F0\u660E\u5F0F</th><th>\u7F16\u7A0B\u5F0F</th></tr></thead><tbody><tr><td><code>&lt;router-link :to=&quot;...&quot; replace&gt;</code></td><td><code>router.replace(...)</code></td></tr></tbody></table><div class="language-javascript ext-js"><pre class="language-javascript"><code>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;guanyu&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u9ED8\u8BA4\u5C31\u662F path \u7684\u5F62\u5F0F</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&quot;/about&quot;</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>router.go(n)</p><p>\u8FD9\u4E2A\u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u610F\u601D\u662F\u5728 history \u8BB0\u5F55\u4E2D\u5411\u524D\u6216\u8005\u540E\u9000\u591A\u5C11\u6B65\uFF0C\u7C7B\u4F3C window.history.go(n)\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u5728\u6D4F\u89C8\u5668\u8BB0\u5F55\u4E2D\u524D\u8FDB\u4E00\u6B65\uFF0C\u7B49\u540C\u4E8E history.forward()</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// \u540E\u9000\u4E00\u6B65\u8BB0\u5F55\uFF0C\u7B49\u540C\u4E8E history.back()</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// \u524D\u8FDB 3 \u6B65\u8BB0\u5F55</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment">// \u5982\u679C history \u8BB0\u5F55\u4E0D\u591F\u7528\uFF0C\u90A3\u5C31\u9ED8\u9ED8\u5730\u5931\u8D25\u5457</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre></div></li></ol><h2 id="\u8DEF\u7531\u7EC4\u4EF6\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u7EC4\u4EF6\u4F20\u53C2" aria-hidden="true">#</a> \u8DEF\u7531\u7EC4\u4EF6\u4F20\u53C2</h2><p>\u4E0A\u9762\u6240\u6709\u7684\u6848\u4F8B\u6545\u610F\u6CA1\u8BB2\u5230\u4F20\u53C2\uFF0C\u8FD9\u91CC\u6211\u4EEC\u540C\u610F\u6765\u8BF4\u4E00\u4E0B\u3002\u4F20\u53C2\u7684\u65B9\u5F0F\u4E3B\u8981\u6709\u4E09\u79CD\uFF1A</p><h3 id="query\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#query\u65B9\u5F0F" aria-hidden="true">#</a> query\u65B9\u5F0F</h3><p>query\u65B9\u5F0F\u53C8\u5305\u542B\u4E24\u79CD\uFF0C <code>&lt;router-link&gt;</code> \u6807\u7B7E\u548C \u5BFC\u822A\u5F0F\u7F16\u7A0B\u3002</p><ul><li><p>1 <code>&lt;router-link&gt;</code> \u6807\u7B7E\u65B9\u5F0F</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        messageList<span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token string">&#39;001&#39;</span><span class="token punctuation">,</span>title<span class="token operator">:</span><span class="token string">&#39;\u6D88\u606F001&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token string">&#39;002&#39;</span><span class="token punctuation">,</span>title<span class="token operator">:</span><span class="token string">&#39;\u6D88\u606F002&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token string">&#39;003&#39;</span><span class="token punctuation">,</span>title<span class="token operator">:</span><span class="token string">&#39;\u6D88\u606F003&#39;</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>
<span class="token operator">&lt;</span>li v-for<span class="token operator">=</span><span class="token string">&quot;m in messageList&quot;</span> :key<span class="token operator">=</span><span class="token string">&quot;m.id&quot;</span><span class="token operator">&gt;</span>
    //\u8DF3\u8F6C\u8DEF\u7531\u5E76\u643A\u5E26query\u53C2\u6570\uFF0Cto\u7684\u5B57\u7B26\u4E32\u5199\u6CD5
    <span class="token operator">&lt;</span>router-link :to<span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span>/home/message/detail?id<span class="token operator">=</span>$<span class="token punctuation">{</span>m.id<span class="token punctuation">}</span><span class="token operator">&amp;</span><span class="token assign-left variable">title</span><span class="token operator">=</span>$<span class="token punctuation">{</span>m.title<span class="token punctuation">}</span><span class="token variable">\`</span></span>&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>m.title<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/router-link<span class="token operator">&gt;</span>
    

    //\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5BF9\u8C61\u7684\u65B9\u5F0F\u4F20\u9012\u53C2\u6570
    <span class="token operator">&lt;</span>router-link :to<span class="token operator">=</span><span class="token string">&quot;{
        path:&#39;/home/message/detail&#39;,
        query:{
            id:m.id,
            title:m.title
        }
    }&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span>m.title<span class="token punctuation">}</span><span class="token punctuation">}</span>

    <span class="token operator">&lt;</span>/router-link<span class="token operator">&gt;</span>


    // \u4F7F\u7528\u547D\u540D\u8DEF\u7531
    <span class="token operator">&lt;</span>router-link :to<span class="token operator">=</span><span class="token string">&quot;{
        name:&#39;detail&#39;,
        query:{
            id:m.id,
            title:m.title
        }
    }&quot;</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span><span class="token punctuation">{</span>m.title<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>/router-link<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/li<span class="token operator">&gt;</span>
</code></pre></div><p>\u4E09\u79CD\u65B9\u5F0F\u4EFB\u9009</p></li><li><p>2 \u7F16\u7A0B\u5F0F\u5BFC\u822A\u65B9\u5F0F</p><p>\u4F7F\u7528 <code>this.$route.push</code> \u6216 <code>this.$route.replace</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5E26\u67E5\u8BE2\u53C2\u6570\uFF0C\u53D8\u6210 /home/message/detail?id=&#39;001&amp;title=&#39;\u6D88\u606F001&#39;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>paht<span class="token operator">:</span><span class="token string">&#39;/home/message/detail&#39;</span><span class="token punctuation">,</span>query<span class="token operator">:</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span>m<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    title<span class="token operator">:</span>m<span class="token punctuation">.</span>title
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>query<span class="token operator">:</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span>m<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    title<span class="token operator">:</span>m<span class="token punctuation">.</span>title
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>paht<span class="token operator">:</span><span class="token string">&#39;/home/message/detail&#39;</span><span class="token punctuation">,</span>query<span class="token operator">:</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span>m<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    title<span class="token operator">:</span>m<span class="token punctuation">.</span>title
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>query<span class="token operator">:</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span>m<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    title<span class="token operator">:</span>m<span class="token punctuation">.</span>title
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ul><p>\u83B7\u53D6\u53C2\u6570\u90FD\u662F\u4E00\u6837\u7684</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id
$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title
</code></pre></div><h3 id="params\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#params\u65B9\u5F0F" aria-hidden="true">#</a> params\u65B9\u5F0F</h3><p><code>params</code> \u65B9\u5F0F\u548C <code>query</code> \u7C7B\u4F3C\uFF0C\u4E5F\u5305\u542B\u4E24\u79CD\u65B9\u5F0F\uFF1A<code>&lt;router-link&gt;</code> \u548C \u7F16\u7A0B\u5F0F\u5BFC\u822A\u3002</p><p>\u9996\u5148\u8981\u5728\u8DEF\u7531\u914D\u7F6E\u4E2D\u4F7F\u7528\u5360\u4F4D\u7B26 <code>:</code> \u63A5\u6536params\u53C2\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span><span class="token string">&#39;/message&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span>Mesaage<span class="token punctuation">,</span>
            children<span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span>
                    component<span class="token operator">:</span>Detail<span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol><li><p><code>&lt;router-link&gt;</code> \u65B9\u5F0F\u4F20\u9012\u53C2\u6570\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u76F4\u63A5\u5728\u8DEF\u5F84\u540E\u9762\u5199\u53C2\u6570\uFF0C\u4F1A\u5C06 666\u4F20\u9012\u7ED9id\uFF0C\u4F60\u597D\u4F20\u9012\u7ED9 title</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token string">&quot;/home/message/detail/666/\u4F60\u597D&quot;</span><span class="token operator">&gt;</span>\u8DF3\u8F6C<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>

<span class="token comment">// \u5BF9\u8C61\u5199\u6CD5</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link 
    <span class="token operator">:</span>to<span class="token operator">=</span>&quot;<span class="token punctuation">{</span>
        name<span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
        params<span class="token operator">:</span><span class="token punctuation">{</span>
            id<span class="token operator">:</span><span class="token number">666</span><span class="token punctuation">,</span>
            title<span class="token operator">:</span><span class="token string">&#39;\u4F60\u597D&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>&quot;
<span class="token operator">&gt;</span>\u8DF3\u8F6C
<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre></div><p><strong><div style="color:red;">\u6CE8\u610F\uFF1A</div></strong></p><p>\u8FD9\u91CC\u548C <code>query</code> \u6709\u533A\u522B\uFF0C<code>query</code> \u4F20\u9012\u53C2\u6570\uFF0C\u4F7F\u7528to\u7684\u5BF9\u8C61\u5199\u6CD5\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>path</code> \u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>name</code>\u3002</p><p>\u4F46\u662F\u5728\u4F7F\u7528 <code>params</code> \u4F20\u9012\u65B9\u5F0F\uFF0C\u4F7F\u7528 <code>to</code> \u5C5E\u6027\u7684\u5BF9\u8C61\u5199\u6CD5\u65F6\uFF0C\u53EA\u80FD\u4F7F\u7528 <code>name</code> \u4E0D\u80FD\u4F7F\u7528 <code>path</code> \u5426\u5219\u4E0D\u751F\u6548\u3002\u540C\u6837\u7684\u89C4\u5219\u4E5F\u9002\u7528\u4E8E <code>\u7F16\u7A0B\u5F0F\u5BFC\u822A</code>\u3002</p></li><li><p>\u7F16\u7A0B\u5F0F\u5BFC\u822A\u65B9\u5F0F\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>id<span class="token operator">=</span><span class="token number">666</span>
title<span class="token operator">=</span><span class="token string">&quot;\u4F60\u597D&quot;</span>
<span class="token comment">// \u76F4\u63A5\u5728\u8DEF\u5F84\u540E\u9762\u5199\u53C2\u6570\uFF0C\u4F1A\u5C06 666\u4F20\u9012\u7ED9id\uFF0C\u4F60\u597D\u4F20\u9012\u7ED9 title</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>path<span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/home/message/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>path<span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/home/message/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>&lt;router-link&gt;</code> \u6807\u7B7E\u7684 <code>to</code> \u5C5E\u6027\u7684\u5BF9\u8C61\u5199\u6CD5\u89C4\u5219\uFF0C\u5728\u7F16\u7A0B\u5F0F\u5BFC\u822A\u4E2D\u4E00\u6837\u9002\u7528</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">&#39;666&#39;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u4F60\u597D&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">&#39;666&#39;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u4F60\u597D&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u4E0D\u751F\u6548</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/home/message/detail&#39;</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">&#39;666&#39;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u4F60\u597D&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ol><p>\u83B7\u53D6\u53C2\u6570\u7684\u65B9\u6CD5\u90FD\u662F\u4E00\u6837\u7684\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>title
</code></pre></div><h3 id="props-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#props-\u65B9\u5F0F" aria-hidden="true">#</a> props \u65B9\u5F0F</h3><p>\u4E3B\u8981\u6709\u4E09\u79CD\u5199\u6CD5\uFF0C\u6211\u4EEC\u4E00\u4E2A\u4E2A\u6765\u8FDB\u884C\u5206\u6790</p><ol><li><p>props\u503C\u4E3A\u5BF9\u8C61</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span><span class="token string">&#39;/message&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span>Mesaage<span class="token punctuation">,</span>
            children<span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span>
                    component<span class="token operator">:</span>Detail<span class="token punctuation">,</span>
                    props<span class="token operator">:</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">900</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>props\u503C\u4E3A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u4E2D\u6240\u6709\u7684key-value\u7684\u7EC4\u5408\u6700\u7EC8\u90FD\u4F1A\u901A\u8FC7 <code>props</code> \u4F20\u7ED9 <code>Detail</code> \u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u5728\u7EC4\u4EF6\u4E2D\u58F0\u660E <code>props</code> \u5373\u53EF</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// Detail \u7EC4\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;Detail&#39;</span><span class="token punctuation">,</span>

    props<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment">// a = 900</span>

    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u592A\u7075\u6D3B\uFF0C\u5C06\u4F20\u9012\u7684\u6570\u636E\u5199\u6B7B\u4E86\uFF0C\u6240\u4EE5\u4E00\u822C\u4E0D\u7528\u8FD9\u79CD\u65B9\u5F0F</p></li><li><p>props\u503C\u4E3A\u5E03\u5C14\u503C</p><p><code>props</code> \u503C\u5982\u679C\u4E3A true\uFF0C\u5219\u628A\u8DEF\u7531\u6536\u5230\u7684\u6240\u6709 <code>params</code> \u53C2\u6570\u901A\u8FC7 <code>props</code> \u4F20\u7ED9 <code>Detail</code> \u7EC4\u4EF6\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span><span class="token string">&#39;/message&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span>Mesaage<span class="token punctuation">,</span>
            children<span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span>
                    component<span class="token operator">:</span>Detail<span class="token punctuation">,</span>
                    props<span class="token operator">:</span><span class="token boolean">true</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u53C2\u6570\u4F20\u9012\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>id <span class="token operator">=</span> <span class="token number">666</span>
title <span class="token operator">=</span> <span class="token string">&quot;\u4F60\u597D&quot;</span>
<span class="token operator">&lt;</span>router<span class="token operator">-</span>link <span class="token operator">:</span>to<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/message/detail/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>link<span class="token operator">&gt;</span>
</code></pre></div><p><code>Detail</code> \u7EC4\u4EF6\u63A5\u6536\u53C2\u6570\uFF0C\u8FD9\u6837\u5C31\u4E0D\u9700\u8981\u4F7F\u7528 <code>this.$route.params.xxx</code> \u4E86\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;Detail&#39;</span><span class="token punctuation">,</span>

    props<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u79CD\u5199\u6CD5\u76F8\u5BF9\u6BD4\u4E0A\u4E00\u79CD\u4F20\u53C2\u66F4\u4E3A\u7B80\u4ECB\u7075\u6D3B <div style="color:red;">\u4F46\u662F\u53EA\u80FD\u4F5C\u7528\u4E8Eparams\u7C7B\u578B\u7684\u53C2\u6570 \u65E0\u6CD5\u5BF9query\u7C7B\u578B\u7684\u53C2\u6570\u8D77\u4F5C\u7528</div></p></li><li><p>props\u503C\u4E3A\u51FD\u6570</p><p>\u5982\u679C <code>props</code> \u4E3A\u51FD\u6570\uFF0C\u90A3\u4E48\u8BE5\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u6BCF\u4E00\u7EC4 <code>key-value</code> \u90FD\u4F1A\u901A\u8FC7props\u4F20\u7ED9Detail\u7EC4\u4EF6</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span><span class="token string">&#39;/message&#39;</span><span class="token punctuation">,</span>
            component<span class="token operator">:</span>Mesaage<span class="token punctuation">,</span>
            children<span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    name<span class="token operator">:</span><span class="token string">&#39;xiangqing&#39;</span><span class="token punctuation">,</span>
                    path<span class="token operator">:</span><span class="token string">&#39;detail/:id/:title&#39;</span><span class="token punctuation">,</span>
                    component<span class="token operator">:</span>Detail<span class="token punctuation">,</span>
                    <span class="token function">props</span><span class="token punctuation">(</span><span class="token parameter">$route</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token punctuation">{</span>
                            id<span class="token operator">:</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
                            title<span class="token operator">:</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
                            <span class="token comment">// \u8FD8\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E9B\u522B\u7684\u6570\u636E</span>
                            a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                            b<span class="token operator">:</span><span class="token string">&#39;hello&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>props\u51FD\u6570\u4F1A\u81EA\u52A8\u8C03\u7528\u5E76\u63D0\u4F9B\u4E00\u4E2A <code>$route</code> \u53C2\u6570 \u53EF\u4EE5\u901A\u8FC7 <code>$route</code> \u6765\u83B7\u53D6\u60F3\u8981\u7684\u6570\u636E\u4F20\u9012\u7ED9\u7EC4\u4EF6\u3002</p><p>\u7EC4\u4EF6\u5185\u90E8\u4F7F\u7528props\u63A5\u6536\u53C2\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&#39;Detail&#39;</span><span class="token punctuation">,</span>
    props<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u79CD\u65B9\u5F0F\u4F20\u9012\u6570\u636E\u66F4\u4E3A\u7075\u6D3B \u901A\u8FC7\u51FD\u6570\u7684 <code>$route</code> \u53C2\u6570\u6765\u83B7\u53D6\u9700\u8981\u7684\u6570\u636E\u4F20\u9012\u7ED9\u7EC4\u4EF6\uFF0C\u53E6\u5916\u8FD8\u53EF\u4EE5\u643A\u5E26\u4E00\u4E9B\u5176\u4ED6\u6570\u636E\u3002\u901A\u8FC7 <code>$route</code> \u53EF\u4EE5\u83B7\u53D6 <code>params</code> \u548C <code>query</code> \u4E24\u79CD\u5F62\u5F0F\u7684\u53C2\u6570\uFF0C\u76F8\u5BF9\u524D\u4E24\u79CD\u65B9\u5F0F\u6765\u8BF4\u529F\u80FD\u66F4\u52A0\u7684\u5F3A\u5927</p></li></ol>`,41);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
