const nomes = ['João', 'Maria', 'José', 'Rodrigo'];
const numeros = [2, 5, 9, 7];
// const minhaFuncaoCallback = (nome) => {
//     return nome === 'João';
// }

// const resultado = nomes.some((nome) => {
//     return nome === 'João';
// });

const resultado = numeros.some((numero) => {
    return numero % 2 === 0;
})

console.log(resultado);