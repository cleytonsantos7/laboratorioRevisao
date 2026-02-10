const convidados = require('../dados/convidados');

const listarConvidados = (req, res) => {
    return res.status(200).json(convidados);
};

module.exports = {
    listarConvidados
}