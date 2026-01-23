const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const procurandoPalavra = palavras.some((palavra) => {
    return palavra.length > 5;
})

if (procurandoPalavra) {
    console.log(`existe palavra inválida`);
} else {
    console.log(`array validado`)
}