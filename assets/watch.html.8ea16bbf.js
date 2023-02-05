import{e as n}from"./app.5b4ea5e7.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="watch-\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#watch-\u76D1\u542C" aria-hidden="true">#</a> watch(\u76D1\u542C)</h1><h2 id="\u76D1\u89C6\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u76D1\u89C6\u5C5E\u6027" aria-hidden="true">#</a> \u76D1\u89C6\u5C5E\u6027</h2><p>\u901A\u8FC7 watch \u6765\u54CD\u5E94\u6570\u636E\u7684\u53D8\u5316\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>\u5929\u6C14\u6848\u4F8B_\u76D1\u89C6\u5C5E\u6027<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- \u5F15\u5165Vue --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../js/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u4ECA\u5929\u5929\u6C14\u5F88{{info}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeWeather<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362\u5929\u6C14<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			el<span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			data<span class="token operator">:</span><span class="token punctuation">{</span>
				isHot<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			computed<span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isHot <span class="token operator">?</span> <span class="token string">&#39;\u708E\u70ED&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;\u51C9\u723D&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			methods<span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token function">changeWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>isHot <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isHot
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			watch<span class="token operator">:</span><span class="token punctuation">{</span>
				isHot<span class="token operator">:</span><span class="token punctuation">{</span>
					immediate<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> 
					<span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isHot\u88AB\u4FEE\u6539\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F53 <code>isHot</code> \u53D1\u751F\u6539\u53D8\u4E86\uFF0C\u4F1A\u8C03\u7528 <code>handler</code> \u65B9\u6CD5\u3002\u4F1A\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u4FEE\u6539\u540E\u7684\u53C2\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u4FEE\u6539\u524D\u7684\u53C2\u6570\u3002</p><p>immediate\uFF1Atrue \u7684\u542B\u4E49\u662F\uFF0C\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u5C31\u8C03\u7528\u4E00\u6B21 <code>handler</code></p><p><strong>\u6CE8\u610F\uFF1A</strong></p><ol><li>\u5F53\u88AB\u76D1\u89C6\u7684\u5C5E\u6027\u53D8\u5316\u65F6, \u56DE\u8C03\u51FD\u6570\u81EA\u52A8\u8C03\u7528, \u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\u3002</li><li>\u76D1\u89C6\u7684\u5C5E\u6027\u5FC5\u987B\u5B58\u5728\uFF0C\u624D\u80FD\u8FDB\u884C\u76D1\u63A7\u3002</li></ol><p>\u4F7F\u7528 vm.$watch \u4E5F\u80FD\u8FDB\u884C\u76D1\u542C</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			el<span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			data<span class="token operator">:</span><span class="token punctuation">{</span>
				isHot<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			computed<span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isHot <span class="token operator">?</span> <span class="token string">&#39;\u708E\u70ED&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;\u51C9\u723D&#39;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			methods<span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token function">changeWeather</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>isHot <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isHot
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// \u5199\u5728 vue \u5B9E\u4F8B\u5916\u9762</span>
		vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;isHot&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
			immediate<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isHot\u88AB\u4FEE\u6539\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u6DF1\u5EA6\u76D1\u89C6" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u76D1\u89C6" aria-hidden="true">#</a> \u6DF1\u5EA6\u76D1\u89C6</h2><p>Vue\u4E2D\u7684 <code>watch</code> \u9ED8\u8BA4\u4E0D\u68C0\u6D4B\u5BF9\u8C61\u5185\u90E8\u503C\u7684\u6539\u53D8\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>a\u7684\u503C\u662F:{{numbers.a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numbers.a++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u6211\u8BA9a+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			el<span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			data<span class="token operator">:</span><span class="token punctuation">{</span>
				isHot<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
				numbers<span class="token operator">:</span><span class="token punctuation">{</span>
					a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					b<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					c<span class="token operator">:</span><span class="token punctuation">{</span>
						d<span class="token operator">:</span><span class="token punctuation">{</span>
							e<span class="token operator">:</span><span class="token number">100</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			watch<span class="token operator">:</span><span class="token punctuation">{</span>
				 <span class="token comment">//\u76D1\u89C6\u591A\u7EA7\u7ED3\u6784\u4E2D\u67D0\u4E2A\u5C5E\u6027\u7684\u53D8\u5316</span>
				 numbers<span class="token operator">:</span><span class="token punctuation">{</span>
				 	<span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				 		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a\u88AB\u6539\u53D8\u4E86&#39;</span><span class="token punctuation">)</span>
				 	<span class="token punctuation">}</span>
				 <span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u70B9\u51FB\u6309\u94AE\uFF0C\u53EA\u4F1A\u8BA9 a \u7684\u503C +1\uFF0C\u5E76\u4E0D\u4F1A\u89E6\u53D1<code>handler</code>\u3002</p><p>\u6B64\u65F6\u5982\u679C\u60F3\u8981\uFF0C\u5728\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1 <code>handler</code> \u5C31\u8981\u4F7F\u7528\u5230\uFF0C\u6DF1\u5EA6\u76D1\u89C6</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>a\u7684\u503C\u662F:{{numbers.a}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>numbers.a++<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u70B9\u6211\u8BA9a+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			el<span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			data<span class="token operator">:</span><span class="token punctuation">{</span>
				isHot<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
				numbers<span class="token operator">:</span><span class="token punctuation">{</span>
					a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					b<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
					c<span class="token operator">:</span><span class="token punctuation">{</span>
						d<span class="token operator">:</span><span class="token punctuation">{</span>
							e<span class="token operator">:</span><span class="token number">100</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			watch<span class="token operator">:</span><span class="token punctuation">{</span>
				 <span class="token comment">//\u76D1\u89C6\u591A\u7EA7\u7ED3\u6784\u4E2D\u67D0\u4E2A\u5C5E\u6027\u7684\u53D8\u5316</span>
				  numbers<span class="token operator">:</span><span class="token punctuation">{</span>
				 	deep<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
				 	<span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				 		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;numbers\u6539\u53D8\u4E86&#39;</span><span class="token punctuation">)</span>
				 	<span class="token punctuation">}</span>
				 <span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u53EA\u9700\u8981\u6DFB\u52A0 <code>deep</code> \u914D\u7F6E\u9879\u5373\u53EF\uFF0C\u6B64\u65F6\u518D\u70B9\u51FB\u6309\u94AE\u5C31\u80FD\u8C03\u7528 <code>handler</code>\u3002</p><h2 id="\u7B80\u5199\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u65B9\u5F0F" aria-hidden="true">#</a> \u7B80\u5199\u65B9\u5F0F</h2><p>\u5982\u679C\u76D1\u89C6\u7684\u5C5E\u6027\uFF0C\u4E0D\u9700\u8981 <code>immediate</code> \u548C <code>deep</code> \u7B49\u914D\u7F6E\u9879\u7684\u8BDD\uFF0C\u53EF\u4EE5\u7B80\u5199\u4E3A\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>watch<span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token function">isHot</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isHot\u88AB\u4FEE\u6539\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre></div><p><code>vm.$watch</code> \u65B9\u5F0F\u4E5F\u53EF\u4EE5\u7B80\u5199\u4E3A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;isHot&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;isHot\u88AB\u4FEE\u6539\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre></div>`,22);function p(o,c){return t}var u=a(s,[["render",p]]);export{u as default};
