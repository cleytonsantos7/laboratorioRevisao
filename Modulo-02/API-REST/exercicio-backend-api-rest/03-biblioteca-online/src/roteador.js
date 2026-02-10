const express = require('express');
let { listarLivros, encotrarLivro, adicionarLivro, substituirLivro } = require('./controladores/livros');

const rotas = express.Router();

rotas.get('/livros', listarLivros);
rotas.get('/:id', encotrarLivro);
rotas.post('/livros', adicionarLivro);
rotas.put('/:id', substituirLivro);

module.exports = rotas;