// Functions are reusable blocks of code that perform a specific task. They can take inputs, called parameters, and can return an output. Functions help to organize code and make it more modular and easier to read.

// Here is an example of a simple function that takes two parameters and prints their sum:
function sum(a, b) {
  console.log(a + b);
}

sum(2, 3);

// Functions can also return values. Here is an example of a function that takes two parameters and returns their difference:
function sub(a, b) {
  return a - b;
}

const a = sub(4, 3);
console.log(a);

function login(username) {
  if (username === "") {
    return "Please enter a username";
  }
  return `${username} just logged in`;
}

const loginMessage = login("jcb");
console.log(loginMessage);

// Functions can also take a variable number of arguments using the rest parameter syntax. Here is an example of a function that takes any number of arguments and returns them as an array:
function calculateCartPrice(...num1) {
  return num1;
}

const cartPrice = calculateCartPrice(100, 200, 300);
console.log(cartPrice);

function abc(num1, num2, ...num3) {
  return (num1, num2, num3); // This will return the first two parameters as individual values and the rest of the parameters as an array.
}

const abcd = abc(1, 2, 3, 4, 5);
console.log(abcd); // This will return 1, 2, and an array of [3, 4, 5] as the rest parameter captures the remaining arguments.

const user = {
  username: "abc",
  price: 100,
};

function obj(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}
obj(user);

const arr = [1, 2, 3, 4];
function takearr(array) {
  return array[1];
}
console.log(takearr(arr)); // This will return the second element of the array, which is 2.
