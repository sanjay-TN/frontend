const coding = ["java", "c", "c++", "python"];

coding.forEach((item) => {
  //   console.log(item);
});

// filter in js it will return only true or false

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = nums.filter((num) => num > 6);
console.log(a);

// if we use{} in function declaration, then we have to use return keyword.
const b = nums.filter((i) => {
  return i > 4;
});
console.log(b);

// map in js it will return anything like arithmetic and other operations

const c = nums.map((num) => num + 10);
console.log(c);

// if we use {} then we have to return the value. otherwise, comipler will show undefined.

const d = nums.map((num) => {
  return num + 10;
});
console.log(d);

// chaining - adding multiple methods

const e = nums
  .filter((num) => num % 2 == 0)
  .map((num) => num + 2)
  .filter((num) => num > 2 && num < 10);
console.log(e);

// reduce

let ar = [1, 2, 3];
let f = ar.reduce((a, b) => a + b, 0);
console.log(f);

let g = ar.reduce(function (acc, curr) {
  console.log(`acc is: ${acc} and curr val is: ${curr}`);

  return acc + curr;
}, 1);
console.log(g);
