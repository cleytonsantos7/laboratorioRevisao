const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const resultado = numeros.sort((a, b) => {
    return a - b;
});

console.log(resultado);