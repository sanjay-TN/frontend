// IIFE Immediately Invoked Function Expression

// IIFE is a function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping. This helps to avoid polluting the global namespace and allows for better modularization of code.

// Syntax of IIFE

(function () {
  // code here
})();

// Example of IIFE

(function abc() {
  console.log(`welcome to IIFE`);
})();

((user) => {
  console.log(`welcome to arrow function ${user}`);
})("sam");
