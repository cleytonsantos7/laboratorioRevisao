// Ex:
//const letraSorteada = "m";
//const palavrasDasCriancas = ["mamao", "maca", "melao", "melancia", "laranja"];

function solucao(letra, palavras) {
    let criancaPerdeu = 0;

for (let i = 0; i < palavras.length; i++) {
  if (palavras[i].charAt(0) !== letra) {
    criancaPerdeu++;
  }
}

console.log(criancaPerdeu);
  
}



// function solucao(letra, palavras) {
//     const criancaPerdeu = palavras.filter(p => p[0] !== letra).length;
//     console.log(criancaPerdeu);
// }


// function solucao(letra, palavras) {
//      let erros = 0;
//       for (let palavra of palavras) { 
//         const primeiraLetra = palavra[0];
//          if (primeiraLetra !== letra) {
//              erros ++; 
//             } 
//         } console.log(erros); 
//}