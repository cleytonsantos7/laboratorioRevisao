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

app.listen(3000);
