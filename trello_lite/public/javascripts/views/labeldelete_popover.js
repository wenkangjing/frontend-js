var LabelDeletePopover = Backbone.View.extend({
  template: App.templates.labeldelete_popover,
  events: {
    "click .pop-over-header-close-btn": "closePopover",
    "click .pop-over-header-back-btn": "backToLabels",
    "click .label-delete-confirm": "deleteConfirm"
  },
  closePopover: function(e) {
    e.preventDefault();
    this.remove();
  },
  backToLabels: function(e) {
    e.preventDefault();
    App.trigger("popover_labels", App.popoverOpt);
    this.closePopover(e);
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
    this.$el.appendTo(this.parent);
    this.$el.find(".pop-over").css({
      top: this.position.top || 0,
      left: this.position.left || 0
    });
  },
  initialize: function(opt) {
    _.extend(this, opt);
    this.render();
  }
});