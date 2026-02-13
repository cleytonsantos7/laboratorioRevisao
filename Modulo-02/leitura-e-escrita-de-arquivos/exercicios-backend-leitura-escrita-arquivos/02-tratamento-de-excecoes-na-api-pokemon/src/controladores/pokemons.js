const { listarPokemons, detalharPokemon } = require("utils-playground");

const listagemDePokemons = async (req, res) => {
  const { pagina } = req.query;

  try {
    const pokemons = await listarPokemons(pagina);

    return res.status(200).json(pokemons.results);
  } catch (erro) {
    console.log(erro.message);

    return res.status(500).json({
      mensagem: "Erro interno no servidor. Tente novamente mais tarde.",
    });
  }
};

const descricaoPokemon = async (req, res) => {
  const { idOuNome } = req.params;

  try {
    const {
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    } = await detalharPokemon(idOuNome);

    return res.status(200).json({
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species,
    });
  } catch (erro) {
    console.log(erro.message);

    return res.status(500).json({
      mensagem: "Erro interno no servidor. Tente novamente mais tarde.",
    });
  }
};

module.exports = {
  listagemDePokemons,
  descricaoPokemon,
};
