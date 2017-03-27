var CheckoutView = Backbone.View.extend({
  el: "#order-detail",
  template: App.templates.checkout,
  render: function() {
    this.$el.html(this.template({
      total: this.collection.getTotal(),
      items: this.collection.toJSON()
    }));
  },
  initialize: function() {

  }
});