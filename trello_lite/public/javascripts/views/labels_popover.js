var LabelsPopover = Backbone.View.extend({
  template: App.templates.labels_popover,
  events: {
    "click .pop-over-header-close-btn": "closePopover",
  },
  closePopover: function(e) {
    e.preventDefault();
    this.remove();
  },  
  render: function() {
    this.$el.html(this.template({
      labels: this.collection.toJSON()
    }));
    this.$el.find(".pop-over").css({
      top: this.position.top,
      left: this.position.left
    });
    this.$el.appendTo(this.parent);
  },
  initialize: function(options) {
    this.parent = options.parent;
    this.position = options.position;
    this.render();
  }
});