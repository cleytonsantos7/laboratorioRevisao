const bancoDeDados = require("../../database/database");
const deletarConta = async (req, res) => {
  const { numeroConta } = req.params;
  try {
    const numeroValido = bancoDeDados.contas.find((conta) => {
      return conta.numero === Number(numeroConta);
    });

    if (!numeroValido) {
      return res.status(404).json({
        mensagem: "O número informado é invalido!",
      });
    }

    if (numeroValido.saldo > 0) {
      return res.status(400).json({
        mensagem: "A conta só pode ser removida se o saldo for zero!",
      });
    }

    const indice = bancoDeDados.contas.indexOf(numeroValido);
    bancoDeDados.contas.splice(indice, 1);

    return res.status(204).json();
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  deletarConta,
};
