const disjuntores = [false, false, true, false, false, true, false, false];

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i]) {
      console.log(i);
    }
  }


  //disjuntores.forEach((v, i) => v && console.log(i));



//   disjuntores.forEach((estado, i) => {
//   if (estado) console.log(i);
// });


// disjuntores
//   .map((valor, i) => ({ valor, i }))
//   .filter(x => x.valor)
//   .forEach(x => console.log(x.i));