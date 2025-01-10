The "Three Sum" problem is a classic algorithm problem where you are given an array of integers, and you need to find all unique triplets in the array that sum up to zero. Here’s a step-by-step breakdown of how to approach this problem efficiently.

### Problem Statement:

Given an array of integers `nums`, you need to find all unique triplets `(i, j, k)` such that:

- `nums[i] + nums[j] + nums[k] == 0`
- The triplet `(i, j, k)` should be unique.

### Example Input:

js

Copy code

`nums = [-1, 0, 1, 2, -1, -4]`

### Step-by-Step Solution:

1. **Sort the Array**:
    
    - Sorting helps in two ways:
        - It allows us to efficiently skip duplicates.
        - It allows us to use a two-pointer technique to find the triplets.
    
    After sorting, the array becomes:
    
    js
    
    Copy code
    
    `nums = [-4, -1, -1, 0, 1, 2]`
    
2. **Loop Through the Array**:
    
    - We iterate through the array using a loop with index `i`, where `i` represents the first number of the triplet.
    - We want to find two other numbers (using a two-pointer technique) such that the sum of all three numbers is zero.
    
    **Key Considerations**:
    
    - Skip duplicate values for `i` to avoid repeating the same triplet.
    - For each `i`, use two pointers (`left` and `right`) to find the remaining two numbers that sum up to zero.
3. **Two-Pointer Technique**:
    
    - After choosing `nums[i]` as the first number, set two pointers:
        - `left` = `i + 1` (the next index)
        - `right` = `nums.length - 1` (the last index of the array).
    - The idea is to move the `left` pointer forward and the `right` pointer backward to check different combinations.
4. **Finding Triplets**:
    
    - Check the sum of the triplet: `sum = nums[i] + nums[left] + nums[right]`.
    - If the sum is **zero**, we found a valid triplet. Add it to the result.
    - If the sum is **less than zero**, increment the `left` pointer to increase the sum.
    - If the sum is **greater than zero**, decrement the `right` pointer to decrease the sum.
5. **Skip Duplicates**:
    
    - After finding a valid triplet, make sure to skip duplicates for both the `left` and `right` pointers:
        - If `nums[left] == nums[left + 1]`, increment the `left` pointer.
        - If `nums[right] == nums[right - 1]`, decrement the `right` pointer.
6. **Continue Until Pointers Meet**:
    
    - If `left` meets `right`, stop and move to the next `i`.
7. **Edge Case**:
    
    - If there are fewer than three elements, return an empty array, as no triplet can be formed.

### Full Code Example:

js

Copy code

```js
function threeSum(nums) {
  // Step 1: Sort the array
  nums.sort((a, b) => a - b);
  
  const result = [];
  
  // Step 2: Loop through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate values for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    // Step 3: Use two pointers to find the other two numbers
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      // Step 4: Check the sum
      if (sum === 0) {
        // Found a valid triplet
        result.push([nums[i], nums[left], nums[right]]);
        
        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        
        // Move both pointers after finding a valid triplet
        left++;
        right--;
      } else if (sum < 0) {
        // If sum is less than 0, increase the left pointer
        left++;
      } else {
        // If sum is greater than 0, decrease the right pointer
        right--;
      }
    }
  }
  
  return result;
}

// Example Usage
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); // Output: [ [-1, -1, 2], [-1, 0, 1] ]

```
### Explanation of the Code:

1. **Sorting** the array makes it easier to find triplets and handle duplicates.
2. The **outer loop** iterates through the array, fixing the first element (`nums[i]`).
3. For each `i`, the **two-pointer technique** is used to find pairs (`nums[left]` and `nums[right]`) such that their sum with `nums[i]` equals zero.
4. The result is stored in the `result` array, ensuring that all triplets are unique.
5. The time complexity of this approach is **O(n²)** because of the nested loops, which is efficient for this problem.

### Time Complexity:

- Sorting the array takes O(n log n).
- The two-pointer technique inside the loop takes O(n) for each iteration.
- Overall, the time complexity is O(n²).

### Space Complexity:

- The space complexity is O(1) if we exclude the space used to store the result, as we only use pointers and simple variables to track the state.

### Output for Example:

js

Copy code

`[ [-1, -1, 2], [-1, 0, 1] ]`

This solution effectively finds all unique triplets that sum to zero in the given array.