//Arrow Functions

// Arrow functions are a more concise syntax for writing function expressions in JavaScript. They were introduced in ES6 (ECMAScript 2015) and provide a shorter syntax compared to traditional function expressions. Arrow functions also have some differences in behavior, particularly with regard to the `this` keyword.

// Here is the syntax for an arrow function:

// this is used to take current value of the function and it is not used to create its own context like normal functions

// Traditional function expression
const traditionalFunction = function (a, b) {
  return a + b;
};

// Arrow function expression
const arrowFunction = (a, b) => {
  return a + b;
};
// If the function body contains only a single expression, you can omit the curly braces and the `return` keyword:
const conciseArrowFunction = (a, b) => a + b;

// Arrow functions do not have their own `this` context. Instead, they inherit the `this` value from the surrounding lexical context. This means that the value of `this` inside an arrow function is determined by where the function is defined, rather than how it is called.

// Example of `this` behavior in arrow functions:
const obj = {
  name: "Alice",
  traditionalFunction: function () {
    console.log(`Traditional Function: ${this.name}`);
  },
  arrowFunction: () => {
    console.log(`Arrow Function: ${this.name}`);
  },
};

obj.traditionalFunction();
obj.arrowFunction(); // This will not work as expected because `this` does not refer to `obj` in an arrow function

// In the example above, the `traditionalFunction` correctly logs "Alice" because it has its own `this` context. However, the `arrowFunction` does not log "Alice" because it inherits `this` from the global context, which does not have a `name` property.

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(1, 2));
