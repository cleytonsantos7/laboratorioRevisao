//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

let mensagem = "";

if (quantidadeDeAguaIngerida < 1.5) {
  mensagem = "Risco Alto - Você está ingerindo pouquíssima água, beba mais água!";
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
  mensagem = "Risco Moderado - Você está ingerindo pouca água, beba mais!";
} else if (quantidadeDeAguaIngerida > 3) {
  mensagem = "Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!";
}

console.log(mensagem);