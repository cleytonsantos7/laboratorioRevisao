const express = require('express');
let { listarLivros } = require('./controladores/livros');

const rotas = express.Router();

rotas.get('/livros', listarLivros);

module.exports = rotas;