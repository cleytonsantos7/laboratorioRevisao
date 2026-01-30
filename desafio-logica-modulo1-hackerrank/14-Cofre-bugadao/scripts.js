function processData(input) {
    const [senha, digitado] = input.trim().split('\n');

    const indiceFinal = digitado.split('').reduce((indiceSenha, letra) => {
        if (letra === senha[indiceSenha]) {
            return indiceSenha + 1;
        }
        return indiceSenha;
    }, 0);

    if (indiceFinal === senha.length) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
}

const input0 = `cubos
cuggbyos`;

const input1 = `cubos
ewvelrabsocaeln`;

processData(input0);
processData(input1);


// function processData(input) {
//     const linhas = input.trim().split('\n');
//     const senha = linhas[0];
//     const digitado = linhas[1];

//     let indiceSenha = 0;

//     for (let letra of digitado) {
//         if (letra === senha[indiceSenha]) {
//             indiceSenha++;
//         }

//         if (indiceSenha === senha.length) {
//             break;
//         }
//     }

//     if (indiceSenha === senha.length) {
//         console.log("SIM");
//     } else {
//         console.log("NAO");
//     }
// } 