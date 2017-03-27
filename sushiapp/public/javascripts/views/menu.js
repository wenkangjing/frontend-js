var MenuView = Backbone.View.extend({
  el: "#menu",
  template: App.templates.menu,
  events: {
    "click .info": "detail",
    "click .add-to-cart": "addToCart"
  },
  detail: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".menu-item").data("id");
    App.trigger("detail", id);
  },
  addToCart: function(e) {
    e.preventDefault();
    var id = Number($(e.target).closest(".menu-item").data("id"));
    App.trigger("add_to_cart", id);
  },
  hide: function() {
    this.$el.hide();
  },
  render: function() {
    this.$el.html(this.template({items: this.collection.toJSON()}));
    this.$el.show();
  },
  initialize: function() {
  }
});