const personagem = {"nome":"Kratos","classe":"back-end","vida":15};

function solucao(personagem) {
   personagem.vida --;
   const life = personagem.vida <= 0 ? 'FIM DE JOGO' : personagem.vida;
   console.log(life);
}

solucao(personagem);