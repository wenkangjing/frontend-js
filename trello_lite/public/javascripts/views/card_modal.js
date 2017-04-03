var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    "click .dialog-close-btn": "closeModal",
    "click .description .card-modal-edit-description": "editDescription",
    "click .description .card-modal-create-description": "editDescription",
    "click .description-close-btn": "closeDescription",
    "submit .description": "saveDescription",
    "submit .comment": "addComment",
    "click .card-modal-label": "labelsPopover",
    "click .card-modal-add-label": "labelsPopover",
    "click card-modal-btn-link.card-modal-labels": "labelsPopover",
    "click card-modal-btn-link.card-modal-archive": "archiveCard",
  },
  closeModal: function(e) {
    e.preventDefault();
    if (this.popover) { 
      this.popover.remove(); 
    }
    this.remove();
    App.goto("/");
  },
  archiveCard: function(e) {
    App.trigger("delete_card", this.model.get("id"));
    App.cards.remove(this.model);
    this.closeModal(e);
  },  
  editDescription: function(e) {
    e.preventDefault();
    this.$desc.prev().hide();
    this.$desc.show();
  },
  saveDescription: function(e) {
    e.preventDefault();
    var description = this.$desc.text();
    this.model.set("description", description);
    this.$desc.prev().show();
    this.$desc.hide();
  },
  closeDescription: function(e) {
    e.preventDefault();
    this.$desc.prev().show();
    this.$desc.hide();    
  },
  addComment: function(e) {
    e.preventDefault();
    console.log("add comment");
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
    var pos = $(e.target).position();
    var result = {
      top: pos.top + 50
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
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(this.model, "change", App.trigger.bind(App, "save_card", this.model));
    this.listenTo(App, "render_board", this.remove.bind(this));
    this.$desc = this.$el.find(".description form");
  }
});