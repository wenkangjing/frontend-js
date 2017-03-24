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
    return todo;
  },
  update: function(todo) {
    var todos = this.get();
    var found = _(todos).findWhere({id: todo.id});
    if (found) {
      Object.assign(found, todo);
      this.set({last_id: this.getLastID(), data: todos});
      return found;
    } else {
      console.warn(JSON.stringify(todo) + " not found");
      return false;
    }
  },
  delete: function(id) {
    if (!id) {
      console.warn(String(id) + " not found");
      return false;
    } else {
      var todos = _(this.get()).reject({id: id});
      this.set({last_id: this.getLastID(), data: todos});
    }
  },
  clear: function() {
    this.set({last_id: 0, data:[]});
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf8")).last_id;
  }
};
