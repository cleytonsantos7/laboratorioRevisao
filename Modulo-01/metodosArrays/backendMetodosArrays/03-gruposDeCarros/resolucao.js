const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

const grupoDeCarros = (carros, posicao) => {
    console.log(carros.splice(posicao, 3).join(' - '));
}

grupoDeCarros(nomes, posicao);