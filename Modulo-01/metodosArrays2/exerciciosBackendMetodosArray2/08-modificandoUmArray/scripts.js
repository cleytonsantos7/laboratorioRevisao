const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const arrayComIndice = frutas.map((fruta, indice) => {
    const primeiraLetraMaiúscula = fruta.charAt(0).toUpperCase() + fruta.slice(1).toLowerCase();
    return `${indice} - ${primeiraLetraMaiúscula}`;
});

console.log(arrayComIndice);