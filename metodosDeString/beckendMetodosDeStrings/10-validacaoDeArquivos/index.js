const nomeArquivo = 'Foto da Familia.pdf';

function validarArquivo(nomeArquivo) {
    const extensoesPermitidas = ['.jpg', '.jpeg', '.gif', '.png'];

    const extensao = nomeArquivo
        .slice(nomeArquivo.lastIndexOf('.'))
        .toLowerCase();

    if (extensoesPermitidas.includes(extensao)) {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

validarArquivo(nomeArquivo);