var mongoose = require('mongoose');
mongoose.connect('mongodb://timiderinola:afriica90@ds031531.mongolab.com:31531/todosdb');

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