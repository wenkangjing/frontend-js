var CartDetailView = Backbone.View.extend({
  el: "#cart-detail",
  template: App.templates.cart_detail,
  events: {
    "click ul a": "delete",
    "click #empty": "empty",
  },
  delete: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".cart-item").data("id");
    App.trigger("delete_from_cart", id);
  },
  empty: function(e) {
    e.preventDefault();
    App.trigger("empty_cart");
  },
  render: function() {
    var len = this.collection.length;
    this.$el.html(this.template({
      total: this.collection.getTotal(),
      items: this.collection.toJSON().slice(0, len > 8 ? 8 : len)
    }));
    if (len === 0 || App.cart_visibility === false) {
      this.$el.hide();
    } else {
      this.$el.show();
    }
    App.$el.find("#cart-info .angle-button").text(this.collection.length + " items");
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "update reset change", this.render.bind(this));
  }
});