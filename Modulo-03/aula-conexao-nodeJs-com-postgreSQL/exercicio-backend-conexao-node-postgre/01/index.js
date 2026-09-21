const express = require("express");
const pool = require("./conexao");

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
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

app.get("/autor/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const query = `
      select 
        a.id as autor_id, a.nome as autor_nome, a.idade as autor_idade,
        l.id as livro_id, l.nome as livro_nome, l.genero, l.editora, l.data_publicacao
      from autores a
      left join livros l on a.id = l.autor_id
      where a.id = $1
    `;

    const resultado = await pool.query(query, [id]);

    if (resultado.rows.length === 0) {
      return res.status(404).json({ mensagem: "Autor não encontrado" });
    }

    const primeiroRegistro = resultado.rows[0];

    const livros = primeiroRegistro.livro_id
      ? resultado.rows.map((linha) => ({
          id: linha.livro_id,
          nome: linha.livro_nome,
          genero: linha.genero,
          editora: linha.editora,
          data_publicacao: linha.data_publicacao
            ? new Date(linha.data_publicacao).toISOString().split("T")[0]
            : null,
        }))
      : [];

    const autorComLivros = {
      id: primeiroRegistro.autor_id,
      nome: primeiroRegistro.autor_nome,
      idade: primeiroRegistro.autor_idade,
      livros: livros,
    };

    return res.status(200).json(autorComLivros);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
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

    const livro = resultado.rows[0];

    const livroCadastrado = {
      id: livro.id,
      nome: livro.nome,
      genero: livro.genero,
      editora: livro.editora,
      data_publicacao: livro.data_publicacao
        ? new Date(livro.data_publicacao).toISOString().split("T")[0]
        : null,
    };

    return res.status(201).json(livroCadastrado);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

app.get("/livro", async (req, res) => {
  try {
    const query = `
      select 
        l.id as livro_id, l.nome as livro_nome, l.genero, l.editora, l.data_publicacao,
        a.id as autor_id, a.nome as autor_nome, a.idade as autor_idade
      from livros l
      join autores a on l.autor_id = a.id
      order by l.id asc
    `;

    const resultado = await pool.query(query);

    if (resultado.rows.length === 0) {
      return res.status(200).json([]);
    }

    const listaLivros = resultado.rows.map((linha) => ({
      id: linha.livro_id,
      nome: linha.livro_nome,
      genero: linha.genero,
      editora: linha.editora,
      data_publicacao: linha.data_publicacao
        ? new Date(linha.data_publicacao).toISOString().split("T")[0]
        : null,
      autor: {
        id: linha.autor_id,
        nome: linha.autor_nome,
        idade: linha.autor_idade,
      },
    }));

    return res.status(200).json(listaLivros);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
});

app.listen(3000);
