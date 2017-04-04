var NewLabelPopover = Backbone.View.extend({
  template: App.templates.newlabel_popover,
  events: {
    "click .pop-over-header-close-btn": "closePopover",
    "click .new-label-color-btn": "selectColor",
    "click .new-label-create": "createLabel"
  },
  closePopover: function(e) {
    e.preventDefault();
    this.remove();
    App.popover = null;
  },
  selectColor: function(e) {
    e.preventDefault();
    this.$el.find(".new-label-color-btn").removeClass("selected");
    var $color = $(e.target).closest(".new-label-color-btn");
    $color.addClass("selected");
  },
  createLabel: function(e) {
    e.preventDefault();
    var color = this.$el.find(".new-label-color-btn.selected").data("color");
    console.log(color);
    //Client.
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
    this.position = options.position || {};
    this.render();
  }
});