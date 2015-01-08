var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var todo = require('../models/todosDB');


// var toDo = [
//   {
//     id: 1,
//     title: "StomachAffairs",
//     details: "Cook"
//   },
//   {
//     id: 2,
//     title: "OfficeAffairs",
//     details: "Update memo"
//   },
//   {
//     id: 3,
//     title: "RoadAffairs",
//     details: "Fix car"
//   }
// ];

router.route('/')
  .all(function (request, response, next) {
    next();
  })

  .get(function (request, response) {
    todo.find(function (err, todo) {
      response.json(todo);
    });
  })

  .post(function (request, response) {
    var newToDo = request.body;
    todo.create({
      title: newToDo.title,
      details: newToDo.details
    }, function (err, todo) {
      if(err) {
        return response.send(err);
      }
      response.json(todo);
    });
  });

router.route('/:id')
  .put(function (request, response) {
    var editToDo = request.body;
    todo.findByIdAndUpdate(request.params.id, {
      title: editToDo.title,
      details: editToDo.details
    }, function (err, todo) {
      response.json(todo);
    });
    // console.log(editToDo);
    // for(var i = 0; i < toDo.length; i++){
    //   if(+request.params.id === toDo[i].id) {
    //     toDo[i].details = editToDo.details;
    //     toDo[i].title = editToDo.title;
    //   }
    // }
  })

  .delete(function (request, response) {

    todo.findByIdAndRemove(request.params.id, function (err, todo) {
      response.json(todo);
    });
  });

module.exports = router;