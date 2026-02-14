const { format } = require("date-fns");
const { ptBR } = require("date-fns/locale");

const data = new Date(2020, 9, 5);

// a
const formatarA = (data) =>
  format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });

// b
const formatarB = (data) => format(data, "dd/MM/yyyy");

// c
const formatarC = (data) =>
  format(data, "d MMM", { locale: ptBR }).toLowerCase();

// d
const formatarD = (data) =>
  format(data, "dd MMM yyyy", { locale: ptBR }).toLowerCase();

// e
const formatarE = (data) =>
  format(data, "dd 'de' MMM 'de' yyyy", { locale: ptBR }).toLowerCase();

// f
const formatarF = (data) =>
  format(data, "dd/MMM", { locale: ptBR }).toLowerCase();

console.log(formatarA(data));
console.log(formatarB(data));
console.log(formatarC(data));
console.log(formatarD(data));
console.log(formatarE(data));
console.log(formatarF(data));
