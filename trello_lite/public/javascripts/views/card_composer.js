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
    var $txt = this.$el.find(".card-composer-input");
    this.model.set("name", $txt.val());
    $txt.focus()
  },
  onCancel: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    this.trigger("card_composer_on_cancel", this.model.toJSON());
    this.remove();
    App.trigger("clear_popover");
  },
  onSave: function(e) {
    e.preventDefault();
    var $txt = this.$el.find(".card-composer-input");
    var newName = $txt.val().trim();
    if (newName) {
      this.model.set("name", newName);
      this.trigger("card_composer_on_save", this.model.toJSON());
      this.remove();
      App.trigger("clear_popover");
    }
  },
  onLabels: function(e) {
    e.preventDefault();
    new LabelsPopover({
      card: this.model,
      pos: Helper.adjustPosition(e, 30)
    });
  },
  render: function() {
    var json = this.model.toJSON();
    json.labels =  Helper.getLabelObjects(this.model.get("idLabels"));
    this.$el.html(this.template(json));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.model, "change remove", this.render.bind(this));
    this.listenTo(App.labels, "change update", this.render.bind(this));
  }
});