var App = {
  $el: $("main"),
  templates: JST, // handlebars
  indexView: function() {
    this.index = new IndexView();
    this.renderTodos();
  },
  renderTodos: function() {
    this.todos.each(this.renderTodoView.bind(this));
  },
  renderTodoView: function(todo) {
    new TodoView({model: todo});
  },
  renderSidebar: function() {

  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
  }
}