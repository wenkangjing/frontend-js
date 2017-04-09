var MenuView = Backbone.View.extend({
  template: App.templates.menu,
  events: {
    "click .board-menu-header-close-button": "onClose"
  },
  onClose: function() {
    this.remove();
  },
  render: function(e) {
    this.$el.html(this.template({activities: App.activities.toJSON()}));
    this.$el.appendTo(App.$el);
  },
  initialize: function() {
    this.render();
  }
});