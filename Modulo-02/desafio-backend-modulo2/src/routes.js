const express = require("express");
const { listarContas } = require("./controllers/contas/list");

const router = express();

router.get("/contas", listarContas);

module.exports = router;
