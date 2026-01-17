const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

function corrigirProva(prova){
    let contador = 0;
    for (let questao of prova.questoes){
        if (questao.resposta === questao.correta){
            contador ++;
        }
    }

    return contador;
}

const acertos = corrigirProva(prova);
const nota = acertos * 2;

console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);