const pool = require("../conexao");

const cadastrarPokemon = async (req, res) => {
  const { nome, apelido, habilidades, imagem } = req.body;
  const { id } = req.usuario;
  if (!nome || !habilidades) {
    return res
      .status(400)
      .json({ message: "O nome e as habilidades são obrigatorios!" });
  }

  try {
    const { rows } = await pool.query(
      "insert into pokemons (usuario_id, nome, apelido, habilidades, imagem) values ($1, $2, $3, $4, $5) returning *",
      [id, nome, apelido, habilidades, imagem],
    );

    return res.status(201).json(rows[0]);
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const atualizarApelido = async (req, res) => {
  const { id } = req.params;
  const { apelido } = req.body;

  try {
    const { rows, rowCount } = await pool.query(
      "select * from pokemons where id = $1 and usuario_id = $2",
      [id, req.usuario.id],
    );

    if (rowCount < 1) {
      return res.status(404).json({ mensagem: "Pokémon não encontrado" });
    }

    await pool.query("update pokemons set apelido = $1 where id = $2", [
      apelido,
      id,
    ]);

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const listarPokemons = async (req, res) => {
  try {
    const query = `
      select p.id, u.nome as usuario, p.nome, p.apelido, p.habilidades, p.imagem
      from pokemons p
      join usuarios u on p.usuario_id = u.id order by p.id asc
    `;

    const resultado = await pool.query(query);

    if (resultado.rows.length === 0) {
      return res.status(200).json([]);
    }

    const listaPokemon = resultado.rows.map((linha) => ({
      id: linha.id,
      usuario: linha.usuario,
      nome: linha.nome,
      apelido: linha.apelido,
      habilidades: linha.habilidades.split(", "),
      imagem: linha.imagem,
    }));

    return res.status(200).json(listaPokemon);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const filtrarPokemon = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows, rowCount } = await pool.query(
      `select p.id, u.nome as usuario, p.nome, p.apelido, p.habilidades, p.imagem
       from pokemons p
       join usuarios u on p.usuario_id = u.id
       where p.id = $1`,
      [id],
    );

    if (rowCount < 1) {
      return res.status(404).json({ mensagem: "Pokémon não encontrado" });
    }

    const pokemon = rows[0];

    pokemon.habilidades = pokemon.habilidades.split(", ");

    return res.json(pokemon);
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

const excluirPokemon = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows, rowCount } = await pool.query(
      "select * from pokemons where id = $1 and usuario_id = $2",
      [id, req.usuario.id],
    );

    if (rowCount < 1) {
      return res.status(404).json({ mensagem: "Pokémon não encontrado" });
    }

    await pool.query("delete from pokemons where id = $1", [id]);

    return res.status(204).send();
  } catch (error) {
    return res.status(500).json("Erro interno do servidor");
  }
};

module.exports = {
  cadastrarPokemon,
  atualizarApelido,
  listarPokemons,
  filtrarPokemon,
  excluirPokemon,
};
