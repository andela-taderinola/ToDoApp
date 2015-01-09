var mongoose = require('mongoose');
mongoose.connect('mongodb://jihdeh:1234567@ds031741.mongolab.com:31741/todosdb');

var Schema = mongoose.Schema;
var todoSchema = new Schema({
  title: {
    type: String
  },
  details: {
    type: String
  }
});

var todo = mongoose.model('todo', todoSchema, 'todosCollection');

module.exports = todo;