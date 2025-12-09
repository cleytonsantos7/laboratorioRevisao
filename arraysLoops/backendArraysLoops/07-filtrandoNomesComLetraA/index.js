const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = nomes.filter(nome => nome[0].toLowerCase() === "a");

console.log(nomesComA);



// const nomesComecadosComA = [];
// for (let nome of nomes){
//     const inicial = nome[0];

//     if (inicial === "A"|| inicial === "a"){
//         nomesComecadosComA.push(nome);
//     }
// }

// console.log(nomesComecadosComA);