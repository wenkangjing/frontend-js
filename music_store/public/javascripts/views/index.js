var IndexView = Backbone.View.extend({
  template: App.templates.index,
  attributes: {
    id: "index"
  },
  events: {
    "click a.new": "App.newAlbum"
  },
  render: function() {
    $('#cart_toggle').prop('checked', false);
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});