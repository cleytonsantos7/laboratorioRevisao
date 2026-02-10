const express = require('express');
const { listarConvidados, adicionarConvidado, removerConvidado } = require('./controladores/convidados');
const convidados = require('./dados/convidados');

const rotas = express.Router();

rotas.get('/convidados', listarConvidados);
rotas.post('/convidados', adicionarConvidado);
rotas.delete('/convidados/:nome', removerConvidado);

module.exports = rotas;