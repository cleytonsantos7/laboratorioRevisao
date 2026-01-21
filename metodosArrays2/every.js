const numeros = [1, 2, 3, 4];

const resultado = numeros.every((numero) => {
    return numero <5;
});

//return true

const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado1 = frutas.every(function(elementoAtual){
    return elementoAtual !== 'manga';
});

//return false

console.log(resultado, resultado1);