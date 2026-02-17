const bancoDeDados = require("../../database/database");

const consultarSaldo = async (req, res) => {
  const { numero_conta, senha } = req.query;

  try {
    if (!numero_conta || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os dados são obrigatórios!" });
    }

    const contaExistente = bancoDeDados.contas.find((conta) => {
      return conta.numero === Number(numero_conta);
    });

    if (!contaExistente) {
      return res.status(404).json({
        mensagem: "Conta bancária não encontada!",
      });
    }

    if (senha !== contaExistente.usuario.senha) {
      return res.status(400).json({ mensagem: "Senha invalida!" });
    }

    return res.status(200).json({ saldo: contaExistente.saldo });
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  consultarSaldo,
};
