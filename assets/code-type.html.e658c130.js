import{r as o,c as e,a as n,d as t,F as c,e as s,b as p,o as l}from"./app.b83ff720.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const r={},i=s('<h1 id="\u7C7B\u578B\u5224\u65AD\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5224\u65AD\u5904\u7406" aria-hidden="true">#</a> \u7C7B\u578B\u5224\u65AD\u5904\u7406</h1><h2 id="\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD" aria-hidden="true">#</a> \u5224\u65AD</h2><h3 id="_1-is-\u6307\u5B9A\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-is-\u6307\u5B9A\u7C7B\u578B" aria-hidden="true">#</a> 1. is\uFF08\u6307\u5B9A\u7C7B\u578B\uFF09</h3><p><strong>FROM</strong></p>',4),k={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},d=p("30 seconds of code (Type)"),g=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">is</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> val<span class="token punctuation">.</span>constructor <span class="token operator">===</span> type<span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">is</span><span class="token punctuation">(</span>Array<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>ArrayBuffer<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>Map<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>RegExp<span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>Set<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>WeakMap<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>WeakSet<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>String<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>String<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>Number<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>Number<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">is</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="_2-isarraylike-\u7C7B\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-isarraylike-\u7C7B\u6570\u7EC4" aria-hidden="true">#</a> 2. isArrayLike\uFF08\u7C7B\u6570\u7EC4\uFF09</h3><p><strong>FROM</strong></p>`,6),f={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},m=p("30 seconds of code (Type)"),v=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isArrayLike</span> <span class="token operator">=</span> <span class="token parameter">obj</span> <span class="token operator">=&gt;</span> obj <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isArrayLike</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isArrayLike</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.className&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isArrayLike</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isArrayLike</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="_3-typeof" tabindex="-1"><a class="header-anchor" href="#_3-typeof" aria-hidden="true">#</a> 3. typeof</h3><p><strong>FROM</strong></p>`,6),h={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},y=p("30 seconds of code (Type)"),_=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isBoolean</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">isFunction</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">isString</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">isSymbol</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">isUndefined</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isBoolean</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isBoolean</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isSymbol</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isUndefined</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="_4-isempty" tabindex="-1"><a class="header-anchor" href="#_4-isempty" aria-hidden="true">#</a> 4. isEmpty</h3><p><strong>FROM</strong></p>`,6),b={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},j=p("30 seconds of code (Type)"),w=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> val <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">||</span> val<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true - type is not considered a collection</span>
<span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true - type is not considered a collection</span>
</code></pre></div><h3 id="_5-isnil" tabindex="-1"><a class="header-anchor" href="#_5-isnil" aria-hidden="true">#</a> 5. isNil</h3><p><strong>FROM</strong></p>`,6),x={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},N=p("30 seconds of code (Type)"),O=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isNil</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> val <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isNil</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isNil</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isNil</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="_6-isnull-isundefined" tabindex="-1"><a class="header-anchor" href="#_6-isnull-isundefined" aria-hidden="true">#</a> 6. isNull/isUndefined</h3><p><strong>FROM</strong></p>`,6),E={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},S=p("30 seconds of code (Type)"),F=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isNull</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> val <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">isUndefined</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> val <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isUndefined</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><h3 id="_7-isnumber" tabindex="-1"><a class="header-anchor" href="#_7-isnumber" aria-hidden="true">#</a> 7. isNumber</h3><p><strong>FROM</strong></p>`,6),A={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},T=p("30 seconds of code (Type)"),M=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isNumber</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">===</span> val<span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="_8-isobjectlike" tabindex="-1"><a class="header-anchor" href="#_8-isobjectlike" aria-hidden="true">#</a> 8. isObjectLike</h3><p><strong>FROM</strong></p>`,6),L={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},U=p("30 seconds of code (Type)"),P=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isObjectLike</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> val <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isObjectLike</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isObjectLike</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isObjectLike</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isObjectLike</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="_9-isplainobject-\u666E\u901A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_9-isplainobject-\u666E\u901A\u5BF9\u8C61" aria-hidden="true">#</a> 9. isPlainObject\uFF08\u666E\u901A\u5BF9\u8C61\uFF09</h3><p><strong>FROM</strong></p>`,6),C={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},q=p("30 seconds of code (Type)"),I=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isPlainObject</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token operator">!</span>val <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> val<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Object<span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isPlainObject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="_10-isvalidjson-json" tabindex="-1"><a class="header-anchor" href="#_10-isvalidjson-json" aria-hidden="true">#</a> 10. isValidJSON\uFF08JSON\uFF09</h3><p><strong>FROM</strong></p>`,6),R={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},X=p("30 seconds of code (Type)"),B=s(`<p><strong>DETAIL\uFF1A</strong></p><p>\u5224\u65AD\u662F\u5426\u4E3A\u6709\u6548 JSON\u3002\u5229\u7528 <code>try...catch</code> \u6765\u5904\u7406\u9519\u8BEF\u3002</p><p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isValidJSON</span> <span class="token operator">=</span> <span class="token parameter">str</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">isValidJSON</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;:&quot;Adam&quot;,&quot;age&quot;:20}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isValidJSON</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;:&quot;Adam&quot;,age:&quot;20&quot;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">isValidJSON</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div><h2 id="\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406" aria-hidden="true">#</a> \u5904\u7406</h2><h3 id="_1-gettype-\u83B7\u53D6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-gettype-\u83B7\u53D6\u7C7B\u578B" aria-hidden="true">#</a> 1. getType\uFF08\u83B7\u53D6\u7C7B\u578B\uFF09</h3><p><strong>FROM</strong></p>`,9),V={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},J=p("30 seconds of code (Type)"),W=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getType</span> <span class="token operator">=</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>v <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">:</span> v <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">&#39;null&#39;</span> <span class="token operator">:</span> v<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">getType</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Set&#39;</span>
</code></pre></div><h3 id="_2-castarray-\u8F6C\u4E3A\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#_2-castarray-\u8F6C\u4E3A\u6570\u7EC4" aria-hidden="true">#</a> 2. castArray\uFF08\u8F6C\u4E3A\u6570\u7EC4\uFF09</h3><p><strong>FROM</strong></p>`,6),D={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},z=p("30 seconds of code (Type)"),G=s(`<p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">castArray</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">?</span> val <span class="token operator">:</span> <span class="token punctuation">[</span>val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">castArray</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;foo&#39;]</span>
<span class="token function">castArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1]</span>
</code></pre></div><h3 id="_3-coalescefactory-\u6307\u5B9A\u8FD4\u56DE\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-coalescefactory-\u6307\u5B9A\u8FD4\u56DE\u7C7B\u578B" aria-hidden="true">#</a> 3. coalesceFactory\uFF08\u6307\u5B9A\u8FD4\u56DE\u7C7B\u578B\uFF09</h3><p><strong>FROM</strong></p>`,6),H={href:"https://www.30secondsofcode.org/js/t/type/a/1",target:"_blank",rel:"noopener noreferrer"},K=p("30 seconds of code (Type)"),Q=s(`<p><strong>DETAIL\uFF1A</strong></p><p>\u81EA\u5B9A\u5224\u65AD\u51FD\u6570\uFF0C<code>includes</code> \u65B9\u6CD5\u679C\u7136\u597D\u7528\u3002</p><p><strong>FUNCTION\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">coalesceFactory</span> <span class="token operator">=</span> <span class="token parameter">valid</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> args<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>valid<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>EXAMPLES\uFF1A</strong></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> customCoalesce <span class="token operator">=</span> <span class="token function">coalesceFactory</span><span class="token punctuation">(</span><span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">customCoalesce</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Waldo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Waldo&quot;</span>
</code></pre></div>`,6);function Y(Z,$){const a=o("OutboundLink");return l(),e(c,null,[i,n("p",null,[n("a",k,[d,t(a)])]),g,n("p",null,[n("a",f,[m,t(a)])]),v,n("p",null,[n("a",h,[y,t(a)])]),_,n("p",null,[n("a",b,[j,t(a)])]),w,n("p",null,[n("a",x,[N,t(a)])]),O,n("p",null,[n("a",E,[S,t(a)])]),F,n("p",null,[n("a",A,[T,t(a)])]),M,n("p",null,[n("a",L,[U,t(a)])]),P,n("p",null,[n("a",C,[q,t(a)])]),I,n("p",null,[n("a",R,[X,t(a)])]),B,n("p",null,[n("a",V,[J,t(a)])]),W,n("p",null,[n("a",D,[z,t(a)])]),G,n("p",null,[n("a",H,[K,t(a)])]),Q],64)}var an=u(r,[["render",Y]]);export{an as default};