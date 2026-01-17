const capitalInicial = 60000;   // C
const montanteFinal = 90000;  // M
const meses = 24;     // n

const taxa = (montanteFinal / capitalInicial) ** (1 / meses) - 1;
const taxaPercentual = (taxa * 100).toFixed(3);

console.log(
  `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaPercentual}%, ` +
  `pois após ${meses} meses você teve que pagar ${montanteFinal} reais.`
);