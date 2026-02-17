const bancoDeDados = require("../../database/database");
const { format } = require("date-fns");

const sacar = async (req, res) => {
  const { numero_conta, valor, senha } = req.body;

  try {
    if (!numero_conta || !valor || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os dados são obrigatórios!" });
    }

    const contaExistente = bancoDeDados.contas.find((conta) => {
      return conta.numero === Number(numero_conta);
    });

    if (!contaExistente) {
      return res.status(404).json({
        mensagem: "A conta não existe.",
      });
    }

    if (senha !== contaExistente.usuario.senha) {
      return res.status(400).json({ mensagem: "Senha invalida!" });
    }

    if (contaExistente.saldo <= 0 || Number(valor) > contaExistente.saldo) {
      return res.status(400).json({ mensagem: "Saldo insuficiente." });
    }

    if (Number(valor) <= 0) {
      return res.status(400).json({
        mensagem: "O valor do saque não pode ser menor ou igual a 0.",
      });
    }

    const agora = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    contaExistente.saldo -= Number(valor);
    bancoDeDados.saques.push({ data: agora, numero_conta, valor });
    return res.status(204).json();
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  sacar,
};
