var LabelEditPopover = Backbone.View.extend({
  template: App.templates.labeledit_popover,
  events: {
    "click .pop-over-header-close-btn": "close",
    "click .pop-over-header-back-btn": "backToLabels",
    "click .label-edit-color-btn": "selectColor",
    "click .label-edit-save": "saveLabel",
    "click .label-edit-delete": "deleteLabel"
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
    if (this.model) {
      App.trigger("save_label", {id: this.model.get("id"), name: name, color: color});
    } else {
      App.trigger("save_label", {name: name, color: color});
    }
    this.backToLabels(e);
  },
  deleteLabel: function(e) {
    e.preventDefault();
    if (this.model) {
      PopoverUtil.labelDelete({
          idCard: this.idCard,
          pos: this.pos,
          model: this.model
      });
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
  initialize: function(opt) {
    this.idCard = opt.idCard;
    this.pos = opt.pos;
    this.render();
  }
});