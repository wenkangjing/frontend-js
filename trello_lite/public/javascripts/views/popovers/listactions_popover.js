var ListActionsPopover = Backbone.View.extend({
  template: App.templates.listactions_popover,
  events: {
    "click .pop-over-header-close-btn": "close",
    "click .list-actions-add-card": "addCard",
    "click .list-actions-copy-list": "copyList",
    "click .list-actions-move-list": "mostList",
    "click .list-actions-subscribe": "subscribe",
    "click .list-actions-move-cards": "moveCards",
    "click .list-actions-archive-cards": "archiveCards",
    "click .list-actions-archive-list": "archiveList"
  },
  close: function(e) {
    e.preventDefault();
    PopoverUtil.closeCurrent();
  },
  addCard: function(e) {
    e.preventDefault();
    console.log("addCard");
  },
  copyList: function(e) {
    e.preventDefault();
    console.log("copyList");
  },
  mostList: function(e) {
    e.preventDefault();
    console.log("mostList");
  },
  subscribe: function(e) {
    e.preventDefault();
    var status = !this.list.get("subscribed");
    this.list.set("subscribed", status);
    App.trigger("client_save_list", this.list.toJSON());
  },
  moveCards: function(e) {
    e.preventDefault();
    console.log("moveCards");
  },
  archiveCards: function(e) {
    e.preventDefault();
    console.log("archiveCards");
  },
  archiveList: function(e) {
    e.preventDefault();
    App.trigger("client_delete_list", this.list.get("id"));
    App.lists.remove(this.list);
    PopoverUtil.closeCurrent();
  },
  render: function() {
    this.$el.html(this.template(this.list.toJSON()));
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });
    this.$el.appendTo(App.$el);
    this.delegateEvents();
  },
  initialize: function(opt) {
    this.list = opt.list;
    this.pos = opt.pos;
    this.render();
  }
});