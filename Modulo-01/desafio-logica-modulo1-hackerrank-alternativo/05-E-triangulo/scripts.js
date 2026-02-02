const lados0 = [2, 5, 10, 6];
const lados1 = [3, 5, 4];

function solucao(lados) {
if (lados.length !== 3) {
    console.log("NAO TRIANGULO");
    return;
  }
    lados.sort((a, b) => a - b);
     if (lados[0] + lados[1] > lados[2]) {
    console.log("TRIANGULO");
  } else {
    console.log("NAO TRIANGULO");
  }
}

solucao(lados0);
solucao(lados1);