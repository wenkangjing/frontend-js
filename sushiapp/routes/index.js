var express = require('express');
var router = express.Router();
var menu = require("./_menu");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    menu_items: menu.getItems()
  });
});

router.get('/menu', function(req, res, next) {
  res.json(menu.getItems()).end();
});
module.exports = router;
