const bancoDeDados = require("../../database/database");

const atualizarConta = (req, res) => {
  const { numeroConta } = req.params;
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
  try {
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os dados devem ser informados." });
    }

    const numeroValido = bancoDeDados.contas.find((conta) => {
      return conta.numero === Number(numeroConta);
    });

    if (!numeroValido) {
      return res.status(404).json({
        mensagem: "O número informado é invalido!",
      });
    }

    const cpfExistente = bancoDeDados.contas.find((conta) => {
      return conta.usuario.cpf === cpf && conta.numero !== Number(numeroConta);
    });

    if (cpfExistente) {
      return res.status(400).json({
        mensagem: "O CPF informado já existe cadastrado!",
      });
    }

    const emailExistente = bancoDeDados.contas.find((conta) => {
      return (
        conta.usuario.email === email && conta.numero !== Number(numeroConta)
      );
    });

    if (emailExistente) {
      return res.status(400).json({
        mensagem: "O email informado já existe cadastrado!",
      });
    }

    numeroValido.usuario = {
      nome,
      cpf,
      data_nascimento,
      telefone,
      email,
      senha,
    };

    return res.status(204).json();
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  atualizarConta,
};
