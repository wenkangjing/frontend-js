var path = require("path");
var fs = require("fs");
var _ = require("underscore");

var file_path = path.resolve(path.dirname(__dirname), "data/todos.json");

module.exports = {
  // Get todos data in an array
  get: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
  },
  // Set last_id and data
  set: function(todos) {
    fs.writeFileSync(file_path, JSON.stringify(todos), "utf8");
  },
  add: function(todo) {
    var todos = this.get();
    todo.id = this.getLastID() + 1;
    todos.push(todo);
    this.set({last_id: todo.id, data: todos});
  },
  update: function(todo) {
    var todos = this.get();
    var old = _(todos).findWhere({id: todo.id});
    Object.assign(old, todo);
    this.set({last_id: this.getLastID(), data: todos});
  },
  delete: function(id) {
    if (!id) {
      console.error("id is not provided");
      return;
    }
    var todos = this.get();
    todos = _(todos).reject({id: id});
    this.set({last_id: this.getLastID(), data: todos});
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  }
};
