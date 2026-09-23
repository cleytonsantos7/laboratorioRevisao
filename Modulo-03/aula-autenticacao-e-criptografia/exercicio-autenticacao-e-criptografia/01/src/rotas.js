const express = require("express");
const { cadastrarUsuario, login } = require("./controladores/usuario");
const verificarUsuarioLogado = require("./intermediarios/autenticacao");
const {
  cadastrarPokemon,
  atualizarApelido,
  listarPokemons,
  filtrarPokemon,
  excluirPokemon,
} = require("./controladores/pokemons");

const rotas = express();

rotas.post("/cadastro", cadastrarUsuario);
rotas.post("/login", login);

rotas.use(verificarUsuarioLogado);

rotas.post("/pokemon", cadastrarPokemon);
rotas.put("/pokemon/:id/apelido", atualizarApelido);
rotas.get("/pokemon", listarPokemons);
rotas.get("/pokemon/:id", filtrarPokemon);
rotas.delete("/pokemon/:id", excluirPokemon);

module.exports = rotas;
