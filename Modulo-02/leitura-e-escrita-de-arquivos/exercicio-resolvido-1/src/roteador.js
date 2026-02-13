const express = require("express");
const { listagemProdutos, vendas } = require("./controladores/vendas");

const rotas = express.Router();

rotas.get("/produtos", listagemProdutos);
rotas.post("/produtos", vendas);

module.exports = rotas;
