var ListActionsPopover = Backbone.View.extend({
  template: App.templates.listactions_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "click .list-actions-add-card": "onAddCard",
    "click .list-actions-copy-list": "onCopyList",
    "click .list-actions-move-list": "onMoveList",
    "click .list-actions-subscribe": "onSubscribe",
    "click .list-actions-move-cards": "onMoveCards",
    "click .list-actions-archive-cards": "onArchiveCards",
    "click .list-actions-archive-list": "onArchiveList"
  },
  onClose: function(e) {
    e.preventDefault();
    this.uninitialize();
  },
  onAddCard: function(e) {
    e.preventDefault();
    this.trigger("add_card", e);
    this.uninitialize();
  },
  onCopyList: function(e) {
    e.preventDefault();
    console.log("copyList");
    this.uninitialize();
  },
  onMoveList: function(e) {
    e.preventDefault();
    console.log("mostList");
    this.uninitialize();
  },
  onSubscribe: function(e) {
    e.preventDefault();
    var status = !this.list.get("subscribed");
    this.list.set("subscribed", status);
    App.trigger("client_save_list", this.list.toJSON());
    this.uninitialize();
  },
  onMoveCards: function(e) {
    e.preventDefault();
    console.log("moveCards");
    this.uninitialize();
  },
  onArchiveCards: function(e) {
    e.preventDefault();
    console.log("archiveCards");
    this.uninitialize();
  },
  onArchiveList: function(e) {
    e.preventDefault();
    App.trigger("client_delete_list", this.list.get("id"));
    App.lists.remove(this.list);
    this.uninitialize();
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
  uninitialize: function() {
    this.remove();
  },
  initialize: function(opt) {
    this.list = opt.list;
    this.pos = opt.pos;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});