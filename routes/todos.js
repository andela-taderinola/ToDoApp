var express = require('express');
var router = express.Router();

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

router.route('/')
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

router.route('/:id')
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

module.exports = router;