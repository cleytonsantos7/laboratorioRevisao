const original = [1, 4, 12, 21, 53, 88, 112];

const pares = [];

for (let numero of original) {
    if (numero % 2 === 0) {
        pares.push(numero);
    }
}

console.log(pares);



// const original1 = [1, 4, 12, 21, 53, 88, 112];
// const numerosPares = original1.filter(numero => numero % 2 === 0);
// console.log(numerosPares);


// const original2 = [1, 4, 12, 21, 53, 88, 112];
// const pares1 = [];
// for (let i = 0; i < original2.length; i++) {
//     if (original2[i] % 2 === 0) {
//         pares1.push(original2[i]);
//     }
// }
// console.log(pares1);