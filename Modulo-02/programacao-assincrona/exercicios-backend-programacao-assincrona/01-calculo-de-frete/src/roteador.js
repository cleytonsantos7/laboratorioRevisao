const express = require('express');
const { listarProdutos, obterProduto, calcularFrete } = require('./controladores/produtos')

const rotas = express.Router();

rotas.get('/produtos', listarProdutos);
rotas.get('/produtos/:idProduto', obterProduto);
rotas.get('/produtos/:idProduto/frete/:cep', calcularFrete)

module.exports = rotas;