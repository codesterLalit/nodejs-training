// 'use strict';

// Code inside this module is executed in strict mode

function calculateArea(width, height) {
  // Variables must be declared before use
  area = width * height; // Throws a ReferenceError: area is not defined

  return area;
}

console.log(calculateArea(5, 10));

// In strict mode, Octal literals are not allowed
var num = 012; // Throws a SyntaxError: Octal literals are not allowed in strict mode

// In strict mode, duplicate object property names are not allowed
var person = {
  name: 'John',
  age: 30,
  name: 'Jane' // Throws a SyntaxError: Duplicate data property in object literal not allowed in strict mode
};

// In strict mode, reserved keywords cannot be used as variable names
var let = 'test'; // Throws a SyntaxError: Unexpected strict mode reserved word

// 'eval' cannot be used as a variable or function name
function eval() { // Throws a SyntaxError: Unexpected eval or arguments in strict mode
  // Function body
}

// Strict mode prohibits deleting variables and functions
var x = 10;
delete x; // Throws a SyntaxError: Delete of an unqualified identifier

