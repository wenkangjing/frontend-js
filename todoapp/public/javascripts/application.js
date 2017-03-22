var App = {
  $el: $("main"),
  templates: JST, // handlebars
  indexView: function() {
    this.index = new IndexView();
    this.renderTodos();
    this.renderAllGroups();
    this.renderCompletedGroups();
  },
  renderTodos: function() {
    this.todos.each(function(todo) {
      new TodoView({model: todo});
    }.bind(this));
  },
  renderAllGroups: function() {
    this.todos.getGroups().each(function(group) {
      new GroupView({
        model: group, 
        parent: App.$el.find("#sidebar .all ul")
      });
    });
  },
  renderCompletedGroups: function() {
    this.todos.getGroups({completed: true}).each(function(group) {
      new GroupView({
        model: group, 
        parent: App.$el.find("#sidebar .completed ul")
      });
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
  }
}
