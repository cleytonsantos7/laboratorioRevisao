// Faça uma função que recebe parametros do tipo string
// e imprime na tela essa string invertida, ou seja, de tras para Frente.

const texto = "Paralelepipedo"

function inverterString(texto) {
   
   const arrayDeLetras = texto.split('');
   arrayDeLetras.reverse();

   let textoInvertido = '';
   for (let letra of arrayDeLetras){
    textoInvertido += letra;
   }

   console.log(textoInvertido)
}

inverterString(texto);



// function inverterString(texto) {
//    const arrayDeLetras = texto.split('');
//    arrayDeLetras = arrayDeLetras.reverse().join('');
//    console.log(arrayDeLetras);
// }

// inverterString(texto);