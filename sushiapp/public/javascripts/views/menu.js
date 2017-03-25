var MenuView = Backbone.View.extend({
  el: "#application main",
  template: App.templates.menu,
  render: function() {
    this.$el.html(this.template({items: this.collection.toJSON()}));
  },
  initialize: function() {
    this.render();
  }
});