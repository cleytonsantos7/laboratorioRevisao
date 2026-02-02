const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const buscarCidades = cidades.filter((cidade) => {
    return cidade.length < 9
});

console.log(buscarCidades.join(', '));