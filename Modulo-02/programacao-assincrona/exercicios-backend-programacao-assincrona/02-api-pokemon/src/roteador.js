const express = require('express');
const { listagemDePokemons, descricaoPokemon } = require('./controladores/pokemons')

const rotas = express.Router();

rotas.get('/pokemon', listagemDePokemons)
rotas.get('/pokemon/:idOuNome', descricaoPokemon)

module.exports = rotas