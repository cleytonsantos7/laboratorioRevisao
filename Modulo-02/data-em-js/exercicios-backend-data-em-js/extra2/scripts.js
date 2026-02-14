function promo30DiasValida(inicio, solicitacao) {
  const diferenca = solicitacao.getTime() - inicio.getTime();

  const limite30Dias = 30 * 24 * 60 * 60 * 1000;

  return diferenca >= 0 && diferenca <= limite30Dias;
}

const inicioPromo = new Date(2021, 3, 10);
const clienteHoje = new Date(2021, 4, 10);
const clienteAtrasado = new Date(2021, 4, 11);

console.log(promo30DiasValida(inicioPromo, clienteHoje));
console.log(promo30DiasValida(inicioPromo, clienteAtrasado));
