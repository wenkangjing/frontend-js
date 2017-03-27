var CartInfoView = Backbone.View.extend({
  el: "#cart-info",
  template: App.templates.cart_info,
  events: {
    "click a": "menu"
  },
  menu: function(e) {
    e.preventDefault();
    App.trigger("menu");
  },
  render: function() {
    this.$el.html(this.template({count: App.cart_items.length}));
  },
  initialize: function(options) {
    this.count = options.count;
    this.render();
    this.listenTo(App.cart_items, "update reset", this.render.bind(this));
  }
});

