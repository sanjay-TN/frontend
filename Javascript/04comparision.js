console.log("2" > 1); // true because "2" is converted to number 2
console.log("01" > 2); // false because "01" is converted to number 1

console.log(null > 0); // false because null is converted to 0
console.log(null == 0); // false because null is only equal to undefined, not to any other value
console.log(null >= 0); // true because null is converted to 0 and 0 >= 0 is true
/* 
comparrision operators convert null to 0, but equality operator does not convert null to anything else. This is a special case in JavaScript.
*/

console.log(undefined > 0); // false because undefined is converted to NaN
console.log(undefined == 0); // false because undefined is only equal to null, not to any other value
console.log(undefined >= 0); // false because undefined is converted to NaN and NaN >= 0 is false
/* 
comparrision operators convert undefined to NaN, but equality operator does not convert undefined to anything else. This is a special case in JavaScript.
*/

// === strict equality operator does not perform type conversion it checks both value and type.

console.log("2" === 2); // false because "2" is a string and 2 is a number
console.log(null === 0); // false because null is an object and 0 is a number
console.log(undefined === 0); // false because undefined is a primitive value and 0 is a number
