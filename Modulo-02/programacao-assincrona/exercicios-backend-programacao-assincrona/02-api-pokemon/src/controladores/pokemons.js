const { listarPokemons, detalharPokemon} = require('utils-playground');

const listagemDePokemons = async (req, res) => {
    const { pagina } = req.query;

    const pokemons = await listarPokemons(pagina);

    return res.status(200).json(pokemons.results);
};

const descricaoPokemon = async (req, res) => {
    const { idOuNome } = req.params;

    const { 
        id, 
        name, 
        height, 
        weight, 
        base_experience, 
        forms, 
        abilities, 
        species 
    } = await detalharPokemon(idOuNome);

    return res.status(200).json({ 
        id, name, height, weight, base_experience, forms, abilities, species 
    });
};

module.exports = {
    listagemDePokemons,
    descricaoPokemon
};