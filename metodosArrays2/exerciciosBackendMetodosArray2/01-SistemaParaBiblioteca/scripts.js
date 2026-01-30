const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const posicaoDoLivro = livros.findIndex((livro) => {
    return livro === nomeDoLivro
});

console.log(`O livro está na posição ${posicaoDoLivro + 1}`);



// const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
// const nomeDoLivro = "Dom Quixote";

// const posicaoDoLivro = livros.indexOf(nomeDoLivro);

// if (posicaoDoLivro !== -1) {
//   console.log(`O livro está na posição ${posicaoDoLivro + 1}`);
// } else {
//   console.log("Livro não encontrado na estante.");
// }