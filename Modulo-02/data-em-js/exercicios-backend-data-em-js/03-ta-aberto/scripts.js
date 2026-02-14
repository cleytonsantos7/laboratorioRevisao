function taAberto(chegada) {
  const hora = chegada.getUTCHours();

  return hora >= 8 && hora <= 18;
}

console.log(taAberto(new Date(2015, 1, 1, 12)));
console.log(taAberto(new Date(2015, 1, 1, 2)));
console.log(taAberto(new Date(2015, 1, 1, 18)));
console.log(taAberto(new Date(2015, 1, 1, 19)));
