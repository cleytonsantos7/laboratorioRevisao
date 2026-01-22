// Crie uma função que receba o nome da marca de um carro e um array de objetos
// contendo as propriedades nome, marca, ano e cor.
// A função deve encontrar os dados do carro, a partir do nome da marca,
// no array passado como argumento e deve exibir todos os dados como retorno.

const carros = [
    { nome: 'focus', marca: 'ford', ano: '2004', cor: 'preto' },
    { nome: 'uno', marca: 'fiat', ano: '2010', cor: 'prata' },
    { nome: 'cruze', marca: 'chevrolet', ano: '2021', cor: 'azul' },
    { nome: 'corola', marca: 'toyota', ano: '2018', cor: 'branco' }
];

function acharCarro (marca, lista) {
    const resultado = lista.find((carro) => {
        return carro.marca === marca;
    });

    console.log(resultado);
}

acharCarro('fiat', carros);

// Resolução:

const buscarCarro = (marca, arrayCarros) => {
    const resultado = arrayCarros.find((carro) => {
        return carro.marca === marca;
    });
    
    console.log(resultado);
}

 buscarCarro('ford', carros);
