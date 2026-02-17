const express = require("express");
const { listarContas } = require("./controllers/contas/list");
const { validarSenha } = require("./middleware/password");

const router = express();

router.get("/contas", validarSenha, listarContas);

module.exports = router;
