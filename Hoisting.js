// Key Differences:
// Function declarations are fully hoisted and can be invoked before declaration.
// var declarations are hoisted but initialized with undefined. You can use them before their declaration, but they will return undefined.
// let and const declarations are hoisted but remain uninitialized, leading to a ReferenceError if accessed before declaration.

// Summary:
// Hoisting moves the declarations to the top of the scope.
// Only the declaration is hoisted, not the initialization (except for function declarations, which are fully hoisted).
// Variables declared with var are initialized with undefined during hoisting, whereas variables declared with let and const remain in a temporal dead zone until their actual initialization.

var x = 10;
function namaste(){
  console.log("Kaise ho Bhrata");
}
namaste();
console.log(x);
// Output:
// Kaise ho Bhrata
// 10

namaste();
console.log(x);
var x = 10;
function namaste(){
  console.log("Kaise ho Bhrata");
}
// Output:
// Kaise ho Bhrata
// undefined


namaste();
console.log(x);
let x = 10;
function namaste(){
  console.log("Kaise ho Bhrata");
}
// Output:
// console.log(x);
//             ^
// ReferenceError: Cannot access 'x' before initialization

namaste();
console.log(x);
let x = 10;
function namaste(){
  console.log("Kaise ho Bhrata");
}
// Output:
// console.log(x);
//             ^
// ReferenceError: Cannot access 'x' before initialization
