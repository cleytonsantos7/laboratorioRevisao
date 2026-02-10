const express = require('express');
const rotas = require('./roteador');

const app = express();

app.use(express.json());

app.listen(3000);