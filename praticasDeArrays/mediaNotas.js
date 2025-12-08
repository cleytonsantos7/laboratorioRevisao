  function solucao(notas) {
    const notasOrdenadas = notas.slice().sort((a, b) => a - b);
    const notasValidas = notasOrdenadas.slice(1, -1);

    const soma = notasValidas.reduce((total, n) => total + n, 0);
    const media = soma / notasValidas.length;

    console.log(media);
}