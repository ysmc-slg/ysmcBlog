import{e as n}from"./app.85554340.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const a={},p=n(`<div class="language-java ext-java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u81EA\u5B9A\u4E49\u5C5E\u6027\u8D4B\u503C\u5DE5\u5177
 * <span class="token keyword">@author</span> zxq
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomCopyUtil</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u5C5E\u6027\u590D\u5236\u65B9\u6CD5\uFF0C\u517C\u5BB9\u81EA\u52A8\u6620\u5C04\u548C\u663E\u5F0F\u6620\u5C04\u4E24\u79CD\u6A21\u5F0F
     *
     * <span class="token keyword">@param</span> <span class="token parameter">source</span>       \u6E90\u5BF9\u8C61
     * <span class="token keyword">@param</span> <span class="token parameter">target</span>       \u76EE\u6807\u5BF9\u8C61
     * <span class="token keyword">@param</span> <span class="token parameter">fieldMapping</span> \u663E\u5F0F\u5B57\u6BB5\u6620\u5C04\uFF08\u53EF\u4E3A null\uFF09
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">copyProperties</span><span class="token punctuation">(</span><span class="token class-name">Object</span> source<span class="token punctuation">,</span> <span class="token class-name">Object</span> target<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fieldMapping<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>source <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> target <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Source and target objects must not be null.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>fieldMapping <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            fieldMapping <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \u81EA\u52A8\u6620\u5C04\u5B57\u6BB5</span>
        <span class="token function">autoMapFields</span><span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fieldMapping<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Map<span class="token punctuation">.</span>Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> entry <span class="token operator">:</span> fieldMapping<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> sourceFieldPath <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> targetFieldPath <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Object</span> sourceValue <span class="token operator">=</span> <span class="token function">getNestedFieldValue</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> sourceFieldPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>sourceValue <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">setNestedFieldValue</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> targetFieldPath<span class="token punctuation">,</span> sourceValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Error copying field: &quot;</span> <span class="token operator">+</span> sourceFieldPath <span class="token operator">+</span> <span class="token string">&quot; -&gt; &quot;</span> <span class="token operator">+</span> targetFieldPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u81EA\u52A8\u5339\u914D\u5B57\u6BB5\u6620\u5C04
     *
     * <span class="token keyword">@param</span> <span class="token parameter">sourceClass</span>  \u6E90\u7C7B
     * <span class="token keyword">@param</span> <span class="token parameter">targetClass</span>  \u76EE\u6807\u7C7B
     * <span class="token keyword">@param</span> <span class="token parameter">fieldMapping</span> \u5B57\u6BB5\u6620\u5C04
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">autoMapFields</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> sourceClass<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> targetClass<span class="token punctuation">,</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fieldMapping<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Field</span> sourceField <span class="token operator">:</span> sourceClass<span class="token punctuation">.</span><span class="token function">getDeclaredFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> sourceFieldName <span class="token operator">=</span> sourceField<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u5982\u679C\u663E\u5F0F\u6620\u5C04\u4E2D\u6CA1\u6709\u8BE5\u5B57\u6BB5\uFF0C\u5C1D\u8BD5\u81EA\u52A8\u5339\u914D</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fieldMapping<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>sourceFieldName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Field</span> targetField <span class="token operator">=</span> targetClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>sourceFieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>targetField <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u81EA\u52A8\u5339\u914D\u5B57\u6BB5</span>
                        fieldMapping<span class="token punctuation">.</span><span class="token function">putIfAbsent</span><span class="token punctuation">(</span>sourceFieldName<span class="token punctuation">,</span> sourceFieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchFieldException</span> ignored<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u5982\u679C\u76EE\u6807\u7C7B\u4E2D\u4E0D\u5B58\u5728\u8BE5\u5B57\u6BB5\uFF0C\u8DF3\u8FC7</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u5D4C\u5957\u5B57\u6BB5\u7684\u503C
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getNestedFieldValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">String</span> fieldPath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> fieldPath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> currentObj <span class="token operator">=</span> obj<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> fieldName <span class="token operator">:</span> fields<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>currentObj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">Field</span> field <span class="token operator">=</span> currentObj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>fieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            currentObj <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currentObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> currentObj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8BBE\u7F6E\u5D4C\u5957\u5B57\u6BB5\u7684\u503C
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setNestedFieldValue</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">String</span> fieldPath<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> fields <span class="token operator">=</span> fieldPath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\\\.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> currentObj <span class="token operator">=</span> obj<span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> fields<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> fieldName <span class="token operator">=</span> fields<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name">Field</span> field <span class="token operator">=</span> currentObj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>fieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">Object</span> nextObj <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>currentObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nextObj <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                nextObj <span class="token operator">=</span> field<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                field<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>currentObj<span class="token punctuation">,</span> nextObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            currentObj <span class="token operator">=</span> nextObj<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> finalFieldName <span class="token operator">=</span> fields<span class="token punctuation">[</span>fields<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">Field</span> finalField <span class="token operator">=</span> currentObj<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span>finalFieldName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        finalField<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        finalField<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>currentObj<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Son</span> son<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">// Person.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Son</span> son<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token comment">// Son.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Son</span> son <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    son<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    son<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setSon</span><span class="token punctuation">(</span>son<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">CustomCopyUtil</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span>person<span class="token punctuation">,</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;person:{}&quot;</span><span class="token punctuation">,</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fieldMapping <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fieldMapping<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;userName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fieldMapping<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;son.age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;son.age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> fieldMapping<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u5982\u679C\u4E24\u4E2A\u5B9E\u4F53\u7684\u53D8\u91CF\u540D\u662F\u4E00\u81F4\u7684\uFF0CfieldMapping \u53EF\u4EE5\u4F20 <code>null</code> \u6216\u8005 <code>\u7A7A\u4E32</code>\u3002\u53D8\u91CF\u540D\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u8981\u6307\u5B9A\u6620\u5C04\u89C4\u5219\uFF0C\u5BF9\u8C61\u5D4C\u5957\u7684\u573A\u666F\u4E5F\u53EF\u662F\u590D\u5236</p>`,7);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
