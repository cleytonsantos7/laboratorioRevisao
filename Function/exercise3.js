function faixaEtaria (idade){
    if (idade < 22){
    return "jovem";
    } else if (idade < 66){
    return "adulto(a)";
    } else {
    return "idoso(a)";
    }
}


const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4,
}

function apresentacao (pessoa){
   
    return `Sou ${pessoa.nome}, sou um(a) ${faixaEtaria(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`
}

console.log(apresentacao(pessoa))