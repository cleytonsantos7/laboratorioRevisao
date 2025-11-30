//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorRestante = valorDoProduto - valorPago;

// Calculando o valor de cada parcela.
const valorDaParcela = valorDoProduto / 100 / quantidadeDoParcelamento;
const parcelasPagas = quantidadeDoParcelamento - valorPago / valorDaParcela
// Calculando a quantidade de parcelas restantes.
const parcelasRestantes = valorRestante / valorDaParcela;

console.log(`Restam ${parcelasPagas} parcelas de R$${valorDaParcela.toFixed(2)}`);