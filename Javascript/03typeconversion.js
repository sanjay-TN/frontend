let num = "55abc";
console.log(typeof num);

let valueInString = String(num); //converting number to string
console.log(typeof valueInString);
console.log(typeof Number(valueInString)); //converting string to number
console.log(valueInString);

let value = null;

console.log(typeof value); // output object but type is null
console.log(value); // output null but type is object

/* 
number to string is easy to convert but string to number is not easy because of the presence of non-numeric characters in the string. In this case, it will return NaN (Not a Number) when we try to convert it to a number.

example:
"33"=> 33
"4gf"=> NaN
1 => true
0 => false
""=> false
"abc"=> true

*/

let isnum = 1;
let abc = Boolean(isnum);
console.log(abc); // output true because 1 is truthy value

let isnum2 = 0;
let abc2 = Boolean(isnum2);
console.log(abc2); // output false because 0 is falsy value

let st = "";
let abc3 = Boolean(st);
console.log(abc3); // output false because empty string is falsy value

let st2 = "abc";
let abc4 = Boolean(st2);
console.log(abc4); // output true because non-empty string is truthy value

let a = 45;
a = String(a);
console.log(typeof a); // output string
console.log(a); // output "45" because it is now a string, not a number

// operations

console.log("5" + 5); // output "55" because the number 5 is converted to a string and concatenated with "5"
console.log(1 + 2 + "3"); // output "33" because 1 and 2 are added together to get 3, and then the result is concatenated with "3" to get "33"
console.log("4" + 1 + 2); // output "412" because "4" is concatenated with 1 to get "41", and then "41" is concatenated with 2 to get "412"

// postfix and prefix increment operators
let x = 5;
let y = x++;
console.log(x); // output 6 because x is incremented after the value of y is assigned
console.log(y); // output 5 because y is assigned the value of x before it is incremented

let x1 = 5;
let y1 = ++x1;
console.log(x1); // output 6 because x1 is incremented before the value of y1 is assigned
console.log(y1); // output 6 because y1 is assigned the value of x1 after it is incremented
