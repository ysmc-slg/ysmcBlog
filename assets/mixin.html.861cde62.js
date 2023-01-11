import{e as n}from"./app.3057c0d5.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h1 id="\u6DF7\u5165-mixin" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5165-mixin" aria-hidden="true">#</a> \u6DF7\u5165(Mixin)</h1><h2 id="\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6982\u5FF5" aria-hidden="true">#</a> \u6982\u5FF5</h2><p>\u5173\u4E8E\u6DF7\u5165\uFF0C\u5B98\u7F51\u662F\u8FD9\u6837\u8BF4\u7684\uFF1A</p><p>\u6DF7\u5165 (mixin) \u63D0\u4F9B\u4E86\u4E00\u79CD\u975E\u5E38\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u6765\u5206\u53D1 Vue \u7EC4\u4EF6\u4E2D\u7684\u53EF\u590D\u7528\u529F\u80FD\u3002\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u7EC4\u4EF6\u9009\u9879\u3002\u5F53\u7EC4\u4EF6\u4F7F\u7528\u6DF7\u5165\u5BF9\u8C61\u65F6\uFF0C\u6240\u6709\u6DF7\u5165\u5BF9\u8C61\u7684\u9009\u9879\u5C06\u88AB\u201C\u6DF7\u5408\u201D\u8FDB\u5165\u8BE5\u7EC4\u4EF6\u672C\u8EAB\u7684\u9009\u9879\u3002</p><p>\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u5982\u679C\u6709\u4E24\u4E2A\u76F8\u4F3C\u7684\u7EC4\u4EF6\uFF0C\u529F\u80FD\u57FA\u672C\u662F\u4E00\u6837\u7684\uFF0C\u6B64\u65F6\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>\u6DF7\u5165</code> \u5C06\u76F8\u540C\u7684\u4EE3\u7801\u62BD\u79BB\u51FA\u6765\u3002</p><p>\u6DF7\u5165\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF1A\u5C40\u90E8\u6DF7\u5165\u548C\u5168\u5C40\u6DF7\u5165\u3002</p><h2 id="\u5C40\u90E8\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u6DF7\u5165" aria-hidden="true">#</a> \u5C40\u90E8\u6DF7\u5165</h2><p>\u987E\u540D\u601D\u4E49\uFF0C<strong>\u5C40\u90E8\u6DF7\u5165\u5FC5\u987B\u5F15\u5165\u6DF7\u5165\u5BF9\u8C61\u624D\u80FD\u4F7F\u7528\uFF0C\u5E76\u4E14\u53EA\u6709\u5728\u5F15\u5165\u4E86\u6DF7\u5165\u5730\u5411\u7684\u7EC4\u4EF6\u4E2D\u624D\u6709\u6548</strong>\u3002</p><p>\u5C06\u7EC4\u4EF6\u516C\u5171\u7684\u90E8\u5206\u62BD\u79BB\u51FA\u6765\u6700\u4E3A\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u6570\u636E</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			message<span class="token operator">:</span> <span class="token string">&#39;\u6211\u662F\u6DF7\u5165&#39;</span><span class="token punctuation">,</span>
			foo<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">//\u751F\u547D\u5468\u671F</span>
	<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DF7\u5165\u7684created\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">// \u65B9\u6CD5</span>
	methods<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DF7\u5165\u7684foo2\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DF7\u5165\u7684conflicting\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\u5C40\u90E8\u6DF7\u5165</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
		{{message}}
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> mixin <span class="token keyword">from</span> <span class="token string">&#39;./mixin&#39;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		name<span class="token operator">:</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">//\u5C40\u90E8\u6DF7\u5165</span>
    	mixins<span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>

		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				message<span class="token operator">:</span> <span class="token string">&#39;\u6211\u662FAPP&#39;</span><span class="token punctuation">,</span>
				bar<span class="token operator">:</span> <span class="token string">&#39;def&#39;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u7684created\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bar2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		methods<span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">bar2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u7684bar2\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u7684conflicting\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6DFB\u52A0\u4E00\u4E2A\u914D\u7F6E\u9879 <code>mixins</code>\uFF0C\u8FD9\u5C31\u662F\u5C40\u90E8\u6DF7\u5165\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u6DF7\u5165\u7528 <code>,</code> \u9694\u5F00</p><h2 id="\u9009\u9879\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u5408\u5E76" aria-hidden="true">#</a> \u9009\u9879\u5408\u5E76</h2><ol><li><p>\u5F53\u7EC4\u4EF6\u548C\u6DF7\u5165\u5BF9\u8C61\u542B\u6709\u540C\u540D\u9009\u9879\u65F6\uFF0C\u8FD9\u4E9B\u9009\u9879\u5C06\u4EE5\u6070\u5F53\u7684\u65B9\u5F0F\u8FDB\u884C\u201C\u5408\u5E76\u201D\u3002\u5E76\u5728\u53D1\u751F\u51B2\u7A81\u65F6\u4EE5\u7EC4\u4EF6\u6570\u636E\u4F18\u5148\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u6570\u636E</span>
	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			message<span class="token operator">:</span> <span class="token string">&#39;\u6211\u662F\u6DF7\u5165&#39;</span><span class="token punctuation">,</span>
			foo<span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">//\u5C40\u90E8\u6DF7\u5165</span>
	mixins<span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>

	<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			message<span class="token operator">:</span> <span class="token string">&#39;\u6211\u662FAPP&#39;</span><span class="token punctuation">,</span>
			bar<span class="token operator">:</span> <span class="token string">&#39;def&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED3\u679C\uFF1A</span>
bar<span class="token operator">:</span> <span class="token string">&quot;def&quot;</span>
foo<span class="token operator">:</span> <span class="token string">&quot;abc&quot;</span>
message<span class="token operator">:</span> <span class="token string">&quot;\u6211\u662FAPP&quot;</span>
</code></pre></div></li><li><p>\u540C\u540D\u94A9\u5B50\u51FD\u6570\u5C06\u5408\u5E76\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u56E0\u6B64\u90FD\u5C06\u88AB\u8C03\u7528\u3002\u53E6\u5916\uFF0C<strong>\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u5C06\u5728\u7EC4\u4EF6\u81EA\u8EAB\u94A9\u5B50\u4E4B\u524D\u8C03\u7528</strong>\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token comment">//\u751F\u547D\u5468\u671F</span>
	<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DF7\u5165\u7684created\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">//\u5C40\u90E8\u6DF7\u5165</span>
mixins<span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>

	<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u7684created\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7ED3\u679C</span>
\u6DF7\u5165\u7684created\u88AB\u8C03\u7528

\u7EC4\u4EF6\u7684created\u88AB\u8C03\u7528
</code></pre></div></li><li><p>\u503C\u4E3A\u5BF9\u8C61\u7684\u9009\u9879\uFF0C\u4F8B\u5982 <code>methods</code>\u3001<code>components</code> \u548C <code>directives</code>\uFF0C\u5C06\u88AB\u5408\u5E76\u4E3A\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002\u4E24\u4E2A\u5BF9\u8C61\u952E\u540D\u51B2\u7A81\u65F6\uFF0C\u53D6\u7EC4\u4EF6\u5BF9\u8C61\u7684\u952E\u503C\u5BF9\u3002</p></li></ol><div class="language-javascript ext-js"><pre class="language-javascript"><code>  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  	<span class="token comment">// \u65B9\u6CD5</span>
  	methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  		<span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DF7\u5165\u7684foo2\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
  		<span class="token punctuation">}</span><span class="token punctuation">,</span>
  		<span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DF7\u5165\u7684conflicting\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
  		<span class="token punctuation">}</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  </span><span class="token template-punctuation string">\`</span></span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>js
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  	name<span class="token operator">:</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  	<span class="token comment">//\u5C40\u90E8\u6DF7\u5165</span>
  		mixins<span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>

  	<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bar2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  	<span class="token punctuation">}</span><span class="token punctuation">,</span>
  	methods<span class="token operator">:</span> <span class="token punctuation">{</span>
  		<span class="token function">bar2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u7684bar2\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
  		<span class="token punctuation">}</span><span class="token punctuation">,</span>
  		<span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u7684conflicting\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
  		<span class="token punctuation">}</span>
  	<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7ED3\u679C</span>
  \u7EC4\u4EF6\u7684bar2\u88AB\u8C03\u7528
  \u6DF7\u5165\u7684foo2\u88AB\u8C03\u7528
  \u7EC4\u4EF6\u7684conflicting\u88AB\u8C03\u7528
</code></pre></div><h2 id="\u5168\u5C40\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6DF7\u5165" aria-hidden="true">#</a> \u5168\u5C40\u6DF7\u5165</h2><p>\u5168\u5C40\u6DF7\u5165\u5C31\u7B80\u5355\u7684\u591A\uFF0C\u53EA\u9700\u8981\u5728 <code>main.js</code> \u5F15\u5165 <code>mixin.js</code>\uFF0C\u7136\u540E\u4F7F\u7528 <code>Vue.mixin()</code> \u5373\u53EF\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>mixin<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mixin&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>mixin<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong></p><p>\u5168\u5C40\u6DF7\u5165\u5B8C\u6210\u540E\uFF0C\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u4F1A\u88AB\u6DFB\u52A0\uFF0C\u6240\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u4E00\u822C\u4E0D\u4F1A\u4F7F\u7528</p>`,21);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
