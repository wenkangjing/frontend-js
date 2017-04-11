var NotificationView = Backbone.View.extend({
  template: App.templates.notification,
  events: {
    "click .notification-header-close-button": "onClose"
  },
  onClose: function() {
    this.remove();
  },
  render: function(e) {
    var activities = App.activities.toJSON().filter(function(act) {
      var card = App.cards.get(act.idCard);
      var list = App.lists.get(card.get("idList"));
      return card.get("subscribed") || list.get("subscribed");
    });
    this.$el.html(this.template({activities: activities}));
    this.$el.appendTo(App.$el);
  },
  initialize: function() {
    this.render();
  }
});