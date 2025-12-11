const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

const jovens = [];
const adultos = [];

for(let i = 0; i < usuarios.length; i++){
    if (usuarios[i].idade < 18){
        jovens.push(usuarios[i]);
    } else {
        adultos.push(usuarios[i]);
    }
};

// for (const usuario of usuarios) {
//     if (usuario.idade < 18) {
//         jovens.push(usuario);
//     } else {
//         adultos.push(usuario);
//     }
// };

console.log("Jovens:", jovens);
console.log("Adultos:", adultos);