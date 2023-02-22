import{e as n}from"./app.443befc9.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";const s={},t=n(`<h1 id="\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2</h1><p>\u5B50\u67E5\u8BE2\u6307\u4E00\u4E2A\u67E5\u8BE2\u8BED\u53E5\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u67E5\u8BE2\u8BED\u53E5\u5185\u90E8\u7684\u67E5\u8BE2\uFF0C\u8FD9\u4E2A\u7279\u6027\u4ECEMySQL 4.1\u5F00\u59CB\u5F15\u5165\u3002</p><p>SQL \u4E2D\u5B50\u67E5\u8BE2\u7684\u4F7F\u7528\u5927\u5927\u589E\u5F3A\u4E86 SELECT \u67E5\u8BE2\u7684\u80FD\u529B\uFF0C\u56E0\u4E3A\u5F88\u591A\u65F6\u5019\u67E5\u8BE2\u9700\u8981\u4ECE\u7ED3\u679C\u96C6\u4E2D\u83B7\u53D6\u6570\u636E\uFF0C\u6216\u8005\u9700\u8981\u4ECE\u540C\u4E00\u4E2A\u8868\u4E2D\u5148\u8BA1\u7B97\u5F97\u51FA\u4E00\u4E2A\u6570\u636E\u7ED3\u679C\uFF0C\u7136\u540E\u4E0E\u8FD9\u4E2A\u6570\u636E\u7ED3\u679C\uFF08\u53EF\u80FD\u662F\u67D0\u4E2A\u6807\u91CF\uFF0C\u4E5F\u53EF\u80FD\u662F\u67D0\u4E2A\u96C6\u5408\uFF09\u8FDB\u884C\u6BD4\u8F83\u3002</p><h2 id="\u5355\u884C\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u5355\u884C\u5B50\u67E5\u8BE2</h2><h3 id="\u5355\u884C\u6BD4\u8F83\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u6BD4\u8F83\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u5355\u884C\u6BD4\u8F83\u64CD\u4F5C\u7B26</h3><table><thead><tr><th>\u64CD\u4F5C\u7B26</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>=</td><td>\u7B49\u4E8E</td></tr><tr><td>&gt;</td><td>\u5927\u4E8E</td></tr><tr><td>&gt;=</td><td>\u5927\u4E8E\u7B49\u4E8E</td></tr><tr><td>&lt;</td><td>\u5C0F\u4E8E</td></tr><tr><td>&lt;=</td><td>\u5C0F\u4E8E\u7B49\u4E8E</td></tr><tr><td>&lt;&gt;</td><td>\u4E0D\u7B49\u4E8E</td></tr></tbody></table><h3 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u67E5\u8BE2\u5DE5\u8D44\u5927\u4E8E149\u53F7\u5458\u5DE5\u5DE5\u8D44\u7684\u5458\u5DE5\u7684\u4FE1\u606F</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> salary
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">149</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u9898\u76EE\uFF1A\u8FD4\u56DE\u516C\u53F8\u5DE5\u8D44\u6700\u5C11\u7684\u5458\u5DE5\u7684last_name,job_id\u548Csalary</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> salary <span class="token operator">=</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> employees
		<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u67E5\u8BE2\u4E0E141\u53F7\u5458\u5DE5\u7684manager_id\u548Cdepartment_id\u76F8\u540C\u7684\u5176\u4ED6\u5458\u5DE5\u7684employee_id\uFF0Cmanager_id\uFF0Cdepartment_id\u3002</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>manager_id<span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> manager_id <span class="token operator">=</span> <span class="token punctuation">(</span>
		    <span class="token keyword">SELECT</span> manager_id
		    <span class="token keyword">FROM</span> employees
		    <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">141</span>
		   <span class="token punctuation">)</span>
<span class="token operator">AND</span> department_id <span class="token operator">=</span> <span class="token punctuation">(</span>
		    <span class="token keyword">SELECT</span> department_id
		    <span class="token keyword">FROM</span> employees
		    <span class="token keyword">WHERE</span> employee_id <span class="token operator">=</span> <span class="token number">141</span>
		   <span class="token punctuation">)</span>
<span class="token operator">AND</span> employee_id <span class="token operator">&lt;&gt;</span> <span class="token number">141</span><span class="token punctuation">;</span>


<span class="token comment">-- \u9898\u76EE\uFF1A\u67E5\u8BE2\u6700\u4F4E\u5DE5\u8D44\u5927\u4E8E110\u53F7\u90E8\u95E8\u6700\u4F4E\u5DE5\u8D44\u7684\u90E8\u95E8id\u548C\u5176\u6700\u4F4E\u5DE5\u8D44</span>
<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> department_id <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id
<span class="token keyword">HAVING</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
			<span class="token keyword">SELECT</span> <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
			<span class="token keyword">FROM</span> employees
			<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> <span class="token number">110</span>
		     <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u663E\u5F0F\u5458\u5DE5\u7684employee_id,last_name\u548Clocation\u3002\u5176\u4E2D\uFF0C\u82E5\u5458\u5DE5department_id\u4E0Elocation_id\u4E3A1800\u7684department_id\u76F8\u540C\uFF0C\u5219location\u4E3A\u2019Canada\u2019\uFF0C\u5176\u4F59\u5219\u4E3A\u2019USA\u2019\u3002</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>
  <span class="token keyword">CASE</span> department_id 
  <span class="token keyword">WHEN</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> department_id <span class="token keyword">FROM</span> departments <span class="token keyword">WHERE</span> location_id <span class="token operator">=</span> <span class="token number">1800</span><span class="token punctuation">)</span> 
  <span class="token keyword">THEN</span> <span class="token string">&#39;Canada&#39;</span>
	<span class="token keyword">ELSE</span> <span class="token string">&#39;USA&#39;</span> <span class="token keyword">END</span> <span class="token string">&quot;location&quot;</span>
<span class="token keyword">FROM</span> employees<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u591A\u884C\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u591A\u884C\u5B50\u67E5\u8BE2</h2><h3 id="\u591A\u884C\u6BD4\u8F83\u64CD\u4F5C\u7B26" tabindex="-1"><a class="header-anchor" href="#\u591A\u884C\u6BD4\u8F83\u64CD\u4F5C\u7B26" aria-hidden="true">#</a> \u591A\u884C\u6BD4\u8F83\u64CD\u4F5C\u7B26</h3><table><thead><tr><th>\u64CD\u4F5C\u7B26</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>IN</td><td>\u7B49\u4E8E\u5217\u8868\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A</td></tr><tr><td>ANY</td><td>\u9700\u8981\u548C\u5355\u884C\u6BD4\u8F83\u7B26\u4E00\u8D77\u4F7F\u7528\uFF0C\u548C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u67D0\u4E00\u4E2A\u503C\u6BD4\u8F83</td></tr><tr><td>ALL</td><td>\u9700\u8981\u548C\u5355\u884C\u6BD4\u8F83\u64CD\u4F5C\u7B26\u4E00\u8D77\u4F7F\u7528\uFF0C\u548C\u5B50\u67E5\u8BE2\u8FD4\u56DE\u7684\u6240\u6709\u503C\u6BD4\u8F83</td></tr><tr><td>SOME</td><td>\u5B9E\u9645\u4E0A\u662FANY\u7684\u522B\u540D\uFF0C\u4F5C\u7528\u76F8\u540C\uFF0C\u4E00\u822C\u5E38\u4F7F\u7528ANY</td></tr></tbody></table><h3 id="\u4EE3\u7801\u793A\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B-1" aria-hidden="true">#</a> \u4EE3\u7801\u793A\u4F8B</h3><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span> last_name
<span class="token keyword">FROM</span>   employees
<span class="token keyword">WHERE</span>  salary <span class="token operator">IN</span>
                <span class="token punctuation">(</span><span class="token keyword">SELECT</span>   <span class="token function">MIN</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
                 <span class="token keyword">FROM</span>     employees
                 <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- ANY / ALL:</span>
<span class="token comment">-- \u9898\u76EE\uFF1A\u8FD4\u56DE\u5176\u5B83job_id\u4E2D\u6BD4job_id\u4E3A\u2018IT_PROG\u2019\u90E8\u95E8\u4EFB\u4E00\u5DE5\u8D44\u4F4E\u7684\u5458\u5DE5\u7684\u5458\u5DE5\u53F7\u3001\u59D3\u540D\u3001job_id \u4EE5\u53CAsalary</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>salary
<span class="token keyword">FROM</span> employees
<span class="token keyword">WHERE</span> job_id <span class="token operator">&lt;&gt;</span> <span class="token string">&#39;IT_PROG&#39;</span>
<span class="token operator">AND</span> salary <span class="token operator">&lt;</span> <span class="token keyword">ANY</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> salary
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">WHERE</span> job_id <span class="token operator">=</span> <span class="token string">&#39;IT_PROG&#39;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u76F8\u5173\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u76F8\u5173\u5B50\u67E5\u8BE2</h2><p>form \u4E2D\u4F7F\u7528\u5B50\u67E5\u8BE2</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u67E5\u8BE2\u5458\u5DE5\u4E2D\u5DE5\u8D44\u5927\u4E8E\u672C\u90E8\u95E8\u5E73\u5747\u5DE5\u8D44\u7684\u5458\u5DE5\u7684last_name,salary\u548C\u5176department_id</span>
<span class="token comment">-- \u65B9\u5F0F\u4E00</span>
<span class="token keyword">SELECT</span> last_name<span class="token punctuation">,</span>salary<span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees e1
<span class="token keyword">WHERE</span> salary <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> employees e2
		<span class="token keyword">WHERE</span> department_id <span class="token operator">=</span> e1<span class="token punctuation">.</span><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u65B9\u5F0F\u4E8C</span>
<span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>e<span class="token punctuation">.</span>salary<span class="token punctuation">,</span>e<span class="token punctuation">.</span>department_id
<span class="token keyword">FROM</span> employees e<span class="token punctuation">,</span><span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span><span class="token function">AVG</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span> avg_sal
		<span class="token keyword">FROM</span> employees
		<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> department_id<span class="token punctuation">)</span> t_dept_avg_sal
<span class="token keyword">WHERE</span> e<span class="token punctuation">.</span>department_id <span class="token operator">=</span> t_dept_avg_sal<span class="token punctuation">.</span>department_id
<span class="token operator">AND</span> e<span class="token punctuation">.</span>salary <span class="token operator">&gt;</span> t_dept_avg_sal<span class="token punctuation">.</span>avg_sal
</code></pre></div><p><strong>\u5728SELECT\u4E2D\uFF0C\u9664\u4E86GROUP BY \u548C LIMIT\u4E4B\u5916\uFF0C\u5176\u4ED6\u4F4D\u7F6E\u90FD\u53EF\u4EE5\u58F0\u660E\u5B50\u67E5\u8BE2\uFF01</strong></p><h3 id="exists-\u4E0E-not-exists" tabindex="-1"><a class="header-anchor" href="#exists-\u4E0E-not-exists" aria-hidden="true">#</a> EXISTS \u4E0E NOT EXISTS</h3><p><code>EXISTS</code> \u7528\u6765\u5224\u65AD\u67E5\u8BE2\u7ED3\u679C\u662F\u5426\u5B58\u5728\uFF0C\u5F53\u5B58\u5728\u67E5\u8BE2\u52AB\u593A\u65F6\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002</p><p><code>NOT EXISTS</code> \u5173\u952E\u5B57\u8868\u793A\u5982\u679C\u4E0D\u5B58\u5728\u67D0\u79CD\u6761\u4EF6\uFF0C\u5219\u8FD4\u56DETRUE\uFF0C\u5426\u5219\u8FD4\u56DEFALSE\u3002</p><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token comment">-- \u67E5\u8BE2\u516C\u53F8\u7BA1\u7406\u8005\u7684employee_id\uFF0Clast_name\uFF0Cjob_id\uFF0Cdepartment_id\u4FE1\u606F</span>
<span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>last_name<span class="token punctuation">,</span>job_id<span class="token punctuation">,</span>department_id
<span class="token keyword">FROM</span> employees e1
<span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
	       <span class="token keyword">SELECT</span> <span class="token operator">*</span>
	       <span class="token keyword">FROM</span> employees e2
	       <span class="token keyword">WHERE</span> e1<span class="token punctuation">.</span><span class="token punctuation">\`</span>employee_id<span class="token punctuation">\`</span> <span class="token operator">=</span> e2<span class="token punctuation">.</span><span class="token punctuation">\`</span>manager_id<span class="token punctuation">\`</span>
	     <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- \u67E5\u8BE2departments\u8868\u4E2D\uFF0C\u4E0D\u5B58\u5728\u4E8Eemployees\u8868\u4E2D\u7684\u90E8\u95E8\u7684department_id\u548Cdepartment_name</span>
<span class="token keyword">SELECT</span> department_id<span class="token punctuation">,</span>department_name
<span class="token keyword">FROM</span> departments d
<span class="token keyword">WHERE</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token operator">*</span>
		<span class="token keyword">FROM</span> employees e
		<span class="token keyword">WHERE</span> d<span class="token punctuation">.</span><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span> <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token punctuation">\`</span>department_id<span class="token punctuation">\`</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>\u5E26 <code>exists</code> \u7684\u67E5\u8BE2\u662F\u5148\u6267\u884C\u5916\u5C42\u67E5\u8BE2\uFF0C\u7136\u540E\u518D\u6267\u884C\u5185\u5B58\u67E5\u8BE2\uFF0C\u5916\u5C42\u67E5\u8BE2\u7684\u503C\u51B3\u5B9A\u4E86\u5185\u5C42\u67E5\u8BE2\u7684\u7ED3\u679C\uFF0C\u5185\u5C42\u67E5\u8BE2\u7684\u6267\u884C\u6B21\u6570\u7531\u5916\u5C42\u67E5\u8BE2\u7684\u7ED3\u679C\u6570\u51B3\u5B9A\uFF08<code>\u5C0F\u8868\u9A71\u52A8\u5927\u8868</code>\uFF09\u3002</p><p>\u4E0A\u8FF0\u67E5\u8BE2\u8BED\u53E5\u7684\u5904\u7406\u8FC7\u7A0B\u4E3A\uFF1A</p><ol><li>\u5148\u67E5\u8BE2\u5916\u5C42\u8868 <code>employees</code> \u7684\u7B2C\u4E00\u884C\uFF0C\u6839\u636E <code>employee_id</code> \u503C\u6765\u5904\u7406\u5185\u5C42\u67E5\u8BE2</li><li>\u7528\u5916\u5C42\u7684\u503C\u6765\u6267\u884C\u5185\u5C42\u67E5\u8BE2\uFF0C\u5982\u679C\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\uFF0C\u5219 <code>exists</code> \u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002\u7136\u540E\u8FD4\u56DE\u7B26\u5408 <code>employee_id</code> \u7684\u6570\u636E\u3002</li><li>\u7EE7\u7EED\u904D\u5386\u5916\u5C42\u67E5\u8BE2\uFF0C\u77E5\u9053\u5904\u7406\u5B8C\u6240\u6709\u884C</li></ol>`,25);function e(p,o){return t}var d=a(s,[["render",e]]);export{d as default};
