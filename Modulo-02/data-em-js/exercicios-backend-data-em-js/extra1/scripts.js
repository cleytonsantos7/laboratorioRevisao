function promoValida(inicio, solicitacao) {
  const diferenca = solicitacao.getTime() - inicio.getTime();

  const limite24h = 24 * 60 * 60 * 1000;

  return diferenca >= 0 && diferenca <= limite24h;
}

const inicio = new Date(2021, 3, 26, 12, 0);
const cliente1 = new Date(2021, 3, 27, 11, 59);
const cliente2 = new Date(2021, 3, 27, 12, 1);

console.log(promoValida(inicio, cliente1));
console.log(promoValida(inicio, cliente2));
