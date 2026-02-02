//Ex1
//faça um programa que altere uma string desse
//formato para o formato  que estamos
//acostumados no Brasil, com vírgula
//por exemplo o numero 97.50 deve virar 97,50

// let numero = "97.50"

// numero = numero.replace('.', ',')

// console.log(numero)


let numero = "1,350,000";

function replaceAll(original, text, newText){
while(original !== original.replace(text, newText)){
original = original.replace(text, newText)
}
return original;
}

console.log(replaceAll(numero, ",", "."));