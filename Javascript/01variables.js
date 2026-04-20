const accountId = 12345;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "coimbatore";

// const - not changeable
// let - changeable
// var - changeable and global scope
// without var, let, const - global scope

// accountId = 54321; // TypeError: Assignment to constant variable.
console.log(accountId);

accountEmail = "a@gmail.com"; // reassigning the value to the variable allowed with let
console.log(accountEmail);

accountPassword = "1234"; // reassigning the value to the variable allowed with var
console.log(accountPassword);

accountCity = "chennai"; // reassigning the value to the variable allowed without var, let, const
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// prefer not to use var because of its issue in functional and block scope
