const { listarPokemons, detalharPokemon} = require('utils-playground');

const listagemDePokemons = async (req, res) => {
    const { pagina } = req.query;

    const pokemons = await listarPokemons(pagina);

    return res.status(200).json(pokemons.results);
};

module.exports = {
    listagemDePokemons
};