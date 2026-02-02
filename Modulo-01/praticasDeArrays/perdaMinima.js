function solucao(precos) {
  
    let perdaMinima = Infinity;
      for(let i = 0; i < precos.length; i++){
          for(let j = i + 1; j < precos.length; j++){
              const compra = precos[i];
              const venda = precos[j];
              const prejuizo = compra - venda;
              
              if (prejuizo > 0){
                  if (prejuizo < perdaMinima) {
                      perdaMinima = prejuizo;
                  }
              }
          }
      }
  
    console.log(perdaMinima);
  };
  


//   function solucao(precos) {
  
//     // Começamos com um valor muito grande para garantir
//     // que qualquer prejuízo real será menor
//     let perdaMinima = Infinity;

//     // Primeiro loop: escolhe o preço de compra
//     for (let i = 0; i < precos.length; i++) {

//         // Segundo loop: escolhe o preço de venda (sempre depois da compra)
//         for (let j = i + 1; j < precos.length; j++) {

//             const compra = precos[i];
//             const venda = precos[j];

//             // Prejuízo é compra - venda
//             const prejuizo = compra - venda;

//             // Só interessa quando é prejuízo (positivo)
//             if (prejuizo > 0) {

//                 // Se for o menor prejuízo até agora, salva
//                 if (prejuizo < perdaMinima) {
//                     perdaMinima = prejuizo;
//                 }

//             }
//         }
//     }

//     // Mostra o menor prejuízo encontrado
//     console.log(perdaMinima);
// }