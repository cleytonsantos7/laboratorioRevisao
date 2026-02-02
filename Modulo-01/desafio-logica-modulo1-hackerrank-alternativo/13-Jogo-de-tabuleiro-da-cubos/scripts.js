const dinheiro0 = 5;
const casaAtual0 = 5;
const numeroDoDado0 = 2;
const lucroPrejuizoCasas0 = [3, -1, -4, 20, 6, 2, -7, 9, -8, 9, 5, 8, 3, 2, -1, -1, -3, 4, 8, 10];
const dinheiro1 = 20;
const casaAtual1 = 18;
const numeroDoDado1 = 3;
const lucroPrejuizoCasas1 = [30, -4, -4, 10, -6, -2, -7, -9, -8, 19, 25, 8, 3, 2, -10, 5, -300, 40, 80, 10];


function solucao(dinheiro,casaAtual,numeroDoDado,lucroPrejuizoCasas) {
    const novaCasa = casaAtual + numeroDoDado;
    
    if(novaCasa > 20){
        console.log('GANHOU')
        return
    };
    
    dinheiro += lucroPrejuizoCasas[novaCasa - 1];
    
    if (dinheiro <= 0){
        console.log('PERDEU');
    } else{
        console.log(dinheiro);
    };
}

solucao(dinheiro0, casaAtual0, numeroDoDado0, lucroPrejuizoCasas0);
solucao(dinheiro1, casaAtual1, numeroDoDado1, lucroPrejuizoCasas1);