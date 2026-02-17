const bancoDeDados = require("../../database/database");
const { format } = require("date-fns");

const transferencia = async (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

  try {
    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os dados são obrigatórios!" });
    }

    const contaOrigemExistente = bancoDeDados.contas.find((conta) => {
      return conta.numero === Number(numero_conta_origem);
    });

    if (!contaOrigemExistente) {
      return res.status(404).json({
        mensagem: "A conta de origem não existe.",
      });
    }

    const contaDestinoExistente = bancoDeDados.contas.find((conta) => {
      return conta.numero === Number(numero_conta_destino);
    });

    if (!contaDestinoExistente) {
      return res.status(404).json({
        mensagem: "A conta de destino não existe.",
      });
    }

    if (senha !== contaOrigemExistente.usuario.senha) {
      return res.status(400).json({ mensagem: "Senha invalida!" });
    }

    if (
      contaOrigemExistente.saldo <= 0 ||
      Number(valor) > contaOrigemExistente.saldo
    ) {
      return res.status(400).json({ mensagem: "Saldo insuficiente." });
    }

    if (Number(valor) <= 0) {
      return res.status(400).json({
        mensagem: "O valor da transferência não pode ser menor ou igual a 0.",
      });
    }

    const agora = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    contaOrigemExistente.saldo -= Number(valor);
    contaDestinoExistente.saldo += Number(valor);
    bancoDeDados.transferencias.push({
      data: agora,
      numero_conta_origem,
      numero_conta_destino,
      valor,
    });
    return res.status(204).json();
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  transferencia,
};
