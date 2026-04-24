//  for loop

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// break and continue

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element === 5) {
    break; // exit the loop when element is 5
  }
  console.log(element);
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element === 5) {
    continue; // skip the rest of the loop when element is 5
  }
  console.log(element);
}

// while loop
console.log("While Loop");

let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}

// do-while loop
console.log("Do-While Loop");

let count2 = 0;

do {
  console.log(count2);
  count2++;
} while (count2 < 5);

// for...of loop
console.log("For...Of Loop");

for (const element of array) {
  console.log(element);
}

let a = [1, 2, 3, 4];
for (let i of a) {
  console.log(i);
}

const arr = ["a", "b", "c"];
for (let i of arr) {
  console.log(i);
}

const str = "welcome to js";
for (const element of str) {
  if (element == " ") {
    break;
  }
  console.log(element);
}

// map

const map = new Map();
map.set("a", "India");
map.set("b", "Africa");
// console.log(map);

for (const [i, value] of map) {
  console.log(`key is: ${i} value is: ${value}`);
}

// objects are not iteratable through for of loop.
// const obj = {
//   name: "abc",
//   email: "abc@gmail.com",
// };

// for...in loop
console.log("For...In Loop");

const object = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}

const obj = {
  name: "abc",
  email: "abc@gmail.com",
};

for (const i in obj) {
  console.log(`key is: ${i} and value is: ${obj[i]}`);
}

let arrr = [1, 2, 3, 4];
for (const a in arrr) {
  console.log(`${arrr[a]}`);
}

// map is not iterable through for in loop
// for each loop
console.log("for each loop");

let name = ["ruby", "java", "c++", "python"];

name.forEach((str) => {
  console.log(str);
});

name.forEach((i) => {
  console.log(i);
});

// giving reference to forEach.
// example

function print(item) {
  console.log(item);
}
name.forEach(print);

name.forEach((val, index, name) => {
  console.log(val, index, name);
});

const myobj = [
  {
    name: "sam",
    age: 12,
    phno: "4563210258",
    city: "banglore",
  },
  {
    name: "sami",
    age: 15,
    phno: "4543210258",
    city: "banglore",
  },
  {
    name: "samu",
    age: 14,
    phno: "4563218258",
    city: "banglore",
  },
];

myobj.forEach((val) => {
  console.log(val.age);
});
