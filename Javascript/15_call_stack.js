// how js executes code
// js executes code in a single thread, which means that it can only execute one piece of code at a time

// using global execution context, js creates a call stack to keep track of the function calls
// using memory heap, js allocates memory for variables and functions
// using execution context, js keeps track of the current state of the program, including the variables and functions that are currently in scope

// ---call stack of js.....

// js is single threaded language, it has only one call stack
// call stack is a data structure that keeps track of the function calls in a program
// when a function is called, it is added to the call stack
// when a function returns, it is removed from the call stack

// example

function a() {
  console.log("a");
  b();
}

function b() {
  console.log("b");
  c();
}

function c() {
  console.log("c");
}
a();

// when we run the above code, the call stack will look like this:
// 1. a() is called, it is added to the call stack
// 2. a() calls b(), b() is added to the call stack
// 3. b() calls c(), c() is added to the call stack
// 4. c() returns, it is removed from the call stack
// 5. b() returns, it is removed from the call stack
// 6. a() returns, it is removed from the call stack
// the call stack is used to keep track of the function calls and their execution context

// if we have a recursive function, the call stack will grow until it reaches the maximum call stack size

// example of recursive function
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // 120
