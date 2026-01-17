//valor do produto comprado.
const valorDoProduto = 100000;
//quantidade de parcelas
const quantidadeDoParcelamento = 10;
//valor pago
const valorPago = 300;

const valorDaParcela = valorDoProduto / 100 / quantidadeDoParcelamento;
const parcelasRestantes = quantidadeDoParcelamento - valorPago / valorDaParcela

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorDaParcela.toFixed(2)}`);
