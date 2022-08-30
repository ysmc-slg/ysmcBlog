import{e as n}from"./app.36e8c4c0.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h1><p>\u63D2\u4EF6\u901A\u5E38\u7528\u6765\u4E3A Vue \u6DFB\u52A0\u5168\u5C40\u529F\u80FD\u3002\u63D2\u4EF6\u7684\u529F\u80FD\u8303\u56F4\u6CA1\u6709\u4E25\u683C\u7684\u9650\u5236\uFF0C\u4E00\u822C\u6709\u4E0B\u9762\u51E0\u79CD\uFF1A</p><ol><li>\u6DFB\u52A0\u5168\u5C40\u65B9\u6CD5\u6216\u8005 <code>property</code>\u3002</li><li>\u6DFB\u52A0\u5168\u5C40\u8D44\u6E90\uFF1A\u81EA\u5B9A\u4E49\u6307\u4EE4/\u8FC7\u6EE4\u5668/\u5168\u5C40\u65B9\u6CD5</li><li>\u901A\u8FC7\u5168\u5C40\u6DF7\u5165\u6765\u6DFB\u52A0\u4E00\u4E9B\u7EC4\u4EF6\u9009\u9879</li><li>\u6DFB\u52A0 Vue \u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u901A\u8FC7\u628A\u4ED6\u4EEC\u6DFB\u52A0\u5230 <code>Vue.prototype</code> \u4E0A\u5B9E\u73B0</li></ol><h2 id="\u5F00\u53D1\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u63D2\u4EF6" aria-hidden="true">#</a> \u5F00\u53D1\u63D2\u4EF6</h2><p>\u63D2\u4EF6\u5FC5\u987B\u66B4\u9732\u4E00\u4E2A <code>insall</code> \u65B9\u6CD5\u3002\u8FD9\u4E2A\u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F <code>Vue</code> \u6784\u9020\u5668\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u53EF\u9009\u7684\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A <code>plugin.js</code></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//\u5168\u5C40\u8FC7\u6EE4\u5668</span>
		Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;mySlice&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//\u5B9A\u4E49\u5168\u5C40\u6307\u4EE4</span>
		Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;fbind&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
			<span class="token comment">//\u6307\u4EE4\u4E0E\u5143\u7D20\u6210\u529F\u7ED1\u5B9A\u65F6</span>
			<span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				element<span class="token punctuation">.</span>value <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//\u6307\u4EE4\u6240\u5728\u5143\u7D20\u88AB\u63D2\u5165\u9875\u9762\u65F6</span>
			<span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				element<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token comment">//\u6307\u4EE4\u6240\u5728\u7684\u6A21\u677F\u88AB\u91CD\u65B0\u89E3\u6790\u65F6</span>
			<span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				element<span class="token punctuation">.</span>value <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//\u5B9A\u4E49\u6DF7\u5165</span>
		Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span>
					x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
					y<span class="token operator">:</span><span class="token number">200</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

		<span class="token comment">//\u7ED9Vue\u539F\u578B\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u65B9\u6CD5</span>
		<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u597D\u554A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u4F7F\u7528\u5C31\u5F88\u7B80\u5355\u4E86\uFF0C\u5728<code>main.js</code> \u4E2D\uFF0C\u901A\u8FC7\u5168\u5C40\u65B9\u6CD5 <code>Vue.use()</code> \u4F7F\u7528\u63D2\u4EF6\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> plugin <span class="token keyword">from</span> <span class="token string">&#39;./plugin&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>plugin<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u63D2\u4EF6\uFF0C\u5176\u4ED6\u7684\u662F\u53EF\u9009\u9879\u3002</p><p><code>Vue.use</code> \u4F1A\u81EA\u52A8\u963B\u6B62\u591A\u6B21\u6CE8\u518C\u76F8\u540C\u63D2\u4EF6\uFF0C\u5C4A\u65F6\u5373\u4F7F\u591A\u6B21\u8C03\u7528\u4E5F\u53EA\u4F1A\u6CE8\u518C\u4E00\u4E2A\u8BE5\u63D2\u4EF6\u3002</p>`,12);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
