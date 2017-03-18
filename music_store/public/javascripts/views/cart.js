var CartView = Backbone.View.extend({
  el: "#cart",
  template: App.templates.cart,
  events: {
    "click a.delete": "destroy",
  },
  destroy: function(e) {
    e.preventDefault();
    var id = $(e.target).data("id");
    App.trigger("remove_from_cart", id);
  },
  render: function() {
    this.$el.html(this.template({
      quantity: +this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: +this.collection.getTotal()
    }));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render);
  }
});