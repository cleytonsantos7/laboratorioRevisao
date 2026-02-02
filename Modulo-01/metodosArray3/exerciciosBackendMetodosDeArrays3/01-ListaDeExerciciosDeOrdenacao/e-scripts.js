const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const ordemAlfabetica = frutas.sort((a, b) => {
    return b.localeCompare(a)
});

console.log(ordemAlfabetica);