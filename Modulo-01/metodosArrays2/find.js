const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade:18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];

const nomes = ['joao', 'ana', 'jose'];
const numeros = [1, 2, 3];

// const resultado = usuarios.find((usuario) => {
//     return usuario.nome === 'joao';
// });

// const resultado = nomes.find((nome) => {
//     return nome === 'joao';
// });

const resultado = numeros.find((numero) => {
    return numero === 1;
});

console.log(resultado);