var CardEditorView = Backbone.View.extend({
  template: App.templates.card_editor,
  events: {
    "keyup .card-editor-input": "onTyping",
    "click .card-editor": "onClose", // parent
    "click .card-editor-save": "onSaveName",
    "click .card-editor-labels": "onLabels",
    "click .card-editor-move": "onMove",
    "click .card-editor-copy": "onCopy",
    "click .card-editor-due-date": "onDuedate",
    "click .card-editor-subscribe": "toggleSubscribe",
    "click .card-editor-archive": "onArchive",
  },
  onClose: function(e) {
    var $e = $(e.target);
    if ($e.hasClass("card-editor") || $e.hasClass("card-editor-close-btn")) {
      e.preventDefault();
      this.uninitialize();
    }
  },
  onArchive: function(e) {
    App.trigger("client_delete_card", this.model.get("id"));
    App.cards.remove(this.model);
    this.uninitialize();
  },
  onTyping: function(e) {
    this.autogrow();
  },

  onSaveName: function(e) {
    e.preventDefault();
    var name = this.$el.find(".card-editor-input").val();
    this.model.set("name", name);
    App.trigger("client_save_card", this.model.toJSON());
    this.uninitialize();
  },
  toggleSubscribe: function(e) {
    e.preventDefault();
    var status = !this.model.get("subscribed");
    this.model.set("subscribed", status);
    App.trigger("client_save_card", this.model.toJSON());
  },
  onLabels: function(e) {
    e.preventDefault();
    new LabelsPopover({
      card: this.model,
      pos: Helper.adjustPosition(e, 35)
    });
  },
  onDuedate: function(e) {
    e.preventDefault();
    new DueDatePopover({
      card: this.model,
      pos: Helper.adjustPosition(e, 35)
    });
  },
  onMove: function(e) {
    e.preventDefault();
    this.movePopover = new CardMovePopover({
      card: this.model,
      pos: Helper.adjustPosition(e, 35)
    });
    this.listenTo(this.movePopover, "close", this.remove.bind(this));
  },
  onCopy: function(e) {
    e.preventDefault();
    this.copyPopover = new CardCopyPopover({
      card: this.model,
      pos: Helper.adjustPosition(e, 35)
    });
    this.listenTo(this.copyPopover, "close", this.remove.bind(this));
  },   
  autogrow: function() {
    var $input = this.$el.find(".card-editor-input");
    var $hiddendiv = this.$el.find(".card-editor-input-hiddendiv");
    $hiddendiv.text($input.val());
    $input.css('height', $hiddendiv.height());
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
    this.autogrow();
    this.delegateEvents();
  },
  uninitialize: function() {
    this.remove();
    App.trigger("clear_popover");
  },
  initialize: function(opt) {
    this.pos = opt.pos;
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    this.listenTo(App, "render_board", this.remove.bind(this));
  }
});