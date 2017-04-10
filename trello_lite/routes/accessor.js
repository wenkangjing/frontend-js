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
  add: function(item, pos) {
    pos = pos || 0;
    item.id = shortid.generate();
    var array = this.get();
    if (pos > array.length) {
      array.push(item);
    } else {
      array.splice(pos, 0, item);
    }
    this.set(array);
    return item;
  },
  update: function(item) {
    var array = this.get();
    array.forEach(function(it) {
      if (it.id === item.id) {
        Object.assign(it, item);
      }
    });
    this.set(array);
    return item;
  },
  move: function(id, pos) {
    var array = this.get();
    var oldPos = _(array).findIndex({id: id});
    array.splice(pos, 0, array.splice(oldPos, 1)[0]);
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
