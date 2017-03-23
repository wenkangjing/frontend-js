var Todos = Backbone.Collection.extend({
  model: Todo,
  toggleComplete: function(id) {
    var t = this.get(id);
    t.set("completed", !t.get("completed"));
  },
  completeTodo: function(id) {
    var model = this.get(id);
    model.set("completed", true);
  },
  updateTodo: function(todo) {
    var model = this.get(todo.id);
    if (model) {
      model.set(todo);
    } else {
      this.push(new Todo(todo));
    }
  },
  deleteTodo: function(id) {
    var model = this.get(id);
    this.remove(model);
  },
  initialize: function(models, options) {
    options = options || {};
    this.title = options.title;
    this.total = options.total;
  }
})