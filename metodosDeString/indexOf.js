const texto = "só sei que nada sei";

console.log(texto.indexOf("a"));

//saber se um email é válido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @

const email = "example@email.com"

let temArroba = email.indexOf("@")
let temPonto = email.indexOf(".", temArroba)
if (temArroba >= 0 && temPonto >= 0){
    console.log("Email válido!")

} else {
    console.log("Não é um email válido!")
}
