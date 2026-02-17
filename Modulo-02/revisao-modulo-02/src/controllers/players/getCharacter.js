const { readDB } = require("../../utils/readDB");

const listCharacterByPlayerName = async (req, res) => {
  const { name } = req.params;

  try {
    const list = await readDB();

    const playerFound = list.filter((player) => player.playerName === name);

    if (!playerFound) {
      return res.status(404);
    }

    return res.status(200).json(playerFound);
  } catch (e) {
    return res.status(500).json({ message: "Internal error" });
  }
};

module.exports = {
  listCharacterByPlayerName,
};
