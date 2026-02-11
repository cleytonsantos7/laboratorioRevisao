const produtos = require('../bancodedados/produtos');

const listarProdutos = async (req, res) => {
    return res.status(200).json(produtos);
}; 

const obterProduto = async (req, res) => {
    const { idProduto } = req.params;

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    if (!produto) {
        return res.status(404).json({ mensagem: 'O produto não existe.'});
    }

    return res.status(200).json(produto);
};

module.exports = {
    listarProdutos,
    obterProduto
};