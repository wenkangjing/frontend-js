var TodosView = Backbone.View.extend({
  el: "#content",
  className: "todo",
  template: App.templates.todos,
  events: {
    "click #todos tr.todo": "completeByClick",
    "click #todos tr.todo .title": "editTodo"
  },
  completeByClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var id = $(e.target).closest(".todo").data("id");
    App.trigger("toggle_complete", id);
  },
  editTodo: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var id = $(e.target).closest(".todo").data("id");
    console.log(id);
  },
  render: function() {
    var visible = this.getVisible();
    this.$el.html(this.template({
      content_title: visible.title,
      content_total: visible.todos.length,
      todos: visible.todos
    }));
  },
  getVisible: function() {
    var visible = {
      title: "All Todos",
      todos: this.collection.toJSON()
    };
    visible.todos = visible.todos.filter(function(t) {
      if (App.filter.completed) {
        visible.title = "Completed";
        return App.filter.completed;
      } else {
        return true;
      }
    }).filter(function(t) {
      if (App.filter.due_date) {
        visible.title = App.filter.due_date;
        return t.due_date === App.filter.due_date;
      } else {
        return true;
      }
    });
    return visible;
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "change update", this.render);
  }
});