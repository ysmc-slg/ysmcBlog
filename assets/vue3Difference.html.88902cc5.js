import{e as n}from"./app.58232894.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},t=n(`<h2 id="\u5B9A\u4E49\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u5B9A\u4E49\u53D8\u91CF</h2><p>Vue2 \u4E2D\uFF0C\u5B9A\u4E49\u53D8\u91CF\uFF0C\u53EF\u4EE5\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello 01!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;My01&quot;</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
                msg<span class="token operator">:</span> <span class="token string">&quot;hello javaboy!&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5728 Vue3 \u4E2D\uFF0C\u6309\u7167\u5982\u4E0B\u65B9\u5F0F\u6765\u5199\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello 01!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;My02&quot;</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * \u6211\u4EEC\u4EE5\u524D\u5728 Vue2 \u4E2D\u5B9A\u4E49\u7684\u5404\u79CD\u53D8\u91CF\u3001\u65B9\u6CD5\u3001\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u7B49\u7B49\uFF0C\u73B0\u5728\u7EDF\u4E00\u90FD\u5728 setup \u4E2D\u8FDB\u884C\u5B9A\u4E49
     *
     * \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6240\u6709\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u65B9\u6CD5\u7B49\uFF0C\u90FD\u9700\u8981\u8FD4\u56DE\u4E4B\u540E\u624D\u53EF\u4EE5\u4F7F\u7528
     */</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6CE8\u610F\uFF0C\u76F4\u63A5\u8FD9\u6837\u5199\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u4E0D\u662F\u54CD\u5E94\u5F0F\u6570\u636E</span>
        <span class="token comment">// let msg = &quot;hello vue3&quot;;</span>
        <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><ol><li>\u53D8\u91CF\u5B9A\u4E49\uFF0C\u9700\u8981\u7528\u5230 <code>ref</code> \u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u76F4\u63A5\u4ECE vue \u4E2D\u5BFC\u5165\uFF0C\u5982\u679C\u4E0D\u7528 <code>ref</code> \u51FD\u6570\uFF0C\u5B9A\u4E49\u7684\u53D8\u91CF\u4E0D\u5177\u5907\u54CD\u5E94\u5F0F\u7684\u7279\u5F81\u3002</li><li>\u6240\u6709\u5B9A\u4E49\u7684\u53D8\u91CF\u3001\u65B9\u6CD5\u7B49\uFF0C\u90FD\u9700\u8981 return\uFF0C\u5426\u5219\u7528\u4E0D\u4E86</li></ol></div><h2 id="\u5B9A\u4E49\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u65B9\u6CD5" aria-hidden="true">#</a> \u5B9A\u4E49\u65B9\u6CD5</h2><p>\u5728 Vue2 \u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u5C06\u65B9\u6CD5\u5B9A\u4E49\u5728 methods \u8282\u70B9\u4E2D\uFF0C\u4F46\u662F Vue3 \u4E2D\uFF0C\u6211\u4EEC\u5C06\u65B9\u6CD5\u5B9A\u4E49\u5728 <code>setup</code> \u65B9\u6CD5\u4E2D\uFF0C<strong>\u5C24\u5176\u8981\u6CE8\u610F\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u5B8C\u6210\u540E\uFF0C\u5FC5\u987B\u8981\u8FD4\u56DE\u65B9\u6CD5\u540D\uFF0C\u5426\u5219\u65B9\u6CD5\u7528\u4E0D\u4E86</strong></p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello 01!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doLogin(<span class="token punctuation">&#39;</span>zhangsan<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;My02&quot;</span><span class="token punctuation">,</span>
        <span class="token doc-comment comment">/**
         * \u6211\u4EEC\u4EE5\u524D\u5728 Vue2 \u4E2D\u5B9A\u4E49\u7684\u5404\u79CD\u53D8\u91CF\u3001\u65B9\u6CD5\u3001\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u7B49\u7B49\uFF0C\u73B0\u5728\u7EDF\u4E00\u90FD\u5728 setup \u4E2D\u8FDB\u884C\u5B9A\u4E49
         *
         * \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6240\u6709\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u65B9\u6CD5\u7B49\uFF0C\u90FD\u9700\u8981\u8FD4\u56DE\u4E4B\u540E\u624D\u53EF\u4EE5\u4F7F\u7528
         */</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u6CE8\u610F\uFF0C\u76F4\u63A5\u8FD9\u6837\u5199\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u4E0D\u662F\u54CD\u5E94\u5F0F\u6570\u636E</span>
            <span class="token comment">// let msg = &quot;hello vue3&quot;;</span>
            <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">const</span> <span class="token function-variable function">doLogin</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span>password</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>msg<span class="token punctuation">,</span>doLogin<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5982\u4E0A\uFF0C\u50CF\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u4E00\u6837\u53BB\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u5B9A\u4E49\u5B8C\u6210\u4E4B\u540E\uFF0C\u4E00\u5B9A\u8981\u8FD4\u56DE\u3002</p><h2 id="\u94A9\u5B50\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a> \u94A9\u5B50\u51FD\u6570</h2><p>\u5728 Vue2 \u4E2D\uFF0C\u5B9A\u4E49\u94A9\u5B50\u51FD\u6570\uFF0C\u76F4\u63A5\u5B9A\u4E49\u5BF9\u5E94\u7684\u65B9\u6CD5\u540D\u5373\u53EF\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello 01!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;My01&quot;</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">{</span>
                msg<span class="token operator">:</span> <span class="token string">&quot;hello javaboy!&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;=====Vue2=====mounted()==========&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F46\u662F\uFF0C\u5728 Vue3 \u4E2D\uFF0C\u7531\u4E8E\u6240\u6709\u7684\u4E1C\u897F\u90FD\u662F\u5728 setup \u4E2D\u5B9A\u4E49\u7684\uFF0C\u5305\u62EC\u94A9\u5B50\u51FD\u6570\u3002</p><p>Vue3 \u4E2D\u5B9A\u4E49\u94A9\u5B50\u51FD\u6570\uFF1A</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello 01!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doLogin(<span class="token punctuation">&#39;</span>zhangsan<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">//\u4F7F\u7528\u94A9\u5B50\u51FD\u6570\u65F6\uFF0C\u9996\u5148\u5BFC\u5165\u94A9\u5B50\u51FD\u6570</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span>onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;My02&quot;</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> <span class="token function-variable function">doLogin</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span>password</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;My02 \u521D\u59CB\u5316\u4E86\u3002\u3002\u3002&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>msg<span class="token punctuation">,</span>doLogin<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><ol><li>\u9996\u5148\u4ECE vue \u4E2D\u5BFC\u5165\u94A9\u5B50\u51FD\u6570</li><li>\u5728 setup \u65B9\u6CD5\u4E2D\u5B9A\u4E49\u94A9\u5B50\u51FD\u6570\u7684\u903B\u8F91</li><li>\u5728 return \u4E2D\uFF0C\u4E0D\u9700\u8981\u8FD4\u56DE\u94A9\u5B50\u51FD\u6570</li></ol></div><p>\u5728 vue3 \u4E2D\u94A9\u5B50\u51FD\u6570\u8981\u52A0\u4E0Aon\uFF0C\u94A9\u5B50\u51FD\u6570\u5BF9\u7167\u5982\u4E0B\uFF1A</p><table><thead><tr><th>Vue2</th><th>Vue3</th></tr></thead><tbody><tr><td>mounted</td><td>onMounted</td></tr><tr><td>beforeUpdate</td><td>onBeforeUpdate</td></tr><tr><td>updated</td><td>OnUpdated</td></tr><tr><td>beforeUnmount</td><td>OnBeforeUnmounted</td></tr><tr><td>unmounted</td><td>OnUnmounted</td></tr><tr><td>errorCapture</td><td>OnErrorCapture</td></tr><tr><td>renderTracked</td><td>OnRenderTracked</td></tr><tr><td>renderTriggered</td><td>OnRenderTriggered</td></tr><tr><td>activated</td><td>OnActivated</td></tr><tr><td>deactivated</td><td>OnDeactivated</td></tr></tbody></table><h2 id="computed-\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#computed-\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> computed (\u8BA1\u7B97\u5C5E\u6027)</h2><p>\u8BA1\u7B97\u5C5E\u6027\u548C\u94A9\u5B50\u51FD\u6570\u6BD4\u8F83\u7C7B\u4F3C\uFF0C\u8BA1\u7B97\u5C5E\u6027\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><ol><li>\u4ECE vue \u4E2D\u5BFC\u5165\u8BA1\u7B97\u5C5E\u6027</li><li>\u5B9A\u4E49\u8BA1\u7B97\u5C5E\u6027</li><li>\u5728 return \u4E2D\u8FD4\u56DE\u8BA1\u7B97\u5C5E\u6027\u503C</li></ol><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>hello 01!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>doLogin(<span class="token punctuation">&#39;</span>zhangsan<span class="token punctuation">&#39;</span>,<span class="token punctuation">&#39;</span>123<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{currentTime}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

    <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">//\u4F7F\u7528\u94A9\u5B50\u51FD\u6570\u65F6\uFF0C\u9996\u5148\u5BFC\u5165\u94A9\u5B50\u51FD\u6570</span>
    <span class="token comment">//\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528\uFF0C\u4E5F\u9700\u8981\u9996\u5148\u5BFC\u5165\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;My02&quot;</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u6CE8\u610F\uFF0C\u76F4\u63A5\u8FD9\u6837\u5199\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u4E0D\u662F\u54CD\u5E94\u5F0F\u6570\u636E</span>
            <span class="token comment">// let msg = &quot;hello vue3&quot;;</span>
            <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;hello vue3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> <span class="token function-variable function">doLogin</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">username<span class="token punctuation">,</span>password</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
                age<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
                msg<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;hello javaboy!&#39;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//\u73B0\u5728\u5C31\u53EF\u4EE5\u901A\u8FC7\u8BA1\u7B97\u5C5E\u6027\u53BB\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u4E86</span>
            <span class="token keyword">const</span> currentTime<span class="token operator">=</span><span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
                age<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token comment">//\u6CE8\u610F\uFF0C\u8BA1\u7B97\u5C5E\u6027\u9700\u8981\u5728 return \u4E2D\u8FD4\u56DE</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>msg<span class="token punctuation">,</span>doLogin<span class="token punctuation">,</span>currentTime<span class="token punctuation">,</span>age<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7531\u4E8E\u751F\u6210\u8BA1\u7B97\u5C5E\u6027 currentTime \u4F9D\u8D56 age \u53D8\u91CF\uFF0C\u6240\u4EE5\u5F53 age \u53D8\u91CF\u53D1\u751F\u53D8\u5316\u7684\u65F6\u5019\uFF0C\u8BA1\u7B97\u5C5E\u6027\u4F1A\u81EA\u52A8\u66F4\u65B0\uFF0C\u5426\u5219\u8BA1\u7B97\u5C5E\u6027\u5C06\u4E00\u76F4\u4F7F\u7528\u7F13\u5B58\u4E2D\u7684\u6570\u636E\uFF08age \u6CA1\u6709\u53D1\u751F\u53D8\u5316\u7684\u60C5\u51B5\uFF09\u3002</p><p>\u53E6\u5916\u8FD8\u6709\u4E00\u70B9\uFF0C\u5C31\u662F\u5B9A\u4E49\u7684\u53D8\u91CF\u5165 age\u3001msg \u7B49 \uFF0C\u5728 HTML \u8282\u70B9\u4E2D\uFF0C\u76F4\u63A5\u4F7F\u7528 age\u3001msg\uFF0C\u4F46\u662F\u5982\u679C\u662F\u5728\u65B9\u6CD5\u4E2D\u64CD\u4F5C\u8FD9\u4E9B\u53D8\u91CF\uFF0C\u5219\u4E00\u5B9A\u8981\u4F7F\u7528 age.value \u6216\u8005 msg.value \u53BB\u64CD\u4F5C\u8FD9\u4E9B\u53D8\u91CF\u3002</p>`,25);function p(o,c){return t}var l=s(a,[["render",p]]);export{l as default};
