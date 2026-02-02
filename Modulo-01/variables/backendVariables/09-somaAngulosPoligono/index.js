const lados = 6;
const somaAngulos = (lados - 2) * 180;
const anguloInterno = somaAngulos / lados;

console.log(`Polígono de ${lados} lados`);
console.log(`Soma dos ângulos internos: ${somaAngulos}°`);
console.log(`Cada ângulo interno: ${anguloInterno}°`);