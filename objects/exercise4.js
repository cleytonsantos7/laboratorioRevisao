//Faça um programa que imprime uma mensagem amigável 
//(que inclui chamar o cliente pelo nome)
//que informa o valor que ele deve pagar.



const product1 = {
    name: "beybladeBlack",
    unitPrice: 1000,
    quantityPurchased: 1
};

const product2 = {
    name: "beybladeDragonGold",
    unitPrice: 10000,
    quantityPurchased: 1
};

const product3 = {
    name: "beybladeRatiforufai",
    unitPrice: 1000000,
    quantityPurchased: 2
}

const productsConsumed = [product1, product2, product3]

const consumerCard = {
    name: "Fury",
    age: 23,
    productsConsumed
}


//let total = (
// (consumerCard.productsConsumed[0].unitPrice * consumerCard.productsConsumed[0].quantityPurchased) +
//  (consumerCard.productsConsumed[1].unitPrice * consumerCard.productsConsumed[1].quantityPurchased) +
//  (consumerCard.productsConsumed[2].unitPrice * consumerCard.productsConsumed[2].quantityPurchased)
// ) / 100

let total = 0;

for (let product of consumerCard.productsConsumed) {
  total += product.unitPrice * product.quantityPurchased;
}

total = total / 100;
console.log(`Senhor(a) ${consumerCard.name}, o valor total da sua compra é $${total.toFixed(2)}`);