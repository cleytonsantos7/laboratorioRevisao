const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteFilaDeDentro = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < limiteFilaDeDentro) {
  const pessoa = filaDeFora.shift();
  filaDeDentro.push(pessoa);
}

console.log(filaDeDentro);
console.log(filaDeFora);