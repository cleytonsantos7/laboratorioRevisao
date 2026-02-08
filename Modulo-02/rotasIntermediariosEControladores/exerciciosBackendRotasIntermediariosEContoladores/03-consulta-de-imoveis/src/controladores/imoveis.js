const imoveis = require('../dados/imoveis');

const listagemDeImoveis = (req, res) => {
    return res.send(imoveis)
};

const encontrarImovel = (req, res) => {
    const {id} = req.params
    let imovelEncontrado = imoveis.find((imovel) => {
        return Number(id) === imovel.id;
    });

    if(!imovelEncontrado) {
        return res.send('Não existe um imóvel com este identificador!')
    }
    
    return res.send(imovelEncontrado);
};

module.exports = {
    listagemDeImoveis,
    encontrarImovel
};