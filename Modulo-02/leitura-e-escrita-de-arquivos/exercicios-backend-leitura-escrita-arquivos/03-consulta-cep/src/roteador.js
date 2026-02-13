const express = require("express");
const { buscarCep } = require("./controladores/enderecos");
const rotas = express.Router();

rotas.get("/enderecos/:cep", buscarCep);

module.exports = rotas;
