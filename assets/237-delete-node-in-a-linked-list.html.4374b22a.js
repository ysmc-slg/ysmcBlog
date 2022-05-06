import{e as n}from"./app.b83ff720.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a> \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9</h1><h2 id="\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362" aria-hidden="true">#</a> \u66FF\u6362</h2><p>\u5165\u53C2\u4E3A\u5220\u9664\u7684\u8282\u70B9\uFF0C\u6240\u4EE5\u65E0\u6CD5\u76F4\u63A5\u5C06\u4E0A\u7EA7\u7684 <code>next</code> \u6307\u5411\u4E0B\u7EA7\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">.</span>val <span class="token operator">=</span> root<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
    root<span class="token punctuation">.</span>next <span class="token operator">=</span> root<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4);function o(e,p){return t}var l=a(s,[["render",o]]);export{l as default};