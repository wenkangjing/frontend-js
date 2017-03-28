var MenuView = Backbone.View.extend({
  id: "menu",
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
  render: function() {
    this.$el.html(this.template({items: this.collection.toJSON()}));
    App.$el.find("main").html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});