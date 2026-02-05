const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores')

const app = express();


app.get('/professores', filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);