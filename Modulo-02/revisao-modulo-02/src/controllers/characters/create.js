const validProfessions = require("../../utils/validProfessions");
const validAlligment = require("../../utils/validAlligment");
const fs = require("fs/promises");
const crypto = require("crypto");
const { readDB } = require("../../utils/readDB");

const createCharacter = async (req, res) => {
  const { playerName, characterName, profession, allingment, level } = req.body;

  if (!playerName.trim()) {
    return res.status(400).json("playerName is required");
  }

  if (!characterName) {
    return res.status(400).json("characterName is required");
  }

  if (!profession || !validProfessions.includes(profession.toLowerCase())) {
    return res.status(400).json("profession is required or invalid");
  }

  if (!allingment || !validAlligment.includes(allingment.toLowerCase())) {
    return res.status(400).json("allingment is required or invalid");
  }

  const newCharacter = {
    characterName,
    playerName,
    profession: profession.toLowerCase(),
    allingment: allingment.toLowerCase(),
    level: isNaN(level) ? 1 : Number(level),
    createdAt: new Date(),
  };

  const db = await readDB();

  const characterExists = db.find(
    (entry) =>
      entry.characterName === characterName && entry.playerName === playerName,
  );

  if (characterExists) {
    return res
      .status(403)
      .json(`character with name ${characterName} already exists for player`);
  }

  newCharacter.id = crypto.randomUUID();
  db.push(newCharacter);

  await fs.writeFile("./src/database/database.json", JSON.stringify(db));
  console.log(db);

  return res.status(200).json(newCharacter);
};

module.exports = { createCharacter };
