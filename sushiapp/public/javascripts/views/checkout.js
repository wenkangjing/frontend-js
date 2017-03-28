var CheckoutView = Backbone.View.extend({
  id: "order-detail",
  template: App.templates.checkout,
  events: {
    "click .cancel-order": "cancelOrder",
    "click .order-now": "orderNow",
    "change .quantity": "updateCart"
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
    e.preventDefault();
    var $e = $(e.target);
    var id = $e.closest("tr").data("id");
    var quantity = Number($e.val());
    this.collection.get(id).set("quantity", quantity);
  },
  // leave this function for reference only
  bindEvents: function() {
    // use on to bind event to a dynamically added element
    // events object will be removed once calling $el.html()
    // or
    // delegateEvents
    $(document).on("click", ".cancel-order", this.cancelOrder.bind(this));
    $(document).on("click", ".order-now", this.orderNow.bind(this));
    $(document).on("click", ".quantity", this.updateCart.bind(this));
  },
  render: function() {
    this.$el.html(this.template({
      total: this.collection.getTotal(),
      items: this.collection.toJSON()
    }));
    App.$el.find("main").html(this.$el);
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "change", this.render.bind(this));
  }
});