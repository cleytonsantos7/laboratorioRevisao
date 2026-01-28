const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const ordemCrescente = frutas.sort((a, b) => {
    return a.length - b.length
});

console.log(ordemCrescente);