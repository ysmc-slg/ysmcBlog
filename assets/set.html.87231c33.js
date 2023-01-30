import{e}from"./app.aed51cf8.js";import{_ as t}from"./plugin-vue_export-helper.5a098b48.js";const s={},a=e(`<h1 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Redis set\u5BF9\u5916\u63D0\u4F9B\u7684\u529F\u80FD\u4E0Elist\u7C7B\u4F3C\uFF0C\u662F\u4E00\u4E2A\u5217\u8868\u7684\u529F\u80FD\uFF0C\u7279\u6B8A\u4E4B\u5904\u5728\u4E8Eset\u662F\u53EF\u4EE5<code>\u81EA\u52A8\u6392\u91CD</code>\u7684\uFF0C\u5F53\u4F60\u9700\u8981\u5B58\u50A8\u4E00\u4E2A\u5217\u8868\u6570\u636E\uFF0C\u53C8\u4E0D\u5E0C\u671B\u51FA\u73B0\u91CD\u590D\u6570\u636E\u65F6\uFF0Cset\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\uFF0C\u5E76\u4E14set\u63D0\u4F9B\u4E86<code>\u5224\u65AD\u67D0\u4E2A\u6210\u5458\u662F\u5426\u5728\u4E00\u4E2Aset\u96C6\u5408\u5185</code>\u547D\u4EE4\uFF0C\u8FD9\u4E2A\u4E5F\u662Flist\u6240\u4E0D\u80FD\u63D0\u4F9B\u7684\u3002</p><p>Redis\u7684Set\u662Fstring\u7C7B\u578B\u7684\u65E0\u5E8F\u96C6\u5408\u3002\u5B83\u5E95\u5C42\u5176\u5B9E\u662F\u4E00\u4E2Avalue\u4E3Anull\u7684hash\u8868</p></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><p><strong>sadd</strong></p><div class="language-text ext-text"><pre class="language-text"><code>sadd &lt;key&gt; &lt;member&gt; [member...]
</code></pre></div><p>member\u4E5F\u5C31\u662F\u503C\uFF0C\u53EF\u4EE5\u5199\u591A\u4E2A\u3002</p><p><strong>smembers</strong></p><div class="language-text ext-text"><pre class="language-text"><code>smembers &lt;key&gt;
</code></pre></div><p>\u83B7\u53D6\u4E00\u4E2A key \u4E0B\u6240\u6709\u7684\u5143\u7D20</p><p><img src="https://img.zxqs.top/20230130144203.png" alt="image-20230130144202153"></p><p><strong>srem</strong></p><div class="language-text ext-text"><pre class="language-text"><code>srem &lt;key&gt; &lt;member&gt; [member...]
</code></pre></div><p>\u79FB\u9664\u6307\u5B9A\u7684\u5143\u7D20</p><p><img src="https://img.zxqs.top/20230130154716.png" alt="image-20230130154715654"></p><p><strong>scard</strong></p><div class="language-text ext-text"><pre class="language-text"><code>scard &lt;key&gt;
</code></pre></div><p>\u8FD4\u56DE\u96C6\u5408\u4E2D\u6570\u636E\u7684\u6570\u91CF</p><p><strong>srandmember</strong></p><div class="language-text ext-text"><pre class="language-text"><code>srandmember &lt;key&gt;
</code></pre></div><p>\u968F\u673A\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u4E0D\u5F71\u54CD\u6E90\u96C6\u5408</p><p><strong>spop</strong></p><div class="language-text ext-text"><pre class="language-text"><code>spop &lt;key&gt;
</code></pre></div><p>\u968F\u673A\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u79FB\u51FA\u96C6\u5408</p><p><img src="https://img.zxqs.top/image-20230130225825900.png" alt="image-20230130225825900"></p><p><strong>smove</strong></p><div class="language-text ext-text"><pre class="language-text"><code>smove &lt;source&gt; &lt;destination&gt; &lt;member&gt;
</code></pre></div><p>\u628A source \u96C6\u5408\u4E2D\u7684 member \u79FB\u5230 destination \u96C6\u5408\u4E2D\u53BB</p><p><img src="https://img.zxqs.top/image-20230130230525888.png" alt="image-20230130230525888"></p><p><strong>sdiff</strong></p><div class="language-text ext-text"><pre class="language-text"><code>sdiff &lt;key&gt; [key...]
</code></pre></div><p>\u8FD4\u56DE\u4E24\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6</p><p><strong>sinter</strong></p><div class="language-text ext-text"><pre class="language-text"><code>sinter &lt;key&gt; [key...]
</code></pre></div><p>\u8FD4\u56DE\u4E24\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6</p><p><img src="https://img.zxqs.top/image-20230130231115914.png" alt="image-20230130231115914"></p><p><strong>sunion</strong></p><div class="language-text ext-text"><pre class="language-text"><code>sunion &lt;key&gt; [key...]
</code></pre></div><p>\u6C42\u5E76\u96C6</p><p><img src="https://img.zxqs.top/image-20230130232003699.png" alt="image-20230130232003699"></p><p><strong>sdiffstore</strong></p><div class="language-text ext-text"><pre class="language-text"><code>sdiffstore &lt;destination&gt; &lt;key&gt; [key...]
</code></pre></div><p>\u8FD4\u56DE\u4E24\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6\uFF0C\u4FDD\u5B58\u5728 <code>destination</code> \u96C6\u5408\u4E2D</p><p><img src="https://img.zxqs.top/image-20230130231612533.png" alt="image-20230130231612533"></p><p><strong>sinterstore</strong></p><div class="language-text ext-text"><pre class="language-text"><code>sinterstore &lt;destination&gt; &lt;key&gt; [key...]
</code></pre></div><p>\u8FD4\u56DE\u4E24\u4E2A\u96C6\u5408\u7684\u4EA4\u96C6\uFF0C\u4FDD\u5B58\u5728 <code>destination</code> \u96C6\u5408\u4E2D\u3002</p><p><img src="https://img.zxqs.top/image-20230130231820594.png" alt="image-20230130231820594"></p><p><strong>sunionstore</strong></p><div class="language-text ext-text"><pre class="language-text"><code>sunionstore &lt;destination&gt; &lt;key&gt; [key...]
</code></pre></div><p>\u8FD4\u56DE\u4E24\u4E2A\u96C6\u5408\u7684\u5E76\u96C6\uFF0C\u4FDD\u5B58\u5728 <code>destination</code> \u96C6\u5408\u4E2D\u3002</p><p><img src="https://img.zxqs.top/image-20230130232156575.png" alt="image-20230130232156575"></p>`,51);function g(p,n){return a}var o=t(s,[["render",g]]);export{o as default};
