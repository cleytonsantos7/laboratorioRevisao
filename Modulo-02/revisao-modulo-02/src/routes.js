const express = require("express");
const { createCharacter } = require("./controllers/characters/create");
const { listCharacter } = require("./controllers/characters/list");
const { getOneCharacter } = require("./controllers/characters/getOne");
const {
  listCharacterByPlayerName,
} = require("./controllers/players/getCharacter");
const { checkPassword } = require("./middleware/password");

const router = express();

router.get("/character", listCharacter);
router.get("/character/:key", getOneCharacter);
router.post("/character", createCharacter);

router.get("/player/character/:name", checkPassword, listCharacterByPlayerName);

module.exports = router;
