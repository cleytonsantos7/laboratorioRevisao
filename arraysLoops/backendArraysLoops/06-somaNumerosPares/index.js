const numeros1 = [3, 4, 7, 8, 1, 6, 5, 10];

let somaPares = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
       somaPares += numeros[i];
  }
}

console.log(somaPares);


// let soma = 0;
// for (let numero of numeros){
//   if(numero % 2 === 0){
//     soma += numero;
//   }
// }

// console.log(soma);