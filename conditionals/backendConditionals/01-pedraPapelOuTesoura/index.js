const jogada1 = "pedra"
const jogada2 = "tesoura"

if (jogada1 === jogada2) {
    console.log("Empate!");
} 
else if (
    (jogada1 === "pedra" && jogada2 === "tesoura") || 
    (jogada1 === "tesoura" && jogada2 === "papel") || 
    (jogada1 === "papel" && jogada2 === "pedra")
) {
    console.log(`${jogada1} ganhou!`);
} 
else {
    console.log(`${jogada2} ganhou!`);
}


// const regras = {
//   pedra: "tesoura",
//   tesoura: "papel",
//   papel: "pedra"
// };

// console.log(
//   jogada1 === jogada2 ? "empate" :
//   regras[jogada1] === jogada2 ? jogada1 : jogada2
// );