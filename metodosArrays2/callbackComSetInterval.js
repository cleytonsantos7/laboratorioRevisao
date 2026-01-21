// setInterval(() => {
//     console.log('Olá alunos e alunas!')
// }, 2000)

// const imprimir = () => {
//     console.log('Olá alunos e alunas!')
//     clearInterval(interval)
// }

// setInterval(imprimir, 2000)

// const interval = setInterval(imprimir, 2000)

// let numero = 0;

// const contador = setInterval(function () {
//     console.log(numero)
//     numero++
// }, 1000);

let numero = 10;

const contador = setInterval(function () {
    console.log(numero)
    numero--
    if (numero === 0) {
        console.log('Boooooom!')
        clearInterval(contador)
    }
}, 1000);
