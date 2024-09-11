
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

