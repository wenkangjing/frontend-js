var Albums = require("./_Albums");

// to extend the router object passing from all.js
module.exports = function(router) {
  
  router.get('/checkout', function(req, res) {
    res.render('layout', {
      albums: Albums.get()
    });
  });
};
