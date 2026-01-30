function solucao(texto) {
        const palavras = texto.split(' ').filter(palavra => palavra !== '');
    console.log(palavras.length);
}

const texto0 = 'Um texto qualquer';
const texto1 = 'Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer '

solucao(texto0);
solucao(texto1);