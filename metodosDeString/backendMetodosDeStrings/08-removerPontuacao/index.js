const cpf = "011.022.033-44";

const removerPontuacao = (numero) => {
    let numeros = numero.replace('-', '').replace('/', '').split('.');
    let numeroLimpo = '';

    for (const item of numeros) {
        numeroLimpo += item;
    }

    console.log(numeroLimpo);
}


// function removerPontuacao(documento) {
//     const resultado = documento.replace(/\D/g, '');
//     console.log(resultado);
// }

removerPontuacao(cpf);