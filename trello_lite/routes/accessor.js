var fs = require("fs");
var path = require("path");
var _ = require("underscore");
var dir = path.resolve(path.dirname(__dirname), "data");
var shortid = require('shortid');

var dict = {
  labels: path.resolve(dir, "labels.json"),
  colors: path.resolve(dir, "colors.json"),
  cards: path.resolve(dir, "cards.json"),
  lists: path.resolve(dir, "lists.json"),
  activities: path.resolve(dir, "activities.json"),
};

module.exports = {
  name: "", // keys in dict
  // returns an array 
  get: function() {
    return JSON.parse(fs.readFileSync(dict[this.name], "utf8"));
  },
  // set an array 
  set: function(array) {
    fs.writeFileSync(dict[this.name], JSON.stringify(array), "utf8");
  },
  add: function(item) {
    var array = this.get();
    item.id = shortid.generate();
    array.push(item);
    this.set(array);
    return item;
  },
  update: function(item) {
    var array = this.get();
    array = _(array).reject({id: item.id});
    array.push(item);
    this.set(array);
    return item;
  },
  delete: function(id) {
    if (!id) {
      consolo.error(id + " not found");
      return;
    }
    var array = this.get();
    var array = _(array).reject({id: id});
    this.set(array);
    return id;
  },
}
