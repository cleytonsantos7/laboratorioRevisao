const fs = require("fs/promises");
const { buscarEndereco } = require("utils-playground");
const enderecos = require("../enderecos.json");

const buscarCep = async (req, res) => {
  const { cep } = req.params;

  try {
    const cepEncontrado = await fs.readFile("./src/enderecos.json");

    const parseCep = JSON.parse(cepEncontrado);

    const temOEndereco = parseCep.find((endereco) => {
      const cepLimpo = endereco.cep.replace("-", "");
      const cepUsuarioLimpo = cep.replace("-", "");
      return cepLimpo === cepUsuarioLimpo;
    });
    if (temOEndereco) {
      return res.status(200).json(temOEndereco);
    }

    const endereco = await buscarEndereco(cep);

    if (!endereco || endereco.erro) {
      return res
        .status(404)
        .json({ mensagem: "CEP não encontrado na base do ViaCEP." });
    }

    parseCep.push(endereco);

    await fs.writeFile("./src/enderecos.json", JSON.stringify(parseCep));
    return res.status(201).json(endereco);
  } catch (erro) {
    console.log(erro.message);

    return res.status(500).json({
      mensagem: "Erro interno no servidor. Tente novamente mais tarde.",
    });
  }
};

module.exports = {
  buscarCep,
};
