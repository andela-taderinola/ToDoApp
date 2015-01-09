var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000))

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todos = require('./routes/todos');
app.use('/todos', todos);

<<<<<<< HEAD



=======
app.listen(app.get('port'), function() {
  console.log("Listening on port 3000");
});