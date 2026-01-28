const array = [0, 1, 2, 3, 4];

const resultado = array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
});

console.log(resultado);

const resultado1 = array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
}, 10);

console.log(resultado1);