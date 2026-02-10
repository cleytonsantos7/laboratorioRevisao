let { alunos, identificadorAluno } = require('../dados/alunos');
const cursosValidos = require('../dados/cursos');

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso} = req.body

    if (!nome || nome.trim() === "") {
        return res.status(400).json({ mensagem: 'O nome deve ser informado.'});
    }

        if (!sobrenome || sobrenome.trim() === "") {
        return res.status(400).json({ mensagem: 'O sobrenome deve ser informado.'});
    }

        if (!idade) {
        return res.status(400).json({ mensagem: 'A idade deve ser informado.'});
    }

        if (!curso || curso.trim() === "") {
        return res.status(400).json({ mensagem: 'O curso deve ser informado.'});
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'O aluno é menor de idade.'});
    }
  
    if (!cursosValidos.includes(curso)) {
        return res.status(400).json({ mensagem: 'O curso informado não é um curso válido.'});
    }

    const alunoCadastrado = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(alunoCadastrado);

    return res.status(201).send();
};

module.exports = {
    cadastrarAluno
};