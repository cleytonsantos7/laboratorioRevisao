const express = require('express');
const { listagemDeImoveis, encontrarImovel } = require('./controladores/imoveis');

const rotas = express.Router();

rotas.get('/imoveis', listagemDeImoveis);
rotas.get('/imoveis/:id', encontrarImovel);

module.exports = rotas