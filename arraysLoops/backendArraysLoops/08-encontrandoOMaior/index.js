const numeros = [3, 1, 8, 11, 7, 10];

let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(maiorNumero);