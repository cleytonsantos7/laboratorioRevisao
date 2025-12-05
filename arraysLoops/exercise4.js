//Faça um programa que conta quantas letras "a" existem numa determinada palavra.
//Imprima o resultado na tela.

const word = "aranha";
let aSum = 0;

for(let a of word){
    if(a === 'a'){
        aSum ++;
    }
}

console.log(aSum)