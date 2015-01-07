var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
// var parseUrlencoded = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);
// app.use('/todo', router);

var toDo = [
  {
    id: 1,
    title: "StomachAffairs",
    details: "Cook"
  },
  {
    id: 2,
    title: "OfficeAffairs",
    details: "Update memo"
  },
  {
    id: 3,
    title: "RoadAffairs",
    details: "Fix car"
  }
];

router.route('/todos')
  .all(function (request, response, next) {
    next();
  })

  .get(function (request, response) {
    response.json(toDo);
  })

  .post(function (request, response) {
    var newToDo = request.body;
    toDo.push(newToDo);
    response.json(toDo);
  });

router.route('/todos/:id')
  .put(function (request, response) {
    var editToDo = request.body;
    console.log(editToDo);
    for(var i = 0; i < toDo.length; i++){
      if(+request.params.id === toDo[i].id) {
        toDo[i].details = editToDo.details;
        toDo[i].title = editToDo.title;
      }
    }
    response.json(toDo);
  })

    .delete(function (request, response) {
      for(var i = 0; i < toDo.length; i++) {
        if(+request.params.id === toDo[i].id) {
          toDo.splice(i, 1);
        }
      }
      console.log(toDo);
      response.json(toDo);
    });





app.listen(3000, function() {
  console.log("Listening on port 3000");
});