const { contas } = require("../../database/database");

const listarContas = async (req, res) => {
  try {
    return res.status(200).json(contas);
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  listarContas,
};
