const { readDB } = require("../../utils/readDB");

const getOneCharacter = async (req, res) => {
  const { key } = req.params;

  try {
    const list = await readDB();

    const characterFound = list.find(
      (character) => character.characterName === key || character.id === key,
    );

    if (!characterFound) {
      return res.status(404);
    }

    return res.status(200).json(characterFound);
  } catch (e) {
    return res.status(500).json({ message: "Internal error" });
  }
};

module.exports = {
  getOneCharacter,
};
