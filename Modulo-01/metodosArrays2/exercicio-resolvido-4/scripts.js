const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
]
// a) filtrar todos os professores de backend

const resultadoBackend = professores.filter((professor) => {
    return professor.stack === "backend";
});

console.log('--- Backend ---');
console.log(resultadoBackend);

// b) filtrar todos os professores de frontend

const resultadoFrontend = professores.filter((professor) => {
    return professor.stack === 'frontend';
});

console.log('--- Frontend ---');
console.log(resultadoFrontend);