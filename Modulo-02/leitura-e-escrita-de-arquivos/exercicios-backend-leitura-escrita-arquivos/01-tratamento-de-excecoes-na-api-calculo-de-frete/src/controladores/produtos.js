const produtos = require("../bancodedados/produtos");
const { getStateFromZipcode } = require("utils-playground");

const listarProdutos = async (req, res) => {
  try {
    return res.status(200).json(produtos);
  } catch (erro) {
    console.log(erro.message);

    return res.status(500).json({
      mensagem: "Erro interno no servidor. Tente novamente mais tarde.",
    });
  }
};

const obterProduto = async (req, res) => {
  const { idProduto } = req.params;

  try {
    const produto = produtos.find((produto) => {
      return produto.id === Number(idProduto);
    });

    if (!produto) {
      return res.status(404).json({ mensagem: "O produto não existe." });
    }

    return res.status(200).json(produto);
  } catch (erro) {
    console.log(erro.message);

    return res.status(500).json({
      mensagem: "Erro interno no servidor. Tente novamente mais tarde.",
    });
  }
};

const calcularFrete = async (req, res) => {
  const { idProduto, cep } = req.params;

  try {
    const produto = produtos.find((produto) => {
      return produto.id === Number(idProduto);
    });

    if (!produto) {
      return res.status(404).json({ mensagem: "O produto não existe." });
    }

    const estado = await getStateFromZipcode(cep);

    let valorPorcentagem = 0.12;

    if (["BA", "SE", "AL", "PE", "PB"].includes(estado)) {
      valorPorcentagem = 0.1;
    }

    if (["SP", "RJ"].includes(estado)) {
      valorPorcentagem = 0.15;
    }

    const valorFrete = produto.valor * valorPorcentagem;

    const resultado = {
      produto,
      estado,
      valorFrete,
    };

    return res.status(200).json(resultado);
  } catch (erro) {
    console.log(erro.message);

    return res.status(500).json({
      mensagem: "Erro interno no servidor. Tente novamente mais tarde.",
    });
  }
};

module.exports = {
  listarProdutos,
  obterProduto,
  calcularFrete,
};
