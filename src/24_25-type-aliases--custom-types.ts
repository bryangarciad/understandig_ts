// we can use type keyword to create custom types
//

type Combinable  = number | string; 
// Now we have a variable that can hold numbers and string and save some lines in future

// Type aliases can be used to "create" your own types. 
// You're not limited to storing union types though - 
// you can also provide an alias to a (possibly complex) object type.
// 
// For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// To:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
