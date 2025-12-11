// 1. Dado o objeto `usuario` abaixo, monte a mensagem `Olá... Eu sou João e tenho 25 anos de idade. Sou programador e minha cor preferida é verde!`, passando dinamicamente as informações contidas no objeto.

// ```javascript
// const usuario = {
//     nome: "João",
//     idade: 25,
//     profissao: "programador",
//     cor_preferida: "verde",
// }
// ```

// _Dica: a desestruturação pode facilitar a escrita do código, além de torná-lo mais legível._


const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
}

const {nome, idade, profissao, cor_preferida} = usuario

console.log(`Olá... Eu sou ${nome} e tenho ${idade} anos de idade. Sou ${profissao} e minha cor preferida é ${cor_preferida}!`)