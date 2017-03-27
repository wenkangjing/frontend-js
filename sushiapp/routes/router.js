var express = require('express');
var router = express.Router();
var menu = require("./_menu");

// cache the id in req.params.id
router.param('id', function (req, res, next, id) {
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { 
    menu_items: menu.getItems()
  });
});

// Get menu items in an array
router.get('/menu', function(req, res, next) {
  res.json(menu.getItems()).end();
});

// get menu item by id
router.get('/menu/:id', function(req, res, next) {
  req.params.id;
  res.render('layout', { 
    menu_items: menu.getItems()
  });
});

router.get('/checkout', function(req, res, next) {
  res.render('layout', { 
    menu_items: menu.getItems()
  });
});

module.exports = router;
