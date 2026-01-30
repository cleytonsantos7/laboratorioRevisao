const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function declararPosicao(nomes, posicao) {
    const nomes3posicoes = nomes.slice(posicao, posicao + 3);

    console.log(nomes3posicoes.join(' - '))
}

declararPosicao(nomes, posicao)

