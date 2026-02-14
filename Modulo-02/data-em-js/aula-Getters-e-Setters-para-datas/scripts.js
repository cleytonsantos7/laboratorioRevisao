let hoje = new Date();

console.log(hoje.getMonth(), hoje.getDay(), hoje.getFullYear());

hoje.setDate(hoje.getDate() - 1);

console.log(hoje);
