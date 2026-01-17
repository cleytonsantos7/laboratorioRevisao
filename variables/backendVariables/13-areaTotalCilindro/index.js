const raio = 3;      // R = raio da base
const altura = 1;    // H = altura do cilindro
const pi = Math.PI;

// Cálculo da área total
const areaTotal = 2 * pi * raio * (raio + altura);

// Resultado com 2 casas decimais (fica bonito e profissional)
const areaArredondada = areaTotal.toFixed(2);

console.log(`Um cilindro de raio ${raio} e altura ${altura} possui área total igual a ${areaArredondada}`);