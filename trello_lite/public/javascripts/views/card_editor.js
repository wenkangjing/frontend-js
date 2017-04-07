var CardEditorView = Backbone.View.extend({
  template: App.templates.card_editor,
  events: {
    "click .card-editor": "close", // parent
    "click .card-editor-save": "saveName",
    "click .card-editor-labels": "popoverLabels",
    "click .card-editor-move": "popoverMove",
    "click .card-editor-copy": "popoverCopy",
    "click .card-editor-due-date": "popoverDuedate",    
    "click .card-editor-subscribe": "toggleSubscribe",
    "click .card-editor-archive": "archiveCard",
  },
  close: function(e) {
    var $e = $(e.target);
    if ($e.hasClass("card-editor") || $e.hasClass("card-editor-close-btn")) {
      e.preventDefault();
      PopoverUtil.closeCurrent();
      this.remove();
    }
  },
  archiveCard: function(e) {
    App.trigger("delete_card", this.model.get("id"));
    App.cards.remove(this.model);
    PopoverUtil.closeCurrent();
    this.remove();
  },  
  saveName: function(e) {
    e.preventDefault();
    var name = this.$el.find(".card-editor-input").val();
    this.model.set("name", name);
    App.trigger("save_card", this.model.toJSON());
    this.remove();
  },
  toggleSubscribe: function(e) {
    e.preventDefault();
    var status = !this.model.get("subscribed");
    this.model.set("subscribed", status);
    App.trigger("save_card", this.model.toJSON());
  },
  popoverLabels: function(e) {
    e.preventDefault();
    PopoverUtil.labels({
      idCard: this.model.get("id"),
      pos: PopoverUtil.getPosition(e)
    });
  },
  popoverDuedate: function(e) {
    e.preventDefault();
    PopoverUtil.duedate({
      idCard: this.model.get("id"),
      pos: PopoverUtil.getPosition(e)
    });
  },
  popoverMove: function(e) {
    e.preventDefault();
    PopoverUtil.move();
  },   
  popoverCopy: function(e) {
    e.preventDefault();
    PopoverUtil.copy();
  },   
  render: function() {
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));

    this.$el.html(this.template(json));
    var windowWidth = $(document.body).innerWidth();
    var horizontalAdjust = 0;
    if (this.pos.left + 410 > windowWidth) {
      this.$el.find(".card-editor-ops").addClass("left");
      horizontalAdjust = -160;
    } 
    this.$el.find(".card-editor-body").css({
      top: this.pos.top,
      left: this.pos.left + horizontalAdjust
    });
    this.$el.appendTo(App.$el);
    this.delegateEvents();
    PopoverUtil.renderCurrent();
  },
  initialize: function(opt) {
    this.pos = opt.pos;
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
    PopoverUtil.closeCurrent();
  }
});