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
    "click .card-modal-btn-link.card-modal-label": "popoverLabels",
    "click .card-modal-add-label": "popoverLabels",
    "click .card-modal-labels": "popoverLabels",
    // due date
    "click .card-modal-btn-link.card-modal-due-date": "popoverDuedate",
    // subscribe
    "click .card-modal-btn-link.card-modal-subscribe": "toggleSubscribe",
    // move 
    "click .card-modal-btn-link.card-modal-move": "popoverMove",
    // copy
   "click .card-modal-btn-link.card-modal-copy": "popoverCopy",
    // archive
    "click .card-modal-btn-link.card-modal-archive": "archiveCard",
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
    App.trigger("save_card", this.model.toJSON());
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
  toggleSubscribe: function(e) {
    e.preventDefault();
    var status = !this.model.get("subscribed");
    this.model.set("subscribed", status);
    App.trigger("save_card", this.model.toJSON());
  },
  popoverLabels: function(e) {
    e.preventDefault();
    App.trigger("popover_labels", _.extend(App.popoverOpt, {position: Helper.popoverPosition(e)}));
  },
  popoverDuedate: function(e) {
    e.preventDefault();
    App.trigger("popover_duedate", _.extend(App.popoverOpt, {position: Helper.popoverPosition(e)}));
  },
  popoverMove: function(e) {
    e.preventDefault();
    console.log("move");
  },   
  popoverCopy: function(e) {
    e.preventDefault();
    console.log("copy");
  }, 
  render: function() {
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    this.$el.html(this.template(json));
    this.$el.find(".card-modal").attr("data-id", this.model.id);
    this.$el.appendTo(App.$el);
    this.$desc = this.$el.find(".description form");
    App.popoverOpt = {
      parent: this.$el.find(".card-modal"),
      idCard: this.model.get("id"),
    }
    if (App.popoverView) {
      App.popoverView.render();
    }
    this.delegateEvents();
  },
  initialize: function(options) {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
    App.popoverOpt = {
      parent: this.$el.find(".card-modal"),
      idCard: this.model.get("id"),
    }
  }
});