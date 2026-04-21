const str = "abcd";
const str1 = "abc";
console.log(str + " " + str1 + " " + "sam");
console.log(`str is ${str} and str1 is: ${str1}`);

const a = new String("hello world"); //creating string using object
console.log(a[2]);
console.log(a.length);
console.log(a.charAt(4));
console.log(a.indexOf("l"));
console.log(a.substring(0, 7));
console.log(a.slice(6, 11));
console.log(a);

const b = " banana ";
console.log(b);
console.log(b.trim());
console.log(b.replace(" ", ""));
console.log(b.includes("b"));
