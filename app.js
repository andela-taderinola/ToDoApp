var express = require('express');
var app = express();


var bodyParser = require('body-parser');
// var parseUrlencoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todos = require('./routes/todos');
app.use('/todos', todos);




app.listen(3000, function() {
  console.log("Listening on port 3000");
});