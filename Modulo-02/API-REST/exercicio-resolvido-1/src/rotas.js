const express = require('express');
const instrutores = require('./controladores/instrutores');
const aulas = require('./controladores/aulas');

const rotas = express.Router();

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);
rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAula);
rotas.get('/aulas', aulas.listasAulas);
rotas.get('/aulas/:id', aulas.obterAula);
rotas.get('/instrutores/:idInstrutor/aulas', aulas.listarAulasInstrutor);

module.exports = rotas