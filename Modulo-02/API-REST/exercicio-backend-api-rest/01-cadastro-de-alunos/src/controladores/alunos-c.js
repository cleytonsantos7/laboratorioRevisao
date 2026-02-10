const { alunos } = require('../dados/alunos');

const excluirAluno = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: 'O ID deve ser um número válido.'});
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'O aluno a ser excluído não foi encontrado'});
    }

    const alunoEncontrado = alunos.findIndex((aluno) => {
        return aluno.id === Number(id);
    });

    alunos.splice(alunoEncontrado, 1);

    return res.status(200).json(aluno);
};

module.exports = {
    excluirAluno
};