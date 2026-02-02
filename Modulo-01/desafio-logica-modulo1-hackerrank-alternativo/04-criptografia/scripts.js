const mensagem0 = 'yeyb';
const tabela0 = {"y":"a", "e":"m", "b":"r"};
const mensagem1 = 'yerws';
const tabela1 = {"e":"u", "w":"o", "y":"c", "r":"b", "s":"s"};


function solucao(mensagem, tabela) {
   let mensagemDescriptografada = "";

  for (const letraCriptografada of mensagem) {
    if (tabela[letraCriptografada]) {
      mensagemDescriptografada += tabela[letraCriptografada];
    }
};
    console.log(mensagemDescriptografada); 
}

solucao(mensagem0, tabela0);
solucao(mensagem1, tabela1);