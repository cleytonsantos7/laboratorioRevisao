let { alunos, identificadorAluno } = require('../dados/alunos');
const cursosValidos = require('../dados/cursos');

const validarDadosAluno = (nome, sobrenome, idade, curso) => {
    if (!nome || nome.trim() === "") return 'O nome é obrigatório.';
    if (!sobrenome || sobrenome.trim() === "") return 'O sobrenome é obrigatório.';
    if (!idade) return 'A idade é obrigatória.';
    if (idade < 18) return 'O aluno deve ter pelo menos 18 anos.';
    if (!curso || curso.trim() === "") return 'O curso é obrigatório.';
    if (!cursosValidos.includes(curso)) return 'O curso informado não é válido.';
    return null;
};

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    const mensagemErro = validarDadosAluno(nome, sobrenome, idade, curso);
    
    if (mensagemErro) {
        return res.status(400).json({ mensagem: mensagemErro });
    }

    const novoAluno = {
        id: identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    };

    alunos.push(novoAluno);

    return res.status(201).json(novoAluno);
};


module.exports = {
    cadastrarAluno,
    validarDadosAluno
};


// const cadastrarAluno = (req, res) => {
//     const { nome, sobrenome, idade, curso} = req.body

//     if (!nome || nome.trim() === "") {
//         return res.status(400).json({ mensagem: 'O nome deve ser informado.'});
//     }

//         if (!sobrenome || sobrenome.trim() === "") {
//         return res.status(400).json({ mensagem: 'O sobrenome deve ser informado.'});
//     }

//         if (!idade) {
//         return res.status(400).json({ mensagem: 'A idade deve ser informado.'});
//     }

//         if (!curso || curso.trim() === "") {
//         return res.status(400).json({ mensagem: 'O curso deve ser informado.'});
//     }

//     if (idade < 18) {
//         return res.status(400).json({ mensagem: 'O aluno é menor de idade.'});
//     }
  
//     if (!cursosValidos.includes(curso)) {
//         return res.status(400).json({ mensagem: 'O curso informado não é um curso válido.'});
//     }

//     const alunoCadastrado = {
//         id: identificadorAluno++,
//         nome,
//         sobrenome,
//         idade,
//         curso
//     }

//     alunos.push(alunoCadastrado);

//     return res.status(201).send();
// };

