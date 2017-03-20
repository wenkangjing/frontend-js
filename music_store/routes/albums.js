var Albums = require('./_Albums.js');
var _ = require("underscore");

// to extend the router object passing from all.js
module.exports = function(router) {
  router.param('id', function (req, res, next, id) {
    next();
  });
  router.get('/albums/new', function(req, res) {
    res.render('layout', {
      albums: Albums.get()
    });
  });
  router.get('/albums/edit/:id', function(req, res) {
    //console.log("test", id);
    res.render('layout', {
      albums: Albums.get()
    });
  });
  router.post('/albums', function(req, res) {
    var album = req.body;
    album.id = parseInt(album.id, 10);
    var albums = Albums.get();
    if (album.id) { // edit
      Albums.update(album);
    } else { // new
      Albums.add(album);
    }
    res.json(album).end();
  });
  router.delete('/albums', function(req, res) {
    Albums.delete(parseInt(req.body.id, 10));
    res.status(200).end();
  });
};