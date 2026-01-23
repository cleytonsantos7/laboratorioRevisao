const carros = [
    { nome: 'focus', marca: 'ford', ano: '2004', cor: 'preto' },
    { nome: 'uno', marca: 'fiat', ano: '2010', cor: 'prata' },
    { nome: 'cruze', marca: 'chevrolet', ano: '2021', cor: 'azul' },
    { nome: 'corola', marca: 'toyota', ano: '2018', cor: 'branco' }
];

const nomes = ['ana', 'joao', 'pedro'];
const numeros = [1, 2, 3, 4];

// const resultado = carros.findIndex((carro) => {
//     return carro.nome === 'uno';
// });

// const resultado = nomes.findIndex((nome) => {
//     return nome === 'ana';
// });

const resultado = numeros.findIndex((numero) => {
    return numero === 4;
});

console.log(resultado);