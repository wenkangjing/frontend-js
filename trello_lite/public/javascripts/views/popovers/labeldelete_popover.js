var LabelDeletePopover = Backbone.View.extend({
  template: App.templates.labeldelete_popover,
  events: {
    "click .pop-over-header-close-btn": "close",
    "click .pop-over-header-back-btn": "back",
    "click .label-delete-confirm": "confirmDelete"
  },
  close: function(e) {
    e.preventDefault();
    this.remove();
  },
  back: function(e) {
    e.preventDefault();
    this.remove();
    new LabelsPopover({ card: this.card,  pos: this.pos });
  },
  confirmDelete: function(e) {
    e.preventDefault();
    if (this.model) {
      App.trigger("client_delete_label", this.model.get("id"));
      App.labels.remove(this.model);
    }
    this.back(e);
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
    this.card = opt.card;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});