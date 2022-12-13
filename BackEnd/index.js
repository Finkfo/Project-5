var cors = require('cors')
const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const dbo = require("./db/db");
const { ObjectId } = require('mongodb');
const app = express();
app.use(cors())
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

app.post('/pokemon/updateOne', jsonParser, (req, res) => {
  const body = req.body;
  const oldvalues = req.body.oldvalues;
  const filter = { name: oldvalues };
  const newvalues = {
    $set: {
      name: req.body.newvalues
    }
  };
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemon")
    .updateOne(filter, newvalues)
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      }
      res.json(result);
    });
});


app.get("/pokemon/filter", (req, res) => {
  const type_search = req.query.type_search;
  const filter = { "type.name": type_search };
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokedex !
  dbConnect
    .collection("pokemon")
    .find({"types.name":type_search})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokedex!");
      } else {
        res.json(result);
      }
    });

});


app.get("/pokedex/list", function (req, res) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .find({}) 
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokedex!");
      } else {
        res.json(result);
      }
    });
});

app.post('/pokedex/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .insertOne(body)
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      }
      res.json(result);
    })
    .catch(err => res.json(err));
});

app.delete('/pokedex/delete', jsonParser, (req, res) => { 
  const body = req.body;
  const dbConnect = dbo.getDb();
  console.log('Got body:', body);
  dbConnect
  .collection("pokedex")
  .deleteOne(body);
  res.json(body);
});

app.post('/pokedex/updateOne', jsonParser, (req, res) => {
  const body = req.body;
  const oldvalues = req.body.oldvalues;
  const filter = { name: oldvalues };
  const newvalues = {
    $set: {
      name: req.body.newvalues
    }
  };
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokedex")
    .updateOne(filter, newvalues)
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      }
      res.json(result);
    });
});


app.get("/types/list", function (req, res) {
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes types !
  dbConnect
    .collection("types")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching types!");
      } else {
        res.json(result);
      }
    });
  /*
  Bref lisez la doc, 
  il y a plein de manières de faire ce qu'on veut :) 
  */

});

app.post('/types/insert', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("types")
    .insertOne(body)
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      }
      res.json(result);
    });
});

app.delete('/types/delete', jsonParser, (req, res) => {
  const body = req.body;
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("types")
    .deleteOne(body)
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      }
      res.json(result);
    });
});

app.post('/types/updateOne', jsonParser, (req, res) => {
  const body = req.body;
  const oldvalues = req.body.oldvalues;
  const filter = { name: oldvalues };
  const newvalues = {
    $set: {
      name: req.body.newvalues
    }
  };
  console.log('Got body:', body);
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("types")
    .updateOne(filter, newvalues)
    .then(function (result, err) {
      if (err) {
        res.status(400).send(err.message);
      }
      res.json(result);
    });
}); 