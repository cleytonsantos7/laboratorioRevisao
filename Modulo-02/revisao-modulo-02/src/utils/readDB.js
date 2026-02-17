const fs = require("fs/promises");
const readDB = async () => {
  try {
    const db = JSON.parse(await fs.readFile("./src/database/database.json"));
    return db;
  } catch (e) {
    throw "Arquivo nao encontrado";
  }
};

module.exports = {
  readDB,
};
