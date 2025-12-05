const diametro = 6;
const raio = diametro / 2;
const pi = Math.PI;

const volume = (4/3) * pi * (raio ** 3);

const volumeArredondado = volume.toFixed(2);

console.log(`O volume de uma esfera de raio ${raio} é ${volumeArredondado} PI`)