import{e as n}from"./app.b83ff720.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},p=n(`<h1 id="\u65CB\u8F6C\u56FE\u50CF" tabindex="-1"><a class="header-anchor" href="#\u65CB\u8F6C\u56FE\u50CF" aria-hidden="true">#</a> \u65CB\u8F6C\u56FE\u50CF</h1><p>\u8981\u6C42\u539F\u5730\u65CB\u8F6C\u3002</p><h2 id="\u4EA4\u6362" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u6362" aria-hidden="true">#</a> \u4EA4\u6362</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">rotate</span><span class="token punctuation">(</span>matrix<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length

  <span class="token comment">// \u753B\u56FE\u627E\u89C4\u5F8B</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> matrix<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function t(o,c){return p}var l=a(s,[["render",t]]);export{l as default};