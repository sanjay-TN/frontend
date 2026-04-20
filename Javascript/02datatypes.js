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
