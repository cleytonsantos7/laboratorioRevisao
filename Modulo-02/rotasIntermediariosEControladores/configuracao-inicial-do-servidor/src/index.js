const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores')

const app = express();

const primeiroIntermediario = (req, res, next) => {
    console.log('passei no primeiro intermediário');
    next();
}

const intermediarioDaRota = (req, res, next) => {
    console.log('passei no intermediário da rota');
    next();
}

app.use(primeiroIntermediario);

app.get('/professores', intermediarioDaRota, filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);