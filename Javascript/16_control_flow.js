// control flow includes if statements, loops, and switch statements

// if statements
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// if-else statements
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// operators in if statements
/* 
<: less than
>: greater than
<=: less than or equal to
>=: greater than or equal to
==: equal to
===: strictly equal to
!=: not equal to
!==: strictly not equal to
*/

// switch statements

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
    console.log("It's Wednesday.");
    break;
  case "Thursday":
    console.log("It's Thursday.");
    break;
  case "Friday":
    console.log("It's Friday.");
    break;
  default:
    console.log("It's the weekend.");
}

// truthy and falsy values
/* 
Truthy values: values that are considered true in a boolean context. Examples include:
- true
- non-empty strings
- non-zero numbers
- objects
- arrays    

Falsy values: values that are considered false in a boolean context. Examples include:

- false
- 0
- ""
- null
- undefined
- NaN
*/

// nullish coalescing operator (??)
let name = null;
let defaultName = "Guest";
let displayName = name ?? defaultName;
console.log(displayName); // Output: "Guest"

// ternary operator
let isLoggedIn = true;
let greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(greeting); // Output: "Welcome back!"
