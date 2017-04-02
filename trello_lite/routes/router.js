var express = require('express');
var router = express.Router();
var accessor = require('./accessor');

var LabelsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'labels' }});
var ColorsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'colors' }});
var CardsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'cards' }});
var ListsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'lists' }});

router.param('id', function (req, res, next, id) {
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', {
    lists: ListsAccessor.get(),
    cards: CardsAccessor.get(),
    labels: LabelsAccessor.get(),
    colors: ColorsAccessor.get()
  });
});

//
// List
//////////////////////////////////////////////////////////
router.get('/lists', function(req, res, next) {
  res.json(ListsAccessor.get()).end();
});
router.post('/lists', function(req, res, next) {
  var list = req.body;
  var array = ListsAccessor.get();
  if (list.id) { // edit
    list= ListsAccessor.update(list);
  } else { // new
    list = ListsAccessor.add(list);
  }
  res.json(list).end();
});
router.delete('/lists', function(req, res) {
  ListsAccessor.delete(req.body.id);
  res.status(200).end();
});

//
// Card
//////////////////////////////////////////////////////////
router.get('/cards', function(req, res, next) {
  res.json(CardsAccessor.get()).end();
});
router.post('/cards', function(req, res, next) {
  var card = req.body;
  var array = CardsAccessor.get();
  if (card.id) { // edit
    card= CardsAccessor.update(card);
  } else { // new
    card = CardsAccessor.add(card);
  }
  res.json(card).end();
});
router.delete('/cards', function(req, res) {
  CardsAccessor.delete(req.body.id);
  res.status(200).end();
});

//
// labels
//////////////////////////////////////////////////////////
router.get('/labels', function(req, res, next) {
  res.json(LabelsAccessor.get()).end();
});
router.post('/labels', function(req, res, next) {
  var label = req.body;
  var array = LabelsAccessor.get();
  if (label.id) { // edit
    label= LabelsAccessor.update(label);
  } else { // new
    label = LabelsAccessor.add(label);
  }
  res.json(label).end();
});
router.delete('/labels', function(req, res) {
  LabelsAccessor.delete(req.body.id);
  res.status(200).end();
});

//
// Colors - immutable
//////////////////////////////////////////////////////////
router.get('/colors', function(req, res, next) {
  res.json(ColorsAccessor.get()).end();
});

module.exports = router;
