const letraA = 'a';
const letraC = 'c';

letraA.localeCompare(letraC);
// a vem antes de c
// resulta em um valor negativo

letraC.localeCompare(letraA);
// c vem depois de a
// resulta em um valor positivo

letraC.localeCompare(letraC);
// c é igual a c
// o resultado é zero