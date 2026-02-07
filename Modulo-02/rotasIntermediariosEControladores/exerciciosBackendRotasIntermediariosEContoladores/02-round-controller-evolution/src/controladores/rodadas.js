const jogadores = require('../bancodedados')

let jogadorAtual = 0;

const quemJogaAgora = (req, res) => {
    
    if (jogadorAtual > jogadores.length - 1){
    jogadorAtual = 0;
}


    res.send(`É a vez de ${jogadores[jogadorAtual]} jogar!`);
    jogadorAtual ++;
};

const removerJogador = (req, res) => {
    const { indice } = req.query;

    if (indice === undefined || isNaN(indice) || indice === "") {
        return res.send('Precisa informar o indice do jogador.');
    }

    const indiceNumerico = Number(indice);

    if (indiceNumerico < 0 || indiceNumerico >= jogadores.length) {
        return res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    }

    jogadores.splice(indiceNumerico, 1);
    return res.send(jogadores);
};

const adicionarJogador = (req, res) => {
    const { nome, indice } = req.query;
    let resultado = jogadores
    
    if (nome && indice !== undefined) {
        if (isNaN(indice) || indice === "") {
        return res.send('Precisa informar o indice do jogador.');
    }

    const indiceNumerico = Number(indice);

    if (indiceNumerico < 0 || indiceNumerico > jogadores.length) {
        return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
    }

        resultado.splice(Number(indice), 0, nome);
        return res.send(resultado);
    }

    if (nome) {
        resultado.push(nome);
        return res.send(resultado);
    }
    return res.send(resultado);
};

module.exports = {
    quemJogaAgora,
    removerJogador,
    adicionarJogador
};