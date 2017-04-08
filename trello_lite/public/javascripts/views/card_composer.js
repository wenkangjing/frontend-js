var CardComposerView = Backbone.View.extend({
  template: App.templates.card_composer,
  events: {
    "blur .card-composer-input": "onName",
    "mousedown .card-composer-cancel": "onCancel",
    "mousedown .card-composer-confirm": "onSave",
    "mousedown .card-composer-options": "onLabels",
  },  
  onName: function(e) {
    e.preventDefault();
    PopoverUtil.closeCurrent();
    var $txt = this.$el.find(".card-composer-input");
    this.model.set("name",  $txt.val());
    $txt.focus()
  },
  onCancel: function(e) {
    e.preventDefault();
    PopoverUtil.closeCurrent();
    var $e = $(e.target);
    this.trigger("card_composer_on_cancel", this.model.toJSON());
    this.remove();
  },
  onSave: function(e) {
    e.preventDefault();
    PopoverUtil.closeCurrent();
    var $txt = this.$el.find(".card-composer-input");
    var newName = $txt.val().trim();
    if (newName) {
      this.model.set("name", newName);
      this.trigger("card_composer_on_save", this.model.toJSON());
      this.remove();
    }
  },
  onLabels: function(e) {
    e.preventDefault();
    PopoverUtil.labels({
      card: this.model,
      pos: PopoverUtil.adjustPosition(e, 30)
    });
  },
  buildEvents: function() {
    this.$el.find(".card-composer-input").off().on("blur", this.onName.bind(this))
    this.$el.find(".card-composer-cancel").off().on("click", this.onCancel.bind(this));
    this.$el.find(".card-composer-confirm").off().on("click", this.onSave.bind(this));
    this.$el.find(".card-composer-options").off().on("click", this.onLabels.bind(this));
  },
  render: function() {
    PopoverUtil.renderCurrent();
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    this.$el.html(this.template(json));
    //this.buildEvents();
  },
  initialize: function() {
    this.render();
    //this.buildEvents();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
    PopoverUtil.closeCurrent();
  }
});