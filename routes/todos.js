var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var todo = require('../models/todosDB');

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
  })

  .delete(function (request, response) {

    todo.findByIdAndRemove(request.params.id, function (err, todo) {
      response.json(todo);
    });
  });

module.exports = router;