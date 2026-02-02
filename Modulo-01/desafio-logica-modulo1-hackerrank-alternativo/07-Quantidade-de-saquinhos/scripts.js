const pedido = {"brigadeiro": 30, "cajuzinho": 20, "beijinho": 60};

function solucao(pedido) {
    const docesEmCadaSaco = 15;
    let totalDeDoces = 0;
    
    for(const doce of Object.values(pedido)){
        totalDeDoces += doce ;
    }
    
    let totalDeSaquinhos = totalDeDoces / docesEmCadaSaco;
    
    if(totalDeSaquinhos % 1 !== 0){
        totalDeSaquinhos = Math.floor(totalDeSaquinhos) + 1;
    }

    console.log(totalDeSaquinhos);
}

solucao(pedido);