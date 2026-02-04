const express = require('express');
const usuarios = require('./usuarios')
const app = express();

app.get('/usuarios', (req, res) => {
   res.send(usuarios);
});

app.listen(3000);