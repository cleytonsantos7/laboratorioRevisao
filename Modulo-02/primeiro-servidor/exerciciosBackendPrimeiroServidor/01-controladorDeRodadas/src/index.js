const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let jogadorAtual = 0;


app.get('/', (req, res) => {
    
    if (jogadorAtual > jogadores.length - 1){
    jogadorAtual = 0;
}


    res.send(`É a vez de ${jogadores[jogadorAtual]} jogar!`);
    jogadorAtual ++;
});

app.listen(3000);