// types of data in JavaScript

// 1. Primitive data types
// it has 7 types of primitive data types

// 1. String : a sequence of characters enclosed in single quotes, double quotes, or backticks.

// 2. Number : a numeric data type that can be an integer or a float.

// 3. Boolean : a logical data type that can have only two values: true or false.

// 4. Null : a special value that represents the absence of any object value.

// 5. Undefined : a special value that represents the absence of a value.

// 6. Symbol : a unique identifier that is often used as a key for object properties.

// 7. BigInt : a data type that can represent integers of arbitrary size.

// 2. Non-primitive data types (also known as reference data types)
// it has Array, Objects, Functions type of non-primitive data type

// 1. Array : a collection of values that can be of any data type, enclosed in square brackets and separated by commas.

// 2. Object : a collection of key-value pairs, where the keys are strings and the values can be of any data type, enclosed in curly braces.

// 3. Function : a block of code that can be executed when called, defined using the function keyword or as an arrow function.

// Memory management in JavaScript

// JavaScript uses a garbage collection mechanism to manage memory. When a variable is created, it is stored in memory. When the variable is no longer needed, it becomes eligible for garbage collection. The garbage collector automatically frees up memory that is no longer being used by the program, allowing it to be reused for new variables and objects. This helps to prevent memory leaks and ensures that the program runs efficiently.

// types of memory in JavaScript

// 1. Stack memory : it is used to store primitive data types and function calls. It is a last-in-first-out (LIFO) data structure, meaning that the last item added to the stack is the first one to be removed.

// example of stack memory

let a = 10;
let b = a;
b = 15;
console.log(b); // 15
console.log(a); // 10

// 2. Heap memory : it is used to store objects and arrays. It is a dynamic memory allocation system, meaning that memory can be allocated and deallocated as needed during the execution of the program. The heap is managed by the garbage collector, which automatically frees up memory that is no longer being used by the program.

// example of heap memory

let user = {
  email: "user@example.com",
  name: "user",
};

let user2 = user;

user2.name = "abc";
console.log(user.name); // abc
console.log(user2.name); // abc
