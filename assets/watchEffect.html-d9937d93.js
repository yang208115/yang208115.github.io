import{_ as n,o as a,c as s,b as t}from"./app-ca3dd10f.js";const e={},c=t(`<p><strong>watchEffect</strong> 是 Vue 3 中一种<strong>自动追踪数据变化</strong>的机制。当你在 <strong>watchEffect</strong> 的回调函数中访问响应式数据时，Vue 会自动追踪这些访问，并在这些数据发生变化时重新运行 <strong>watchEffect</strong> 的回调函数。 应用场景： 在 <strong>watchEffect</strong> 中，通常不建议直接进行数据的赋值。赋值还是在 watch 中进行，<strong>watchEffect</strong> 主要用于进行一些副作用。</p><h2 id="_1-自动追踪数据变化" tabindex="-1"><a class="header-anchor" href="#_1-自动追踪数据变化" aria-hidden="true">#</a> 1. 自动追踪数据变化</h2><p>watchEffect 会自动追踪在其回调函数中访问的响应式数据，并在这些数据发生变化时重新运行回调。这适用于那些需要自动响应数据变化的场景。</p><h2 id="_2-日志输出" tabindex="-1"><a class="header-anchor" href="#_2-日志输出" aria-hidden="true">#</a> 2. 日志输出</h2><p>在开发过程中，你可能希望在某些数据变化时输出日志信息，以便调试。使用 <strong>watchEffect</strong> 可以方便地在控制台输出数据的变化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Data changed:&quot;</span><span class="token punctuation">,</span> myData<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-网络请求" tabindex="-1"><a class="header-anchor" href="#_3-网络请求" aria-hidden="true">#</a> 3. 网络请求</h2><p>当某个数据发生变化时，你可能需要发起网络请求获取最新的数据。<strong>watchEffect</strong> 可以用于触发这类异步操作。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">fetchDataFromServer</span><span class="token punctuation">(</span>myData<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-副作用逻辑" tabindex="-1"><a class="header-anchor" href="#_4-副作用逻辑" aria-hidden="true">#</a> 4. 副作用逻辑</h2><p>** 对于那些不涉及修改响应式数据的副作用逻辑，如执行一些计算、触发动画等，**watchEffect** 是一个方便的选择。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行一些计算或触发动画</span>
  <span class="token function">computeSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[c];function o(i,u){return a(),s("div",null,p)}const r=n(e,[["render",o],["__file","watchEffect.html.vue"]]);export{r as default};
