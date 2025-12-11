//Crie um objeto que represente o cartão de consumo de um cliente, deve ter:
//-Nome do cliente
//-Idade do cliente
//-Produtos consumidos
//Cada produto pode ter:
//Nome do produto
//Preço unitário (em centavos)
//Quantidade comprada

//Pode inventar os dados. Coloque pelo menos 3 produtos.

const product1 = {
    name: "beybladeBlack",
    unitPrice: 100000,
    quantityPurchased: 100
};

const product2 = {
    name: "beybladeDragonGold",
    unitPrice: 1000000,
    quantityPurchased: 10
};

const product3 = {
    name: "beybladeRatiforufai",
    unitPrice: 999999999999,
    quantityPurchased: 1
}

const productsConsumed = [product1, product2, product3]

const consumerCard = {
    name: "Fury",
    age: 23,
    productsConsumed
}

console.log(consumerCard)



//resolução

// const produtosConsumidos = [
//         {
//             nome: "Pão de Alho",
//             precoUnit: 1500,
//             quantidade: 3
//         },
//         {
//             nome: "Cerveja",
//             precoUnit: 1000,
//             quantidade: 2
//         },
//         {
//             nome: "Agua",
//             precoUnit: 500,
//             quantidade: 1
//         }
//     ]

// const cartao = {
//     nome: "José",
//     idade: 30,
//     produtosConsumidos 
// };

// console.log(cartao);