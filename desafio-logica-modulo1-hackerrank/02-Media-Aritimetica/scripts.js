const dinheiro = [2, 3, 4]

function solucao(lista) {
  	const dinheiroGuardado = lista.reduce((a, b) => {
        return a + b
    });
    
    const dias = lista.length
    
    const mediaDiaria = dinheiroGuardado / dias;
    console.log(mediaDiaria);
}

solucao(dinheiro);