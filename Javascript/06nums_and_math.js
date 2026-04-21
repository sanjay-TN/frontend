const a = 300;
console.log(a); // output: 300

const b = new Number(300);
console.log(b); // output: [Number: 300]
console.log(toString(b)); // output: 300
console.log(typeof b); // output: object
console.log(b.toString().length); // output: 3
console.log(b.toFixed(2));

let num = 123.456789;
console.log(num.toFixed(2)); // output: 123.46 it gives us the number with 2 decimal places
console.log(num.toPrecision(4)); // output: 123.5 it gives us the number with 4 significant digits

let num1 = 10000;
console.log(num1.toLocaleString("en-IN")); // output: 10,000 it gives us the number in Indian format

// MATHS----

console.log(Math.abs(-4)); // output: 4 it gives us the absolute value of a number
console.log(Math.ceil(4.2)); // output: 5 it gives us the smallest integer greater than or equal to a number
console.log(Math.floor(4.7)); // output: 4 it gives us the largest integer less than or equal to a number
console.log(Math.round(4.5)); // output: 5 it gives us the value of a number rounded to the nearest integer
console.log(Math.max(1, 2, 3)); // output: 3 it gives us the largest of zero or more numbers
console.log(Math.min(1, 2, 3)); // output: 1 it gives us the smallest of zero or more numbers
console.log(Math.pow(2, 3)); // output: 8 it gives us the base to the exponent power
console.log(Math.sqrt(16)); // output: 4 it gives us the square root of a number
console.log(Math.random()); // output: a random number between 0 and 1
