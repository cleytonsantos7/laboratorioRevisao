const produtos = require('../bancodedados/produtos');

const listarProdutos = (req, res) => {
    return res.status(200).json(produtos);
}; 

module.exports = {
    listarProdutos
};