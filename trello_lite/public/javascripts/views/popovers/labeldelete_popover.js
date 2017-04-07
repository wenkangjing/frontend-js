var LabelDeletePopover = Backbone.View.extend({
  template: App.templates.labeldelete_popover,
  events: {
    "click .pop-over-header-close-btn": "close",
    "click .pop-over-header-back-btn": "backToLabels",
    "click .label-delete-confirm": "deleteConfirm"
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  backToLabels: function(e) {
    e.preventDefault();
    PopoverUtil.labels({
      idCard: this.idCard,
      pos: this.pos
    });
    this.remove();
  },
  deleteConfirm: function(e) {
    e.preventDefault();
    if (this.model) {
      App.trigger("delete_label", this.model.get("id"));
      App.labels.remove(this.model);
    }
    this.backToLabels(e);
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.appendTo(App.$el);
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });
  },
  initialize: function(opt) {
    this.pos = opt.pos;
    this.idCard = opt.idCard;
    this.render();
  }
});