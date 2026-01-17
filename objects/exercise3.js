//Imprima o nome do cliente
//Imprima a idade do cliente
//Modifique a idade do cliente
//Imprima a nova idade do cliente
//Imprima o nome do primeiro produto consumido
//Imprima o preço unitario do ultimo produto consumido por ele

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
};

const productsConsumed = [product1, product2, product3]

const consumerCard = {
    name: "Fury",
    age: 23,
    productsConsumed
};

console.log(consumerCard.name);
console.log(consumerCard.age);

consumerCard.age = 32;

console.log(`New age ${consumerCard.age}`);
console.log(consumerCard.productsConsumed[0].name)
console.log(consumerCard.productsConsumed[consumerCard.productsConsumed.length - 1].unitPrice);

//console.log(consumerCard.productsConsumed[2].unitPrice)