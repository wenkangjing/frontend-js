var Albums = require("./_Albums");

/* GET home page. */
// to extend the router object passing from all.js
module.exports = function(router) {
  
  router.get('/', function(req, res) {
    res.render('layout', {
      albums: Albums.get()
    });
  });
};
