const express = require('express');
const {quemJogaAgora, removerJogador, adicionarJogador} = require('./controladores/rodadas');

const app = express();

app.get('/', quemJogaAgora);
app.get('/remover', removerJogador)
app.get('/adicionar', adicionarJogador)

app.listen(8000);