var Albums = require('./_Albums.js');

// to extend the router object passing from all.js
module.exports = function(router) {
  router.get('/albums/new', function(req, res) {
    res.render('new', {
      albums: Albums.get()
    });
  });
  router.post('/albums', function(req, res) {
    var album = req.body;
    var albums = Albums.get();
    album.id = Albums.getLastID() + 1;
    albums.push(album);
    Albums.set({last_id: album.id, data: albums});
    res.json(album);
  });
  router.put('/albums', function(req, res) {
    console.log(req.body);
    var id = parseInt(req.body.id, 10);
    var album = _(Albums.collection).findWhere({id: id});
    album = req.body.album;
    Albums.set(albums);

    res.json(album);
  });
  router.delete('/', function(req, res) {
    console.log(req.body);
    var id = parseInt(req.body, 10);
    var albums = _(Albums.get()).reject({id: id});
    Albums.set(albums);
    res.status(200).end();
  });
};