const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "123456",
  database: "biblioteca",
});

const app = express();

app.use(express.json());

app.post("/autor", async (req, res) => {
  const { nome, idade } = req.body;
  try {
    if (!nome) {
      return res.status(400).json({ mensagem: "o campo nome é obrigatório." });
    }

    const query = `insert into autores (nome, idade) values ($1, $2) returning *`;

    const resultado = await pool.query(query, [nome, idade]);

    return res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/autor/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `select * from autores where id = $1`;

    const resultado = await pool.query(query, [id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: "Autor não encontrado" });
    }

    return res.status(200).json(resultado.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/autor/:id/livro", async (req, res) => {
  const { id } = req.params;
  const { nome, genero, editora, data_publicacao } = req.body;
  try {
    if (!nome) {
      return res.status(400).json({ mensagem: "o campo nome é obrigatório." });
    }

    const query = `insert into livros (nome, genero, editora, data_publicacao, autor_id) values ($1, $2, $3, $4, $5) returning *`;

    const resultado = await pool.query(query, [
      nome,
      genero,
      editora,
      data_publicacao,
      id,
    ]);

    return res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000);
