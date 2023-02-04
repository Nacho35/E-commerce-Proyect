const express = require("express");
const dotenv = require("dotenv");

const app = express();
const PORT = 3001;

dotenv.config();

app.get("/api", (req, res) => {
  res.json({ message: "Hola desde el servidor!" });
});

async function main() {
  await app.listen(PORT);
  console.log(`Server running on port ${PORT}`);
}

main();
