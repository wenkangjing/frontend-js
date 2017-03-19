var Albums = require('./_Albums.js');
var _ = require("underscore");

// to extend the router object passing from all.js
module.exports = function(router) {
  router.get('/albums/new', function(req, res) {
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
    console.log(album);
    res.json(album);
  });
  router.delete('/albums', function(req, res) {
    console.log(req.body.id);
    Albums.delete(parseInt(req.body.id, 10));
    res.status(200).end();
  });
};