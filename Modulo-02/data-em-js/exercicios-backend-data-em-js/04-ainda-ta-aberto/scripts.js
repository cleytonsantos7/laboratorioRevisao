function taAberto(chegada) {
  const diaDaSemana = chegada.getUTCDay();
  const hora = chegada.getUTCHours();

  const ehDiaDeSemana = diaDaSemana >= 1 && diaDaSemana <= 5;

  const estaNoHorario = hora >= 8 && hora <= 18;

  return ehDiaDeSemana && estaNoHorario;
}

console.log(taAberto(new Date(2021, 3, 25, 12)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
console.log(taAberto(new Date(2021, 3, 26, 7, 59)));
