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
