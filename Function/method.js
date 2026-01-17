const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4,
    apresentar: function (){
    return `Sou ${this.nome}, sou um(a) ${this.determinarFaixaEtaria()} de ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}.`
    },
    determinarFaixaEtaria: function () {
        if (this.idade < 22){
    return "jovem";
    } else if (this.idade < 66){
    return "adulto(a)";
    } else {
    return "idoso(a)";
    }
    }
}


console.log(pessoa.apresentar());