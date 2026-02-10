let { livros, identificadorLivro } = require('../dados/livros');

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
};

const encotrarLivro = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.'});
    }

    const livro = livros.find((livro) => {
        return livro.id === Number(id);
    });
       
    if (!livro) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.'});
    };

    return res.status(200).json(livro)
};

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O titulo deve ser informado.'});
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'O autor deve ser informado.'});
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'O ano deve ser informado.'});
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O número de páginas deve ser informado.'});
    }

    const livro = {
        id: identificadorLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro)

    return res.status(201).send();
};

const substituirLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: 'O valor do parâmetro ID da URL não é um número válido.'});
    }

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O titulo deve ser informado.'});
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'O autor deve ser informado.'});
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'O ano deve ser informado.'});
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O número de páginas deve ser informado.'});
    }

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!livroEncontrado) {
        return res.status(404).json({ mensagem: 'O livro não foi encontrado.' });
    }

    livroEncontrado.titulo = titulo;
    livroEncontrado.autor = autor;
    livroEncontrado.ano = ano;
    livroEncontrado.numPaginas = numPaginas;

    return res.status(204).send();
}

module.exports = {
    listarLivros,
    encotrarLivro,
    adicionarLivro,
    substituirLivro
}