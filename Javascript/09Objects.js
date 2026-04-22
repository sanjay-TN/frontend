// object literal
const users = {
  name: "John",
  age: 30,
  phno: 1234567890,
  logindetails: {
    username: "john123",
    password: "password123",
  },
};

console.log(users.logindetails);
console.log(users.name); // dot notation

console.log(users["name"]); // bracket notation

users.greet = function () {
  console.log("hello user");
};

users.greet1 = function () {
  console.log(`hello user ${this.name}, welcome`);
};
console.log(users.greet());
console.log(users.greet1());
