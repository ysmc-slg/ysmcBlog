import{e as n}from"./app.b83ff720.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="\u6700\u957F\u7279\u6B8A\u5E8F\u5217-i" tabindex="-1"><a class="header-anchor" href="#\u6700\u957F\u7279\u6B8A\u5E8F\u5217-i" aria-hidden="true">#</a> \u6700\u957F\u7279\u6B8A\u5E8F\u5217 \u2160</h1><p>\u8111\u7B4B\u6025\u8F6C\u5F2F\u3002</p><h2 id="\u957F\u5EA6\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u957F\u5EA6\u6BD4\u8F83" aria-hidden="true">#</a> \u957F\u5EA6\u6BD4\u8F83</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">findLUSlength</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>

  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>length<span class="token punctuation">,</span> b<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function p(e,o){return t}var i=a(s,[["render",p]]);export{i as default};