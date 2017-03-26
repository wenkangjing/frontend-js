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
    Handlebars.registerHelper('toFixed', function(amount, options) {
      amount = Number(amount);
      return amount.toFixed(2);
    });
    Handlebars.registerHelper('toKcar', function(amount, options) {
      amount = Number(amount);
      return (amount * 0.239).toFixed(4);
    });
  }
}); 