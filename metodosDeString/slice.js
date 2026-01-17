const texto = "só sei que nada sei";
const texto2 = texto.slice(3, 10);
const texto3 = texto.slice(5, -4);

console.log(texto2);
console.log(texto3);

//quero obter apenas os dois dígitos
//do estado em uma cidade

const cidade = "Salvador-BA"
let indice = cidade.length - 2
let estado = cidade.slice(indice)

console.log(estado)