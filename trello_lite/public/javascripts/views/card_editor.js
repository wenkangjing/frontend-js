var CardEditorView = Backbone.View.extend({
  template: App.templates.card_editor,
  events: {
    "click .card-editor-close-btn": "closeEditor",
    "submit .card-editor-save": "saveName",
    "click .card-editor-labels": "popoverLabels",
    "click .card-editor-move": "popoverMove",
    "click .card-editor-copy": "popoverCopy",
    "click .card-editor-due-date": "popoverDuedate",
    "click .card-editor-archive": "archiveCard",
  },
  closeEditor: function(e) {
    e.preventDefault();
    if (App.popoverView) { 
      App.popoverView.remove(); 
      App.popoverView = null;
    }
    this.remove();
  },
  archiveCard: function(e) {
    App.trigger("delete_card", this.model.get("id"));
    App.cards.remove(this.model);
    this.closeEditor(e);
  },  
  saveName: function(e) {
    e.preventDefault();
    var name = this.$el.find("form").serializeArray()[0].value;
    this.model.set("name", name);
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
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));

    this.$el.html(this.template(json));
    this.$el.appendTo(App.$el);
    this.$desc = this.$el.find(".description form");
    App.popoverOpt.parent = this.$el.find(".card-modal"); // parent has been recreated
    if (App.popoverView) {
      App.popoverView.render();
    }
    this.delegateEvents();
  },
  initialize: function(opt) {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
    if (App.popoverView) {
      App.popoverView.remove();
      App.popoverView = null;
    }
    App.popoverOpt = {
      parent: this.$el.find(".card-editor"),
      idCard: this.model.get("id"),
    }
  }
});