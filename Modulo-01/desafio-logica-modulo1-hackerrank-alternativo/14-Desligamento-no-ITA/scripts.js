const notas = [10, 10, 9, 10, 4, 10, 10, 10, 10];

function solucao(notas) {
    const insuficiente = notas.filter(nota => nota < 6.5);
    const deficiente = notas.some(nota => nota < 5);

    if(insuficiente.length >= 2 || deficiente){
    console.log('DESLIGAR ALUNO');
    } else{
    console.log('SITUACAO REGULAR');
    }  
}

solucao(notas);