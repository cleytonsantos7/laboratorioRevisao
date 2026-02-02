const notas0 = [10, 9, 8, 7];
const notas1 = [10, 10, 9, 9];

function solucao(notas) {
    const maiorNota = Math.max(...notas);
    const menorNota = Math.min(...notas);
    const mediaNotas = notas.reduce((media, nota) => media + nota, 0) / notas.length;

    if (maiorNota - menorNota > 2) {
        console.log('RECORRIGIR PROVA');
    } else {
        console.log(mediaNotas);
}
}

solucao(notas0);
solucao(notas1);