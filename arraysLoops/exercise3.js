//Faça um programa que calcula e imprime na tela a soma dos itens de um array.

const numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum)

console.log('-')

sum = 0
let j = 0
while(j < numbers.length){
    sum += numbers[j]
    j++;
}
console.log(sum)