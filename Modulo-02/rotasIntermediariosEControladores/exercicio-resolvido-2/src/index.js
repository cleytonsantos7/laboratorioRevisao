const express = require('express');
const {filtrarCarros, encontrarCarro} = require('./controladores/carros')
const informouASenha = require('./intermediarios.js')

const app = express();

app.use(informouASenha);

app.get('/carros', filtrarCarros);
app.get('/carros/:id', encontrarCarro);

app.listen(3000);