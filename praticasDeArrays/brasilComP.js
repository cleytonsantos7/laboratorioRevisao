function solucao(primeiraLetra, segundaLetra, palavras) {
    const palavrasEncontradas = palavras.filter((palavra) => {
  return palavra.startsWith(primeiraLetra + segundaLetra);
});

if (palavrasEncontradas.length === 0) {
  console.log("NENHUMA");
} else {
  palavrasEncontradas.forEach((palavra) => {
    console.log(palavra);
  });
}

}


// function solucao(primeiraLetra, segundaLetra, palavras) {
//     const inicio = primeiraLetra + segundaLetra;

//     const filtradas = palavras.filter(p => p.startsWith(inicio));

//     if (filtradas.length === 0) {
//         console.log("NENHUMA");
//         return;
//     }

//     filtradas.forEach(p => console.log(p));
// }
