const anotacaoAtleta0 = ["cavalo", "pedra", "tartaruga"];
const gabarito0 = ["cavalo", "pedra", "morcego"];
const anotacaoAtleta1 = ["aviao", "cadeira", "caneco"];
const gabarito1 = ["pedra", "limpeza", "tigre", "macaco"];
const anotacaoAtleta2 = ["lambari", "campanhia", "namoro"];
const gabarito2 = ["lambari", "campanhia", "namoro"];

function solucao(anotacaoAtleta, gabarito) {
    for (let intinerario = 0; intinerario < anotacaoAtleta.length; intinerario++){
        if (intinerario > gabarito.length || anotacaoAtleta[intinerario] !== gabarito[intinerario]) {
            console.log('PROVA INCOMPLETA');
            return;
        };
    } ;
         if (anotacaoAtleta.length !== gabarito.length){
        console.log('PROVA INCOMPLETA');
            return;
    } else{
        console.log('PROVA COMPLETA');
    };
}

solucao(anotacaoAtleta0, gabarito0);
solucao(anotacaoAtleta1, gabarito1);
solucao(anotacaoAtleta2, gabarito2);