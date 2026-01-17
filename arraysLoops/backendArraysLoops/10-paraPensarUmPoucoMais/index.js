const numeros = [8, 11, 4, 1, 3, 20, 12];

let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
  if (numeros[i] < menorNumero) {
    menorNumero = numeros[i];
  }
}

const maiorDiferenca = maiorNumero - menorNumero;

console.log(maiorDiferenca);



// const maior = Math.max(...numeros);
// const menor = Math.min(...numeros);

// console.log(maior - menor);


// let maiorDif = -Number.MAX_VALUE;
// for (let x of numeros){
//   for (let y of numeros){
//       const difAtual = x - y;
//       if (difAtual > maiorDif){
//         maiorDif = difAtual
//       }
//   }
// }

// console.log(maiorDif)