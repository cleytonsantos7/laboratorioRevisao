function solucao(palpite, palavra) {
    let acertos = 0;

for (let i = 0; i < palavra.length; i++) {
  if (palavra[i] === palpite) {
    acertos++;
  }
}

console.log(acertos);
}

// function solucao(palpite, palavra) {
//     let acertos = 0;

//     for (let letra of palavra) {
//         if (letra === palpite) {
//             acertos++;
//         }
//     }

//     console.log(acertos);
// }