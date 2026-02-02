const senhaDigitada = [5, 3, 8, 5, 5, 5, 7, 8, 9]

function solucao(senhaDigitada) {
    if (senhaDigitada.length < 8) {
        console.log("INVALIDA");
        return;
    }

    for (let i = 0; i < senhaDigitada.length - 2; i++) {
        const a = senhaDigitada[i];
        const b = senhaDigitada[i + 1];
        const c = senhaDigitada[i + 2];

        if (b === a + 1 && c === b + 1) {
            console.log("INVALIDA");
            return;
        }
    }

    console.log("VALIDA");
}

solucao(senhaDigitada);