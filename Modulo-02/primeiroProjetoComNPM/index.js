const { uniq } = require('lodash');

const { arrayNumeros, arrayLetras } = require('./array');

const arrayUnicoNumero = uniq(arrayNumeros);
const arrayUnicaLetra = uniq(arrayLetras);

console.log(arrayUnicoNumero, arrayUnicaLetra);