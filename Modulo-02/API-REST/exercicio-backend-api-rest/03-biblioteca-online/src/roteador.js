const express = require('express');
let { listarLivros, encotrarLivro, adicionarLivro, substituirLivro, atualizarLivro } = require('./controladores/livros');

const rotas = express.Router();

rotas.get('/livros', listarLivros);
rotas.get('/:id', encotrarLivro);
rotas.post('/livros', adicionarLivro);
rotas.put('/:id', substituirLivro);
rotas.patch('/livros/:id', atualizarLivro);

module.exports = rotas;