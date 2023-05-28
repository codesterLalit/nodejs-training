
// // // using let
// let count = 5;
// console.log(count); // Output: 5

// count = 10;
// console.log(count); // Output: 10

// {
//   let count = 15; // Block scope
//   console.log(count); // Output: 15
// }

// console.log(count); // Output: 10


// using var

// var age = 25;
// console.log(age); // Output: 25

// {
//   var age = 30; // No block scope
//   console.log(age); // Output: 30
// }

// console.log(age); // Output: 30

// const 

const PI = 3.14159;
console.log(PI); // Output: 3.14159

//PI = 3.14; // Error: Assignment to constant variable

{
  const PI = 3.14; // Block scope
  console.log(PI); // Output: 3.14
}

console.log(PI); // Output: 3.14159


var number = 50

function print() {
  var square = number * number
  console.log(square)
}

console.log(number) // 50

print() // 2500
