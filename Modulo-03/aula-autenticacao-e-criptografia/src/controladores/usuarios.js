const pool = require("../conexao");
const bycript = require("bcrypt");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const senhaCriptografada = await bycript.hash(senha, 10);
    const novoUsuario = await pool.query(
      "insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *",
      [nome, email, senhaCriptografada],
    );

    return res.status(201).json(novoUsuario.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res
        .status(400)
        .json({ message: "O e-mail informado já está cadastrado." });
    }

    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};

module.exports = { cadastrarUsuario };
