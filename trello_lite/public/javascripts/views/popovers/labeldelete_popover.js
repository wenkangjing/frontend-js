var LabelDeletePopover = Backbone.View.extend({
  template: App.templates.labeldelete_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "click .pop-over-header-back-btn": "onBack",
    "click .label-delete-confirm": "confirmDelete"
  },
  onClose: function(e) {
    e.preventDefault();
    this.uninialize();
  },
  onBack: function(e) {
    e.preventDefault();
    new LabelsPopover({ card: this.card,  pos: this.pos });
    this.uninialize();
  },
  confirmDelete: function(e) {
    e.preventDefault();
    if (this.model) {
      Client.deleteLabel(this.model.get("id"));
    }
    new LabelsPopover({ card: this.card,  pos: this.pos });
    this.uninialize();
  },
  render: function() {
    this.$el.html(this.template());
    this.$el.appendTo(App.$el);
    this.$el.find(".pop-over").offset({
      top: this.pos.top || 0,
      left: this.pos.left || 0
    });
  },
  uninialize: function() {
    this.remove();
  },
  initialize: function(opt) {
    this.pos = opt.pos;
    this.card = opt.card;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});