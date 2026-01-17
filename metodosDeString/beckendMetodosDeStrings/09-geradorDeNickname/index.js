const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
    const nickname = `@${nome.replace(/\s/g, '').toLowerCase().substring(0, 12)}`;
    console.log(nickname);
};


gerarNickname(nome);