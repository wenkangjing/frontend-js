var CardView = Backbone.View.extend({
  className: "card",
  tagName: "div",
  template: App.templates.card,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(this.parent);
  },
  initialize: function(options) {
    this.parent = options.parent;
    this.render();
  }
});