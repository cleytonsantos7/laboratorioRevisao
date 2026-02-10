const express = require('express');
let { listarLivros, encotrarLivro } = require('./controladores/livros');

const rotas = express.Router();

rotas.get('/livros', listarLivros);
rotas.get('/:id', encotrarLivro);

module.exports = rotas;