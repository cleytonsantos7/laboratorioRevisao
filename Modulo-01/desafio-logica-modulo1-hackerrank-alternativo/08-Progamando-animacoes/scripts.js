const velocidade0 = 20;
const pulando0 = true;
const atacando0 = false;
const velocidade1 = 20;
const pulando1 = true;
const atacando1 = true;

function solucao(velocidade, pulando, atacando) {
    if(atacando){
        console.log('ATACANDO');
    } else if(pulando){
        console.log('PULANDO');
    } else if(velocidade === 0){
        console.log('PARADO');
    } else if(velocidade <= 30){
        console.log('ANDANDO');
    } else{
        console.log('CORRENDO');
    };
};

solucao(velocidade0, pulando0, atacando0);
solucao(velocidade1, pulando1, atacando1);