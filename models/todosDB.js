var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todosDB');

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