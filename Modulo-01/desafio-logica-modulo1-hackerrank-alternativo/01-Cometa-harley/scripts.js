const ano = 2062;

function solucao(ano) {
	const intervalo = ano - 1986
    
    if (intervalo % 76 === 0) {
        console.log('VAI PASSAR');
    } else {
        console.log('NAO VAI PASSAR');
    }
}

solucao(ano);