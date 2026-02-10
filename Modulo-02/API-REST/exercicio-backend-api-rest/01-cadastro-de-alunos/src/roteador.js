const express = require('express');
const { listarAlunos, obterAluno } = require('./controladores/alunos-a');
const { cadastrarAluno } = require('./controladores/alunos-b');
const { excluirAluno } = require('./controladores/alunos-c');
const informouASenha = require('./intermediarios.js');

const rotas = express.Router();

rotas.use(informouASenha);

rotas.get('/', listarAlunos);
rotas.get('/:id', obterAluno);
rotas.post('/', cadastrarAluno);
rotas.delete('/:id', excluirAluno);

module.exports = rotas;