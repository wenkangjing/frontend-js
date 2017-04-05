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
    if (App.popoverView) { 
      App.popoverView.remove(); 
      App.popoverView = null;
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
    var $f = this.$el.find(".comment form");
    var comment = $f.serializeArray()[0].value;
    App.trigger("save_comment", {
      content: comment,
      datetime: (new Date()).valueOf(),
      idCard: this.model.get("id")
    });
  },
  toggleSubscribe: function(e) {
    e.preventDefault();
    var status = !this.model.get("subscribed");
    this.model.set("subscribed", status);
    App.trigger("save_card", this.model.toJSON());
  },
  popoverLabels: function(e) {
    e.preventDefault();
    App.popoverOpt.position = Helper.popoverPosition(e);
    App.trigger("popover_labels");
  },
  popoverDuedate: function(e) {
    e.preventDefault();
    App.popoverOpt.position = Helper.popoverPosition(e);
    App.trigger("popover_duedate");
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
    // retrieve data
    var json = this.model.toJSON();
    json.activities = [];
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    var comments = Helper.getCommentsByCard(this.model.get("id"));
    comments = _(comments).sortBy(function(it) {
      return -it.datetime.valueOf();
    });
    if (comments.length > 0) {
      json.activities = json.activities.concat(comments);
    }

    // build html
    this.$el.html(this.template(json));
    this.$el.find(".card-modal").attr("data-id", this.model.id);
    this.$el.appendTo(App.$el);
    this.$desc = this.$el.find(".description form");
    App.popoverOpt.parent = this.$el.find(".card-modal"); // parent has been recreated
    if (App.popoverView) {
      App.popoverView.render();
    }
    this.delegateEvents();
  },
  initialize: function(options) {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.comments, "change update", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
    App.popoverView = null;
    App.popoverOpt = {
      parent: this.$el.find(".card-modal"),
      idCard: this.model.get("id"),
    }
  }
});