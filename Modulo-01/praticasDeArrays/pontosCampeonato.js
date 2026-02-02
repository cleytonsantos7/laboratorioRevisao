function solucao(resultados) {
    let pontuacao = 0;

    for (let i = 0; i < resultados.length; i++) {
        if (resultados[i] === "V") {
            pontuacao += 3;
        } else if (resultados[i] === "E") {
            pontuacao += 1;
        }

    }

    console.log(pontuacao);

}


// function solucao(resultados) {
//     let pontuacao = 0;

//     for (let r of resultados) {
//         if (r === "V") pontuacao += 3;
//         else if (r === "E") pontuacao += 1;
//     }

//     console.log(pontuacao);
// }