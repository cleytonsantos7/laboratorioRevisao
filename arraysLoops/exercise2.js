//Faça um programa que imprima todos os elementos de um array que contém alguns números quaisquer.

const numbers = [5, 10, 15, 20, 25];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log('-');

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
console.log('-');

let j = 0;
while (j < numbers.length) {
  console.log(numbers[j]);
  j++;
}
console.log('-');

let x = numbers.length - 1;
while (x >= 0) {
  console.log(numbers[x]);
  x--;
}
