const hieroglifo = [2, 'casa', 'comida', 3, 4, 4, 5];

function solucao(hieroglifo) {
    const palavras = hieroglifo.filter(palavra => typeof palavra === 'string');
    const quantidadeDePalavras = palavras.length;
    console.log(quantidadeDePalavras);  
}

solucao(hieroglifo);