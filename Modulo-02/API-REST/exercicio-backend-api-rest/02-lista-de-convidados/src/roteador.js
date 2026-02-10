const express = require('express');
const { listarConvidados, adicionarConvidado } = require('./controladores/convidados');
const convidados = require('./dados/convidados');

const rotas = express.Router();

rotas.get('/convidados', listarConvidados);
rotas.post('/convidados', adicionarConvidado);

module.exports = rotas;