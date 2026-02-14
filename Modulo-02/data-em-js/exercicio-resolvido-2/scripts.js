const finalDaCopa = new Date(2002, 5, 30, 8);

const inicioTimestamp = +finalDaCopa;

const primeiroGolTimestamp = inicioTimestamp + (45 + 15 + 22) * 60 * 1000;
const segundoGolTimestamp = inicioTimestamp + (45 + 15 + 34) * 60 * 1000;

console.log(primeiroGolTimestamp);

console.log(new Date(+finalDaCopa + (45 + 15 + 34) * 60 * 1000));
