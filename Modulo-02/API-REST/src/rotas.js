const express = require('express');
const { listarInstrutores } = require('./controladores/instrutores');

const rotas = express.Router();

rotas.get('/instrutores', listarInstrutores);

module.exports = rotas