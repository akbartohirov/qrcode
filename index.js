const express = require("express");

const app = express();

app.use("/aydin-tr-cert", express.static("files"));

app.get("/", (req, res) => {
  res.status(301).redirect("https://www.aydin.edu.tr/");
});

const PORT = 3000;

app.listen(PORT, () => console.log("The server started"));
