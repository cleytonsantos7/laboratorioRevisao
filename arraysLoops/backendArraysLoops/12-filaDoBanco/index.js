const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteFilaDeDentro = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDeDentro) {
  const pessoa = filaDeFora.shift();
   filaDeDentro.push(pessoa);
}

console.log(filaDeDentro);
console.log(filaDeFora);



// while (filaDeDentro.length < 5){
//   const primeiroDeFora = filaDeFora.shift();
//   if (primeiroDeFora === undefined) {
//   break;
//   }
//   filaDeDentro.push(primeiroDeFora)
// }



// const limiteFilaDeDentro = 5;

// for (let i = 0; i < filaDeFora.length && filaDeDentro.length < limiteFilaDeDentro; i++) {
//   filaDeDentro.push(filaDeFora[i]);
// }


// filaDeFora.splice(0, filaDeDentro.length - 3);

// console.log(filaDeDentro);
// console.log(filaDeFora);



// const limite = 5;

// const vagas = limite - filaDeDentro.length;

// const entrando = filaDeFora.slice(0, vagas);

// filaDeDentro.push(...entrando);
// filaDeFora.splice(0, vagas);

// console.log(filaDeDentro);
// console.log(filaDeFora);