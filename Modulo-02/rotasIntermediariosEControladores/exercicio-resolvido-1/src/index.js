const express = require('express');
const {filtrarCarros, encontrarCarro} = require('./controladores/carros')

const app = express();

app.get('/carros', filtrarCarros);
app.get('/carros/:id', encontrarCarro);

app.listen(3000);