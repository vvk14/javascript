// Primitive
// 7 Types: string, number, boolean, null, undefined, symbol, BigInt

const id = Symbol(123);
const otherId = Symbol(123);

// console.log(id === otherId);
// console.log(otherId);


// Refrence ( Non-Primitive )
// Array, Object, function

let myArray = ["name", "age", "place    "];

let myObject = {
    name: "Vivek",
    age: 24
};

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (NON-primitive)

// Stack

let myName = "vivekpatel";
let anotherName = myName;

anotherName = "viku";

// console.log(myName);
// console.log(anotherName);

// Heap 
// In the below code the variable data gets changed while added new value on that 

let userOne = {
    name: "vivek",
    email: "one@google.com"
}
let userTwo = userOne;
userTwo.email = "two@google.com";

console.log(userOne.email);
console.log(userTwo.email);
