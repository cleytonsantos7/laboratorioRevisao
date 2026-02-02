const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
];

function ordenarCarros(lista, campo){
    return lista.sort((a, b) => {
    return a[campo].localeCompare(b[campo]);
});
};

console.log(ordenarCarros(carros, 'nome'));
console.log(ordenarCarros(carros, 'marca'));
console.log(ordenarCarros(carros, 'ano'));
console.log(ordenarCarros(carros, 'cor'));

//Resolução

const ordenarCarros1 = (arrayCarros, campoOrdenacao) => {
    arrayCarros.sort((primeiro, segundo) => {
        return primeiro[campoOrdenacao].localeCompare(segundo[campoOrdenacao]);
    });

    console.log(arrayCarros);
}

ordenarCarros1(carros, 'nome')