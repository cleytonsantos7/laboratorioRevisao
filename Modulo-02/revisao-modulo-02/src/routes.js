const express = require("express");
const { createCharacter } = require("./controllers/createCharacter");

const router = express();

router.get("/", () => console.log("oie"));
router.post("/character", createCharacter);

module.exports = router;
