type combined = number | string;
type descriptorConvertor = "as-text" | "as-number";

function addition(
  input1: combined,
  input2: combined,
  resultConversion: descriptorConvertor
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if(resultConversion === "as-number"){
  //     return  +result;
  // }else{
  //     return result.toString();
  // }
  return result;
}

const combinedNewNumber = addition(5, 6, "as-number");
console.log(combinedNewNumber);

const combinedNewNamesNumber = addition("5", "6", "as-number");
console.log(combinedNewNamesNumber);

const combinedNewNames = addition("sumit", "saurabh", "as-text");
console.log(combinedNewNames);

//   Type Aliases & Object Types

type User = { name: string; age: number };

const u1: User = { name: "max", age: 45 };

//   This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:
// function greet(user: { name: string; age: number }) {
//   console.log("Hi, I am " + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
//TO
// type User = { name: string; age: number };
 
// function greet(user: User) {
//   console.log('Hi, I am ' + user.name);
// }
 
// function isOlder(user: User, checkAge: number) {
//   return checkAge > user.age;
// }
/*
  Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

  
  */
