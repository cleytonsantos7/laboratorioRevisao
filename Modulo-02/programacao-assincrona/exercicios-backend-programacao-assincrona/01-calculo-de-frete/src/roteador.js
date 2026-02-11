const express = require('express');
const { listarProdutos } = require('./controladores/produtos')

const rotas = express.Router();

rotas.get('/produtos', listarProdutos);

module.exports = rotas;