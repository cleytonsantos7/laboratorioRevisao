let x = 0;
let y = 0;

x = 5;
y = 10;

console.log(x > y);  // false
console.log(x < y);  // true
console.log(x >= y);  // false
console.log(x <= y);  // true
console.log(x === y); // false
console.log(x !== y); // true
x = 10;
console.log(x === y); // true
console.log(x !== y); // false
console.log(x >= y);  // true
console.log(x <= y);  // true
console.log(x > y);   // false
console.log(x < y);   // false
y = 5;
console.log(x > y);   // true 
console.log(x < y);   // false
console.log(x >= y);  // true
console.log(x <= y);  // false
console.log(x === y); // false
console.log(x !== y); // true   
