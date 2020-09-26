const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database');

const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/products/:id', (req, res) => {
  var id = req.params.id;
  db.fetch(id)
    .then( product => {
      if(!product) {
        res.status(400).send(`error finding product with id: ${id}`);
      }
      res.status(200).send(product);
    })

});

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





