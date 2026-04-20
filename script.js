// Step 2: Variables

var name = "Prince";
let age = 20;
const country = "Philippines";

// Display in console
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// Step 3: Data Types

let numberExample = 100;
let stringExample = "Hello World";
let booleanExample = true;
let arrayExample = [1, 2, 3, 4];
let objectExample = {
    course: "BSIT",
    year: 2
};

// Check data types using typeof
console.log(typeof numberExample);   // number
console.log(typeof stringExample);    // string
console.log(typeof booleanExample);   // boolean
console.log(typeof arrayExample);     // object (array is object in JS)
console.log(typeof objectExample);    // object

// Step 4: Operators

// Arithmetic
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// Comparison
console.log(a > b);   // true
console.log(a < b);   // false
console.log(a == b);  // false

// Logical
let x = true;
let y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false