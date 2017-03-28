var CheckoutView = Backbone.View.extend({
  id: "order-detail",
  template: App.templates.checkout,
  events: {
    "click .cancel-order": "cancelOrder",
    "click .order-now": "orderNow",
    "blur input[type='number']": "updateCart"
  },
  cancelOrder: function(e) {
    e.preventDefault();
    App.trigger("empty_cart menu");
  },
  orderNow: function(e) {
    e.preventDefault();
    App.trigger("empty_cart menu");
  },
  updateCart: function(e) {
    var $e = $(e.target);
    var id = $e.closest("tr").data("id");
    var quantity = Number($e.val());
    this.collection.get(id).set("quantity", quantity, {silent: true});
  },
  render: function() {
    this.$el.html(this.template({
      total: this.collection.getTotal(),
      items: this.collection.toJSON()
    }));
    App.$el.find("main").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});