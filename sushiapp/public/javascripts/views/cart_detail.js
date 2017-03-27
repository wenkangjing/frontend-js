var CartDetailView = Backbone.View.extend({
  el: "#cart-detail",
  template: App.templates.cart_detail,
  events: {
    "click ul a": "remove",
    "click #empty": "empty",
    "click #checkout": "checkout"
  },
  remove: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".cart-item").data("id");
    App.trigger("remove_from_cart", id);
  },
  empty: function(e) {
    e.preventDefault();
    App.trigger("empty_cart");
  },
  checkout: function(e) {
    e.preventDefault();
    App.trigger("checkout");
  },
  hide: function() {
    this.$el.hide();
  },
  render: function() {
    var len = this.collection.length;
    if (len === 0) {
      this.$el.hide();
    } else {
      this.$el.html(this.template({
        total: this.collection.getTotal(),
        items: this.collection.toJSON().slice(0, len > 8 ? 8 : len)
      }));
      this.$el.show();
    }
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "update reset change", this.render.bind(this));
  }
});