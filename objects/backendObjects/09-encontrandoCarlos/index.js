const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

let achei = -1;

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === "Carlos") {
        achei = i + 1;
        console.log(`Galera... O Carlos está na posição ${achei}, corre lá!`);
        break;
    }
}

if (achei === -1) {
    console.log("Carlos não está!");
}
