const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const dbo = require("./db/db");
const app = express();
const port = 4444;

dbo.connectToServer();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
/* index.js code before... */
app.get("/pokemon/list", function (req, res) {
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
    .collection("pokemon")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });
    /*
    Bref lisez la doc, 
    il y a plein de manières de faire ce qu'on veut :) 
    */
    
});

app.post('/pokemon/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
  .collection("pokemon")
  .insertOne(body)
  .then(function (result, err) {
    if (err) {
      res.status(400).send(err.message);
    }
      res.json(result);
  });
});

app.delete('/pokemon/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
  .collection("pokemon")
  .deleteOne(body)
  .then(function (result, err) {
    if (err) {
      res.status(400).send(err.message);
    }
      res.json(result);
  });
});

app.updateOne('/pokemon/insert', jsonParser, (req, res) => {
  const oldvalues = req.body.oldvalues;
  const body = req.body;
  const filter = { oldvalues };
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
  .collection("pokemon")
  .then(function (result, err) {
    if (err) {
      res.status(400).send(err.message);
    }
      res.json(result);
  });
});