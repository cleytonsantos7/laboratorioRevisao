function solucao(lista) {
    const maioresDeIdade = lista.filter((idade) => idade >= 18);
    
    if (maioresDeIdade.length === 0) {
        console.log("CRESCA E APARECA");
        return;
    }
    console.log(Math.min(...maioresDeIdade));
}

const lista = [12, 18, 27];
solucao(lista);