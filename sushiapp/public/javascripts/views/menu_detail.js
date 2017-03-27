var MenuDetailView = Backbone.View.extend({
  el: "#menu-detail",
  template: App.templates.menu_detail,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.show();
  },
  hide: function() {
    this.$el.hide();
  },
  initialize: function() {
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