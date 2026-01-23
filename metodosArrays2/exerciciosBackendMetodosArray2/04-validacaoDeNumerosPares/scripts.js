const numeros = [0, 122, 4, 6, 7, 8, 44];

const validandoNumerosPares = numeros.every((numero) => {
    return numero % 2 === 0;
});

if (validandoNumerosPares) {
    console.log(`array válido`);
} else {
    console.log(`array inválido`);
}