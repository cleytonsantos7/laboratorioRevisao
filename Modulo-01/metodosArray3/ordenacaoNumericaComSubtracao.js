const numeros = [1, 30, 4, 6, 80, 34, 100, 256, 1000];

//Ordenação crescente
numeros.sort((primeiroElemento, segundoElemento) => {
    return primeiroElemento - segundoElemento;
});

console.log(numeros);

//Ordenação decrescente
numeros.sort((primeiroElemento, segundoElemento) => {
    return segundoElemento - primeiroElemento;
});

console.log(numeros);