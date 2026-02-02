const array = [0, 1, 2, 3, 4];

//for

let somaTotal = array[0];

for(let i = 1; i < array.length; i++){
    const elementoAtual = array[i];

    somaTotal = somaTotal + elementoAtual;
}

console.log('--- For ---')
console.log(somaTotal);

//reduce

const resultado = array.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador + valorAtual;
});

console.log('--- Reduce ---')
console.log(resultado);