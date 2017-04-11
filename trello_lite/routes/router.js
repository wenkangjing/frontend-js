var express = require('express');
var router = express.Router();
var _ = require('underscore');
var accessor = require('./accessor');

var ListsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'lists' }});
var CardsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'cards' }});
var LabelsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'labels' }});
var ActivitiesAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'activities' }});
var ColorsAccessor = Object.create(accessor, {name: { writable: false, configurable:true, value: 'colors' }});

router.param('id', function (req, res, next, id) {
  next();
});

/* GET board page. */
router.get('/', function(req, res, next) {
  res.render('layout', {
    lists: ListsAccessor.get(),
    cards: CardsAccessor.get(),
    labels: LabelsAccessor.get(),
    colors: ColorsAccessor.get(),
    activities: ActivitiesAccessor.get(),
  });
});


/* GET card modal page. */
router.get('/cards/:id', function(req, res, next) {
  res.render('layout', {
    lists: ListsAccessor.get(),
    cards: CardsAccessor.get(),
    labels: LabelsAccessor.get(),
    colors: ColorsAccessor.get(),
    activities: ActivitiesAccessor.get(),
  });
});


//
// List
//////////////////////////////////////////////////////////
router.get('/lists', function(req, res, next) {
  res.json(ListsAccessor.get()).end();
});
router.put('/lists', function(req, res, next) {
  var lists = req.body;
  ListsAccessor.set(lists);
  res.json(lists).end();
});
router.post('/lists', function(req, res, next) {
  var list = req.body;
  var pos = list.pos;
  delete list.pos;
  var array = ListsAccessor.get();
  if (list.id) { // edit
    list= ListsAccessor.update(list);
  } else { // new
    list = ListsAccessor.add(list, pos);
  }
  res.json(list).end();
});
router.delete('/lists', function(req, res) {
  var idList = req.body.id;
  ListsAccessor.delete(idList);
  // remove associated cards
  var cards = CardsAccessor.get();
  cards = cards.filter(function(c) {
    return c.idList !== idList;
  });
  CardsAccessor.set(cards);
  res.status(200).end();
});

//
// Card
//////////////////////////////////////////////////////////
router.get('/cards', function(req, res, next) {
  res.json(CardsAccessor.get()).end();
});
router.put('/cards', function(req, res, next) {
  var cards = req.body;
  CardsAccessor.set(cards);
  res.json(cards).end();
});
router.post('/cards', function(req, res, next) {
  var card = req.body;
  console.log(card);
  var pos = card.pos;
  delete card.pos;
  var array = CardsAccessor.get();
  if (card.id) { // edit
    card= CardsAccessor.update(card);
  } else { // new
    card = CardsAccessor.add(card, pos);
  }
  res.json(card).end();
});
router.delete('/cards', function(req, res) {
  CardsAccessor.delete(req.body.id);
  res.status(200).end();
});

//
// activities
//////////////////////////////////////////////////////////
router.get('/activities', function(req, res, next) {
  res.json(ActivitiesAccessor.get()).end();
});
router.post('/activities', function(req, res, next) {
  var comment = req.body;
  var array = ActivitiesAccessor.get();
  if (comment.id) { // edit
    comment= ActivitiesAccessor.update(comment);
  } else { // new
    comment = ActivitiesAccessor.add(comment);
  }
  res.json(comment).end();
});
router.delete('/activities', function(req, res) {
  ActivitiesAccessor.delete(req.body.id);
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
  var idLabel = req.body.id;
  LabelsAccessor.delete(idLabel);
  var cards = CardsAccessor.get();
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].idLabels.length) {
      var idLabels = cards[i].idLabels.filter(function(id) {
        return id !== idLabel;
      });
      cards[i].idLabels = idLabels;
      CardsAccessor.update(cards[i]);
    }
  }
  res.status(200).end();
});

//
// Colors - immutable
//////////////////////////////////////////////////////////
router.get('/colors', function(req, res, next) {
  res.json(ColorsAccessor.get()).end();
});

module.exports = router;
