const express = require('express');

const app = express();

let minutos = 0;
let segundos = 0;
let rodando = false;
let intervalo = null;

function iniciar () {
    if(!rodando) { 
        rodando = true;
        intervalo = setInterval(() => {
            segundos ++;
        if (segundos === 60){
        minutos ++;
        segundos = 0;
    }
    }, 1000);
    }
};

function pausar() {
    if(rodando){
        clearInterval(intervalo);
        rodando = false;
    }
};

function continuar() {
    if(!rodando){
        iniciar();
    }
};

function zerar() {
        if (intervalo) {
        clearInterval(intervalo);
    }

        segundos = 0;
        minutos = 0;
        rodando = false;
        intervalo = null;
};


app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos`)
});

app.get('/iniciar', (req, res) => {
    iniciar();
    res.send('Cronômetro iniciado!');
});

app.get('/pausar', (req, res) => {
    pausar();
    res.send(`Cronômetro pausado!`);
})
app.get('/continuar', (req, res) => {
    continuar();
    res.send(`Cronômetro continuando!`)
})
app.get('/zerar', (req, res) => {
    zerar();
    res.send(`Cronômetro zerado!`)
})

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});