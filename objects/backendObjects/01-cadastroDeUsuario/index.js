// 1. Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada `endereco`. Cada propriedade deve receber um valor apropriado.

//     - rua
//     - numero
//     - complemento
//     - bairro
//     - cep
//     - cidade
//     - estado
//     - pais

// 2. Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada `usuario`. Cada propriedade deve receber um valor apropriado.

//     - nome
//     - email
//     - telefone
//     - data_nascimento
//     - endereco

//     Obs.: a propriedade `endereco` do objeto do `usuario` deverá receber, como valor, a variável `endereco` criada anteriormente.


const endereco = {
    rua: "Parque das Laranjeiras",
    numero: 71,
    complemento: "Casa",
    bairro: "Saudade",
    cep: "12345000",
    cidade: "Londropolis",
    estado: "Lonposo",
    pais: "Lomp"
};

const usuario = {
    nome: "Adalberto Torres Alves",
    email: "adaltorre@gmail.com",
    telefone: "+55784554215",
    data_nascimento: "2045/02/30",
    endereco
};

console.log(usuario)