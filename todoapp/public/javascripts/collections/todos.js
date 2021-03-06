var Todos = Backbone.Collection.extend({
  url: "/todos",
  model: Todo,
  toggleTodo: function(cid) {
    var t = this.get(cid);
    t.set("completed", !t.get("completed"));
  },
  completeTodo: function(cid) {
    var model = this.get(cid);
    model.set("completed", true);
  },
  updateTodo: function(todo) {
    var model = this.get(todo.cid);
    if (model) {
      model.set(todo);
    } else {
      this.add(todo);
    }
  },
  deleteTodo: function(cid) {
    var model = this.get(cid);
    this.remove(model);
  },
  initialize: function(models, options) {
    options = options || {};
    this.title = options.title;
    this.total = options.total;
  }
})