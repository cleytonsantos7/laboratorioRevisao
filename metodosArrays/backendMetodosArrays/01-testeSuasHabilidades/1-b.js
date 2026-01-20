// **b)** Remova o primeiro e último item do array original e adicione a fruta `Melão` ao novo array da seguinte forma:

// ```
// ['Maçã', 'Abacaxi', 'Pêra', 'Melão']
// ```

// Faça o teste com outros exemplos.

// Faça commit do resultado.


const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

// frutas.shift();
frutas.splice(0, 1);

// frutas.pop();
frutas.splice(-1, 1)

// frutas.push('Melão');
frutas.splice(frutas.length, 0, 'Melão')

console.log(frutas)

