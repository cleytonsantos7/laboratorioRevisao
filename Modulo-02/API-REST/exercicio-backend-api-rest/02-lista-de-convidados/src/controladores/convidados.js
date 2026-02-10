const convidados = require('../dados/convidados');

const listarConvidados = (req, res) => {
    const { nome } = req.query;

    if (nome) {
    if (convidados.includes(nome)) {
        return res.json({ "mensagem": "Convidado presente." });
    }
    return res.json({ "mensagem": "O convidado buscado não está presente na lista." });
    }

    return res.status(200).json(convidados);
};

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!nome || nome.trim() === "") {
        return res.status(400).json({ "mensagem": "O nome do convidado deve ser informado." });
    }

    if (convidados.includes(nome)) {
        return res.status(400).json({
        "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
        });
    }

    convidados.push(nome);

    return res.status(201).json({ "mensagem": "Convidado adicionado." });
}; 

module.exports = {
    listarConvidados,
    adicionarConvidado
};