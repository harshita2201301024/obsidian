Time complexity - how much time an algorithm takes
Space Complexity - how much space an algorithm takes

Time complexity and space complexity are both metrics used to evaluate the efficiency of an algorithm. They measure different aspects of the algorithm's performance:

### **1. Time Complexity**

- **Definition:** Time complexity represents the amount of time an algorithm takes to run as a function of the size of its input.
- **Purpose:** Helps to estimate the computational time required for an algorithm to complete its task.
- **Notation:** Often expressed using Big-O notation (e.g., O(n)O(n)O(n), O(log⁡n)O(\log n)O(logn), O(n2)O(n^2)O(n2)).
- **Examples:**
    - **(O(1):** Constant time** - The algorithm takes the same amount of time regardless of input size.
    - **(O(n):** Linear time** - The time increases linearly with the input size.
    - **(O(n^2):** Quadratic time** - The time increases quadratically with the input size.
- **Focus:** Speed or number of operations.

---

### **2. Space Complexity**

- **Definition:** Space complexity represents the amount of memory an algorithm uses as a function of the size of its input.
- **Purpose:** Helps to estimate the memory requirements for running an algorithm.
- **Notation:** Also expressed using Big-O notation.
- **Components:**
    - **Fixed part:** Memory used by constants, variables, and program instructions.
    - **Variable part:** Memory used for dynamic data structures like arrays, recursion stacks, etc.
- **Examples:**
    - **(O(1):** Constant space** - Uses a fixed amount of memory.
    - **(O(n):** Linear space** - Uses memory proportional to the input size.
- **Focus:** Memory usage.

---

### **Key Differences**

| **Aspect**             | **Time Complexity**           | **Space Complexity**                |
| ---------------------- | ----------------------------- | ----------------------------------- |
| **Measures**           | Execution time                | Memory usage                        |
| **Primary Concern**    | Speed of the algorithm        | Memory required for execution       |
| **Optimization Focus** | Reducing number of operations | Reducing memory consumption         |
| **Example Problem**    | Sorting an array efficiently  | Managing memory for recursion calls |