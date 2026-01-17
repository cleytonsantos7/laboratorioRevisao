const comentario = "Esse COVID é muito perigoso!";

function verificarComentario(comentario) {
    const palavrasProibidas = ["pandemia", "covid"];
    const textoComentario = comentario.toLowerCase();

    for (const palavraProibida of palavrasProibidas) {
        if (textoComentario.includes(palavraProibida)) {
            console.log("Comentário bloqueado por conter palavras proibidas");
            return;
        }
    }

    console.log("Comentário autorizado");
}

verificarComentario(comentario);