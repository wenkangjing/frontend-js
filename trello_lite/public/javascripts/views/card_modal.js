var CardModalView = Backbone.View.extend({
  template: App.templates.card_modal,
  events: {
    "click .overlay": "close",
    // description
    "click .description .card-modal-edit-description": "editDescription",
    "click .description .card-modal-create-description": "editDescription",
    "click .description .description-close-btn": "closeDescription",
    "submit .description": "saveDescription",
    // comment
    "submit .comment": "addComment",
    // labels
    "click .labels .card-modal-label": "clickLabels",
    "click .labels .card-modal-add-label": "clickLabels",
    "click sidebar .card-modal-labels": "clickLabels",
    // due date
    "click .card-modal-btn-link.card-modal-due-date": "clickDuedate",
    // subscribe
    "click .card-modal-btn-link.card-modal-subscribe": "toggleSubscribe",
    // move 
    "click .card-modal-btn-link.card-modal-move": "clickMove",
    // copy
   "click .card-modal-btn-link.card-modal-copy": "clickCopy",
    // archive
    "click .card-modal-btn-link.card-modal-archive": "clickArchive",
  },
  close: function(e) {
    var $e = $(e.target);
    if ($e.hasClass("overlay") || $e.hasClass("dialog-close-btn")) {
      e.preventDefault();
      PopoverUtil.closeCurrent();
      this.remove();
      App.goto("/");
    }
  },
  clickArchive: function(e) {
    App.trigger("client_delete_card", this.model.get("id"));
    App.cards.remove(this.model);
    PopoverUtil.closeCurrent();
    this.remove();
    App.goto("/");
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
    App.trigger("client_save_card", this.model.toJSON());
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
    App.trigger("client_save_comment", {
      comment: comment,
      idCard: this.model.get("id")
    });
  },
  toggleSubscribe: function(e) {
    e.preventDefault();
    var status = !this.model.get("subscribed");
    this.model.set("subscribed", status);
    App.trigger("client_save_card", this.model.toJSON());
  },
  clickLabels: function(e) {
    e.preventDefault();
    PopoverUtil.labels({
      card: this.model,
      pos: PopoverUtil.adjustPosition(e, 37)
    });
  },
  clickDuedate: function(e) {
    e.preventDefault();
    PopoverUtil.duedate({
      card: this.model,
      pos: PopoverUtil.adjustPosition(e, 37)
    });
  },
  clickMove: function(e) {
    e.preventDefault();
    console.log("move");
  },   
  clickCopy: function(e) {
    e.preventDefault();
    console.log("copy");
  }, 
  render: function() {
    // retrieve data
    var json = this.model.toJSON();
    json.activities = [];
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    var activities = Helper.getActivitiesByCard(this.model.get("id"));
    if (activities.length > 0) {
      json.activities = json.activities.concat(activities);
    }
    // build html
    this.$el.html(this.template(json));
    this.$el.find(".card-modal").attr("data-id", this.model.id);
    this.$el.appendTo(App.$el);
    this.$desc = this.$el.find(".description form");
    this.delegateEvents();
    PopoverUtil.renderCurrent();
  },
  initialize: function(options) {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.activities, "change update", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
  }
});