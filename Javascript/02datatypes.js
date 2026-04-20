"use strict"; // treat all js code as newer javascript version

// alert("Welcome to JavaScript!"); // alert function to show a message box

// Data types in JavaScript
// 1. Primitive data types
// 2. Non-primitive data types (objects)

// 1. Primitive data types
// a. String: A sequence of characters enclosed in single or double quotes
let name = "John Doe"; // string data type
// b. Number: Represents both integer and floating-point numbers
let age = 30; // number data type
let pi = 3.14;
// c. Boolean: Represents a logical entity that can have two values: true or false
let isStudent = true;
// d. Undefined: A variable that has been declared but not assigned a value
let address;
// e. Null: Represents the intentional absence of any object value
let phoneNumber = null;
// f. Symbol: A unique and immutable primitive value used as the key of an object property
let uniqueId = Symbol("id");
// g. BigInt: Represents integers with arbitrary precision
let bigNumber = BigInt("1234567890123456789012345678901234567890");

// typeof operator to check the data type of a variable
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof address); // Output: undefined
console.log(typeof phoneNumber); // Output: object (null is considered an object in JavaScript)
console.log(typeof uniqueId); // Output: symbol
console.log(typeof bigNumber); // Output: bigint

// 2. Non-primitive data types (objects)
// a. Object: A collection of properties, where each property is a key-value pair
let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
};
console.log(typeof person); // Output: object

// b. Array: A special type of object used to store ordered collections of values
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // Output: object (arrays are also considered objects in JavaScript)

// c. Function: A block of code designed to perform a particular task
function greet() {
  console.log("Hello, World!");
}
console.log(typeof greet); // Output: function

// d. Date: A built-in object that represents a single moment in time
let currentDate = new Date();
console.log(typeof currentDate); // Output: object

// e. RegExp: A built-in object that provides a way to work with regular expressions
let regex = /ab+c/;
console.log(typeof regex); // Output: object

// f. Map: A collection of key-value pairs where keys can be of any type
let map = new Map();
map.set("key1", "value1");
console.log(typeof map); // Output: object

// g. Set: A collection of unique values
let set = new Set();
set.add(1);
set.add(2);
set.add(2);
console.log(typeof set); // Output: object
