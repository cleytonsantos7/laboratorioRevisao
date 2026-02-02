const nomeCorrompido = [
  "*Canis %lupus )familiaris",
  "F!el(is c@atus",
  "#Panthera le)o"
];

function solucao(stringCorrompido) {
    stringCorrompido.forEach(item => {
        const nomePurificado = item.replace(/[!@#$%&*()]/g, '');
        console.log(nomePurificado);
    });
}

solucao(nomeCorrompido);