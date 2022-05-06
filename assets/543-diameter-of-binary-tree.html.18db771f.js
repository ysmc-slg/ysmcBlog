import{e as n}from"./app.b83ff720.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="\u4E8C\u53C9\u6811\u7684\u76F4\u5F84" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u53C9\u6811\u7684\u76F4\u5F84" aria-hidden="true">#</a> \u4E8C\u53C9\u6811\u7684\u76F4\u5F84</h1><p>\u53C2\u8003<a href="./104-maximum-depth-of-binary-tree">\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6</a>\u3002</p><h2 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h2><p>\u6CE8\uFF1A\u4ECE\u6839\u8282\u70B9\u5F00\u59CB\u4E0D\u4E00\u5B9A\u6700\u5927\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">diameterOfBinaryTree</span><span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">const</span> maxDepth <span class="token operator">=</span> <span class="token punctuation">(</span>root<span class="token operator">:</span> TreeNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>

    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>

  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>
</code></pre></div>`,5);function p(o,e){return t}var l=a(s,[["render",p]]);export{l as default};