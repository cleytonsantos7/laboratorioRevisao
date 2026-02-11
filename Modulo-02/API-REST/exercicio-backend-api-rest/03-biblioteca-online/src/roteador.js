const express = require('express');
const { listarLivros, encotrarLivro, adicionarLivro, substituirLivro, atualizarLivro, excluirLivro } = require('./controladores/livros');

const rotas = express.Router();

rotas.get('/livros', listarLivros);
rotas.get('/:id', encotrarLivro);
rotas.post('/livros', adicionarLivro);
rotas.put('/livros/:id', substituirLivro);
rotas.patch('/livros/:id', atualizarLivro);
rotas.delete('/livros/:id', excluirLivro)

module.exports = rotas;