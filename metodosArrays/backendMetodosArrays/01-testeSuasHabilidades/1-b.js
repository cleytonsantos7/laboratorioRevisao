const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// frutas.shift();
frutas.splice(0, 1);

// frutas.pop();
frutas.splice(-1, 1)

// frutas.push('Melão');
frutas.splice(frutas.length, 0, 'Melão')

console.log(frutas)

