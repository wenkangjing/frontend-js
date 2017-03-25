var fs = require("fs");
var path = require("path");

var file_path = path.resolve(path.dirname(__dirname), "data/menu_items.json");

module.exports = {
  getItems: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8"));
  }
};