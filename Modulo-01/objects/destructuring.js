const pessoa = {
    nome: "José",
    idade: 20,
    cidade: "Salvador",
    profissao: "Dev"
}

// const nome = pessoa.nome;
// const idade = pessoa.idade;

const {nome, idade, ...outros} = pessoa;


console.log(nome, idade)
console.log(outros)