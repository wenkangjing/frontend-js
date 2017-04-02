var LabelsPopover = Backbone.View.extend({
  template: App.templates.labels_popover,
  events: {
    "click .pop-over-header-close-btn": "closePopover",
    "click .card-label ": "toggleLabel",
    "click .card-label-edit-btn": "editLabel",
    "click .card-label-add": "newLabel",
  },
  closePopover: function(e) {
    e.preventDefault();
    this.collection.reset();
    this.remove();
  },
  toggleLabel: function(e) {
    e.preventDefault();
  },
  editLabel: function(e) {
    e.preventDefault();
  },
  newLabel: function(e) {
    e.preventDefault();
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
    this.idLabels = options.idLabels;
    this.render();
  }
});