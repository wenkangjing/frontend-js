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
    this.$el.html(this.template({
      content_title: this.collection.title,
      content_total: this.collection.total,
      todos: this.collection.toJSON()
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "change update all", this.render);
  }
});