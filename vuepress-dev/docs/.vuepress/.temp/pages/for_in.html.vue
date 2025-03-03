<template><div><p>for in iterate over keys only not on values</p>
<p>for in should be used for object only not for array because it can have side effect.</p>
<p>The <code v-pre>for...in</code> and <code v-pre>for...of</code> loops in JavaScript are used to iterate over values, but they work differently and are suited for different types of data:</p>
<h3 id="for-in-loop" tabindex="-1"><a class="header-anchor" href="#for-in-loop"><span><code v-pre>for...in</code> loop:</span></a></h3>
<ul>
<li>
<p><strong>Purpose</strong>: Iterates over the <strong>enumerable properties</strong> (keys) of an object.</p>
</li>
<li>
<p><strong>Use case</strong>: Typically used for iterating over the properties (keys) of an object.</p>
</li>
<li>
<p><strong>Syntax</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> object<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Accesses the keys (property names)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Behavior</strong>:</p>
<ul>
<li>Iterates over all enumerable properties of an object, including inherited ones.</li>
<li>Should not be used for arrays if you want to access values (since it iterates over keys, not values).</li>
</ul>
</li>
</ul>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example:</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// name, age (keys)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// John, 30 (values)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-of-loop" tabindex="-1"><a class="header-anchor" href="#for-of-loop"><span><code v-pre>for...of</code> loop:</span></a></h3>
<ul>
<li>
<p><strong>Purpose</strong>: Iterates over <strong>iterable objects</strong> like arrays, strings, maps, sets, etc.</p>
</li>
<li>
<p><strong>Use case</strong>: Ideal for iterating over the <strong>values</strong> of an array or other iterable collections.</p>
</li>
<li>
<p><strong>Syntax</strong>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> iterable<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Accesses the values directly</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Behavior</strong>:</p>
<ul>
<li>Iterates over the values of an iterable object.</li>
<li>Works with arrays, strings, maps, sets, and more (but not plain objects directly).</li>
</ul>
</li>
</ul>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example:</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'apple'</span><span class="token punctuation">,</span> <span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'cherry'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fruit <span class="token keyword">of</span> fruits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruit<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// apple, banana, cherry (values)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary:</span></a></h3>
<ul>
<li><strong><code v-pre>for...in</code></strong>: Iterates over keys (property names) of an object.</li>
<li><strong><code v-pre>for...of</code></strong>: Iterates over values of an iterable (like arrays or strings).</li>
</ul>
<p>You can use <code v-pre>for...in</code> on an array, but it's generally <strong>not recommended</strong> for iterating over array elements, as <code v-pre>for...in</code> is intended for iterating over the <strong>keys (or property names)</strong> of an object, not the values.</p>
<h3 id="how-for-in-works-on-an-array" tabindex="-1"><a class="header-anchor" href="#how-for-in-works-on-an-array"><span>How <code v-pre>for...in</code> works on an array:</span></a></h3>
<ul>
<li>It will iterate over the <strong>indices</strong> of the array (which are the keys in an array object) rather than the values.</li>
<li>If the array has custom properties added (arrays are objects in JavaScript), <code v-pre>for...in</code> will also iterate over those, which can lead to unexpected behavior.</li>
</ul>
<h3 id="example-of-for-in-on-an-array" tabindex="-1"><a class="header-anchor" href="#example-of-for-in-on-an-array"><span>Example of <code v-pre>for...in</code> on an array:</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'apple'</span><span class="token punctuation">,</span> <span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'cherry'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">in</span> fruits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Outputs: 0, 1, 2 (the indices)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Outputs: apple, banana, cherry (the values)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="why-it-s-not-ideal" tabindex="-1"><a class="header-anchor" href="#why-it-s-not-ideal"><span>Why it's not ideal:</span></a></h3>
<ol>
<li><strong>Iterates over indices, not values</strong>: In the example, it logs the indices (<code v-pre>0</code>, <code v-pre>1</code>, <code v-pre>2</code>), which is not typically what you want when working with arrays.</li>
<li><strong>Iterates over all enumerable properties</strong>: If you add properties to the array, <code v-pre>for...in</code> will include them in the iteration, which can cause unexpected results.</li>
</ol>
<h3 id="example-with-a-custom-property" tabindex="-1"><a class="header-anchor" href="#example-with-a-custom-property"><span>Example with a custom property:</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'apple'</span><span class="token punctuation">,</span> <span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'cherry'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">fruits<span class="token punctuation">.</span>custom <span class="token operator">=</span> <span class="token string">'mango'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">in</span> fruits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Outputs: 0, 1, 2, custom (including the custom property)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruits<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Outputs: apple, banana, cherry, mango (custom value)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="better-option-for-arrays" tabindex="-1"><a class="header-anchor" href="#better-option-for-arrays"><span>Better option for arrays:</span></a></h3>
<p>Use <code v-pre>for...of</code> when working with arrays, as it iterates over the <strong>values</strong> directly and avoids the issues with custom properties.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fruit <span class="token keyword">of</span> fruits<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fruit<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Outputs: apple, banana, cherry</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In summary, <code v-pre>for...in</code> <strong>can</strong> be used with arrays, but it’s better to use <code v-pre>for...of</code> for value iteration, especially to avoid unintended behavior with custom properties or non-numeric keys.</p>
<p>Be careful though: if the object comes from the server as JSON, there is no guarantee regarding the order of the properties in the object. So it’s usually best to stick to arrays when the order matters.</p>
</div></template>


