
// Interview 1

// 1. What is closure in Javascript? - 5 min

In JavaScript, a closure is a feature that allows a function to remember the variables and parameters from its lexical scope even after the function has finished executing. In simpler terms, a closure gives you access to an outer function's scope from an inner function.

```
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from outerFunction's scope
  }

  return innerFunction;
}

let closureExample = outerFunction(); // outerFunction is executed, but innerFunction is returned
closureExample(); // Even though outerFunction has finished executing, innerFunction still has access to outerVariable

```


// 2. What is difference between var, let & const? - 2min

`var`, `let`, and `const` are all keywords used for variable declaration in JavaScript, but they have some differences in terms of scope, reassignment, and hoisting:

1. **var**:
    
    - Variables declared with `var` are function-scoped or globally-scoped. They are hoisted to the top of their function or global scope.
    - They can be redeclared and reassigned.
    - Example:
        
        javascriptCopy code
        
        `var x = 10; var x = 20; // Redeclaration x = 30;     // Reassignment`
        
2. **let**:
    
    - Variables declared with `let` are block-scoped. They are not hoisted to the top of the block.
    - They cannot be redeclared within the same block, but they can be reassigned.
    - Example:
        
        javascriptCopy code
        
        `let y = 10; let y = 20; // Error: SyntaxError: Identifier 'y' has already been declared y = 30;     // Reassignment`
        
3. **const**:
    
    - Variables declared with `const` are also block-scoped like `let`.
    - They must be initialized at the time of declaration and cannot be reassigned.
    - However, for objects and arrays, while the binding (the variable itself) cannot be reassigned, the properties or elements of the object or array can be mutated.
    - Example:
        
        javascriptCopy code
        
        `const z = 10; z = 20; // Error: TypeError: Assignment to constant variable const obj = { prop: 10 }; obj.prop = 20; // Valid, mutating the property of the object`
        

In general, it's recommended to use `const` by default, and only use `let` when you need to reassign the variable's value. `var` is less commonly used nowadays due to its function-level scope and potential hoisting-related issues.
 
// 3. Object.freeze vs Object.seal? - 2 min

`   Object.freeze()` and `Object.seal()` are both methods in JavaScript used to control object mutability, but they have different behaviors:

1. `Object.freeze()`:
    - Freezing an object makes it immutable, meaning its properties cannot be added, removed, or modified.
    - Attempts to change the properties of a frozen object (such as setting new properties, deleting existing properties, or changing the values of existing properties) will fail silently in non-strict mode, and throw an error in strict mode.
    - It deeply freezes an object, meaning nested objects within the frozen object are also frozen.

Example:

javascriptCopy code

`const obj = {   prop: 123 };  Object.freeze(obj);  // Trying to modify the frozen object obj.prop = 456; // This assignment is ignored in non-strict mode, throws an error in strict mode delete obj.prop; // This operation is ignored in non-strict mode, throws an error in strict mode`

2. `Object.seal()`:
    - Sealing an object prevents new properties from being added to it and marks all existing properties as non-configurable. This means existing properties can't be deleted, but their values can still be changed if they are writable.
    - Unlike `Object.freeze()`, `Object.seal()` does not affect nested objects. Only the properties of the sealed object are sealed, not the nested objects.

Example:

javascriptCopy code

`const obj = {   prop: 123 };  Object.seal(obj);  // Trying to modify the sealed object obj.prop = 456; // This assignment is allowed delete obj.prop; // This operation is ignored obj.newProp = "new value"; // This operation is ignored  console.log(obj); // Output: { prop: 456 }`

In summary, `Object.freeze()` makes an object deeply immutable, while `Object.seal()` makes an object non-extensible and prevents the configuration of existing properties without affecting nested objects.

// 4. stopPropogation vs stopImmidiatePropogation? - 5 min

 `stopPropagation` and `stopImmediatePropagation` are both methods used in JavaScript to control event propagation in the DOM (Document Object Model).

1. **`stopPropagation()`**: This method stops the propagation of the current event further in the capturing and bubbling phases. It prevents parent elements from receiving the event. However, other event handlers on the same element will still be executed. This means that if there are multiple event listeners attached to the same element for the same event type, all of them will be executed except the ones added after `stopPropagation()` is called.

Example:

javascriptCopy code

`element.addEventListener('click', function(event) {     console.log('First listener');     event.stopPropagation(); });  element.addEventListener('click', function(event) {     console.log('Second listener'); });`

In this example, when the element is clicked, only 'First listener' will be logged.

2. **`stopImmediatePropagation()`**: This method not only stops the propagation of the current event but also prevents other event handlers on the same element from being executed. It stops the further processing of the event, including the execution of other event listeners attached to the same element for the same event type.

Example:

javascriptCopy code

`element.addEventListener('click', function(event) {     console.log('First listener');     event.stopImmediatePropagation(); });  element.addEventListener('click', function(event) {     console.log('Second listener'); });`

In this example, when the element is clicked, only 'First listener' will be logged, and 'Second listener' will not be executed.

In summary, `stopPropagation()` stops the event from propagating to parent elements, while `stopImmediatePropagation()` does that and also prevents other listeners on the same element from being executed.

// 5. What is virtual dom in react js and its application? 5 min

  
In React.js, the Virtual DOM (Document Object Model) is a programming concept that improves performance and optimizes the updating process of the actual DOM.

Here's how it works:

1. **DOM**: The DOM is a tree-like structure that represents the structure of a web page. Each element in the HTML document is a node in this tree. Manipulating the DOM directly can be slow, especially when dealing with complex web applications with frequent updates.
    
2. **Virtual DOM**: React introduces the concept of a Virtual DOM, which is a lightweight copy of the actual DOM. It's a JavaScript representation of the DOM tree. React components are virtual representations of UI elements.
    
3. **Diffing Algorithm**: When changes are made to the data or state in a React application, React doesn't immediately update the actual DOM. Instead, it first updates the Virtual DOM. Then, it performs a process called "diffing", where it compares the updated Virtual DOM with the previous version to identify the minimal set of changes needed to update the actual DOM.
    
4. **Reconciliation**: Once React identifies the differences (or "diffs"), it only updates those specific parts of the actual DOM that have changed. This process is much more efficient than re-rendering the entire DOM tree.
    
5. **Batch Updates**: React also optimizes performance by batching multiple updates into a single update operation, further reducing the number of times the actual DOM is manipulated.
    

By using the Virtual DOM and its efficient updating process, React is able to provide a smoother and faster user experience, particularly in applications with dynamic and frequently changing UIs.

// 6. What is the application of useCallback and useMemo? Give differences between them. - 5 min

`useCallback` and `useMemo` are both hooks provided by React to optimize the performance of functional components by memoizing values. They are particularly useful in scenarios where you want to prevent unnecessary re-renders caused by creating new function references or computing expensive values on every render.

Here's a brief explanation of each and the difference between them:

1. `useCallback`:
    
    - `useCallback` is a hook used for memoizing functions.
    - It returns a memoized version of the callback function that only changes if one of the dependencies has changed.
    - It's useful when passing callbacks to child components that rely on reference equality (e.g., `onClick`, `onChange` handlers) to prevent unnecessary re-renders.
    - Syntax: `const memoizedCallback = useCallback(callback, dependencies)`.
    - Example usage:
        
        jsxCopy code
        
        `const memoizedCallback = useCallback(() => {   doSomething(); }, [dependency]);`
        
2. `useMemo`:
    
    - `useMemo` is a hook used for memoizing values.
    - It returns a memoized value that only recalculates when one of the dependencies has changed.
    - It's useful when you need to compute a value that is computationally expensive and want to avoid re-computation on every render.
    - Syntax: `const memoizedValue = useMemo(() => computeExpensiveValue, dependencies)`.
    - Example usage:
        
        jsxCopy code
        
        `const memoizedValue = useMemo(() => {   return computeExpensiveValue(dependency); }, [dependency]);`
        

Difference:

- The key difference between `useCallback` and `useMemo` is what they memoize:
    - `useCallback` memoizes functions.
    - `useMemo` memoizes values.
- They both accept a dependency array as the second argument, but the purpose of this array differs slightly:
    - In `useCallback`, the dependencies are used to determine when to recreate the memoized function.
    - In `useMemo`, the dependencies are used to determine when to recalculate the memoized value.
- `useCallback` is primarily for optimizing the rendering performance of components that rely on reference equality for props, while `useMemo` is for optimizing the performance of expensive computations or calculations within a component.

// 7. How can we improve performance of react js application? - 5 min

Improving the performance of a React.js application involves various techniques and strategies aimed at optimizing rendering, reducing load times, and enhancing user experience. Here are some ways to achieve that:

1. **Code Splitting**: Split your code into smaller chunks using techniques like dynamic imports or React.lazy() for components. This ensures that only necessary code is loaded initially, reducing the initial load time.
    
2. **Bundle Size Optimization**: Minimize the size of your JavaScript bundle by removing unnecessary dependencies, using tools like Webpack or Parcel, and enabling compression.
    
3. **Memoization**: Use memoization techniques (e.g., React.memo, useMemo, or useCallback hooks) to prevent unnecessary re-renders and computations.
    
4. **Virtualization**: Implement virtualization techniques for large lists or grids to render only the visible items, thereby improving rendering performance. Libraries like react-virtualized or react-window can help with this.
    
5. **Optimize Rendering**: Analyze and optimize the rendering performance using tools like React DevTools or browser developer tools. Avoid unnecessary re-renders by optimizing shouldComponentUpdate or PureComponent usage.
    
6. **Reduce Re-renders**: Identify components that unnecessarily re-render and optimize them using shouldComponentUpdate or React.memo.
    
7. **Lazy Loading Images**: Load images lazily using techniques like Intersection Observer API or libraries like React-Lazyload to defer loading images until they are near the viewport.
    
8. **Server-side Rendering (SSR)**: Implement SSR to pre-render React components on the server, improving initial load time and SEO.
    
9. **Tree Shaking**: Use tools like Webpack to eliminate dead code and unused dependencies from your bundle.
    
10. **Optimize Network Requests**: Minimize the number of network requests, reduce their size, and utilize techniques like HTTP caching, CDN caching, and prefetching/preloading resources.
    
11. **Performance Monitoring**: Continuously monitor your application's performance using tools like Lighthouse, Google PageSpeed Insights, or New Relic, and address any identified issues.
    
12. **State Management Optimization**: Use efficient state management libraries like Redux or Context API and ensure that state updates are optimized to prevent unnecessary re-renders.
    
13. **Use Web Workers**: Offload heavy computational tasks to web workers to keep the main thread free for handling user interactions and rendering.
    
14. **Optimize for Mobile**: Ensure your application is optimized for mobile devices by using responsive design, lazy loading resources, and minimizing JavaScript execution.
    
15. **Cache Data**: Cache frequently accessed data locally (e.g., using localStorage or IndexedDB) to reduce server requests and improve responsiveness.
    

By implementing these strategies judiciously, you can significantly enhance the performance of your React.js application and deliver a smoother user experience.

// 8. Is redux synchronous or asynchronous? what does it makes asynchronous? - 5 min

Redux itself is synchronous. It operates synchronously when you dispatch actions and update the state through reducers. However, asynchronous behavior can be introduced in Redux by middleware such as Redux Thunk or Redux Saga.

1. **Redux Thunk**: This middleware allows action creators to return functions instead of plain action objects. These functions can perform asynchronous operations, such as API calls, before dispatching the actual action objects.

2. **Redux Saga**: Redux Saga is another middleware that enables more complex asynchronous flows using ES6 generators. Sagas can listen for specific actions and trigger other actions or side effects in response. They provide a more structured way to handle asynchronous behavior compared to Thunks.

Both of these middleware enable Redux to handle asynchronous operations effectively, making it a powerful tool for managing state in applications with asynchronous data flows.

// 9. Pros and cons of using redux. - 5 min

Redux is a state management library primarily used with React, though it can be integrated with other frameworks as well. Here are some pros and cons of using Redux:

**Pros:**

1. **Predictable state management:** Redux enforces a strict unidirectional data flow, which makes it easier to understand how data changes occur within your application. This predictability can lead to better maintainability and debugging.

2. **Centralized state:** Redux stores the entire state of your application in a single store. This makes it easy to access and manipulate state from any part of your application without having to pass props down through multiple layers of components.

3. **Time travel debugging:** Redux allows you to record and replay state changes, which can be incredibly useful for debugging purposes. This feature enables you to step backward and forward through state changes, making it easier to identify the source of bugs.

4. **Ecosystem and tooling:** Redux has a large ecosystem of extensions and middleware that can enhance its capabilities. Additionally, there are many tools available for debugging, testing, and monitoring Redux applications, which can streamline development workflows.

5. **Separation of concerns:** Redux encourages separating the logic for managing state from the presentation layer of your application. This separation can lead to cleaner, more modular code that is easier to maintain and test.

**Cons:**

1. **Boilerplate code:** Implementing Redux in your application typically requires writing a significant amount of boilerplate code, including action creators, reducers, and connecting components to the Redux store. This can increase development time and complexity, especially for smaller applications.

2. **Learning curve:** Redux has a steep learning curve, particularly for developers who are new to the concepts of state management and functional programming. Understanding concepts like reducers, actions, and immutability can take time and effort to grasp fully.

3. **Overhead for small applications:** For small or simple applications, the overhead of using Redux may outweigh the benefits it provides. In these cases, simpler state management solutions like React's built-in useState hook may be more appropriate.

4. **Potential performance impact:** While Redux itself is fast and efficient, improper use or excessive reliance on Redux can lead to performance issues, particularly if your application has a large amount of state or frequent state updates.

5. **Debugging complexity:** While Redux's time travel debugging feature can be powerful, it can also add complexity to the debugging process, especially for developers who are not familiar with Redux's debugging tools and techniques.

In summary, Redux can be a powerful tool for managing state in complex React applications, but it also comes with its own set of challenges and trade-offs. It's essential to weigh the pros and cons carefully and consider whether Redux is the right choice for your specific project and development team.

// 10. What are the different positions in css? explain each of them. - 5 min

In CSS (Cascading Style Sheets), there are several position properties that determine how an element is positioned within its containing element. Each position property offers different ways to position elements on a web page. Here are the main position properties:

1. Static:
   - This is the default position property.
   - Elements with `position: static;` are positioned according to the normal flow of the document.
   - They are not affected by the top, bottom, left, and right properties.

2. Relative:
   - Elements with `position: relative;` are positioned relative to their normal position.
   - If you apply top, bottom, left, or right properties to a relatively positioned element, it will be offset from its normal position, but other elements will not be affected.
   - The element's position in the normal flow remains, so other elements are positioned as if the element were not moved.

3. Absolute:
   - Elements with `position: absolute;` are positioned relative to their closest positioned ancestor (i.e., an ancestor with a position other than static), or to the initial containing block if no positioned ancestor is found.
   - Absolute positioned elements are removed from the normal flow of the document, meaning they do not affect the layout of other elements.
   - When you use `position: absolute;`, you typically pair it with top, bottom, left, or right properties to specify the exact position of the element.

4. Fixed:
   - Elements with `position: fixed;` are positioned relative to the viewport, which means they always stay in the same place even if the page is scrolled.
   - Fixed positioned elements are removed from the normal document flow, similar to absolute positioned elements.
   - They are often used for elements like headers, footers, or navigation bars that you want to remain visible regardless of scrolling.

5. Sticky:
   - Elements with `position: sticky;` are positioned based on the user's scroll position.
   - They behave like relatively positioned elements until the user scrolls to a certain point (defined by top, bottom, left, or right properties), at which point they become "stuck" and remain fixed in that position.
   - Once the user scrolls past the specified point, the element returns to its normal flow behavior.

Each position property offers flexibility in positioning elements on a web page, allowing designers to create complex layouts and designs. Understanding how each position property works is essential for effective CSS styling.


// 11. What is the difference between inline, inline-block, and block?
// Block Element: The block elements always start on a new line. They will also take space for an entire row or width. List of block elements are <div>, <p>.
// Inline Elements: Inline elements don't start on a new line, they appear on the same line as the content and tags beside them. Some examples of inline elements are <a>, <span> , <strong>, and <img> tags.
// Inline Block Elements: Inline-block elements are similar to inline elements, except they can have padding and margins and set height and width values.

// 12. What are the benefits of using TypeScript?

TypeScript offers several benefits over traditional JavaScript:

1. **Static Typing**: TypeScript introduces static typing to JavaScript, allowing developers to define types for variables, parameters, and return values. This helps catch type-related errors during development, improving code reliability and maintainability.

2. **Enhanced Code Quality**: With static typing, developers can write more robust code. TypeScript's compiler can detect common errors like typos, incorrect function calls, and type mismatches at compile-time rather than runtime, reducing bugs and improving code quality.

3. **Improved Tooling Support**: TypeScript integrates well with modern development tools like Visual Studio Code, offering features such as code navigation, intelligent code completion, refactoring tools, and comprehensive error checking. This improves developer productivity and code understanding.

4. **Better IDE Integration**: TypeScript provides enhanced IDE support with features like IntelliSense, which offers context-aware code suggestions, type information, and documentation hints as you type. This makes development more efficient and less error-prone.

5. **Readability and Maintainability**: By adding explicit type annotations, TypeScript code becomes more self-documenting. This makes it easier for developers to understand the codebase, collaborate effectively, and maintain the code over time.

6. **ESNext Features Compatibility**: TypeScript supports the latest ECMAScript features (ES6, ES7, ESNext) along with proposed JavaScript features through the use of compiler options. This enables developers to write modern JavaScript code while targeting older browsers through transpilation.

7. **Stronger Type Checking**: TypeScript's type system allows developers to express complex data structures and relationships between different parts of their codebase. This leads to more expressive and self-explanatory code, reducing the likelihood of runtime errors.

8. **Ecosystem and Community**: TypeScript has a large and active community, with many libraries and frameworks providing TypeScript definitions and typings. This enables TypeScript developers to leverage existing JavaScript libraries and tools while enjoying the benefits of static typing.

Overall, TypeScript offers a more robust and predictable development experience compared to plain JavaScript, making it particularly suitable for large-scale applications and teams.


// 13. Difference between async await and promise?

Async/await and promises are both features in JavaScript used to handle asynchronous operations, but they serve different purposes and have different syntaxes.

1. **Promises**:
   - Promises are objects representing the eventual completion or failure of an asynchronous operation.
   - They have three states: pending, fulfilled, or rejected.
   - Promises have methods such as `then()` and `catch()` to handle the result or error of the asynchronous operation respectively.
   - Promises provide a cleaner alternative to nested callbacks, making asynchronous code more readable and manageable.
   - Promises are chainable, meaning you can chain multiple asynchronous operations using `.then()`.

Example of a Promise:

```
function asyncOperation() {
    return new Promise((resolve, reject) => {
        // Asynchronous operation
        setTimeout(() => {
            resolve('Operation completed successfully');
        }, 1000);
    });
}

asyncOperation()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
```

2. **Async/await**:
   - Async/await is a syntax built on top of promises, introduced in ES2017 (ES8), which makes asynchronous code look and behave more like synchronous code.
   - The `async` keyword is used to define an asynchronous function, which always returns a promise.
   - Inside async functions, you can use the `await` keyword before an expression that returns a promise. This pauses the execution of the async function until the promise is resolved and returns the resolved value.
   - Async/await makes asynchronous code more readable and easier to reason about, especially when dealing with multiple asynchronous operations that depend on each other.

Example of async/await:

```javascript
async function asyncOperation() {
    return new Promise((resolve, reject) => {
        // Asynchronous operation
        setTimeout(() => {
            resolve('Operation completed successfully');
        }, 1000);
    });
}

async function executeAsyncOperation() {
    try {
        const result = await asyncOperation();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

executeAsyncOperation();
```

In summary, while both promises and async/await are used for handling asynchronous operations in JavaScript, async/await provides a more concise and readable syntax, especially for handling asynchronous code with multiple dependent operations.


setTimeout(() => {
  console.log('b')
}, 0)
Promise.resolve().then(() => {
  console.log('a')
})
console.log('c')

c
a
b



// 16. Please give me an output for this? Why?
for (var i = 0; i < 5; i += 1) {
  setTimeout(() => {
    console.log(i);
  }, [i * 1000]);
}
// output = 5, 5, 5, 5, 5 - after execution each print in 1 second.
// What changes do we made if we want to print 1, 2, 3, 4, 5 after 1 second?

```
for (var i = 1; i <= 5; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, index * 1000);
  })(i);
}
```

```
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
```

// 17. Write a polyfill for debounce.
function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

A debounce function ensures that a particular function is not called more than once within a specified time interval, even if it's triggered multiple times. Here's a simple polyfill for the debounce function in JavaScript:

```
function debounce(cb, delay = 1000) { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => { cb(...args); }, delay); }; }
```

// 18. DS & Algo
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

const arr = [2, 7, 11, 15];
const sum = 9;

function findElement(arr, sum) {
  // TODO
}

console.log(findElement(arr, sum)); // output should be [0, 1]

function findElement(nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numIndices.hasOwnProperty(complement)) {
      return [numIndices[complement], i];
    }
    numIndices[nums[i]] = i;
  }

  return null; // If no solution is found
}

const arr = [2, 7, 11, 15];
const sum = 9;

console.log(findElement(arr, sum)); // Output: [0, 1]


function findElement(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null; // If no solution is found
}

const arr = [2, 7, 11, 15];
const sum = 9;

console.log(findElement(arr, sum)); // Output: [0, 1]



// Interview 2

// 1. What is prototype in Javascript? Why we are needed?

In JavaScript, a prototype is an internal property of objects that allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype property by default, which initially points to a built-in Object prototype object.

Prototypes are needed in JavaScript for several reasons:

1. **Code Reusability**: Prototypes allow for the creation of objects that inherit properties and methods from other objects, promoting code reusability.

2. **Efficiency**: Prototypes enable efficient memory usage by allowing multiple objects to share the same properties and methods defined in their prototype chain.

3. **Dynamic Nature**: Prototypes support the dynamic addition and modification of properties and methods during runtime, facilitating flexible object behavior.

In JavaScript, a prototype is an internal property of objects that allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype property by default, which initially points to a built-in Object prototype object.

Prototypes are needed in JavaScript for several reasons:

1. **Code Reusability**: Prototypes allow for the creation of objects that inherit properties and methods from other objects, promoting code reusability.

2. **Efficiency**: Prototypes enable efficient memory usage by allowing multiple objects to share the same properties and methods defined in their prototype chain.

3. **Dynamic Nature**: Prototypes support the dynamic addition and modification of properties and methods during runtime, facilitating flexible object behavior.

Here's an example to illustrate prototypes in JavaScript:

```javascript
// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype of Person
Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};

// Create an instance of Person
var person1 = new Person("Alice", 30);

// Call the method defined in the prototype
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.

// Create another instance of Person
var person2 = new Person("Bob", 25);

// Call the same method on the new instance
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.
```

In this example:

- We define a constructor function `Person` which initializes `name` and `age` properties for a person object.
- We then add a `sayHello` method to the `Person.prototype`. This method will be shared among all instances of the `Person` object.
- We create two instances of `Person`, `person1` and `person2`, and call the `sayHello` method on each of them. Both instances can access and use the `sayHello` method defined in the prototype.

// 2. What is difference between bind, call & apply?

`bind`, `call`, and `apply` are all methods used in JavaScript for managing the `this` keyword and invoking functions with a specific context. Here's a breakdown of their differences:

1. **bind**:
   - `bind` creates a new function instance with a specified `this` value and, optionally, some initial arguments.
   - It does not invoke the function immediately. Instead, it returns a new function that, when called, will have its `this` keyword set to the provided value.
   - It's useful when you want to permanently bind a specific context to a function, especially when you're passing that function around as a callback or assigning it to an event handler.

   Example:
   ```javascript
   const obj = { x: 42 };

   function getX() {
       return this.x;
   }

   const boundGetX = getX.bind(obj);
   console.log(boundGetX()); // Outputs: 42
   ```

2. **call**:
   - `call` invokes a function with a specified `this` value and arguments provided individually.
   - It immediately invokes the function with the provided context and arguments.

   Example:
   ```javascript
   const obj1 = { x: 42 };
   const obj2 = { x: 100 };

   function getX() {
       return this.x;
   }

   console.log(getX.call(obj1)); // Outputs: 42
   console.log(getX.call(obj2)); // Outputs: 100
   ```

3. **apply**:
   - `apply` is similar to `call`, but it takes arguments as an array.
   - It also immediately invokes the function with the provided context and arguments.

   Example:
   ```javascript
   const obj1 = { x: 42 };
   const obj2 = { x: 100 };

   function getX() {
       return this.x;
   }

   console.log(getX.apply(obj1)); // Outputs: 42
   console.log(getX.apply(obj2)); // Outputs: 100
   ```

In summary:
- `bind`: Creates a new function with a specific context.
- `call`: Invokes a function with a specific context and arguments passed individually.
- `apply`: Invokes a function with a specific context and arguments passed as an array.

// 3. Event bubbling vs Event capturing? What do we use it for?
									Event bubbling and event capturing are two different mechanisms in the event propagation model of the Document Object Model (DOM) in web browsers.

1. **Event Bubbling:**
   - In event bubbling, when an event occurs on a DOM element, it first triggers the event on the innermost (deepest) element and then propagates up the DOM tree to trigger the same event on its ancestors.
   - So, if you have nested elements and an event occurs on the innermost element, the event will "bubble up" through its ancestors, triggering the same event on each ancestor in turn.
   - It is the default behavior in most browsers.
   - Event listeners attached to the outer elements can catch events triggered by their inner elements during the bubbling phase.

2. **Event Capturing:**
   - In event capturing, the event is first captured by the outermost (root) element and then propagated down the DOM tree to trigger the event on the innermost element.
   - It's the opposite of event bubbling.
   - Event listeners attached to the outer elements can intercept events triggered by their inner elements during the capturing phase.

### Usage:

1. **Event Bubbling:**
   - Often used when you want to handle an event at a higher level in the DOM hierarchy. For example, if you have a list of items with click handlers, you might want a single click handler on a parent element to handle clicks on any of the list items.
   - It simplifies event delegation where you attach a single event listener to a parent element rather than multiple listeners to each child element.

2. **Event Capturing:**
   - Less commonly used but can be useful in certain scenarios where you want to intercept events at a higher level before they reach their target elements.
   - In some cases, it may be useful for implementing event handling that requires a strict order of processing, especially in complex applications.

### Example:

```html
<div id="outer">
  <div id="middle">
    <div id="inner">Click me!</div>
  </div>
</div>

<script>
  const outer = document.getElementById('outer');
  const middle = document.getElementById('middle');
  const inner = document.getElementById('inner');

  outer.addEventListener('click', () => console.log('Outer clicked - bubbling'));
  middle.addEventListener('click', () => console.log('Middle clicked - bubbling'));
  inner.addEventListener('click', () => console.log('Inner clicked - bubbling'), false);

  outer.addEventListener('click', () => console.log('Outer clicked - capturing'), true);
  middle.addEventListener('click', () => console.log('Middle clicked - capturing'), true);
  inner.addEventListener('click', () => console.log('Inner clicked - capturing'), true);
</script>
```

In this example, if you click on the innermost element, you will first see the capturing phase messages, then the bubbling phase messages, demonstrating the order in which events are captured and bubbled.


// 4. Difference between splice and slice?

`splice` and `slice` are both methods used in JavaScript for manipulating arrays, but they serve different purposes.

1. `splice()`:
   - `splice()` is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   - It modifies the original array.
   - The syntax for `splice()` is `array.splice(start, deleteCount, item1, item2, ...)`.
   - `start`: The index at which to start changing the array.
   - `deleteCount`: An integer indicating the number of elements in the array to remove from `start`.
   - `item1, item2, ...`: The elements to add to the array, beginning from the `start` index.
   - Example:
     ```javascript
     let arr = [1, 2, 3, 4, 5];
     arr.splice(2, 1); // Removes 1 element from index 2
     // arr is now [1, 2, 4, 5]
     ```

2. `slice()`:
   - `slice()` returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start` and `end` represent the index of items in that array.
   - It does not modify the original array.
   - The syntax for `slice()` is `array.slice(start, end)`.
   - `start`: The beginning index of the portion to extract. If negative, it will be treated as `array.length + start`.
   - `end`: The end index (exclusive) of the portion to extract. If negative, it will be treated as `array.length + end`.
   - Example:
     ```javascript
     let arr = [1, 2, 3, 4, 5];
     let newArr = arr.slice(1, 4); // Extracts elements from index 1 to 3 (4 not included)
     // newArr is [2, 3, 4], arr is unchanged
     ```

In summary, `splice()` is used to modify the original array by adding, removing, or replacing elements, while `slice()` is used to extract a portion of the original array into a new array without modifying the original array.

// 5. What is difference between controlled and uncontrolled component?

In the context of web development, controlled and uncontrolled components are terminologies often associated with forms and form elements. Here's the difference between the two:

1. **Controlled Component**:
   - In a controlled component, form data is handled by React components by keeping the form data in the component's state.
   - Changes to the form elements are handled through React state updates, typically using event handlers like `onChange`.
   - The form elements' values are controlled by React state, hence the term "controlled component".
   - Example:
     ```jsx
     class ControlledComponent extends React.Component {
       constructor(props) {
         super(props);
         this.state = {
           value: ''
         };
         this.handleChange = this.handleChange.bind(this);
       }

       handleChange(event) {
         this.setState({ value: event.target.value });
       }

       render() {
         return (
           <input
             type="text"
             value={this.state.value}
             onChange={this.handleChange}
           />
         );
       }
     }
     ```

2. **Uncontrolled Component**:
   - In an uncontrolled component, form data is handled by the DOM itself rather than by React state.
   - The form elements' values are not controlled by React; instead, their values are accessed directly through the DOM using refs or other methods after the component has been rendered.
   - Changes to the form elements don't require updating React state; they are handled directly by the DOM.
   - Example:
     ```jsx
     class UncontrolledComponent extends React.Component {
       constructor(props) {
         super(props);
         this.inputRef = React.createRef();
       }

       handleSubmit = (event) => {
         event.preventDefault();
         console.log('Input Value: ', this.inputRef.current.value);
       }

       render() {
         return (
           <form onSubmit={this.handleSubmit}>
             <input type="text" ref={this.inputRef} />
             <button type="submit">Submit</button>
           </form>
         );
       }
     }
     ```
 

In summary, controlled components manage form data through React state, while uncontrolled components allow the DOM to handle form data without involving React state directly. Controlled components provide more control and synchronization between React state and the DOM, while uncontrolled components can be simpler for certain use cases or for integrating with third-party libraries.

// 6. Give the different variation of the useEffect to achieve different classical lifecycle method.

In React, the `useEffect` hook is commonly used to manage side effects in functional components. It can be used to replicate the behavior of various lifecycle methods from class components. Here are some common variations of `useEffect` to achieve similar functionality as different classical lifecycle methods:

1. **componentDidMount**:
   This method is called after the component is mounted (inserted into the DOM tree). To replicate this behavior with `useEffect`, you pass an empty dependency array (`[]`) as the second argument, ensuring that the effect runs only once after the initial render.

   ```jsx
   useEffect(() => {
       // Effect code here
       return () => {
           // Cleanup code here (optional)
       };
   }, []);
   ```

2. **componentDidUpdate**:
   This method is called whenever the component updates (i.e., when props or state change). You can achieve this by omitting the dependency array.

   ```jsx
   useEffect(() => {
       // Effect code here
       return () => {
           // Cleanup code here (optional)
       };
   });
   ```

3. **componentWillUnmount**:
   This method is called immediately before a component is unmounted and destroyed. You can achieve this by returning a cleanup function from the effect.

   ```jsx
   useEffect(() => {
       // Effect code here
       return () => {
           // Cleanup code here
       };
   }, []);
   ```

4. **componentDidCatch**:
   This method is called when an error is thrown during rendering, in a lifecycle method, or in the constructor of any child component. Error boundaries use this method. This can't be replicated directly with `useEffect`, but you can use error boundaries in functional components.

   ```jsx
   function MyComponent() {
       const [hasError, setHasError] = useState(false);

       useEffect(() => {
           if (hasError) {
               // Handle error
           }
       }, [hasError]);

       if (hasError) {
           return <ErrorFallback />;
       }

       return <NormalComponent />;
   }
   ```

5. **getDerivedStateFromProps**:
   This method is invoked right before calling the render method, both on the initial mount and on subsequent updates. Since this method is used to update state based on props changes, you can achieve similar behavior using `useEffect` with props as dependencies.

   ```jsx
   useEffect(() => {
       // Update state based on props
       setStateFromProps(props);
   }, [props]);
   ```

These are some common patterns, but keep in mind that `useEffect` is versatile and can be used creatively to handle various scenarios in your components.


// 7. How can we reduce unneccesory re rendering of the react component?

To reduce unnecessary re-renders of React components, you can employ several strategies:

1. **Memoization**: Utilize React's `memo` or `React.memo` Higher Order Component (HOC) to memoize functional components. This prevents re-renders when the component's props or state haven't changed.

2. **Pure Components**: For class components, extend from `React.PureComponent` instead of `React.Component`. Pure components perform shallow comparison of props and state, and only re-render if there are differences.

3. **Use shouldComponentUpdate**: In class components, you can implement `shouldComponentUpdate(nextProps, nextState)` method to manually determine whether the component should re-render based on changes in props or state.

4. **Use React.PureComponent**: It's similar to `shouldComponentUpdate` but implemented under the hood for class components.

5. **Avoid Inline Function Definitions**: Define functions outside of the render method to prevent unnecessary re-creation of function references on each render.

6. **Memoize Callbacks**: Use `useCallback` hook for functional components or `React.useCallback` for class components to memoize callbacks and prevent them from being recreated on each render.

7. **Optimize State Updates**: When updating state that depends on the previous state, use the functional form of `setState` to avoid potential race conditions and ensure updates are based on the latest state.

8. **Use React Context or Redux**: Sometimes you might have components deeply nested in the component tree that don't need to re-render on every prop change. In such cases, you can use React Context or Redux to manage state at a higher level and avoid prop drilling.

9. **Optimize Renders with shouldComponentUpdate or React.memo**: If your component re-renders frequently due to parent components updating, consider optimizing with shouldComponentUpdate (for class components) or React.memo (for functional components). These methods allow you to control when a component should re-render based on its props or state.

10. **Use Performance Monitoring Tools**: Tools like React DevTools or profiler APIs can help you identify components that are re-rendering frequently and optimize them accordingly.

By implementing these strategies judiciously, you can significantly reduce unnecessary re-renders in your React application, leading to improved performance and better user experience.



// 8. What is the flow of redux? action -> dispatch -> middleware -> reducer -> return new state

The flow of Redux typically follows these steps:

1. **Action Creation**: Actions are plain JavaScript objects that represent some intention to change the state. They are created by action creators, which are functions that return action objects.

2. **Dispatching**: Actions are dispatched using the `dispatch` function provided by Redux. This function sends the action to the Redux store.

3. **Middleware (Optional)**: Middleware intercepts actions before they reach the reducer. It can perform various tasks such as logging, asynchronous operations, or modifying actions. Middleware is applied using the `applyMiddleware` function from Redux when creating the store.

4. **Reducer Execution**: Actions are passed through the reducer. Reducers are pure functions that take the current state and an action as arguments and return a new state. They specify how the application's state changes in response to actions.

5. **State Update**: The reducer returns a new state based on the action. This new state becomes the current state of the application.

So, the flow is generally: Action -> Dispatch -> Middleware (optional) -> Reducer -> Return New State.

// 9. What is the difference between mapStateToProps() and mapDispatchToProps()?

`mapStateToProps()` and `mapDispatchToProps()` are both functions used in React Redux applications to connect React components to the Redux store. They serve different purposes:

1. `mapStateToProps()`:
   - This function is used to specify which part of the Redux store's state should be mapped to the props of a particular component.
   - It takes the current Redux store state as an argument and returns an object containing props that will be passed to the component.
   - The purpose of `mapStateToProps()` is to provide the component with the specific parts of the Redux state that it needs to render its UI.

2. `mapDispatchToProps()`:
   - This function is used to define the behavior of action creators in the component's props.
   - It allows you to specify which action creators the component needs to dispatch actions to update the Redux store.
   - `mapDispatchToProps()` takes a function (usually an object with action creators) as an argument and returns an object containing functions that will be passed to the component as props.
   - The purpose of `mapDispatchToProps()` is to provide the component with callbacks that it can use to dispatch actions to modify the Redux state.

In summary, `mapStateToProps()` is used to map parts of the Redux state to the component's props, while `mapDispatchToProps()` is used to map action creators to the component's props, allowing the component to dispatch actions to update the Redux state. Both functions are typically used together when connecting a React component to the Redux store.

// 10. How can we place the div in center without using flex and grid in css?

Sure, there are several ways to center a `<div>` on a page in CSS. Here are some commonly used methods:

1. **Using Flexbox**:
   ```css
   .container {
     display: flex;
     justify-content: center; /* Horizontally center */
     align-items: center; /* Vertically center */
   }
   ```

2. **Using Grid**:
   ```css
   .container {
     display: grid;
     place-items: center; /* Center both horizontally and vertically */
   }
   ```

3. **Using Absolute Positioning**:
   ```css
   .container {
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
   }
   ```

4. **Using Margin Auto**:
   ```css
   .container {
     margin: auto;
   }
   ```

5. **Using Table Display**:
   ```css
   .container {
     display: table;
     margin-left: auto;
     margin-right: auto;
   }
   ```

6. **Using Text Alignment** (for inline elements):
   ```css
   .container {
     text-align: center;
   }
   ```

7. **Using Flexbox with IE11 Support**:
   ```css
   .container {
     display: -ms-flexbox;
     -ms-flex-pack: center;
     -ms-flex-align: center;
   }
   ```

8. **Using Grid with IE11 Support**:
   ```css
   .container {
     display: -ms-grid;
     -ms-grid-column-align: center;
     -ms-grid-row-align: center;
   }
   ```

Choose the method that best fits your requirements and browser compatibility needs. Flexbox and Grid are recommended for modern layouts, but the other methods can still be useful for specific cases or supporting older browsers.

// 11. Explain the difference between visibility: hidden and display: none?

`visibility: hidden;` and `display: none;` are both CSS properties used to hide elements on a webpage, but they accomplish this in different ways and have different effects:

1. `visibility: hidden;`:
   - This property hides an element while still reserving the space it occupies on the webpage layout.
   - The element is not visible, but its dimensions and position are still honored.
   - Any space the element would normally take up is preserved, so other elements on the page behave as if the hidden element is still there.
   - The hidden element is still part of the document flow and can still affect layout and interact with other elements.

2. `display: none;`:
   - This property hides an element and removes it completely from the document flow.
   - The element is not visible and does not occupy any space on the webpage layout.
   - It's as if the element does not exist in the document at all.
   - Other elements on the page will behave as if the hidden element is not present.
   - Unlike `visibility: hidden;`, `display: none;` completely removes the element from the rendering process.

In summary, `visibility: hidden;` hides the element while preserving its space in the layout, whereas `display: none;` completely removes the element from the layout, including its space.

// 13. What is “callback hell” and how can it be avoided?

"Callback hell" refers to the situation in asynchronous programming where code becomes deeply nested and difficult to read and maintain due to excessive use of callback functions. This typically happens in languages like JavaScript, where asynchronous operations are common, and callbacks are frequently used to handle asynchronous tasks.

Here's an example of callback hell in JavaScript:

```javascript
asyncFunc1(param1, function(err, result1) {
  if (err) {
    handleError(err);
  } else {
    asyncFunc2(result1, function(err, result2) {
      if (err) {
        handleError(err);
      } else {
        asyncFunc3(result2, function(err, result3) {
          if (err) {
            handleError(err);
          } else {
            // Do something with result3
          }
        });
      }
    });
  }
});
```

As you can see, as more asynchronous operations are chained together, the code becomes deeply nested, making it difficult to read and maintain.

There are several techniques to avoid callback hell:

1. **Use Promises**: Promises provide a cleaner way to handle asynchronous operations and avoid callback hell. With promises, you can chain asynchronous operations together in a more readable and manageable way using `.then()`.

```javascript
asyncFunc1(param1)
  .then(result1 => asyncFunc2(result1))
  .then(result2 => asyncFunc3(result2))
  .then(result3 => {
    // Do something with result3
  })
  .catch(err => handleError(err));
```

2. **Async/Await**: Async functions and the await keyword provide an even cleaner syntax for working with asynchronous code, making it look more synchronous.

```javascript
try {
  const result1 = await asyncFunc1(param1);
  const result2 = await asyncFunc2(result1);
  const result3 = await asyncFunc3(result2);
  // Do something with result3
} catch (err) {
  handleError(err);
}
```

3. **Modularization**: Break down your code into smaller, more manageable functions. This can help reduce nesting and make your code more modular and easier to understand.

```javascript
async function process() {
  try {
    const result1 = await asyncFunc1(param1);
    const result2 = await asyncFunc2(result1);
    const result3 = await asyncFunc3(result2);
    // Do something with result3
  } catch (err) {
    handleError(err);
  }
}

process();
```

By using these techniques, you can write asynchronous code that is more readable, maintainable, and less prone to callback hell.


// 14. Node Js is Single threaded, how it handles multiple tasks?

Node.js is often described as "single-threaded," but this is a simplification. Node.js itself operates on a single-threaded event loop model, meaning that it runs in a single thread, but it can handle multiple tasks concurrently through non-blocking I/O operations and asynchronous event-driven architecture.

Here's how it works:

1. **Event Loop**: Node.js operates on an event loop, which continuously checks the event queue for new events. This event loop is single-threaded, meaning it runs in a single thread.

2. **Non-blocking I/O**: Node.js primarily relies on non-blocking, asynchronous I/O operations. When a task involves I/O operations, such as reading from a file or making an HTTP request, Node.js initiates the operation and continues to execute other tasks while waiting for the I/O operation to complete. This allows Node.js to handle multiple tasks concurrently without blocking the execution thread.

3. **Callbacks and Asynchronous Programming**: Node.js heavily utilizes callbacks, Promises, and asynchronous programming patterns. When an asynchronous operation completes, such as reading a file or receiving a response from an HTTP request, Node.js executes the callback associated with that operation. This allows Node.js to process multiple tasks concurrently without waiting for each task to complete sequentially.

4. **Libuv**: Underlying Node.js is a library called libuv, which provides the event loop and handles asynchronous I/O operations. Libuv utilizes operating system features such as epoll (on Linux), kqueue (on macOS), and IOCP (on Windows) to efficiently manage I/O operations.

While Node.js itself is single-threaded, it can offload CPU-intensive tasks to worker threads using the `worker_threads` module or by using other solutions like child processes. This allows Node.js applications to leverage multiple CPU cores for parallel processing while still benefiting from the event-driven, non-blocking I/O model of the main event loop.

// 15. Difference between cookie, session and localstorage?

Cookies, session storage, and local storage are all mechanisms used in web development to store data on the client-side (i.e., on the user's browser), but they differ in various aspects:

1. **Cookies:**
   - **Storage Limit:** Cookies are limited to about 4KB of data per domain.
   - **Expiration:** Cookies can have an expiration time set, after which they will be automatically deleted.
   - **Sent with Requests:** Cookies are sent with every HTTP request, which can potentially impact performance.
   - **Accessibility:** Cookies can be accessed and manipulated both on the client-side (via JavaScript) and on the server-side (via HTTP headers).
   - **Purpose:** Cookies are commonly used for storing user authentication tokens, session identifiers, and other small pieces of data that need to persist between sessions.

2. **Session Storage:**
   - **Storage Limit:** Session storage typically has a larger storage capacity compared to cookies, usually around 5-10MB per domain depending on the browser.
   - **Expiration:** Data stored in session storage is cleared when the browsing session ends. It persists only for as long as the browser is open (including page reloads and restores).
   - **Sent with Requests:** Unlike cookies, data stored in session storage is not automatically sent with every HTTP request.
   - **Accessibility:** Session storage can be accessed and manipulated only on the client-side, primarily using JavaScript.
   - **Purpose:** Session storage is commonly used for storing temporary data or data that should be accessible only during the current browser session.

3. **Local Storage:**
   - **Storage Limit:** Local storage also typically has a larger storage capacity compared to cookies, similar to session storage (around 5-10MB per domain).
   - **Expiration:** Data stored in local storage persists even after the browser is closed and reopened, unless explicitly cleared by the user or the application.
   - **Sent with Requests:** Like session storage, data stored in local storage is not automatically sent with every HTTP request.
   - **Accessibility:** Local storage, like session storage, can be accessed and manipulated only on the client-side, primarily using JavaScript.
   - **Purpose:** Local storage is commonly used for storing data that should persist across sessions, such as user preferences, cached data, or any other data that doesn't need to be sent to the server with every request.

In summary, cookies are primarily used for small pieces of data and have the advantage of being sent with every HTTP request. Session storage is used for data that should persist only for the duration of a browser session. Local storage is used for data that should persist across browser sessions.

// 16. Give the output for the following code
var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();

// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar

// 17. Implement the myReduce polyfill?
function reducer(acc, curr) {
  return acc * curr;
}
console.log([1, 2, 3, 4, 5, 6].myReduce(reducer));
// 720

// Output
// Array.prototype.myReduce = function(fn, initial){
// 	let self = this;

// 	self.forEach(val => {
// 		initial = initial !== undefined ? fn(initial, val) : val;
// 	})

// 	return initial;
// }

// 18. DS & Algo
// Find index of a key in given array, if not found return -1
// const arr = [3, 10, 5, 9, 2, 7, 1, 8, 4, 6];
// console.log("Result: ", findIndexFrom0(arr, 8)); "Result1: " 7
// console.log("Result: ", findIndexFrom0(arr, 12)); "Result3: " -1

You can implement the `findIndexFrom0` function in JavaScript like this:

```javascript
function findIndexFrom0(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}

const arr = [3, 10, 5, 9, 2, 7, 1, 8, 4, 6];
console.log("Result1:", findIndexFrom0(arr, 8)); // Result1: 7
console.log("Result2:", findIndexFrom0(arr, 12)); // Result2: -1
```

This function iterates through the array and checks if each element is equal to the given key. If found, it returns the index. If not found, it returns -1.
								   

// Interview 3

// 1. What is eventloop in Javascript? What it does?
								In JavaScript, the event loop is a mechanism that allows asynchronous operations to be executed in a non-blocking manner. It's a key component of JavaScript's concurrency model, which enables handling tasks like I/O operations, timers, and events efficiently.

Here's a basic overview of how the event loop works:

1. **Call Stack**: When a script starts executing, JavaScript creates a global execution context and a call stack to keep track of function calls. Functions are pushed onto the call stack as they are called, and popped off the stack when they return.

2. **Web APIs and Callbacks**: When an asynchronous operation is encountered (e.g., setTimeout, XMLHttpRequest), JavaScript delegates the execution of that operation to the browser's Web APIs (or similar runtime environments in different contexts like Node.js). Callback functions associated with these operations are also registered for future execution.

3. **Event Queue**: Asynchronous operations, along with their associated callback functions, are handled by the browser's runtime environment outside of the JavaScript engine. Once an asynchronous operation completes, its callback function is placed into the event queue.

4. **Event Loop**: The event loop continuously checks two things: the call stack and the event queue. If the call stack is empty, the event loop checks whether there are any pending tasks in the event queue. If there are, it takes the first callback function from the queue and pushes it onto the call stack for execution.

5. **Execution**: The callback function is executed, and any synchronous code within it is processed. If there are additional asynchronous operations within the callback, they are handled similarly, with their callback functions being sent to the event queue when they complete.

This process continues indefinitely, allowing JavaScript to handle asynchronous tasks without blocking the main execution thread. This is crucial for building responsive web applications, where tasks like fetching data from a server or handling user input can occur asynchronously without freezing the UI.

Sure, here's a graphical representation of the event loop in JavaScript:

```
  +-------------------+               +------------------+
  |   Call Stack      |               |   Event Queue    |
  +-------------------+               +------------------+
  |                   |               |                  |
  +-------------------+               +------------------+
          |                                   |
          |                                   |
          |          +----------------+       |
          |          |   Event Loop   |       |
          |          +----------------+       |
          |                   |               |
          |                   |               |
          |         +-------------------+     |
          |         |    Web APIs      |     |
          |         +-------------------+     |
          |                   |               |
          |                   |               |
          |        +----------------------+  |
          |        |  Callback Functions  |  |
          |        +----------------------+  |
          |                   |               |
          |                   |               |
          +-------------------+---------------+
```

Here's how it works:

1. Initially, the call stack is empty.
2. As synchronous code is executed, function calls are added to the call stack.
3. If an asynchronous operation (like setTimeout) is encountered, it's offloaded to the Web APIs.
4. When the asynchronous operation is complete, its callback function is added to the event queue.
5. The event loop continuously checks if the call stack is empty. If it is, it takes the first callback function from the event queue and pushes it onto the call stack for execution.
6. The callback function is executed, and the process repeats as needed.

This cycle allows JavaScript to handle asynchronous operations efficiently without blocking the main execution thread, ensuring that the application remains responsive.
								   

// 2. Difference between == & ===?
								   
In many programming languages, including JavaScript, `==` and `===` are comparison operators used to compare values. However, they behave differently:

1. `==` (Equality Operator):
   - The `==` operator checks for equality of values after type coercion.
   - Type coercion means that if the operands are of different types, JavaScript will attempt to convert them to the same type before making the comparison.
   - For example, `1 == '1'` would return `true` because JavaScript coerces the string `'1'` to a number before comparing.
   - This can sometimes lead to unexpected results because JavaScript will try to make sense of different types.

2. `===` (Strict Equality Operator):
   - The `===` operator, also known as the strict equality operator, checks for equality of values without type coercion.
   - It will only return `true` if the operands are of the same type and have the same value.
   - For example, `1 === '1'` would return `false` because they are of different types (number and string).
   - Using `===` is generally considered safer because it avoids unexpected type conversions and ensures a more predictable behavior.

In summary, `==` performs type coercion while comparing values, whereas `===` does not perform type coercion and checks for both value and type equality. It's generally recommended to use `===` for most comparisons to avoid unexpected behavior due to type coercion.

// 3. Debounce vs Throttling?

Debouncing and throttling are two techniques used in web development, particularly in handling user input or events, to control the rate at which a function is executed.

1. **Debouncing**:
   - Debouncing involves delaying the execution of a function until after a certain period of time has elapsed since the last invocation of the function.
   - It's useful when you want to ensure that a function is only executed after a user has stopped performing a certain action for a specified amount of time.
   - Example use cases include auto-saving in a text editor, search suggestions as a user types, or handling resize events in a responsive design.

2. **Throttling**:
   - Throttling involves ensuring that a function is only executed at most once in a specified time interval.
   - It's useful when you want to limit the rate at which a function is invoked, particularly in scenarios where rapid, repeated calls to the function may cause performance issues or unnecessary resource consumption.
   - Example use cases include handling scroll events to trigger animations, preventing excessive API requests, or limiting the frequency of updates to a UI component.

In summary, while both techniques are used to control the rate of function execution, they differ in how they achieve this control and in which scenarios they are most appropriate. Debouncing delays the function execution until after a quiet period, while throttling limits the frequency of function execution within a specified time interval.

// 4. stopPropogation vs preventDefault?

`stopPropagation()` and `preventDefault()` are two methods in JavaScript that are used in event handling but serve different purposes:

1. `stopPropagation()`: This method is used to stop the propagation of an event through the DOM hierarchy. When an event happens on a particular element, it not only triggers on that element but also propagates through its ancestors. This propagation is known as event bubbling. `stopPropagation()` prevents the event from bubbling up the DOM tree, essentially halting its further propagation. This can be useful when you want to prevent parent elements from reacting to the same event.

```javascript
element.addEventListener('click', function(event) {
    event.stopPropagation();
    // Other event handling logic
});
```

2. `preventDefault()`: This method is used to prevent the default behavior associated with an event. For example, if a link (`<a>` tag) has an `onclick` event handler attached to it, clicking the link would normally follow the link's href attribute and navigate to another page. However, if `preventDefault()` is called within the event handler, the default behavior of the event (in this case, following the link) is prevented.

```javascript
element.addEventListener('click', function(event) {
    event.preventDefault();
    // Other event handling logic
});
```

In summary:
- `stopPropagation()` stops the event from propagating further up or down the DOM tree.
- `preventDefault()` prevents the default action associated with the event from taking place.

// 5. What is HOC?
								In React, HOC stands for "Higher-Order Component." Higher-Order Components are a design pattern in React that allows you to reuse component logic. 

A Higher-Order Component is a function that takes a component and returns a new component with enhanced functionality. They enable you to abstract and share common functionalities among multiple components without repeating code.

Here's a basic example of a Higher-Order Component:

```jsx
import React from 'react';

// Higher-Order Component
const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component is mounted');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Component
class MyComponent extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}

// Enhance MyComponent with withLogging HOC
const EnhancedComponent = withLogging(MyComponent);

// Usage of EnhancedComponent
const App = () => {
  return <EnhancedComponent />;
};

export default App;
```

In this example, `withLogging` is a Higher-Order Component that takes a component as an argument (`WrappedComponent`) and returns a new component that logs a message when it's mounted. Then, `MyComponent` is enhanced with this logging functionality by wrapping it with `withLogging`, resulting in the `EnhancedComponent`. Finally, `EnhancedComponent` is rendered within the `App` component.
								

// 6. What is portals in React Js and it's application? 

In ReactJS, portals provide a way to render children components into a different part of the DOM hierarchy than where the parent component is rendered. Portals allow you to render content outside the DOM hierarchy of the parent component, which can be useful for scenarios such as modals, tooltips, and overlays where you want the content to appear on top of other elements without being constrained by the layout of the parent component.

Here's a basic example of how portals work in React:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class MyPortal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('portal-root') // This is the target DOM node
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <MyPortal>
          <h2>This content will be rendered outside the parent component</h2>
        </MyPortal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

In this example, the `MyPortal` component renders its children into a different part of the DOM specified by the `portal-root` ID. Even though `MyPortal` is a child of the `App` component, its content will be rendered outside the DOM hierarchy of `App`, making it appear separately in the HTML structure.

Some common applications of portals include:

1. **Modals**: Rendering modal dialogs or pop-ups that overlay the rest of the page content.
2. **Tooltips and popovers**: Displaying informational tooltips or popovers near certain elements on the page.
3. **Drag-and-drop overlays**: Implementing drag-and-drop functionality where the dragged item needs to be rendered outside the normal DOM hierarchy.
4. **Global error handling**: Displaying error messages or notifications that should appear consistently across different parts of the application.

Overall, portals offer a way to manage the rendering of components in React outside the normal DOM hierarchy, providing flexibility and control for various UI scenarios.
								   
What are context in React JS and it's application?

In ReactJS, "context" refers to a feature that allows you to pass data through the component tree without having to pass props down manually at every level. It's particularly useful when data needs to be accessed by many components at different nesting levels. Context provides a way to share values like themes, locale preferences, or authentication status to all components in the tree without having to explicitly pass them down through each component.

Here's how context works in ReactJS and its application:

1. **Creating Context**: You create a context using `React.createContext()`. This function returns a `Provider` and a `Consumer`.

2. **Provider**: The `Provider` component is used to wrap the part of the component tree where you want to make the context available. It accepts a `value` prop which is the data you want to share.

3. **Consumer**: The `Consumer` component is used to access the context value. It needs to be placed within the tree under the `Provider` and it allows consuming the context value using a render prop.

Here's a simple example:

```jsx
// Creating a context
const ThemeContext = React.createContext('light');

// App component
class App extends React.Component {
  render() {
    // Providing the context value
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// Component consuming the context
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// Component consuming the context value
class ThemedButton extends React.Component {
  // Consuming the context using a Consumer
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => <button style={{ background: theme }}>Themed Button</button>}
      </ThemeContext.Consumer>
    );
  }
}
```

In this example, `ThemeContext.Provider` is used to provide the value 'dark' as the theme to all components within its subtree. `ThemedButton` consumes this context value using `ThemeContext.Consumer` and renders a button with the theme applied.

Context is particularly useful when passing down props would be cumbersome or when data needs to be accessed by many components. However, it's recommended to use it sparingly and prefer passing props explicitly when possible, as it can make component relationships less clear.

// 7. How does the code spilting works in React js? How does it improves page rendering performance?

Code splitting in React allows you to split your code bundle into smaller chunks, which can be loaded asynchronously. This means that instead of loading the entire application code upfront, you can load only the code that is needed for the current view or interaction, and then load additional code as needed.

There are several techniques for code splitting in React:

1. **Dynamic Import():** With dynamic imports, you can asynchronously load modules only when they are needed. This is typically done using the `import()` function, which returns a Promise that resolves to the module's namespace object.

   ```javascript
   import('./module').then(module => {
     // Use module
   });
   ```

2. **React.lazy():** React.lazy() allows you to dynamically import a component. This is particularly useful for lazy loading components that are not immediately needed when the application starts.

   ```javascript
   const MyComponent = React.lazy(() => import('./MyComponent'));
   ```

3. **Route-based Code Splitting:** Libraries like React Router allow you to define routes that load components lazily. This means that each route's component is loaded only when the route is accessed.

   ```javascript
   <Route path="/some-path" component={React.lazy(() => import('./SomeComponent'))} />
   ```

Code splitting improves page rendering performance in several ways:

1. **Reduced Initial Load Time:** By splitting your code into smaller chunks, you can reduce the initial bundle size that needs to be loaded when the user first accesses your application. This can significantly improve the time it takes for the initial page to load, especially for large applications.

2. **Faster Time to Interactivity:** By loading only the code that is necessary for the current view or interaction, you can reduce the time it takes for the page to become interactive. This can improve the overall user experience, especially on slower network connections or less powerful devices.

3. **Optimized Caching:** Smaller code chunks are more cache-friendly, as they can be cached individually. This means that once a chunk has been loaded, it can be reused across multiple pages or sessions, further improving performance.

4. **Parallel Loading:** Code splitting allows browsers to load multiple smaller chunks in parallel, instead of loading a single large bundle sequentially. This can lead to faster overall loading times, as browsers can take advantage of their built-in parallel loading capabilities.

Overall, code splitting is a powerful technique for improving the performance of React applications by optimizing the way code is bundled and loaded, resulting in faster load times and better user experiences.

// 8. Explain different components of redux.

Redux is a predictable state container for JavaScript apps, commonly used with frameworks like React for building user interfaces. It helps manage the state of an application in a predictable manner, making it easier to develop and maintain large-scale applications. Here are the different components of Redux:

1. **Store**:
   - The store is the heart of Redux. It holds the complete state tree of the application.
   - It allows access to state via `getState()`.
   - It allows state to be updated via `dispatch(action)`.
   - It allows registering listeners via `subscribe(listener)`.

2. **Actions**:
   - Actions are plain JavaScript objects that represent an intention to change the state.
   - They must have a `type` property indicating the type of action being performed.
   - They can have additional data attached to describe the action.

3. **Reducers**:
   - Reducers are pure functions that take the current state and an action, and return a new state.
   - They specify how the application's state changes in response to actions sent to the store.
   - Reducers should not mutate the state, but rather return a new state object.

4. **Action Creators**:
   - Action creators are functions that create and return action objects.
   - They encapsulate the logic for creating actions with necessary payloads.

5. **Middleware**:
   - Middleware provides a third-party extension point between dispatching an action and the moment it reaches the reducer.
   - It allows for handling asynchronous actions, logging, crash reporting, routing, etc.
   - Examples of middleware include `redux-thunk` for handling async actions and `redux-logger` for logging actions and state changes.

6. **Selectors**:
   - Selectors are functions used to extract specific pieces of data from the Redux store state.
   - They encapsulate the logic for extracting data in a reusable and memoized manner.
   - They help to keep the components decoupled from the store structure.

7. **Subscription**:
   - Subscriptions are a feature allowing components to subscribe to the Redux store and receive updates when the state changes.
   - They can be implemented using React Redux's `connect` function or hooks like `useSelector` and `useDispatch`.

By using these components together, Redux provides a predictable and manageable way to handle application state, making it easier to reason about state changes and maintain large-scale applications.

// 9. Redux thunk vs Redux Saga?

Redux Thunk and Redux Saga are both middleware libraries for Redux, a popular state management library for JavaScript applications, particularly those built with React. They are used to handle asynchronous actions in Redux applications, but they have different approaches and features. Here's a comparison:

1. **Redux Thunk**:
   - **Approach**: Redux Thunk is simpler and more lightweight compared to Redux Saga. It allows you to write action creators that return functions instead of plain action objects. These functions receive the `dispatch` and `getState` functions as arguments, enabling them to perform asynchronous operations and dispatch actions as needed.
   - **Ease of Use**: Redux Thunk is generally easier to grasp for developers who are already familiar with Redux. It's straightforward to implement and understand, especially for simpler asynchronous logic.
   - **Suitability**: Redux Thunk is suitable for applications with simpler asynchronous logic or those where you prefer a simpler approach to managing side effects.

2. **Redux Saga**:
   - **Approach**: Redux Saga introduces the concept of "sagas," which are functions that manage side effects in a more declarative and structured way compared to thunks. Sagas are implemented using ES6 generator functions, which allow for more complex control flow, including pausing and resuming execution.
   - **Features**: Redux Saga provides more advanced features such as cancellation, polling, race conditions, and more complex error handling. It also integrates well with other libraries, making it suitable for complex asynchronous workflows.
   - **Learning Curve**: Redux Saga has a steeper learning curve compared to Redux Thunk, especially for developers who are not familiar with generator functions and asynchronous programming concepts.
   - **Suitability**: Redux Saga is well-suited for applications with complex asynchronous logic, such as applications with real-time updates, WebSocket communication, or applications that require complex orchestration of multiple asynchronous actions.

In summary, Redux Thunk is simpler and more lightweight, making it a good choice for applications with straightforward asynchronous logic. On the other hand, Redux Saga offers more advanced features and is suitable for applications with complex asynchronous workflows that require more control and structure. The choice between them depends on the specific requirements and complexity of your application.

// 10. Explain the css box model. Each of the placements from inner most to outer most layer.

The CSS box model describes the structure of an HTML element as a rectangular box. This model consists of several layers, each representing a different aspect of the element's layout and appearance. From innermost to outermost layer, the components of the box model are as follows:

1. **Content**: This is the innermost layer of the box and represents the actual content of the element, such as text, images, or other media. The content area is determined by the width and height properties set for the element.

2. **Padding**: The padding is the space between the content area and the element's border. It provides internal spacing within the element. Padding can be set using the `padding` property and its shorthand variants like `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.

3. **Border**: The border surrounds the padding and content areas and defines the boundary of the element. It can be styled using properties like `border-width`, `border-style`, and `border-color`. Similar to padding, you can set specific properties for each side of the border (`border-top`, `border-right`, `border-bottom`, `border-left`).

4. **Margin**: The margin is the space outside the border that separates the element from other elements in the layout. It creates spacing between elements. Margins can be set using the `margin` property and its variants (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`).

Here's a visual representation of the CSS box model:

```
 ___________________________________________________________
|                                                           |
|  Margin                                                   |
|   _____________________________________________________   |
|  |  Border                                             |  |
|  |   _______________________________________________   |  |
|  |  |  Padding                                      |  |  |
|  |  |   _______________   Content                   |  |  |
|  |  |  |               |                            |  |  |
|  |  |  |               |                            |  |  |
|  |  |  |_______________|                            |  |  |
|  |  |                                                 |  |  |
|  |  |_________________________________________________|  |  |
|  |                                                       |  |
|  |_______________________________________________________|  |
|                                                             |
|___________________________________________________________|

```

Understanding the CSS box model is crucial for designing and laying out web pages effectively, as it governs how elements are sized, spaced, and positioned relative to one another.

// 11. Explain what elements will match each of the following CSS selectors:
  div, p
  div p
  div > p
  div + p
  div ~ p

// Output:
Sure, let's break down each of these CSS selectors:

1. `div, p`: This selector will match any `<div>` element and any `<p>` element on the webpage.

2. `div p`: This selector will match any `<p>` element that is a descendant of a `<div>` element. In other words, it will select any `<p>` element that is nested within a `<div>` element, regardless of how deeply nested it is.

3. `div > p`: This selector will match any `<p>` element that is a direct child of a `<div>` element. It will not select `<p>` elements that are nested further down the hierarchy.

4. `div + p`: This selector will match any `<p>` element that is immediately preceded by a `<div>` element. In other words, it will select `<p>` elements that come right after a `<div>` element in the HTML structure, provided they share the same parent.

5. `div ~ p`: This selector will match any `<p>` element that is preceded by a `<div>` element within the same parent element. Unlike the `+` selector, the `~` selector selects all matching siblings that follow, not just the immediate one.

In summary:

- `div, p`: Any `<div>` or `<p>` element.
- `div p`: Any `<p>` element that is a descendant of a `<div>` element.
- `div > p`: Any `<p>` element that is a direct child of a `<div>` element.
- `div + p`: Any `<p>` element that immediately follows a `<div>` element.
- `div ~ p`: Any `<p>` element that follows a `<div>` element within the same parent.


// 13. What is REPL in Node Js? What purpose it is used for?
  // REPL stands for (READ, EVAL, PRINT, LOOP). Node js comes with bundled REPL environment. This allows for the easy creation of CLI (Command Line Interface) applications.


// 16. What will be the output of the following function?
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
// Output to the console will be “3”.

// 17. 
// Implement the myFlatten which gives following output
let testArr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, 11]]]]];
let flattenTestArr1 = testArr1.myFlatten();
console.log("Result: ", flattenTestArr1);
// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Output:
Array.prototype.myFlatten = function () {
  // Check value of this available or not
  if (!this) throw new Error("Source not provided");
  // Check value of this is type of Array or not
  if (!Array.isArray(this))
    throw new Error("Source must be the type of an Array");
  // Returning [] if length of this is 0
  if (this.length === 0) return [];

  const self = this;
  let resultArray = [];

  for (let i = 0; i < self.length; i += 1) {
    if (Array.isArray(self[i]))
      resultArray = resultArray.concat(self[i].myFlatten());
    else resultArray.push(self[i]);
  }

  return resultArray;
};

	You can implement the `myFlatten` method using recursion to flatten nested arrays. Here's how you can do it:

```javascript
Array.prototype.myFlatten = function() {
    let flattenedArray = [];

    function flatten(arr) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                flatten(element);
            } else {
                flattenedArray.push(element);
            }
        });
    }

    flatten(this);
    return flattenedArray;
};

// Test the implementation
let testArr1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10, 11]]]]];
let flattenTestArr1 = testArr1.myFlatten();
console.log("Result: ", flattenTestArr1);
```

This implementation defines the `myFlatten` method on the `Array.prototype`, allowing you to call it directly on any array. It recursively iterates through each element of the array, adding non-array elements to the `flattenedArray` and recursively flattening arrays. Finally, it returns the `flattenedArray`.

// 18. DS & Algo
let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0] ;
console.log('Result: ', segregate0and1(arr));
"Result: " [0,0,0,0,0,1,1,1,1,1]

								  
It seems you're trying to segregate an array of 0s and 1s, pushing all the 0s to the beginning and all the 1s to the end. Here's a function `segregate0and1` that achieves this:

```javascript
function segregate0and1(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        while (arr[left] === 0 && left < right) {
            left++;
        }
        while (arr[right] === 1 && left < right) {
            right--;
        }
        if (left < right) {
            arr[left++] = 0;
            arr[right--] = 1;
        }
    }
    return arr;
}

let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
console.log('Result:', segregate0and1(arr));
```

This function iterates through the array from both ends, swapping elements if necessary to move all the 0s to the left and all the 1s to the right.

lifeCycle hooks
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
beforeUnmount
unmounted