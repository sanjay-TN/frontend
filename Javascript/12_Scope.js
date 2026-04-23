// scope is the area where a variable is defined and can be accessed.

// there are three types of scope in JavaScript: global scope, function scope, and block scope.

// global scope: variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
var globalVar = "I am a global variable";

// function scope: variables declared inside a function are in the function scope and can only be accessed within that function.
function myFunction() {
  var functionVar = "I am a function variable";
  console.log(functionVar); // I am a function variable
}
myFunction();
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// block scope: variables declared inside a block (e.g., inside an if statement or a for loop) are in the block scope and can only be accessed within that block.
if (true) {
  let blockVar = "I am a block variable";
  console.log(blockVar); // I am a block variable
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined

// var is function scoped, while let and const are block scoped.

// nested scope: functions can be nested inside other functions, creating a nested scope. Variables declared in the outer function can be accessed by the inner function, but variables declared in the inner function cannot be accessed by the outer function.

function One() {
  const username = "abc";
  function Two() {
    const website = "youtube";
    console.log(website);
  }
  console.log(username);
  Two();
}

One();

if (true) {
  let a = "abc";
  if (a == "abc") {
    let b = " def";
    console.log(a + b);
  }
  // console.log(b); // Uncaught ReferenceError: b is not defined
}
//console.log(a); // Uncaught ReferenceError: a is not defined

console.log(out(4)); // this works because function declarations are hoisted, meaning they are moved to the top of their scope before code execution. This allows us to call the function before it is defined in the source code.

function out(num) {
  return num + 1;
}

// console.log(n(4)); //error: n is not defined. when we store a function in a variable, it is called a function expression. Function expressions are not hoisted, so they cannot be called before they are defined.
const n = function (num) {
  return num + 2;
};
console.log(n(4));

// lexical scope: the scope of a variable is determined by its position in the source code. A function can access variables from its own scope and from the scopes of its parent functions.

function parent() {
  const parentVar = "I am a parent variable";
  function child() {
    const childVar = "I am a child variable";
    console.log(parentVar); // I am a parent variable
    console.log(childVar); // I am a child variable
  }
  child();
  // console.log(childVar); // Uncaught ReferenceError: childVar is not defined
}

parent();
