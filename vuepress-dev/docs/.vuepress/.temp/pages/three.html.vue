<template><div><p>The &quot;Three Sum&quot; problem is a classic algorithm problem where you are given an array of integers, and you need to find all unique triplets in the array that sum up to zero. Here’s a step-by-step breakdown of how to approach this problem efficiently.</p>
<h3 id="problem-statement" tabindex="-1"><a class="header-anchor" href="#problem-statement"><span>Problem Statement:</span></a></h3>
<p>Given an array of integers <code v-pre>nums</code>, you need to find all unique triplets <code v-pre>(i, j, k)</code> such that:</p>
<ul>
<li><code v-pre>nums[i] + nums[j] + nums[k] == 0</code></li>
<li>The triplet <code v-pre>(i, j, k)</code> should be unique.</li>
</ul>
<h3 id="example-input" tabindex="-1"><a class="header-anchor" href="#example-input"><span>Example Input:</span></a></h3>
<p>js</p>
<p>Copy code</p>
<p><code v-pre>nums = [-1, 0, 1, 2, -1, -4]</code></p>
<h3 id="step-by-step-solution" tabindex="-1"><a class="header-anchor" href="#step-by-step-solution"><span>Step-by-Step Solution:</span></a></h3>
<ol>
<li>
<p><strong>Sort the Array</strong>:</p>
<ul>
<li>Sorting helps in two ways:
<ul>
<li>It allows us to efficiently skip duplicates.</li>
<li>It allows us to use a two-pointer technique to find the triplets.</li>
</ul>
</li>
</ul>
<p>After sorting, the array becomes:</p>
<p>js</p>
<p>Copy code</p>
<p><code v-pre>nums = [-4, -1, -1, 0, 1, 2]</code></p>
</li>
<li>
<p><strong>Loop Through the Array</strong>:</p>
<ul>
<li>We iterate through the array using a loop with index <code v-pre>i</code>, where <code v-pre>i</code> represents the first number of the triplet.</li>
<li>We want to find two other numbers (using a two-pointer technique) such that the sum of all three numbers is zero.</li>
</ul>
<p><strong>Key Considerations</strong>:</p>
<ul>
<li>Skip duplicate values for <code v-pre>i</code> to avoid repeating the same triplet.</li>
<li>For each <code v-pre>i</code>, use two pointers (<code v-pre>left</code> and <code v-pre>right</code>) to find the remaining two numbers that sum up to zero.</li>
</ul>
</li>
<li>
<p><strong>Two-Pointer Technique</strong>:</p>
<ul>
<li>After choosing <code v-pre>nums[i]</code> as the first number, set two pointers:
<ul>
<li><code v-pre>left</code> = <code v-pre>i + 1</code> (the next index)</li>
<li><code v-pre>right</code> = <code v-pre>nums.length - 1</code> (the last index of the array).</li>
</ul>
</li>
<li>The idea is to move the <code v-pre>left</code> pointer forward and the <code v-pre>right</code> pointer backward to check different combinations.</li>
</ul>
</li>
<li>
<p><strong>Finding Triplets</strong>:</p>
<ul>
<li>Check the sum of the triplet: <code v-pre>sum = nums[i] + nums[left] + nums[right]</code>.</li>
<li>If the sum is <strong>zero</strong>, we found a valid triplet. Add it to the result.</li>
<li>If the sum is <strong>less than zero</strong>, increment the <code v-pre>left</code> pointer to increase the sum.</li>
<li>If the sum is <strong>greater than zero</strong>, decrement the <code v-pre>right</code> pointer to decrease the sum.</li>
</ul>
</li>
<li>
<p><strong>Skip Duplicates</strong>:</p>
<ul>
<li>After finding a valid triplet, make sure to skip duplicates for both the <code v-pre>left</code> and <code v-pre>right</code> pointers:
<ul>
<li>If <code v-pre>nums[left] == nums[left + 1]</code>, increment the <code v-pre>left</code> pointer.</li>
<li>If <code v-pre>nums[right] == nums[right - 1]</code>, decrement the <code v-pre>right</code> pointer.</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Continue Until Pointers Meet</strong>:</p>
<ul>
<li>If <code v-pre>left</code> meets <code v-pre>right</code>, stop and move to the next <code v-pre>i</code>.</li>
</ul>
</li>
<li>
<p><strong>Edge Case</strong>:</p>
<ul>
<li>If there are fewer than three elements, return an empty array, as no triplet can be formed.</li>
</ul>
</li>
</ol>
<h3 id="full-code-example" tabindex="-1"><a class="header-anchor" href="#full-code-example"><span>Full Code Example:</span></a></h3>
<p>js</p>
<p>Copy code</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">threeSum</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Step 1: Sort the array</span></span>
<span class="line">  nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  </span>
<span class="line">  <span class="token comment">// Step 2: Loop through the array</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Skip duplicate values for i</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// Step 3: Use two pointers to find the other two numbers</span></span>
<span class="line">    <span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> sum <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      </span>
<span class="line">      <span class="token comment">// Step 4: Check the sum</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Found a valid triplet</span></span>
<span class="line">        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// Skip duplicates for left and right</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> left<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> right<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// Move both pointers after finding a valid triplet</span></span>
<span class="line">        left<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        right<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// If sum is less than 0, increase the left pointer</span></span>
<span class="line">        left<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// If sum is greater than 0, decrease the right pointer</span></span>
<span class="line">        right<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  </span>
<span class="line">  <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Example Usage</span></span>
<span class="line"><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">threeSum</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: [ [-1, -1, 2], [-1, 0, 1] ]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="explanation-of-the-code" tabindex="-1"><a class="header-anchor" href="#explanation-of-the-code"><span>Explanation of the Code:</span></a></h3>
<ol>
<li><strong>Sorting</strong> the array makes it easier to find triplets and handle duplicates.</li>
<li>The <strong>outer loop</strong> iterates through the array, fixing the first element (<code v-pre>nums[i]</code>).</li>
<li>For each <code v-pre>i</code>, the <strong>two-pointer technique</strong> is used to find pairs (<code v-pre>nums[left]</code> and <code v-pre>nums[right]</code>) such that their sum with <code v-pre>nums[i]</code> equals zero.</li>
<li>The result is stored in the <code v-pre>result</code> array, ensuring that all triplets are unique.</li>
<li>The time complexity of this approach is <strong>O(n²)</strong> because of the nested loops, which is efficient for this problem.</li>
</ol>
<h3 id="time-complexity" tabindex="-1"><a class="header-anchor" href="#time-complexity"><span>Time Complexity:</span></a></h3>
<ul>
<li>Sorting the array takes O(n log n).</li>
<li>The two-pointer technique inside the loop takes O(n) for each iteration.</li>
<li>Overall, the time complexity is O(n²).</li>
</ul>
<h3 id="space-complexity" tabindex="-1"><a class="header-anchor" href="#space-complexity"><span>Space Complexity:</span></a></h3>
<ul>
<li>The space complexity is O(1) if we exclude the space used to store the result, as we only use pointers and simple variables to track the state.</li>
</ul>
<h3 id="output-for-example" tabindex="-1"><a class="header-anchor" href="#output-for-example"><span>Output for Example:</span></a></h3>
<p>js</p>
<p>Copy code</p>
<p><code v-pre>[ [-1, -1, 2], [-1, 0, 1] ]</code></p>
<p>This solution effectively finds all unique triplets that sum to zero in the given array.</p>
</div></template>


