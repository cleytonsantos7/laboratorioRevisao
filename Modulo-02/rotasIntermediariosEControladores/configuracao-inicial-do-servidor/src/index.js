const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores')

const app = express();

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediário');
    next();
}

app.use(primeiroIntermediario);

app.get('/professores', filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);