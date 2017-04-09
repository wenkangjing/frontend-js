var NotificationView = Backbone.View.extend({
  template: App.templates.notification,
  events: {
    "click .notification-header-close-button": "onClose"
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