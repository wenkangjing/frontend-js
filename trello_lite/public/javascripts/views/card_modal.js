var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    "click .dialog-close-btn": "closeModal",
    "click .card-modal-labels": "popoverLabels"
  },
  closeModal: function(e) {
    e.preventDefault();
    if (this.popover) { 
      this.popover.remove(); 
    }
    this.remove();
  },
  popoverLabels: function(e) {
    e.preventDefault();
    if (this.popover) { 
      this.popover.remove(); 
    }
    this.popover = new LabelsPopover({
      parent: this.$el.find(".card-modal"),
      position: this.popoverPosition(e),
      idLabels: this.model.get("idLabels"),
      collection: new Labels(App.labels)
    });
  },
  popoverPosition: function(e) {
    var pos = $(e.target).closest(".card-modal-labels").position();
    var result = {
      top: pos.top + 38
    };
    var windowWidth = $(document.body).innerWidth();
    if (pos.left + 350 > windowWidth) {
      result.left = windowWidth - 350;
    } else {
      result.left = pos.left;
    }
    return result;
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.find(".card-modal").attr("data-id", this.model.id);
    this.$el.appendTo(App.$el);
  },
  initialize: function(options) {
    this.render();
  }
});