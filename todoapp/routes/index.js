var express = require('express');
var router = express.Router();
var Todos = require("./_todos");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    todos: Todos.get()
  });
});

module.exports = router;
