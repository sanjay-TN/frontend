const obj1 = {
  1: "one",
  2: "two",
  3: "three",
};

const obj2 = {
  4: "four",
  5: "five",
  6: "six",
};

let obj3 = {
  obj1,
  obj2,
};

obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.keys(obj2));
console.log(Object.keys(obj3));
console.log(Object.values(obj1));
console.log(Object.values(obj2));
console.log(Object.values(obj3));
console.log(Object.entries(obj1));
console.log(Object.entries(obj2));
console.log(Object.entries(obj3));

console.log(obj1.hasOwnProperty("name"));

// destructuring

const a = {
  name: "abc",
  age: 14,
};

const { age } = a;
console.log(age);
const { name: n } = a;
console.log(n);
