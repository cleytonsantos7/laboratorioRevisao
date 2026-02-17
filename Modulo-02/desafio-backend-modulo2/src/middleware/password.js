const { banco } = require("../database/database");

const validarSenha = async (req, res, next) => {
  const { senha_banco } = req.query;

  if (senha_banco === banco.senha) {
    next();
  }

  if (senha_banco !== banco.senha) {
    return res
      .status(400)
      .json({ mensagem: "A senha do banco informada é inválida!" });
  }

  return res.status(401).json();
};

module.exports = {
  validarSenha,
};
