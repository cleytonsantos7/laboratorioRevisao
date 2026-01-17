const cpf = "011.022.033-44";

function removerPontuacao(documento) {
    const resultado = documento.replace(/\D/g, '');
    console.log(resultado);
}

removerPontuacao(cpf);