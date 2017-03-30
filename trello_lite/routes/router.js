var express = require('express');
var router = express.Router();
var Accessor = require('./Accessor');

router.param('id', function (req, res, next, id) {
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', {
    lists: Accessor.getLists()
  });
});

// Get an array of List
router.get('/lists', function(req, res, next) {
  res.json(Accessor.getLists()).end();
});

// Get an array of Label
router.get('/labels', function(req, res, next) {
  res.json(Accessor.getLabels()).end();
});

module.exports = router;
