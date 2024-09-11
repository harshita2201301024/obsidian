
for in iterate over keys only not on values

for in should be used for object only not for array because it can have side effect. 

The `for...in` and `for...of` loops in JavaScript are used to iterate over values, but they work differently and are suited for different types of data:

### `for...in` loop:
- **Purpose**: Iterates over the **enumerable properties** (keys) of an object.
- **Use case**: Typically used for iterating over the properties (keys) of an object.
- **Syntax**:
  ```js
  for (let key in object) {
    console.log(key);  // Accesses the keys (property names)
  }
  ```

- **Behavior**:
  - Iterates over all enumerable properties of an object, including inherited ones.
  - Should not be used for arrays if you want to access values (since it iterates over keys, not values).

### Example:
```js
const person = { name: 'John', age: 30 };
for (let key in person) {
  console.log(key);   // name, age (keys)
  console.log(person[key]);  // John, 30 (values)
}
```

### `for...of` loop:
- **Purpose**: Iterates over **iterable objects** like arrays, strings, maps, sets, etc.
- **Use case**: Ideal for iterating over the **values** of an array or other iterable collections.
- **Syntax**:
  ```js
  for (let value of iterable) {
    console.log(value);  // Accesses the values directly
  }
  ```

- **Behavior**:
  - Iterates over the values of an iterable object.
  - Works with arrays, strings, maps, sets, and more (but not plain objects directly).

### Example:
```js
const fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);  // apple, banana, cherry (values)
}
```

### Summary:
- **`for...in`**: Iterates over keys (property names) of an object.
- **`for...of`**: Iterates over values of an iterable (like arrays or strings).


You can use `for...in` on an array, but it's generally **not recommended** for iterating over array elements, as `for...in` is intended for iterating over the **keys (or property names)** of an object, not the values.

### How `for...in` works on an array:
- It will iterate over the **indices** of the array (which are the keys in an array object) rather than the values.
- If the array has custom properties added (arrays are objects in JavaScript), `for...in` will also iterate over those, which can lead to unexpected behavior.

### Example of `for...in` on an array:
```js
const fruits = ['apple', 'banana', 'cherry'];

for (let index in fruits) {
  console.log(index);  // Outputs: 0, 1, 2 (the indices)
  console.log(fruits[index]);  // Outputs: apple, banana, cherry (the values)
}
```

### Why it's not ideal:
1. **Iterates over indices, not values**: In the example, it logs the indices (`0`, `1`, `2`), which is not typically what you want when working with arrays.
2. **Iterates over all enumerable properties**: If you add properties to the array, `for...in` will include them in the iteration, which can cause unexpected results.

### Example with a custom property:
```js
const fruits = ['apple', 'banana', 'cherry'];
fruits.custom = 'mango';

for (let index in fruits) {
  console.log(index);  // Outputs: 0, 1, 2, custom (including the custom property)
  console.log(fruits[index]);  // Outputs: apple, banana, cherry, mango (custom value)
}
```

### Better option for arrays:
Use `for...of` when working with arrays, as it iterates over the **values** directly and avoids the issues with custom properties.

```js
for (let fruit of fruits) {
  console.log(fruit);  // Outputs: apple, banana, cherry
}
```

In summary, `for...in` **can** be used with arrays, but it’s better to use `for...of` for value iteration, especially to avoid unintended behavior with custom properties or non-numeric keys.
