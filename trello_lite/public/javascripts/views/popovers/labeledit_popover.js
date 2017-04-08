var LabelEditPopover = Backbone.View.extend({
  template: App.templates.labeledit_popover,
  events: {
    "click .pop-over-header-close-btn": "onClose",
    "click .pop-over-header-back-btn": "onBack",
    "click .label-edit-color-btn": "onSelect",
    "click .label-edit-save": "onSave",
    "click .label-edit-delete": "onDelete"
  },
  onClose: function(e) {
    e.preventDefault();
    this.uninitialize();
  },
  onBack: function(e) {
    e.preventDefault();
    new LabelsPopover({ card: this.card, pos: this.pos });
    this.uninitialize();
  },
  onSelect: function(e) {
    e.preventDefault();
    this.$el.find(".label-edit-color-btn").removeClass("selected");
    var $color = $(e.target).closest(".label-edit-color-btn");
    $color.addClass("selected");
  },
  onSave: function(e) {
    e.preventDefault();
    var color = this.$el.find(".label-edit-color-btn.selected").data("color");
    var name = this.$el.find(".card-label-name").val();
    if (this.model) {
      this.model.set("name", name);
      this.model.set("color", color);
      App.trigger("client_save_label", this.model.toJSON());
    } else {
      App.trigger("client_save_label", {name: name, color: color});
      App.trigger("client_get_labels");
    }
    new LabelsPopover({ card: this.card, pos: this.pos });
    this.uninitialize();
  },
  onDelete: function(e) {
    e.preventDefault();
    if (this.model) {
      new LabelDeletePopover({
          card: this.card,
          pos: this.pos,
          model: this.model
      });
      this.uninitialize();
    }
  },
  render: function() {
    var label = (this.model) ? this.model.toJSON() : undefined;
    this.$el.html(this.template({
      colors: App.colors,
      new: !this.model 
    }));
    this.$el.find(".pop-over").css({
      top: this.pos.top || 0,
      left: this.pos.left || 0,
    });
    this.$el.appendTo(App.$el);

    if (this.model) {
      var selected = this.$el.find(".label-edit-color-btn").filter(function(index, el) {
        return this.model.get("color") === $(el).data("color");
      }.bind(this));
      var name = this.$el.find(".card-label-name").val(this.model.get("name"));
      selected.addClass("selected");
    }
  },
  uninitialize: function() {
    this.remove();
  },
  initialize: function(opt) {
    this.card = opt.card;
    this.pos = opt.pos;
    this.render();
    this.listenTo(App, "clear_popover", this.remove.bind(this));
  }
});