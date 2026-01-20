const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

function encontrarDono (donos, pet) {
    let usuarioEncontrado;

    for (const usuario of donos) {
        if (usuario.pets.includes(pet)) {
            usuarioEncontrado = usuario;
        }
    }

    if (usuarioEncontrado) {
        console.log (`O dono(a) do(a) ${pet} é o(a) ${usuarioEncontrado.nome}`)
    } else {
        console.log (`Que pena ${pet}, não encontramos seu dono(a)`)
    }
}


encontrarDono(usuarios, 'Max')