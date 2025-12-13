const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4,
}

function apresentacao (pessoa){
    if (pessoa.idade <25){
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`)
    } else if (pessoa.idade <65){
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`)
    } else {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}.`)
    }
}

apresentacao(pessoa)