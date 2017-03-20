var path = require("path");
var fs = require("fs");
var _ = require("underscore");

var file_path = path.resolve(path.dirname(__dirname), "data/albums.json");

module.exports = {
  // Get albums data in an array
  get: function() {
    console.log(file_path);
    return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
  },
  // With last_id and data 
  set: function(albums) {
    fs.writeFileSync(file_path, JSON.stringify(albums), "utf8");
  },
  // add
  add: function(album) {
    var existings = this.get();
    album.id = this.getLastID() + 1;
    existings.push(album);
    this.set({last_id: album.id, data: existings});
  },
  update: function(album) {
    var existings = this.get();
    var old = _(existings).findWhere({id: album.id});
    Object.assign(old, album);
    this.set({last_id: this.getLastID(), data: existings});
  },
  delete: function(id) {
    if (!id) {
      return;
    }
    var existings = this.get();
    var albums = _(existings).reject({id: id});
    this.set({last_id: this.getLastID(), data: albums});
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  }
};
