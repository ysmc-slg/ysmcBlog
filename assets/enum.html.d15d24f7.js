import{e as n}from"./app.765f6c95.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<h1 id="\u679A\u4E3E\u5E38\u89C1\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u5E38\u89C1\u7684\u7528\u6CD5" aria-hidden="true">#</a> \u679A\u4E3E\u5E38\u89C1\u7684\u7528\u6CD5</h1><h2 id="\u5E38\u91CF\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF\u5B9A\u4E49" aria-hidden="true">#</a> \u5E38\u91CF\u5B9A\u4E49</h2><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">WeekDay</span> <span class="token punctuation">{</span>
    SUN<span class="token punctuation">,</span> MON<span class="token punctuation">,</span> TUE<span class="token punctuation">,</span> WED<span class="token punctuation">,</span> THT<span class="token punctuation">,</span> FRI<span class="token punctuation">,</span> SAT
<span class="token punctuation">}</span>
</code></pre></div><h2 id="swich" tabindex="-1"><a class="header-anchor" href="#swich" aria-hidden="true">#</a> swich</h2><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">WeekDay</span> <span class="token punctuation">{</span>
    SUN<span class="token punctuation">,</span> MON<span class="token punctuation">,</span> TUE<span class="token punctuation">,</span> WED<span class="token punctuation">,</span> THT<span class="token punctuation">,</span> FRI<span class="token punctuation">,</span> SAT
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SelectDay</span><span class="token punctuation">{</span>
    <span class="token class-name">WeekDay</span> weekday <span class="token operator">=</span> <span class="token class-name">WeekDay</span><span class="token punctuation">.</span>SUN<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>weekday<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> SUN<span class="token operator">:</span>
                weekday <span class="token operator">=</span> <span class="token class-name">WeekDay</span><span class="token punctuation">.</span>SUN<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5411\u679A\u4E3E\u6DFB\u52A0\u65B0\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5411\u679A\u4E3E\u6DFB\u52A0\u65B0\u65B9\u6CD5" aria-hidden="true">#</a> \u5411\u679A\u4E3E\u6DFB\u52A0\u65B0\u65B9\u6CD5</h2><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>  
    <span class="token function">RED</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EA2\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">GREEN</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EFF\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">BLANK</span><span class="token punctuation">(</span><span class="token string">&quot;\u767D\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">YELLO</span><span class="token punctuation">(</span><span class="token string">&quot;\u9EC4\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token comment">// \u6210\u5458\u53D8\u91CF  </span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token keyword">int</span> index<span class="token punctuation">;</span>  
    <span class="token comment">// \u6784\u9020\u65B9\u6CD5  </span>
    <span class="token keyword">private</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> index<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token comment">// \u666E\u901A\u65B9\u6CD5  </span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Color</span> c <span class="token operator">:</span> <span class="token class-name">Color</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">if</span> <span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token keyword">return</span> c<span class="token punctuation">.</span>name<span class="token punctuation">;</span>  
            <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token comment">// get set \u65B9\u6CD5  </span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> index<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> index<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre></div><h2 id="\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u5B9E\u73B0\u63A5\u53E3</h2><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Behaviour</span> <span class="token punctuation">{</span> 
    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Color</span> <span class="token keyword">implements</span> <span class="token class-name">Behaviour</span><span class="token punctuation">{</span> 
    <span class="token function">RED</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EA2\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">GREEN</span><span class="token punctuation">(</span><span class="token string">&quot;\u7EFF\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">BLANK</span><span class="token punctuation">(</span><span class="token string">&quot;\u767D\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">YELLO</span><span class="token punctuation">(</span><span class="token string">&quot;\u9EC4\u8272&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// \u6210\u5458\u53D8\u91CF </span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span> 
    <span class="token keyword">private</span> <span class="token keyword">int</span> index<span class="token punctuation">;</span> 
    <span class="token comment">// \u6784\u9020\u65B9\u6CD5 </span>
    <span class="token keyword">private</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> index<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
    <span class="token comment">//\u63A5\u53E3\u65B9\u6CD5 </span>
    <span class="token annotation punctuation">@Override</span> 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
    <span class="token comment">//\u63A5\u53E3\u65B9\u6CD5 </span>
    <span class="token annotation punctuation">@Override</span> 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>index<span class="token operator">+</span><span class="token string">&quot;:&quot;</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre></div>`,9);function t(o,e){return p}var l=s(a,[["render",t]]);export{l as default};
