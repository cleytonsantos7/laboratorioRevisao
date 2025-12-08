function solucao(sequencia) {
    let indice = 0;

    for (let item of sequencia) {
        if (item === '>') {
            indice++;
        } else {
            indice--;
        }

        if (indice < 0) {
            indice = 6;
        } else if (indice > 6) {
            indice = 0;
        }
    }

    console.log("Resultado:", indice);
}



// function solucao(sequencia) {
//     const imagens = ['imagem0', 'imagem1', 'imagem2', 'imagem3', 'imagem4', 'imagem5', 'imagem6'];
//       let indice = 0;
  
//     for (let i = 0; i < sequencia.length; i++) {
//       if (sequencia[i] === '>') {
//         indice = (indice + 1) % imagens.length;
//       } else if (sequencia[i] === '<') {
//         indice = (indice - 1 + imagens.length) % imagens.length;
//       }
//     }
//     console.log(indice);
//   }