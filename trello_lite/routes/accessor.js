var fs = require("fs");
var path = require("path");

var lists_dir = path.resolve(path.dirname(__dirname), "data");
var labels_path = path.resolve(path.dirname(__dirname), "data/labels.json");
var colors_path = path.resolve(path.dirname(__dirname), "data/colors.json");

module.exports = {
  getLists: function() {
    var lists = [];
    var file_paths = fs.readdirSync(lists_dir);
    file_paths.forEach(function(fp) {
      if ( fp.startsWith("list") && fp.indexOf(".json") !== -1) {
        lists.push(JSON.parse(fs.readFileSync(path.resolve(lists_dir, fp), "utf8")));
      }
    });
    return lists;
  },
  getColors: function() {
    return JSON.parse(fs.readFileSync(colors_path, "utf8"));
  },
  getLabels: function() {
    return JSON.parse(fs.readFileSync(labels_path, "utf8"));
  },
  setLabels: function(label_array) {
    fs.writeFileSync(labels_path, JSON.stringify(label_array), "utf8");
  }
};