var NotificationView = Backbone.View.extend({
  template: App.templates.notification,
  events: {
    "click .notification-header-close-button": "onClose"
  },
  onClose: function() {
    this.remove();
  },
  render: function(e) {
    var activities = App.activities.toJSON();
    var subscribed = Helper.getSubscribedCards();
    activities.filter(function (act) {
      return subscribed.indexOf(act.idCard) !== -1;
    })
    this.$el.html(this.template({activities: activities}));
    this.$el.appendTo(App.$el);
  },
  initialize: function() {
    this.render();
  }
});