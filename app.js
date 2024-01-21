const express = require("express");
const app = express();

const port = 3000;
app.get("/", (req, res) => {
  res.status(200).send("Selam aleyk11");
});
app.listen(port, () => {
  console.log(`app started at ${port} port`);
});
