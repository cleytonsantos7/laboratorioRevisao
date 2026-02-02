const produtividadeDosFuncionarios = [100, 4, 50, 22, 45.5, 29];

function solucao(produtividadeDosFuncionarios) {
    const maiorProducao = Math.max(...produtividadeDosFuncionarios);
    const limiteMinDeProducao = maiorProducao * 0.3;

    const demitidos = produtividadeDosFuncionarios.filter(produtividade => produtividade <= limiteMinDeProducao);

console.log(demitidos.length);  
}

solucao(produtividadeDosFuncionarios);