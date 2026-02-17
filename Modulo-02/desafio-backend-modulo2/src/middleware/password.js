const { banco } = require("../database/database");

const validarSenha = async (req, res, next) => {
  const { senha_banco } = req.query;
  try {
    if (senha_banco !== banceo.senha) {
      return res
        .status(400)
        .json({ mensagem: "A senha do banco informada é inválida!" });
    }

    next();
  } catch (e) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = {
  validarSenha,
};
