function taAberto(chegada) {
  const dia = chegada.getUTCDay();
  const hora = chegada.getUTCHours();

  if (dia === 0) return false;

  if (dia === 6) {
    return hora >= 8 && hora <= 12;
  }

  return hora >= 8 && hora <= 18;
}

console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
console.log(taAberto(new Date(2021, 3, 24, 9, 30)));
