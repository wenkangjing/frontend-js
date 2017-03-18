var CheckoutView = Backbone.View.extend({
  template: App.templates.checkout,
  tagName: "table",
  attributes: {
    id: "checkout"
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
  }
});