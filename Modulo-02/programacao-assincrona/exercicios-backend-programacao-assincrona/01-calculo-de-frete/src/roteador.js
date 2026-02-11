const express = require('express');
const { listarProdutos, obterProduto } = require('./controladores/produtos')

const rotas = express.Router();

rotas.get('/produtos', listarProdutos);
rotas.get('/produtos/:idProduto', obterProduto);

module.exports = rotas;