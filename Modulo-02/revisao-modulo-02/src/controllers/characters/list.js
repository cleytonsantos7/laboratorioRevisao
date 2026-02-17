const fs = require("fs/promises");
const { readDB } = require("../../utils/readDB");

const listCharacter = async (req, res) => {
  try {
    const db = await readDB();
    return res.status(200).json(db);
  } catch (e) {
    return res.status(500).json({ message: "Erro interno" });
  }
};

module.exports = {
  listCharacter,
};
