const express = require("express");
const pool = require("./conexao");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  // const { id } = req.params;

  const { pagina, porPagina } = req.query;
  try {
    // const query = "select * from empresas where id = $1";
    // const params = [id];

    const query = "select * from pessoas order by id asc limit $1 offset $2";

    const { rowCount } = await pool.query("select * from pessoas");

    const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina;

    const resultado = await pool.query(query, [porPagina, offset]);

    const result = {
      pagina,
      porPagina,
      total: rowCount,
      registros: resultado.rows,
    };
    return res.json(result);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000);
