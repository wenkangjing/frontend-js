var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    "click .dialog-close-btn": "closeModal",
    "click .card-modal-labels": "labelsPopover"
  },
  closeModal: function(e) {
    e.preventDefault();
    if (this.popover) { 
      this.popover.remove(); 
    }
    this.remove();
    App.router.navigate("/");
  },
  labelsPopover: function(e) {
    e.preventDefault();
    if (this.popover) { 
      this.popover.remove(); 
    }
    this.popover = new LabelsPopover({
      parent: this.$el.find(".card-modal"),
      position: this.popoverPosition(e),
      card: this.model,
      collection: App.labels
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
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    this.$el.html(this.template(json));
    this.$el.find(".card-modal").attr("data-id", this.model.id);
    this.$el.appendTo(App.$el);
    if (this.popover) {
      this.popover.parent = this.$el.find(".card-modal");
      this.popover.render();
    }
  },
  initialize: function(options) {
    this.render();
    this.listenTo(this.model, "change:idLabels", this.render.bind(this));
  }
});