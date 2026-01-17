//Declare uma variável que armazena um objeto contendo as seguintes propriedades: nome, idade, altura, temCNH e apelidos.
//Depois faça um programa que imprime na tela o belo texto abaixo, substituindo os dados pessoais pelos dados do objeto:
//"José tem 30 anos, 1.73m de altura, possui CNH e os seguintes apelidos:
//  -Jr
//  -Juninho"


const pessoa = {
    nome: "", 
    idade: 0,
    altura: 0,
    temCNH: false,
    apelidos: []
};

    pessoa.nome = "José"; 
    pessoa.idade = 30;
    pessoa.altura = 1.73;
    pessoa.temCNH = true;
    pessoa.apelidos = ["Jr", "Juninho"];


    if (pessoa.apelidos.length === 0){
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possui": "não possui"} CNH e não possui apelidos`)
 } else{
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.temCNH ? "possui": "não possui"} CNH e os seguintes apelidos:`)
    for (let apelido of pessoa.apelidos){
    console.log(`-${apelido}`)
}
}
