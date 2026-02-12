const express = require('express');
const { listagemDePokemons } = require('./controladores/pokemons')

const rotas = express.Router();

rotas.get('/pokemon', listagemDePokemons)
rotas.get('/pokemon/:idOuNome', () => {})

module.exports = rotas