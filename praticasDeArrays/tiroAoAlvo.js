function solucao(disparos) {
    const disparosAcimaDe70 = disparos.filter((pontuacao) => pontuacao > 70);
  
    if (disparosAcimaDe70.length >= 3) {
      console.log(disparosAcimaDe70.length);
    } else {
      console.log("ELIMINADO");
    }
  
  }


//   function solucao(disparos) {
//     let acertos = 0;

//     for (let d of disparos) {
//         if (d > 70) acertos++;
//     }

//     if (acertos >= 3) {
//         console.log(acertos);
//     } else {
//         console.log("ELIMINADO");
//     }
// }