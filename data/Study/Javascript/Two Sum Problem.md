### Problem Statement

Given an array of integers `nums` and an integer `target`, return **the indices of the two numbers** such that they add up to `target`.

**Assumptions:**

1. There is exactly one solution.
2. You cannot use the same element twice.

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1] 
// Explanation: nums[0] + nums[1] = 2 + 7 = 9


function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

### Approach 2: Hash Map (Efficient)

Use a hash map to store the difference of `target - nums[i]` as a key.

**Code:**

javascript

Copy code

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}
const a = [1,13,23,12,65,0,2]

target = 65

{1:0}



