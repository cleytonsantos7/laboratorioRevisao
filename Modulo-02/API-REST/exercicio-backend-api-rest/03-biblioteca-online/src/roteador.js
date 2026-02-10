const express = require('express');
let { listarLivros, encotrarLivro, adicionarLivro } = require('./controladores/livros');

const rotas = express.Router();

rotas.get('/livros', listarLivros);
rotas.get('/:id', encotrarLivro);
rotas.post('/livros', adicionarLivro);

module.exports = rotas;