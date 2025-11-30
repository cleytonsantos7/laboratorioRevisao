// Na copmpra de um determinado produto, o cliente consegue um desconto de 10% caso pague à vista.
// Caso queira parcelar, a loja parcela em até 6x sem juros, mas sem desconto.
// Imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo o valor da parcela.

// const valorDaCompra = 100;
// const numeroDeParcelas = 1;

let valorDaCompra = 100;
let numeroDeParcelas = 3;   


if(numeroDeParcelas === 1) {
    //avista
    let valorAPagar = valorDaCompra * 0.9;
    console.log(`Você pagará à vista o valor de R$ ${valorAPagar.toFixed(2)} com 10% de desconto.`);
} else {
    //parcelado
    let valorDaParcela = valorDaCompra / numeroDeParcelas;
    console.log(`Você pagará em ${numeroDeParcelas}x de R$ ${valorDaParcela.toFixed(2)} sem juros.`);
}  