const bancoDeDados = require("../../database/database");

const obterExtrato = async (req, res) => {
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

    const depositos = bancoDeDados.depositos.filter((deposito) => {
      return deposito.numero_conta === Number(numero_conta);
    });

    const saques = bancoDeDados.saques.filter((saque) => {
      return saque.numero_conta === Number(numero_conta);
    });

    const transferenciasEnviadas = bancoDeDados.transferencias.filter(
      (transferencia) => {
        return transferencia.numero_conta_origem === Number(numero_conta);
      },
    );
    const transferenciasRecebidas = bancoDeDados.transferencias.filter(
      (transferencia) => {
        return transferencia.numero_conta_destino === Number(numero_conta);
      },
    );

    const extrato = {
      depositos,
      saques,
      transferenciasEnviadas,
      transferenciasRecebidas,
    };

    return res.status(200).json(extrato);
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  obterExtrato,
};
