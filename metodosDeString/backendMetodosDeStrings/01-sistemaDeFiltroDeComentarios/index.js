const comentario = "Esse COVID é muito perigoso!";

const achouCovid = comentario.toLowerCase().includes('covid');
const achouPandemia = comentario.toLowerCase().includes('pandemia');

if(achouCovid || achouPandemia){
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {
    console.log("Comentário autorizado");
}


// const comentario = "Esse COVID é muito perigoso!";

// function verificarComentario(comentario) {
//     const palavrasProibidas = ["pandemia", "covid"];
//     const textoComentario = comentario.toLowerCase();

//     for (const palavraProibida of palavrasProibidas) {
//         if (textoComentario.includes(palavraProibida)) {
//             console.log("Comentário bloqueado por conter palavras proibidas");
//             return;
//         }
//     }

//     console.log("Comentário autorizado");
// }

// verificarComentario(comentario);