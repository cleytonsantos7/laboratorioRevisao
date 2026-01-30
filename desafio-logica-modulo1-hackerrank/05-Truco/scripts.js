function solucao(carta) {
    const cartas = ["Q", "J", "K", "A", "2", "3"];
    
    const indice = cartas.indexOf(carta);
    const manilha = cartas[(indice + 1) % cartas.length];
    
    console.log(manilha);
}

solucao('Q');