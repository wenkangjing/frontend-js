var MenuDetailView = Backbone.View.extend({
  tagName: "div",
  id: "menu-detail",
  className: "clearfix",
  template: App.templates.menu_detail,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(this.parent);
  },
  initialize: function(options) {
    this.parent = options.parent;
    this.render();
  }
}); 