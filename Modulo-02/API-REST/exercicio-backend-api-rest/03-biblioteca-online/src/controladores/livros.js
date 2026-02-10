const livros = require('../dados/livros');

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
};

const encotrarLivro = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: 'O ID não é válido'});
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });
       
    if (!livro) {
        return res.status(404).json({ mensagem: 'ID não encontrado'});
    };

    return res.status(200).json(livro)
};

module.exports = {
    listarLivros,
    encotrarLivro
}