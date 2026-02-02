const nome = 'Guido Cerqueira';

const gerarNickname = (nome) => {
    const nomes = nome.trim().toLowerCase().split(' ');
    let nomeSemEspaco = '';

    for (const item of nomes) {
        nomeSemEspaco += item;
    }
    
    const nickname = nomeSemEspaco.slice(0, 12);
    console.log(`@${nickname}`)
}


// function gerarNickname(nome) {
//     const nickname = `@${nome.replace(/\s/g, '').toLowerCase().substring(0, 12)}`;
//     console.log(nickname);
// };


gerarNickname(nome);