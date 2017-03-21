var TodoView = Backbone.View.extend({
  tagName: "tr",
  template: App.templates.todo,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("#todos"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});