const lançamento = [true, false, true, true,
false, false, true, true,
false, false, false, true,
true, false, true, false];

function solucao(gabarito) {
	    const pontosPorCirculo = [1, 2, 3, 4];

    const total = gabarito.reduce((soma, acertou, index) => {
        if (acertou) {
            const circulo = Math.floor(index / 4);
            soma += pontosPorCirculo[circulo];
        }
        return soma;
    }, 0);

    console.log(total);
}

solucao(lançamento);