const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("I am logging");
  res.status(500).send({ message: "Something went wrong !" });
});

app.listen(3000);
