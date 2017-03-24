var express = require('express');
var router = express.Router();
var Todos = require("./_todos");
var _ = require("underscore");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    todos: Todos.get()
  });
});

// get todos
router.get('/todos', function(req, res) {
  res.json(Todos.get()).end();
});

// create or update
router.post('/todos', function(req, res) {
  var todos = JSON.parse(req.body.todos);
  Todos.clear();
  todos.forEach(function(todo) {
    var todo = normalize(todo);
    console.log(todo);
    if(todo.id) {
      Todos.update(todo);
    } else {
      Todos.add(todo);
    }
  });
  res.status(200).end();
});

router.param('id', function (req, res, next, id) {
  next();
});

// create or update
router.post('/todos/:id', function(req, res) {
  var todo = normalize(req.body);
  if(!!id) {
    if (!Todos.update(todo)) {
      res.status(404).end();
    }
  } else {
    Todos.add(todo);
    res.json(todo).end();
  }
});

// delete
router.delete('/todos/:id', function(req, res) {
  if(!!id) {
    res.status(404).end();
  } else {
    Todos.delete(id);
    res.status(200).end();
  }
});

function normalize(todo) {
  todo = todo || {};
  if (!!todo.id) { todo.id = Number(todo.id); }
  if (!!todo.day) { todo.day = Number(todo.day); }
  if (!!todo.month) { todo.month = Number(todo.month); }
  if (!!todo.year) { todo.year = Number(todo.year); }
  return todo;
}

module.exports = router;