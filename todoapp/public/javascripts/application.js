var App = {
  $el: $("main"),
  templates: JST, // handlebars
  indexView: function() {
    this.index = new IndexView();
    this.renderTodos();
    this.renderAllGroups();
  },
  renderTodos: function() {
    this.todos.each(function(todo) {
      new TodoView({model: todo});
    }.bind(this));
  },
  renderAllGroups: function() {
    var counter = {};
    this.todos.forEach(function(t) {
      var due_date = t.get("due_date");
      if (counter[due_date]) {
        counter[due_date]++;
      } else {
        counter[due_date] = 1;
      }
    });
    for (var g in counter) {
      var model = new Group(g);
      new GroupView({
        model: model, 
        parent: App.$el.find("#sidebar .all ul")
      });
    }
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
  }
}
