const bancoDeDados = require("../../database/database");

const criarConta = async (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  try {
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os dados devem ser informados." });
    }

    const contaExistente = bancoDeDados.contas.find((conta) => {
      return conta.usuario.cpf === cpf || conta.usuario.email === email;
    });

    if (contaExistente) {
      return res.status(400).json({
        mensagem: "Já existe uma conta com o cpf ou e-mail informado!",
      });
    }

    const novaConta = {
      numero: bancoDeDados.numeroDaConta++,
      saldo: 0,
      usuario: {
        nome,
        cpf,
        data_nascimento,
        telefone,
        email,
        senha,
      },
    };

    bancoDeDados.contas.push(novaConta);

    return res.status(204).json();
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  criarConta,
};
