var TodoView = Backbone.View.extend({
  tagName: "tr",
  className: "todo",
  template: App.templates.todo,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.attr("id", this.model.get("id"));
    if (this.model.get("completed")) {
      this.$el.addClass("completed");
    } 
    this.$el.appendTo(App.$el.find("#todos"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});