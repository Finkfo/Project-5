const express = require("express");
const app = express();
const port = 4444;

app.get("/", function (req, res) {
  res.send("Hello World! ou Salut les terriens! <3");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});