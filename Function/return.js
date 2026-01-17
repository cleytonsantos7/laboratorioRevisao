function verificarMaioridade (idade){
    if (pessoa.idade <18){
    return false;
    } else {
    return true;
    }
};

const valorRetornado = verificarMaioridade(20);
console.log(valorRetornado);