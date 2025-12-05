//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

const valorTotalCursoEmCentavos = 1800000;

let alunoQuitouDivida = totalJaPagoPeloAluno >= valorTotalCursoEmCentavos;

const contratoExpirado = mesesDecorridos > 60;

let valorParcelaEmCentavos = 0;

if (rendaMensalEmCentavos >= 200000 && !alunoQuitouDivida && !contratoExpirado) {
    valorParcelaEmCentavos = rendaMensalEmCentavos * 0.18;

    // NUNCA cobra mais do que ainda falta pagar!
    const valorRestante = valorTotalCursoEmCentavos - totalJaPagoPeloAluno;
    if (valorParcelaEmCentavos > valorRestante) {
        valorParcelaEmCentavos = valorRestante;
    }
} else {
    valorParcelaEmCentavos = 0;
}

if (valorParcelaEmCentavos === 0) {
  if (alunoQuitouDivida) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o aluno já quitou a dívida.");
  } else if (contratoExpirado) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o contrato expirou após 60 meses.");
  } else {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
  }
} else {
  console.log(`O valor da parcela desse mês é R$ ${(valorParcelaEmCentavos / 100).toFixed(2)} reais.`);
}
