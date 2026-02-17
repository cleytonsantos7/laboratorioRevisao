const express = require("express");
const { listarContas } = require("./controllers/contas/list");
const { validarSenha } = require("./middleware/password");
const { criarConta } = require("./controllers/contas/create");
const { atualizarConta } = require("./controllers/contas/update");
const { deletarConta } = require("./controllers/contas/delete");
const { depositar } = require("./controllers/transacoes/deposit");
const { sacar } = require("./controllers/transacoes/withdraw");
const { transferencia } = require("./controllers/transacoes/transfer");
const { consultarSaldo } = require("./controllers/transacoes/balance");
const { obterExtrato } = require("./controllers/transacoes/extract");

const router = express.Router();

router.get("/contas", validarSenha, listarContas);
router.post("/contas", criarConta);
router.put("/contas/:numeroConta/usuario", atualizarConta);
router.delete("/contas/:numeroConta", deletarConta);
router.get("/contas/saldo", consultarSaldo);
router.get("/contas/extrato", obterExtrato);

router.post("/transacoes/depositar", depositar);
router.post("/transacoes/sacar", sacar);
router.post("/transacoes/transferir", transferencia);

module.exports = router;
