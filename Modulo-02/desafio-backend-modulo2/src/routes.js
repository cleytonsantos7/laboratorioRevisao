const express = require("express");
const { listarContas } = require("./controllers/contas/list");
const { validarSenha } = require("./middleware/password");
const { criarConta } = require("./controllers/contas/create");
const { atualizarConta } = require("./controllers/contas/update");

const router = express.Router();

router.get("/contas", validarSenha, listarContas);
router.post("/contas", criarConta);
router.put("/contas/:numeroConta/usuario", atualizarConta);

module.exports = router;
