const nomeArquivo = 'Foto da Familia.pdf';

const validarArquivo = (arquivo) => {
    const extensao = arquivo.slice(arquivo.lastIndexOf('.') + 1);

    if (extensao === 'jpg' || extensao === 'jpeg' || extensao === 'git' || extensao === 'png') {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

// function validarArquivo(nomeArquivo) {
//     const extensoesPermitidas = ['.jpg', '.jpeg', '.gif', '.png'];

//     const extensao = nomeArquivo
//         .slice(nomeArquivo.lastIndexOf('.'))
//         .toLowerCase();

//     if (extensoesPermitidas.includes(extensao)) {
//         console.log('Arquivo válido');
//     } else {
//         console.log('Arquivo inválido');
//     }
// }

validarArquivo(nomeArquivo);