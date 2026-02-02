const numeros = [ 1, 4, 4, 5, 3, 1, 8 ];
const nomes = [ 'joao', 'maria', 'jose']

const resultadoNumeros = numeros.filter((numero) => {
    return numero === 4
});

const resultadoNomes = nomes.filter((nome) => {
    return nome === 'joao';
});

console.log(resultadoNumeros);
console.log(resultadoNomes);