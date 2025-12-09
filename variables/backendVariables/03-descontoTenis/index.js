let valorTotal = 12999;
let meuDinheiro = 8000;

let desconto = valorTotal - meuDinheiro;

let porcentagemNecessaria = (desconto / valorTotal) * 100;

console.log(porcentagemNecessaria.toFixed(1) + "%");