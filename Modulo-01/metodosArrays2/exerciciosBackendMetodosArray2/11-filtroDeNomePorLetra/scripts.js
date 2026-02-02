const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const comecaComA = nomes.filter((nome) => {
    return nome.charAt(0).toLocaleLowerCase() === 'a'
});

console.log(comecaComA);