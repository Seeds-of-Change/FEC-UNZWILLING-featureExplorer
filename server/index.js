const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database');

const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





