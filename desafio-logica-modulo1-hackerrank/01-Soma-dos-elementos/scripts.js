const numeros = [1, 2, 3, 4]

function solucao(lista) {
    const total = lista.reduce((a, b) => {
        return a + b;
    }, 0);

    console.log(total); 
}

solucao(numeros);