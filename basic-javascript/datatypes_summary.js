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