var MenuView = Backbone.View.extend({
  el: "#application main",
  template: App.templates.menu,
  events: {
    "click .info": "detail"
  },
  detail: function(e) {
    e.preventDefault();
    var id = $(e.target).closest(".menu-item").data("id");
    App.trigger("detail", id);
  },
  render: function() {
    this.$el.html(this.template({items: this.collection.toJSON()}));
  },
  initialize: function() {
    this.render();
  }
});