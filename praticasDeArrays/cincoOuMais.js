const precos = [ 100, 500, 100, 200, 50];

function solucao(precos) {
    // 1 — se a lista estiver vazia, resultado é 0
    if (precos.length === 0) {
        return 0;
    }

    let soma = 0;
    let menor = precos[0]; // 2 — assume primeiro elemento como menor

    // 3 — percorre o array apenas uma vez
    for (let preco of precos) {
        soma += preco;            // soma tudo
        if (preco < menor) {      // atualiza menor valor
            menor = preco;
        }
    }

    // 4 — se tem 5 ou mais itens, remove o menor da soma
    if (precos.length >= 5) {
        soma -= menor;
    }
    //console.log(soma)
    return soma; // 5 — retorna o resultado
}
   
   solucao(precos)