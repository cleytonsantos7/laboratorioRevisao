// Crie uma função que receba um array de objetos de usuários que contém as propriedades nome e idade.
// A função deve validar se todos os usuários são maiores de idade. Caso todos os usuários sejam maiores,
// deverá exibir a mensagem "Festa liberada!", caso contrário, deverá exibir a mensagem "Possui menor de idade".


const usuarios = [{
    nome: 'João',
    idade: 18
},
{
    nome: 'Maria',
    idade: 21
},
{
    nome: 'Claudio',
    idade: 35
},
{
    nome: 'Roberta',
    idade: 22
}];

const maioridade = usuarios.every(function (lista) {

    return lista.idade >= 18;
}
);

if (maioridade) {
    console.log("Festa liberada!")
} else {
    console.log("Possui menor de idade")
}


//Resolução

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });

    if (resultado) {
        console.log("Festa liberada!")
    } else {
    console.log("Possui menor de idade")
    }
}

fiscalizarFesta (usuarios);