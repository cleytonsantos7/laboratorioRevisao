function solucao(numeros) {
 	const numeroDeJogadores = numeros.length
    const somaDasEscolhas = numeros.reduce((a, b) => {
       return a + b
    });
    let jogadorEscolhido = somaDasEscolhas % numeroDeJogadores
    if (jogadorEscolhido === 0){
        jogadorEscolhido = numeroDeJogadores
    }
    
    console.log(jogadorEscolhido)
}

const arr0 = [ 1, 3, 2, 1];
const arr1 = [ 1, 1, 1 ];

solucao(arr0);
solucao(arr1);