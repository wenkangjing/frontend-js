var MenuDetailView = Backbone.View.extend({
  el: "#menu-detail",
  template: App.templates.menu_detail,
  events: {
    "click a.prev": "prev",
    "click a.next": "next",
    "click a.add-to-cart": "addToCart"
  },
  prev: function(e) {
    e.preventDefault();
    App.trigger("detail", this.getId() - 1);
  },
  next: function(e) {
    e.preventDefault();
    App.trigger("detail", this.getId() + 1);
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger("add_to_cart", this.getId());
  },
  render: function() {
    this.$el.attr("data-id", this.model.get("id"));
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.show();
  },
  hide: function() {
    this.$el.hide();
  },
  getId: function() {
    return this.model ? this.model.get("id") : 1;
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