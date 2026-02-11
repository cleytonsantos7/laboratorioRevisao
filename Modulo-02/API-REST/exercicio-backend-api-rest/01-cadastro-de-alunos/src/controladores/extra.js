let { alunos, identificadorAluno } = require('../dados/alunos');
const cursosValidos = require('../dados/cursos');
const { validarDadosAluno } = require('./alunos-b');

const substituirAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    const erro = validarDadosAluno(nome, sobrenome, idade, curso);
    if (erro) return res.status(400).json({ mensagem: erro });

    const aluno = alunos.find(a => a.id === Number(id));
    if (!aluno) return res.status(404).json({ mensagem: 'Aluno não encontrado.' });

    aluno.nome = nome;
    aluno.sobrenome = sobrenome;
    aluno.idade = idade;
    aluno.curso = curso;

    return res.status(204).send();
};

const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    const aluno = alunos.find(a => a.id === Number(id));
    if (!aluno) return res.status(404).json({ mensagem: 'Aluno não encontrado.' });

    if (nome) aluno.nome = nome;
    if (sobrenome) aluno.sobrenome = sobrenome;
    if (idade) {
        if (idade < 18) return res.status(400).json({ mensagem: 'Idade inválida.' });
        aluno.idade = idade;
    }
    if (curso) {
        if (!cursosValidos.includes(curso)) return res.status(400).json({ mensagem: 'Curso inválido.' });
        aluno.curso = curso;
    }

    return res.status(204).send();
};

module.exports = {
    substituirAluno,
    atualizarAluno
};