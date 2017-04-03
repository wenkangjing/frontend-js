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
    this.remove();
    App.popover = null;
  },
  toggleLabel: function(e) {
    e.preventDefault();
    var idLabels = _.clone(this.card.get("idLabels"));
    var $lb = $(e.target).closest(".card-label");
    var id = $lb.data("id");
    if ($lb.hasClass("selected")) {
      $lb.removeClass("selected");
      idLabels = _(idLabels).without(id);
    } else {
      $lb.addClass("selected");
      idLabels.push(id);
    }
    this.card.set("idLabels", idLabels);
  },
  editLabel: function(e) {
    e.preventDefault();
  },
  newLabel: function(e) {
    e.preventDefault();
  },
  render: function() {
    var labels = this.collection.toJSON();
    var idLabels = this.card.get("idLabels");
    labels.forEach(function(label) {
      if (idLabels.indexOf(label.id) !== -1) {
        label.selected = true;
      } else {
        label.selected = false;
      }
    }.bind(this));
    this.$el.html(this.template({
      labels: labels
    }));
    this.$el.find(".pop-over").css({
      top: this.position.top,
      left: this.position.left
    });
    this.$el.appendTo(this.parent);
    this.delegateEvents();
  },
  initialize: function(options) {
    this.parent = options.parent;
    this.position = options.position;
    this.card = options.card;
    //this.labels = options.labels;
    this.render();
  }
});