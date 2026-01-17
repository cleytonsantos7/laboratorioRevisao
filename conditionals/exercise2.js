//Na questão anterior, modifique o código para permitir que o cliente possa dividir a compra em até 12x.
//Pórem, entre 7x e 12x será aplicada uma taxa de juros de 1% ao mês.
//Ou seja, antes de calcular o valor da parcela é preciso calcular o novo montante a pagar de acordo com a seguinte fórmula:
//M = C*(1 + i)^n

let valorDaCompra = 100;
let numeroDeParcelas = 12;   


if (numeroDeParcelas < 1 || numeroDeParcelas > 12) {
    console.log("Número de parcelas inválido. Deve ser entre 1 e 12 parcelas.");
}
else if (numeroDeParcelas === 1) {
    // À vista: 10% de desconto
    let valorAPagar = valorDaCompra * 0.9;
    console.log(`Você pagará à vista R$ ${valorAPagar.toFixed(2)} (com 10% de desconto).`);
} else {
    //parcelado
    let valorDaParcela = valorDaCompra / numeroDeParcelas;
    if(numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
        //com juros
        let i = 0.01; //1% ao mês
        let M = valorDaCompra * Math.pow((1 + i), numeroDeParcelas);
        valorDaParcela = M / numeroDeParcelas;
        console.log(`Você pagará em ${numeroDeParcelas}x de R$ ${valorDaParcela.toFixed(2)} com juros.`)
    } else {
    console.log(`Você pagará em ${numeroDeParcelas}x de R$ ${valorDaParcela.toFixed(2)} sem juros.`);
}  
}