var CheckoutView = Backbone.View.extend({
  template: App.templates.checkout,
  tagName: "div",
  attributes: {
    id: "checkout"
  },
  events: {
    "click a.pay": "pay",
    "click a.continue_shopping": "continueShopping",
  },
  pay: function(e) {
    e.preventDefault();
    App.goto("");
  },
  continueShopping: function(e) {
    e.preventDefault();
    App.goto("");
  },
  render: function() {
    $('#cart_toggle').prop('checked', false);
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: +this.collection.getTotal()
    }));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
    this.listenTo(App, "remove_from_cart", this.render);
  }
});