var TodosView = Backbone.View.extend({
  el: "#content",
  className: "todo",
  template: App.templates.todos,
  render: function() {
    this.$el.html(this.template({
      content_title: this.collection.title,
      content_total: this.collection.total,
      todos: this.collection.toJSON()
    }));
  },
  initialize: function() {
    this.render();
  }
});