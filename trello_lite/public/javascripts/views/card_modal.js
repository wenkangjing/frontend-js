var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    "click .dialog-close-btn": "closeModal",
    // description
    "click .description .card-modal-edit-description": "editDescription",
    "click .description .card-modal-create-description": "editDescription",
    "click .description .description-close-btn": "closeDescription",
    "submit .description": "saveDescription",
    // comment
    "submit .comment": "addComment",
    // labels
    "click .card-modal-label": "labelsPopover",
    "click .card-modal-add-label": "labelsPopover",
    "click .card-modal-labels": "labelsPopover",
    // archive
    "click .card-modal-archive": "archiveCard",
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
    var description = this.$desc.serializeArray()[0].value;
    this.model.set("description", description);
    this.$desc.prev().show();
    this.$desc.hide();
  },
  closeDescription: function(e) {
    e.preventDefault();
    this.$desc.get(0).reset();
    this.$desc.prev().show();
    this.$desc.hide();
  },
  addComment: function(e) {
    e.preventDefault();
    console.log("add comment");
  },
  labelsPopover: function(e) {
    e.preventDefault();
    if (App.popover) { 
      App.popover.remove(); 
    }
    App.popover = new LabelsPopover({
      parent: this.$el.find(".card-modal"),
      position: this.popoverPosition(e),
      card: this.model,
      collection: App.labels
    });
  },
  popoverPosition: function(e) {
    var pos = $(e.currentTarget).position();
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
    this.$desc = this.$el.find(".description form");
    if (App.popover) {
      App.popover.parent = this.$el.find(".card-modal");
      App.popover.render();
    }
    this.delegateEvents();
  },
  initialize: function(options) {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(this.model, "change", App.trigger.bind(App, "save_card", this.model));
    this.listenTo(App, "render_board", this.remove.bind(this));

  }
});