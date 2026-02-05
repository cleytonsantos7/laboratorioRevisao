const express = require('express');

const app = express();

const professores = [
    { id: 1, nome: 'Guido', stack: 'Backend' },
    { id: 2, nome: 'Dani', stack: 'Frontend' },
    { id: 3, nome: 'Diego', stack: 'Frontend' },
    { id: 4, nome: 'Vidal', stack: 'Backend' }
];

app.get('/professores', (req, res) => {
    const { stack } = req.query;
    let resultado = professores;

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack
        });
    }

    res.send(resultado)
});

app.get('/professores/:id', (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id)
    })
    res.send(professorEncontrado)
});

app.listen(3000);