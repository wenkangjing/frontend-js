var express = require('express');
var path = require('path');
var fs = require('fs');

// one and the only one  express router object in this web app
var router = express.Router();
var route_files = ["index", "albums", "checkout"];

for (var i = 0; i < route_files.length; i++) {
  var file_path = path.resolve(__dirname, route_files[i]);
  require(file_path)(router);
}

module.exports = router;