const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const ordemAlfabetica = frutas.sort((a, b) => {
    return a.localeCompare(b)
});

console.log(ordemAlfabetica);
