var GroupView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.group,
  render: function() { // deply attach to the DOM
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(this.parent);
  },
  initialize: function(options) {
    this.parent = options.parent;
    this.model.view = this;
    this.render();
  }
});