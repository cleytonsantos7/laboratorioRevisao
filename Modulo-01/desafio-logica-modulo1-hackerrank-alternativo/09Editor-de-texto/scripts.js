const texto ='sdxw wre cubos pt  o a';

function solucao(texto) {
    const palavras = texto.split(" ");
    let erros = 0;

    for (const palavra of palavras) {
    if (!/[aeiou]/i.test(palavra) && palavra.length > 0) {
        erros++;
    };
}
    console.log(erros);
}

solucao(texto);