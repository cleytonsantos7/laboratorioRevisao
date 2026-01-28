const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const maiorString = cidades.reduce((acumulador, elementoAtual, indice, array) => {
    if (acumulador.length < elementoAtual.length) {
        return elementoAtual;
    } else {
        return acumulador;
    }
});

console.log(maiorString);