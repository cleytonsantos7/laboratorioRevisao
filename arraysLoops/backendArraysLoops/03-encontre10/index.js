const numeros = [54, 22, 14, 87, 10, 284];

const posicao = numeros.indexOf(10);

if (posicao !== -1) {
  console.log(`O número 10 está na posição ${posicao}.`);
} else {
  console.log(-1);
}



// let resposta = -1;
// for (let i = 0; i <  numeros.length; i++){
//   let numero = numeros [i];
//   if (numero === 10){
//     resposta = i;
//     break;
//   }
// }

// console.log(resposta);