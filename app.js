var express = require('express');
var app = express();

//Cross domain allow access
var allowCrossDomain = function(request, response, next) {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
  response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  next();
};

app.use(allowCrossDomain);

app.set('port', (process.env.PORT || 5000))

app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todos = require('./routes/todos');
app.use('/todos', todos);

app.listen(app.get('port'), function() {
  console.log("Listening on port 5000");
});