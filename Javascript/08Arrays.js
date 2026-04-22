// arrays in js are dynamic and can hold any type of data
let arr = [1, 2, 3, "hello", true];
console.log(arr); // [1, 2, 3, 'hello', true]
// we can access elements of an array using their index
console.log(arr[0]); // 1
console.log(arr[3]); // 'hello'
// we can also change the value of an element in an array
arr[1] = 42; // shallow copy of the array, we are changing the value at index 1 to 42
console.log(arr); // [1, 42, 3, 'hello', true]

const num = new Array(1, 2, 3, 4);
console.log(num[1]);

// Array methods
let fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // adds "date" to the end of the array
console.log(fruits);

fruits.pop(); // removes the last element of the array
console.log(fruits);

fruits.unshift("avocado"); // adds "avocado" to the beginning of the array
console.log(fruits);

fruits.shift(); // removes the first element of the array
console.log(fruits);

fruits.splice(1, 3); // removes 3 elements starting from index 1
console.log(fruits);

fruits.slice(0, 2); // returns a new array with elements from index 0 to 1
console.log(fruits);

fruits.indexOf("banana"); // returns the index of "banana"
console.log(fruits);

fruits.includes("cherry"); // returns true if "cherry" is in the array
console.log(fruits);

fruits.length; // returns the length of the array
console.log(fruits);

fruits.sort(); // sorts the array in alphabetical order
console.log(fruits);

// merging two arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4, 5, 6]

const a1 = ["a", "b", "c"];
const a2 = ["d", "e", "f"];
const merged2 = [...a1, ...a2]; // using the spread operator to merge two arrays
console.log(merged2); // ['a', 'b', 'c', 'd', 'e', 'f']

// flat method to flatten an array of arrays

let z = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flat = z.flat();
console.log(flat); // [1, 2, 3, 4, 5, 6]

// from method to create an array from a string
let str = "hello";
let arrFromStr = Array.from(str);
console.log(arrFromStr); // ['h', 'e', 'l', 'l', 'o']

// of method to create an array from a list of arguments
let arrOf = Array.of(1, 2, 3, 4);
console.log(arrOf); // [1, 2, 3, 4]

// Array.isArray method to check if a variable is an array
let arr3 = [1, 2, 3];
let notArr = "hello";
console.log(Array.isArray(arr3)); // true
console.log(Array.isArray(notArr)); // false
