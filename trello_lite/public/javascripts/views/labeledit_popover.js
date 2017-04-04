var LabelEditPopover = Backbone.View.extend({
  template: App.templates.labeledit_popover,
  events: {
    "click .pop-over-header-close-btn": "closePopover",
    "click .pop-over-header-back-btn": "backToLabels",
    "click .label-edit-color-btn": "selectColor",
    "click .label-edit-save": "saveLabel"
  },
  closePopover: function(e) {
    e.preventDefault();
    this.remove();
    App.popover = null;
  },
  backToLabels: function(e) {
    e.preventDefault();
    App.trigger("popover_labels", {
      e: e,
      parent: this.parent,
      position: this.position,
      idCard: this.card.get("id"),
    });
  },
  selectColor: function(e) {
    e.preventDefault();
    this.$el.find(".label-edit-color-btn").removeClass("selected");
    var $color = $(e.target).closest(".label-edit-color-btn");
    $color.addClass("selected");
  },
  saveLabel: function(e) {
    e.preventDefault();
    var color = this.$el.find(".label-edit-color-btn.selected").data("color");
    var name = this.$el.find(".card-label-name").val();
    App.trigger("save_label", new Label({name: name, color: color}));
    this.backToLabels(e);
  },
  render: function() {
    this.$el.html(this.template({
      colors: App.colors
    }));
    this.$el.find(".pop-over").css({
      top: this.position.top || 0,
      left: this.position.left || 0
    });
    this.$el.appendTo(this.parent);
  },
  initialize: function(options) {
    this.parent = options.parent || App.$el;
    this.card = options.card;
    this.position = options.position || {};
    this.render();
  }
});