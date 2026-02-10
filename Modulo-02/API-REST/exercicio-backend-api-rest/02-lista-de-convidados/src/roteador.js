const express = require('express');
const { listarConvidados } = require('./controladores/convidados');
const convidados = require('./dados/convidados');

const rotas = express.Router();

rotas.get('/convidados', listarConvidados);

module.exports = rotas;