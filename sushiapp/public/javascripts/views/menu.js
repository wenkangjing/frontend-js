var MenuView = Backbone.View.extend({
  el: "#menu",
  template: App.templates.menu,
  events: {
    "click .info": "detail"
  },
  detail: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".menu-item").data("id");
    App.trigger("detail", id);
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